<?php

namespace App\Http\Controllers;

use Auth, DB, Log, DateTime;
use App\Services\AnexoService;
use App\Models\PublicacaoAnexo;
use App\Models\Publicacao;
use Illuminate\Http\Request;
use File;

class NoticiaController extends Controller
{
    /**
     * Tela de listagem de notícias.
     */
    public function lista()
    {
        return view('noticia.lista');
    }

    /**
     * Tela de cadastro de notícias.
     */
    public function cadastro($id = null)
    {
        $data = ['id' => $id];

        return view('noticia.cadastro', $data);
    }

	/**
	 * Tela de pré-visualização da notícias.
	 */
	public function preview($id)
	{
		$publicacao = Publicacao::where(function($query) {
                    $query->where('pub_tipo', 'NOT')
                          ->orWhere('pub_tipo', 'BOL');
                })
        ->with(['categorias'])->findOrFail($id);
		$anexo = $publicacao->anexo;

		$publicacao = $publicacao->toArray();

		if($anexo) {
			$path_info = pathinfo($anexo->ane_arquivo);
			$publicacao['pub_midia_p'] = url( $path_info['dirname'] . '/' . $path_info['filename'] . '_p.' . $path_info['extension'] );
			$publicacao['pub_midia_g'] = url( $path_info['dirname'] . '/' . $path_info['filename'] . '_g.' . $path_info['extension'] );
		}

		$data = ['publicacao' => $publicacao];

		return view('noticia.preview', $data);
	}

    /**
     * API: Listar notícias.
     */
    public function index(Request $request)
    {
        $table     = $request->input('table', true);
        $limit     = $request->input('limit', 20);
        $page      = $request->input('page', 1);
        $orderBy   = $request->input('orderBy', 'pub_data_cadastro');
        $ascending = $request->input('ascending', 0);

        $data = Publicacao::where(function($query) {
                    $query->where('pub_tipo', 'NOT')
                          ->orWhere('pub_tipo', 'BOL');
                })
                ->with('categorias');

	    // Filtros
        if ($request->has('query')) {
	        $filters = json_decode($request->input('query'));
            
	        if (!empty($filters->pub_data_cadastro)) {
                $date = DateTime::createFromFormat('Y-m-d', $filters->pub_data_cadastro);
		        $data->whereRaw("DATE(pub_data_cadastro) = '".$date->format('Y-m-d')."'");
	        }
            
	        if (!empty($filters->tipo_categoria_publicacao_id)) {
                $data->whereHas('categorias', function ($query) use ($filters) {
                    $query->where('publicacao_categoria.tipo_categoria_publicacao_id', $filters->tipo_categoria_publicacao_id);
		        });
	        }
            
	        if (!empty($filters->pub_status)) {
                $data->where('pub_status', $filters->pub_status);
	        }

            if (!empty($filters->pub_tipo)) {
                $data->where('pub_tipo', $filters->pub_tipo);
            }

            if ($filters->text) {
                $search_term = '%'.$filters->text.'%';
                $data->where(function($query) use ($search_term) {
                    $query->where('pub_titulo', 'LIKE', $search_term)
                          ->orWhere('pub_conteudo', 'LIKE', $search_term)
                          ->orWhere('pub_resumo', 'LIKE', $search_term);
                });
            }
        }
        
        if($table) {
            // Quantidade total
            $count = $data->count();

            // Limite
            $data->limit($limit)->skip($limit * ($page - 1));
        }

        // Ordenacao
        $direction = $ascending == 1 ? "ASC" : "DESC";
        $data->orderBy($orderBy, $direction);

        $result = $data->get()->toArray();

        if($table) {
            return $this->success([ 'items' => $result, 'count' => $count ]);
        }

        return $this->success($result);
    }

    /**
     * API: Cadastrar notícia.
     */
    public function store(Request $request)
    {
        // Validação
        $this->validateRequest($request);

	    // Usuário
	    $usuario = Auth::user();

        DB::beginTransaction();

        try {
            $publicacao = Publicacao::create([
                'autor_id'       => $usuario->usuario_id,
                'pub_tipo'       => $request->pub_tipo,
                'pub_titulo'     => strip_tags($request->pub_titulo),
                'pub_conteudo'   => $request->input('pub_conteudo'),
                'pub_resumo'     => $request->input('pub_resumo'),
                'pub_status'     => $request->input('pub_status', 'RAS'),
                'pub_data_visivel' => ($request->input('pub_data_visivel') == 'null' ? null : $request->input('pub_data_visivel')),
            ]);

	        $midia = $request->file('pub_midia');
	        $anexo = AnexoService::gerarAnexoPublico($midia);

	        if($anexo) {
		        $publicacao->anexo_id = $anexo->anexo_id;
		        $publicacao->save();
	        }

            $categorias = $request->input('tipo_categoria_publicacao_id');
	        $categorias = $categorias ? explode(',', $categorias) : [];
	        $publicacao->categorias()->sync($categorias);

            DB::commit();
        }
        catch(\Exception $e) {
            DB::rollback();
            Log::error($e);
            return $this->error($e->getMessage(), 500, $e);
        }

        $path = storage_path().'/files/'.$request->pub_titulo;
        File::isDirectory($path) or File::makeDirectory($path, 0777, true, true);
        $path = '/files/'.$request->pub_titulo;
        
        $files = $request->except('pub_titulo', 'pub_conteudo', 'pub_status', 'pub_ordem_menu', 'pub_menu_lateral');
        $anexos = [];
        for ($i=0; $i < count($files) ; $i++) {
            if ($request->hasFile('files'.$i)) {
                DB::beginTransaction();
                
                try {
                    $fileName = $request->file('files'.$i)->getClientOriginalName().time().'.'.$request->file('files'.$i)->getClientOriginalExtension();
                    $request->file('files'.$i)->move(storage_path($path), $fileName);
                    $file_mime = $request->file('files'.$i)->getClientMimeType();
                    $anexo =  PublicacaoAnexo::create([
                        'pub_id'                  =>    $publicacao->publicacao_id,
                        'pub_anexo_endereco'      =>    $path.'/'.$fileName,
                        'pub_anexo_nome'          =>    $fileName,
                        'ane_mime'                =>    $file_mime,
                    ]);
                    $anexos[$anexo->pub_anexo_id] = (object) ['pub_anexo_id' => $anexo->pub_anexo_id, 'pub_anexo_nome' => $fileName];
                    DB::commit();
                }
                catch(\Exception $e) {
                    DB::rollback();
                    Log::error($e);
                    $publicacao->delete();
                    return $this->error($e->getMessage(), 500, $e);
                }
            }
        }
        return $this->success($publicacao);
    }

    /**
     * API: Exibir notícia.
     */
    public function show(Request $request, $id)
    {
        $data = Publicacao::where(function($query) {
                    $query->where('pub_tipo', 'NOT')
                          ->orWhere('pub_tipo', 'BOL');
                })
                ->with(['categorias'])
                ->findOrFail($id);

        $anexo = $data->anexo;

        if($anexo) {
        	$path_info = pathinfo($anexo->ane_arquivo);
        	$data->pub_midia_p = url( $path_info['dirname'] . '/' . $path_info['filename'] . '_p.' . $path_info['extension'] );
        	$data->pub_midia_g = url( $path_info['dirname'] . '/' . $path_info['filename'] . '_g.' . $path_info['extension'] );
        }

        return $this->success($data);
    }

    /**
     * API: Atualizar notícia.
     */
    public function update(Request $request, $id)
    {
	    $publicacao = Publicacao::where(function($query) {
                    $query->where('pub_tipo', 'NOT')
                          ->orWhere('pub_tipo', 'BOL');
                })
                ->findOrFail($id);

    	// Validação
        $this->validateRequest($request);
        
        // Trata os anexos
		$path = '/files/' . $request->pub_titulo;
		File::isDirectory($path) or File::makeDirectory($path, 0777, true, true);

		$files = $request->except('pub_titulo', 'pub_conteudo', 'pub_status', 'pub_ordem_menu', 'pub_menu_lateral');
		$anexos = [];
		for ($i = 0; $i < count($files); $i++) {
			if ($request->hasFile('files' . $i)) {

				$fileName = $request->file('files' . $i)->getClientOriginalName();
				$request->file('files' . $i)->move(storage_path($path), $fileName);
				$file_mime = $request->file('files' . $i)->getClientMimeType();

				DB::beginTransaction();

				try {
					$anexo =  PublicacaoAnexo::create([
						'pub_id'                  =>    $publicacao->publicacao_id,
						'pub_anexo_endereco'      =>    $path . '/' . $fileName,
						'pub_anexo_nome'          =>    $fileName,
						'ane_mime'                =>    $file_mime,
					]);
					$anexos[$anexo->pub_anexo_id] = (object) ['pub_anexo_id' => $anexo->pub_anexo_id, 'pub_anexo_nome' => $fileName];
					DB::commit();
				} catch (\Exception $e) {
					DB::rollback();
					Log::error($e);
					return $this->error($e->getMessage(), 500, $e);
				}
			}
		}

        DB::beginTransaction();

        try {
            $publicacao->pub_tipo     = $request->pub_tipo;
            $publicacao->pub_titulo   = strip_tags($request->pub_titulo);
            $publicacao->pub_conteudo = $request->input('pub_conteudo');
            $publicacao->pub_data_visivel = ($request->input('pub_data_visivel') == 'null' ? null : $request->input('pub_data_visivel'));
            $publicacao->pub_resumo   = $request->input('pub_resumo');
            $publicacao->pub_status   = $request->input('pub_status', 'RAS');
            $publicacao->save();

	        // Atualizar mídia
	        $midia = $request->file('pub_midia');
	        $anexo = $publicacao->anexo;

	        if($midia) {
				// Remover anexo antigo, se existir
				if($anexo) {
					AnexoService::removerAnexoPublico($anexo);
				}

				// Gerar novo anexo
				$anexo_novo = AnexoService::gerarAnexoPublico($midia);

		        if($anexo_novo) {
			        $publicacao->anexo_id = $anexo_novo->anexo_id;
			        $publicacao->save();
		        }
	        }
	        else if(filter_var($request->input('remove_image'), FILTER_VALIDATE_BOOLEAN)) {
		        // Remover anexo antigo, se existir
		        if($anexo) {
			        AnexoService::removerAnexoPublico($anexo);
		        }
	        }

	        $categorias = $request->input('tipo_categoria_publicacao_id');
	        $categorias = $categorias ? explode(',', $categorias) : [];
            $publicacao->categorias()->sync($categorias);

            DB::commit();
        }
        catch(\Exception $e) {
            DB::rollback();
            Log::error($e);
            return $this->error($e->getMessage(), 500, $e);
        }

        return $this->success($publicacao);
    }

	/**
	 * AJAX: Excluir notícia.
	 */
	public function destroy(Request $request, $id)
	{
		$noticia = Publicacao::where('pub_tipo', 'NOT')
                                ->orWhere('pub_tipo', 'BOL')
                                ->findOrFail($id);

		if($noticia->pub_fixa == 'S') {
			return $this->error('Não é possível remover uma publicação fixa. Para ocultá-la altere seu Status para Rascunho.', 400);
        }
        
        $anexos = PublicacaoAnexo::where('pub_id', $noticia->id)->get();

        foreach ($anexos as $anexo) {
            $path = storage_path($anexo->pub_anexo_endereco);

			File::Delete($path);

			$anexo->delete();
        }

		$noticia->delete();

		return $this->success();
	}

	/**
	 * Validação para store e update.
	 */
    private function validateRequest(Request $request)
    {
        $rules = [
            'pub_titulo' => 'required|min:3|max:200',
            'pub_status' => 'required|in:RAS,PUB',
	        'pub_midia'  => 'file|max:10240|mimetypes:image/jpeg,image/png',
        ];

        $messages = [
            'pub_titulo.min' => 'O título deve ter pelo menos 3 caracteres.',
            'pub_midia.max' => 'O tamanho máximo permitido é de 10 megabytes.',
            'pub_midia.mimetypes' => 'O arquivo deve ser uma imagem no formato JPG ou PNG.',
        ];

        $this->validate($request, $rules, $messages);
    }
}
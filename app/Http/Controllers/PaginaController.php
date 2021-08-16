<?php

namespace App\Http\Controllers;

use Auth, DB, Log;
use App\Services\AnexoService;
use App\Models\Publicacao;
use App\Models\PublicacaoAnexo;
use Illuminate\Http\Request;
use File;

class PaginaController extends Controller
{
    /**
     * Tela de listagem de páginas.
     */
    public function lista()
    {
        return view('pagina.lista', ['servico' => boolval(request()->servico)]);
    }

    /**
     * Tela de cadastro de páginas.
     */
    public function cadastro($id = null)
    {
        $data = [
			'id' => $id, 
			'accordion' => boolval(request()->accordion),
			'redirect' => boolval(request()->redirect),
			'servico' => boolval(request()->servico)
		];
        return view('pagina.cadastro', $data);
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

		$data = Publicacao::select('publicacao_id', 
		'autor_id',
		'pub_tipo',
		'pub_titulo',
		'pub_descricao',
		'pub_url',
		'pub_resumo',
		'pub_status',
		'pub_ordem_menu',
		'pub_menu_lateral',
		'pub_data_visivel',
		'tipo_categoria_servico_id')
		->where('pub_tipo', !boolval(request()->servico) ? 'PAG' : 'SER');

		if (boolval(request()->servico))
			$data = $data->whereNotNull('tipo_categoria_servico_id', '<>', null);
		
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
            if ($filters->text) {
                $search_term = '%'.$filters->text.'%';
                $data->where(function($query) use ($search_term) {
                    $query->where('pub_titulo', 'LIKE', $search_term)
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
	 * API: Cadastrar página.
	 */
	public function store(Request $request)
	{
		// dd($request);
		// Validação
		$this->validateRequest($request);

		// Usuário
		$usuario = Auth::user();


		DB::beginTransaction();

		try {
			$publicacao = Publicacao::create([
				'autor_id'         => $usuario->usuario_id,
				'pub_tipo'         => !boolval(request()->servico) ? 'PAG' : 'SER',
				'pub_titulo'       => $request->pub_titulo,
				'pub_descricao'       => $request->pub_descricao,
				'pub_url'       => $request->pub_url,
				'pub_conteudo'     => $request->pub_conteudo,
				'pub_status'       => $request->pub_status,
				'pub_ordem_menu'   => $request->pub_ordem_menu,
				'pub_menu_lateral' => ( $request->pub_menu_lateral == "true" ? 'S' : 'N' ),
				'tipo_categoria_servico_id' => $request->tipo_categoria_servico_id,
				'pub_data_visivel' => ($request->input('pub_data_visivel') == 'null' ? null : $request->input('pub_data_visivel')),
			]);

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

		if (!boolval(request()->accordion)) return $this->success($publicacao);
		
		// Passos Extras caso seja um accordion list
		$conteudo = [(object) ['titulo' => $request->pub_item_titulo, 'conteudo' => $request->pub_conteudo, 'anexos' => $anexos]];
		DB::beginTransaction();
		try
		{
			$publicacao->pub_conteudo = json_encode($conteudo);
			$publicacao->save();
			DB::commit();
			return $this->success($publicacao);
		} catch (\Exception $e) {
			DB::rollback();
			Log::error($e);
			$publicacao->delete();
			return $this->error($e->getMessage(), 500, $e);
		}
	}

	/**
	 * API: Exibir página.
	 */
	public function show(Request $request, $id)
	{
		$data = Publicacao::where('pub_tipo', !boolval(request()->servico) ? 'PAG' : 'SER')
			->with(['categorias'])
			->with(['tipoServico'])
			->findOrFail($id);

		return $this->success($data);
	}

	private function getItem($accordion, $index)
	{
		$index = explode('-', $index);
		$item = $accordion[$index[0]];

		for ($i=1; $i < count($index); $i++) { 
			$item = $item['subitens'][$index[$i]];
		}
		
		return $item;
	}

	private function getParentIndex($index)
	{
		if (substr_count($index, "-") == 0) return null;
		$explIndex = explode('-', $index);
		return implode("-", array_slice($explIndex, 0, count($explIndex) - 1));
	}

	private function getChildIndex($index)
	{
		if (substr_count($index, "-") == 0) return null;
		$explIndex = explode('-', $index);
		return $explIndex[count($explIndex) - 1];
	}

	private function setItem(&$accordion, $index, $item)
	{
		if (substr_count($index, "-") == 0){
			$accordion[$index] = $item;
			return;
		}

		$childIndex = $this->getChildIndex($index);
		$parentIndex = explode('-', $this->getParentIndex($index));
		$parentItem = &$accordion[$parentIndex[0]];

		for ($i=1; $i < count($parentIndex); $i++) { 
			$parentItem = &$parentItem['subitens'][$parentIndex[$i]];
		}
		
		$parentItem['subitens'][$childIndex] = $item;
	}

	/**
	 * API: Atualizar página.
	 */
	public function update(Request $request, $id)
	{
		// dd($request);
		$publicacao = Publicacao::where('pub_tipo', !boolval(request()->servico) ? 'PAG' : 'SER')->findOrFail($id);

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
			$pub_menu_lateral = $request->input('pub_menu_lateral', false);

			$publicacao->pub_titulo       = strip_tags($request->pub_titulo);
			$publicacao->pub_descricao    = $request->pub_descricao;
			$publicacao->tipo_categoria_servico_id = $request->tipo_categoria_servico_id;
			$publicacao->pub_url          = $request->pub_url;
			$publicacao->pub_status       = $request->input('pub_status');
			$publicacao->pub_data_visivel = ($request->input('pub_data_visivel') == 'null' ? null : $request->input('pub_data_visivel'));
			$publicacao->pub_ordem_menu   = $request->input('pub_ordem_menu');
			$publicacao->pub_menu_lateral = ($pub_menu_lateral == 'true' ? 'S' : 'N');
			
			// Passos Extras caso seja um accordion list
			if (boolval(request()->accordion)) {
				$conteudo = (object) [
					'titulo' => $request->pub_item_titulo, 
					'conteudo' => $request->pub_conteudo, 
					'anexos' => $anexos,
					'subitens' => [],
				];
				$accordion = $publicacao->accordion;

				// Edita item
				// dd($request);
				if ($request->pub_item_index != null) {
					// dd(json_encode($accordion));
					$item = $this->getItem($accordion, $request->pub_item_index);//$accordion[$request->pub_item_index];
					// dd(json_encode($item));
					$itemAnexos = isset($item['anexos']) ? $item['anexos'] : [];
					$item['anexos'] = array_merge($itemAnexos, $anexos);
					$item['conteudo'] = $request->pub_conteudo;
					$item['titulo'] = $request->pub_item_titulo;
					// $accordion[$request->pub_item_index] = $item;
					$this->setItem($accordion, $request->pub_item_index, $item);
					// dd(json_encode($accordion));
				}
				// Insere subitem
				else if ($request->parent_item_index != null){
					$parent = $this->getItem($accordion, $request->parent_item_index);
					$subitens = isset($parent['subitens']) ? $parent['subitens'] : [];
					$parent['subitens'] = array_merge($subitens, [$conteudo]);
					$this->setItem($accordion, $request->parent_item_index, $parent);
				} 
				// Insere item
				else {
					array_push($accordion, $conteudo);
				}

				$publicacao->pub_conteudo = json_encode($accordion);
			} else {
				$publicacao->pub_conteudo = $request->input('pub_conteudo');
			}
			$publicacao->save();
			
			$categorias = $request->input('tipo_categoria_publicacao_id');
			$categorias = $categorias ? explode(',', $categorias) : [];
			$publicacao->categorias()->sync($categorias);

			if (!empty($categorias)) {
				Publicacao::select('publicacao.*')
					->join('publicacao_categoria', 'publicacao.publicacao_id', 'publicacao_categoria.publicacao_id')
					->join('tipo_categoria_publicacao', 'publicacao_categoria.tipo_categoria_publicacao_id', 'tipo_categoria_publicacao.tipo_categoria_publicacao_id')
					->where('publicacao.pub_tipo', 'PAG')
					->where('tipo_categoria_publicacao.tipo_categoria_publicacao_id', $categorias[0])
					->update(['pub_ordem_menu' => $request->input('pub_ordem_menu')]);
			}
			
			DB::commit();
		} catch (\Exception $e) {
			DB::rollback();
			Log::error($e);
			return $this->error($e->getMessage(), 500, $e);
		}
		
		// dd($publicacao->categorias);
		return $this->success($publicacao);
	}

	/**
	 * AJAX: Excluir página.
	 */
	public function destroy(Request $request, $id)
	{
		$pagina = Publicacao::where('pub_tipo', !boolval(request()->servico) ? 'PAG' : 'SER')->findOrFail($id);

		if($pagina->pub_fixa == 'S') {
			return $this->error('Não é possível remover uma página fixa. Para ocultá-la altere seu Status para Rascunho.', 400);
		}

		$anexos = PublicacaoAnexo::where('pub_id', $pagina->id)->get();

        foreach ($anexos as $anexo) {
            $path = storage_path($anexo->pub_anexo_endereco);

			File::Delete($path);

			$anexo->delete();
        }

		$pagina->delete();

		return $this->success();
	}

	public function anexos(Request $request, $id)
	{
		$data = PublicacaoAnexo::where('pub_id', $id)->get();

		return $this->success($data);
	}

	/** ATENÇÂO! Não remove os anexos do vetor anexos. Usar apenas quando for excluir o item */
	private function removerAnexosItem($item)
	{
		if (isset($item['anexos'])) {
			foreach ($item['anexos'] as $key => $att) {
				$anexo = PublicacaoAnexo::find($att['pub_anexo_id']);
				$path = storage_path($anexo->pub_anexo_endereco);
	
				File::Delete($path);
	
				$anexo->delete();
			}
		}
		if (isset($item['subitens'])) {
			foreach ($item['subitens'] as $subitem) {
				$this->removerAnexosItem($subitem);
			}
		}
	}

	public function removerItem(Request $request, $id, $index)
	{
		DB::beginTransaction();
		try {
			$publicacao = Publicacao::findOrFail($id);
			$accordion = $publicacao->accordion;
			if (!$accordion) return;

			// $parent = $this->getItem($accordion, $request->parent_item_index);
			// $subitens = isset($parent['subitens']) ? $parent['subitens'] : [];
			// $parent['subitens'] = array_merge($subitens, [$conteudo]);
			// $this->setItem($accordion, $request->parent_item_index, $parent);

			$item = $this->getItem($accordion, $index);//$accordion[$index];
			$this->removerAnexosItem($item);
			
			$parentIndex = $this->getParentIndex($index);
			if ($parentIndex != null) {
				$parent = $this->getItem($accordion, $parentIndex);
				$childIndex = $this->getChildIndex($index);
				// dd(json_encode($parent));
				unset($parent['subitens'][$childIndex]);
				// dd(json_encode($parent));
				$this->setItem($accordion, $parentIndex, $parent);
			} else {
				unset($accordion[$index]);
			}
			if (count($accordion) == 0 && $publicacao->pub_fixa != 'S') {
				$publicacao->delete();
				DB::commit();
				return $this->success(['delete' => true]);
			}

			$publicacao->pub_conteudo = json_encode(array_values($accordion));
			$publicacao->save();

			DB::commit();

			return $this->success(['delete' => false]);
		}
		catch(\Exception $e) {
			DB::rollback();
			Log::error($e);
			return $this->error($e->getMessage(), 500, $e);
		}
	}

	private function findItemAnexo($item, $id)
	{
		if (isset($item['anexos'][$id]))
			return $item;
		
		if (isset($item['subitens'])) {
			foreach ($item['subitens'] as $subitem) {
				$this->findItemAnexo($subitem, $id);
			}
		}
	}

  	public function removerAnexos(Request $request, $id)
	{
		// dd($request->index);
		DB::beginTransaction();
		try {
			$anexo = PublicacaoAnexo::where('pub_anexo_id', $id)->first();
			$pubId = $anexo ? $anexo->pub_id : $request->pub;
			$publicacao = Publicacao::findOrFail($pubId);

			$accordion = $publicacao->accordion;
			if ($accordion) {
				$item = $this->getItem($accordion, $request->index);
				foreach ($item['anexos'] as $key => $itemAnexo) {
					if ($itemAnexo['pub_anexo_id'] == $id) {
						unset($item['anexos'][$key]);
						break;
					}
				}
				$this->setItem($accordion, $request->index, $item);
				$publicacao->pub_conteudo = json_encode(array_values($accordion));
				$publicacao->save();
			}

			if ($anexo) {
				$path = storage_path($anexo->pub_anexo_endereco);
	
				File::Delete($path);
	
				$anexo->delete();
			}


			DB::commit();

			return $this->success();
		}
		catch(\Exception $e) {
			DB::rollback();
			Log::error($e);
			return $this->error($e->getMessage(), 500, $e);
		}
	}

  	public function exibirAnexo(Request $request, $id)
	{
		// Buscar anexo
		$anexo = PublicacaoAnexo::where('pub_anexo_id', $id)->first();

		return AnexoService::exibirAnexoPublicacao($anexo);
	}

	/**
	 * Validação para store e update.
	 */
	private function validateRequest(Request $request)
	{
		$rules = [
			'pub_titulo'       => 'required|min:3|max:200',
			'pub_status'       => 'required|in:RAS,PUB',
			'pub_ordem_menu'   => 'required|integer|min:0',
		];

		$messages = [
			'pub_titulo.min' => 'O título deve ter pelo menos 3 caracteres.',
			'pub_titulo.required' => 'O título é obrigatório.',
		];

		if (boolval(request()->servico)){
			$rules['tipo_categoria_servico_id'] = 'required|integer|min:1';
			$messages['tipo_categoria_servico_id.required'] = 'A categoria do serviço é obrigatória';
		}

		$this->validate($request, $rules, $messages);
	}
}

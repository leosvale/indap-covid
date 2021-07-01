<?php

namespace App\Http\Controllers;

use App\Services\AnexoService;
use App\Models\Anexo;
use App\Models\Documento;
use Illuminate\Http\Request;
use Auth, DB, Log, DateTime;

class DocumentoController extends Controller
{
    /**
     * Tela de listagem de documentos.
     */
    public function lista()
    {
        return view('documento.lista');
    }

    /**
     * Tela de cadastro de documentos.
     */
    public function cadastro($id = null)
    {
        $data = ['id' => $id];
        return view('documento.cadastro', $data);
    }

    /**
     * API: Listar documentos.
     */
    public function index(Request $request)
    {
        $table     = $request->input('table', true);
        $limit     = $request->input('limit', 20);
        $page      = $request->input('page', 1);
        $orderBy   = $request->input('orderBy', 'doc_data_cadastro');
        $ascending = $request->input('ascending', 0);

        $data = Documento::select('documento.*', 'tpr.tpr_nome'/*, 'tcp.tcp_nome'*/)
                         ->join('tipo_processo AS tpr', 'tpr.tipo_processo_id', '=', 'documento.tipo_processo_id');
                         //->join('tipo_categoria_processo AS tcp', 'tcp.tipo_categoria_processo_id', '=', 'documento.tipo_categoria_processo_id');

	    // Filtros
        if ($request->has('query')) {
	        $filters = json_decode($request->input('query'));

	        if (!empty($filters->doc_data_cadastro)) {
		        $date = DateTime::createFromFormat('Y', $filters->doc_data_cadastro);
		        $data->whereRaw("YEAR(documento.doc_data_cadastro) = '".$date->format('Y')."'");
	        }

	        if (!empty($filters->doc_numero_processo)) {
		        $data->where('documento.doc_numero_processo', 'like', '%'.$filters->doc_numero_processo.'%');
	        }

	        if (!empty($filters->tipo_processo_id)) {
		        $data->where('documento.tipo_processo_id', $filters->tipo_processo_id);
	        }

	        if (!empty($filters->tipo_categoria_processo_id)) {
		        $data->where('documento.tipo_categoria_processo_id', $filters->tipo_categoria_processo_id);
	        }
        }

	    // Contagem e Limite/Paginacao
        if($table) {
            $count = $data->count();
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
     * API: Cadastrar documento.
     */
    public function store(Request $request)
    {
        // Validação
        $rules = [
	        'doc_numero_processo' => 'required|max:100',
	        'tipo_processo_id'    => 'required|exists:tipo_processo,tipo_processo_id'
        ];

        $messages = [
            'tipo_processo_id.exists' => 'Tipo de processo inválido.',
        ];

        $index = 1;

        while($request->has('tipo_categoria_processo_id_'.$index)) {
        	$rules['dan_data_documento_'.$index] = 'required|date_format:Y-m-d';
        	$rules['tipo_categoria_processo_id_'.$index] = 'required|exists:tipo_categoria_processo,tipo_categoria_processo_id';
        	$rules['doc_arquivo_'.$index] = 'required|file|max:20480|mimes:pdf';
	        $messages['doc_arquivo_'.$index.'.max'] = 'O tamanho máximo permitido é de 20 megabytes.';
	        $messages['doc_arquivo_'.$index.'.mimes'] = 'O arquivo deve estar no formato PDF.';
	        $messages['tipo_categoria_processo_id_'.$index.'.exists'] = 'Categoria de processo inválida.';
	        $index++;
        }

        $this->validate($request, $rules, $messages);

	    // Usuário
	    $usuario = Auth::user();

        DB::beginTransaction();

        try {
	        $documento = Documento::create([
		        'usuario_id'          => $usuario->usuario_id,
		        'tipo_processo_id'    => $request->tipo_processo_id,
		        'doc_numero_processo' => $request->doc_numero_processo,
	        ]);

	        // Processar arquivos
	        $index = 1;

	        while($request->has('tipo_categoria_processo_id_'.$index)) {
		        $arquivo = $request->file('doc_arquivo_'.$index);

		        if (!$arquivo->isValid()) {
			        return $this->fail( [ 'doc_arquivo_'.$index => 'Ocorreu um erro no upload do arquivo.' ] );
		        }

		        $file_path = 'documentos/' . date('Y/m');
		        $file_hash = uniqid(mt_rand());
		        $file_name = $arquivo->getClientOriginalName();
		        $file_mime = $arquivo->getMimeType();
		        $file_mime = $file_mime ?: $arquivo->getClientMimeType();
		        $file_ext  = $arquivo->getClientOriginalExtension();
		        $arquivo->move(storage_path($file_path), $file_hash . '.' . $file_ext);

		        $anexo = Anexo::create([
			        'ane_nome'    => $file_name,
			        'ane_mime'    => $file_mime,
			        'ane_arquivo' => $file_path . '/' . $file_hash . '.' . $file_ext
		        ]);

		        DB::table('documento_anexo')->insert([
			        'documento_id'               => $documento->documento_id,
			        'anexo_id'                   => $anexo->anexo_id,
			        'tipo_categoria_processo_id' => $request->input('tipo_categoria_processo_id_'.$index),
			        'dan_data_documento'         => $request->input('dan_data_documento_'.$index),
		        ]);

	        	$index++;

	        	if($request->tipo_processo_id == 1){

	        		DB::table('documento_campos_especificos')->insert([
			        	'documento_id'    => $documento->documento_id,
			        	'orgao' => $request->orgao,
				        'numero_licitacao' => $request->numero_licitacao,
				        'numero_processo_adm' => $request->numero_processo_adm,
				        'local_execucao' => $request->local_execucao,
				        'numero_edital' => $request->numero_edital,
				        'data_certame' => $request->data_certame,
				        'local_certame' => $request->local_certame,
				        'objeto' => $request->objeto,
				        'inicio_vigencia' => $request->inicio_vigencia,
				        'final_vigencia' => $request->final_vigencia,
				        'publicacao' => $request->publicacao,
				        'previsao_orcamentaria' => $request->previsao_orcamentaria,
				        'relacionado_covid' => $request->relacionado_covid
		        	]);

	        	}
	        	elseif($request->tipo_processo_id == 2){

	        		DB::table('documento_campos_especificos')->insert([
			        	'documento_id'    => $documento->documento_id,
			        	'cpf_cnpj' => $request->cpf_cnpj,
				        'numero_contrato' => $request->numero_contrato,
				        'numero_processo_adm' => $request->numero_processo_adm,
				        'numero_processo_licitatorio' => $request->numero_processo_licitatorio,
				        'valor' => $request->valor,
				        'data_assinatura' => $request->data_assinatura,
				        'inicio_vigencia' => $request->inicio_vigencia,
				        'final_vigencia' => $request->final_vigencia,
				        'objeto' => $request->objeto,
				        'fundamento_legal' => $request->fundamento_legal,
				        'possui_aditivo' => $request->possui_aditivo,
				        'relacionado_covid' => $request->relacionado_covid
		        	]);

	        	}
	        	elseif($request->tipo_processo_id == 7){

	        		DB::table('documento_campos_especificos')->insert([
			        	'documento_id'    => $documento->documento_id,
			        	'orgao' => $request->orgao,
				        'numero_dispensa' => $request->numero_dispensa,
				        'numero_processo_adm' => $request->numero_processo_adm,
				        'local_execucao' => $request->local_execucao,
				        'objeto' => $request->objeto,
				        'inicio_vigencia' => $request->inicio_vigencia,
				        'final_vigencia' => $request->final_vigencia,
				        'publicacao' => $request->publicacao,
				        'previsao_orcamentaria' => $request->previsao_orcamentaria,
				        'possui_aditivo' => $request->possui_aditivo,
				        'relacionado_covid' => $request->relacionado_covid
		        	]);

	        	}
	        	else{

	        		DB::table('documento_campos_especificos')->insert([
			        	'documento_id'    => $documento->documento_id,
			        	'descricao'       => $request->descricao
		        	]);
	        	}
	        }

            DB::commit();
        }
        catch(\Exception $e) {
            DB::rollback();
            Log::error($e);
            return $this->error($e->getMessage(), 500, $e);
        }

        return $this->success($documento);
    }

    /**
     * API: Exibir documento.
     */
    public function show(Request $request, $id)
    {
        $documentos = Documento::with('anexos')->findOrFail($id);

        $camposEspecificos = DB::table('documento_campos_especificos')->where('documento_id', $id)->get();

        $data = [
			'documentos' => $documentos, 
			'camposEspecificos' => $camposEspecificos
		];

		//dd($camposEspecificos[0]);

	    return $this->success($data);
    }

	/**
	 * API: Atualizar documento.
	 */
	public function update(Request $request, $id)
	{
		$documento = Documento::findOrFail($id);
		$anexoIds = [];
		$filesToRemove = [];

		// Validação
		$rules = [
			'doc_numero_processo' => 'required|max:100',
			'tipo_processo_id'    => 'required|exists:tipo_processo,tipo_processo_id',
		];

		$messages = [
			'tipo_processo_id.exists' => 'Tipo de processo inválido.',
		];

		$index = 1;

		while($request->has('tipo_categoria_processo_id_'.$index)) {
			$rules['dan_data_documento_'.$index] = 'required|date_format:Y-m-d';
			$rules['tipo_categoria_processo_id_'.$index] = 'required|exists:tipo_categoria_processo,tipo_categoria_processo_id';
			$messages['tipo_categoria_processo_id_'.$index.'.exists'] = 'Categoria de processo inválida.';

			if(!$request->has('anexo_id_'.$index)) {
				$rules['doc_arquivo_'.$index] = 'required|file|max:20480|mimes:pdf';
				$messages['doc_arquivo_'.$index.'.max'] = 'O tamanho máximo permitido é de 20 megabytes.';
				$messages['doc_arquivo_'.$index.'.mimes'] = 'O arquivo deve estar no formato PDF.';
			}
			else {
				$anexoIds[] = $request->input('anexo_id_'.$index);
			}

			$index++;
		}

		$this->validate($request, $rules, $messages);

		DB::beginTransaction();

		try {
			// Atualizar documento
			$documento->tipo_processo_id    = $request->tipo_processo_id;
			$documento->doc_numero_processo = $request->doc_numero_processo;
			$documento->save();

			// Excluir anexos removidos (precisa ser no inicio para nao remover tambem os novos anexos)
			$anexosRemove = Anexo::join('documento_anexo AS dan', 'dan.anexo_id', '=', 'anexo.anexo_id')
				                 ->where('dan.documento_id', '=', $id)
				                 ->whereNotIn('dan.anexo_id', $anexoIds)
				                 ->get();

			foreach ($anexosRemove as $anexoRemove) {
				$filesToRemove[] = $anexoRemove->ane_arquivo;
				$anexoRemove->delete();
			}

			// Atualizar/inserir anexos
			$index = 1;

			while($request->has('tipo_categoria_processo_id_'.$index)) {
				if($request->has('anexo_id_'.$index)) {
					DB::table('documento_anexo')
						->where('documento_id', $documento->documento_id)
						->where('anexo_id', $request->input('anexo_id_'.$index))
						->update([
							'tipo_categoria_processo_id' => $request->input('tipo_categoria_processo_id_'.$index) ,
							'dan_data_documento'         => $request->input('dan_data_documento_'.$index)
						]);
				}
				else {
					try {
						$arquivo = $request->file('doc_arquivo_'.$index);
						$anexo = AnexoService::gerarAnexo($arquivo, 'documentos/');
					}
					catch(\Exception $e) {
						return $this->fail( [ 'doc_arquivo_'.$index => 'Ocorreu um erro no upload do arquivo.' ] );
					}

					DB::table('documento_anexo')->insert([
						'documento_id'               => $documento->documento_id,
						'anexo_id'                   => $anexo->anexo_id,
						'tipo_categoria_processo_id' => $request->input('tipo_categoria_processo_id_'.$index),
						'dan_data_documento'         => $request->input('dan_data_documento_'.$index),
					]);
				}

				$index++;

				if($request->tipo_processo_id == 1){

	        		DB::table('documento_campos_especificos')
	        		->where('documento_id', $id)
	        		->update([
			        	'documento_id'    => $documento->documento_id,
			        	'orgao' => $request->orgao,
				        'numero_licitacao' => $request->numero_licitacao,
				        'numero_processo_adm' => $request->numero_processo_adm,
				        'local_execucao' => $request->local_execucao,
				        'numero_edital' => $request->numero_edital,
				        'data_certame' => $request->data_certame,
				        'local_certame' => $request->local_certame,
				        'objeto' => $request->objeto,
				        'inicio_vigencia' => $request->inicio_vigencia,
				        'final_vigencia' => $request->final_vigencia,
				        'publicacao' => $request->publicacao,
				        'previsao_orcamentaria' => $request->previsao_orcamentaria,
				        'relacionado_covid' => $request->relacionado_covid
		        	]);

	        	}
	        	elseif($request->tipo_processo_id == 2){

	        		DB::table('documento_campos_especificos')
	        		->where('documento_id', $id)
	        		->update([
			        	'documento_id'    => $documento->documento_id,
			        	'cpf_cnpj' => $request->cpf_cnpj,
				        'numero_contrato' => $request->numero_contrato,
				        'numero_processo_adm' => $request->numero_processo_adm,
				        'numero_processo_licitatorio' => $request->numero_processo_licitatorio,
				        'valor' => $request->valor,
				        'data_assinatura' => $request->data_assinatura,
				        'inicio_vigencia' => $request->inicio_vigencia,
				        'final_vigencia' => $request->final_vigencia,
				        'objeto' => $request->objeto,
				        'fundamento_legal' => $request->fundamento_legal,
				        'possui_aditivo' => $request->possui_aditivo,
				        'relacionado_covid' => $request->relacionado_covid
		        	]);

	        	}
	        	elseif($request->tipo_processo_id == 7){

	        		DB::table('documento_campos_especificos')
	        		->where('documento_id', $id)
	        		->update([
			        	'documento_id'    => $documento->documento_id,
			        	'orgao' => $request->orgao,
				        'numero_dispensa' => $request->numero_dispensa,
				        'numero_processo_adm' => $request->numero_processo_adm,
				        'local_execucao' => $request->local_execucao,
				        'objeto' => $request->objeto,
				        'inicio_vigencia' => $request->inicio_vigencia,
				        'final_vigencia' => $request->final_vigencia,
				        'publicacao' => $request->publicacao,
				        'previsao_orcamentaria' => $request->previsao_orcamentaria,
				        'possui_aditivo' => $request->possui_aditivo,
				        'relacionado_covid' => $request->relacionado_covid
		        	]);

	        	}
	        	else{

	        		DB::table('documento_campos_especificos')
	        		->where('documento_id', $id)
	        		->update([
			        	'documento_id'    => $documento->documento_id,
			        	'descricao'       => $request->descricao
		        	]);
	        	}
			}

			DB::commit();
		}
		catch(\Exception $e) {
			DB::rollback();
			Log::error($e);
			return $this->error($e->getMessage(), 500, $e);
		}

		// Remover arquivos físicos
		foreach ($filesToRemove as $fileToRemove) {
			$path = storage_path($fileToRemove);

			if(is_file($path)) {
				@unlink($path);
			}
		}

		return $this->success($documento);
	}

	/**
	 * AJAX: Excluir processo.
	 */
	public function destroy(Request $request, $id)
	{
		$documento = Documento::findOrFail($id);

		$documento->delete();

		return $this->success();
	}

	/**
	 * Exibir/baixar um anexo ligado a um processo.
	 */
	public function exibirAnexo(Request $request, $id)
	{
		// Buscar anexo
		$anexo = Anexo::select('anexo.*')
					  ->join('documento_anexo AS dan', 'dan.anexo_id', '=', 'anexo.anexo_id')
					  ->where('dan.anexo_id', $id)
					  ->first();

		return AnexoService::exibirAnexo($anexo);
	}

	/**
	 *
	 */
	private function processarArquivo(Request $request, $name, $id)
	{
		$arquivo = $request->file($name);
		$anexo   = AnexoService::gerarAnexo($arquivo);

		if ($anexo) {
			DB::table('solicitacao_anexo')->insert([
				'solicitacao_id' => $id,
				'anexo_id'   => $anexo->anexo_id,
			]);
		}
	}
}

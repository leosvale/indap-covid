<?php

namespace App\Http\Controllers;

use App\Models\Anexo;
use App\Models\CategoriaServico;
use App\Models\Publicacao;
use App\Models\Solicitante;
use App\Models\Solicitacao;
use App\Services\AnexoService;
use Illuminate\Http\Request;
use Auth, DB, DateTime, Log;

class SolicitacaoUsuarioController extends Controller
{
    public function lista()
	{
		return view('solicitacao.lista_usuario');
	}

	public function cadastro()
	{
		$servicos = Publicacao::select('publicacao_id', 'pub_titulo', 'pub_tipo', 'tipo_categoria_servico_id')
			->where('pub_tipo', 'SER')
			->whereNotNull('tipo_categoria_servico_id')
			->get()
			->groupBy('tipo_categoria_servico_id');

		$tipo_servicos = CategoriaServico::all();

		return view('solicitacao.cadastro_usuario', ['servicos' => $servicos, 'tipo_servicos' => $tipo_servicos]);
	}

	public function detalhes($id)
	{
		$data = ['id' => $id];
		return view('solicitacao.detalhes_usuario', $data);
	}

	/**
	 * AJAX: Listar solicitações do usuário.
	 */
	public function index(Request $request)
	{
		// Usuário
		$usuario = Auth::user();
		$solicitante_id = Solicitante::where('usuario_id', $usuario->usuario_id)->value('solicitante_id');

		$table     = $request->input('table', true);
		$limit     = $request->input('limit', 20);
		$page      = $request->input('page', 1);
		$orderBy   = $request->input('orderBy', 'slc_data_cadastro');
		$ascending = $request->input('ascending', 0);

		$data = Solicitacao::where('solicitante_id', $solicitante_id);

		// Filtros
		if($request->has('query')) {
			$filters = json_decode($request->input('query'));

			if (!empty($filters->slc_protocolo)) {
				$data->where('slc_protocolo', 'LIKE', '%'.strtoupper($filters->slc_protocolo).'%');
			}

			if (!empty($filters->slc_data_cadastro)) {
				$date = DateTime::createFromFormat('d/m/Y', $filters->slc_data_cadastro);
				$data->whereRaw("DATE(slc_data_cadastro) = '".$date->format('Y-m-d')."'");
			}

			if (!empty($filters->slc_situacao)) {
				$data->where('slc_situacao', $filters->slc_situacao);
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
	 * AJAX: Exibir solicitação do usuário.
	 */
	public function show(Request $request, $id)
	{
		// Usuário
		$usuario = Auth::user();
		$solicitante_id = Solicitante::where('usuario_id', $usuario->usuario_id)->value('solicitante_id');

		$data = Solicitacao::findOrFail($id);

		if($data->solicitante_id != $solicitante_id) {
			abort(403);
		}

		$data->load([
			'solicitante' => function ($query) {
				$query->select('solicitante_id', 'sol_nome');
			},
			'anexos' => function ($query) {},
		]);

		return $this->success($data);
	}

	/**
	 * AJAX: Cadastrar solicitação do usuário.
	 */
	public function store(Request $request)
	{
		// Validação
		$rules = [
			'slc_orgao'     => 'max:40',
			'slc_titulo'    => 'required|max:100',
			'slc_descricao' => 'required',
			'slc_anexo'     => 'nullable|file|max:20480|mimes:pdf',
			'slc_anexo_2'   => 'nullable|file|max:20480|mimes:pdf',
			'slc_anexo_3'   => 'nullable|file|max:20480|mimes:pdf',
		];

		$messages = [
			'slc_anexo.max'     => 'O tamanho máximo permitido é de 20 megabytes.',
			'slc_anexo_2.max'   => 'O tamanho máximo permitido é de 20 megabytes.',
			'slc_anexo_3.max'   => 'O tamanho máximo permitido é de 20 megabytes.',
			'slc_anexo.mimes'   => 'O arquivo deve estar no formato PDF.',
			'slc_anexo_2.mimes' => 'O arquivo deve estar no formato PDF.',
			'slc_anexo_3.mimes' => 'O arquivo deve estar no formato PDF.',
		];

		$this->validate($request, $rules, $messages);

		// Usuário
		$usuario = Auth::user();
		$solicitante_id = Solicitante::where('usuario_id', $usuario->usuario_id)->value('solicitante_id');

		DB::beginTransaction();

		try {
			// Cadastrar solicitação
			$solicitacao = Solicitacao::create([
				'solicitante_id' => $solicitante_id,
				'slc_orgao'      => $request->input( 'slc_orgao' ),
				'slc_titulo'     => $request->input( 'slc_titulo' ),
				'slc_descricao'  => $request->input( 'slc_descricao' ),
			]);

			// Processar arquivos anexados
			$this->processarArquivo($request, 'slc_anexo', $solicitacao->solicitacao_id);
			$this->processarArquivo($request, 'slc_anexo_2', $solicitacao->solicitacao_id);
			$this->processarArquivo($request, 'slc_anexo_3', $solicitacao->solicitacao_id);

			DB::commit();
		}
		catch(\Exception $e) {
			DB::rollback();
			Log::error($e);
			return $this->error($e->getMessage(), 500, $e);
		}

		// Atualizar para obter o protocolo
		$solicitacao = $solicitacao->fresh();

		return $this->success($solicitacao);
	}

	/**
	 * Exibir/baixar um anexo ligado a uma solicitação.
	 */
	public function exibirAnexo(Request $request, $id)
	{
		// Usuário
		$usuario = Auth::user();

		// Buscar anexo
		$anexo = Anexo::select('anexo.*')
		              ->join('solicitacao_anexo AS san', 'san.anexo_id', '=', 'anexo.anexo_id')
					  ->join('solicitacao AS slc', 'slc.solicitacao_id', '=', 'san.solicitacao_id')
					  ->join('solicitante AS sol', 'sol.solicitante_id', '=', 'slc.solicitante_id')
		              ->where('san.anexo_id', $id)
		              ->where('sol.usuario_id', $usuario->usuario_id)
		              ->first();

		return AnexoService::exibirAnexo($anexo);
	}

	/**
	 * Mover arquivo para a pasta correta e salvar a referência no banco de dados.
	 */
	private function processarArquivo(Request $request, $name, $id)
	{
		$arquivo = $request->file($name);

		if(!$arquivo) { return false; }

		if (!$arquivo->isValid()) {
			throw new \Exception('Ocorreu um erro no upload do arquivo. Por favor, atualize sua página e tente novamente.');
		}

		$file_path = 'anexos/' . date('Y/m');
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

		DB::table('solicitacao_anexo')->insert([
			'solicitacao_id' => $id,
			'anexo_id'   => $anexo->anexo_id,
		]);

		return true;
	}
}

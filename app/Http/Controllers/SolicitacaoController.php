<?php

namespace App\Http\Controllers;

use App\Models\Anexo;
use App\Models\CategoriaServico;
use App\Models\Publicacao;
use App\Services\AnexoService;
use App\Models\Solicitacao;
use Illuminate\Http\Request;
use DB;

class SolicitacaoController extends Controller
{
    /**
     * Tela de listagem de solicitações.
     */
    public function lista()
    {
        return view('solicitacao.lista', ['esic' => boolval(request()->esic)]);
    }

    /**
     * Tela de cadastro de solicitação.
     */
    public function cadastro()
    {
		$servicos = Publicacao::select('publicacao_id', 'pub_titulo', 'pub_tipo', 'tipo_categoria_servico_id')
			->where('pub_tipo', 'SER')
			->whereNotNull('tipo_categoria_servico_id')
			->get()
			->groupBy('tipo_categoria_servico_id');

		$tipo_servicos = CategoriaServico::all();

        return view('solicitacao.cadastro', ['servicos' => $servicos, 'tipo_servicos' => $tipo_servicos]);
    }

	/**
	 * Tela de detalhes da solicitação.
	 */
	public function detalhes($id)
	{
		$data = ['id' => $id];
		return view('solicitacao.detalhes', $data);
	}

	/**
	 * AJAX: Listar solicitações.
	 */
	public function index(Request $request)
	{
		$table     = $request->input('table', true);
		$limit     = $request->input('limit', 20);
		$page      = $request->input('page', 1);
		$orderBy   = $request->input('orderBy', 'slc_data_cadastro');
		$ascending = $request->input('ascending', 0);

		$colunas = [
			'solicitacao.solicitacao_id',
			'solicitacao.slc_protocolo',
			'solicitacao.slc_titulo',
			'solicitacao.slc_situacao',
			'solicitacao.slc_data_cadastro',
			'solicitacao.slc_orgao',
			'sol.sol_nome',
			DB::raw('COUNT(san.anexo_id) AS qtd_anexos')
		];

		$data = Solicitacao::select($colunas)
            ->leftJoin('solicitante AS sol', 'sol.solicitante_id', '=', 'solicitacao.solicitante_id')
		    ->leftJoin('solicitacao_anexo AS san', 'san.solicitacao_id', '=', 'solicitacao.solicitacao_id');

		// Filtros
		if($request->has('query')) {
			$filters = json_decode($request->input('query'));

			if (!empty($filters->slc_protocolo)) {
				$data->where('slc_protocolo', 'LIKE', '%'.$filters->slc_protocolo.'%');
			}

			if (!empty($filters->slc_situacao)) {
				$data->where('slc_situacao', $filters->slc_situacao);
			}
		}

		if (!boolval(request()->esic)) {
			$data->where(function ($query) {
				$query
					->where('slc_orgao', '<>', "Secretarias - Administração")
					->where('slc_orgao', '<>', "Secretarias - Saúde")
					->where('slc_orgao', '<>', "Secretarias - Educação")
					->where('slc_orgao', '<>', "Secretarias - Assistência Social")
					->where('slc_orgao', '<>', "Secretarias - Transporte")
					->where('slc_orgao', '<>', "Secretarias - Cultura")
					->where('slc_orgao', '<>', "Secretarias - Agricultura")
					->where('slc_orgao', '<>', "Secretarias - Esporte/Lazer")
					->where('slc_orgao', '<>', "Secretarias - Outros")
					->where('slc_orgao', '<>', "Setores - Finanças")
					->where('slc_orgao', '<>', "Setores - Licitação")
					->where('slc_orgao', '<>', "Setores - Contabilidade")
					->where('slc_orgao', '<>', "Setores - Controladoria")
					->where('slc_orgao', '<>', "Setores - Pessoal")
					->where('slc_orgao', '<>', "Setores - Convênios")
					->where('slc_orgao', '<>', "Setores - Outros");
			});
		} else {
			$data->where(function ($query) {
				$query
					->where('slc_orgao', '=', "Secretarias - Administração")
					->orWhere('slc_orgao', '=', "Secretarias - Saúde")
					->orWhere('slc_orgao', '=', "Secretarias - Educação")
					->orWhere('slc_orgao', '=', "Secretarias - Assistência Social")
					->orWhere('slc_orgao', '=', "Secretarias - Transporte")
					->orWhere('slc_orgao', '=', "Secretarias - Cultura")
					->orWhere('slc_orgao', '=', "Secretarias - Agricultura")
					->orWhere('slc_orgao', '=', "Secretarias - Esporte/Lazer")
					->orWhere('slc_orgao', '=', "Secretarias - Outros")
					->orWhere('slc_orgao', '=', "Setores - Finanças")
					->orWhere('slc_orgao', '=', "Setores - Licitação")
					->orWhere('slc_orgao', '=', "Setores - Contabilidade")
					->orWhere('slc_orgao', '=', "Setores - Controladoria")
					->orWhere('slc_orgao', '=', "Setores - Pessoal")
					->orWhere('slc_orgao', '=', "Setores - Convênios")
					->orWhere('slc_orgao', '=', "Setores - Outros");
			});
		}

		// Contagem e Limite/Paginacao
		if($table) {
			$count = $data->count();
			$data->limit($limit)->skip($limit * ($page - 1));
		}

		// Remover ultimo elemento para usar as colunas no GROUP BY
		array_pop($colunas);
		$data->groupBy($colunas);

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
	 * AJAX: Exibir solicitação.
	 */
	public function show(Request $request, $id)
	{
		$data = Solicitacao::findOrFail($id);

		$data->load([
			'solicitante' => function ($query) {
				$query->select('solicitante_id', 'sol_nome');
			},
			'anexos' => function ($query) {},
		]);

		return $this->success($data);
	}

	/**
	 * AJAX: Cadastrar solicitação.
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

		DB::beginTransaction();

		try {
			// Cadastrar solicitação
			$solicitacao = Solicitacao::create([
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
	 * AJAX: Atualizar solicitação.
	 */
	public function update(Request $request, $id)
	{
		$solicitacao = Solicitacao::findOrFail($id);

		// Validação
		$rules = [
			'slc_situacao'   => 'required|in:ESP,ANA,CON,REJ',
			'slc_comentario' => '',
		];

		$messages = [];

		$this->validate($request, $rules, $messages);

		DB::beginTransaction();

		try {
			// TODO: Analisar possiveis verificacoes antes da mudanca de situacao
			$solicitacao->slc_situacao   = $request->slc_situacao;
			$solicitacao->slc_comentario = $request->input( 'slc_comentario' );
			$solicitacao->save();

			foreach ($request->files as $key => $file) {
				$this->processarArquivo($request, $key, $solicitacao->solicitacao_id);
			}

			DB::commit();
		}
		catch(\Exception $e) {
			DB::rollback();
			Log::error($e);
			return $this->error($e->getMessage(), 500, $e);
		}

		return $this->success($solicitacao);
	}

	/**
	 * Exibir/baixar um anexo ligado a uma solicitação.
	 */
	public function exibirAnexo(Request $request, $id)
	{
		// Buscar anexo
		$anexo = Anexo::select('anexo.*')
		              ->join('solicitacao_anexo AS san', 'san.anexo_id', '=', 'anexo.anexo_id')
		              ->where('san.anexo_id', $id)
		              ->first();

		return AnexoService::exibirAnexo($anexo);
	}

	/**
	 * Mover arquivo para a pasta correta e salvar a referência no banco de dados.
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

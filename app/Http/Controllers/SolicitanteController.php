<?php

namespace App\Http\Controllers;

use App\Mail\CadastroSolicitante;
use App\Models\Configuracao;
use App\Models\Solicitacao;
use App\Models\Endereco;
use App\Models\Solicitante;
use App\Models\Usuario;
use Illuminate\Http\Request;
use DB, Hash, DateTime, Mail;
use Response;

class SolicitanteController extends Controller
{
	/**
	 * Tela de acesso para solicitantes.
	 */
	public function acesso()
	{
		$data = [];
		$nome = Configuracao::where('configuracao_id', 'nome')->value('cfg_valor');
		$data['nome'] = $nome;

		return view('solicitante.acesso', $data);
	}

	/**
	 * Tela de cadastro de solicitantes.
	 */
	public function cadastro()
	{
		return view('solicitante.cadastro');
	}

	/**
	 * Tela de recuperar senha do solicitante.
	 */
	public function recuperarSenha()
	{
		return view('solicitante.recuperar_senha');
	}

	/**
	 * Tela de confirmação de cadastro através de um link.
	 */
	public function confirmacao(Request $request)
	{
		if(!$request->has('token')) {
			abort(400, 'Ocorreu um erro no processo.');
		}

		$token = $request->input('token');

		$usuario = Usuario::where('usu_codigo_confirmacao', $token)
						  ->where('usu_situacao_cadastro', 'P')
						  ->whereRaw('usu_data_confirmacao >= now()')
						  ->first();

		if(!$usuario) {
			abort(400, 'Ocorreu um erro no processo.');
		}

		$usuario->usu_situacao_cadastro  = 'A';
		$usuario->usu_codigo_confirmacao = NULL;
		$usuario->usu_data_confirmacao   = NULL;
		$usuario->save();

		return view('solicitante.confirmacao');
	}

	/**
	 * Tela de recuperação de acesso através de um link.
	 */
	public function recuperacao(Request $request)
	{
		if(!$request->has('token')) {
			abort(400, 'Ocorreu um erro no processo.');
		}

		$token = $request->input('token');

		$usuario = Usuario::where('usu_codigo_confirmacao', $token)
		                  ->where('usu_situacao_cadastro', '!=', 'B')
		                  ->whereRaw('usu_data_confirmacao >= now()')
		                  ->first();

		if(!$usuario) {
			abort(400, 'Ocorreu um erro no processo.');
		}

		$data = ['token' => $token];

		return view('solicitante.recuperacao', $data);
	}

	/**
	 * Tela de relatório público de atendimento.
	 */
	public function relatorio()
	{
		return view('solicitante.relatorio');
	}


	/**
	 * Tela de requerimento presencial.
	 */
	public function presencial()
	{
		return view('solicitante.presencial');
	}

	/**
	 * API: Cadastrar solicitante.
	 *
	 * @param \Illuminate\Http\Request $request
	 * @return \Illuminate\Http\JsonResponse
	 */
	public function store(Request $request)
	{
		// Validação
		$rules = [
			'sol_tipo_pessoa'              => 'required|in:F,J',
			'sol_nome'                     => 'required|max:100',
			'sol_doc_identificacao'        => 'boolean',
			'sol_estrangeiro'              => 'boolean',
			'end_logradouro'               => 'required|max:100',
			'end_numero'                   => 'max:20',
			'end_complemento'              => 'max:100',
			'end_bairro'                   => 'required|max:100',
			'sol_telefone'                 => 'required|regex:/\d{10,11}/',
			'sol_email'                    => 'required|email|unique:usuario,usu_login',
			'sol_email_confirmacao'        => 'required|same:sol_email',
			'usu_senha'                    => 'required|regex:/^(?=.*[A-Za-z])(?=.*[0-9]).{8,20}$/',
			'usu_senha_confirmacao'        => 'required|same:usu_senha',
		];

		if($request->input('sol_tipo_pessoa') == 'F') {
			if($request->input('sol_doc_identificacao', false)) {
				$rules['sol_tipo_doc_identificacao']   = 'required_if:sol_doc_identificacao,true|max:40';
				$rules['sol_numero_doc_identificacao'] = 'required_if:sol_doc_identificacao,true|max:40';
				$rules['sol_orgao_doc_identificacao']  = 'required_if:sol_doc_identificacao,true|max:40';
				$rules['sol_termos_doc_identificacao'] = 'required_if:sol_doc_identificacao,true|accepted';
			}
			else {
				$rules['sol_cpf'] = 'required|cpf';
			}
		}

		if($request->input('sol_tipo_pessoa') == 'J') {
			$rules['sol_cnpj']                = 'required|cnpj';
			$rules['sol_nome_representante']  = 'required|max:100';
			$rules['sol_cargo_representante'] = 'required|max:50';
			$rules['tipo_instituicao_id']     = 'required|exists:tipo_instituicao,tipo_instituicao_id';
			$rules['tipo_area_atuacao_id']    = 'required|exists:tipo_area_atuacao,tipo_area_atuacao_id';
		}

		if($request->input('sol_estrangeiro', false)) {
			$rules['pais_id'] = 'required|exists:pais,pais_id';
		}
		else {
			$rules['end_cep']         = 'required|regex:/\d{8}/';
			$rules['cid_codigo_ibge'] = 'required|exists:cidade,cid_codigo_ibge';
		}

		$messages = [
			'usu_senha.regex' => 'A senha deve ter de 8 a 20 caracteres e pelo menos 1 letra e 1 número.',
			'sol_email.unique' => 'O e-mail informado já está cadastrado no sistema.',
			'sol_termos_doc_identificacao.accepted' => 'Você deve ler e aceitar os termos e condições.',
		];

		$this->validate($request, $rules, $messages);

		DB::beginTransaction();

		try {
			// Endereço
			$endereco = new Endereco();
			$endereco->end_logradouro  = $request->input('end_logradouro');
			$endereco->end_numero      = $request->input('end_numero');
			$endereco->end_complemento = $request->input('end_complemento');
			$endereco->end_bairro      = $request->input('end_bairro');

			if($request->input('sol_estrangeiro', false)) {
				$endereco->pais_id   = $request->input('pais_id');
			}
			else {
				$cidade_id = DB::table('cidade')->where('cid_codigo_ibge', $request->input('cid_codigo_ibge'))->value('cidade_id');
				$endereco->end_cep   = $request->input('end_cep');
				$endereco->cidade_id = $cidade_id;
			}

			$endereco->save();

			// Usuario
			$usuario = new Usuario();
			$usuario->usu_tipo               = 'SOL'; // Solicitante
			$usuario->usu_login              = strtolower( $request->input( 'sol_email' ) );
			$usuario->usu_senha              = Hash::make( $request->input( 'usu_senha' ) );
			$usuario->usu_codigo_confirmacao = md5( uniqid( $usuario->usu_login, true ) );
			$usuario->usu_data_confirmacao   = date( "Y-m-d H:i:s", strtotime( '+24 hours' ) );
			$usuario->privilegio_licitacoes  = false;
			$usuario->privilegio_noticias  = false;
			$usuario->privilegio_servicos  = false;
			$usuario->privilegio_informacao  = false;
			$usuario->privilegio_editais  = false;
			$usuario->privilegio_esic  = false;
			$usuario->privilegio_ouvidoria  = false;
			$usuario->save();

			//Solicitante
			$solicitante = new Solicitante();
			$solicitante->usuario_id      = $usuario->usuario_id;
			$solicitante->sol_tipo_pessoa = $request->input( 'sol_tipo_pessoa' );
			$solicitante->sol_nome        = $request->input( 'sol_nome' );
			$solicitante->endereco_id     = $endereco->endereco_id;
			$solicitante->sol_telefone    = $request->input( 'sol_telefone' );
			$solicitante->sol_email       = $request->input( 'sol_email' );

			if($request->sol_tipo_pessoa == 'F') {
				$solicitante->sol_cpf_cnpj = $request->input('sol_cpf');

				if($request->input('sol_doc_identificacao', false)) {
					$solicitante->sol_tipo_doc_identificacao   = $request->input( 'sol_tipo_doc_identificacao' );
					$solicitante->sol_numero_doc_identificacao = $request->input( 'sol_numero_doc_identificacao' );
					$solicitante->sol_orgao_doc_identificacao  = $request->input( 'sol_orgao_doc_identificacao' );
				}
			}

			if($request->sol_tipo_pessoa == 'J') {
				$solicitante->sol_cpf_cnpj            = $request->input( 'sol_cnpj' );
				$solicitante->sol_nome_representante  = $request->input( 'sol_nome_representante' );
				$solicitante->sol_cargo_representante = $request->input( 'sol_cargo_representante' );
				$solicitante->tipo_instituicao_id     = $request->input( 'tipo_instituicao_id' );
				$solicitante->tipo_area_atuacao_id    = $request->input( 'tipo_area_atuacao_id' );
			}

			$solicitante->save();

			// Enviar e-mail de confirmação
			Mail::to($usuario->usu_login)->send(new CadastroSolicitante( $solicitante, $usuario ));

			DB::commit();
		}
		catch(\Exception $e) {
			DB::rollback();
			\Log::error($e);
			return $this->error($e->getMessage(), 500, $e);
		}

		return $this->success();
	}

	/**
	 * API: Gerar relatorio publico de atendimento.
	 */
	public function gerarRelatorio(Request $request)
	{
		// Parâmetros
		if($request->has('query')) {
			$filters      = json_decode( $request->input( 'query' ) );
			$data_inicial = !empty( $filters->data_inicial ) ? $filters->data_inicial : '';
			$data_final   = !empty( $filters->data_final ) ? $filters->data_final : '';
		}
		else {
			$data_inicial = $request->input('data_inicial');
			$data_final   = $request->input('data_final');
		}

		if(
			!$data_inicial ||
			!$data_final ||
			!DateTime::createFromFormat('Y-m-d', $data_inicial) ||
			!DateTime::createFromFormat('Y-m-d', $data_final)
		) {
			return $this->success();
		}

		$columns = [
			DB::raw("CASE WHEN solicitacao.solicitante_id IS NULL THEN 'SIC' ELSE 'E-SIC' END AS tipo"),
			DB::raw("COUNT(solicitacao.solicitacao_id) AS quantidade"),
			DB::raw("SUM(CASE WHEN solicitacao.slc_situacao = 'CON' THEN 1 ELSE 0 END) AS concluidas"),
			DB::raw("SUM(CASE WHEN solicitacao.slc_situacao = 'REJ' THEN 1 ELSE 0 END) AS rejeitadas"),
			DB::raw("SUM(CASE WHEN sol.sol_tipo_pessoa = 'F' THEN 1 ELSE 0 END) AS pes_fisica"),
			DB::raw("SUM(CASE WHEN sol.sol_tipo_pessoa = 'J' THEN 1 ELSE 0 END) AS pes_juridica"),
			DB::raw("SUM(CASE WHEN end.pais_id = 33 OR end.pais_id IS NULL THEN 1 ELSE 0 END) AS residente"),
			DB::raw("SUM(CASE WHEN end.pais_id != 33 THEN 1 ELSE 0 END) AS nao_residente"),
		];

		$solicitacoes = Solicitacao::select($columns)
			->leftJoin('solicitante AS sol', 'sol.solicitante_id', '=', 'solicitacao.solicitante_id')
			->leftJoin('endereco AS end', 'end.endereco_id', '=', 'sol.endereco_id')
			->whereRaw('DATE(solicitacao.slc_data_cadastro) >= ?', [$data_inicial])
			->whereRaw('DATE(solicitacao.slc_data_cadastro) <= ?', [$data_final])
			->groupBy('tipo')
			->get();

		$data = $solicitacoes->toArray();

		// Calcular totais
		$total = [
			'tipo'          => 'Total',
			'quantidade'    => 0,
			'concluidas'    => 0,
			'rejeitadas'    => 0,
			'pes_fisica'    => 0,
			'pes_juridica'  => 0,
			'residente'     => 0,
			'nao_residente' => 0,
		];

		foreach ($data as $item) {
			$total['quantidade']    += $item['quantidade'];
			$total['concluidas']    += $item['concluidas'];
			$total['rejeitadas']    += $item['rejeitadas'];
			$total['pes_fisica']    += $item['pes_fisica'];
			$total['pes_juridica']  += $item['pes_juridica'];
			$total['residente']     += $item['residente'];
			$total['nao_residente'] += $item['nao_residente'];
		}

		array_push($data, $total);

		return $this->success($data);
	}

	public function download(){
		$filename = 'app/formsic.pdf';
  		$path = storage_path($filename);

  		return Response::make(file_get_contents($path), 200, [
    		'Content-Type' => 'application/pdf',
    		'Content-Disposition' => 'inline; filename="'.$filename.'"'
  		]);
	}

	public function telefones(){

		$config_ids = [
			'telefone_primario',
			'telefone_secundario',
		];

		$configuracoes = Configuracao::whereIn('configuracao_id', $config_ids)->get();

		$configuracoes = $configuracoes->mapWithKeys(function ($item) {
			return [$item['configuracao_id'] => $item['cfg_valor']];
		});

		return $this->success($configuracoes);

	}
}

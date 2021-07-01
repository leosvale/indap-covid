<?php

namespace App\Http\Controllers;

use App\Mail\CadastroAdministrador;
use App\Models\Configuracao;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use DB, Log, Auth, Mail;

class ConfiguracaoController extends Controller
{
	/**
	 * Tela de configurações da Entidade.
	 */
	public function cadastro()
	{
		return view('configuracao.cadastro');
	}

	/**
	 * Tela de usuários da Entidade.
	 */
	public function usuarios()
	{
		// Autorização
		$usuario = Auth::user();

		if ($usuario->usu_administrador != 'S') {
			abort(403);
		}

		return view('configuracao.usuarios');
	}

	/**
	 * AJAX: Carregar configurações.
	 */
	public function index()
	{
		$config_ids = [
			'nome',
			'portal',
			'uf',
			'logo',
			'favico',
			'favico_html',
			'endereco',
			'email',
			'banners',
			'telefone_primario',
			'telefone_secundario',
			'cor',
			'facebook',
			'twitter',
			'google',
			'instagram',
			'pinterest',
			'youtube',
			'banner_home_url',
			'banner_home_img',
			'popup_url',
			'popup_img',
			'logo_indap'
		];

		$configuracoes = Configuracao::whereIn('configuracao_id', $config_ids)->get();

		$configuracoes = $configuracoes->mapWithKeys(function ($item) {
			return [$item['configuracao_id'] => $item['cfg_valor']];
		});

		$doses_recebidas = DB::table('vacinometro')->where('campo', '=', 'doses_recebidas')->first();
		$doses_aplicadas = DB::table('vacinometro')->where('campo', '=', 'doses_aplicadas')->first();
		$primeira_dose = DB::table('vacinometro')->where('campo', '=', 'primeira_dose')->first();
		$segunda_dose = DB::table('vacinometro')->where('campo', '=', 'segunda_dose')->first();

		$vacinometro = [
			'doses_recebidas' => $doses_recebidas, 
			'doses_aplicadas' => $doses_aplicadas, 
			'primeira_dose' => $primeira_dose, 
			'segunda_dose' => $segunda_dose]
			;

		$data = [
			'configuracoes' => $configuracoes,
			'vacinometro' => $vacinometro
		];

		return $this->success($data);
	}

	/**
	 * API: Atualizar configurações.
	 */
	public function store(Request $request)
	{
		// Validação
		$rules = [
			'nome'          => 'required|max:100',
			'portal'        => 'required|max:100',
			'uf'            => 'required|max:2',
			'logo_midia'    => 'file|max:1024|mimetypes:image/jpeg,image/png',
			'favico_midia'    => 'file|max:1024|mimetypes:image/jpeg,image/png',
			'endereco'      => 'max:5000',
			'email'         => 'required|email',
			'telefone_primario' => 'nullable',
			'telefone_secundario' => 'nullable',
		];

		if (filter_var($request->input('alterar_senha'), FILTER_VALIDATE_BOOLEAN)) {
			$rules['usu_senha_atual']       = 'required';
			$rules['usu_senha']             = 'required|regex:/^(?=.*[A-Za-z])(?=.*[0-9]).{8,20}$/';
			$rules['usu_senha_confirmacao'] = 'required|same:usu_senha';
		}

		$messages = [
			'logo_midia.max'        => 'O tamanho máximo permitido é de 1 megabyte.',
			'logo_midia.mimetypes'  => 'O arquivo deve ser uma imagem no formato JPG ou PNG.',
			'usu_senha.regex' => 'A senha deve ter de 8 a 20 caracteres e pelo menos 1 letra e 1 número.',
		];

		$this->validate( $request, $rules, $messages );

		DB::beginTransaction();

		try {
			// Salvar campos de texto
			$fields = [
				'nome', 
				'portal', 
				'uf', 
				'endereco', 
				'email', 
				'banners',
				'telefone_primario',
				'telefone_secundario', 
				'cor',
				'facebook',
				'twitter',
				'google',
				'instagram',
				'pinterest',
				'youtube',
				'banner_home_url',
				'banner_home_img',
				'popup_url',
				'popup_img',
			];
			foreach ($fields as $field) {
				$configuracao = Configuracao::firstOrNew(['configuracao_id' => $field]);
				$value = $request->input($field);

				if($field == 'nome' || $field == 'portal' || $field == 'endereco' || $field == 'telefone_primario' || $field == 'telefone_secundario' ) {
					$value = strip_tags($value);
				}

				if ($field == 'banner_topo_img' || $field == 'banner_home_img' || $field == 'popup_img') {
					$value = ($value == 'apagar') ? null : $value;
				}

				$configuracao->cfg_valor = $value;
				$configuracao->save();
			}

			// Salvar logotipo
			$logo = $request->file('logo_midia');

			if($logo && $logo->isValid()) {
				$file_path = 'images/entidade';
				$file_name = config('app.domain');
				$file_ext  = $logo->getClientOriginalExtension();
				$logo->move(public_path($file_path), $file_name . '.' . $file_ext);

				$configuracao = Configuracao::firstOrNew(['configuracao_id' => 'logo']);
				$configuracao->cfg_valor = $file_path . '/' . $file_name . '.' . $file_ext;
				$configuracao->save();
			}

			// Salvar favico
			$favico = $request->file('favico_midia');

			if($favico && $favico->isValid()) {
				$favico_file_path = 'images/entidade/favico';
				$favico_file_name = config('app.domain');
				$favico_file_ext  = $favico->getClientOriginalExtension();
				$favico->move(public_path($favico_file_path), $favico_file_name . '.' . $favico_file_ext);

				$configuracao_favico = Configuracao::firstOrNew(['configuracao_id' => 'favico']);
				$configuracao_favico->cfg_valor = $favico_file_path . '/' . $favico_file_name . '.' . $favico_file_ext;
				$configuracao_favico->save();

				$configuracao_favico_html = Configuracao::firstOrNew(['configuracao_id' => 'favico_html']);
				$configuracao_favico_html->cfg_valor = (new \App\Util\FaviconGenerator($configuracao_favico->cfg_valor, !$configuracao_favico->wasRecentlyCreated, config('app.domain')))->createAllAndGetHtml();
				$configuracao_favico_html->save();
			}

			// Atualizar senha
			if (filter_var($request->input('alterar_senha'), FILTER_VALIDATE_BOOLEAN)) {
				$usuario = Auth::user();

				if(!$usuario || !Hash::check($request->input('usu_senha_atual'), $usuario->usu_senha)) {
					return $this->fail([ 'usu_senha_atual' => 'A senha atual está incorreta.' ]);
				}

				$usuario->usu_senha = Hash::make( $request->input('usu_senha') );
				$usuario->save();
			}

			DB::table('vacinometro')
              ->where('campo', '=', 'doses_recebidas')
              ->update(['valor' => $request->input('doses_recebidas')]);

            DB::table('vacinometro')
              ->where('campo', '=', 'doses_aplicadas')
              ->update(['valor' => $request->input('doses_aplicadas')]);

            DB::table('vacinometro')
              ->where('campo', '=', 'primeira_dose')
              ->update(['valor' => $request->input('primeira_dose')]);

            DB::table('vacinometro')
              ->where('campo', '=', 'segunda_dose')
              ->update(['valor' => $request->input('segunda_dose')]);

			DB::commit();
		}
		catch(\Exception $e) {
			DB::rollback();
			Log::error($e);
			return $this->error($e->getMessage(), 500, $e);
		}

		return $this->success();
	}

	/**
	 * API: Listar usuários.
	 */
	public function listarUsuarios(Request $request)
	{
		// Autorização
		$usuario = Auth::user();

		if ($usuario->usu_administrador != 'S') {
			return $this->error( 'Não permitido.', 403 );
		}

		// Carregar dados
		$table     = $request->input('table', true);
		$limit     = $request->input('limit', 20);
		$page      = $request->input('page', 1);
		$orderBy   = $request->input('orderBy', 'usu_login');
		$ascending = $request->input('ascending', 1);

		$columns = [
			'usuario.usuario_id',
			'usuario.usu_login',
			//'usuario.usu_situacao_cadastro',
			'usuario.usu_data_cadastro',
		];

		$data = Usuario::select($columns)->where('usu_tipo', 'ADM')->where('usu_administrador', '<>', 'S');

		if ($table) {
			// Quantidade total
			$count = $data->count();

			// Limite
			$data->limit($limit)->skip($limit * ($page - 1));
		}

		// Ordenação
		$direction = $ascending == 1 ? "ASC" : "DESC";
		$data->orderBy($orderBy, $direction);

		$result = $data->get()->toArray();

		if ($table) {
			return $this->success([ 'items' => $result, 'count' => $count ]);
		}

		return $this->success($result);
	}

	public function getUsuario(Request $request, $id){

		// Autorização
		$user = Auth::user();

		if ($user->usu_administrador != 'S') {
			return $this->error( 'Não permitido.', 403 );
		}

		$usuario = Usuario::where('usuario_id', $id)->first();

		return $this->success($usuario);

	}

	public function editarUsuario(Request $request, $id){

		// Validação
		$rules = [
			'privilegios'                 => 'required|array|min:1',
		];

		$messages = [
			'privilegios.min' => 'É preciso escolher ao menos um privilégio.',
			'privilegios.array' => 'É preciso escolher ao menos um privilégio.',
			'privilegios.required' => 'É preciso escolher ao menos um privilégio.',
		];

		$this->validate($request, $rules, $messages);


		// Autorização
		$user = Auth::user();

		if ($user->usu_administrador != 'S') {
			return $this->error( 'Não permitido.', 403 );
		}

		$usuario = Usuario::where('usuario_id', $id)->first();

		DB::beginTransaction();

		try {

			// Usuario
			$usuario->privilegio_licitacoes  = in_array('Licitações e contratos', $request->privilegios);
			$usuario->privilegio_noticias  = in_array('Notícias', $request->privilegios);
			$usuario->privilegio_servicos  = in_array('Serviços', $request->privilegios);
			$usuario->privilegio_informacao  = in_array('Acesso à informação', $request->privilegios);
			$usuario->privilegio_editais  = in_array('Editais', $request->privilegios);
			$usuario->privilegio_esic  = in_array('E-sic', $request->privilegios);
			$usuario->privilegio_ouvidoria  = in_array('Ouvidoria', $request->privilegios);
			$usuario->save();
			DB::commit();
		}
		catch(\Exception $e) {
			DB::rollback();
			Log::error($e);
			return $this->error($e->getMessage(), 500, $e);
		}

		return $this->success($usuario);

	}

	/**
	 * API: Cadastrar usuário administrador.
	 */
	public function salvarUsuario(Request $request)
	{
		// Autorização
		$usuario = Auth::user();

		if ($usuario->usu_administrador != 'S') {
			return $this->error( 'Não permitido.', 403 );
		}

		// Validação
		$rules = [
			'usu_login'             => 'required|max:200|email',
			'usu_login_confirmacao' => 'required|same:usu_login',
			'privilegios'                 => 'required|array|min:1',
		];

		$rules['usu_login'] = explode('|', $rules['usu_login']);
		$rules['usu_login'][] = Rule::unique('usuario')->where(function ($query) { $query->where('usu_tipo', 'ADM'); });

		$messages = [
			'usu_login.unique' => 'O e-mail informado já está cadastrado no sistema.',
			'usu_login_confirmacao.same' => 'Os e-mails não coincidem.',
			'privilegios.min' => 'É preciso escolher ao menos um privilégio.',
			'privilegios.array' => 'É preciso escolher ao menos um privilégio.',
			'privilegios.required' => 'É preciso escolher ao menos um privilégio.',
		];

		$this->validate($request, $rules, $messages);

		DB::beginTransaction();

		try {
			$usu_senha = str_random(12);

			// Usuario
			$usuario = new Usuario();
			$usuario->usu_login              = strtolower( $request->input('usu_login') );
			$usuario->usu_senha              = Hash::make( $usu_senha );
			$usuario->usu_tipo               = 'ADM';
			$usuario->usu_situacao_cadastro  = 'A';
			$usuario->privilegio_licitacoes  = in_array('Licitações e contratos', $request->privilegios);
			$usuario->privilegio_noticias  = in_array('Notícias', $request->privilegios);
			$usuario->privilegio_servicos  = in_array('Serviços', $request->privilegios);
			$usuario->privilegio_informacao  = in_array('Acesso à informação', $request->privilegios);
			$usuario->privilegio_editais  = in_array('Editais', $request->privilegios);
			$usuario->privilegio_esic  = in_array('E-sic', $request->privilegios);
			$usuario->privilegio_ouvidoria  = in_array('Ouvidoria', $request->privilegios);
			$usuario->save();

			// Enviar e-mail de confirmação de cadastro
			Mail::to($usuario->usu_login)->send(new CadastroAdministrador( $usuario, $usu_senha ));

			DB::commit();
		}
		catch(\Exception $e) {
			DB::rollback();
			Log::error($e);
			return $this->error($e->getMessage(), 500, $e);
		}

		return $this->success($usuario);
	}

	/**
	 * API: Excluir usuário administrador.
	 */
	public function excluirUsuario(Request $request, $id)
	{
		// Autorização
		$usuario = Auth::user();

		if ($usuario->usu_administrador != 'S') {
			return $this->error( 'Não permitido.', 403 );
		}

		$usuario = Usuario::where('usu_tipo', 'ADM')
						  ->where('usu_administrador', '<>', 'S')
						  ->findOrFail($id);

		$usuario->delete();

		return $this->success();
	}
}

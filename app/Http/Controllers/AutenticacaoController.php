<?php

namespace App\Http\Controllers;

use App\Mail\RecuperarSenha;
use App\Models\Configuracao;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Auth, DB, Mail;

class AutenticacaoController extends Controller
{
	/**
	 *
	 */
	public function login(Request $request)
    {
	    $this->validate($request, [
		    'usu_login' => 'required|string',
		    'usu_senha' => 'required|string',
	    ]);

	    $usu_login = $request->usu_login;
	    $usu_senha = $request->usu_senha;
	    $usu_tipo  = $request->input('painel', false) ? 'ADM' : 'SOL';

	    $usuario = Usuario::where(['usu_login' => $usu_login, 'usu_tipo' => $usu_tipo])->first();

	    if (!$usuario || !Hash::check($usu_senha, $usuario->usu_senha)) {
		    return $this->error('Usuário inválido.', 400);
	    }

	    if ($usuario->usu_situacao_cadastro != 'A') {
		    if ( $usuario->usu_situacao_cadastro == 'B' ) {
			    return $this->error( 'Usuário bloqueado.', 403 );
		    }
		    else if ( $usuario->usu_situacao_cadastro == 'P' ) {
			    return $this->error( 'Usuário com confirmação de cadastro pendente.', 400 );
		    }
		    else {
			    return $this->error( 'Usuário com problema no cadastro. Por favor, entre em contato com o administrador.', 400 );
		    }
	    }

	    $auth_guard = ($usu_tipo == 'ADM' ? 'admin' : 'web');

	    if (Auth::guard($auth_guard)->attempt(['usu_login' => $request->usu_login, 'password' => $request->usu_senha, 'usu_tipo' => $usu_tipo])) {
			// Exibir mensagem de boas-vindas no painel admin
	    	if($auth_guard == 'admin') {
			    $request->session()->put( 'welcome', 1 );
		    }

	    	return $this->success();
	    }

	    return $this->error('Não foi possível realizar o login do usuário.');
    }

    public function home(Request $request){

    	if (Auth::user()->privilegio_licitacoes || Auth::user()->usu_administrador == 'S') {
            return redirect( 'painel/processos' );
        }
        else{
        	return redirect( 'painel/configuracoes' );
        }

    }

	/**
	 * API: Solicitar envio de e-mail de recuperação.
	 */
    public function recuperarSenha(Request $request)
    {
	    $rules = [ 'usu_login' => 'required|email' ];

	    $this->validate($request, $rules);

	    // Buscar usuário pelo login
	    $usu_login = strtolower( $request->usu_login );

	    $usuario = Usuario::where('usuario.usu_tipo', 'SOL')
	                      ->where('usuario.usu_login', $usu_login)
		                  ->where('usu_situacao_cadastro', '!=', 'B')
	                      ->first();

	    if(!$usuario) {
		    return $this->error('Usuário não encontrado ou bloqueado.', 400);
	    }

	    // Gerar novo código de confirmação
	    $usuario->usu_codigo_confirmacao = md5( uniqid( $usuario->usu_login, true ) );
	    $usuario->usu_data_confirmacao   = date( "Y-m-d H:i:s", strtotime( '+24 hours' ) );
	    $usuario->save();

	    // Enviar e-mail de confirmação
	    Mail::to($usuario->usu_login)->send(new RecuperarSenha( $usuario ));

	    return $this->success();
    }

	/**
	 * API: Alterar senha de acesso ao E-Sic através de link de recuperação.
	 */
    public function alterarSenha(Request $request)
	{
		$rules = [
			'usu_senha'             => 'required|regex:/^(?=.*[A-Za-z])(?=.*[0-9]).{8,20}$/',
			'usu_senha_confirmacao' => 'required|same:usu_senha',
		];

		$messages = [
			'usu_senha.regex'            => 'A senha deve ter de 8 a 20 caracteres e pelo menos 1 letra e 1 número.',
			'usu_senha_confirmacao.same' => 'As senhas não conferem.',
		];

		$this->validate($request, $rules, $messages);

		// Verificar a presença do token
		if(!$request->has('token')) {
			return $this->error('Não foi possível processar a sua solicitação.', 400);
		}

		// Buscar usuário pelo token
		$usuario = Usuario::where('usu_codigo_confirmacao', $request->input('token'))
						  ->whereRaw('usu_data_confirmacao >= now()')
						  ->where('usuario.usu_tipo', 'SOL')
						  ->where('usu_situacao_cadastro', '!=', 'B')
		                  ->first();

		if(!$usuario) {
			return $this->error('Não foi possível processar a sua solicitação.', 400);
		}

		// Atualizar a senha
		$usuario->usu_codigo_confirmacao = null;
		$usuario->usu_data_confirmacao   = null;
		$usuario->usu_senha              = Hash::make( $request->input( 'usu_senha' ) );

		// Ativar o cadastro se ainda estiver Pendente
		if($usuario->usu_situacao_cadastro == 'P') {
			$usuario->usu_situacao_cadastro = 'A';
		}

		$usuario->save();

		return $this->success();
	}

	/**
	 * Finalizar sessão no E-Sic.
	 */
    public function logoutEsic(Request $request)
    {
	    Auth::guard('web')->logout();

    	$request->session()->flush();
	    $request->session()->regenerate();

	    return redirect('/esic/acesso');
    }

	/**
	 * Finalizar sessão no Painel Administrativo.
	 */
	public function logoutPainel(Request $request)
	{
		Auth::guard('admin')->logout();

		$request->session()->flush();
		$request->session()->regenerate();

		return redirect('/painel/acesso');
	}
}

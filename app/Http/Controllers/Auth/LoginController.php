<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers {
	    login as public trait_login;
    }

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

	public function login(Request $request)
	{
		if($request->has('usu_senha')) {
			$request->request->add( [ 'password' => $request->usu_senha ] );
		}

		$this->trait_login($request);

		if(Auth::check()) {
			return $this->success();
		}

		return $this->error();
	}

	public function username()
	{
		return 'usu_login';
	}

	protected function guard()
	{
		return Auth::guard();
	}
}

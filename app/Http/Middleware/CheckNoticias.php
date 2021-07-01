<?php

namespace App\Http\Middleware;

use Closure;
use Auth;


class CheckNoticias
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::user()->privilegio_noticias || Auth::user()->usu_administrador == 'S') {
            return $next($request);
        }

        return redirect('painel/forbidden');
    }
}

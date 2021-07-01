<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class CheckEsic
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
        if (Auth::user()->privilegio_esic || Auth::user()->usu_administrador == 'S') {
            return $next($request);
        }

        return redirect('painel/forbidden');
    }
}

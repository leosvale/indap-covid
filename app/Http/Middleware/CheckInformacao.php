<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class CheckInformacao
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
        if (Auth::user()->privilegio_informacao || Auth::user()->usu_administrador == 'S') {
            return $next($request);
        }

        return redirect('painel/forbidden');
    }
}

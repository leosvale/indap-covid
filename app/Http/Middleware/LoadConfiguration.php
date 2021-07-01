<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Configuracao;

class LoadConfiguration
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
	    // Carregar dados de configuração para a sessão
        if(!$request->session()->has('configuracao') || 
            !$request->session()->has('configuracao.logo') ||
            !$request->session()->has('configuracao.favico') ||
            !$request->session()->has('configuracao.logo_indap')) {
		    $config_ids = [
                'nome',
                'portal',
                'uf',
                'logo',
                'favico',
			    'favico_html',
                'endereco',
                'telefone_primario',
                'telefone_secundario',
                'cor',
                'logo_indap',
            ];

		    $configuracoes = Configuracao::whereIn('configuracao_id', $config_ids)->get();
		    $configuracoes = $configuracoes->mapWithKeys(function ($item) {
			    return [$item['configuracao_id'] => $item['cfg_valor']];
            });

		    $request->session()->put('configuracao', $configuracoes);
	    }

        return $next($request);
    }
}

<?php

namespace App\Http\Middleware;

use App\Models\Configuracao;
use Closure, DB;

class SubdomainSetup
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
		if(config('app.env') == 'production') {
			$host = $request->getHost();
			$list = explode('.', $host);

			if($list[0] == 'www') array_shift($list);

			if(count($list) <= 3) {
				return redirect('http://www.indap.org.br');
			}

			array_splice($list, -3, 3);

			$dominio = join('.', $list);

			// Buscar entidade no banco
			$entidade = DB::table('entidade')->where('ent_dominio', $dominio)->first();

			if (!$entidade || $entidade->ent_ativo != 'S') {
				return redirect('http://www.indap.org.br');
			}

			// Configurar banco da entidade
			$default_conn = DB::getDefaultConnection();
			$database_config = [ 'database.connections.'.$default_conn.'.database' => $entidade->ent_banco ];

			if($entidade->ent_usuario) {
				$database_config['database.connections.'.$default_conn.'.username'] = $entidade->ent_usuario;
			}

			if($entidade->ent_senha) {
				$database_config['database.connections.'.$default_conn.'.password'] = $entidade->ent_senha;
			}

			config( $database_config );

			// Reconectar
			DB::reconnect( $default_conn );

			config(['app.domain' => $dominio]);
		}
		else {
			// Dominio em modo de desenvolvimento
			config(['app.domain' => 'teste']);
		}

		return $next($request);
	}
}
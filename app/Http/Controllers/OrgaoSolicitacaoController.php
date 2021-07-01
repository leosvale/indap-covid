<?php

namespace App\Http\Controllers;

use DB;

class OrgaoSolicitacaoController extends Controller
{
	public function __invoke()
	{
		$data = DB::table('tipo_orgao_solicitacao')
		          ->orderBy('tos_nome')
		          ->get();

		return $this->success($data);
	}
}

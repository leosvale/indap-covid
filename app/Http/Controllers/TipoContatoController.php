<?php

namespace App\Http\Controllers;

use DB;

class TipoContatoController extends Controller
{
	public function __invoke()
	{
		$data = DB::table('tipo_contato')
		          ->orderBy('tco_nome')
		          ->get();

		return $this->success($data);
	}
}

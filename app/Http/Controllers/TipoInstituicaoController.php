<?php

namespace App\Http\Controllers;

use DB;

class TipoInstituicaoController extends Controller
{
	public function __invoke()
	{
		$data = DB::table('tipo_instituicao')
		          ->orderBy('tin_nome')
		          ->get();

		return $this->success($data);
	}
}

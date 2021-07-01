<?php

namespace App\Http\Controllers;

use DB;

class AreaAtuacaoController extends Controller
{
	public function __invoke()
	{
		$data = DB::table('tipo_area_atuacao')
		          ->orderBy('taa_nome')
		          ->get();

		return $this->success($data);
	}
}

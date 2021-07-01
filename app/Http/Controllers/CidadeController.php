<?php

namespace App\Http\Controllers;

use DB;

class CidadeController extends Controller
{
	public function __invoke($sigla)
	{
		$data = DB::table('cidade')
			      ->join('estado', 'estado.estado_id', '=', 'cidade.estado_id')
				  ->where('estado.est_sigla', $sigla)
		          ->orderBy('cid_nome')
		          ->get();

		return $this->success($data);
	}
}

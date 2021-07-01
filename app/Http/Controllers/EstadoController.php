<?php

namespace App\Http\Controllers;

use DB;

class EstadoController extends Controller
{
	public function __invoke()
	{
		$data = DB::table('estado')
		          ->orderBy('est_nome')
		          ->get();

		return $this->success($data);
	}
}

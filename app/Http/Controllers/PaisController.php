<?php

namespace App\Http\Controllers;

use DB;

class PaisController extends Controller
{
	public function __invoke()
	{
		$data = DB::table('pais')
		          ->orderBy('pai_nome')
		          ->get();

		return $this->success($data);
	}
}

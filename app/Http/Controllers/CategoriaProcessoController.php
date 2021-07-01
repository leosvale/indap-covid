<?php

namespace App\Http\Controllers;

use DB;

class CategoriaProcessoController extends Controller
{
    public function __invoke()
    {
    	$data = DB::table('tipo_categoria_processo')
		    	  ->orderBy('tcp_nome')
		    	  ->get();

    	return $this->success($data);
    }
}

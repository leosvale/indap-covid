<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

class TipoProcessoController extends Controller
{
    public function __invoke()
    {
    	$data = DB::table('tipo_processo')
		    	  ->orderBy('tpr_nome')
		    	  ->get();

    	return $this->success($data);
    }

    public function show(Request $request, $id)
    {
      $categorias = DB::table('tipo_processo')
      ->where('tipo_processo_id', $id)
      ->first();

      return $this->success($categorias);
    }
}

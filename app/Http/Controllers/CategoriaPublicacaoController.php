<?php

namespace App\Http\Controllers;

use App\Models\CategoriaPublicacao;
use DB;
use Illuminate\Http\Request;

class CategoriaPublicacaoController extends Controller
{
	/**
	 * AJAX: Listar categorias.
	 */
    public function index()
    {
    	$data = DB::table('tipo_categoria_publicacao')
		    	  ->orderBy('tcp_nome')
		    	  ->get();

    	return $this->success($data);
    }

	/**
	 * AJAX: Cadastrar categoria.
	 */
	public function store(Request $request)
	{
		// Validação
		$rules = [
			'tcp_nome' => 'required|max:100',
		];

		$messages = [];

		$this->validate($request, $rules, $messages);

		$categoria = CategoriaPublicacao::findOrNew($request->tipo_categoria_publicacao_id);
		$categoria->tcp_nome = $request->tcp_nome;
		$categoria->save();

		return $this->success($categoria);
	}

	/**
	 * AJAX: Excluir categoria.
	 */
	public function destroy(Request $request, $id)
	{
		$categoria = CategoriaPublicacao::findOrFail($id);

		if($categoria->tcp_fixa == 'S') {
			return $this->error('Não é possível remover uma categoria fixa.', 400);
		}

		$categoria->delete();

		return $this->success();
	}
}

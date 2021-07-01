<?php

namespace App\Http\Controllers;

use App\Models\CategoriaServico;
use DB;
use Illuminate\Http\Request;

class CategoriaServicoController extends Controller
{
	/**
	 * AJAX: Listar categorias.
	 */
    public function index()
    {
    	$data = DB::table('tipo_categoria_servico')
		    	  ->orderBy('tcs_nome')
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
			'tcs_nome' => 'required|max:100',
			'tcs_icone' => 'required|max:100',
			'tcs_descricao' => 'required',
		];

		$messages = [];

		$this->validate($request, $rules, $messages);

		$categoria = CategoriaServico::findOrNew($request->tipo_categoria_servico_id);
		$categoria->tcs_nome = $request->tcs_nome;
		$categoria->tcs_descricao = $request->tcs_descricao;
		$categoria->tcs_icone = $request->tcs_icone;
		$categoria->save();

		return $this->success($categoria);
	}

	/**
	 * AJAX: Excluir categoria.
	 */
	public function destroy(Request $request, $id)
	{
		$categoria = CategoriaServico::findOrFail($id);

		if($categoria->tcs_fixa == 'S') {
			return $this->error('Não é possível remover uma categoria fixa.', 400);
		}

		$categoria->delete();

		return $this->success();
	}
}

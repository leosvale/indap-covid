<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TipoSituacaoSolicitacaoController extends Controller
{
	public function __invoke()
	{
		// Em caso de mudança nessas constantes, verificar também:
		// * SolicitacaoController@update
		$data = [
			'ESP' => 'Em espera',
            'ANA' => 'Em análise',
            'CON' => 'Concluída',
            'REJ' => 'Rejeitada',
		];

		return $this->success($data);
	}
}

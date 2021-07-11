<?php

namespace App\Http\Controllers;

use App\Mail\CadastroAdministrador;
use App\Models\Configuracao;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use DB, Log, Auth, Mail;

class VacinometroController extends Controller
{
    /**
	 * Tela de configurações da Entidade.
	 */
	public function vacinometro()
	{
		return view('configuracao.vacinometro');
	}

	/**
	 * AJAX: Carregar configurações.
	 */
	public function index()
	{
		
		$doses_recebidas = DB::table('vacinometro')->where('campo', '=', 'doses_recebidas')->first();
		$doses_aplicadas = DB::table('vacinometro')->where('campo', '=', 'doses_aplicadas')->first();
		$primeira_dose = DB::table('vacinometro')->where('campo', '=', 'primeira_dose')->first();
		$segunda_dose = DB::table('vacinometro')->where('campo', '=', 'segunda_dose')->first();

		$vacinometro = [
			'doses_recebidas' => $doses_recebidas, 
			'doses_aplicadas' => $doses_aplicadas, 
			'primeira_dose' => $primeira_dose, 
			'segunda_dose' => $segunda_dose]
			;

		$data = [
			'vacinometro' => $vacinometro
		];

		return $this->success($data);
	}

	/**
	 * API: Atualizar configurações.
	 */
	public function store(Request $request)
	{
		
		DB::beginTransaction();

		try {
			
			DB::table('vacinometro')
              ->where('campo', '=', 'doses_recebidas')
              ->update([
              	'valor' => $request->input('doses_recebidas'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'doses_aplicadas')
              ->update([
              	'valor' => $request->input('doses_aplicadas'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'primeira_dose')
              ->update([
              	'valor' => $request->input('primeira_dose'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'segunda_dose')
              ->update([
              	'valor' => $request->input('segunda_dose'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

			DB::commit();
		}
		catch(\Exception $e) {
			DB::rollback();
			Log::error($e);
			return $this->error($e->getMessage(), 500, $e);
		}

		return $this->success();
	}
}

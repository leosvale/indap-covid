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
		$homens = DB::table('vacinometro')->where('campo', '=', 'homens')->first();
		$mulheres = DB::table('vacinometro')->where('campo', '=', 'mulheres')->first();
		$adultos = DB::table('vacinometro')->where('campo', '=', 'adultos')->first();
		$adolescentes = DB::table('vacinometro')->where('campo', '=', 'adolescentes')->first();
		$criancas = DB::table('vacinometro')->where('campo', '=', 'criancas')->first();
		$cem_anos = DB::table('vacinometro')->where('campo', '=', 'cem_anos')->first();
		$noventa_anos = DB::table('vacinometro')->where('campo', '=', 'noventa_anos')->first();
		$oitenta_anos = DB::table('vacinometro')->where('campo', '=', 'oitenta_anos')->first();
		$setenta_anos = DB::table('vacinometro')->where('campo', '=', 'setenta_anos')->first();
		$sessenta_anos = DB::table('vacinometro')->where('campo', '=', 'sessenta_anos')->first();
		$cinquenta_anos = DB::table('vacinometro')->where('campo', '=', 'cinquenta_anos')->first();
		$quarenta_anos = DB::table('vacinometro')->where('campo', '=', 'quarenta_anos')->first();
		$trinta_anos = DB::table('vacinometro')->where('campo', '=', 'trinta_anos')->first();
		$vinte_anos = DB::table('vacinometro')->where('campo', '=', 'vinte_anos')->first();

		$vacinometro = [
			'doses_recebidas' => $doses_recebidas, 
			'doses_aplicadas' => $doses_aplicadas, 
			'primeira_dose' => $primeira_dose, 
			'segunda_dose' => $segunda_dose,
			'homens' => $homens,
			'mulheres' => $mulheres,
			'adultos' => $adultos,
			'adolescentes' => $adolescentes,
			'criancas' => $criancas,
			'cem_anos' => $cem_anos,
			'noventa_anos' => $noventa_anos,
			'oitenta_anos' => $oitenta_anos,
			'setenta_anos' => $setenta_anos,
			'sessenta_anos' => $sessenta_anos,
			'cinquenta_anos' => $cinquenta_anos,
			'quarenta_anos' => $quarenta_anos,
			'trinta_anos' => $trinta_anos,
			'vinte_anos' => $vinte_anos
		];

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

            DB::table('vacinometro')
              ->where('campo', '=', 'homens')
              ->update([
              	'valor' => $request->input('homens'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'mulheres')
              ->update([
              	'valor' => $request->input('mulheres'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'adultos')
              ->update([
              	'valor' => $request->input('adultos'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'adolescentes')
              ->update([
              	'valor' => $request->input('adolescentes'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'crianca')
              ->update([
              	'valor' => $request->input('crianca'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'cem_anos')
              ->update([
              	'valor' => $request->input('cem_anos'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'noventa_anos')
              ->update([
              	'valor' => $request->input('noventa_anos'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'oitenta_anos')
              ->update([
              	'valor' => $request->input('oitenta_anos'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'setenta_anos')
              ->update([
              	'valor' => $request->input('setenta_anos'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'sessenta_anos')
              ->update([
              	'valor' => $request->input('sessenta_anos'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'cinquenta_anos')
              ->update([
              	'valor' => $request->input('cinquenta_anos'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'quarenta_anos')
              ->update([
              	'valor' => $request->input('quarenta_anos'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'trinta_anos')
              ->update([
              	'valor' => $request->input('trinta_anos'),
              	'updated_at' => \Carbon\Carbon::now()
              ]);

            DB::table('vacinometro')
              ->where('campo', '=', 'vinte_anos')
              ->update([
              	'valor' => $request->input('vinte_anos'),
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

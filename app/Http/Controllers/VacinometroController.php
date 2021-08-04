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
    $dose_unica = DB::table('vacinometro')->where('campo', '=', 'dose_unica')->first();
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
      'dose_unica' => $dose_unica,
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

    $casos_ativos = DB::table('boletim')->where('campo', '=', 'casos_ativos')->first();
    $casos_curados = DB::table('boletim')->where('campo', '=', 'casos_curados')->first();
    $casos_aguardando_resultado = DB::table('boletim')->where('campo', '=', 'casos_aguardando_resultado')->first();
    $casos_confirmados = DB::table('boletim')->where('campo', '=', 'casos_confirmados')->first();
    $resultados_negativos = DB::table('boletim')->where('campo', '=', 'resultados_negativos')->first();
    $exames_realizados = DB::table('boletim')->where('campo', '=', 'exames_realizados')->first();
    $obitos = DB::table('boletim')->where('campo', '=', 'obitos')->first();
    $casos_ativos_do_dia = DB::table('boletim')->where('campo', '=', 'casos_ativos_do_dia')->first();
    $casos_curados_do_dia = DB::table('boletim')->where('campo', '=', 'casos_curados_do_dia')->first();
    $obitos_do_dia = DB::table('boletim')->where('campo', '=', 'obitos_do_dia')->first();

    $boletim = [
      'casos_ativos' => $casos_ativos, 
      'casos_curados' => $casos_curados, 
      'casos_aguardando_resultado' => $casos_aguardando_resultado, 
      'casos_confirmados' => $casos_confirmados,
      'resultados_negativos' => $resultados_negativos,
      'exames_realizados' => $exames_realizados,
      'obitos' => $obitos,
      'casos_ativos_do_dia' => $casos_ativos_do_dia,
      'casos_curados_do_dia' => $casos_curados_do_dia,
      'obitos_do_dia' => $obitos_do_dia
    ];

		$data = [
			'vacinometro' => $vacinometro,
      'boletim'     => $boletim
		];

		return $this->success($data);
	}

	/**
	 * API: Atualizar configurações.
	 */
	public function store(Request $request)
	{

    // Validação
    $rules = [
      'doses_recebidas' => 'required|numeric',
      'doses_aplicadas' => 'required|numeric',
      'primeira_dose'   => 'required|numeric',
      'segunda_dose'    => 'required|numeric',
      'dose_unica'      => 'required|numeric',
      'homens'          => 'required|numeric',
      'mulheres'        => 'required|numeric',
      'adultos'         => 'required|numeric',
      'adolescentes'    => 'required|numeric',
      'criancas'        => 'required|numeric',
      'cem_anos'        => 'required|numeric',
      'noventa_anos'    => 'required|numeric',
      'oitenta_anos'    => 'required|numeric',
      'setenta_anos'    => 'required|numeric',
      'sessenta_anos'   => 'required|numeric',
      'cinquenta_anos'  => 'required|numeric',
      'quarenta_anos'   => 'required|numeric',
      'trinta_anos'     => 'required|numeric',
      'vinte_anos'      => 'required|numeric',
      'casos_ativos'               => 'required|numeric', 
      'casos_curados'              => 'required|numeric', 
      'casos_aguardando_resultado' => 'required|numeric', 
      'casos_confirmados'          => 'required|numeric',
      'resultados_negativos'       => 'required|numeric',
      'exames_realizados'          => 'required|numeric',
      'obitos'                     => 'required|numeric',
      'casos_ativos_do_dia'        => 'required|numeric',
      'casos_curados_do_dia'       => 'required|numeric',
      'obitos_do_dia'              => 'required|numeric'
    ];

    $messages = [
      'doses_recebidas.required' => 'Esse campo é obrigatório',
      'doses_aplicadas.required' => 'Esse campo é obrigatório',
      'primeira_dose.required'   => 'Esse campo é obrigatório',
      'segunda_dose.required'    => 'Esse campo é obrigatório',
      'dose_unica.required'      => 'Esse campo é obrigatório',
      'homens.required'          => 'Esse campo é obrigatório',
      'mulheres.required'        => 'Esse campo é obrigatório',
      'adultos.required'         => 'Esse campo é obrigatório',
      'adolescentes.required'    => 'Esse campo é obrigatório',
      'criancas.required'        => 'Esse campo é obrigatório',
      'cem_anos.required'        => 'Esse campo é obrigatório',
      'noventa_anos.required'    => 'Esse campo é obrigatório',
      'oitenta_anos.required'    => 'Esse campo é obrigatório',
      'setenta_anos.required'    => 'Esse campo é obrigatório',
      'sessenta_anos.required'   => 'Esse campo é obrigatório',
      'cinquenta_anos.required'  => 'Esse campo é obrigatório',
      'quarenta_anos.required'   => 'Esse campo é obrigatório',
      'trinta_anos.required'     => 'Esse campo é obrigatório',
      'vinte_anos.required'      => 'Esse campo é obrigatório'

    ];

    $this->validate( $request, $rules, $messages );
		
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
            ->where('campo', '=', 'dose_unica')
            ->update([
              'valor' => $request->input('dose_unica'),
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
            ->where('campo', '=', 'criancas')
            ->update([
            	'valor' => $request->input('criancas'),
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

          // Boletim

          DB::table('boletim')
            ->where('campo', '=', 'casos_ativos')
            ->update([
              'valor' => $request->input('casos_ativos'),
              'fonte' => $request->input('fonte'),
              'updated_at' => \Carbon\Carbon::now()
            ]);

          DB::table('boletim')
            ->where('campo', '=', 'casos_curados')
            ->update([
              'valor' => $request->input('casos_curados'),
              'fonte' => $request->input('fonte'),
              'updated_at' => \Carbon\Carbon::now()
            ]);

          DB::table('boletim')
            ->where('campo', '=', 'casos_aguardando_resultado')
            ->update([
              'valor' => $request->input('casos_aguardando_resultado'),
              'fonte' => $request->input('fonte'),
              'updated_at' => \Carbon\Carbon::now()
            ]);

          DB::table('boletim')
            ->where('campo', '=', 'casos_confirmados')
            ->update([
              'valor' => $request->input('casos_confirmados'),
              'fonte' => $request->input('fonte'),
              'updated_at' => \Carbon\Carbon::now()
            ]);

          DB::table('boletim')
            ->where('campo', '=', 'resultados_negativos')
            ->update([
              'valor' => $request->input('resultados_negativos'),
              'fonte' => $request->input('fonte'),
              'updated_at' => \Carbon\Carbon::now()
            ]);

          DB::table('boletim')
            ->where('campo', '=', 'exames_realizados')
            ->update([
              'valor' => $request->input('exames_realizados'),
              'fonte' => $request->input('fonte'),
              'updated_at' => \Carbon\Carbon::now()
            ]);

          DB::table('boletim')
            ->where('campo', '=', 'obitos')
            ->update([
              'valor' => $request->input('obitos'),
              'fonte' => $request->input('fonte'),
              'updated_at' => \Carbon\Carbon::now()
            ]);

          DB::table('boletim')
            ->where('campo', '=', 'casos_ativos_do_dia')
            ->update([
              'valor' => $request->input('casos_ativos_do_dia'),
              'fonte' => $request->input('fonte'),
              'updated_at' => \Carbon\Carbon::now()
            ]);

          DB::table('boletim')
            ->where('campo', '=', 'casos_curados_do_dia')
            ->update([
              'valor' => $request->input('casos_curados_do_dia'),
              'fonte' => $request->input('fonte'),
              'updated_at' => \Carbon\Carbon::now()
            ]);

          DB::table('boletim')
            ->where('campo', '=', 'obitos_do_dia')
            ->update([
              'valor' => $request->input('obitos_do_dia'),
              'fonte' => $request->input('fonte'),
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

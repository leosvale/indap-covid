<?php

namespace App\Http\Controllers;

use App\Mail\OuvidoriaEmail;
use App\Mail\Protocolo;
use App\Services\AnexoService;
use App\Models\Anexo;
use App\Models\Contato;
use App\Models\RespostaContato;
use Illuminate\Http\Request;
use DB, Log, Mail, URL;

class ContatoController extends Controller
{
	/**
	 * Tela de envio de mensagens para a Ouvidoria.
	 */
    public function cadastro()
    {
	    return view('contato.cadastro');
    }

	/**
	 * Tela de lista de mensagens da Ouvidoria.
	 */
	public function lista()
	{
		return view('contato.lista');
	}

	/**
	 * Tela de detalhes do contato.
	 */
	public function detalhes($id)
	{
		$data = ['id' => $id];
		return view('contato.detalhes', $data);
	}

	/**
	 * AJAX: Listar contatos da Ouvidoria.
	 */
	public function index(Request $request)
	{
		$table     = $request->input('table', true);
		$limit     = $request->input('limit', 20);
		$page      = $request->input('page', 1);
		$orderBy   = $request->input('orderBy', 'ctt_data_cadastro');
		$ascending = $request->input('ascending', 0);

		$data = Contato::query();

		// Filtros
//		if($request->has('query')) {
//			$filters = json_decode($request->input('query'));
//
//			if (!empty($filters->slc_protocolo)) {
//				$data->where('slc_protocolo', 'LIKE', '%'.$filters->slc_protocolo.'%');
//			}
//
//			if (!empty($filters->slc_situacao)) {
//				$data->where('slc_situacao', $filters->slc_situacao);
//			}
//		}

		// Contagem e Limite/Paginacao
		if($table) {
			$count = $data->count();
			$data->limit($limit)->skip($limit * ($page - 1));
		}

		// Ordenacao
		$direction = $ascending == 1 ? "ASC" : "DESC";
		$data->orderBy($orderBy, $direction);

		$result = $data->get()->toArray();

		if($table) {
			return $this->success([ 'items' => $result, 'count' => $count ]);
		}

		return $this->success($result);
	}

	/**
	 * AJAX: Exibir contato.
	 */
	public function show(Request $request, $id)
	{
		$data = Contato::select('contato.*', 'tco.tco_nome')
					   ->leftJoin('tipo_contato AS tco', 'tco.tipo_contato_id', '=', 'contato.tipo_contato_id')
					   ->findOrFail($id);

		$data->load([
			'anexos' => function ($query) {},
		]);

		return $this->success($data);
	}


	/**
	 * AJAX: Exibir contato.
	 */
	public function respostaContato(Request $request, $id)
	{
		$data = RespostaContato::where('contato_id', $id)->get();

		return $this->success($data);
	}

	/**
     * Send the given email.
     *
     * @param  Request  $request
     * @return Response
     */
    public function sendEmail(Request $request)
    {

    	//dd($request->files);

    	$contato = Contato::select('contato.*', 'tco.tco_nome')
					   ->leftJoin('tipo_contato AS tco', 'tco.tipo_contato_id', '=', 'contato.tipo_contato_id')
					   ->findOrFail($request->contato);

		$anexos = [];

		foreach ($request->files as $file ) {
			
			$file_path = 'anexos/' . date('Y/m');
			$file_hash = uniqid(mt_rand());
			$file_name = $file->getClientOriginalName();
			$file_mime = $file->getMimeType();
			$file_mime = $file_mime ?: $file->getClientMimeType();
			$file_ext  = $file->getClientOriginalExtension();
			$file->move(storage_path($file_path), $file_hash . '.' . $file_ext);

			DB::beginTransaction();

			try {

				$anexo = Anexo::create([
					'ane_nome'    => $file_name,
					'ane_mime'    => $file_mime,
					'ane_arquivo' => $file_path . '/' . $file_hash . '.' . $file_ext
				]);
				DB::commit();
			}
			catch(\Exception $e) {
				DB::rollback();
				Log::error($e);
				return $this->error($e->getMessage(), 500, $e);
			}

			array_push($anexos, $anexo );

		}

		DB::beginTransaction();

		try {

			$resposta = RespostaContato::create([
				'assunto'    => $request->assunto,
				'mensagem'   => $request->mensagem,
				'contato_id' => $contato->contato_id
			]);
			DB::commit();
		}
		catch(\Exception $e) {
			DB::rollback();
			Log::error($e);
			return $this->error($e->getMessage(), 500, $e);
		}

		$paths = [];

		foreach ($anexos as $anexo) {
			array_push($paths, storage_path($anexo->ane_arquivo) );

			DB::beginTransaction();

		}

        // Enviar e-mail de confirmação de cadastro
		Mail::to($contato->ctt_email, $contato->ctt_nome, $request->files)->queue(new OuvidoriaEmail( $request->mensagem, $request->assunto, $paths, $contato ));

		return $this->success($request->mensagem);

    }

    function gerarNumeroProtocolo() {
	    $number = mt_rand(100000000000, 999999999999); // better than rand()

	    // call the same function if the protocolo exists already
	    if ($this->numeroProtocoloExiste($number)) {
	        return $this->gerarNumeroProtocolo();
	    }

	    // otherwise, it's valid and can be used
	    return $number;
	}

	function numeroProtocoloExiste($number) {

	    // query the database and return a boolean

	    return Contato::where('protocolo', $number)->exists();

	}

	/**
	 * AJAX: Cadastrar contato para a Ouvidoria.
	 */
	public function store(Request $request)
	{
		// Validação
		$rules = [
			'tipo_contato_id' => 'nullable|exists:tipo_contato,tipo_contato_id',
			'ctt_sigiloso'    => 'boolean',
			'ctt_nome'        => 'max:100',
			'ctt_cpf_cnpj'    => 'nullable|cpf_cnpj',
			'ctt_endereco'    => 'max:200',
			'ctt_telefone'    => 'nullable|regex:/\d{10,11}/',
			'ctt_email'       => 'nullable|email',
			'ctt_mensagem'    => 'required',
			'ctt_anexo'       => 'nullable|file|max:10240',
			'ctt_anexo_2'     => 'nullable|file|max:10240',
			'ctt_anexo_3'     => 'nullable|file|max:10240',
		];

		$messages = [
			'ctt_anexo.max'     => 'O tamanho máximo permitido é de 10 megabytes.',
			'ctt_anexo_2.max'   => 'O tamanho máximo permitido é de 10 megabytes.',
			'ctt_anexo_3.max'   => 'O tamanho máximo permitido é de 10 megabytes.',
		];

		$this->validate($request, $rules, $messages);

		DB::beginTransaction();

		try {
			$ctt_sigiloso = $request->input('ctt_sigiloso', false);

			// Cadastrar contato
			$contato = new Contato();
			$contato->tipo_contato_id = $request->input( 'tipo_contato_id' );
			$contato->ctt_sigiloso    = ($ctt_sigiloso ? 'S' : 'N');
			$contato->ctt_mensagem    = $request->input( 'ctt_mensagem' );
			$contato->protocolo       = $this->gerarNumeroProtocolo();  

			if(!$ctt_sigiloso) {
				$contato->ctt_nome     = $request->input( 'ctt_nome' );
				$contato->ctt_cpf_cnpj = $request->input( 'ctt_cpf_cnpj' );
				$contato->ctt_endereco = $request->input( 'ctt_endereco' );
				$contato->ctt_telefone = $request->input( 'ctt_telefone' );
				$contato->ctt_email    = $request->input( 'ctt_email' );

				if($request->input( 'ctt_email' ) != null ){

					// Enviar e-mail de confirmação do protocolo
					Mail::to($contato->ctt_email, $contato->ctt_nome)->queue(new Protocolo( $contato->protocolo ));

				}
			}

			$contato->save();

			// Processar arquivos anexados
			$this->processarArquivo($request, 'ctt_anexo', $contato->contato_id);
			$this->processarArquivo($request, 'ctt_anexo_2', $contato->contato_id);
			$this->processarArquivo($request, 'ctt_anexo_3', $contato->contato_id);

			DB::commit();
		}
		catch(\Exception $e) {
			DB::rollback();
			Log::error($e);
			return $this->error($e->getMessage(), 500, $e);
		}

		return $this->success($contato);
	}

	/**
	 * Exibir/baixar um anexo ligado a um contato pela Ouvidoria.
	 */
	public function exibirAnexo(Request $request, $id)
	{
		// Buscar anexo
		$anexo = Anexo::select('anexo.*')
		              ->join('contato_anexo AS can', 'can.anexo_id', '=', 'anexo.anexo_id')
		              ->where('can.anexo_id', $id)
		              ->first();

		return AnexoService::exibirAnexo($anexo);
	}

	/**
	 * Mover arquivo para a pasta correta e salvar a referência no banco de dados.
	 */
	private function processarArquivo(Request $request, $name, $id)
	{
		$arquivo = $request->file($name);

		if(!$arquivo) { return false; }

		if (!$arquivo->isValid()) {
			throw new \Exception('Ocorreu um erro no upload do arquivo. Por favor, atualize sua página e tente novamente.');
		}

		$file_path = 'anexos/' . date('Y/m');
		$file_hash = uniqid(mt_rand());
		$file_name = $arquivo->getClientOriginalName();
		$file_mime = $arquivo->getMimeType();
		$file_mime = $file_mime ?: $arquivo->getClientMimeType();
		$file_ext  = $arquivo->getClientOriginalExtension();
		$arquivo->move(storage_path($file_path), $file_hash . '.' . $file_ext);

		$anexo = Anexo::create([
			'ane_nome'    => $file_name,
			'ane_mime'    => $file_mime,
			'ane_arquivo' => $file_path . '/' . $file_hash . '.' . $file_ext
		]);

		DB::table('contato_anexo')->insert([
			'contato_id' => $id,
			'anexo_id'   => $anexo->anexo_id,
		]);

		return true;
	}
}

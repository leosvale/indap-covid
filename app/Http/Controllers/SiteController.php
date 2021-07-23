<?php

namespace App\Http\Controllers;

use App\Models\Anexo;
use App\Models\CategoriaServico;
use App\Models\Documento;
use App\Models\Configuracao;
use App\Models\Publicacao;
use Illuminate\Http\Request;
use App\Models\PublicacaoAnexo;
use App\Models\CategoriaPublicacao;
use App\Models\CamposEspecificos;
use Carbon\Carbon;
use DB, DateTime;

class SiteController extends Controller
{
	protected $data;

	function __construct() {
		$this->data = $this->getDefaultData();
	}

	/**
	 * Tela de Home do portal.
	 */
	public function home()
	{
		// Destaques
		// ==============================
		$destaques = Publicacao::select('publicacao_id', 'pub_titulo', 'pub_conteudo', 'pub_resumo', 'pub_data_cadastro', 'anexo_id', 'pub_data_visivel')
			->with('anexo')
			->where('pub_tipo', 'NOT')
			->where('pub_status', 'PUB')
			->where(function ($query) {
				$query
					->whereDate('pub_data_visivel', '<=', Carbon::now())
					->orWhere('pub_data_visivel', null);
			})
			->whereExists(function ($query) {
				$query->select(DB::raw(1))
				      ->from('publicacao_categoria AS pca')
					  ->whereRaw('pca.publicacao_id = publicacao.publicacao_id')
				      ->where('pca.tipo_categoria_publicacao_id', 1);
			})
			->limit(3)
			->orderBy('pub_data_cadastro', 'desc')
			->get();

		$this->data['destaques'] = $destaques->toArray();

		// Notícias
		// ==============================
		$noticias = Publicacao::select('publicacao_id', 'pub_titulo', 'pub_conteudo', 'pub_resumo', 'pub_data_cadastro', 'anexo_id', 'pub_data_visivel')
            ->with(['categorias', 'anexo'])
            ->where('pub_tipo', 'NOT')
            ->where('pub_status', 'PUB')
			->where(function ($query) {
				$query
					->whereDate('pub_data_visivel', '<=', Carbon::now())
					->orWhere('pub_data_visivel', null);
			})
            ->limit(8)
            ->orderBy('pub_data_cadastro', 'desc')
            ->get();
		
		$noticias = $noticias->toArray();
		$this->data['noticias'] = count($noticias) > 4? array_slice($noticias, 4, count($noticias) -4) : $noticias;

		// Boletins
		// ==============================
		$boletins = Publicacao::select('publicacao_id', 'pub_titulo', 'pub_conteudo', 'pub_resumo', 'pub_data_cadastro', 'anexo_id', 'pub_data_visivel')
            ->with(['categorias', 'anexo'])
            ->where('pub_tipo', 'BOL')
            ->where('pub_status', 'PUB')
			->where(function ($query) {
				$query
					->whereDate('pub_data_visivel', '<=', Carbon::now())
					->orWhere('pub_data_visivel', null);
			})
            ->limit(3)
            ->orderBy('pub_data_cadastro', 'desc')
            ->get();

		$boletins = $boletins->toArray();
		$this->data['boletins'] = count($boletins) > 4? array_slice($boletins, 4, count($boletins) -4) : $boletins;

		// Servicos
		// ==============================
		$servicos = CategoriaServico::select()
			->limit(6)
            ->orderBy('tcs_data_cadastro', 'desc')
            ->get();

		$this->data['servicos'] = $servicos->toArray();


		$doses_recebidas = DB::table('vacinometro')->where('campo', '=', 'doses_recebidas')->first();
		$doses_aplicadas = DB::table('vacinometro')->where('campo', '=', 'doses_aplicadas')->first();
		$primeira_dose = DB::table('vacinometro')->where('campo', '=', 'primeira_dose')->first();
		$segunda_dose = DB::table('vacinometro')->where('campo', '=', 'segunda_dose')->first();
		
		$homens = DB::table('vacinometro')->where('campo', '=', 'homens')->first();
		
		$mulheres = DB::table('vacinometro')->where('campo', '=', 'mulheres')->first();
		
		$adultos = DB::table('vacinometro')->where('campo', '=', 'adultos')->first();
		
		$adolescentes = DB::table('vacinometro')->where('campo', '=', 'adolescentes')->first();
		
		$criancas = DB::table('vacinometro')->where('campo', '=', 'criancas')->first();
		
		$cem = DB::table('vacinometro')->where('campo', '=', 'cem_anos')->first();
		
		$noventa = DB::table('vacinometro')->where('campo', '=', 'noventa_anos')->first();
		
		$oitenta = DB::table('vacinometro')->where('campo', '=', 'oitenta_anos')->first();
		
		$setenta = DB::table('vacinometro')->where('campo', '=', 'setenta_anos')->first();
		
		$sessenta = DB::table('vacinometro')->where('campo', '=', 'sessenta_anos')->first();
		
		$cinquenta = DB::table('vacinometro')->where('campo', '=', 'cinquenta_anos')->first();
		
		$quarenta = DB::table('vacinometro')->where('campo', '=', 'quarenta_anos')->first();
		
		$trinta = DB::table('vacinometro')->where('campo', '=', 'trinta_anos')->first();
		
		$vinte = DB::table('vacinometro')->where('campo', '=', 'vinte_anos')->first();

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
			'cem' => $cem,
			'noventa' => $noventa,
			'oitenta' => $oitenta,
			'setenta' => $setenta,
			'sessenta' => $sessenta,
			'cinquenta' => $cinquenta,
			'quarenta' => $quarenta,
			'trinta' => $trinta,
			'vinte' => $vinte
		];

		$this->data['vacinometro'] = $vacinometro;

		// Buscar documentos
		// ==============================
		$columns = [
			'documento.documento_id',
			'tipo_processo_id',
			'doc_numero_processo',
			'dan.anexo_id',
			'tipo_categoria_processo_id',
			'dan_data_documento',
			'ane_nome',
			'descricao',
			'orgao',
			'numero_licitacao',
			'numero_processo_adm',
			'local_execucao',
			'numero_edital',
			'data_certame',
			'local_certame',
			'objeto',
			'inicio_vigencia',
			'final_vigencia',
			'publicacao',
			'previsao_orcamentaria',
			'relacionado_covid',
			'cpf_cnpj',
			'numero_contrato',
			'numero_processo_licitatorio',
			'valor',
			'data_assinatura',
			'fundamento_legal',
			'possui_aditivo',
			'numero_dispensa',
			DB::raw('EXTRACT(MONTH FROM dan_data_documento) AS mes'),
			DB::raw('EXTRACT(YEAR FROM dan_data_documento) AS ano'),
		];

		$contratos = Documento::select($columns)
			->join('documento_anexo AS dan', 'dan.documento_id', '=', 'documento.documento_id')
			->join('documento_campos_especificos AS esp', 'esp.documento_id', '=', 'documento.documento_id')
			->join('anexo AS ane', 'ane.anexo_id', '=', 'dan.anexo_id')
			->where('tipo_processo_id', '=', 2)
			->limit(3)
			->orderBy('dan.dan_data_documento');

		$contratos = $contratos->get();
		$contratos = $contratos->groupBy('documento_id');
		$contratos = $contratos->toArray();
		

		$licitacoes = Documento::select($columns)
			->join('documento_anexo AS dan', 'dan.documento_id', '=', 'documento.documento_id')
			->join('documento_campos_especificos AS esp', 'esp.documento_id', '=', 'documento.documento_id')
			->join('anexo AS ane', 'ane.anexo_id', '=', 'dan.anexo_id')
			->where('tipo_processo_id', '=', 1)
			->limit(3)
			->orderBy('dan.dan_data_documento');

		$licitacoes = $licitacoes->get();
		$licitacoes = $licitacoes->groupBy('documento_id');
		$licitacoes = $licitacoes->toArray();

		$contratacoesDiretas = Documento::select($columns)
			->join('documento_anexo AS dan', 'dan.documento_id', '=', 'documento.documento_id')
			->join('documento_campos_especificos AS esp', 'esp.documento_id', '=', 'documento.documento_id')
			->join('anexo AS ane', 'ane.anexo_id', '=', 'dan.anexo_id')
			->where('tipo_processo_id', '=', 7)
			->limit(3)
			->orderBy('dan.dan_data_documento');

		$contratacoesDiretas = $contratacoesDiretas->get();
		$contratacoesDiretas = $contratacoesDiretas->groupBy('documento_id');
		$contratacoesDiretas = $contratacoesDiretas->toArray();

		$documentos = [
			'Contratos' => $contratos,
			'Licitações' => $licitacoes,
			'Contratações Diretas' => $contratacoesDiretas
		];

		$this->data['documentos'] = $documentos;

		$leis = Documento::select($columns)
			->join('documento_anexo AS dan', 'dan.documento_id', '=', 'documento.documento_id')
			->join('documento_campos_especificos AS esp', 'esp.documento_id', '=', 'documento.documento_id')
			->join('anexo AS ane', 'ane.anexo_id', '=', 'dan.anexo_id')
			->where('tipo_processo_id', '=', 5)
			->limit(3)
			->orderBy('dan.dan_data_documento');

		$leis = $leis->get();
		$leis = $leis->groupBy('documento_id');
		$leis = $leis->toArray();

		$decretos = Documento::select($columns)
			->join('documento_anexo AS dan', 'dan.documento_id', '=', 'documento.documento_id')
			->join('documento_campos_especificos AS esp', 'esp.documento_id', '=', 'documento.documento_id')
			->join('anexo AS ane', 'ane.anexo_id', '=', 'dan.anexo_id')
			->where('tipo_processo_id', '=', 3)
			->limit(3)
			->orderBy('dan.dan_data_documento');

		$decretos = $decretos->get();
		$decretos = $decretos->groupBy('documento_id');
		$decretos = $decretos->toArray();

		$portarias = Documento::select($columns)
			->join('documento_anexo AS dan', 'dan.documento_id', '=', 'documento.documento_id')
			->join('documento_campos_especificos AS esp', 'esp.documento_id', '=', 'documento.documento_id')
			->join('anexo AS ane', 'ane.anexo_id', '=', 'dan.anexo_id')
			->where('tipo_processo_id', '=', 4)
			->limit(3)
			->orderBy('dan.dan_data_documento');

		$portarias = $portarias->get();
		$portarias = $portarias->groupBy('documento_id');
		$portarias = $portarias->toArray();

		$atos = Documento::select($columns)
			->join('documento_anexo AS dan', 'dan.documento_id', '=', 'documento.documento_id')
			->join('documento_campos_especificos AS esp', 'esp.documento_id', '=', 'documento.documento_id')
			->join('anexo AS ane', 'ane.anexo_id', '=', 'dan.anexo_id')
			->where('tipo_processo_id', '=', 6)
			->limit(3)
			->orderBy('dan.dan_data_documento');

		$atos = $atos->get();
		$atos = $atos->groupBy('documento_id');
		$atos = $atos->toArray();

		$legislacoes = [
			'Leis' => $leis,
			'Decretos' => $decretos,
			'Portarias' => $portarias,
			'Atos Admissionais' => $atos
		];

		$this->data['legislacoes'] = $legislacoes;

		// Buscar categorias de processo
		// ==============================
		$categorias = DB::table('tipo_categoria_processo')->get()->mapWithKeys(function ($item) {
			return [$item->tipo_categoria_processo_id => $item->tcp_nome];
		});

		$this->data['categorias'] = $categorias->toArray();

		return view('site.home', $this->data);
	}

	/**
	 * Tela de Página do portal.
	 */
	public function page($id)
	{
		$pagina = Publicacao::where('pub_tipo', 'PAG')
            ->where('pub_status', 'PUB')
			->where(function ($query) {
				$query
					->whereDate('pub_data_visivel', '<=', Carbon::now())
					->orWhere('pub_data_visivel', null);
			})
            ->where('publicacao_id', $id)
			->first();

		if(!$pagina) {
			abort(404, 'Página não encontrada.');
		}

		// Buscar anexo
		$anexos = PublicacaoAnexo::where('pub_id', $pagina->publicacao_id)->get();

		$this->data['pagina'] = $pagina->toArray();
		$this->data['anexos'] = $anexos->toArray();

		// dd($this->data);

		return view('site.page', $this->data);
	}

	public function servicos()
	{
		$servicos = CategoriaServico::select()
            ->orderBy('tcs_nome')
            ->get();

		$this->data['servicos'] = $servicos->toArray();

		// dd($this->data);

		return view('site.tipo_servicos', $this->data);
	}

	public function servicosDoTipo($id)
	{
		$servicos = Publicacao::where('pub_tipo', 'SER')
            ->where('pub_status', 'PUB')
			->where(function ($query) {
				$query
					->whereDate('pub_data_visivel', '<=', Carbon::now())
					->orWhere('pub_data_visivel', null);
			})
            ->where('tipo_categoria_servico_id', $id)
			->get();

		$tipo_servicos = CategoriaServico::select()
			->orderBy('tcs_nome')
			->get();

		$tipo_servico = CategoriaServico::where('tipo_categoria_servico_id', $id)
			->first();

		if(!$tipo_servico) {
			abort(404, 'Página não encontrada.');
		}

		$this->data['tipo_servico'] = $tipo_servico->toArray();
		$this->data['tipo_servicos'] = $tipo_servicos->toArray();
		$this->data['servicos'] = $servicos->toArray();

		// dd($this->data);

		return view('site.servicos', $this->data);
	}

	public function servico($id)
	{
		$pagina = Publicacao::where('pub_tipo', 'SER')
            ->where('pub_status', 'PUB')
			->where(function ($query) {
				$query
					->whereDate('pub_data_visivel', '<=', Carbon::now())
					->orWhere('pub_data_visivel', null);
			})
            ->where('publicacao_id', $id)
			->first();

		if(!$pagina) {
			abort(404, 'Página não encontrada.');
		}

		$servicos = Publicacao::where('pub_tipo', 'SER')
            ->where('pub_status', 'PUB')
			->where(function ($query) {
				$query
					->whereDate('pub_data_visivel', '<=', Carbon::now())
					->orWhere('pub_data_visivel', null);
			})
            ->where('tipo_categoria_servico_id', $pagina->tipo_categoria_servico_id)
			->get();

		$tipo_servico = CategoriaServico::where('tipo_categoria_servico_id', $pagina->tipo_categoria_servico_id)
			->first();
			
		// Buscar anexo
		$anexos = PublicacaoAnexo::where('pub_id', $pagina->publicacao_id)->get();

		$this->data['pagina'] = $pagina->toArray();
		$this->data['tipo_servico'] = $tipo_servico->toArray();
		$this->data['anexos'] = $anexos->toArray();
		$this->data['servicos'] = $servicos->toArray();

		// dd($this->data);

		return view('site.servico', $this->data);
	}

	/**
	 * Tela de Notícia do portal.
	 */
	public function single($id)
	{
		$noticia = Publicacao::where(function($query) {
                    $query->where('pub_tipo', 'NOT')
                          ->orWhere('pub_tipo', 'BOL');
                })
            ->where('pub_status', 'PUB')
			->where(function ($query) {
				$query
					->whereDate('pub_data_visivel', '<=', Carbon::now())
					->orWhere('pub_data_visivel', null);
			})
            ->where('publicacao_id', $id)
			->with(['categorias', 'anexo'])
            ->first();

		if(!$noticia) {
			abort(404, 'Página não encontrada.');
		}

		$anexo = $noticia->anexo;

		if($anexo) {
			$path_info = pathinfo($anexo->ane_arquivo);
			$noticia->pub_midia_p = url( $path_info['dirname'] . '/' . $path_info['filename'] . '_p.' . $path_info['extension'] );
			$noticia->pub_midia_g = url( $path_info['dirname'] . '/' . $path_info['filename'] . '_g.' . $path_info['extension'] );
		}

		$this->data['noticia'] = $noticia->toArray();

		// Buscar anexo
		$anexos = PublicacaoAnexo::where('pub_id', $noticia->publicacao_id)->get();
		$this->data['anexos'] = $anexos->toArray();

		$categorias = CategoriaPublicacao::all();
        $this->data['categorias'] = $categorias;

        // Destaques
		// ==============================
		$destaques = Publicacao::select('publicacao_id', 'pub_titulo', 'pub_conteudo', 'pub_resumo', 'pub_data_cadastro', 'anexo_id', 'pub_data_visivel')
			->with('anexo')
			->where('pub_tipo', 'NOT')
			->where('publicacao_id', '!=', $noticia->publicacao_id)
			->where('pub_status', 'PUB')
			->where(function ($query) {
				$query
					->whereDate('pub_data_visivel', '<=', Carbon::now())
					->orWhere('pub_data_visivel', null);
			})
			->whereExists(function ($query) {
				$query->select(DB::raw(1))
				      ->from('publicacao_categoria AS pca')
					  ->whereRaw('pca.publicacao_id = publicacao.publicacao_id')
				      ->where('pca.tipo_categoria_publicacao_id', 1);
			})
			->limit(3)
			->orderBy('pub_data_cadastro', 'desc')
			->get();

		$this->data['destaques'] = $destaques;

		return view('site.single', $this->data);
	}

	/**
	 * Tela de Blog do portal.
	 */
	public function blog(Request $request)
	{
		// Página atual
		$page  = $request->input('page', 1);
		$limit = 10;
		$skip  = $limit * ($page - 1);

		// Filtros
		$filter = $request->input('filter');

		if($filter){
			// Notícias
			// ==============================
			$noticias = Publicacao::select('publicacao.publicacao_id', 'pub_titulo', 'pub_conteudo', 'pub_resumo', 'pub_data_cadastro', 'anexo_id', 'pub_data_visivel', 'pub_tipo')
				->join('publicacao_categoria', 'publicacao_categoria.publicacao_id', '=', 'publicacao.publicacao_id')
	            ->where('pub_tipo', 'NOT')
	            ->where('publicacao_categoria.tipo_categoria_publicacao_id', '=', $filter)
	            ->where('pub_status', 'PUB')
				->where(function ($query) {
					$query
						->whereDate('pub_data_visivel', '<=', Carbon::now())
						->orWhere('pub_data_visivel', null);
				});

		}
		else{

			// Notícias
			// ==============================
			$noticias = Publicacao::select('publicacao.publicacao_id', 'pub_titulo', 'pub_conteudo', 'pub_resumo', 'pub_data_cadastro', 'anexo_id', 'pub_data_visivel', 'pub_tipo')
	            ->where('pub_tipo', 'NOT')
	            ->where('pub_status', 'PUB')
				->where(function ($query) {
					$query
						->whereDate('pub_data_visivel', '<=', Carbon::now())
						->orWhere('pub_data_visivel', null);
				});

		}

		// Quantidade total
		$count = $noticias->count();

		$this->data['prev_link'] = ($page > 1 ? url('/noticias/?page='.($page-1)) : '');
		$this->data['next_link'] = ($count > $skip + $limit ? url('/noticias/?page='.($page+1)) : '');

		$noticias = $noticias->with(['categorias', 'anexo'])
							 ->limit($limit)
							 ->skip($skip)
							 ->orderBy('pub_data_visivel', 'pub_data_cadastro', 'desc')
							 ->get();

		$categorias = CategoriaPublicacao::all();

        $this->data['noticias'] = $noticias->toArray();
        $this->data['categorias'] = $categorias;

		return view('site.blog', $this->data);
	}

	/**
	 * Tela de Blog do portal.
	 */
	public function boletins(Request $request)
	{
		// Página atual
		$page  = $request->input('page', 1);
		$limit = 10;
		$skip  = $limit * ($page - 1);

		// Filtros
		$filter = $request->input('filter');

		if($filter){

			// Notícias
			// ==============================
			$noticias = Publicacao::select('publicacao.publicacao_id', 'pub_titulo', 'pub_conteudo', 'pub_resumo', 'pub_data_cadastro', 'anexo_id', 'pub_data_visivel', 'pub_tipo')
				->join('publicacao_categoria', 'publicacao_categoria.publicacao_id', '=', 'publicacao.publicacao_id')
	            ->where('pub_tipo', 'BOL')
	            ->where('publicacao_categoria.tipo_categoria_publicacao_id', '=', $filter)
	            ->where('pub_status', 'PUB')
				->where(function ($query) {
					$query
						->whereDate('pub_data_visivel', '<=', Carbon::now())
						->orWhere('pub_data_visivel', null);
				});

		}
		else{

			// Notícias
			// ==============================
			$noticias = Publicacao::select('publicacao_id', 'pub_titulo', 'pub_conteudo', 'pub_resumo', 'pub_data_cadastro', 'anexo_id', 'pub_data_visivel', 'pub_tipo')
	            ->where('pub_tipo', 'BOL')
	            ->where('pub_status', 'PUB')
				->where(function ($query) {
					$query
						->whereDate('pub_data_visivel', '<=', Carbon::now())
						->orWhere('pub_data_visivel', null);
				});

		}

		// Quantidade total
		$count = $noticias->count();

		$this->data['prev_link'] = ($page > 1 ? url('/noticias/?page='.($page-1)) : '');
		$this->data['next_link'] = ($count > $skip + $limit ? url('/noticias/?page='.($page+1)) : '');

		$noticias = $noticias->with(['categorias', 'anexo'])
							 ->limit($limit)
							 ->skip($skip)
							 ->orderBy('pub_data_visivel', 'pub_data_cadastro', 'desc')
							 ->get();

		$categorias = CategoriaPublicacao::all();

        $this->data['noticias'] = $noticias->toArray();
        $this->data['categorias'] = $categorias;

		return view('site.blog', $this->data);
	}

	/**
	 * Tela de busca do portal.
	 */
	public function busca(Request $request)
	{
		$search = $request->input('s');
		$page   = $request->input('page', 1);
		$limit  = 10;
		$skip   = $limit * ($page - 1);

		if(!$search) {
			return redirect('/');
		}

		$search = strip_tags($search);
		$search_term = '%'.$search.'%';

		$this->data['termo'] = $search;

		$sql_pub = DB::table('publicacao')
					 ->select(DB::raw("publicacao_id     AS id,
					                   pub_tipo          AS tipo,
					                   pub_titulo        AS titulo,
					                   pub_conteudo      AS conteudo,
					                   pub_resumo        AS resumo,
					                   anexo_id          AS anexo,
					                   ''                AS processo,
					                   pub_data_cadastro AS data")
					 )
					 ->where(function($query) use ($search_term) {
					     $query->where('pub_titulo', 'LIKE', $search_term)
						       ->orWhere('pub_conteudo', 'LIKE', $search_term)
						       ->orWhere('pub_resumo', 'LIKE', $search_term);
					 })
					 ->where('pub_status', 'PUB')
					->where(function ($query) {
						$query
							->whereDate('pub_data_visivel', '<=', Carbon::now())
							->orWhere('pub_data_visivel', null);
					});

		$sql_doc = DB::table('documento AS doc')
					 ->select(DB::raw("documento_id 	  	AS id,
									   'DOC'	  	  	  	AS tipo,
									   doc_numero_processo  AS titulo,
									   ''      			    AS conteudo,
									   ''					AS resumo,
									   null                 AS anexo,
									   tpr_nome             AS processo,
									   doc_data_cadastro 	AS data")
					 )
					 ->join('tipo_processo AS tpr', 'tpr.tipo_processo_id', '=', 'doc.tipo_processo_id')
					 ->where('doc_numero_processo', 'LIKE', $search_term)
		             ->union($sql_pub);

		$sql_geral = DB::table( DB::raw("({$sql_doc->toSql()}) as sub") )
					   ->mergeBindings($sql_doc);

		// Quantidade total
		$count = $sql_geral->count();

		// Links de navegação
		$this->data['prev_link'] = ($page > 1 ? url('/busca/?s='.urlencode($search).'&page='.($page-1)) : '');
		$this->data['next_link'] = ($count > $skip + $limit ? url('/busca/?s='.urlencode($search).'&page='.($page+1)) : '');

		$result = $sql_geral->limit($limit)
		                    ->skip($skip)
		                    ->orderBy('data', 'desc')
		                    ->get();

		// Carregar informacoes extras
		foreach ($result as $k => $item) {
			if($item->tipo == 'DOC') {
				$anexos = DB::table('anexo AS ane')
							->select('ane.anexo_id', 'ane.ane_nome', 'dan.dan_data_documento', 'tcp.tcp_nome')
							->join('documento_anexo AS dan', 'dan.anexo_id', '=', 'ane.anexo_id')
							->join('tipo_categoria_processo AS tcp', 'tcp.tipo_categoria_processo_id', '=', 'dan.tipo_categoria_processo_id')
							->where('dan.documento_id', $item->id)
							->get();

				$result[$k]->anexos = $anexos;
			}
			else {
				$categorias = DB::table('tipo_categoria_publicacao AS tcp')
								->select('tcp.*')
								->join('publicacao_categoria AS pca', 'pca.tipo_categoria_publicacao_id', '=', 'tcp.tipo_categoria_publicacao_id')
								->where('pca.publicacao_id', $item->id)
								->get();

				$result[$k]->categorias = $categorias->pluck('tcp_nome')->all();

//				if($item->anexo) {
//					$anexo = DB::table('anexo')->where('anexo_id', $item->anexo)->first();
//					$result[$k]->anexo = $anexo;
//				}
			}
		}

		$this->data['resultado'] = $result;

//		dd($this->data['resultado']);

		return view('site.busca', $this->data);
	}

	public function acessibilidade(Request $request)
	{
		return view('site.acessibilidade', $this->data);
	}

	/**
	 * Tela de Licitações do portal.
	 */
	public function licitacoes(Request $request)
	{
		// Filtros
		$tipo = $request->input('tipo');
		$ano  = $request->input('ano');
		$objeto  = $request->input('objeto');
		$cpfcnpj  = $request->input('cpfcnpj');
		$inicio_vigencia  = $request->input('inicio_vigencia');
		$final_vigencia  = $request->input('final_vigencia');
		$valor  = $request->input('valor');

		if(!$ano || !DateTime::createFromFormat('Y', $ano)) {
			$ano = date('Y');
		}

		$this->data['tipo'] = $tipo;
		$this->data['ano'] = $ano;
		$this->data['objeto'] = $objeto;
		$this->data['cpfcnpj'] = $cpfcnpj;
		$this->data['inicio_vigencia'] = $inicio_vigencia;
		$this->data['final_vigencia'] = $final_vigencia;
		$this->data['valor'] = $valor;

		// Buscar documentos
		// ==============================
		$columns = [
			'documento.documento_id',
			'tipo_processo_id',
			'doc_numero_processo',
			'dan.anexo_id',
			'tipo_categoria_processo_id',
			'dan_data_documento',
			'ane_nome',
			'descricao',
			'orgao',
			'numero_licitacao',
			'numero_processo_adm',
			'local_execucao',
			'numero_edital',
			'data_certame',
			'local_certame',
			'objeto',
			'inicio_vigencia',
			'final_vigencia',
			'publicacao',
			'previsao_orcamentaria',
			'relacionado_covid',
			'cpf_cnpj',
			'numero_contrato',
			'numero_processo_licitatorio',
			'valor',
			'data_assinatura',
			'fundamento_legal',
			'possui_aditivo',
			'numero_dispensa',
			DB::raw('EXTRACT(MONTH FROM dan_data_documento) AS mes'),
			DB::raw('EXTRACT(YEAR FROM dan_data_documento) AS ano'),
		];

		$documentos = Documento::select($columns)
			->join('documento_anexo AS dan', 'dan.documento_id', '=', 'documento.documento_id')
			->join('documento_campos_especificos AS esp', 'esp.documento_id', '=', 'documento.documento_id')
			->join('anexo AS ane', 'ane.anexo_id', '=', 'dan.anexo_id')
			->whereRaw("YEAR(dan_data_documento) = '".$ano."'")
			->orderBy('dan.dan_data_documento');

		if($tipo) {
			$documentos = $documentos->where('tipo_processo_id', $tipo);
		}

		if($cpfcnpj) {
			$documentos = $documentos->where('cpf_cnpj', $cpfcnpj);
		}

		if($inicio_vigencia) {
			$documentos = $documentos->where('inicio_vigencia', $inicio_vigencia);
		}

		if($final_vigencia) {
			$documentos = $documentos->where('final_vigencia', $final_vigencia);
		}

		if($valor) {
			$documentos = $documentos->where('valor', $valor)
			->orWhere('previsao_orcamentaria', $valor);
		}

		if($objeto) {
			
			$search = strip_tags($objeto);
			$search_term = '%'.$search.'%';
			$documentos = $documentos->where('objeto', 'LIKE', $search_term);
		}

		$documentos = $documentos->get();
		foreach ($documentos->groupBy('documento_id') as $documento_id => $itens) {
			$primeiroMes = $itens->first()->mes;

			foreach ($itens as $item) {
				$item->mes = $primeiroMes;
			}
		}

		$documentos = $documentos->groupBy('mes')->map(function($item, $key) {
			return $item->groupBy('tipo_processo_id')->map(function($subitem, $subkey) {
				return $subitem->groupBy('documento_id');
			});
		});

		$this->data['documentos'] = $documentos->toArray();

		// Buscar tipos de processo
		// ==============================
		$tipos = DB::table('tipo_processo')->get()->mapWithKeys(function ($item) {
			return [$item->tipo_processo_id => $item->tpr_nome];
		});

		$tipos = $tipos->toArray();
		asort($tipos);
		$this->data['tipos_processo'] = $tipos;

		// Buscar categorias de processo
		// ==============================
		$categorias = DB::table('tipo_categoria_processo')->get()->mapWithKeys(function ($item) {
			return [$item->tipo_categoria_processo_id => $item->tcp_nome];
		});

		$this->data['categorias'] = $categorias->toArray();

		// Buscar anos para preencher filtro
		// ==============================
		$anos = DB::table('documento_anexo')->select(DB::raw('YEAR(dan_data_documento) AS ano'))->groupBy('ano')->orderBy('ano', 'desc')->get();
		$anos = $anos->pluck('ano');
		$this->data['anos'] = $anos->toArray();

		// Lista de meses
		// ==============================
		$this->data['meses'] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

		return view('site.licitacoes', $this->data);
	}

	/**
	 * Tela de ouvidoria do portal.
	 */
	public function ouvidoria()
	{
		$tipos = DB::table('tipo_contato')->orderBy('tco_nome')->get();

		$this->data['tipos'] = $tipos;

		return view('site.ouvidoria', $this->data);
	}

	/**
	 * Tela de ouvidoria do portal.
	 */
	public function forbidden()
	{
		return view('forbidden');
	}

	/**
	 * Resgatar dados utilizados por todas as páginas.
	 */
	private function getDefaultData()
	{
		$data = [];

		$config_ids = [
			'nome',
			'portal',
			'uf',
			'logo',
			'favico',
			'favico_html',
			'endereco',
			'telefone_primario',
			'telefone_secundario',
			'banners',
			'banners_servico',
			'cor',
			'facebook',
			'twitter',
			'google',
			'instagram',
			'pinterest',
			'youtube',
			'banner_home_url',
			'banner_home_img',
			'popup_url',
			'popup_img',
			'logo_indap'
		];

		// Configurações
		// ==============================
		$configuracoes = Configuracao::whereIn('configuracao_id', $config_ids)->get();
		$configuracoes = $configuracoes->mapWithKeys(function ($item) {
			return [$item['configuracao_id'] => $item['cfg_valor']];
		});

		$data['configuracao'] = $configuracoes;

		// Paginas do Menu Principal
		// ==============================
		$menu_principal = Publicacao::select('publicacao_id', 'pub_titulo', 'pub_url')
			->with('categorias')
            ->where('pub_tipo', 'PAG')
            ->where('pub_status', 'PUB')
			->where(function ($query) {
				$query
					->whereDate('pub_data_visivel', '<=', Carbon::now())
					->orWhere('pub_data_visivel', null);
			})
            ->where('pub_menu_lateral', 'N')
            ->orderBy('pub_ordem_menu')
			->get();
		$menu_principal->each(function ($item){
			$item->categoria = $item->categorias()->first() ? 
				$item->categorias()->first()->tcp_nome : '';
		});

		if(!isset($menu_principal[''])){
			$menu_principal[''] = null;
		}

		$data['menu_principal'] = $menu_principal->groupBy('categoria')->toArray();

		// Paginas do Menu Lateral
		// ==============================
		$menu_lateral = Publicacao::select('publicacao_id', 'pub_titulo', 'pub_url')
			->with('categorias')
            ->where('pub_tipo', 'PAG')
            ->where('pub_status', 'PUB')
			->where(function ($query) {
				$query
					->whereDate('pub_data_visivel', '<=', Carbon::now())
					->orWhere('pub_data_visivel', null);
			})
            ->where('pub_menu_lateral', 'S')
            ->orderBy('pub_ordem_menu')
			->get();
		$menu_lateral->each(function ($item){
			$item->categoria = $item->categorias()->first() ? 
				$item->categorias()->first()->tcp_nome : '';
		});

		$data['menu_lateral'] = $menu_lateral->groupBy('categoria')->toArray();

		// Notícias
		// ==============================
		$noticias = Publicacao::select('publicacao_id', 'pub_titulo', 'pub_conteudo', 'pub_resumo', 'pub_data_cadastro', 'anexo_id', 'pub_data_visivel')
            ->with(['categorias', 'anexo'])
            ->where('pub_tipo', 'NOT')
            ->where('pub_status', 'PUB')
			->where(function ($query) {
				$query
					->whereDate('pub_data_visivel', '<=', Carbon::now())
					->orWhere('pub_data_visivel', null);
			})
            ->limit(4)
            ->orderBy('pub_data_cadastro', 'desc')
			->get();
			
		$data['noticias'] = $noticias->toArray();

		return $data;
	}
}

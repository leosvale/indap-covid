<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',             'SiteController@home')->name('home');
Route::get('/licitacoes',   'SiteController@licitacoes');
Route::get('/acessibilidade',   'SiteController@acessibilidade');
Route::get('/noticias',     'SiteController@blog')->name('noticias');
Route::get('/boletins',     'SiteController@boletins')->name('boletins');
Route::get('/ouvidoria',    'SiteController@ouvidoria');
Route::get('/busca',        'SiteController@busca');
Route::get('/pagina/{id}',  'SiteController@page');
Route::get('/noticia/{id}', 'SiteController@single');
Route::get('/servicos',     'SiteController@servicos');
Route::get('/servicos/{id}', 'SiteController@servicosDoTipo');
Route::get('/servico/{id}', 'SiteController@servico');

Route::get('/processo/anexo/{id}', 'DocumentoController@exibirAnexo');
Route::get('/licitacoes/{tipo}/{mes}/{ano}/{id}',   'EditalController@salvarEditalAcessado');
Route::get('/licitacoes/baixar/{id}',   'EditalController@baixarArquivo');

Route::get( '/pagina/exibir/anexo/{id}', 'PaginaController@exibirAnexo');

Route::group(['middleware' => 'web'], function () {



	// Rotas para o Painel Administrativo
	// ========================================
	Route::group(['prefix' => 'painel', 'middleware' => 'config'], function () {

		Route::get( 'forbidden', 'SiteController@forbidden' );

		Route::get('acesso', function () { return view('painel.acesso'); })->name('painel.login');

		// Rotas para o Esic do Painel Administrativo
		// ========================================
		Route::group(['prefix' => 'solicitacoes',  'middleware' => ['auth:admin','esic']], function() {
			Route::get( '/',              'SolicitacaoController@lista' );

		});

		// Rotas para Noticias
	   // ========================================
		Route::group(['prefix' => 'noticias',  'middleware' => ['auth:admin','noticias']], function() {
			Route::get( '/', 'NoticiaController@lista' );

		});

		// Rotas para Acesso à Informação
	    // ========================================
		Route::group(['prefix' => 'paginas',  'middleware' => ['auth:admin','informacao']], function() {
			Route::get( '/', 'PaginaController@lista' );
		});

		// Rotas para Acesso Serviços
	    // ========================================
		Route::group(['prefix' => 'servicos',  'middleware' => ['auth:admin','servicos']], function() {
			Route::get( '/', 'PaginaController@lista' );
		});

		// Rotas para Acesso à Ouvidoria
	    // ========================================
		Route::group(['prefix' => 'ouvidoria',  'middleware' => ['auth:admin','ouvidoria']], function() {
			Route::get( '/',               'ContatoController@lista' );
		});

		// Rotas para Acesso Editais
	    // ========================================
		Route::group(['prefix' => 'editais',  'middleware' => ['auth:admin','editais']], function() {
			Route::get( '/', 'EditalController@lista' );
		});

		// Rotas para Acesso à Licitações e Contratos
	    // ========================================
		Route::group(['prefix' => 'processos',  'middleware' => ['auth:admin','licitacoes']], function() {
			Route::get( '/',            'DocumentoController@lista' );
		});


		Route::group(['middleware' => 'auth:admin'], function () {

			Route::get( '/', 'AutenticacaoController@home' );
			Route::get( 'sair', 'AutenticacaoController@logoutPainel' );

			//Route::get( 'processos',            'DocumentoController@lista' );
			Route::get( 'processo/cadastro',    'DocumentoController@cadastro' );
			Route::get( 'processo/{id}/edicao', 'DocumentoController@cadastro' );
			Route::get( 'processo/anexo/{id}',  'DocumentoController@exibirAnexo');

			Route::get( 'solicitacao/cadastro',      'SolicitacaoController@cadastro' );
			Route::get( 'solicitacao/{id}/detalhes', 'SolicitacaoController@detalhes' );
			Route::get( 'solicitacao/anexo/{id}',    'SolicitacaoController@exibirAnexo');

			Route::get( 'noticia/cadastro', 'NoticiaController@cadastro' );
			Route::get( 'noticia/{id}/edicao', 'NoticiaController@cadastro' );
			Route::get( 'noticia/{id}/visualizacao', 'NoticiaController@preview' );

			//Route::get( 'paginas', 'PaginaController@lista' );
			Route::get( 'pagina/cadastro', 'PaginaController@cadastro' );
			Route::get( 'pagina/{id}/edicao', 'PaginaController@cadastro' );
			Route::get( '/pagina/exibir/anexo/{id}', 'PaginaController@exibirAnexo');
			Route::get( 'pagina/ajax/anexos/{id}', 'PaginaController@anexos' );
			Route::post( 'ajax/pagina/{id}', 'PaginaController@update' );
			Route::post( 'ajax/pagina/{id}/item/{index}', 'PaginaController@removerItem' );
			Route::delete( 'pagina/ajax/anexo/remover/{id}', 'PaginaController@removerAnexos' );

			//Route::get( 'editais', 'EditalController@lista' );
			Route::get( 'edital/ver/{id}', 'EditalController@show' );


			//Route::get( 'ouvidoria',               'ContatoController@lista' );
			Route::get( 'ouvidoria/{id}/detalhes', 'ContatoController@detalhes' );
			Route::get( 'ouvidoria/anexo/{id}',    'ContatoController@exibirAnexo');
			Route::post( 'ajax/email/contato/submit', 'ContatoController@sendEmail' );

			Route::get( 'configuracoes', 'ConfiguracaoController@cadastro' );
			Route::get( 'usuarios',      'ConfiguracaoController@usuarios' );

			Route::get( 'ajax/tipo-processo/{id}', 'TipoProcessoController@show' );
			Route::get( 'ajax/tipo-processo', 'TipoProcessoController' );
			Route::get( 'ajax/categoria-processo', 'CategoriaProcessoController' );

			Route::get   ('ajax/configuracao/usuario', 'ConfiguracaoController@listarUsuarios');
			Route::get   ('ajax/usuario/{id}', 'ConfiguracaoController@getUsuario');
			Route::post  ('ajax/configuracao/usuario', 'ConfiguracaoController@salvarUsuario');
			Route::post  ('ajax/editar/usuario/{id}', 'ConfiguracaoController@editarUsuario');
			Route::delete('ajax/configuracao/usuario/{id}', 'ConfiguracaoController@excluirUsuario');

			//Route::get   ('ajax/configuracao/banner', 'BannerController@index');
			Route::get( 'banner/edicao/{id}', 'BannerController@cadastro' );
			Route::get( 'banner/cadastro/', 'BannerController@cadastro' );
			Route::post( 'ajax/banner/novo', 'BannerController@store' );
			Route::post( 'ajax/banner/{id}', 'BannerController@update' );
			Route::delete('ajax/configuracao/banner/{id}', 'BannerController@destroy');

			Route::resource('ajax/documento',    'DocumentoController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			Route::resource('ajax/solicitacao',  'SolicitacaoController', ['only' => ['index', 'show', 'store', 'update']]);
			Route::resource('ajax/noticia',      'NoticiaController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			Route::resource('ajax/pagina',       'PaginaController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			Route::resource('ajax/banner',       'BannerController', ['only' => ['index', 'show', 'store', 'update', 'destroy']]);
			Route::resource('ajax/edital',       'EditalController', ['only' => ['index', 'show']]);
			Route::resource('ajax/contato',      'ContatoController', ['only' => ['index', 'show']]);
			Route::get('ajax/resposta_contato/{id}',      'ContatoController@respostaContato');
			Route::resource('ajax/configuracao', 'ConfiguracaoController', ['only' => ['index', 'store']]);
			Route::resource('ajax/categoria-publicacao', 'CategoriaPublicacaoController', ['only' => ['index', 'store', 'destroy']]);
			Route::resource('ajax/categoria-servico', 'CategoriaServicoController', ['only' => ['index', 'store', 'destroy']]);

		});
	});

	// Rotas para o E-Sic
	// ========================================
	Route::group(['prefix' => 'esic', 'middleware' => 'config'], function () {

		Route::get('acesso',          'SolicitanteController@acesso')->name('login');
		Route::get('cadastro',        'SolicitanteController@cadastro');
		Route::get('confirmacao',     'SolicitanteController@confirmacao');
		Route::get('recuperar-senha', 'SolicitanteController@recuperarSenha');
		Route::get('recuperacao',     'SolicitanteController@recuperacao');
		Route::get('relatorio',       'SolicitanteController@relatorio');
		Route::get('presencial',      'SolicitanteController@presencial');
		Route::get('download',        'SolicitanteController@download');
		Route::get('ajax/telefones',        'SolicitanteController@telefones');

		Route::group(['middleware' => 'auth:web'], function () {
			Route::get('/', function () { 
				$servico = request('servico');
				if (!$servico)
					return redirect('esic/solicitacoes');
				return redirect('esic/solicitacao/cadastro' . (request('servico') ? "?servico={$servico}" : ''));
			});
			Route::get('solicitacoes',              'SolicitacaoUsuarioController@lista');
			Route::get('solicitacao/cadastro',      'SolicitacaoUsuarioController@cadastro');
			Route::get('solicitacao/{id}/detalhes', 'SolicitacaoUsuarioController@detalhes');
			Route::get('solicitacao/anexo/{id}',    'SolicitacaoUsuarioController@exibirAnexo');
			Route::get('sair',                      'AutenticacaoController@logoutEsic');

			Route::resource('ajax/solicitacao', 'SolicitacaoUsuarioController', ['only' => ['index', 'show', 'store']]);
		});
	});

	Route::group(['prefix' => 'ajax'], function () {

		Route::post('login',           'AutenticacaoController@login');
		Route::post('recuperar-senha', 'AutenticacaoController@recuperarSenha');
		Route::post('alterar-senha',   'AutenticacaoController@alterarSenha');
		Route::get ('relatorio',       'SolicitanteController@gerarRelatorio');

		Route::get('tipo-contato', 'TipoContatoController');
		Route::post('contato',     'ContatoController@store');

		Route::get('tipo-instituicao',          'TipoInstituicaoController');
		Route::get('area-atuacao', 	            'AreaAtuacaoController');
		Route::get('estado',                    'EstadoController');
		Route::get('estado/{sigla}/cidades',    'CidadeController');
		Route::get('pais',                      'PaisController');
		Route::get('orgao-solicitacao',         'OrgaoSolicitacaoController');
		Route::get('tipo-situacao-solicitacao', 'TipoSituacaoSolicitacaoController');

		Route::resource('solicitante', 'SolicitanteController', ['only' => ['store']]);

	});
});

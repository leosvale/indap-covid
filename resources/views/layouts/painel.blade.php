<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @if (!session('configuracao.favico_html'))
        <link rel="icon" href="/favicon.ico">
    @endif

    <title>Painel Administrativo</title>

    @if (session('configuracao.favico_html'))
        {!! session('configuracao.favico_html') !!}
    @else    
        <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('images/favicon/favicon.png') }}">
        <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('images/favicon/favicon.png') }}">
        <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('images/favicon/favicon.png') }}">
        <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('images/favicon/favicon.png') }}">
        <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('images/favicon/favicon.png') }}">
        <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('images/favicon/favicon.png') }}">
        <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('images/favicon/favicon.png') }}">
        <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('images/favicon/favicon.png') }}">
        <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('images/favicon/favicon.png') }}">
        <link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('images/favicon/favicon.png') }}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/favicon/favicon.png') }}">
        <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('images/favicon/favicon.png') }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/favicon/favicon.png') }}">
        <link rel="manifest" href="{{ asset('images/favicon/manifest.json') }}">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="{{ asset('images/favicon/favicon.png') }}">
        <meta name="theme-color" content="#ffffff">
    @endif

    <link rel='stylesheet' id='colormag_google_fonts-css'
        href='//fonts.googleapis.com/css?family=Open+Sans%3A400%2C600&#038;ver=d70790dd569ea080d73680b752fb2b90&#038;display=swap'
        type='text/css' media='all' />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="{{ url( mix('/css/vendor.css') ) }}" rel="stylesheet">
    <link href="{{ url( mix('/css/app.css') ) }}" rel="stylesheet">
    <link href="{{ url( '/css/app-custom.css' ) }}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/bootstrap-theme.min.css')}}"/>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    {{-- <link rel="stylesheet" href="{{asset('IconPicker/dist/fontawesome-5.11.2/css/all.min.css')}}"> --}}
    <link rel="stylesheet" href="{{asset('IconPicker/dist/iconpicker-1.5.0.css')}}">
</head>
<body>
    <div id="app">
        <div id="page-loader">
            <span class="loader">
                <i class="fa fa-circle-o-notch fa-spin fa-5x"></i>
                <span class="sr-only">Carregando...</span>
            </span>
        </div>

        <nav id="page-nav" class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Navegação</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a href="{{ url('/painel') }}" class="navbar-brand">
                        <img style="height: 50px" src="{{ asset(session('configuracao.logo')) }}">
                    </a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                  <ul class="nav navbar-nav navbar-right">
                    <li><a href="{{ url('/') }}" target="_blank"><i class="fa fa-external-link-square" aria-hidden="true"></i> Site</a></li>

                      @if (Auth::guard('admin')->check())
                          <li><a href="{{ url('/painel/sair') }}"><i class="fa fa-sign-out"></i> Sair</a></li>
                      @endif
                  </ul>
                    <ul class="nav navbar-nav">
                        @if (!Auth::guard('admin')->check())
                            <li><p class="navbar-text d-none d-lg-block">{{ session('configuracao.nome') }}</p></li>
                        @else
                            @if (Auth::user()->privilegio_licitacoes || Auth::user()->usu_administrador == 'S')
                                <li><a href="{{ url('/painel/processos') }}">Processos</a></li>
                            @endif

                            @if (Auth::user()->privilegio_noticias || Auth::user()->usu_administrador == 'S')
                                <li><a href="{{ url('/painel/noticias') }}">Notícias e Boletins</a></li>
                            @endif

                            @if (Auth::user()->privilegio_informacao || Auth::user()->usu_administrador == 'S')
                                <li><a href="{{ url('/painel/paginas') }}">Acesso à Informação</a></li>
                            @endif

                            @if (Auth::user()->privilegio_ouvidoria || Auth::user()->usu_administrador == 'S')
                                <li><a href="{{ url('/painel/ouvidoria') }}">Ouvidoria</a></li>
                            @endif

                            @if (Auth::user()->privilegio_ouvidoria || Auth::user()->usu_administrador == 'S')
                                <li><a href="{{ url('/painel/vacinometro') }}">Vacinômetro</a></li>
                            @endif

                            <li><a href="{{ url('/painel/configuracoes') }}">Configurações</a></li>
                            
                        @endif
                    </ul>
                </div>
            </div>
        </nav>

        @php
            $welcome = session('welcome');
            $welcome_class = $welcome ? 'visible' : '';
            if($welcome) session(['welcome' => null]);
        @endphp

        <div id="page-welcome" class="{{ $welcome_class }}">
            <div class="container">
                Seja bem-vindo(a) ao Portal da {{ session('configuracao.nome') }}!
            </div>
        </div>

        <div id="page-wrapper" >
            @yield('content')
        </div>

        <footer id="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <p id="footer-copyright" class="text-center text-lg-left">&copy {{ date('Y') }} {{ session('configuracao.nome') }}. Todos os direitos reservados.</p>
                    </div>
                    <div class="col-md-3">
                        <div id="footer-developer">
                            <img style="max-width: 201px; max-height: 90px" src="{{ asset(session('configuracao.logo')) }}" alt="{{ session('configuracao.nome') }}">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    <script>var BASE_URL = "{{ url('/') }}";</script>

    <script src="{{asset('IconPicker/dist/iconpicker-1.5.0.js')}}"></script>
    <script src="{{ url( mix('/js/manifest.js') ) }}"></script>
    <script src="{{ url( mix('/js/vendor.js') ) }}"></script>
    <script src="{{ url( mix('/js/app.js') ) }}"></script>

</body>
</html>

<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <link rel="icon" href="../../themes/epidemic-placeholder/assets/images/favicon.png" type="image/png" />
  <title>@yield('titulo', $configuracao['portal'])</title>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="../../themes/epidemic-placeholder/assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="../../themes/epidemic-placeholder/assets/vendors/fontawesome/css/all.css" />
  <link rel="stylesheet" href="../../themes/epidemic-placeholder/assets/vendors/linearicons/css/linearicons.css" />
  <link rel="stylesheet" href="../../themes/epidemic-placeholder/assets/vendors/slick/slick.css" />
  <link rel="stylesheet" href="../../themes/epidemic-placeholder/assets/vendors/slick/slick-theme.css" />
  <link rel="stylesheet" href="../../themes/epidemic-placeholder/assets/vendors/mCustomScrollbar/jquery.mCustomScrollbar.min.css" />
  <link rel="stylesheet" href="../../themes/epidemic-placeholder/assets/vendors/animate-css/animate.css" />

  <!-- main css -->
  <link rel="stylesheet" href="../../themes/epidemic-placeholder/assets/css/style.css" />
  <link rel="stylesheet" href="../../themes/epidemic-placeholder/assets/css/responsive.css" />
</head>

<body data-scroll-animation="true">
  <div class="body_wrapper">

    <!--================Preloader Area =================-->
    <div class="preloader">
      <div class="three-bounce">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
      </div>
    </div>
    <!--================End Preloader Area =================-->

    <!--================Mobile Canvus Menu Area =================-->
    <div class="mobile_canvus_menu">
      <div class="close_btn">
        <img src="../../themes/epidemic-placeholder/assets/images/icon/close-dark.png" alt="">
      </div>
      <div class="menu_part_lux">
        <ul class="menu_list wd_scroll">
          <li><a href="/"><i class="fa fa-home"></i></a></li>
          <li><a href="{{ url('/noticias') }}">Notícias</a></li>
          <li><a href="{{ url('/boletins') }}">Boletins</a></li>
          <li><a href="{{ url('/licitacoes') }}">Licitações e Contratos</a></li>
          <li><a href="{{ url('/ouvidoria') }}">Ouvidoria</a></li>
          <li><a href="{{ url('/acessibilidade') }}">Acessibilidade</a></li>
          @foreach ($menu_principal as $categoria => $paginas)
            @if ($categoria != '')
              @php
                  $count++;
              @endphp
              <li>
                <a href="#">{{$categoria}} 
                  <i class="fas fa-angle-down rotate-icon"></i>
                </a>
                <ul class="list">
                @foreach ($paginas as $pagina)  
                  <li>
                    <a title="{{ $pagina['pub_titulo'] }}" 
                        rel="noopener noreferrer"
                        @if ($pagina['pub_url'])
                            href="{{ $pagina['pub_url'] }}"
                        @else
                            href="{{ url('/pagina/'.$pagina['publicacao_id']) }}"
                        @endif
                    >
                      {{ $pagina['pub_titulo'] }}
                    </a>
                  </li>
                @endforeach
                </ul>
              </li>
            @endif
          @endforeach
          <li>
            <a href="#">Mais
              <i class="fas fa-angle-down rotate-icon"></i>
            </a>
            <ul class="list">
              
              @foreach ($menu_principal as $categoria => $paginas)
                @if ($categoria == '')
                  @php
                      $count++;
                  @endphp
                  @for ($i = 0; $i < count($paginas); $i++)
                    @if( isset($paginas[$i]['pub_titulo'] ) )
                    <li>
                      <a title="{{ $paginas[$i]['pub_titulo'] }}" 
                          rel="noopener noreferrer"
                          @if ($paginas[$i]['pub_url'])
                              href="{{ $paginas[$i]['pub_url'] }}"
                          @else
                              href="{{ url('/pagina/'.$paginas[$i]['publicacao_id']) }}"
                          @endif
                      >
                        {{ $paginas[$i]['pub_titulo'] }}
                      </a>
                    </li>
                    @endif
                  @endfor 
                @endif
              @endforeach
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!--================End Mobile Canvus Menu Area =================-->

    <!--================Sidebar Form Area =================-->
    <div class="body_capture"></div>
    <section class="sidebar_widget scroll_body">
      <div class="info_sidebar_inner">
        <div class="close_btn">
          <img src="../../themes/epidemic-placeholder/assets/images/icon/close.png" alt="">
        </div>
        <ul class="nav info_social">
          @if(!empty($configuracao['facebook']))
              <li>
                <a href="{{ $configuracao['facebook'] }}" target="_blank"><i class="fab fa-facebook"></i></a>
              </li>
          @endif
          @if(!empty($configuracao['twitter']))
              <li>
                <a href="{{ $configuracao['twitter'] }}" target="_blank"><i class="fab fa-twitter"></i></a>
              </li>
          @endif
          @if(!empty($configuracao['instagram']))
              <li>
                <a href="{{ $configuracao['instagram'] }}" target="_blank"><i class="fab fa-instagram"></i></a>
              </li>
          @endif
          @if(!empty($configuracao['youtube']))
              <li>
                <a href="{{ $configuracao['youtube'] }}" target="_blank"><i class="fab fa-youtube"></i></a>
              </li>
          @endif
          @if(!empty($configuracao['google']))
              <li>
                <a href="{{ $configuracao['google'] }}" target="_blank"><i class="fab fa-google-plus"></i></a>
              </li>
          @endif
          @if(!empty($configuracao['pinterest']))
              <li>
                <a href="{{ $configuracao['pinterest'] }}" target="_blank"><i class="fab fa-pinterest"></i></a>
              </li>
          @endif
        </ul>
        <div class="info_title">
          <h2>Outros Serviços</h2>
          <p>Navegue aqui para mais serviços disponíveis.</p>
        </div>

        <!--================Sidebar Menu =================-->
        <div class="row answer_inner">
          <div class="col-lg-12">
            <div class="question_list">
              <div class="accordion" id="accordionExampleZero">
                @php
                    $count = 0;
                @endphp
                @foreach ($menu_lateral as $categoria => $paginas)
                  @if ($categoria != '')
                    @php
                        $count++;
                    @endphp
                    <div class="card">
                      <div class="card-header" id="headingZero">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse{{$count}}"
                          aria-expanded="false" aria-controls="collapse{{$count}}">
                          {{$categoria}}
                          <i class="fas fa-angle-down rotate-icon" aria-hidden="true" data-toggle="dropdown"></i>
                        </button>
                      </div>

                      <div id="collapse{{$count}}" class="collapse" aria-labelledby="headingZero"
                        data-parent="#accordionExampleZero">
                        <div class="card-body">
                          <ul class="nav nav-tabs" id="myTab" role="tablist">
                            @foreach ($paginas as $pagina)
                              <li class="nav-item">
                                  <a style="color: white;" 
                                      @if ($pagina['pub_url'])
                                          href="{{ $pagina['pub_url'] }}"
                                      @else
                                          href="{{ url('/pagina/'.$pagina['publicacao_id']) }}"
                                      @endif
                                  >
                                      {{ $pagina['pub_titulo'] }}<hr class="text_btn" color="white">
                                  </a>
                              </li>
                            @endforeach
                          </ul>
                        </div>
                      </div>
                    </div>
                  @else 
                    @foreach ($paginas as $pagina)
                    <li  class="nav-item">
                        <a style="color: white;" 
                            @if ($pagina['pub_url'])
                                href="{{ $pagina['pub_url'] }}"
                            @else
                                href="{{ url('/pagina/'.$pagina['publicacao_id']) }}"
                            @endif
                        >
                            <i class="fas fa-angle-right rotate-icon" aria-hidden="true" data-toggle="dropdown"></i> {{ $pagina['pub_titulo'] }}
                        </a>
                    </li>
                    @endforeach  
                  @endif
                @endforeach
              </div>
            </div>
          </div>
        </div>
        
        <!--================End Sidebar Menu =================-->

        <div class="info_footer">
          <div class="text-center" style="align-items: center;">
            @if(!empty($configuracao['logo_indap']) && $configuracao['logo_indap'] == 'S')
              <p class="footer-developed-by"> <span> Desenvolvido pela: </span> </p>
              <img src="{{ asset('images/logo-indap-w.png') }}" alt="Indap">
              <p><span>&copy {{ date('Y') }} {{ $configuracao['nome'] }}.<br> Todos os direitos reservados.</span></p>
            @endif
          </div>
        </div>
      </div>
    </section>
    <!--================End Sidebar Form Area =================-->

    <!--================ Header Area ===========================-->
    <header class="header_area">
      <div class="main_menu">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">
                <img width="265" height="70" style="width: auto; max-height: 70px" class="custom-logo" alt="{{ $configuracao['nome'] }}" src="{{ asset($configuracao['logo']) }}" />
              </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav">
                <li class="active"><a href="/"><i class="fa fa-home"></i></a></li>
                <li><a href="{{ url('/noticias') }}">Notícias</a></li>
                <li><a href="{{ url('/boletins') }}">Boletins</a></li>
                <li><a href="{{ url('/licitacoes') }}">Licitações e Contratos</a></li>
                <li><a href="{{ url('/ouvidoria') }}">Ouvidoria</a></li>
                <li><a href="{{ url('/acessibilidade') }}">Acessibilidade</a></li>
                <li>
                    <a 
                        @if (isset ($menu_principal[''][0]['pub_url'] ))
                            href="{{ $menu_principal[''][0]['pub_url'] }}"
                        @elseif( isset($menu_principal[''][0]['publicacao_id']) )
                            href="{{ url('/pagina/'.$menu_principal[''][0]['publicacao_id']) }}"
                        @endif
                    > 
                      @if (isset ($menu_principal[''][0]['pub_titulo'] ))
                        {{ $menu_principal[''][0]['pub_titulo'] }}
                      @endif
                    </a>
                </li>
                <li class="dropdown submenu">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                    aria-expanded="false">Mais</a>
                  <i class="fas fa-angle-down rotate-icon" aria-hidden="true" data-toggle="dropdown"></i>
                  <ul class="dropdown-menu">
                    @php
                        $count = 0;
                    @endphp
                    @foreach ($menu_principal as $categoria => $paginas)
                      @if ($categoria != '')
                        @php
                            $count++;
                        @endphp
                        <li class="dropdown submenu">
                          <a class="dropdown-toggle" data-toggle="dropdown"role="button"  aria-haspopup="true" aria-expanded="false">{{$categoria}} <i class="fas fa-angle-left rotate-icon" aria-hidden="true" data-toggle="dropdown"></i></a>
                          <ul class="dropdown-menu">
                          @foreach ($paginas as $pagina)  
                            <li>
                              <a title="{{ $pagina['pub_titulo'] }}" 
                                  rel="noopener noreferrer"
                                  @if ($pagina['pub_url'])
                                      href="{{ $pagina['pub_url'] }}"
                                  @else
                                      href="{{ url('/pagina/'.$pagina['publicacao_id']) }}"
                                  @endif
                              >
                                {{ $pagina['pub_titulo'] }}
                              </a>
                            </li>
                          @endforeach
                          </ul>
                        </li>
                      @endif
                    @endforeach 
                    @foreach ($menu_principal as $categoria => $paginas)
                      @if ($categoria == '')
                        @php
                            $count++;
                        @endphp
                        @for ($i = 1; $i < count($paginas); $i++)
                          @if(  isset ( $paginas[$i]['pub_titulo'] ))
                          <li>
                            <a title="{{ $paginas[$i]['pub_titulo'] }}" 
                                rel="noopener noreferrer"
                                @if ($paginas[$i]['pub_url'])
                                    href="{{ $paginas[$i]['pub_url'] }}"
                                @else
                                    href="{{ url('/pagina/'.$paginas[$i]['publicacao_id']) }}"
                                @endif
                            >
                              {{ $paginas[$i]['pub_titulo'] }}
                            </a>
                          </li>
                          @endif
                        @endfor 
                      @endif
                    @endforeach
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div class="right_burger">
          <ul class="nav">
            <li>
              <div class="search_btn" data-toggle="modal" data-target="#exampleModal">
                <img src="../../themes/epidemic-placeholder/assets/images/icon/search.png" alt="" />
              </div>
            </li>
            <li>
              <div class="menu_btn">
                <img src="../../themes/epidemic-placeholder/assets/images/icon/burger.png" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <!--================ End Header Area =========================-->

    <!--========================= Main ===========================-->
    <div id="main" class="clearfix">
        <div class="inner-wrap clearfix">
            @yield('carousel-home')

            <div vw class="enabled">
              <div vw-access-button class="active"></div>
              <div vw-plugin-wrapper>
                <div class="vw-plugin-top-wrapper"></div>
              </div>
            </div>

            <div class="main-content-section clearfix" style="min-height: 50vh">
                <div id="primary">
                    <div id="content" class="clearfix">
                        @yield('content')
                    </div>
                </div>
                <div id="secondary">
                    @yield('secondary')
                </div>
            </div>
        </div>
    </div>
    <!--==================== End Main ++++=====================-->

    <!--================== Accessibility Area =================-->
    <div class="acess-container">
      <button data-tooltip="Acessibilidade" data-tooltip-position="left" style="position: fixed; bottom: 340px; right: 0px;" id="jbbutton" class="btn btn-info btn-lg btn-circle"> <i class="fas fa-universal-access"></i></button>

      <div id="acess-icons" style="display: none;">        
        <button data-tooltip="Aumentar tamanho do texto" data-tooltip-position="left" style="position: fixed; bottom: 280px; right: 0px;"  class="btn btn-danger btn-lg btn-circle" id="increaseFont"><i class="fas fa-font">+</i></button>
        <button data-tooltip="Diminuir tamanho do texto" data-tooltip-position="left" style="position: fixed; bottom: 220px; right: 0px;"  class="btn btn-warning btn-lg btn-circle" id="decreaseFont"><i class="fas fa-font">-</i></button>
        <button data-tooltip="Contraste" data-tooltip-position="left" style="position: fixed; bottom: 160px; right: 0px;"  class="btn btn-dark btn-lg btn-circle" onclick="myFunction()"><i class="fas fa-adjust"></i></button>
      </div>
    </div>
    <!--================== End Accessibility Area =================-->

    <!--================Footer Area =================-->
    <footer class="footer_area">
      <div class="footer_widgets_area pad_top">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="f_title">
                  <img style="width: auto; max-height: 90px" alt="{{ $configuracao['nome'] }}" src="{{ asset($configuracao['logo']) }}">
                </div>
                <div class="ct_wd_text">
                  <div class="media-body">
                    <p><span>&copy {{ date('Y') }} {{ $configuracao['nome'] }}</span></p>
                  </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="f_title">
                <h3>Fale Conosco</h3>
              </div>
              <aside class="f_widget contact_widget">
                <div class="ct_wd_text">  
                  <div class="media">
                    @isset($configuracao['telefone_primario'])
                      <div class="d-flex">
                        <i class="linearicons-telephone"></i>
                      </div>
                      <div class="media-body">
                        <h5>Telefone 1</h5>
                        <a href="tel:+8801676790690">
                          <h4>{{ $configuracao['telefone_primario'] }}</h4>
                        </a>
                      </div>
                    @endisset
                  </div>
                  <div class="media">
                    @isset($configuracao['telefone_secundario'])
                      <div class="d-flex">
                        <i class="linearicons-telephone"></i>
                      </div>
                      <div class="media-body">
                        <h5>Telefone 2</h5>
                        <a href="tel:+8801676790690">
                          <h4>{{ $configuracao['telefone_secundario'] }}</h4>
                        </a>
                      </div>
                    @endisset
                  </div>
                  <div class="media">
                    @isset($configuracao['endereco'])
                      <div class="d-flex">
                        <i class="linearicons-telephone"></i>
                      </div>
                      <div class="media-body">
                        <h5>Endereço</h5>
                        <a href="tel:+8801676790690">
                          <p>{!! nl2br($configuracao['endereco']) !!}</p>
                        </a>
                      </div>
                    @endisset
                  </div>
                </div>
              </aside>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="f_title">
                  <h3>Siga-nos nas Redes Sociais</h3>
                </div>
                <aside class="f_widget about_widget">
                  <ul class="nav">
                    
                    @if(!empty($configuracao['facebook']))
                        <li>
                          <a href="{{ $configuracao['facebook'] }}" target="_blank"><i class="fab fa-facebook"></i></a>
                        </li>
                    @endif
                    @if(!empty($configuracao['twitter']))
                        <li>
                          <a href="{{ $configuracao['twitter'] }}" target="_blank"><i class="fab fa-twitter"></i></a>
                        </li>
                    @endif
                    @if(!empty($configuracao['instagram']))
                        <li>
                          <a href="{{ $configuracao['instagram'] }}" target="_blank"><i class="fab fa-instagram"></i></a>
                        </li>
                    @endif
                    @if(!empty($configuracao['youtube']))
                        <li>
                          <a href="{{ $configuracao['youtube'] }}" target="_blank"><i class="fab fa-youtube"></i></a>
                        </li>
                    @endif
                    @if(!empty($configuracao['google']))
                        <li>
                          <a href="{{ $configuracao['google'] }}" target="_blank"><i class="fab fa-google-plus"></i></a>
                        </li>
                    @endif
                    @if(!empty($configuracao['pinterest']))
                        <li>
                          <a href="{{ $configuracao['pinterest'] }}" target="_blank"><i class="fab fa-pinterest"></i></a>
                        </li>
                    @endif


                  </ul>
                </aside>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_copyright">
        <div class="container">

          @if(!empty($configuracao['logo_indap']) && $configuracao['logo_indap'] == 'S')
              <div class="indap">
                  <h6 class="footer-developed-by"> <span> Desenvolvido pela: </span> </h6>
                  <img src="{{ asset('images/logo-indap.png') }}" alt="Indap">
                  <h6><span>&copy {{ date('Y') }} INDAP | Sistemas e Prestação de serviços .<br> Todos os direitos reservados.</span></h6>
              </div>
          @endif
        </div>
      </div>
    </footer>
    <!--================End Footer Area =================-->

  <div class="modal fade search_modal" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <img src="../../themes/epidemic-placeholder/assets/images/icon/close-white.png" alt="">
    </button>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <form method="get" action="{{ url('busca') }}">
            <div class="input-group">
              <input id="search-field" type="text" placeholder="Buscar..." aria-label="Recipient's username"
                aria-describedby="button-addon3" class="s field" name="s">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="submit" id="button-addon3"><i
                    class="fa fa-search"></i></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="../../themes/epidemic-placeholder/assets/js/jquery-3.4.1.min.js"></script>
  <script src="../../themes/epidemic-placeholder/assets/js/popper.min.js"></script>
  <script src="../../themes/epidemic-placeholder/assets/js/bootstrap.min.js"></script>
  <script src="../../themes/epidemic-placeholder/assets/vendors/corona-live/dashboard.js"></script>
  <script src="../../themes/epidemic-placeholder/assets/vendors/isotop/imagesloaded.pkgd.min.js"></script>
  <script src="../../themes/epidemic-placeholder/assets/vendors/isotop/isotope.pkgd.min.js"></script>
  <script src="../../themes/epidemic-placeholder/assets/vendors/slick/slick.min.js"></script>
  <script src="../../themes/epidemic-placeholder/assets/vendors/scroll-animation/jquery.parallax-scroll.js"></script>
  <script src="../../themes/epidemic-placeholder/assets/vendors/scroll-animation/parallax.js"></script>
  <script src="../../themes/epidemic-placeholder/assets/vendors/mCustomScrollbar/jquery.mCustomScrollbar.concat.min.js"></script>
  <script src="../../themes/epidemic-placeholder/assets/vendors/animate-css/wow.min.js"></script>
  <script src="../../themes/epidemic-placeholder/assets/js/jquery.validate.min.js"></script>
  <script src="../../themes/epidemic-placeholder/assets/js/theme.js"></script>
  
  <!-- <script src="{{asset('js/440bb498fbbd4e2c59166cf27e6837a5.js')}}" data-minify="1"></script> -->
  <script src="../../js/acessibilidade.js"></script>
  <script src="../../js/app.js"></script>
  <script src="../../js/bootstrap.min.js"></script>
  <script src="../../js/contraste.js"></script>
  <script src="../../js/jquery.cookie.js"></script>
  <script src="../../js/jquery.dcjqaccordion.2.9.js"></script>
  <script src="../../js/jquery.jquery.hoverIntent.minified.js"></script>
  <!-- <script src="../../js/manifest.js"></script> -->
  <script src="../../js/site.js"></script>
  <script src="../../js/vendor.js"></script>

  <script src="https://code.jquery.com/jquery-1.10.0.min.js"></script>
  <script src="https://rawgit.com/RobinHerbots/Inputmask/3.x/dist/jquery.inputmask.bundle.js"></script>
  <script src="https://cdn.rawgit.com/plentz/jquery-maskmoney/master/dist/jquery.maskMoney.min.js"></script>

  <script type="text/javascript">
    $("input[id*='cpfcnpj']").inputmask({
      mask: ['999.999.999-99', '99.999.999/9999-99'],
      keepStatic: true
    });
  </script>

  <script>
    $("input[id*='valor']").maskMoney({
         prefix: "R$",
         decimal: ",",
         thousands: "."
     });
  </script>

  <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
  <script>
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  </script>

  <script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.3.4/lib/darkmode-js.min.js"></script>
  <script>
    var options = {
    bottom: '140px', // default: '32px'
    right: '0px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓' // default: ''
  }

  const darkmode =  new Darkmode();

  function myFunction() {
    
    darkmode.toggle();
  }

  </script>

  <script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
  <script type="text/javascript" src="../../js/jbility.js"></script>

</body>
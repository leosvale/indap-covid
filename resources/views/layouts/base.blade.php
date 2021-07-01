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
          <!-- <li>
            <a href="index.html">Prevention
              <i class="linearicons-chevron-down"></i>
            </a>
            <ul class="list">
              <li><a href="../themes/epidemic-placeholder/symptom.html">Typical Symptoms</a></li>
              <li><a href="../themes/epidemic-placeholder/symptom-checker.html">Symptom Checker</a></li>
              <li><a href="../themes/epidemic-placeholder/prevention.html">Prevention</a></li>
              <li><a href="../themes/epidemic-placeholder/virus-checker.html">Coronavirus Checker</a></li>
              <li><a href="../themes/epidemic-placeholder/tracker.html">Tracker</a></li>
              <li><a href="../themes/epidemic-placeholder/maintenance.html">Maintenance</a></li>
              <li><a href="../themes/epidemic-placeholder/faq.html">Faqs</a></li>
            </ul>
          </li> -->
          <!-- <li><a href="../themes/epidemic-placeholder/appointment.html">Appointment</a></li>
          <li>
            <a href="../themes/epidemic-placeholder/#">Pages
              <i class="linearicons-chevron-down"></i>
            </a>
            <ul class="list">
              <li><a href="../themes/epidemic-placeholder/about.html">About</a></li>
              <li><a href="../themes/epidemic-placeholder/doctors.html">Doctors</a></li>
              <li><a href="../themes/epidemic-placeholder/sample-right-sidebar.html">Simple Sidebar</a></li>
              <li><a href="../themes/epidemic-placeholder/typography.html">Typhography</a></li>
              <li><a href="../themes/epidemic-placeholder/search.html">Search</a></li>
              <li><a href="../themes/epidemic-placeholder/search-nothing.html">Not Found</a></li>
              <li><a href="../themes/epidemic-placeholder/comingsoon.html">Coming Soon</a></li>
              <li><a href="../themes/epidemic-placeholder/404.html">Error</a></li>
            </ul>
          </li>

          <li>
            <a href="../themes/epidemic-placeholder/index.html">Blog
              <i class="linearicons-chevron-down"></i>
            </a>
            <ul class="list">
              <li><a href="../themes/epidemic-placeholder/blog.html">Blog</a></li>
              <li><a href="../themes/epidemic-placeholder/single-blog.html">Blog Details</a></li>

            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li> -->
        </ul>
      </div>
      <div class="menu_btm">
        <a class="green_btn" href="#"><i class="linearicons-pulse"></i> Symptom Checker</a>
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
                          <i class="linearicons-chevron-down"></i>
                        </button>
                      </div>

                      <div id="collapse{{$count}}" class="collapse show" aria-labelledby="headingZero"
                        data-parent="#accordionExampleZero">
                        <div class="card-body">
                          <ul class="nav nav-tabs" id="myTab" role="tablist">
                            @foreach ($paginas as $pagina)
                              <li class="nav-item">
                                  <a 
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
                        </div>
                      </div>
                    </div>
                  @else 
                    @foreach ($paginas as $pagina)
                    <li  class="nav-item">
                        <a 
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

    <!--================Header Area =================-->
    <header class="header_area">
      <div class="main_menu">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="index.html">
                <img width="265" height="90" style="width: auto; max-height: 90px" class="custom-logo" alt="{{ $configuracao['nome'] }}" src="{{ asset($configuracao['logo']) }}" />
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
                <!-- <li class="dropdown submenu">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="prevention.html" role="button"
                    aria-haspopup="true" aria-expanded="false">Prevention </a>
                  <i class="linearicons-chevron-down mobile_dropdown" aria-hidden="true" data-toggle="dropdown"></i>
                  <ul class="dropdown-menu">
                    <li class="dropdown submenu">
                      <a class="dropdown-toggle" data-toggle="dropdown" href="symptom.html" role="button"
                        aria-haspopup="true" aria-expanded="false">Symptoms
                        <i class="linearicons-chevron-right mobile_dropdown" aria-hidden="true"
                          data-toggle="dropdown"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li><a href="../themes/epidemic-placeholder/symptom.html">Typical Symptoms</a></li>
                        <li><a href="../themes/epidemic-placeholder/symptom-checker.html">Symptom Checker</a></li>
                        <li><a href="../themes/epidemic-placeholder/prevention.html">Prevention</a></li>
                        <li><a href="../themes/epidemic-placeholder/virus-checker.html">Coronavirus Checker</a></li>
                        <li><a href="../themes/epidemic-placeholder/tracker.html">Tracker</a></li>
                      </ul>
                    </li>
                    <li><a href="../themes/epidemic-placeholder/maintenance.html">Maintenance</a></li>
                    <li><a href="../themes/epidemic-placeholder/faq.html">FAQS</a></li>
                  </ul>
                </li>
                <li><a href="../themes/epidemic-placeholder/appointment.html">Appointment</a></li>
                <li class="dropdown submenu">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="../themes/epidemic-placeholder/#" role="button" aria-haspopup="true"
                    aria-expanded="false">Pages</a>
                  <i class="linearicons-chevron-down mobile_dropdown" aria-hidden="true" data-toggle="dropdown"></i>
                  <ul class="dropdown-menu">
                    <li><a href="../themes/epidemic-placeholder/about.html">About</a></li>
                    <li><a href="../themes/epidemic-placeholder/doctors.html">Doctors</a></li>
                    <li><a href="../themes/epidemic-placeholder/sample-right-sidebar.html">Simple Sidebar</a></li>
                    <li><a href="../themes/epidemic-placeholder/typography.html">Typhography</a></li>
                    <li class="dropdown submenu">
                      <a class="dropdown-toggle" data-toggle="dropdown" href="../themes/epidemic-placeholder/search.html" role="button"
                        aria-haspopup="true" aria-expanded="false">Search
                        <i class="linearicons-chevron-right mobile_dropdown" aria-hidden="true"
                          data-toggle="dropdown"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li><a href="../themes/epidemic-placeholder/search.html">Search</a></li>
                        <li><a href="../themes/epidemic-placeholder/search-nothing.html">Not Found</a></li>
                      </ul>
                    </li>
                    <li><a href="../themes/epidemic-placeholder/comingsoon.html">Coming Soon</a></li>
                    <li><a href="../themes/epidemic-placeholder/404.html">Error</a></li>
                  </ul>
                </li>
                <li class="dropdown submenu">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="../themes/epidemic-placeholder/blog.html" role="button" aria-haspopup="true"
                    aria-expanded="false">Blog
                  </a>
                  <i class="linearicons-chevron-down mobile_dropdown" aria-hidden="true" data-toggle="dropdown"></i>
                  <ul class="dropdown-menu">
                    <li><a href="../themes/epidemic-placeholder/blog.html">Blog</a></li>
                    <li><a href="../themes/epidemic-placeholder/single-blog.html">Blog Details</a></li>
                  </ul>
                </li>
                <li><a href="../themes/epidemic-placeholder/contact.html">Contact Us</a></li> -->
              </ul>
              <!-- <ul class="nav navbar-nav navbar-right">
                <li class="checker_btn">
                  <a href="../themes/epidemic-placeholder/#"><i class="linearicons-pulse"></i> Symptom Checker</a>
                </li>
              </ul> -->
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

    <div id="main" class="clearfix">

      <!--================Home Banner Area =================-->
      <!-- <section class="home_banner_area">
        <div class="container">
          <div class="text-center maintence_img img-fluid wow fadeInRight">
              @if (isset($configuracao['banner_home_img']) && 
                isset($configuracao['banner_home_url']) && 
                $configuracao['banner_home_img'] &&
                $configuracao['banner_home_url'])  
                  <img src="{{ $configuracao['banner_home_img'] }}" width="728" height="90" alt="">
              @endif
          </div>
        </div>
      </section> -->
    <!--================End Home Banner Area =================-->
        <div class="inner-wrap clearfix">
            @yield('carousel-home')
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

    <!--================Footer Area =================-->
    <footer class="footer_area">
      <div class="footer_copyright">
        <div class="container">
          <img style="width: auto; max-height: 90px" alt="{{ $configuracao['nome'] }}" src="{{ asset($configuracao['logo']) }}">
          <p>{!! nl2br($configuracao['endereco']) !!}</p><br>
          @isset($configuracao['telefone_primario'])
              <p>Telefone(s): {{$configuracao['telefone_primario']}} @if(isset($configuracao['telefone_secundario']) & $configuracao['telefone_primario'] != $configuracao['telefone_secundario']) | {{$configuracao['telefone_secundario']}} @endif</p>
          @endisset
          <br>
          @if(!empty($configuracao['logo_indap']) && $configuracao['logo_indap'] == 'S')
              <div class="indap">
                  <p class="footer-developed-by"> <span> Desenvolvido pela: </span> </p>
                  <img src="{{ asset('images/logo-indap.png') }}" alt="Indap">
                  <p><span>&copy {{ date('Y') }} {{ $configuracao['nome'] }}.<br> Todos os direitos reservados.</span></p>
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
  
  <script src="{{asset('js/440bb498fbbd4e2c59166cf27e6837a5.js')}}" data-minify="1"></script>
  <script src="../../js/acessibilidade.js"></script>
  <script src="../../js/app.js"></script>
  <script src="../../js/bootstrap.min.js"></script>
  <script src="../../js/contraste.js"></script>
  <script src="../../js/jquery.cookie.js"></script>
  <script src="../../js/jquery.dcjqaccordion.2.9.js"></script>
  <script src="../../js/jquery.jquery.hoverIntent.minified.js"></script>
  <script src="../../js/manifest.js"></script>
  <script src="../../js/site.js"></script>
  <script src="../../js/vendor.js"></script>
</body>
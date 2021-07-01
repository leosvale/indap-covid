@extends('layouts.site')

@section('content')

    <!--================Breadcrumb Area =================-->
    <section class="breadcrumb_area">
        <div class="container">
            <div class="breadcrumb_text">
                @if(Route::currentRouteName() == 'noticias')
                    <h3 class="wow fadeInUp" data-wow-delay="0.2s"><span>Notícias</span></h3>
                @else
                    <h3 class="wow fadeInUp" data-wow-delay="0.2s"><span>Boletins</span></h3>
                @endif
            </div>
        </div>
    </section>
    <!--================End Breadcrumb Area =================-->

    <!--================Blog Area =================-->
    <section class="blog_area">
        <div class="container">
            <div class="blog_menu">
                <div class="g_fillter">
                    <ul class="nav justify-content-center">
                        <li class="active" data-filter="*">
                            <a href="#"><i class="linearicons-icons"></i></a>
                        </li>
                        @foreach($categorias as $categoria)
                            <li data-filter=".{{ $categoria->tcp_nome }}"><a href="#">{{ $categoria->tcp_nome }}</a></li>
                        @endforeach
                        <li data-filter=".todas"><a href="#">Todas Categorias</a></li>
                    </ul>
                </div>
            </div>
            <div class="row blog_item_inner">
            @foreach($noticias as $noticia)
                @php
                    $noticia_img = ($noticia['anexo'] ? get_image_large_url($noticia['anexo']['ane_arquivo']) : '');
                    $noticia_img = $noticia_img ?: 'http://placehold.it/300.jpg?text=%20';
                    $noticia_txt = (empty($noticia['pub_resumo']) ? $noticia['pub_conteudo'] : $noticia['pub_resumo']);

                    $stringCategorias = '';
                @endphp

                @if(!empty($noticia['categorias']))
                    @foreach (array_column($noticia['categorias'], 'tcp_nome') as $categoria)
                        @php
                            $stringCategorias = $stringCategorias.' '.$categoria;
                        @endphp
                    @endforeach
                @endif
                <div class="col-lg-4 todas {{ $stringCategorias }}">
                    <div class="small_l_blog_item">
                        <div class="l_blog_img">
                          <img  width="370" height="200" src="{{ $noticia_img }}" alt="{{ $noticia['pub_titulo'] }}" class="attachment-colormag-featured-post-medium size-colormag-featured-post-medium wp-post-image"
                                    alt="" />
                        </div>
                        <div class="l_blog_text">
                          <div class="date">
                            @if(!empty($noticia['categorias']))
                                @foreach (array_column($noticia['categorias'], 'tcp_nome') as $categoria)
                                    <a style="background:@if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif" rel="category tag">
                                    {{$categoria}}
                                    </a>&nbsp;
                                @endforeach
                            @endif
                            <a href="{{ url('/noticia/'.$noticia['publicacao_id']) }}">
                                <i class="linearicons-calendar-full"></i>{{ date('d/m/Y', strtotime($noticia['pub_data_visivel'] ? $noticia['pub_data_visivel'] : $noticia['pub_data_cadastro'])) }}
                            </a>
                          </div>
                          <a class="text_btn" href="{{ url('/noticia/'.$noticia['publicacao_id']) }}">{{ $noticia['pub_titulo'] }} <i class="linearicons-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
            <div class="row blog_pagination">
                <div class="col-md-2">
                    @if($prev_link)
                        <a class="pagi_btn prev" href="{{ $prev_link }}">← Anterior</a>
                    @endif
                </div>
                <div class="col-md-8">
                        
                </div>
                <div class="col-md-2 text-right">
                    @if($next_link)
                        <a class="pagi_btn next" href="{{ $next_link }}">Próxima →</a>
                    @endif
                </div>
            </div>
            <!-- <div class="row blog_pagination">
                @if($prev_link || $next_link)
                    <ul class="default-wp-page clearfix">
                        @if($prev_link)
                            <li class="previous"><a class="pagi_btn prev" href="{{ $prev_link }}">← Anterior</a></li>
                        @endif
                        @if($next_link)
                            <li class="next"><a class="pagi_btn next" href="{{ $next_link }}">Próximo →</a></li>
                        @endif
                    </ul>
                @endif
            </div> -->
        </div>
    </section>
    <!--================End Blog Area =================-->
    <!-- @if($prev_link || $next_link)
        <ul class="default-wp-page clearfix">
            @if($prev_link)
                <li class="previous"><a href="{{ $prev_link }}">← Anterior</a></li>
            @endif
            @if($next_link)
                <li class="next"><a href="{{ $next_link }}">Próximo →</a></li>
            @endif
        </ul>
    @endif -->
@endsection

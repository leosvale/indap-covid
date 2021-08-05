@extends('layouts.site')

@section('titulo', $noticia['pub_titulo'])
@section('descricao', get_excerpt($noticia['pub_conteudo'], 155))
@if (isset($noticia['pub_midia_p']))
    @section('meta-img', $noticia['pub_midia_p'])
@endif

@section('content')
    <!--================Breadcrumb Area =================-->
    <section class="breadcrumb_area">
        <div class="container">
            <div class="breadcrumb_text">
                <div class="single_blog_text">
                    <h3 class="wow fadeInUp" data-wow-delay="0.2s"><span>{{ $noticia['pub_titulo'] }}</span></h3>
                    <ul class="nav justify-content-center wow fadeInUp" data-wow-delay="0.3s">
                        @if(!empty($noticia['categorias']))
                            @foreach (array_column($noticia['categorias'], 'tcp_nome') as $categoria)
                                <li>
                                    <a style="background:@if(!empty($configuracao['cor'])) {{$configuracao['cor']}} @else {{'#289dcc'}}  @endif" rel="category tag">
                                    {{$categoria}}
                                    </a>&nbsp;
                                </li>
                            @endforeach
                        @endif
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!--================End Breadcrumb Area =================-->

    <!--================Single Blog Content Area =================-->
    <section class="single_blog_area">
        <div class="container">
            <div class="row single_blog_inner">
                <div class="col-lg-9">
                    <div class="single_blog_text_inner">
                        <article class="post type-post status-publish format-standard has-post-thumbnail hentry">
                        @if (isset($noticia['pub_midia_g']))
                            <div class="featured-image">
                                <a href="{{ $noticia['pub_midia_g'] }}" class="image-popup">
                                    <img style="width: 840; height: 456;"  src="{{ $noticia['pub_midia_g'] }}" alt="{{ $noticia['pub_titulo'] }}" class="img-fluid">
                                </a>
                            </div>
                        @endif

                            <div class="article-content clearfix">

                                <div class="single_first_text">
                                    <h6>{{ date('d/m/Y', strtotime($noticia['pub_data_visivel'] ? $noticia['pub_data_visivel'] : $noticia['pub_data_cadastro'])) }}
                                    </h6>
                                </div>
                                    
                                <div class="secand_part">
                                    {!! html_entity_decode($noticia['pub_conteudo']) !!}
                                </div>

                                {{-- {{dd($item)}} --}}

                                <div class="entry-content">
                                    @if(!empty($anexos))
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th> Anexos</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($anexos as $anexo)
                                            <tr>
                                                <td>
                                                    <i class="fa fa-file-pdf-o"></i>
                                                    <a href="/pagina/exibir/anexo/ {{ $anexo['pub_anexo_id'] }}">
                                                        {{ $anexo['pub_anexo_nome'] }}
                                                    </a>
                                                </td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                    @endif
                                </div>

                                <div class="single_blog_bottom">
                                    <div class="row m-0 justify-content-between">
                                        <div class="left">
                                            <ul class="left">
                                                <li class="post_navigation row"><a href="{{ '/noticias' }}"> 
                                                    @if($noticia['pub_tipo'] == 'NOT')
                                                        <i class="fa fa-plus"></i> Mais Notícias
                                                    @else
                                                        <i class="fa fa-plus"></i> Mais Boletins
                                                    @endif
                                                </a></li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <ul class="nav">
                                                <li>
                                                    <a href="https://facebook.com/sharer/sharer.php?u={{urlencode(url()->current())}}" target="_blank" ><i class="fab fa-facebook"></i></a>
                                                </li>
                                                <li>
                                                    <a href="whatsapp://send?text=%20{{urlencode(url()->current())}}" target="_blank" ><i class="fab fa-whatsapp"></i></a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/intent/tweet/?text=&amp;url={{urlencode(url()->current())}}"><i class="fab fa-twitter" target="_blank"></i></a>
                                                </li>
                                                <li>
                                                    <a href="mailto:?subject=&amp;body={{urlencode(url()->current())}}" target="_self"><i class="fa fa-envelope"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="right_sidebar">
                        <aside class="right_widget ct_widget">
                            <div class="r_wd_title">
                                <h3>Categorias</h3>
                            </div>
                            @if($noticia['pub_tipo'] == 'NOT')
                                <ul class="nav flex-column">
                                    @foreach($categorias as $categoria)
                                    <li><a href="/noticias?filter={{ $categoria->tipo_categoria_publicacao_id }}"><i class="linearicons-arrow-right"></i>
                                        {{$categoria->tcp_nome}}
                                    </a></li>
                                    @endforeach
                                </ul>
                            @else
                                <ul class="nav flex-column">
                                    @foreach($categorias as $categoria)
                                    <li><a href="/boletins?filter={{ $categoria->tipo_categoria_publicacao_id }}"><i class="linearicons-arrow-right"></i>
                                        {{$categoria->tcp_nome}}
                                    </a></li>
                                    @endforeach
                                </ul>
                            @endif
                        </aside>
                        <aside class="right_widget post_widget">
                            <div class="r_wd_title">
                                <h3>Veja Também</h3>
                            </div>
                            @foreach($destaques as $destaque)
                                @php
                                  $destaque_img = ($destaque['anexo'] ? get_image_small_url($destaque['anexo']['ane_arquivo']) : '');
                                  $destaque_img = $destaque_img ?: 'http://placehold.it/300.jpg?text=%20';
                                  $destaque_txt = (empty($destaque['pub_resumo']) ? $destaque['pub_conteudo'] : $destaque['pub_resumo']);
                              @endphp
                            <div class="media">
                                <div class="d-flex">
                                    <img height="70" width="70" src="{{ $destaque_img }}" alt="">
                                </div>
                                <div class="media-body">
                                    <a class="text_btn" href="{{ url('/noticia/'.$destaque['publicacao_id']) }}">
                                        <h4>{{ $destaque['pub_titulo'] }}</h4>
                                    </a>
                                </div>
                            </div>
                            @endforeach
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================End Single Blog Content Area =================-->


    
@endsection

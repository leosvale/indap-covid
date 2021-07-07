@extends('layouts.site')

@section('content')

    <!--================Breadcrumb Area =================-->
    <section class="breadcrumb_area">
        <div class="container">
            <div class="breadcrumb_text">
                <h3 class="wow fadeInUp" data-wow-delay="0.2s">Busca</h3>
                <h6 class="wow fadeInUp">Resultados da busca por: {{ $termo }}</h6>
            </div>
        </div>
    </section>
    <!--================End Breadcrumb Area =================-->

    <!--================Blog Area =================-->
    <section class="blog_area">
        <div class="container">
            @foreach($resultado as $item)
                <div class="media media-thumb">
                    <div class="media-body">
                        <div class="post-meta">
                            <span class="published">{{ date('d/m/Y', strtotime($item->data)) }}</span>
                            @if($item->tipo == 'DOC')
                                <span class="categories"> - {{ $item->processo }}</span>
                            @elseif($item->tipo != 'DOC' && !empty($item->categorias))
                                <span class="categories"> - {{ join(', ', $item->categorias) }}</span>
                            @endif
                        </div>
                        <h4 class="media-heading">
                            @if($item->tipo != 'DOC')
                                @php
                                    $link = ($item->tipo == 'NOT' ? 'noticia/' : 'pagina/') . $item->id;
                                @endphp
                                <a href="{{ url($link) }}">{{ $item->titulo }}</a>
                            @else
                                {{ $item->titulo }}
                            @endif
                        </h4>
                        @if($item->tipo != 'DOC')
                            @php
                                $text = empty($item->resumo) ? $item->conteudo : $item->resumo;
                            @endphp
                            <p>{{ get_excerpt($text, 220) }}</p>
                        @else
                            <ul class="list-unstyled">
                                @foreach($item->anexos as $anexo)
                                    <li>
                                        {{ date('d/m/Y', strtotime($anexo->dan_data_documento)) }} - {{ $anexo->tcp_nome }} -
                                        <i class="fa fa-file-text-o fa-fw"></i> 
                                        <a href="{{ url('processo/anexo/'.$anexo->anexo_id) }}" target="_blank">{{ $anexo->ane_nome }}</a>
                                    </li>
                                @endforeach
                            </ul>
                        @endif
                    </div>
                </div>
                <hr>
            @endforeach

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
        </div>
    </section>
@endsection

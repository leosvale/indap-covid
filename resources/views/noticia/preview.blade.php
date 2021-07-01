@extends('layouts.painel')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default panel-noticia">
                    <div class="panel-body">
                        <div class="et_post_meta_wrapper">
                            <h3 class="entry-title">{{ $publicacao['pub_titulo'] }}</h3>
                            <div class="post-meta">
                                <span class="published">{{ date('d/m/Y', strtotime($publicacao['pub_data_cadastro'])) }}</span>
                                <span class="categories">{{ join(', ', array_column($publicacao['categorias'], 'tcp_nome')) }}</span>
                            </div>

                            @if (isset($publicacao['pub_midia_g']))
                                <img src="{{ $publicacao['pub_midia_g'] }}" alt="{{ $publicacao['pub_titulo'] }}" class="img-responsive img-post">
                            @endif
                        </div>

                        <div class="entry-content">
                            {!! html_entity_decode($publicacao['pub_conteudo']) !!}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2">
                <a href="{{ url('/painel/noticias') }}" class="btn btn-default pull-right"><i class="fa fa-chevron-left"></i>&nbsp; Voltar</a>
            </div>
        </div>

    </div>
@endsection

@extends('layouts.base')

@section('titulo', $tipo_servico['tcs_nome'])
@section('descricao', $tipo_servico['tcs_descricao'])

@section('content')
<header class="page-header">
    <h1 class="page-title"><span>{{$tipo_servico['tcs_nome']}}</span></h1>
</header>

<div class="article-container">
    <span>{{$tipo_servico['tcs_descricao']}}</span>

    @foreach ($servicos as $servico)
    <div class="media media-thumb">
        <div class="media-body" style="border-bottom: 1px solid transparent">
            <h6><a href="/servico/{{$servico['publicacao_id']}}">{{$servico['pub_titulo']}}</a></h6>
            <p>{{$servico['pub_descricao']}}</p>
        </div>
    </div>
    @endforeach
</div>

@section('secondary')
<div class="content-sep sidebar-left hide-mobile">
    <h6 style="padding-left: 18px">Serviços</h6>
    
    <ul class="nav nav-menu">
        @foreach ($tipo_servicos as $tipo_servico)    
            <li><a href="/servicos/{{$tipo_servico['tipo_categoria_servico_id']}}">{{$tipo_servico['tcs_nome']}}</a></li>
        @endforeach
    </ul>
</div>
@endsection

{{-- {{dd($servicos)}} --}}
@endsection
@extends('layouts.base')

@section('titulo', 'Serviços')
@section('descricao', 'Aqui você encontra alguns dos serviços disponíveis ao cidadão')

@section('content')
<header class="page-header">
    <h1 class="page-title"><span>Visão Geral</span></h1>
</header>

<div class="article-container">
    <span>Aqui você encontra alguns dos serviços disponíveis ao cidadão.</span>

    @foreach ($servicos as $servico)
    <div class="media media-thumb">
        <div class="media-body" style="border-bottom: 1px solid transparent">
            <h6><a href="/servicos/{{$servico['tipo_categoria_servico_id']}}"><i class="{{$servico['tcs_icone']}}"></i>
                {{$servico['tcs_nome']}}</a></h6>
            <p>{{$servico['tcs_descricao']}}</p>
        </div>
    </div>
    @endforeach
</div>

{{-- {{dd($servicos)}} --}}
@endsection

@section('secondary')
<div class="content-sep sidebar-left hide-mobile">
    <h6 style="padding-left: 18px">Serviços</h6>
    
    <ul class="nav nav-menu">
        @foreach ($servicos as $servico)    
            <li><a href="/servicos/{{$servico['tipo_categoria_servico_id']}}">{{$servico['tcs_nome']}}</a></li>
        @endforeach
    </ul>
</div>
@endsection
@extends('layouts.painel')

@section('content')
    <solicitacao-cadastro :tipo-servicos='{{json_encode($tipo_servicos)}}' :servicos='{{json_encode($servicos)}}'></solicitacao-cadastro>
@endsection

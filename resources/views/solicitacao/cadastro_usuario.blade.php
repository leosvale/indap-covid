@extends('layouts.esic')

@section('content')
    <solicitacao-usuario-cadastro :tipo-servicos='{{json_encode($tipo_servicos)}}' :servicos='{{json_encode($servicos)}}' ></solicitacao-usuario-cadastro>
@endsection

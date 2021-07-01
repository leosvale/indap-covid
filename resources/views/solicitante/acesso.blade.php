@extends('layouts.esic')

@section('content')
    <solicitante-acesso nome_entidade='{{ session('configuracao.nome') }}'></solicitante-acesso>

@endsection

@extends('layouts.esic')

@section('content')
    <div class="container">
        <div class="page-header">
            <h1>Confirmação de Cadastro</h1>
        </div>

        <p>Seu cadastro foi confirmado com sucesso.</p>
        <p><a href="{{ url('esic/acesso') }}">Clique aqui</a> para ir para a tela de login e acessar o portal.</p>
    </div>
@endsection
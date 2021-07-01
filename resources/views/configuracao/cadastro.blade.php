@extends('layouts.painel')

@section('content')
    @if (Auth::user()->usu_administrador == 'S')
        <configuracao-cadastro></configuracao-cadastro>
    @else
        <configuracao-cadastro-usuario></configuracao-cadastro-usuario>
    @endif
@endsection

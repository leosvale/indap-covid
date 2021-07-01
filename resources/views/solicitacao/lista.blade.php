@extends('layouts.painel')

@section('content')
    <solicitacao-lista @if (isset($esic) && $esic) esic @endif></solicitacao-lista>
@endsection

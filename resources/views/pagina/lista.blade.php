@extends('layouts.painel')

@section('content')
    @if (isset($servico) && $servico)
        <servico-lista></servico-lista>
    @else
        <pagina-lista></pagina-lista>
    @endif
@endsection

@extends('layouts.painel')

@section('content')
    @if (isset($id) && $id)
        <noticia-cadastro resource="{{ $id }}"></noticia-cadastro>
    @else
        <noticia-cadastro></noticia-cadastro>
    @endif
@endsection

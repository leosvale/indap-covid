@extends('layouts.painel')

@section('content')
    @if (isset($id) && $id)
        <documento-cadastro resource="{{ $id }}"></documento-cadastro>
    @else
        <documento-cadastro></documento-cadastro>
    @endif
@endsection

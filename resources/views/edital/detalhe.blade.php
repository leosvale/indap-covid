@extends('layouts.painel')

@section('content')
        <edital-detalhe :resource= "{{ $edital }}"></edital-detalhe>
@endsection

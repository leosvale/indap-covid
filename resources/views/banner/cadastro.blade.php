@extends('layouts.painel')

@section('content')

    @if ($banner != null)
        <banner-cadastro :resource= "{{ $banner }}"></banner-cadastro>
    @else
        <banner-cadastro></banner-cadastro>
    @endif
@endsection

@extends('layouts.painel')

@section('content')
    @if (isset($accordion) && $accordion)
        @if (isset($id) && $id)
            <pagina-accordion resource="{{ $id }}"></pagina-accordion>
        @else
            <pagina-accordion></pagina-accordion>
        @endif
    @elseif (isset($redirect) && $redirect)
        @if (isset($id) && $id)
            <pagina-redirect resource="{{ $id }}"></pagina-redirect>
        @else
            <pagina-redirect></pagina-redirect>
        @endif
    @elseif (isset($servico) && $servico)
        @if (isset($id) && $id)
            <servico-cadastro resource="{{ $id }}"></servico-cadastro>
        @else
            <servico-cadastro></servico-cadastro>
        @endif
    @else
        @if (isset($id) && $id)
            <pagina-cadastro resource="{{ $id }}"></pagina-cadastro>
        @else
            <pagina-cadastro></pagina-cadastro>
        @endif
    @endif
@endsection

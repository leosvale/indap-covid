@extends('layouts.base')

@section('secondary')
<!-- <aside id="dc_jqaccordion_widget-4" class="widget  clearfix">
    <div class="dcjq-accordion" id="dc_jqaccordion_widget-4-item">
        <ul id="menu-menu_rapido" class="menu">
            @php
                $count = 0;
            @endphp
            @foreach ($menu_lateral as $categoria => $paginas)
                @if ($categoria != '')
                    @php
                        $count++;
                    @endphp
                    <li id="menu-item-347" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-347 dcjq-parent-li">
                        <a class="dcjq-parent">{{$categoria}}<span class="dcjq-icon"></span></a>
                        <ul class="sub-menu" style="display: none;">
                            @foreach ($paginas as $pagina)
                                <li id="menu-item-559" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-559">
                                    <a 
                                        @if ($pagina['pub_url'])
                                            href="{{ $pagina['pub_url'] }}"
                                        @else
                                            href="{{ url('/pagina/'.$pagina['publicacao_id']) }}"
                                        @endif
                                    >
                                        {{ $pagina['pub_titulo'] }}
                                    </a>
                                </li>
                            @endforeach
                        </ul>
                    </li>
                @else 
                    @foreach ($paginas as $pagina)
                        <li id="menu-item-559" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-559">
                            <a 
                                @if ($pagina['pub_url'])
                                    href="{{ $pagina['pub_url'] }}"
                                @else
                                    href="{{ url('/pagina/'.$pagina['publicacao_id']) }}"
                                @endif
                            >
                                {{ $pagina['pub_titulo'] }}
                            </a>
                        </li>
                    @endforeach  
                @endif
            @endforeach
        </ul>
    </div>
</aside>
<aside id="custom_html-2" class="widget_text widget widget_custom_html clearfix">
    <div class="textwidget custom-html-widget banners">
        <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
        ">
            {!! $configuracao['banners'] !!}
        </div>
    </div>
</aside> -->
@endsection
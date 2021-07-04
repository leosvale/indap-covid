@extends('layouts.base')

@section('content')

    <!--================Worldwide Tracker Area =================-->
    <section class="world_wide_tracker pad_top">
      <div class="container">
        <img class="tracker_map" src="themes/epidemic-placeholder/assets/images/tracker-map-bg.png" alt="" />
        <div class="tracker_text">
          <h5>Covid-19</h5>
          <h2>Vacinômetro</h2>
          <!-- <p>Última atualização: April 08, 2020, 01:43 GMT</p> -->
        </div>
        <div class="row tracker_inner">
          <div class="col-lg-3 col-6 wow fadeIn" data-wow-delay="300">
            <div class="media">
              <div class="d-flex">
                <img height="80" width="80" src="themes/epidemic-placeholder/assets/images/icon/syringe_full.png" alt="" />
              </div>
              <div class="media-body">
                <h2>{{ $vacinometro['doses_recebidas']->valor }}</h2>
                <p>Doses Recebidas</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-6 wow fadeIn" data-wow-delay="400">
            <div class="media">
              <div class="d-flex">
                <img height="80" width="80" src="themes/epidemic-placeholder/assets/images/icon/syringe_empty.png" alt="" />
              </div>
              <div class="media-body">
                <h2>{{ $vacinometro['doses_aplicadas']->valor }}</h2>
                <p>Doses Aplicadas</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-6 wow fadeIn" data-wow-delay="500">
            <div class="media">
              <div class="d-flex">
                <img height="80" width="80" src="themes/epidemic-placeholder/assets/images/icon/syringe_full.png" alt="" />
              </div>
              <div class="media-body">
                <h2>{{ $vacinometro['primeira_dose']->valor }}</h2>
                <p>1˚ Dose</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-6 wow fadeIn" data-wow-delay="600">
            <div class="media">
              <div class="d-flex">
                <img height="80" width="80" src="themes/epidemic-placeholder/assets/images/icon/syringe_empty.png" alt=""/>
              </div>
              <div class="media-body">
                <h2>{{ $vacinometro['segunda_dose']->valor }}</h2>
                <p>2˚ Dose</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tracker_btn">
          <!-- <a class="green_btn wow fadeInUp" data-wow-delay="500" href="#"><i class="linearicons-earth-lock"></i> See
            Live
            Track</a> -->
        </div>
      </div>
    </section>
    <!--================End Worldwide Tracker Area =================-->

    <!--================Home Latest Blog Area =================-->
    <section class="home_latest_blog_area">

      @if (!empty($destaques))



            
        @php
            $destaque = $destaques[0];
            $destaque_img = ($destaque['anexo'] ? get_image_large_url($destaque['anexo']['ane_arquivo']) : '');
            $destaque_img = $destaque_img ?: 'http://placehold.it/300.jpg?text=%20';
            $destaque_txt = (empty($destaque['pub_resumo']) ? $destaque['pub_conteudo'] : $destaque['pub_resumo']);
        @endphp
      <div class="container">
        <div class="main_title text-center">
          <h2>Notícias</h2>
          <p>
            Descubra as atualizações que você precisa saber sobre prevenção, isolamento e
             tratamento do coronavírus.
          </p>
          <a class="text_btn" href="/noticias" style="float: right; font-size: 14px; padding: 12px 0px"><strong>mais notícias</strong></a>
        </div>
        
        <div class="row l_blog_inner">
          <div class="col-lg-8">
            <div class="big_l_blog_item">
              <div class="l_blog_img">
                <img width="770" height="430" src="{{ $destaque_img }}"
                            class="attachment-colormag-featured-post-medium size-colormag-featured-post-medium wp-post-image"
                            alt=""/>
              </div>
              <div class="l_blog_text">
                <div class="date">
                  <a href="{{ url('/noticia/'.$destaque['publicacao_id']) }}"><i class="linearicons-calendar-full"></i> {{ date('d/m/Y', strtotime($destaque['pub_data_visivel'] ? $destaque['pub_data_visivel'] : $destaque['pub_data_cadastro'])) }}</a>
                </div>
                <div class="blog_btm_text">
                  @if(!empty($destaque['categorias']))
                      @foreach (array_column($destaque['categorias'], 'tcp_nome') as $categoria)
                          <div class="tag">{{$categoria}}</div>
                      @endforeach
                  @endif
                  <a href="{{ url('/noticia/'.$destaque['publicacao_id']) }}">
                    <h3>{{ $destaque['pub_titulo'] }}</h3>
                  </a>
                  <a class="text_btn" href="{{ url('/noticia/'.$destaque['publicacao_id']) }}"
                            title="{{ $destaque['pub_titulo'] }}">Leia mais <i class="linearicons-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            @foreach($destaques as $destaque)
              @php
                  $destaque_img = ($destaque['anexo'] ? get_image_small_url($destaque['anexo']['ane_arquivo']) : '');
                  $destaque_img = $destaque_img ?: 'http://placehold.it/300.jpg?text=%20';
                  $destaque_txt = (empty($destaque['pub_resumo']) ? $destaque['pub_conteudo'] : $destaque['pub_resumo']);
              @endphp

              @if (!$loop->first)
              <div class="small_l_blog_item">
                <div class="l_blog_img">
                  <!-- <img class="img-fluid" src="themes/epidemic-placeholder/assets/images/blog/latest-blog/l-blog-2.jpg" alt="" /> -->
                  <img width="370" height="200" src="{{ $destaque_img }}" alt="{{ $destaque['pub_titulo'] }}" class="attachment-colormag-featured-post-medium size-colormag-featured-post-medium wp-post-image"
                            alt="" />
                </div>
                <div class="l_blog_text">
                  <div class="date">
                    <a href="{{ url('/noticia/'.$destaque['publicacao_id']) }}"><i class="linearicons-calendar-full"></i>{{ date('d/m/Y', strtotime($destaque['pub_data_visivel'] ? $destaque['pub_data_visivel'] : $destaque['pub_data_cadastro'])) }}</a>
                  </div>
                  <a class="text_btn" href="{{ url('/noticia/'.$destaque['publicacao_id']) }}">{{ $destaque['pub_titulo'] }} <i class="linearicons-arrow-right"></i></a>
                </div>
              </div>
              @endif
            @endforeach
          </div>
        </div>
      </div>
      @endif
    </section>
    <!--================End Home Latest Blog Area =================-->

    <!--================Protect Yourself Area =================-->
    <section class="answers_area p_100">
      <div class="container">
        <div class="main_title text-center">
          <!-- <h5>Licitações e Contratos</h5> -->
          <h2>Licitações e Contratos</h2>
        </div>
        <div class="row answer_inner">
          <div class="col-lg-12">
            <div class="question_list">
              <div class="accordion" id="accordionExample">
                @php
                    $count = 0;
                @endphp
                @foreach($documentos as $key => $documento )
                  @php
                      $count++;
                  @endphp
                <div class="card">
                  <div class="card-header" id="headingDoc{{$count}}">
                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseDoc{{$count}}"
                      aria-expanded="false" aria-controls="collapseDoc{{$count}}">
                      {{ $key }}
                      <i class="linearicons-chevron-down"></i>
                    </button>
                  </div>

                  <div id="collapseDoc{{$count}}" class="collapse" aria-labelledby="headingDoc{{$count}}"
                    data-parent="#accordionExample">
                    <div class="card-body">
                      @if(!empty($documento))
                        <ul class="nav nav-tabs" id="myTabDoc{{$count}}" role="tablist">
                          @foreach($documento as $contrato)
                          <li class="nav-item">
                            <a class="nav-link" id="homeDoc{{$count}}-tab" data-toggle="modal" href="#" data-target="#modal{{ $contrato[0]['documento_id'] }}">
                                {{ $contrato[0]['doc_numero_processo'] }}
                            </a>
                          </li>
                          <!-- Modal -->
                          <form method="get" action="{{ url('licitacoes/baixar/'.$contrato[0]['documento_id'] ) }}" target="_blank">
                            <div class="modal fade" id="modal{{ $contrato[0]['documento_id'] }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Detalhes</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <!--================ Modal Body =================-->
                                  <div class="modal-body">
                                    <ul class="list-unstyled">
                                      @if(isset($contrato[0]['descricao']))
                                        <h3 class="text_btn">Descricão:
                                          <a class="btn btn-link">{{ $contrato[0]['descricao'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['orgao']))
                                        <h3 class="text_btn">Orgão:
                                          <a class="btn btn-link">{{ $contrato[0]['orgao'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['numero_licitacao']))
                                        <h3 class="text_btn">Número Licitação:
                                          <a class="btn btn-link">{{ $contrato[0]['numero_licitacao'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['numero_processo_adm']))
                                        <h3 class="text_btn">Número do Processo Administrativo:
                                          <a class="btn btn-link">{{ $contrato[0]['numero_processo_adm'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['local_execucao']))
                                        <h3 class="text_btn">Local Execução:
                                          <a class="btn btn-link">{{ $contrato[0]['local_execucao'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['numero_edital']))
                                        <h3 class="text_btn">Número Edital:
                                          <a class="btn btn-link">{{ $contrato[0]['numero_edital'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['data_certame']))
                                        <h3 class="text_btn">Data Certame:
                                          <a class="btn btn-link">
                                            {{ date('d/m/Y', strtotime($contrato[0]['data_certame'])) }}
                                          </a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['local_certame']))
                                        <h3 class="text_btn">Local Certame:
                                          <a class="btn btn-link">{{ $contrato[0]['local_certame'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['objeto']))
                                        <h3 class="text_btn">Objeto:
                                          <a class="btn btn-link">{{ $contrato[0]['objeto'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['inicio_vigencia']))
                                        <h3 class="text_btn">Início Vigência:</a>
                                          <a class="btn btn-link">
                                            {{ date('d/m/Y', strtotime($contrato[0]['inicio_vigencia'])) }}
                                          </a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['final_vigencia']))
                                        <h3 class="text_btn">Final Vigência:
                                          <a class="btn btn-link">
                                            {{ date('d/m/Y', strtotime($contrato[0]['final_vigencia'])) }}
                                          </a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['publicacao']))
                                        <h3 class="text_btn">Publicação:
                                          <a class="btn btn-link">
                                            {{ date('d/m/Y', strtotime($contrato[0]['publicacao'])) }}
                                          </a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['previsao_orcamentaria']))
                                        <h3 class="text_btn">Previsão Orçamentária:
                                          <a class="btn btn-link">{{ $contrato[0]['previsao_orcamentaria'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['relacionado_covid']))
                                        <h3 class="text_btn">Relacionado ao Covid?
                                          @if($contrato[0]['relacionado_covid'])
                                            <a class="btn btn-link">Sim</a>
                                          @else
                                            <a class="btn btn-link">Não</a>
                                          @endif
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['cpf_cnpj']))
                                        <h3 class="text_btn">CPF/CNPJ:
                                          <a class="btn btn-link">{{ $contrato[0]['cpf_cnpj'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['numero_contrato']))
                                        <h3 class="text_btn">Número Contrato:
                                          <a class="btn btn-link">{{ $contrato[0]['numero_contrato'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['numero_processo_licitatorio']))
                                        <h3 class="text_btn">Número Processo Licitatório:
                                          <a class="btn btn-link">{{ $contrato[0]['numero_processo_licitatorio'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['valor']))
                                        <h3 class="text_btn">Valor:
                                          <a class="btn btn-link">{{ $contrato[0]['valor'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['data_assinatura']))
                                        <h3 class="text_btn">Data Assinatura:
                                          <a class="btn btn-link">
                                            {{ date('d/m/Y', strtotime($contrato[0]['data_assinatura'])) }}
                                          </a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['fundamento_legal']))
                                        <h3 class="text_btn">Fundamento Legal:
                                          <a class="btn btn-link">{{ $contrato[0]['fundamento_legal'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['numero_dispensa']))
                                        <h3 class="text_btn">Número Dispensa:
                                          <a class="btn btn-link">{{ $contrato[0]['numero_dispensa'] }}</a>
                                        </h3>
                                      @endif
                                      @if(isset($contrato[0]['possui_aditivo']))
                                        <h3 class="text_btn">Possui aditivo?
                                          @if($contrato[0]['possui_aditivo'])
                                            <a class="btn btn-link">Sim</a>
                                          @else
                                            <a class="btn btn-link">Não</a>
                                          @endif
                                        </h3>
                                      @endif
                                    </ul>
                                    <ul class="list-unstyled">
                                      <h5 class="modal-title">Anexos</h5>
                                      @foreach($contrato as $anexo)
                                      <h3>
                                          @php $id2 = $anexo['anexo_id']; @endphp
                                          <a class="text_btn" role="button" data-toggle="collapse" href="#anexo-{{ $id2 }}" aria-expanded="false" aria-controls="anexo-{{ $id2 }}">
                                              {{ date('d/m/Y', strtotime($anexo['dan_data_documento'])) }} - {{ $categorias[$anexo['tipo_categoria_processo_id']] }}<i class="fas fa-angle-down rotate-icon"></i>
                                          </a>
                                          <div class="collapse category-content" id="anexo-{{ $id2 }}">
                                            <a class="btn btn-link" href="{{ url('processo/anexo/'.$anexo['anexo_id']) }}" target="_blank">
                                              {{ $anexo['ane_nome'] }}
                                            </a>
                                          </div>
                                      </h3>
                                      @endforeach
                                    </ul>
                                    <ul class="list-unstyled">
                                      <h5>
                                        <a class="modal-title">Formato:</a>
                                        <select id="formato" name="formato" class="form-control">
                                          <option value="1">PDF</option>
                                          <option value="2">CSV</option>
                                          <option value="3">JSON</option>
                                          <option value="4">XML</option>
                                        </select>
                                      </h5>
                                    </ul>
                                  </div>
                                  <!--================ End Modal Body =================-->
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Sair</button>
                                    <button type="submit" class="btn btn-primary">Baixar</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                          @endforeach
                        </ul>
                      @else
                        <ul class="nav nav-tabs" id="myTabDoc{{$count}}" role="tablist">
                          <li class="nav-item">
                            <a class="nav-link" id="profileDoc{{$count}}-tab" data-toggle="tab" href="#" role="tab"
                              aria-controls="profileDoc{{$count}}" aria-selected="false">Sem arquivos</a>
                          </li>
                        </ul>
                      @endif
                    </div>
                  </div>
                </div>
                @endforeach
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Protect Yourself Area =================-->

    <!--================Home Latest Blog Area =================-->
    <section class="home_latest_blog_area">
      @if ($boletins)
      <div class="container">
        <div class="main_title text-center">
          <br>
          <h2>Boletins</h2>
          <p>
            Acompanhe os boletins informativos.
          </p>
          <a class="text_btn" href="/boletins" style="float: right; font-size: 14px; padding: 12px 0px"><strong>mais boletins</strong></a>
        </div>
        
        <div class="row prevent_inner">
          @foreach($boletins as $boletim)

              @php
                  $boletim_img = ($boletim['anexo'] ? get_image_small_url($boletim['anexo']['ane_arquivo']) : '');
                  $boletim_img = $boletim_img ?: 'http://placehold.it/300.jpg?text=%20';
                  $boletim_txt = (empty($boletim['pub_resumo']) ? $boletim['pub_conteudo'] : $boletim['pub_resumo']);
              @endphp

              <div class="col-lg-4">
                <div class="prevent_item_inner row">
                  <div class="l_blog_img">
                    <a href="{{ url('/noticia/'.$boletim['publicacao_id']) }}">
                      <img  width="370" height="200" src="{{ $boletim_img }}" alt="{{ $boletim['pub_titulo'] }}" class="attachment-colormag-featured-post-medium size-colormag-featured-post-medium wp-post-image"
                              alt="" />
                    </a>
                  </div>
                  <div class="prevent_text">
                    <a class="text_btn" href="{{ url('/noticia/'.$boletim['publicacao_id']) }}">
                      <h4>{{ $boletim['pub_titulo'] }}</h4>
                    </a>
                    <p>
                      {{ date('d/m/Y', strtotime($boletim['pub_data_visivel'] ? $boletim['pub_data_visivel'] : $boletim['pub_data_cadastro'])) }}
                    </p>
                  </div>
                </div>
              </div>
          @endforeach
        </div>
        <br>
      </div>
      @endif
    </section>
    <!--================End Home Latest Blog Area =================-->

    <!--================Washing Process Area =================-->
    <section class="washing_process_area pad_btm">
      <div class="container">
        <div class="text-center maintence_img img-fluid wow fadeInRight">
              @if (isset($configuracao['banner_home_img']) && 
                isset($configuracao['banner_home_url']) && 
                $configuracao['banner_home_img'] &&
                $configuracao['banner_home_url'])  
                <a href="{{ $configuracao['banner_home_url'] }}">
                  <img src="{{ $configuracao['banner_home_img'] }}" width="728" height="90" alt="">
                </a>
              @endif
          </div>
      </div>
    </section>
    <!--================End Washing Process Area =================-->

@endsection
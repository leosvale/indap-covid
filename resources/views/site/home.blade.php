@extends('layouts.base')

@section('content')

    <!--================Worldwide Tracker Area =================-->
    <section class="world_wide_tracker pad_top">
      <div class="container">
        <img class="tracker_map" src="themes/epidemic-placeholder/assets/images/tracker-map-bg.png" alt="" />
        <div class="tracker_text">
          <h5>Covid-19</h5>
          <h2>Vacinômetro</h2>
          <p>Última atualização: April 08, 2020, 01:43 GMT</p>
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
      @if ($destaques)
            
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
        </div>
        <a class="text_btn" href="/noticias" style="float: right; font-size: 14px; padding: 12px 0px"><strong>mais notícias</strong></a>
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
    <section class="protect_yourself_area p_100">
      <div class="container">
        <div class="main_title text-center">
          <!-- <h5>Licitações e Contratos</h5> -->
          <h2>Licitações e Contratos</h2>
        </div>
        <div class="row protect_inner">
          @foreach($documentos as $key => $documento )
          <div class="col-lg-4">
            <div class="question_list">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header" id="headingDocumento{{ $documento[0]->documento_id }}">
                    <button aria-expanded="false" class="btn btn-link collapsed" type="button" data-toggle="collapse"
                      data-target="#collapseDocumento{{ $documento[0]->documento_id }}" aria-controls="collapseDocumento{{ $documento[0]->documento_id }}">
                      {{ $key }}
                      <i class="linearicons-chevron-down"></i>
                    </button>
                  </div>
                  <div id="collapseDocumento{{ $documento[0]->documento_id }}" class="collapse" aria-labelledby="headingDocumento" data-parent="#accordionExample">
                    <div class="card-body">
                      <ul class="nav nav-tabs" id="myTab2" role="tablist">
                        @foreach($documento as $contrato)
                        <li class="nav-item">
                          <a data-toggle="modal" data-target="#modal{{ $contrato->documento_id }}"  class="nav-link" id="home2-tab" data-toggle="tab" href="#home2" role="tab"
                            aria-controls="home2" aria-selected="true">{{ $contrato->doc_numero_processo }}</a>
                        </li>
                        <form method="get" action="{{ url('licitacoes/baixar/'.$contrato->documento_id ) }}" target="_blank">

                          <!-- Modal -->
                            <div class="modal fade" id="modal{{ $contrato->documento_id }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Detalhes</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    <ul class="list-unstyled">
                                    @if(isset($contrato['descricao']))
                                      
                                        <h3 class="text_btn">Descricão:
                                          <a class="btn btn-link">{{ $contrato['descricao'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['orgao']))
                                        <h3 class="text_btn">Orgão:
                                          <a class="btn btn-link">{{ $contrato['orgao'] }}</a>
                                        </h3>
                                    @endif
                                    @if(isset($contrato['numero_licitacao']))
                                      
                                        <h3 class="text_btn">Número Licitação:
                                          <a class="btn btn-link">{{ $contrato['numero_licitacao'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['numero_processo_adm']))
                                      
                                        <h3 class="text_btn">Número do Processo Administrativo:
                                          <a class="btn btn-link">{{ $contrato['numero_processo_adm'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['local_execucao']))
                                      
                                        <h3 class="text_btn">Local Execução:
                                          <a class="btn btn-link">{{ $contrato['local_execucao'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['numero_edital']))
                                      
                                        <h3 class="text_btn">Número Edital:
                                          <a class="btn btn-link">{{ $contrato['numero_edital'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['data_certame']))
                                      
                                        <h3 class="text_btn">Data Certame:
                                          <a class="btn btn-link">
                                            {{ date('d/m/Y', strtotime($contrato['data_certame'])) }}
                                          </a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['local_certame']))
                                      
                                        <h3 class="text_btn">Local Certame:
                                          <a class="btn btn-link">{{ $contrato['local_certame'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['objeto']))
                                      
                                        <h3 class="text_btn">Objeto:
                                          <a class="btn btn-link">{{ $contrato['objeto'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['inicio_vigencia']))
                                      
                                        <h3 class="text_btn">Início Vigência:</a>
                                          <a class="btn btn-link">
                                            {{ date('d/m/Y', strtotime($contrato['inicio_vigencia'])) }}
                                          </a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['final_vigencia']))
                                      
                                        <h3 class="text_btn">Final Vigência:
                                          <a class="btn btn-link">
                                            {{ date('d/m/Y', strtotime($contrato['final_vigencia'])) }}
                                          </a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['publicacao']))
                                    
                                        <h3 class="text_btn">Publicação:
                                          <a class="btn btn-link">
                                            {{ date('d/m/Y', strtotime($contrato['publicacao'])) }}
                                          </a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['previsao_orcamentaria']))
                                      
                                        <h3 class="text_btn">Previsão Orçamentária:
                                          <a class="btn btn-link">{{ $contrato['previsao_orcamentaria'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['relacionado_covid']))
                                      
                                        <h3 class="text_btn">Relacionado ao Covid?
                                          @if($contrato['relacionado_covid'])
                                            <a class="btn btn-link">Sim</a>
                                          @else
                                            <a class="btn btn-link">Não</a>
                                          @endif
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['cpf_cnpj']))
                                      
                                        <h3 class="text_btn">CPF/CNPJ:
                                          <a class="btn btn-link">{{ $contrato['cpf_cnpj'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['numero_contrato']))
                                      
                                        <h3 class="text_btn">Número Contrato:
                                          <a class="btn btn-link">{{ $contrato['numero_contrato'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['numero_processo_licitatorio']))
                                      
                                        <h3 class="text_btn">Número Processo Licitatório:
                                          <a class="btn btn-link">{{ $contrato['numero_processo_licitatorio'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['valor']))
                                      
                                        <h3 class="text_btn">Valor:
                                          <a class="btn btn-link">{{ $contrato['valor'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['data_assinatura']))
                                      
                                        <h3 class="text_btn">Data Assinatura:
                                          <a class="btn btn-link">
                                            {{ date('d/m/Y', strtotime($contrato['data_assinatura'])) }}
                                          </a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['fundamento_legal']))
                                      
                                        <h3 class="text_btn">Fundamento Legal:
                                          <a class="btn btn-link">{{ $contrato['fundamento_legal'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['numero_dispensa']))
                                      
                                        <h3 class="text_btn">Número Dispensa:
                                          <a class="btn btn-link">{{ $contrato['numero_dispensa'] }}</a>
                                        </h3>
                                      
                                    @endif
                                    @if(isset($contrato['possui_aditivo']))
                                      
                                        <h3 class="text_btn">Possui aditivo?
                                          @if($contrato['possui_aditivo'])
                                            <a class="btn btn-link">Sim</a>
                                          @else
                                            <a class="btn btn-link">Não</a>
                                          @endif
                                        </h3>
                                    @endif
                                      <h3>
                                          @php $id2 = $contrato['anexo_id']; @endphp
                                          <a class="text_btn" role="button" data-toggle="collapse" href="#contrato-{{ $id2 }}" aria-expanded="false" aria-controls="contrato-{{ $id2 }}">
                                              {{ date('d/m/Y', strtotime($contrato['dan_data_documento'])) }}<i class="fas fa-angle-down rotate-icon"></i>
                                          </a>
                                          <div class="collapse category-content" id="contrato-{{ $id2 }}">
                                            <a class="btn btn-link" href="{{ url('processo/contrato/'.$contrato['contrato_id']) }}" target="_blank">{{ $contrato['ane_nome'] }}</a>
                                          </div>
                                      </h3>
                                    </ul>
                                    <ul class="list-unstyled">
                                      
                                        <h3 class="text_btn">Formato:</h3>
                                        <select id="formato" name="formato" class="form-control">
                                          <option value="1">PDF</option>
                                          <option value="2">CSV</option>
                                          <option value="3">JSON</option>
                                          <option value="4">XML</option>
                                        </select>
                                      
                                    </ul>
                                  </div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          @endforeach
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
        </div>
        <a class="text_btn" href="/boletins" style="float: right; font-size: 14px; padding: 12px 0px"><strong>mais boletins</strong></a>
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
                    <a href="{{ url('/noticia/'.$boletim['publicacao_id']) }}">
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
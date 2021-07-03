@extends('layouts.site')

@section('content')

    <!--================Breadcrumb Area =================-->
    <section class="breadcrumb_area">
        <div class="container">
            <div class="breadcrumb_text">
                <h3 class="wow fadeInUp" data-wow-delay="0.2s"><span>Licitações e Contratos</span></h3>
            </div>
        </div>
    </section>
    <!--================End Breadcrumb Area =================-->

    <section class="isolation_area isolation_margin_bottom">
      <div class="container">
        <form method="get" action="{{ url('licitacoes') }}">
          <div class="row">
              <div class="col-lg-4">
                  <div class="media isolation_item wow fadeInUp">
                    <div class="media-body">
                      <h5>Tipo de Processo</h5>
                      <select id="filtro-tipo" name="tipo" class="form-control">
                          <option value=""></option>
                          @foreach($tipos_processo as $id => $item)
                              <option value="{{ $id }}" @if($id == $tipo) {{'selected'}} @endif >
                                  {{ $item }}
                              </option>
                          @endforeach
                      </select>
                    </div>
                  </div>
              </div>
              <div class="col-lg-2">
                  <div class="media isolation_item wow fadeInUp">
                    <div class="media-body">
                      <h5 for="filtro-ano">Ano</h5>
                      <select id="filtro-ano" name="ano" class="form-control">
                          @foreach($anos as $item)
                              <option value="{{ $item }}" @if($item == $ano) {{'selected'}} @endif>
                                  {{ $item }}
                              </option>
                          @endforeach
                      </select>
                    </div>
                  </div>
              </div>
              <div class="col-sm-2">
                <div class="media isolation_item wow fadeInUp">
                    <div class="media-body">
                      <div class="form-group">
                          <label>&nbsp;</label>
                          <button type="submit" class="btn btn-block btn-success"><i class="fa fa-search"></i> Buscar</button>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </form>

      @if($documentos)
          <div class="accordion md-accordion" id="accordion" role="tablist" aria-multiselectable="true">
              @foreach($documentos as $mes => $tipos)
                  <div class="card">
                      <div class="card-header" role="tab" id="title-mes-{{ $mes }}">
                          <h3 class="mb-0">
                              <a class="text_btn" role="button" data-toggle="collapse" data-parent="#accordion" href="#mes-{{ $mes }}" aria-expanded="false" aria-controls="mes-{{ $mes }}">
                                  {{ $meses[$mes-1] }} / {{ $ano }}
                                  <i class="fas fa-angle-down rotate-icon"></i>
                              </a>
                          </h3>
                      </div>
                      <div id="mes-{{ $mes }}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="title-mes-{{ $mes }}">

                          @foreach($tipos as $tipo => $processos)
                              <div class="panel panel-default panel-tipo">
                                  <div class="panel-heading" role="tab" id="title-tipo-{{ $mes }}-{{ $tipo }}">
                                      <h4 style="margin-left: 1.5em;" class="mb-0">
                                          <a class="text_btn" role="button" data-toggle="collapse" href="#tipo-{{ $mes }}-{{ $tipo }}" aria-expanded="false" aria-controls="tipo-{{ $mes }}-{{ $tipo }}">
                                              {{ $tipos_processo[$tipo] }}<i class="fas fa-angle-down rotate-icon"></i>
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="tipo-{{ $mes }}-{{ $tipo }}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="title-tipo-{{ $mes }}-{{ $tipo }}">


                                      @foreach($processos as $id => $anexos)
                                          <div class="panel panel-default panel-processo">
                                              <div class="panel-heading" role="tab" id="title-processo-{{ $mes }}-{{ $tipo }}-{{ $id }}">
                                                  <h4 class="panel-title">
                                                      <!-- Button trigger modal -->
                                                    <a style="margin-left: 3.0em;" class="btn btn-link" role="button"  data-toggle="modal" data-target="#modal{{ $anexos[0]['documento_id'] }}">
                                                        {{ $anexos[0]['doc_numero_processo'] }}
                                                    </a>
                                                    <!-- Modal -->
                                                    <form method="get" action="{{ url('licitacoes/baixar/'.$anexos[0]['documento_id'] ) }}" target="_blank">
                                                      <div class="modal fade" id="modal{{ $anexos[0]['documento_id'] }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                                @if(isset($anexos[0]['descricao']))
                                                                  <li>
                                                                    <a class="text_btn">Descricão: </a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['descricao'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['orgao']))
                                                                  <li>
                                                                    <a class="text_btn">Orgão:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['orgao'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['numero_licitacao']))
                                                                  <li>
                                                                    <a class="text_btn">Número Licitação:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['numero_licitacao'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['numero_processo_adm']))
                                                                  <li>
                                                                    <a class="text_btn">Número do Processo Administrativo:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['numero_processo_adm'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['local_execucao']))
                                                                  <li>
                                                                    <a class="text_btn">Local Execução:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['local_execucao'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['numero_edital']))
                                                                  <li>
                                                                    <a class="text_btn">Número Edital:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['numero_edital'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['data_certame']))
                                                                  <li>
                                                                    <a class="text_btn">Data Certame:</a>
                                                                    <a class="btn btn-link">
                                                                      {{ date('d/m/Y', strtotime($anexos[0]['data_certame'])) }}
                                                                    </a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['local_certame']))
                                                                  <li>
                                                                    <a class="text_btn">Local Certame:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['local_certame'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['objeto']))
                                                                  <li>
                                                                    <a class="text_btn">Objeto:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['objeto'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['inicio_vigencia']))
                                                                  <li>
                                                                    <a class="text_btn">Início Vigência:</a>
                                                                    <a class="btn btn-link">
                                                                      {{ date('d/m/Y', strtotime($anexos[0]['inicio_vigencia'])) }}
                                                                  </a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['final_vigencia']))
                                                                  <li>
                                                                    <a class="text_btn">Final Vigência:</a>
                                                                    <a class="btn btn-link">
                                                                      {{ date('d/m/Y', strtotime($anexos[0]['final_vigencia'])) }}
                                                                  </a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['publicacao']))
                                                                  <li>
                                                                    <a class="text_btn">Publicação:</a>
                                                                    <a class="btn btn-link">
                                                                      {{ date('d/m/Y', strtotime($anexos[0]['publicacao'])) }}
                                                                  </a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['previsao_orcamentaria']))
                                                                  <li>
                                                                    <a class="text_btn">Previsão Orçamentária:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['previsao_orcamentaria'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['relacionado_covid']))
                                                                  <li>
                                                                    <a class="text_btn">Relacionado ao Covid?</a>
                                                                    @if($anexos[0]['relacionado_covid'])
                                                                      <a class="btn btn-link">Sim</a>
                                                                    @else
                                                                      <a class="btn btn-link">Não</a>
                                                                    @endif
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['cpf_cnpj']))
                                                                  <li>
                                                                    <a class="text_btn">CPF/CNPJ:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['cpf_cnpj'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['numero_contrato']))
                                                                  <li>
                                                                    <a class="text_btn">Número Contrato:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['numero_contrato'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['numero_processo_licitatorio']))
                                                                  <li>
                                                                    <a class="text_btn">Número Processo Licitatório:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['numero_processo_licitatorio'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['valor']))
                                                                  <li>
                                                                    <a class="text_btn">Valor:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['valor'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['data_assinatura']))
                                                                  <li>
                                                                    <a class="text_btn">Data Assinatura:</a>
                                                                    <a class="btn btn-link">
                                                                      {{ date('d/m/Y', strtotime($anexos[0]['data_assinatura'])) }}
                                                                    </a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['fundamento_legal']))
                                                                  <li>
                                                                    <a class="text_btn">Fundamento Legal:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['fundamento_legal'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['numero_dispensa']))
                                                                  <li>
                                                                    <a class="text_btn">Número Dispensa:</a>
                                                                    <a class="btn btn-link">{{ $anexos[0]['numero_dispensa'] }}</a>
                                                                  </li>
                                                                @endif
                                                                @if(isset($anexos[0]['possui_aditivo']))
                                                                  <li>
                                                                    <a class="text_btn">Possui aditivo?</a>
                                                                    @if($anexos[0]['possui_aditivo'])
                                                                      <a class="btn btn-link">Sim</a>
                                                                    @else
                                                                      <a class="btn btn-link">Não</a>
                                                                    @endif
                                                                  </li>
                                                                @endif
                                                              </ul>
                                                              <ul class="list-unstyled">
                                                                <label>Anexos</label>
                                                                @foreach($anexos as $anexo)
                                                                <li>
                                                                    @php $id2 = $anexo['anexo_id']; @endphp
                                                                    <a class="text_btn" role="button" data-toggle="collapse" href="#anexo-{{ $id2 }}" aria-expanded="false" aria-controls="anexo-{{ $id2 }}">
                                                                        {{ date('d/m/Y', strtotime($anexo['dan_data_documento'])) }} - {{ $categorias[$anexo['tipo_categoria_processo_id']] }}<i class="fas fa-angle-down rotate-icon"></i>
                                                                    </a>
                                                                    <div class="collapse category-content" id="anexo-{{ $id2 }}">
                                                                        <p>
                                                                          <i class="far fa-file-alt fa-sm"></i> <a class="btn btn-link" href="{{ url('processo/anexo/'.$anexo['anexo_id']) }}" target="_blank">{{ $anexo['ane_nome'] }}</a>
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                                @endforeach
                                                              </ul>
                                                              <ul class="list-unstyled">
                                                                <li>
                                                                  <a class="text_btn">Formato:</a>
                                                                  <select id="formato" name="formato" class="form-control">
                                                                    <option value="1">PDF</option>
                                                                    <option value="2">CSV</option>
                                                                    <option value="3">JSON</option>
                                                                    <option value="4">XML</option>
                                                                  </select>
                                                                </li>
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
                                                  </h4>
                                              </div>
                                          </div>
                                      @endforeach
                                  </div>
                              </div>
                          @endforeach

                      </div>
                  </div>
              @endforeach
          </div>
      </div>
    @else
        <p>Nenhum processo cadastrado nesse ano.</p>
    @endif
    </section>
@endsection

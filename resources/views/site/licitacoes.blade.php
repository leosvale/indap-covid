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
                                                                @foreach($anexos as $anexo)
                                                                  @if(isset($anexo['descricao']))
                                                                    <li>
                                                                      <a class="text_btn">Descricão: </a>
                                                                      <a class="btn btn-link">{{ $anexo['descricao'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['orgao']))
                                                                    <li>
                                                                      <a class="text_btn">Orgão:</a>
                                                                      <a class="btn btn-link">{{ $anexo['orgao'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['numero_licitacao']))
                                                                    <li>
                                                                      <a class="text_btn">Número Licitação:</a>
                                                                      <a class="btn btn-link">{{ $anexo['numero_licitacao'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['numero_processo_adm']))
                                                                    <li>
                                                                      <a class="text_btn">Número do Processo Administrativo:</a>
                                                                      <a class="btn btn-link">{{ $anexo['numero_processo_adm'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['local_execucao']))
                                                                    <li>
                                                                      <a class="text_btn">Local Execução:</a>
                                                                      <a class="btn btn-link">{{ $anexo['local_execucao'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['numero_edital']))
                                                                    <li>
                                                                      <a class="text_btn">Número Edital:</a>
                                                                      <a class="btn btn-link">{{ $anexo['numero_edital'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['data_certame']))
                                                                    <li>
                                                                      <a class="text_btn">Data Certame:</a>
                                                                      <a class="btn btn-link">
                                                                        {{ date('d/m/Y', strtotime($anexo['data_certame'])) }}
                                                                      </a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['local_certame']))
                                                                    <li>
                                                                      <a class="text_btn">Local Certame:</a>
                                                                      <a class="btn btn-link">{{ $anexo['local_certame'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['objeto']))
                                                                    <li>
                                                                      <a class="text_btn">Objeto:</a>
                                                                      <a class="btn btn-link">{{ $anexo['objeto'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['inicio_vigencia']))
                                                                    <li>
                                                                      <a class="text_btn">Início Vigência:</a>
                                                                      <a class="btn btn-link">
                                                                        {{ date('d/m/Y', strtotime($anexo['inicio_vigencia'])) }}
                                                                    </a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['final_vigencia']))
                                                                    <li>
                                                                      <a class="text_btn">Final Vigência:</a>
                                                                      <a class="btn btn-link">
                                                                        {{ date('d/m/Y', strtotime($anexo['final_vigencia'])) }}
                                                                    </a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['publicacao']))
                                                                    <li>
                                                                      <a class="text_btn">Publicação:</a>
                                                                      <a class="btn btn-link">
                                                                        {{ date('d/m/Y', strtotime($anexo['publicacao'])) }}
                                                                    </a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['previsao_orcamentaria']))
                                                                    <li>
                                                                      <a class="text_btn">Previsão Orçamentária:</a>
                                                                      <a class="btn btn-link">{{ $anexo['previsao_orcamentaria'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['relacionado_covid']))
                                                                    <li>
                                                                      <a class="text_btn">Relacionado ao Covid?</a>
                                                                      @if($anexo['relacionado_covid'])
                                                                        <a class="btn btn-link">Sim</a>
                                                                      @else
                                                                        <a class="btn btn-link">Não</a>
                                                                      @endif
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['cpf_cnpj']))
                                                                    <li>
                                                                      <a class="text_btn">CPF/CNPJ:</a>
                                                                      <a class="btn btn-link">{{ $anexo['cpf_cnpj'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['numero_contrato']))
                                                                    <li>
                                                                      <a class="text_btn">Número Contrato:</a>
                                                                      <a class="btn btn-link">{{ $anexo['numero_contrato'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['numero_processo_licitatorio']))
                                                                    <li>
                                                                      <a class="text_btn">Número Processo Licitatório:</a>
                                                                      <a class="btn btn-link">{{ $anexo['numero_processo_licitatorio'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['valor']))
                                                                    <li>
                                                                      <a class="text_btn">Valor:</a>
                                                                      <a class="btn btn-link">{{ $anexo['valor'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['data_assinatura']))
                                                                    <li>
                                                                      <a class="text_btn">Data Assinatura:</a>
                                                                      <a class="btn btn-link">
                                                                        {{ date('d/m/Y', strtotime($anexo['data_assinatura'])) }}
                                                                      </a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['fundamento_legal']))
                                                                    <li>
                                                                      <a class="text_btn">Fundamento Legal:</a>
                                                                      <a class="btn btn-link">{{ $anexo['fundamento_legal'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['numero_dispensa']))
                                                                    <li>
                                                                      <a class="text_btn">Número Dispensa:</a>
                                                                      <a class="btn btn-link">{{ $anexo['numero_dispensa'] }}</a>
                                                                    </li>
                                                                  @endif
                                                                  @if(isset($anexo['possui_aditivo']))
                                                                    <li>
                                                                      <a class="text_btn">Possui aditivo?</a>
                                                                      @if($anexo['possui_aditivo'])
                                                                        <a class="btn btn-link">Sim</a>
                                                                      @else
                                                                        <a class="btn btn-link">Não</a>
                                                                      @endif
                                                                    </li>
                                                                  @endif
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
                                              <div id="processo-{{ $mes }}-{{ $tipo }}-{{ $id }}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="title-processo-{{ $mes }}-{{ $tipo }}-{{ $id }}">
                                                  <ul class="list-unstyled">
                                                      @foreach($anexos as $anexo)
                                                      <li>
                                                          @php $id2 = $anexo['anexo_id']; @endphp
                                                          <a class="category-title collapsed" role="button" data-toggle="collapse" href="#anexo-{{ $id2 }}" aria-expanded="false" aria-controls="anexo-{{ $id2 }}">
                                                              {{ date('d/m/Y', strtotime($anexo['dan_data_documento'])) }} - {{ $categorias[$anexo['tipo_categoria_processo_id']] }}
                                                          </a>
                                                          <div class="collapse category-content" id="anexo-{{ $id2 }}">
                                                              <p>
                                                                @if ($categorias[$anexo['tipo_categoria_processo_id']] == 'Edital')

                                                                  <!-- Button trigger modal -->
                                                                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#{{$anexo['anexo_id']}}">
                                                                  BAIXAR
                                                                  </button>
                                                                  <!-- Modal -->
                                                                  <form method="get" action="{{ url('licitacoes/'.$tipo.'/'.$mes.'/'.$ano.'/'
                                                                  .$anexo['anexo_id']) }}" target="_blank">
                                                                    <div class="modal fade" id="{{$anexo['anexo_id'] }}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" vertical-align="middle">
                                                                      <div class="modal-dialog" role="document">
                                                                        <div class="modal-content">
                                                                          <div class="modal-header">
                                                                              <div>
                                                                                  <h2 class="modal-title" id="exampleModalLabel">Informe seus dados</h2>
                                                                                  <h5 class="modal-title">É necessário o preenchimento dos dados abaixo para o download do arquivo desejado.</h5>
                                                                              </div>
                                                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                              <span aria-hidden="true">&times;</span>
                                                                            </button>
                                                                          </div>
                                                                          <div class="modal-body">
                                                                            <label for="inputNome">Nome</label>
                                                                            <input class="form-control" type="text" id="inputNome" name="nome"  required="" placeholder="Digite seu nome"
                                                                             oninvalid="this.setCustomValidity('Por favor digite seu nome.')"
                                                                             oninput="setCustomValidity('')">
                                                                            </input>
                                                                            <label for="inputEmail">Email</label>
                                                                            <input class="form-control" type="email" id="inputEmail" name="email"  required="" placeholder="Digite seu email"
                                                                             oninvalid="this.setCustomValidity('Por favor entre um email válido')"
                                                                             oninput="setCustomValidity('')">
                                                                            </input>
                                                                            <div id="form-ouvidoria" enctype="multipart/form-data" accept-charset="UTF-8">
                                                                                <div class="row hide-if-secret">
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group">
                                                                                            <label for="ctt_cpf_cnpj">CPF ou CNPJ</label>
                                                                                            <input class="form-control" type="text" id="ctt_cpf_cnpj" name="ctt_cpf_cnpj"  required="" placeholder="Digite seu cpf"
                                                                                             oninvalid="this.setCustomValidity('Por favor digite um CPF válido')"
                                                                                             oninput="setCustomValidity('')">
                                                                                            </input>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-md-6">
                                                                                        <div class="form-group">
                                                                                            <label for="ctt_telefone">Telefone</label>
                                                                                            <input class="form-control" type="text" id="ctt_telefone" name="ctt_telefone"  required="" placeholder="Digite seu telefone"
                                                                                             oninvalid="this.setCustomValidity('Por favor entre um número de telefone válido')"
                                                                                             oninput="setCustomValidity('')">
                                                                                            </input>
                                                                                        </div>
                                                                                  </div>
                                                                                </div>
                                                                            </div>
                                                                          </div>
                                                                          <div class="modal-footer">
                                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                                                            <button type="submit" class="btn btn-primary">Enviar</button>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                </form>

                                                                @else
                                                                    <i class="far fa-file-alt fa-fw"></i> <a href="{{ url('processo/anexo/'.$anexo['anexo_id']) }}" target="_blank">{{ $anexo['ane_nome'] }}</a>
                                                                @endif
                                                              </p>
                                                          </div>
                                                      </li>
                                                      @endforeach
                                                  </ul>
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

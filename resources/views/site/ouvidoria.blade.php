@extends('layouts.site')

@section('content')

    <!--================Breadcrumb Area =================-->
    <section class="breadcrumb_area">
        <div class="container">
            <div class="breadcrumb_text">
                <h3 class="wow fadeInUp" data-wow-delay="0.2s">Ouvidoria</h3>
            </div>
        </div>
    </section>
    <!--================End Breadcrumb Area =================-->

    <!--================ Isolation Area =================-->
    <section class="isolation_area isolation_margin_bottom">
        <div class="container">
            <div id="alert-ouvidoria" class="alert alert-success" role="alert" style="display:none;">
                <h4>Sua mensagem foi enviada com sucesso!</h4>
                Caso sua mensagem não seja <strong>sigilosa</strong> retornaremos o seu contato o mais breve possível.
                <p>Seu número de protocolo é:  <span id="numeroProtocolo"></span></p>
            </div>

            <form id="form-ouvidoria" enctype="multipart/form-data" role="form" accept-charset="UTF-8">
                <div class="row">
                    <div class="col-md-6">
                        <div class="media isolation_item wow fadeInUp">
                            <div class="media-body">
                                <h5 for="tipo_contato_id">Tipo de Mensagem</h5>
                                <select id="tipo_contato_id" name="tipo_contato_id" class="form-control">
                                    <option value="" disabled selected></option>
                                    @foreach($tipos as $item)
                                        <option value="{{ $item->tipo_contato_id }}">{{ $item->tco_nome }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="media isolation_item wow fadeInUp">
                            <div class="media-body">
                                <h5>&nbsp;</h5>
                                <div class="checkbox" style="margin-top: 5px">
                                    <h5 for="ctt_sigiloso">
                                        <input type="checkbox" id="ctt_sigiloso" name="ctt_sigiloso" value="1">
                                        <span>Desejo enviar uma mensagem sigilosa.</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row hide-if-secret">
                    <div class="col-md-8">
                        <div class="media isolation_item wow fadeInUp">
                            <div class="media-body">
                                <h5 for="ctt_nome">Nome</h5>
                                <input type="text" id="ctt_nome" name="ctt_nome" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="media isolation_item wow fadeInUp">
                            <div class="media-body">
                                <h5 for="ctt_cpf_cnpj">CPF/CNPJ</h5>
                                <input type="text" id="ctt_cpf_cnpj" name="ctt_cpf_cnpj" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-group hide-if-secret">
                    <div class="media isolation_item wow fadeInUp">
                        <div class="media-body">
                            <h5 for="ctt_endereco">Endereço</h5>
                            <input type="text" id="ctt_endereco" name="ctt_endereco" class="form-control">
                        </div>
                    </div>
                </div>

                <div class="row hide-if-secret">
                    <div class="col-md-6">
                        <div class="media isolation_item wow fadeInUp">
                            <div class="media-body">
                                <h5 for="ctt_telefone">Telefone</h5>
                                <input type="tel" id="ctt_telefone" name="ctt_telefone" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="media isolation_item wow fadeInUp">
                            <div class="media-body">
                                <h5 for="ctt_email">E-mail</h5>
                                <input type="email" id="ctt_email" name="ctt_email" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="media isolation_item wow fadeInUp">
                    <div class="media-body">
                        <h5 for="ctt_mensagem">Mensagem *</h5>
                        <textarea id="ctt_mensagem" name="ctt_mensagem" class="form-control" rows="5"></textarea>
                    </div>
                </div>

                <div class="media isolation_item wow fadeInUp">
                    <div class="media-body">
                        <h5 for="ctt_anexo">Anexar arquivos (máximo de 3 arquivos)</h5>
                        <input type="file" id="ctt_anexo" name="ctt_anexo" class="form-control">
                    </div>
                </div>

                <div class="form-group anexo_2" style="display:none;">
                    <input type="file" id="ctt_anexo_2" name="ctt_anexo_2" class="form-control">
                </div>

                <div class="form-group anexo_3" style="display:none">
                    <input type="file" id="ctt_anexo_3" name="ctt_anexo_3" class="form-control">
                </div>

                <br>

                <div class="form-group">
                    <button type="button" id="btn-add-attachment" class="btn btn-success">Adicionar outro anexo</button>
                </div>

                <div class="alert alert-danger" style="display: none"></div>

                <div class="right">
                    <button type="submit" class="btn btn-success d-block mr-0 ml-auto" ref="submit">Enviar</button>
                </div>
            </form>
        </div>
    </section>
    <!--================ Isolation Area =================-->
@endsection

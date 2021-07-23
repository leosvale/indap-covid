<template>
    <div class="container">
        <div class="page-header">
            <h1 v-if="!resource">Cadastrar Processo</h1>
            <h1 v-if="resource">Atualizar Processo</h1>
        </div>

        <div class="alert alert-success alert-dismissible" role="alert" v-if="showSuccessMsg">
            <button type="button" class="close" data-dismiss="alert" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
            <span>Processo salvo com sucesso.</span>
        </div>

        <div class="panel panel-form">
            <div class="panel-body">
                <form role="form" accept-charset="UTF-8" @submit.prevent="save">
                    <form-control :error="errors.tipo_processo_id">
                        <label for="tipo_processo_id">Tipo de Processo</label>
                        <select id="tipo_processo_id" class="form-control" v-model="documento.tipo_processo_id">
                            <option value=""></option>
                            <template v-for="item in tipos">
                                <option :value="item.tipo_processo_id">{{ item.tpr_nome }}</option>
                            </template>
                        </select>
                    </form-control>
                    
                    <form-control :error="errors.doc_numero_processo">
                        <label for="doc_numero_processo">Número do Processo</label>
                        <input type="text" id="doc_numero_processo" class="form-control" v-model="documento.doc_numero_processo">
                    </form-control>

                    <div class="row" v-for="(item, index) in anexos">
                        <div class="col-sm-3">
                            <form-control :error="errors['dan_data_documento_'+(index+1)]">
                                <label :for="'dan_data_documento_'+(index+1)">Data</label>
                                <input type="date" :id="'dan_data_documento_'+(index+1)" class="form-control" v-model="item.dan_data_documento">
                            </form-control>
                        </div>
                        <div class="col-sm-3 form-group" v-if="documento.tipo_processo_id != '3' &&
                             documento.tipo_processo_id != '4' &&
                             documento.tipo_processo_id != '5' &&
                             documento.tipo_processo_id != '6' ">
                            <form-control :error="errors['tipo_categoria_processo_id_'+(index+1)]">
                                <label :for="'tipo_categoria_processo_id_'+(index+1)">Categoria do Processo</label>
                                <select :id="'tipo_categoria_processo_id_'+(index+1)" class="form-control" v-model="item.tipo_categoria_processo_id">
                                    <option value=""></option>
                                    <template v-for="subitem in categorias">
                                        <option :value="subitem.tipo_categoria_processo_id">{{ subitem.tcp_nome }}</option>
                                    </template>
                                </select>
                            </form-control>
                        </div>
                        <div class="col-sm-6">
                            <div class="row">
                                <div class="col-xs-10">
                                    <form-control v-if="!item.anexo_id" :error="errors['doc_arquivo_'+(index+1)]">
                                        <label :for="'doc_arquivo_'+(index+1)">Arquivo</label>
                                        <input type="file" :id="'doc_arquivo_'+(index+1)" class="form-control" @change="onFileChange(item, $event)">
                                    </form-control>
                                    <div class="form-group" v-if="item.anexo_id">
                                        <label>Arquivo</label>
                                        <p class="form-control-static"><a :href="baseUrl('/painel/processo/anexo/' + item.anexo_id)" target="_blank">{{ item.ane_nome }}</a></p>
                                    </div>
                                </div>
                                <div class="col-xs-2">
                                    <div class="form-group" v-show="(!resource && index > 0) || resource">
                                        <label>&nbsp;</label>
                                        <button type="button" class="btn btn-danger" style="display:block;margin-left:auto" @click="removeArquivo(index)"><i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <button type="button" class="btn btn-success" @click="addArquivo">Adicionar outro arquivo</button>
                    </div>

                    <form-control v-if="documento.tipo_processo_id == '3' || documento.tipo_processo_id == '4' ||
                        documento.tipo_processo_id == '5' ||
                        documento.tipo_processo_id == '6' " :error="errors.descricao">
                        <span>Campos Específicos:</span><br>

                        <label for="descricao">Descrição</label>
                        <textarea type="text" id="descricao" class="form-control"v-model="camposEspecificos.descricao"></textarea>
                    </form-control>

                    <div class="form-group" v-if="documento.tipo_processo_id == '1'">
                        <span>Campos Específicos:</span><br>
                        <div class="row">
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="orgao">Órgão</label>
                                    <input type="text" id="orgao" class="form-control" v-model="camposEspecificos.orgao">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="numero_licitacao">Número da Licitação</label>
                                    <input type="text" id="numero_licitacao" class="form-control" v-model="camposEspecificos.numero_licitacao">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="numero_processo_adm">Número do Processo Administrativo</label>
                                    <input type="text" id="numero_processo_adm" class="form-control" v-model="camposEspecificos.numero_processo_adm">
                                </form-control>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="local_execucao">Local de Execução do Contrato</label>
                                    <input type="text" id="local_execucao" class="form-control" v-model="camposEspecificos.local_execucao">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="numero_edital">Número do Edital</label>
                                    <input type="text" id="numero_edital" class="form-control" v-model="camposEspecificos.numero_edital">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="data_certame">Data do Certame</label>
                                    <input type="date" id="data_certame" class="form-control" v-model="camposEspecificos.data_certame">
                                </form-control>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="local_certame">Local do Certame</label>
                                    <input type="text" id="local_certame" class="form-control" v-model="camposEspecificos.local_certame">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="objeto">Objeto</label>
                                    <input type="text" id="objeto" class="form-control" v-model="camposEspecificos.objeto">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="inicio_vigencia">Data do Início da Vigência</label>
                                    <input type="date" id="inicio_vigencia" class="form-control" v-model="camposEspecificos.inicio_vigencia">
                                </form-control>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="final_vigencia">Data do Final da Vigência</label>
                                    <input type="date" id="final_vigencia" class="form-control" v-model="camposEspecificos.final_vigencia">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="publicacao">Publicação</label>
                                    <input type="date" id="publicacao" class="form-control" v-model="camposEspecificos.publicacao">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="previsao_orcamentaria">Previsão Orçamentária</label>
                                    <input type="text" v-mask="mask" placeholder="R$100.00" id="previsao_orcamentaria" class="form-control" v-model="camposEspecificos.previsao_orcamentaria">
                                </form-control>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <form-control>
                                    <label>Relacionado ao COVID-19:</label>
                                    <div class="form-check">
                                      <input class="form-check-input" type="radio" name="relacionado_covid" id="relacionado_covid" value="1" checked v-model="camposEspecificos.relacionado_covid">
                                      <label class="form-check-label" for="relacionado_covid">
                                        Sim
                                      </label>
                                    </div>
                                    <div class="form-check">
                                      <input class="form-check-input" type="radio" name="relacionado_covid" id="relacionado_covid" value="0" v-model="camposEspecificos.relacionado_covid">
                                      <label class="form-check-label" for="relacionado_covid">
                                        Não
                                      </label>
                                    </div>
                                </form-control>
                            </div>
                        </div>
                    </div>

                    <div class="form-group" v-if="documento.tipo_processo_id == '2'">
                        <span>Campos Específicos:</span><br>
                        <div class="row">
                            <div class="col-sm-4">
                                <form-control>
                                    <input type="radio" id="cpf-example" value="###.###.###-##" v-model="dynamicMask">
                                    <span>Pessoa Física</span>
                                    <input type="radio" id="cnpj-example" value="##.###.###/####-##" v-model="dynamicMask">
                                    <span>Pessoa Jurídica</span>
                                    <input v-mask="dynamicMask" type="text" id="cpf_cnpj" class="form-control" v-model="camposEspecificos.cpf_cnpj">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="numero_contrato">Número do Contrato</label>
                                    <input type="text" id="numero_contrato" class="form-control" v-model="camposEspecificos.numero_contrato">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="numero_processo_adm">Número Processo Administrativo</label>
                                    <input type="text" id="numero_processo_adm" class="form-control" v-model="camposEspecificos.numero_processo_adm">
                                </form-control>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="numero_processo_licitatorio">Número Processo Licitatorio</label>
                                    <input type="text" id="numero_processo_licitatorio" class="form-control" v-model="camposEspecificos.numero_processo_licitatorio">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="valor">Valor</label>
                                    <input type="text" v-mask="mask" placeholder="R$100.00" id="valor" class="form-control" v-model="camposEspecificos.valor">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="data_assinatura">Data de Assinatura</label>
                                    <input type="date" id="data_assinatura" class="form-control" v-model="camposEspecificos.data_assinatura">
                                </form-control>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="inicio_vigencia">Data do Início da Vigência</label>
                                    <input type="date" id="inicio_vigencia" class="form-control" v-model="camposEspecificos.inicio_vigencia">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="final_vigencia">Data do Final da Vigência</label>
                                    <input type="date" id="final_vigencia" class="form-control" v-model="camposEspecificos.final_vigencia">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="objeto">Objeto</label>
                                    <input type="text" id="objeto" class="form-control" v-model="camposEspecificos.objeto">
                                </form-control>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="fundamento_legal">Fundamento Legal</label>
                                    <input type="text" id="fundamento_legal" class="form-control" v-model="camposEspecificos.fundamento_legal">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label>Possui Aditivo:</label>
                                    <div class="form-check">
                                      <input class="form-check-input" type="radio" name="possui_aditivo" id="possui_aditivo" v-model="camposEspecificos.possui_aditivo" value="1" checked>
                                      <label class="form-check-label" for="possui_aditivo">
                                        Sim
                                      </label>
                                    </div>
                                    <div class="form-check">
                                      <input class="form-check-input" type="radio" name="possui_aditivo" id="possui_aditivo" value="0" v-model="camposEspecificos.possui_aditivo">
                                      <label class="form-check-label" for="possui_aditivo">
                                        Não
                                      </label>
                                    </div>
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label>Relacionado ao COVID-19:</label>
                                    <div class="form-check">
                                      <input class="form-check-input" type="radio" name="relacionado_covid" id="relacionado_covid" v-model="camposEspecificos.relacionado_covid" value="1" checked>
                                      <label class="form-check-label" for="relacionado_covid">
                                        Sim
                                      </label>
                                    </div>
                                    <div class="form-check">
                                      <input class="form-check-input" type="radio" name="relacionado_covid" id="relacionado_covid" value="0"  v-model="camposEspecificos.relacionado_covid">
                                      <label class="form-check-label" for="relacionado_covid">
                                        Não
                                      </label>
                                    </div>
                                </form-control>
                            </div>
                        </div>
                    </div>

                    <div class="form-group" v-if="documento.tipo_processo_id == '7'">
                        <span>Campos Específicos:</span><br>
                        <div class="row">
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="orgao">Órgão</label>
                                    <input type="text" id="orgao" class="form-control" v-model="camposEspecificos.orgao">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="numero_dispensa">Número da Dispensa</label>
                                    <input type="text" id="numero_dispensa" class="form-control" v-model="camposEspecificos.numero_dispensa">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="numero_processo_adm">Número Processo Administrativo</label>
                                    <input type="text" id="numero_processo_adm" class="form-control" v-model="camposEspecificos.numero_processo_adm">
                                </form-control>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="local_execucao">Local de execução do contrato</label>
                                    <input type="text" id="local_execucao" class="form-control" v-model="camposEspecificos.local_execucao">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="objeto">Objeto</label>
                                    <input type="text" id="objeto" class="form-control" v-model="camposEspecificos.objeto">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="inicio_vigencia">Data do Início da Vigência</label>
                                    <input type="date" class="form-control" id="inicio_vigencia" v-model="camposEspecificos.inicio_vigencia">
                                </form-control>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="final_vigencia">Data do Final da Vigência</label>
                                    <input type="date" id="final_vigencia" class="form-control" v-model="camposEspecificos.final_vigencia">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="publicacao">Publicação</label>
                                    <input type="date" id="publicacao" class="form-control" v-model="camposEspecificos.publicacao">
                                </form-control>
                            </div>
                            <div class="col-sm-4">
                                <form-control>
                                    <label for="previsao_orcamentaria">Previsão Orçamentária</label>
                                    <input type="text" v-mask="mask" id="previsao_orcamentaria" placeholder="R$100.00" class="form-control" v-model="camposEspecificos.previsao_orcamentaria">
                                </form-control>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <form-control>
                                    <label>Possui Aditivo:</label>
                                    <div class="form-check">
                                      <input class="form-check-input" type="radio" name="possui_aditivo" id="possui_aditivo" value="1" checked v-model="camposEspecificos.possui_aditivo">
                                      <label class="form-check-label" for="possui_aditivo">
                                        Sim
                                      </label>
                                    </div>
                                    <div class="form-check">
                                      <input class="form-check-input" type="radio" name="possui_aditivo" id="possui_aditivo" value="0" v-model="camposEspecificos.possui_aditivo">
                                      <label class="form-check-label" for="possui_aditivo">
                                        Não
                                      </label>
                                    </div>
                                </form-control>
                            </div>
                            <div class="col-sm-6">
                                <form-control>
                                    <label for="relacionado_covid">Relacionado ao COVID-19:</label>
                                    <div class="form-check">
                                      <input class="form-check-input" type="radio" name="relacionado_covid" id="relacionado_covid" value="1" checked v-model="camposEspecificos.relacionado_covid">
                                      <label class="form-check-label" for="relacionado_covid">
                                        Sim
                                      </label>
                                    </div>
                                    <div class="form-check">
                                      <input class="form-check-input" type="radio" name="relacionado_covid" id="relacionado_covid" value="0" v-model="camposEspecificos.relacionado_covid">
                                      <label class="form-check-label" for="relacionado_covid">
                                        Não
                                      </label>
                                    </div>
                                </form-control>
                            </div>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary" ref="submit" disabled>Salvar</button>
                    <a :href="baseUrl('/painel/processos')" class="btn btn-default">Voltar</a>

                    <button type="button" class="btn btn-danger pull-right" tabindex="-1" v-if="resource" @click="remove">
                        <i class="fa fa-trash"></i> Excluir
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import FormControl from '../components/FormControl.vue'

    import createNumberMask from 'text-mask-addons/dist/createNumberMask';
    const currencyMask = createNumberMask({
        prefix: 'R$',
        allowDecimal: true,
        includeThousandsSeparator: true,
        allowNegative: false,
    });

    export default {
        props: ['resource'],
        data() {
            return {
                tipos: [],
                dynamicMask: '###.###.###-##',
                mask: currencyMask,
                categorias: [],
                documento: {
                    tipo_processo_id: ""
                },
                camposEspecificos: {},
                anexos: [],
                errors: {},
                showSuccessMsg: false,
            }
        },
        components: {
            FormControl
        },
        mounted() {
            Loading.show();

            const successMsg = window.location.search.split('success=')[1];
            this.showSuccessMsg = successMsg ? true : false;

            axios.all([ axios.get('/painel/ajax/tipo-processo'), axios.get('/painel/ajax/categoria-processo') ])
                .then(axios.spread((respTipos, respCategorias) => {
                    this.tipos = respTipos.data.data;
                    this.categorias = respCategorias.data.data;
                    this.fetch();
                }));
        },
        methods: {
            fetch() {
                if(this.resource) {
                    axios.get('/painel/ajax/documento/' + this.resource)
                        .then((response) => {
                            this.documento = response.data.data.documentos;
                            this.camposEspecificos = response.data.data.camposEspecificos[0];

                            for (var i in this.documento.anexos) {
                                this.anexos.push({
                                    anexo_id: this.documento.anexos[i].anexo_id,
                                    dan_data_documento: this.documento.anexos[i].pivot.dan_data_documento,
                                    tipo_categoria_processo_id: this.documento.anexos[i].pivot.tipo_categoria_processo_id,
                                    ane_nome: this.documento.anexos[i].ane_nome,
                                });
                            }

                            Loading.hide();
                            $(this.$refs.submit).prop("disabled", false);
                        })
                        .catch((error) => {
                            Loading.hide();
                            alert('Não foi possível carregar o recurso informado.');
                        });
                }
                else {
                    this.addArquivo();
                    Loading.hide();
                    $(this.$refs.submit).prop("disabled", false);
                }
            },
            save() {
                var vm = this;
                this.errors = {};

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                let data = new FormData();
                
                for (var i in this.documento) {
                    data.append(i, this.documento[i]);
                }

                for (var i in this.camposEspecificos) {
                    data.append(i, this.camposEspecificos[i]);
                }

                if(!this.resource) {
                    for (var i in this.anexos) {

                        if(this.documento.tipo_processo_id == '3' ||
                            this.documento.tipo_processo_id == '4' ||
                            this.documento.tipo_processo_id == '5' ||
                            this.documento.tipo_processo_id == '6' )
                        {
                            this.anexos[i].tipo_categoria_processo_id = 20;   
                        }

                        data.append('dan_data_documento_' + (parseInt(i) + 1), this.anexos[i].dan_data_documento);
                        data.append('tipo_categoria_processo_id_' + (parseInt(i) + 1), this.anexos[i].tipo_categoria_processo_id);
                        data.append('doc_arquivo_' + (parseInt(i) + 1), this.anexos[i].doc_arquivo);
                    }
                }
                else {
                    data.append('_method', 'PUT');

                    for (var i in this.anexos) {
                        data.append('dan_data_documento_' + (parseInt(i) + 1), this.anexos[i].dan_data_documento);
                        data.append('tipo_categoria_processo_id_' + (parseInt(i) + 1), this.anexos[i].tipo_categoria_processo_id);

                        if(this.anexos[i].anexo_id) {
                            data.append('anexo_id_' + (parseInt(i) + 1), this.anexos[i].anexo_id);
                        }
                        else {
                            data.append('doc_arquivo_' + (parseInt(i) + 1), this.anexos[i].doc_arquivo);
                        }
                    }
                }

                var promise = axios({
                    method: 'post',
                    url: '/painel/ajax/documento' + (this.resource ? '/' + this.resource : ''),
                    data: data,
                    headers: { 'content-type': 'multipart/form-data' },
                });

                promise
                    .then((response) => {
                        // window.location.href = this.baseUrl('/painel/processo/' + response.data.data.documento_id + '/edicao?success=1');
                        window.location.href = this.baseUrl('/painel/processos');
                    })
                    .catch((error) => {
                        if(error.response) {
                            if(error.response.status == 422) {
                                vm.errors = error.response.data.data;
                            }
                            else {
                                const msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                                alert(msg);
                            }
                        }
                        else {
                            alert("Ocorreu um erro ao tentar processar sua solicitação.");
                        }

                        Loading.hide();
                        $(this.$refs.submit).prop("disabled", false);
                    });
            },
            onFileChange(item, e) {
                var files = e.target.files || e.dataTransfer.files;
                item.doc_arquivo = files.length ? files[0] : null;
            },
            addArquivo() {
                this.anexos.push({
                    dan_data_documento: moment().format('YYYY-MM-DD'),
                    tipo_categoria_processo_id: null,
                    doc_arquivo: null,
                });
            },
            removeArquivo(index) {
                this.anexos.splice(index, 1);
                this.$forceUpdate();
            },
            remove() {
                if(!confirm('Tem certeza que deseja remover este processo? Esta ação não poderá ser desfeita!')) return;

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                axios.post('painel/ajax/documento/' + this.resource, { _method: 'DELETE' })
                    .then((response) => {
                        window.location.href = this.baseUrl('/painel/processos');
                    })
                    .catch((error) => {
                        if(error.response) {
                            const msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                            alert(msg);
                        }
                        else {
                            alert("Ocorreu um erro ao tentar processar sua solicitação.");
                        }

                        Loading.hide();
                        $(this.$refs.submit).prop("disabled", false);
                    });
            },
        }
    }
</script>
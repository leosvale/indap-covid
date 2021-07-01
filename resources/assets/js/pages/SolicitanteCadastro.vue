<template>
    <div class="container">
        <div class="page-header">
            <h1>Cadastro de Solicitante</h1>
        </div>

        <div class="panel panel-form">
            <div class="panel-body">
                <div class="alert alert-success" role="alert" v-show="success">
                    <h4>Seu cadastro foi realizado com sucesso!</h4>
                    Agora, acesse o e-mail <strong>{{ solicitante.sol_email }}</strong> e confirme seu cadastro clicando no link enviado.
                </div>

                <div v-show="!success">
                    <form role="form" accept-charset="UTF-8" @submit.prevent="save">
                        <form-control :error="errors.sol_tipo_pessoa">
                            <label>Tipo de Pessoa</label>
                            <div>
                                <label class="radio-inline">
                                    <input type="radio" value="F" v-model="solicitante.sol_tipo_pessoa"> Física
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" value="J" v-model="solicitante.sol_tipo_pessoa">Jurídica
                                </label>
                            </div>
                        </form-control>

                        <div class="row">
                            <div class="col-md-8">
                                <form-control :error="errors.sol_nome">
                                    <label for="sol_nome" v-show="solicitante.sol_tipo_pessoa == 'F'">Nome Completo *</label>
                                    <label for="sol_nome" v-show="solicitante.sol_tipo_pessoa == 'J'">Razão Social *</label>
                                    <input type="text" id="sol_nome" class="form-control" v-model="solicitante.sol_nome">
                                </form-control>
                            </div>
                            <div class="col-md-4">
                                <form-control :error="errors.sol_cpf" v-show="solicitante.sol_tipo_pessoa == 'F' && !solicitante.sol_doc_identificacao">
                                    <label for="sol_cpf">CPF *</label>
                                    <input type="text" id="sol_cpf" class="form-control" v-model="solicitante.sol_cpf">
                                </form-control>
                                <form-control :error="errors.sol_cnpj" v-show="solicitante.sol_tipo_pessoa == 'J'">
                                    <label for="sol_cnpj">CNPJ *</label>
                                    <input type="text" id="sol_cnpj" class="form-control" v-model="solicitante.sol_cnpj">
                                </form-control>
                            </div>
                        </div>

                        <div class="form-group" v-show="solicitante.sol_tipo_pessoa == 'F'">
                            <div class="checkbox" style="margin-top: 0">
                                <label>
                                    <input type="checkbox" v-model="solicitante.sol_doc_identificacao"> Cidadão não possui CPF
                                </label>
                            </div>
                        </div>

                        <form-control :error="errors.sol_tipo_doc_identificacao" v-show="solicitante.sol_tipo_pessoa == 'F' && solicitante.sol_doc_identificacao">
                            <label for="sol_tipo_doc_identificacao" >Tipo de Documento de Identificação *</label>
                            <input type="text" id="sol_tipo_doc_identificacao" class="form-control" v-model="solicitante.sol_tipo_doc_identificacao">
                        </form-control>

                        <form-control :error="errors.sol_numero_doc_identificacao" v-show="solicitante.sol_tipo_pessoa == 'F' && solicitante.sol_doc_identificacao">
                            <label for="sol_numero_doc_identificacao" >Número do Documento de Identificação *</label>
                            <input type="text" id="sol_numero_doc_identificacao" class="form-control" v-model="solicitante.sol_numero_doc_identificacao">
                        </form-control>

                        <form-control :error="errors.sol_orgao_doc_identificacao" v-show="solicitante.sol_tipo_pessoa == 'F' && solicitante.sol_doc_identificacao">
                            <label for="sol_orgao_doc_identificacao" >Órgão Expedidor *</label>
                            <input type="text" id="sol_orgao_doc_identificacao" class="form-control" v-model="solicitante.sol_orgao_doc_identificacao">
                        </form-control>

                        <form-control :error="errors.sol_termos_doc_identificacao" v-show="solicitante.sol_tipo_pessoa == 'F' && solicitante.sol_doc_identificacao">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" v-model="solicitante.sol_termos_doc_identificacao">
                                    Li e aceito os <a href="#" data-toggle="modal" data-target="#modalTermos">termos e condições</a> para o cadastro sem CPF *
                                </label>
                            </div>
                        </form-control>

                        <div class="row">
                            <div class="col-md-6">
                                <form-control :error="errors.sol_nome_representante" v-show="solicitante.sol_tipo_pessoa == 'J'">
                                    <label for="sol_nome_representante" >Nome do Representante *</label>
                                    <input type="text" id="sol_nome_representante" class="form-control" v-model="solicitante.sol_nome_representante">
                                </form-control>
                            </div>
                            <div class="col-md-6">
                                <form-control :error="errors.sol_cargo_representante" v-show="solicitante.sol_tipo_pessoa == 'J'">
                                    <label for="sol_cargo_representante" >Cargo do Representante *</label>
                                    <input type="text" id="sol_cargo_representante" class="form-control" v-model="solicitante.sol_cargo_representante">
                                </form-control>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <form-control :error="errors.tipo_instituicao_id" v-show="solicitante.sol_tipo_pessoa == 'J'">
                                    <label for="tipo_instituicao_id">Tipo de Instituição *</label>
                                    <select id="tipo_instituicao_id" class="form-control" v-model="solicitante.tipo_instituicao_id">
                                        <option value=""></option>
                                        <template v-for="item in tipos_instituicao">
                                            <option :value="item.tipo_instituicao_id">{{ item.tin_nome }}</option>
                                        </template>
                                    </select>
                                </form-control>
                            </div>
                            <div class="col-md-6">
                                <form-control :error="errors.tipo_area_atuacao_id" v-show="solicitante.sol_tipo_pessoa == 'J'">
                                    <label for="tipo_area_atuacao_id">Área de Atuação *</label>
                                    <select id="tipo_area_atuacao_id" class="form-control" v-model="solicitante.tipo_area_atuacao_id">
                                        <option value=""></option>
                                        <template v-for="item in areas_atuacao">
                                            <option :value="item.tipo_area_atuacao_id">{{ item.taa_nome }}</option>
                                        </template>
                                    </select>
                                </form-control>
                            </div>
                        </div>

                        <br><br>

                        <div class="row">
                            <div class="col-sm-4" v-show="!solicitante.sol_estrangeiro">
                                <form-control :error="errors.end_cep">
                                    <label for="end_cep">CEP *</label>
                                    <input type="text" id="end_cep" class="form-control" v-model="solicitante.end_cep" autocomplete="off" @change="needsUpdateCep = true" @blur="checkCep">
                                </form-control>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="checkbox" style="margin-top: 0">
                                <label>
                                    <input type="checkbox" v-model="solicitante.sol_estrangeiro">
                                    Cidadão não reside no Brasil
                                </label>
                            </div>
                        </div>

                        <form-control :error="errors.pais_id" v-show="solicitante.sol_estrangeiro">
                            <label for="pais_id">País</label>
                            <select id="pais_id" class="form-control" v-model="solicitante.pais_id">
                                <option value=""></option>
                                <template v-for="item in paises">
                                    <option :value="item.pais_id">{{ item.pai_nome }}</option>
                                </template>
                            </select>
                        </form-control>

                        <div class="row">
                            <div class="col-sm-8 col-lg-10">
                                <form-control :error="errors.end_logradouro">
                                    <label for="end_logradouro">Logradouro *</label>
                                    <input type="text" id="end_logradouro" class="form-control" v-model="solicitante.end_logradouro" placeholder="Rua, Avenida, Caminho, etc.">
                                </form-control>
                            </div>
                            <div class="col-sm-4 col-lg-2">
                                <form-control :error="errors.end_numero">
                                    <label for="end_numero">Número</label>
                                    <input type="text" id="end_numero" class="form-control" v-model="solicitante.end_numero">
                                </form-control>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <form-control :error="errors.end_complemento">
                                    <label for="end_complemento">Complemento</label>
                                    <input type="text" id="end_complemento" class="form-control" v-model="solicitante.end_complemento">
                                </form-control>
                            </div>
                            <div class="col-md-6">
                                <form-control :error="errors.end_bairro">
                                    <label for="end_bairro">Bairro *</label>
                                    <input type="text" id="end_bairro" class="form-control" v-model="solicitante.end_bairro">
                                </form-control>
                            </div>
                        </div>

                        <div class="row" v-show="!solicitante.sol_estrangeiro">
                            <div class="col-md-6">
                                <form-control :error="errors.est_sigla">
                                    <label for="est_sigla">Estado *</label>
                                    <select id="est_sigla" class="form-control" v-model="solicitante.est_sigla" @change="loadCidades">
                                        <option value=""></option>
                                        <template v-for="item in estados">
                                            <option :value="item.est_sigla">{{ item.est_nome }}</option>
                                        </template>
                                    </select>
                                </form-control>
                            </div>
                            <div class="col-md-6">
                                <form-control :error="errors.cid_codigo_ibge">
                                    <label for="cid_codigo_ibge">Cidade *</label>
                                    <select id="cid_codigo_ibge" class="form-control" v-model="solicitante.cid_codigo_ibge">
                                        <option value=""></option>
                                        <template v-for="item in cidades">
                                            <option :value="item.cid_codigo_ibge">{{ item.cid_nome }}</option>
                                        </template>
                                    </select>
                                </form-control>
                            </div>
                        </div>

                        <br><br>

                        <form-control :error="errors.sol_telefone">
                            <label for="sol_telefone">Telefone *</label>
                            <input type="tel" id="sol_telefone" class="form-control" v-model="solicitante.sol_telefone">
                        </form-control>

                        <div class="row">
                            <div class="col-md-6">
                                <form-control :error="errors.sol_email">
                                    <label for="sol_email">E-mail *</label>
                                    <input type="email" id="sol_email" class="form-control" v-model="solicitante.sol_email">
                                </form-control>
                            </div>
                            <div class="col-md-6">
                                <form-control :error="errors.sol_email_confirmacao">
                                    <label for="sol_email_confirmacao">Confirme seu E-mail *</label>
                                    <input type="email" id="sol_email_confirmacao" class="form-control" autocomplete="off" v-model="solicitante.sol_email_confirmacao">
                                </form-control>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <form-control :error="errors.usu_senha">
                                    <label for="usu_senha">Senha de acesso *</label>
                                    <input type="password" id="usu_senha" class="form-control" v-model="solicitante.usu_senha">
                                </form-control>
                            </div>
                            <div class="col-md-6">
                                <form-control :error="errors.usu_senha_confirmacao">
                                    <label for="usu_senha_confirmacao">Confirme sua Senha *</label>
                                    <input type="password" id="usu_senha_confirmacao" class="form-control" v-model="solicitante.usu_senha_confirmacao">
                                </form-control>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-mairi" ref="submit" disabled>Enviar</button>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalTermos" tabindex="-1" role="dialog" aria-labelledby="modalTermosLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="modalTermosLabel">Declaração de Responsabilidade e Preenchimento de Documento</h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            Declaro não possuir CPF e assumo inteira responsabilidade pela exatidão e
                            veracidade das informações prestadas, inclusive quanto aos dados do documento
                            de identificação a ser utilizado para aferição do meu cadastro no Sistema
                            Eletrônico do Serviço de Informação ao Cidadão (E‐Sic). Declaro ainda ter
                            conhecimento das sanções legais aplicáveis caso as informações sejam
                            inverídicas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FormControl from '../components/FormControl.vue'

    export default {
        props: ['resource'],
        data() {
            return {
                tipos_instituicao: [],
                areas_atuacao: [],
                estados: [],
                cidades: [],
                paises: [],
                solicitante: {
                    sol_tipo_pessoa: "F",
                    sol_cpf: "",
                    sol_cnpj: "",
                    sol_doc_identificacao: false,
                    sol_estrangeiro: false,
                    end_cep: "",
                    end_logradouro: null,
                    end_complemento: null,
                    end_bairro: null,
                    sol_telefone: "",
                    sol_email: null,
                },
                errors: {},
                needsUpdateCep: false,
                success: false,
            }
        },
        components: {
            FormControl
        },
        mounted() {
            Loading.show();

            // Máscaras
            $("#sol_cpf").mask('000.000.000-00', {clearIfNotMatch: false});
            $("#sol_cnpj").mask('00.000.000/0000-00', {clearIfNotMatch: false});
            $("#end_cep").mask('00000-000', {clearIfNotMatch: false});
            $("#sol_telefone").mask('(00) 0000-00009', {clearIfNotMatch: false});

            // Impedir copiar/colar nos campos de confirmação
            $("#sol_email_confirmacao, #usu_senha_confirmacao").bind("cut copy paste",function(e) {
                e.preventDefault();
            });

            axios.all([
                    axios.get('/ajax/tipo-instituicao'),
                    axios.get('/ajax/area-atuacao'),
                    axios.get('/ajax/estado'),
                    axios.get('/ajax/pais'),
                ])
                .then(axios.spread((respTipos, respAreas, respEstados, respPaises) => {
                    this.tipos_instituicao = respTipos.data.data;
                    this.areas_atuacao = respAreas.data.data;
                    this.estados = respEstados.data.data;
                    this.paises = respPaises.data.data;

                    // Tirar "Brasil" da lista de paises
                    for (var i = this.paises.length - 1; i >= 0; i--) {
                        if(this.paises[i].pai_nome == "Brasil") {
                            this.paises.splice(i, 1);
                            break;
                        }
                    }

                    Loading.hide();
                    $(this.$refs.submit).prop("disabled", false);
                }))
                .catch(() => {
                    Loading.hide();
                    alert("Ocorreu um erro ao tentar carregar as informações necessárias para o cadastro. Por favor, atualize sua página e tente novamente.");
                });
        },
        methods: {
            save() {
                var vm = this;
                this.errors = {};

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                // Transformar dados
                let data = $.extend({}, this.solicitante);

                data.sol_cpf      = data.sol_cpf.replace(/[^0-9]/g, "");
                data.sol_cnpj     = data.sol_cnpj.replace(/[^0-9]/g, "");
                data.end_cep      = data.end_cep.replace(/[^0-9]/g, "");
                data.sol_telefone = data.sol_telefone.replace(/[^0-9]/g, "");

                axios.post('/ajax/solicitante', data)
                    .then((response) => {
                        this.success = true;
                        Loading.hide();
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
            checkCep() {
                if(this.needsUpdateCep) {
                    this.needsUpdateCep = false;
                    const cep = this.solicitante.end_cep.replace(/[^0-9]/g, "");

                    if(cep.length == 8) {
                        $(this.$refs.submit).prop("disabled", true);
                        Loading.show();

                        $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", (response) => {
                            if (!("erro" in response)) {
                                response.complemento = response.complemento.replace(/^\((.*)\)$/g, "$1");

                                this.cidades = [{ cid_codigo_ibge: response.ibge, cid_nome: response.localidade }];

                                this.solicitante.est_sigla = response.uf;
                                this.solicitante.cid_codigo_ibge = response.ibge;

                                $("#est_sigla, #cid_codigo_ibge").prop('disabled', true);

                                this.solicitante.end_logradouro = response.logradouro;
                                this.solicitante.end_complemento = response.complemento;
                                this.solicitante.end_bairro = response.bairro;
                            }
                            else {
                                alert("Não foi possível buscar os dados para o CEP informado.");
                            }

                            Loading.hide();
                            $(this.$refs.submit).prop("disabled", false);
                        });
                    }
                    else {
                        this.solicitante.est_sigla = "";
                        this.solicitante.cid_codigo_ibge = "";
                        this.cidades = [];
                        $("#est_sigla, #cid_codigo_ibge").prop('disabled', false);
                    }
                }
            },
            loadCidades() {
                if(!this.solicitante.est_sigla) {
                    this.cidades = [];
                    return;
                }

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                axios.get('/ajax/estado/' + this.solicitante.est_sigla + '/cidades')
                    .then((response) => {
                        this.cidades = response.data.data;
                        Loading.hide();
                        $(this.$refs.submit).prop("disabled", false);
                    })
                    .catch((error) => {
                        alert("Ocorreu um erro ao tentar listar as cidades. Por favor, atualize sua página e tente novamente.");
                        Loading.hide();
                        $(this.$refs.submit).prop("disabled", false);
                    });
            }
        },
        watch: {
            'solicitante.sol_email': function(value) {
                this.solicitante.sol_email = value.toLowerCase();
            }
        }
    }
</script>
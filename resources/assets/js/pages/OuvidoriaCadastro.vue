<template>
    <div class="container">
        <div class="page-header">
            <h1>Ouvidoria</h1>
        </div>

        <div class="panel panel-form">
            <div class="panel-body">
                <div class="alert alert-success" role="alert" v-show="success">
                    <h4>Sua mensagem foi enviada com sucesso!</h4>
                    Caso sua mensagem não seja <strong>sigilosa</strong> retornaremos o seu contato o mais breve possível.
                </div>

                <div v-show="!success">
                    <form role="form" accept-charset="UTF-8" @submit.prevent="send">
                        <div class="row">
                            <div class="col-md-6">
                                <form-control :error="errors.tipo_contato_id">
                                    <label for="tipo_contato_id">Tipo de Mensagem *</label>
                                    <select id="tipo_contato_id" class="form-control" v-model="contato.tipo_contato_id">
                                        <option value="" disabled></option>
                                        <template v-for="item in tipos">
                                            <option :value="item.tipo_contato_id">{{ item.tco_nome }}</option>
                                        </template>
                                    </select>
                                </form-control>
                            </div>
                            <div class="col-md-6">
                                <form-control :error="errors.ctt_sigiloso">
                                    <label>&nbsp;</label>
                                    <div class="checkbox" style="margin-top: 5px">
                                        <label for="ctt_sigiloso">
                                            <input type="checkbox" id="ctt_sigiloso" v-model="contato.ctt_sigiloso">
                                            <span>Desejo enviar uma mensagem sigilosa.</span>
                                        </label>
                                    </div>
                                </form-control>
                            </div>
                        </div>

                        <div class="row" v-show="!contato.ctt_sigiloso">
                            <div class="col-md-8">
                                <form-control :error="errors.ctt_nome">
                                    <label for="ctt_nome">Nome</label>
                                    <input type="text" id="ctt_nome" class="form-control" v-model="contato.ctt_nome">
                                </form-control>
                            </div>
                            <div class="col-md-4">
                                <form-control :error="errors.ctt_cpf_cnpj">
                                    <label for="ctt_cpf_cnpj">CPF/CNPJ</label>
                                    <input type="text" id="ctt_cpf_cnpj" class="form-control" v-model="contato.ctt_cpf_cnpj">
                                </form-control>
                            </div>
                        </div>

                        <form-control :error="errors.ctt_endereco" v-show="!contato.ctt_sigiloso">
                            <label for="ctt_endereco">Endereço</label>
                            <input type="text" id="ctt_endereco" class="form-control" v-model="contato.ctt_endereco">
                        </form-control>

                        <div class="row" v-show="!contato.ctt_sigiloso">
                            <div class="col-md-6">
                                <form-control :error="errors.ctt_telefone">
                                    <label for="ctt_telefone">Telefone</label>
                                    <input type="tel" id="ctt_telefone" class="form-control" v-model="contato.ctt_telefone">
                                </form-control>
                            </div>
                            <div class="col-md-6">
                                <form-control :error="errors.ctt_email">
                                    <label for="ctt_email">E-mail</label>
                                    <input type="email" id="ctt_email" class="form-control" v-model="contato.ctt_email">
                                </form-control>
                            </div>
                        </div>

                        <form-control :error="errors.ctt_mensagem">
                            <label for="ctt_mensagem">Mensagem</label>
                            <textarea id="ctt_mensagem" class="form-control" rows="5" v-model="contato.ctt_mensagem"></textarea>
                        </form-control>

                        <form-control :error="errors.ctt_anexo">
                            <label for="ctt_anexo">Anexar arquivos (máximo de 3 arquivos)</label>
                            <input type="file" id="ctt_anexo" class="form-control" v-on:change="onFileChange">
                        </form-control>

                        <form-control :error="errors.ctt_anexo_2" v-if="qtdAnexos >= 2">
                            <input type="file" id="ctt_anexo_2" class="form-control" v-on:change="onFileChange">
                        </form-control>

                        <form-control :error="errors.ctt_anexo_3" v-if="qtdAnexos >= 3">
                            <input type="file" id="ctt_anexo_3" class="form-control" v-on:change="onFileChange">
                        </form-control>

                        <div class="form-group" v-show="qtdAnexos < 3">
                            <button type="button" class="btn btn-success" @click="qtdAnexos++">Adicionar outro anexo</button>
                        </div>

                        <button type="submit" class="btn btn-primary" ref="submit" disabled>Enviar</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import FormControl from '../components/FormControl.vue'

    export default {
        data() {
            return {
                tipos: [],
                contato: {
                    ctt_sigiloso: false,
                    ctt_cpf_cnpj: "",
                    ctt_telefone: "",
                    ctt_anexo: null,
                    ctt_anexo_2: null,
                    ctt_anexo_3: null,
                },
                errors: {},
                qtdAnexos: 1,
                success: false,
            }
        },
        components: {
            FormControl
        },
        mounted() {
            Loading.show();

            // Máscaras
            var CpfCnpjMaskBehavior = function (val) {
                    return val.replace(/\D/g, '').length < 12 ? '000.000.000-009' : '00.000.000/0000-00';
                },
                spOptions = {
                    clearIfNotMatch: true,
                    onKeyPress: function(val, e, field, options) {
                        field.mask(CpfCnpjMaskBehavior.apply({}, arguments), options);
                    }
                };

            $("#ctt_cpf_cnpj").mask(CpfCnpjMaskBehavior, spOptions);
            $("#ctt_telefone").mask('(00) 0000-00009', {clearIfNotMatch: true});

            axios.get('/ajax/tipo-contato')
                .then((response) => {
                    this.tipos = response.data.data;
                    Loading.hide();
                    $(this.$refs.submit).prop("disabled", false);
                });
        },
        methods: {
            send() {
                var vm = this;
                this.errors = {};

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                let data = new FormData();

                this.contato.ctt_cpf_cnpj = this.contato.ctt_cpf_cnpj.replace(/[^0-9]/g, "");
                this.contato.ctt_telefone = this.contato.ctt_telefone.replace(/[^0-9]/g, "");

                for (var i in this.contato) {
                    if(this.contato[i]) {
                        data.append(i, this.contato[i]);
                    }
                }

                var promise = axios.post('/ajax/contato', data, {
                    headers: { 'content-type': 'multipart/form-data' },
                });

                promise
                    .then((response) => {
                        this.success = true;
                        Loading.hide();
                    })
                    .catch((error) => {
                        if (error.response) {
                            if (error.response.status == 422) {
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
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                this.contato[e.target.id] = files.length ? files[0] : null;
            }
        }
    }
</script>
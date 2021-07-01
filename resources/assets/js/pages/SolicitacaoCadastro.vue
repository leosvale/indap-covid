<template>
    <div class="container">
        <div class="page-header">
            <h1 v-if="!this.resource">Cadastrar Solicitação</h1>
            <h1 v-if="this.resource">Atualizar Solicitação</h1>
        </div>

        <div class="panel panel-form">
            <div class="panel-body">
                <div class="alert alert-success text-center" role="alert" v-show="success">
                    <h4>Protocolo</h4>
                    <h2>{{ solicitacao.slc_protocolo }}</h2>
                </div>

                <a :href="baseUrl('/painel/solicitacao/'+ solicitacao.solicitacao_id +'/detalhes')" class="btn btn-primary" v-show="success">Ver detalhes</a>
                <a :href="baseUrl('/painel/solicitacoes')" class="btn btn-default" v-show="success">Voltar</a>

                <div v-show="!success">
                    <form role="form" accept-charset="UTF-8" @submit.prevent="save">
                        <form-control :error="errors.slc_orgao">
                            <label for="slc_orgao">Serviço ou Órgão/Entidade</label>
                            <select id="slc_orgao" class="form-control" v-model="solicitacao.slc_orgao">
                                <option value=""></option>
                                <optgroup v-for="tipo in tipoServicos" v-if="servicos[tipo.tipo_categoria_servico_id]" :label="tipo.tcs_nome">
                                    <option v-for="servico in servicos[tipo.tipo_categoria_servico_id]" :value="tipo.tcs_nome + ' - ' + servico.pub_titulo">{{servico.pub_titulo}}</option>
                                </optgroup>
                                <optgroup label="Secretarias">
                                    <option value="Secretarias - Administração">Administração</option>
                                    <option value="Secretarias - Saúde">Saúde</option>
                                    <option value="Secretarias - Educação">Educação</option>
                                    <option value="Secretarias - Assistência Social">Assistência social</option>
                                    <option value="Secretarias - Transporte">Transporte</option>
                                    <option value="Secretarias - Cultura">Cultura</option>
                                    <option value="Secretarias - Agricultura">Agricultura</option>
                                    <option value="Secretarias - Esporte/Lazer">Esporte/Lazer</option>
                                    <option value="Secretarias - Outros">Outros</option>
                                </optgroup>
                                <optgroup label="Setores">
                                    <option value="Setores - Finanças">Finanças</option>
                                    <option value="Setores - Licitação">Licitação</option>
                                    <option value="Setores - Contabilidade">Contabilidade</option>
                                    <option value="Setores - Controladoria">Controladoria</option>
                                    <option value="Setores - Pessoal">Pessoal</option>
                                    <option value="Setores - Convênios">Convênios</option>
                                    <option value="Setores - Outros">Outros</option>
                                </optgroup>
                            </select>
                        </form-control>

                        <form-control :error="errors.slc_titulo">
                            <label for="slc_titulo">Título *</label>
                            <input type="text" id="slc_titulo" class="form-control" v-model="solicitacao.slc_titulo">
                        </form-control>

                        <form-control :error="errors.slc_descricao">
                            <label for="slc_descricao">Mensagem *</label>
                            <textarea id="slc_descricao" class="form-control" rows="8" v-model="solicitacao.slc_descricao"></textarea>
                        </form-control>

                        <form-control :error="errors.slc_anexo">
                            <label for="slc_anexo">Anexar arquivos (máximo de 3 arquivos)</label>
                            <input type="file" id="slc_anexo" class="form-control" @change="onFileChange">
                        </form-control>

                        <form-control :error="errors.slc_anexo_2" v-if="qtdAnexos >= 2">
                            <input type="file" id="slc_anexo_2" class="form-control" @change="onFileChange">
                        </form-control>

                        <form-control :error="errors.slc_anexo_3" v-if="qtdAnexos >= 3">
                            <input type="file" id="slc_anexo_3" class="form-control" @change="onFileChange">
                        </form-control>

                        <div class="form-group" v-show="qtdAnexos < 3">
                            <button type="button" class="btn btn-success" @click="qtdAnexos++">Adicionar outro anexo</button>
                        </div>

                        <button type="submit" class="btn btn-primary" ref="submit" disabled>Enviar</button>
                        <a :href="baseUrl('/painel/solicitacoes')" class="btn btn-default">Voltar</a>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import FormControl from '../components/FormControl.vue'

    export default {
        props: [
            'resource', 'tipoServicos', 'servicos'
        ],
        data() {
            return {
                solicitacao: {
                    slc_orgao: "",
                    slc_anexo: null,
                    slc_anexo_2: null,
                    slc_anexo_3: null,
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
            Loading.hide();
            $(this.$refs.submit).prop("disabled", false);
        },
        methods: {
            save() {
                var vm = this;
                this.errors = {};

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                let data = new FormData();

                for (var i in this.solicitacao) {
                    if(this.solicitacao[i]) {
                        data.append(i, this.solicitacao[i]);
                    }
                }

                var promise = axios.post('/painel/ajax/solicitacao', data, {
                    headers: { 'content-type': 'multipart/form-data' },
                });

                promise
                    .then((response) => {
                        this.solicitacao = response.data.data;
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
                this.solicitacao[e.target.id] = files.length ? files[0] : null;
            }
        }
    }
</script>
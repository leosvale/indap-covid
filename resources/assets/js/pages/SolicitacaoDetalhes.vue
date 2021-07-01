<template>
    <div class="container">
        <div class="page-header">
            <a class="btn btn-default pull-right" :href="baseUrl('/painel/solicitacoes')"><i class="fa fa-chevron-left fa-fw"></i> Voltar</a>
            <h1>Detalhes da Solicitação</h1>
        </div>

        <div class="panel panel-form">
            <table class="table">
                <colgroup>
                    <col style="width: 220px">
                </colgroup>
                <tbody>
                    <tr>
                        <th style="border-top: 0">Protocolo:</th>
                        <td style="border-top: 0">{{ solicitacao.slc_protocolo }}</td>
                    </tr>
                    <tr>
                        <th>Solicitante:</th>
                        <td><span v-if="solicitacao.solicitante">{{ solicitacao.solicitante.sol_nome }}</span></td>
                    </tr>
                    <tr>
                        <th>Data de Abertura:</th>
                        <td>{{ solicitacao.slc_data_cadastro }}</td>
                    </tr>
                    <tr>
                        <th>Órgão/Entidade/Servico:</th>
                        <td>{{ solicitacao.slc_orgao }}</td>
                    </tr>
                    <tr>
                        <th>Situação:</th>
                        <td>{{ solicitacao.slc_situacao_texto }}</td>
                    </tr>
                    <tr>
                        <th>Título:</th>
                        <td>{{ solicitacao.slc_titulo }}</td>
                    </tr>
                    <tr>
                        <th>Descrição da Solicitação:</th>
                        <td>{{ solicitacao.slc_descricao }}</td>
                    </tr>
                    <tr>
                        <th>Anexos:</th>
                        <td>
                            <ul class="list-unstyled">
                                <template v-for="item in solicitacao.anexos">
                                    <li><a :href="baseUrl('/painel/solicitacao/anexo/' + item.anexo_id)" target="_blank">{{ item.ane_nome }}</a></li>
                                </template>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Comentários:</th>
                        <td v-html="solicitacao.slc_comentario_texto"></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="panel panel-form">
            <div class="panel-body">
                <form role="form" accept-charset="UTF-8" @submit.prevent="save">
                    <form-control :error="errors.slc_situacao">
                        <label for="slc_situacao">Alterar Situação</label>
                        <select id="slc_situacao" v-model="solicitacao.slc_situacao" class="form-control">
                            <template v-for="(item, index) in situacoes">
                                <option :value="index">{{ item }}</option>
                            </template>
                        </select>
                    </form-control>

                    <form-control :error="errors.slc_comentario">
                        <label for="slc_comentario">Comentários</label>
                        <textarea id="slc_comentario" class="form-control" rows="8" v-model="solicitacao.slc_comentario"></textarea>
                    </form-control>

                    <div class="row" v-for="(item, index) in anexos">
                        <div class="col-sm-12">
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
                        <button type="button" class="btn btn-success" @click="addArquivo">Adicionar Arquivo</button>
                    </div>

                    <button type="submit" class="btn btn-primary" ref="submit" disabled>Salvar</button>
                </form>
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
                situacoes: [],
                solicitacao: {
                    slc_situacao: "",
                    slc_comentario_texto: ""
                },
                errors: {},
                anexos: [],
            }
        },
        components: {
            FormControl
        },
        mounted() {
            Loading.show();

            axios.get('/ajax/tipo-situacao-solicitacao').then((response) => {
                this.situacoes = response.data.data;
                this.fetch();
            });
        },
        methods: {
            fetch() {
                axios.get('/painel/ajax/solicitacao/' + this.resource)
                    .then((response) => {
                        this.solicitacao = response.data.data;

                        if(this.solicitacao.slc_data_cadastro) {
                            this.solicitacao.slc_data_cadastro = moment(this.solicitacao.slc_data_cadastro).format('DD/MM/YYYY HH:mm');
                        }

                        if(this.solicitacao.slc_situacao && this.situacoes[this.solicitacao.slc_situacao]) {
                            this.solicitacao.slc_situacao_texto = this.situacoes[this.solicitacao.slc_situacao];
                        }

                        if(this.solicitacao.slc_comentario) {
                            this.solicitacao.slc_comentario_texto = this.solicitacao.slc_comentario.replace(/(?:\r\n|\r|\n)/g, '<br />');
                        }

                        Loading.hide();
                        $(this.$refs.submit).prop("disabled", false);
                    })
                    .catch((error) => {
                        Loading.hide();
                        alert('Não foi possível carregar o recurso informado.');
                    });
            },
            save() {
                var vm = this;
                this.errors = {};

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                let data = $.extend(new FormData(), this.solicitacao);

                data.append('_method', 'PUT');

                for (var i in this.solicitacao) {
                    if(this.solicitacao[i]) {
                        data.append(i, this.solicitacao[i]);
                    }
                }

                for (var i in this.anexos) {
                    data.append('dan_data_documento_' + (parseInt(i) + 1), this.anexos[i].dan_data_documento);
                    data.append('tipo_categoria_processo_id_' + (parseInt(i) + 1), this.anexos[i].tipo_categoria_processo_id);
                    data.append('doc_arquivo_' + (parseInt(i) + 1), this.anexos[i].doc_arquivo);
                }
                
                axios.post('/painel/ajax/solicitacao/' + this.resource, data)
                    .then((response) => {
                        window.location.href = this.baseUrl('/painel/solicitacao/' + response.data.data.solicitacao_id + '/detalhes');
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
            onFileChange(item, e) {
                var files = e.target.files || e.dataTransfer.files;
                item.doc_arquivo = files.length ? files[0] : null;
            },
        }
    }
</script>
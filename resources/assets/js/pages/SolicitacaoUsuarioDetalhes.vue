<template>
    <div class="container">
        <div class="page-header">
            <a class="btn btn-default pull-right" :href="baseUrl('/esic/solicitacoes')"><i class="fa fa-chevron-left fa-fw"></i> Voltar</a>
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
                        <th>Órgão/Entidade/Serviço:</th>
                        <td>{{ solicitacao.slc_orgao }}</td>
                    </tr>
                    <tr>
                        <th>Situação:</th>
                        <td>{{ solicitacao.slc_situacao }}</td>
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
                                    <li><a :href="baseUrl('/esic/solicitacao/anexo/' + item.anexo_id)" target="_blank">{{ item.ane_nome }}</a></li>
                                </template>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>Comentários:</th>
                        <td v-html="solicitacao.slc_comentario"></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['resource'],
    	data() {
            return {
                situacoes: [],
                solicitacao: {},
            }
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
                axios.get('/esic/ajax/solicitacao/' + this.resource)
                    .then((response) => {
                        this.solicitacao = response.data.data;

                        if(this.solicitacao.slc_data_cadastro) {
                            this.solicitacao.slc_data_cadastro = moment(this.solicitacao.slc_data_cadastro).format('DD/MM/YYYY HH:mm');
                        }

                        if(this.solicitacao.slc_situacao && this.situacoes[this.solicitacao.slc_situacao]) {
                            this.solicitacao.slc_situacao = this.situacoes[this.solicitacao.slc_situacao];
                        }

                        if(this.solicitacao.slc_comentario) {
                            this.solicitacao.slc_comentario = this.solicitacao.slc_comentario.replace(/(?:\r\n|\r|\n)/g, '<br />');
                        }

                        Loading.hide();
                    })
                    .catch((error) => {
                        Loading.hide();
                        alert('Não foi possível carregar o recurso informado.');
                    });
            }
        }
    }
</script>
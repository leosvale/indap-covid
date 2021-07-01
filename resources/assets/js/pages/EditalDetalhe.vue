<template>
    <div class="container">
        <div class="page-header">
            <a class="btn btn-default pull-right" :href="baseUrl('/painel/editais')"><i class="fa fa-chevron-left fa-fw"></i> Voltar</a>
            <h1>Detalhes do Edital</h1>
        </div>

        <div class="panel panel-form">
            <table class="table">
                <colgroup>
                    <col style="width: 220px">
                </colgroup>
                <tbody>
                    <tr>
                        <th style="border-top:0">Data do Acesso:</th>
                        <td style="border-top:0">{{ resource[0].created_at }}</td>
                    </tr>
                    <tr>
                        <th>Nome:</th>
                        <td>{{ resource[0].edital_nome }}</td>
                    </tr>
                    <tr>
                        <th>Email:</th>
                        <td>{{ resource[0].edital_email }}</td>
                    </tr>
                    <tr>
                        <th>Cpf:</th>
                        <td>{{ resource[0].edital_cpf }}</td>
                    </tr>
                    <tr>
                        <th>Telefone:</th>
                        <td>{{ resource[0].edital_telefone }}</td>
                    </tr>
                    <tr>
                        <th>Tipo:</th>
                        <td>{{ tipo_categoria_processo }}</td>
                    </tr>
                    <tr>
                        <th>Mês:</th>
                        <td>{{ mes }}</td>
                    </tr>
                    <tr>
                        <th>Ano:</th>
                        <td>{{ resource[0].edital_ano }}</td>
                    </tr>
                    <tr>
                        <th>Edital:</th>
                        <td>
                            <a :href="baseUrl('/processo/anexo/' + resource[0].edital_DocumentoId) "target="_blank">Edital</a>
                        </td>
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
                edital: {},
                tipo_categoria_processo: {},
                mes: {},
            }
        },
        mounted() {
            Loading.show();
            this.fetch();
        },
        methods: {
            fetch() {
                axios.get('/painel/ajax/tipo-processo/' + this.resource[0].edital_tipo)
                    .then((response) => {
                        this.tipo_categoria_processo = response.data.data.tpr_nome;

                        if(this.resource[0].created_at) {
                            this.resource[0].created_at = moment(this.resource[0].created_at).format('DD/MM/YYYY HH:mm');
                        }

                        if(this.resource[0].edital_mes == 1) {
                            this.mes = "Janeiro";
                        }
                        else if(this.resource[0].edital_mes == 2) {
                            this.mes = "Fevereiro";
                        }
                        else if(this.resource[0].edital_mes == 3) {
                            this.mes = "Março";
                        }
                        else if(this.resource[0].edital_mes == 4) {
                            this.mes = "Abril";
                        }
                        else if(this.resource[0].edital_mes == 5) {
                            this.mes = "Maio";
                        }
                        else if(this.resource[0].edital_mes == 6) {
                            this.mes = "Junho";
                        }
                        else if(this.resource[0].edital_mes == 7) {
                            this.mes = "Julho";
                        }
                        else if(this.resource[0].edital_mes == 8) {
                            this.mes = "Agosto";
                        }
                        else if(this.resource[0].edital_mes == 9) {
                            this.mes = "Setembro";
                        }
                        else if(this.resource[0].edital_mes == 10) {
                            this.mes = "Outubro";
                        }
                        else if(this.resource[0].edital_mes == 11) {
                            this.mes = "Novembro";
                        }
                        else if(this.resource[0].edital_mes == 12) {
                            this.mes = "Dezembro";
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

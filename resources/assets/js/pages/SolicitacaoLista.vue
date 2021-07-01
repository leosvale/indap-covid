<template>
    <div class="container">
        <div class="page-header" style="display: flex; justify-content: space-between; align-items:center">
            <!-- <a class="btn btn-mairi pull-right" :href="baseUrl('/painel/pagina/cadastro?servico=1')">Novo Serviço</a>
            <h1>Serviços <a class="btn btn-default" style="text-transform: initial;" :href="baseUrl('/painel/solicitacoes')">Solicitações</a></h1> -->
            <h1 v-if="esic">E-Sic</h1>
            <h1 v-else>Solicitações</h1>
            <div class="">
                <a class="btn btn-default" :href="baseUrl('/painel/solicitacao/cadastro')">Cadastrar Nova Solicitação</a>
                <a v-if="!esic" class="btn btn-default" :href="baseUrl('/painel/paginas?servico=1')">Listar Serviços</a>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="slc_protocolo">Protocolo</label>
                    <input type="text" id="slc_protocolo" v-model="filters.slc_protocolo" class="form-control">
                </div>
            </div>

            <div class="col-sm-2">
                <div class="form-group">
                    <label for="slc_situacao">Situação</label>
                    <select id="slc_situacao" v-model="filters.slc_situacao" class="form-control">
                        <option value=""></option>
                        <template v-for="(item, index) in situacoes">
                            <option :value="index">{{ item }}</option>
                        </template>
                    </select>
                </div>
            </div>

            <div class="col-xs-2">
                <div class="form-group">
                    <label>&nbsp;</label>
                    <button type="button" class="btn btn-block btn-success" @click="fetch"><i class="fa fa-search"></i> Buscar</button>
                </div>
            </div>
        </div>

        <br>

        <div class="panel panel-form">
            <v-server-table ref="table" :url="`/painel/ajax/solicitacao?esic=${esic ? 1 : 0}`" :columns="columns" :options="options"></v-server-table>
        </div>

    </div>
</template>

<script>
    Vue.component('solicitacao-col-anexos', {
        props: ['data'],
        template: `<i v-bind:class="classObject"></i>`,
        computed: {
            classObject: function () {
                return {
                    fa: true,
                    'fa-circle': this.data.qtd_anexos > 0,
                    'fa-times': this.data.qtd_anexos <= 0,
                    'text-success': this.data.qtd_anexos > 0,
                    'text-muted': this.data.qtd_anexos <= 0,
                }
            }
        }
    });

    Vue.component('solicitacao-col-situacao', {
        props: ['data'],
        template: `<span v-bind:class="classObject">{{ data.slc_situacao }}</span>`,
        computed: {
            classObject: function () {
                return {
                    label: true,
                    'label-situacao': true,
                    'label-default': this.data.slc_situacao_sigla == 'ESP',
                    'label-primary': this.data.slc_situacao_sigla == 'ANA',
                    'label-success': this.data.slc_situacao_sigla == 'CON',
                    'label-danger': this.data.slc_situacao_sigla == 'REJ',
                }
            }
        }
    });

    Vue.component('solicitacao-col-data', {
        props: ['data'],
        template: `<abbr :title="dateFull">{{ dateAbbr }}</abbr>`,
        computed: {
            dateFull: function () {
                return moment(this.data.slc_data_cadastro).format('DD/MM/YYYY HH:mm');
            },
            dateAbbr: function () {
                return moment(this.data.slc_data_cadastro).format('DD/MM/YYYY');
            },
        }
    });

    Vue.component('solicitacao-col-edit', {
        props: ['data'],
        template: `<a :href="baseUrl('/painel/solicitacao/' + data.solicitacao_id + '/detalhes')">Detalhes</a>`,
    });

	export default {
        props: {
            esic: Boolean,
        },
    	data() {
            return {
                situacoes: [],
                filters: {
                    slc_protocolo: "",
                    slc_situacao: "",
                },
                columns: [
                    'slc_protocolo',
                    'slc_titulo',
                    'slc_orgao',
                    'sol_nome',
                    'qtd_anexos',
                    'slc_situacao',
                    'slc_data_cadastro',
                    'edit'
                ],
                options: {
                    skin: 'table-striped table-hover',
                    columnsClasses: {
                        'slc_protocolo': 'col-protocolo',
                        'qtd_anexos': 'col-anexos',
                        'slc_situacao': 'col-situacao',
                        'slc_data_cadastro': 'col-data',
                        'edit': 'col-actions',
                    },
                    headings: {
                        'slc_protocolo': 'Protocolo',
                        'slc_titulo': 'Título',
                        'slc_orgao': 'Orgão/Entidade/Serviço',
                        'sol_nome': 'Enviada por',
                        'qtd_anexos': 'Anexos',
                        'slc_situacao': 'Situação',
                        'slc_data_cadastro': 'Abertura',
                        'edit': '',
                    },
                    texts: this.vueTableTexts(),
                    filterable: false,
                    sortable: [
                        'slc_protocolo',
                        'slc_titulo',
                        'sol_nome',
                        'slc_orgao',
                        'slc_situacao',
                        'slc_data_cadastro',
                    ],
                    orderBy: {
                        ascending: false,
                        column: 'slc_data_cadastro',
                    },
                    templates: {
                        qtd_anexos: 'solicitacao-col-anexos',
                        slc_situacao: 'solicitacao-col-situacao',
                        slc_data_cadastro: 'solicitacao-col-data',
                        edit: 'solicitacao-col-edit',
                    },
                    params: {
                        table: true
                    },
                    responseAdapter: function (resp) {
                        let data = resp.data.items;

                        for (var i in data) {
                            if(data[i].slc_situacao && this.situacoes[data[i].slc_situacao]) {
                                data[i].slc_situacao_sigla = data[i].slc_situacao;
                                data[i].slc_situacao = this.situacoes[data[i].slc_situacao];
                            }
                        }

                        return {
                            data: resp.data.items,
                            count: resp.data.count
                        }
                    }.bind(this)
                }
            }
        },
        mounted() {
            Loading.show();

            axios.get('/ajax/tipo-situacao-solicitacao').then((response) => {
                this.situacoes = response.data.data;
                this.fetch();
                Loading.hide();
            });
        },
        methods: {
            fetch() {
                this.$refs.table.setFilter(JSON.stringify(this.filters));
            }
        }
    }
</script>
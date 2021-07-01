    <template>
    <div class="container">
        <div class="page-header">
            <a class="btn btn-mairi pull-right" :href="baseUrl('/esic/solicitacao/cadastro')">Cadastrar nova</a>
            <h1>Solicitações</h1>
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
                    <label for="slc_data_cadastro">Data de Abertura</label>
                    <input type="text" id="slc_data_cadastro" v-model="filters.slc_data_cadastro" class="form-control" placeholder="__/__/____">
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
            <v-server-table ref="table" url="/esic/ajax/solicitacao" :columns="columns" :options="options"></v-server-table>
        </div>

    </div>
</template>

<script>
    Vue.component('solicitacao-usuario-col-situacao', {
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

    Vue.component('solicitacao-usuario-col-data', {
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

    Vue.component('col-view', {
        props: ['data'],
        template: `<a :href="baseUrl('/esic/solicitacao/' + data.solicitacao_id + '/detalhes')">Detalhes</a>`,
    });

	export default {
    	data() {
            return {
                situacoes: [],
                filters: {
                    slc_protocolo: "",
                    slc_data_cadastro: "",
                    slc_situacao: "",
                },
                columns: [
                    'slc_protocolo',
                    'slc_titulo',
                    'slc_orgao',
                    'slc_situacao',
                    'slc_data_cadastro',
                    'view'
                ],
             	options: {
                    skin: 'table-striped table-hover',
                    columnsClasses: {
                        'slc_protocolo': 'col-protocolo',
                        'slc_situacao': 'col-situacao',
                        'slc_data_cadastro': 'col-data',
                        'view': 'col-actions',
                    },
                    headings: {
                        'slc_protocolo': 'Protocolo',
                        'slc_titulo': 'Título',
                        'slc_orgao': 'Orgão/Entidade/Serviço',
                        'slc_situacao': 'Situação',
                        'slc_data_cadastro': 'Abertura',
                        'view': '',
                    },
                    texts: this.vueTableTexts(),
                    filterable: false,
                    sortable: [
                        'slc_protocolo',
                        'slc_orgao',
                        'slc_data_cadastro',
                        'slc_situacao',
                    ],
                    orderBy: {
                        ascending: false,
                        column: 'slc_data_cadastro',
                    },
                    templates: {
                        slc_situacao: 'solicitacao-usuario-col-situacao',
                        slc_data_cadastro: 'solicitacao-usuario-col-data',
                        view: 'col-view',
                    },
                    params: {
                        table: true,
                    },
             		responseAdapter: function(resp) {
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

    	    $("#slc_data_cadastro").mask('00/00/0000', {clearIfNotMatch: true});

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
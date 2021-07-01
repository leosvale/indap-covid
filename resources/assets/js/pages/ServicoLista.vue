<template>
    <div class="container">
       <div class="page-header" style="display: flex; justify-content: space-between; align-items:center">
            <!-- <a class="btn btn-mairi pull-right" :href="baseUrl('/painel/pagina/cadastro?servico=1')">Novo Serviço</a>
            <h1>Serviços <a class="btn btn-default" style="text-transform: initial;" :href="baseUrl('/painel/solicitacoes')">Solicitações</a></h1> -->
            <h1>Serviços</h1>
            <div class="">
                <a class="btn btn-default" :href="baseUrl('/painel/pagina/cadastro?servico=1')">Cadastrar Novo Serviço</a>
                <a class="btn btn-default" :href="baseUrl('/painel/solicitacoes')">Listar Solicitações</a>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="pub_data_cadastro">Data</label>
                    <input type="date" id="pub_data_cadastro" v-model="filters.pub_data_cadastro" class="form-control">
                </div>
            </div>
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="pub_status">Status</label>
                    <select id="pub_status" v-model="filters.pub_status" class="form-control">
                        <option value=""></option>
                        <template v-for="(item, index) in status">
                            <option :value="index">{{ item }}</option>
                        </template>
                    </select>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="text">Texto</label>
                    <input
                        type="text"
                        id="text"
                        class="form-control"
                        v-model="filters.text"
                    />
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
            <v-server-table ref="table" url="/painel/ajax/pagina?servico=1" :columns="columns" :options="options"></v-server-table>
        </div>

    </div>
</template>

<script>
    Vue.component('col-data', {
        props: ['data'],
        template: `<abbr :title="dateFull">{{ dateAbbr }}</abbr>`,
        computed: {
            dateFull: function () {
                return moment(this.data.pub_data_cadastro).format('DD/MM/YYYY HH:mm');
            },
            dateAbbr: function () {
                return moment(this.data.pub_data_cadastro).format('DD/MM/YYYY');
            },
        }
    });

    Vue.component('col-edit-servico', {
        props: ['data'],
        template: `<a :href="baseUrl('/painel/pagina/' + data.publicacao_id + '/edicao?servico=1')">Editar</a>`,
    });

	export default {
    	data() {
            return {
                status: {
                    'RAS': 'Rascunho',
                    'PUB': 'Publicado',
                },
                filters: {
                    pub_data_cadastro: "",
                    tipo_categoria_publicacao_id: "",
                    pub_status: "",
                    text: "",
                },
                columns: [
                    'pub_titulo',
                    'tipo_servico_nome',
                    'pub_status',
                    'pub_data_cadastro',
                    'edit'
                ],
                options: {
                    skin: 'table-striped table-hover',
                    columnsClasses: {
                        'tipo_servico_nome': 'col-situacao',
                        'pub_status': 'col-situacao',
                        'pub_data_cadastro': 'col-data',
                        'edit': 'col-actions',
                    },
                    headings: {
                        'pub_titulo': 'Título',
                        'tipo_servico_nome': 'Categoria',
                        'pub_status': 'Status',
                        'pub_data_cadastro': 'Data',
                        'edit': '',
                    },
                    texts: this.vueTableTexts(),
                    filterable: false,
                    sortable: [
                        'pub_titulo',
                        'tipo_servico_nome',
                        'pub_status',
                        'pub_data_cadastro'
                    ],
                    orderBy: {
                        ascending: false,
                        column: 'pub_data_cadastro',
                    },
                    templates: {
                        pub_data_cadastro: 'noticia-col-data',
                        edit: 'col-edit-servico',
                    },
                    params: {
                        table: true
                    },
                    responseAdapter: function (resp) {
                        let data = resp.data.items;

                        for (var i in data) {
                            if(data[i].pub_status && this.status[data[i].pub_status]) {
                                data[i].pub_status = this.status[data[i].pub_status];
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
        methods: {
            fetch() {
                this.$refs.table.setFilter(JSON.stringify(this.filters));
            }
        }
    }
</script>

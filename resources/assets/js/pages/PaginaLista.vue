<template>
    <div class="container">
        <div class="page-header" style="display: flex; justify-content: space-between; align-items:center">
            <h1>Páginas</h1>
            <div class="dropdown position-relative">
                <a class="btn btn-mairi dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Cadastrar nova <span class="caret"></span></a>
                <ul class="dropdown-menu">
                    <li><a :href="baseUrl('/painel/pagina/cadastro')">Nova Página</a></li>
                    <li><a :href="baseUrl('/painel/pagina/cadastro?accordion=1')">Nova Lista Sanfona</a></li>
                    <li><a :href="baseUrl('/painel/pagina/cadastro?redirect=1')">Novo Redirecionamento</a></li>
                </ul>
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
            <v-server-table ref="table" url="/painel/ajax/pagina" :columns="columns" :options="options"></v-server-table>
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

    Vue.component('col-edit', {
        props: ['data'],
        template: `<a :href="baseUrl('/painel/pagina/' + data.publicacao_id + '/edicao' + (data.pub_url ? '?redirect=1' : (data.accordion ? '?accordion=1' : '')))">Editar</a>`,
    });

	export default {
    	data() {
            return {
                status: {
                    'RAS': 'Rascunho',
                    'PUB': 'Publicado',
                },
                columns: [
                    'pub_titulo',
                    'pub_ordem_menu',
                    'pub_status',
                    'pub_data_cadastro',
                    'edit'
                ],
                filters: {
                    pub_data_cadastro: "",
                    tipo_categoria_publicacao_id: "",
                    pub_status: "",
                    text: "",
                },
                options: {
                    skin: 'table-striped table-hover',
                    columnsClasses: {
                        'pub_ordem_menu': 'col-situacao',
                        'pub_status': 'col-situacao',
                        'pub_data_cadastro': 'col-data',
                        'edit': 'col-actions',
                    },
                    headings: {
                        'pub_titulo': 'Título',
                        'pub_ordem_menu': 'Ordem',
                        'pub_status': 'Status',
                        'pub_data_cadastro': 'Data',
                        'edit': '',
                    },
                    texts: this.vueTableTexts(),
                    filterable: false,
                    sortable: [
                        'pub_titulo',
                        'pub_ordem_menu',
                        'pub_status',
                        'pub_data_cadastro'
                    ],
                    orderBy: {
                        ascending: false,
                        column: 'pub_data_cadastro',
                    },
                    templates: {
                        pub_data_cadastro: 'noticia-col-data',
                        edit: 'col-edit',
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
        },
    }
</script>

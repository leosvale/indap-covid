<template>
    <div class="container">
        <div class="page-header">
            <a class="btn btn-mairi pull-right" :href="baseUrl('/painel/noticia/cadastro')">Cadastrar nova</a>
            <h1>Notícias e Boletins Informativos</h1>
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
                    <label for="tipo_categoria_publicacao_id">Categoria</label>
                    <select id="tipo_categoria_publicacao_id" v-model="filters.tipo_categoria_publicacao_id" class="form-control">
                        <option value=""></option>
                        <template v-for="item in categorias">
                            <option :value="item.tipo_categoria_publicacao_id">{{ item.tcp_nome }}</option>
                        </template>
                    </select>
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
            <div class="col-sm-2">
                <div class="form-group">
                    <label>Tipo</label>
                    <select class="form-control" id="pub_tipo" v-model="filters.pub_tipo">
                        <option value=""></option>
                        <option value="NOT">Notícia</option>
                        <option value="BOL">Boletim</option>
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
            <v-server-table ref="table" url="/painel/ajax/noticia" :columns="columns" :options="options"></v-server-table>
        </div>

    </div>
</template>

<script>
    Vue.component('noticia-col-categorias', {
        props: ['data'],
        template: '<span>{{ textCategorias }}</span>',
        computed: {
            textCategorias: function () {
                return this.data.categorias.map(function (current) { 
                    return current.tcp_nome;
                })
                .join(", ");
            }
        }
    });

    Vue.component('noticia-col-data', {
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

    Vue.component('noticia-col-edit', {
        props: ['data'],
        template: `<div><a :href="baseUrl('/painel/noticia/' + data.publicacao_id + '/edicao')">Editar</a>&nbsp;&nbsp;
            <a :href="baseUrl('/painel/noticia/' + data.publicacao_id + '/visualizacao')">Ver</a></div>`,
    });

	export default {
    	data() {
            return {
                status: {
                    'RAS': 'Rascunho',
                    'PUB': 'Publicado',
                },
                categorias: [],
                filters: {
                    pub_data_cadastro: "",
                    tipo_categoria_publicacao_id: "",
                    pub_status: "",
                    pub_tipo: "",
                    text: "",
                },
                columns: [
                    'pub_titulo',
                    'categorias',
                    'pub_status',
                    'pub_tipo',
                    'pub_data_cadastro',
                    'edit'
                ],
            	options: {
                    skin: 'table-striped table-hover',
                    columnsClasses: {
                        'pub_data_cadastro': 'col-data',
                        'pub_status': 'col-situacao',
                        'pub_tipo': 'col-tipo',
                        'edit': 'col-actions',
                    },
                    headings: {
                        'pub_titulo': 'Título',
                        'categorias': 'Categorias',
                        'pub_status': 'Status',
                        'pub_tipo': 'Tipo',
                        'pub_data_cadastro': 'Data',
                        'edit': '',
                    },
                    texts: this.vueTableTexts(),
                    filterable: false,
                    sortable: [
                        'pub_titulo',
                        'pub_status',
                        'pub_tipo',
                        'pub_data_cadastro'
                    ],
                    orderBy: { 
                        ascending: false,
                        column: 'pub_data_cadastro',
                    },
                    templates: {
                        categorias: 'noticia-col-categorias',
                        pub_data_cadastro: 'noticia-col-data',
                        edit: 'noticia-col-edit',
                    },
                    params: {
            			table: true
            		},
            		responseAdapter: function(resp) {
                        let data = resp.data.items;

                        for (var i in data) {
                            if(data[i].pub_status && this.status[data[i].pub_status]) {
                                data[i].pub_status = this.status[data[i].pub_status];
                            }
                        }

                        for (var i in data) {
                            if(data[i].pub_tipo && this.status[data[i].pub_tipo]) {
                                data[i].pub_tipo = this.status[data[i].pub_tipo];
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

            axios.get('/painel/ajax/categoria-publicacao').then((response) => {
                this.categorias = response.data.data;
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
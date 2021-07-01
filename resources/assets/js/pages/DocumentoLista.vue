<template>
    <div class="container">
        <div class="page-header">
            <a class="btn btn-mairi pull-right" :href="baseUrl('/painel/processo/cadastro')">Cadastrar novo</a>
            <h1>Processos</h1>
        </div>

        <div class="row">
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="doc_data_cadastro">Ano</label>
                    <select id="doc_data_cadastro" v-model="filters.doc_data_cadastro" class="form-control">
                        <option value=""></option>
                        <template v-for="item in anos">
                            <option :value="item ">{{ item }}</option>
                        </template>
                    </select>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="doc_numero_processo">Número do Processo</label>
                    <input type="text" id="doc_numero_processo" class="form-control" v-model="filters.doc_numero_processo">
                </div>
            </div>
            <div class="col-sm-3">
                <div class="form-group">
                    <label for="tipo_processo_id">Tipo de Processo</label>
                    <select id="tipo_processo_id" v-model="filters.tipo_processo_id" class="form-control">
                        <option value=""></option>
                        <template v-for="item in tipos">
                            <option :value="item.tipo_processo_id">{{ item.tpr_nome }}</option>
                        </template>
                    </select>
                </div>
            </div>
            <!--<div class="col-sm-2">
                <div class="form-group">
                    <label for="tipo_categoria_processo_id">Categoria do Processo</label>
                    <select id="tipo_categoria_processo_id" v-model="filters.tipo_categoria_processo_id" class="form-control">
                        <option value=""></option>
                        <template v-for="item in categorias">
                            <option :value="item.tipo_categoria_processo_id">{{ item.tcp_nome }}</option>
                        </template>
                    </select>
                </div>
            </div>-->
            <div class="col-sm-2">
                <div class="form-group">
                    <label>&nbsp;</label>
                    <button type="button" class="btn btn-block btn-success" @click="fetch"><i class="fa fa-search"></i> Buscar</button>
                </div>
            </div>
        </div>

        <br>

        <div class="panel panel-form">
            <v-server-table ref="table" url="/painel/ajax/documento" :columns="columns" :options="options"></v-server-table>
        </div>

    </div>
</template>

<script>
    Vue.component('documento-col-edit', {
        props: ['data'],
        template: `<a :href="baseUrl('/painel/processo/' + data.documento_id + '/edicao')">Editar</a>`,
    });

	export default {
    	data() {
            return {
                anos: [],
                tipos: [],
                categorias: [],
                filters: {
                    doc_data_cadastro: "",
                    doc_numero_processo: "",
                    tipo_processo_id: "",
                    //tipo_categoria_processo_id: "",
                },
                columns: [
                    'doc_data_cadastro',
                    'doc_numero_processo',
                    'tpr_nome',
                    //'tcp_nome',
                    'edit'
                ],
            	options: {
                    skin: 'table-striped table-hover',
                    columnsClasses: {
                        'tpr_nome': 'col-tipo',
                        //'tcp_nome': 'col-tipo',
                        'doc_data_cadastro': 'col-data',
                        'edit': 'col-actions',
                    },
                    headings: {
                        'doc_data_cadastro': 'Data',
                        'doc_numero_processo': 'Número do Processo',
                        'tpr_nome': 'Tipo de Processo',
                        //'tcp_nome': 'Categoria do Processo',
                        'edit': '',
                    },
                    texts: this.vueTableTexts(),
                    filterable: false,
                    sortable: [
                        'doc_data_cadastro',
                        'doc_numero_processo',
                        'tpr_nome',
                        //'tcp_nome',
                        'doc_data_cadastro'
                    ],
                    orderBy: { 
                        ascending: false,
                        column: 'doc_data_cadastro',
                    },
                    templates: {
                        edit: 'documento-col-edit',
                    },
                    params: {
            			table: true
            		},
            		responseAdapter: function(resp) {
                        let data = resp.data.items;

                        for (var i in data) {
                            if(data[i].doc_data_cadastro) {
                                data[i].doc_data_cadastro = moment(data[i].doc_data_cadastro).format('DD/MM/YYYY');
                            }
                        }

            			return { 
            				data: resp.data.items,
            				count: resp.data.count
        				}
            		}
            	}
            }
        },
        mounted() {
            Loading.show();

            const current_year = parseInt(moment().format('YYYY'));

            for (var i = current_year; i >= 2010; i--) {
                this.anos.push(i);
            }

            axios.all([ axios.get('/painel/ajax/tipo-processo'), axios.get('/painel/ajax/categoria-processo') ])
                .then(axios.spread((respTipos, respCategorias) => {
                    this.tipos = respTipos.data.data;
                    this.categorias = respCategorias.data.data;
                    Loading.hide();
                }));
        },
        methods: {
            fetch() {
                this.$refs.table.setFilter(JSON.stringify(this.filters));
            }
        }
    }
</script>
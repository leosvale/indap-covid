<template>
    <div class="container">
        <div class="page-header">
            <h1>Ouvidoria</h1>
        </div>

        <br>

        <div class="panel panel-form">
            <v-server-table ref="table" url="/painel/ajax/contato" :columns="columns" :options="options"></v-server-table>
        </div>

    </div>
</template>

<script>
    Vue.component('ouvidoria-col-data', {
        props: ['data'],
        template: `<abbr :title="dateFull">{{ dateAbbr }}</abbr>`,
        computed: {
            dateFull: function () {
                return moment(this.data.ctt_data_cadastro).format('DD/MM/YYYY HH:mm');
            },
            dateAbbr: function () {
                return moment(this.data.ctt_data_cadastro).format('DD/MM/YYYY');
            },
        }
    });

    Vue.component('ouvidoria-col-sigiloso', {
        props: ['data'],
        template: `<i v-bind:class="classObject"></i>`,
        computed: {
            classObject: function () {
                return {
                    fa: true,
                    'fa-check': this.data.ctt_sigiloso == 'S',
                    'text-muted': this.data.ctt_sigiloso == 'S',
                }
            }
        }
    });

    Vue.component('ouvidoria-col-protocolo', {
        props: ['data'],
        template: `<span>{{ formatted }}</span>`,
        computed: {
            formatted: function () {
                if(this.data.protocolo) {
                    return this.data.protocolo;
                }
                return '';
            }
        }
    });

    Vue.component('ouvidoria-col-edit', {
        props: ['data'],
        template: `<a :href="baseUrl('/painel/ouvidoria/' + data.contato_id + '/detalhes')">Detalhes</a>`,
    });

	export default {
    	data() {
            return {
                columns: [
                    'ctt_data_cadastro',
                    'ctt_nome',
                    'ctt_sigiloso',
                    'protocolo',
                    'ctt_email',
                    'edit'
                ],
                options: {
                    skin: 'table-striped table-hover',
                    columnsClasses: {
                        'ctt_data_cadastro': 'col-data',
                        'protocolo': 'col-situacao',
                        'ctt_sigiloso': 'col-anexos',
                        'edit': 'col-actions',
                    },
                    headings: {
                        'ctt_data_cadastro': 'Data',
                        'ctt_nome': 'Nome',
                        'protocolo': 'Protocolo',
                        'ctt_email': 'E-mail',
                        'ctt_sigiloso': 'Sigiloso',
                        'edit': '',
                    },
                    texts: this.vueTableTexts(),
                    filterable: false,
                    sortable: [
                        'ctt_data_cadastro',
                        'ctt_nome',
                        'ctt_sigiloso'
                    ],
                    orderBy: {
                        ascending: false,
                        column: 'ctt_data_cadastro',
                    },
                    templates: {
                        ctt_data_cadastro: 'ouvidoria-col-data',
                        ctt_sigiloso: 'ouvidoria-col-sigiloso',
                        protocolo: 'ouvidoria-col-protocolo',
                        edit: 'ouvidoria-col-edit',
                    },
                    params: {
                        table: true
                    },
                    responseAdapter: function (resp) {
                        return {
                            data: resp.data.items,
                            count: resp.data.count
                        }
                    }
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
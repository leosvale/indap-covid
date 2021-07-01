<template>
    <div class="container">
        <div class="page-header">
            <h1>Relatório Público de Atendimento</h1>
        </div>

        <p>
            Acessibilidade significa o direito de acesso e utilização por todos a serviços, produtos e informação,
            independente de possuírem qualquer tipo de deficiência ou limitações. Este direito se estende a todos os
            aspectos sociais.
        </p>

        <br>

        <div class="row">
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="data_inicial">Data Inicial</label>
                    <input type="date" id="data_inicial" class="form-control" v-model="filters.data_inicial">
                </div>
            </div>
            <div class="col-sm-2">
                <div class="form-group">
                    <label for="data_final">Data Final</label>
                    <input type="date" id="data_final" class="form-control" v-model="filters.data_final">
                </div>
            </div>
            <div class="col-sm-2 hidden-print">
                <div class="form-group">
                    <label>&nbsp;</label>
                    <button type="button" class="btn btn-block btn-success" @click="fetch">Gerar Relatório</button>
                </div>
            </div>
            <div class="col-sm-2 hidden-print" v-show="tableVisible">
                <div class="form-group">
                    <label>&nbsp;</label>
                    <button type="button" class="btn btn-block btn-mairi" @click="print">Imprimir</button>
                </div>
            </div>
        </div>

        <br>

        <div class="panel panel-form" v-show="tableVisible">
            <v-server-table id="table-relatorio" ref="table" url="/ajax/relatorio" :columns="columns" :options="options" @loaded="onLoaded"></v-server-table>
        </div>
    </div>
</template>

<script>
    import FormControl from '../components/FormControl.vue'

    export default {
        data() {
            return {
                showTable: false,
                tableVisible: false,
                filters: {
                    data_inicial: moment().format('YYYY-01-01'),
                    data_final: moment().format('YYYY-MM-DD'),
                    //formato: "T",
                },
                columns: [
                    'tipo',
                    'quantidade',
                    'concluidas',
                    'rejeitadas',
                    'pes_fisica',
                    'pes_juridica',
                    'residente',
                    'nao_residente',
                ],
                options: {
                    skin: 'table-hover',
                    columnsClasses: {
                        'tipo': 'col-tipo',
                        'quantidade': 'col-tipo text-center',
                        'concluidas': 'col-tipo text-center',
                        'rejeitadas': 'col-tipo text-center',
                        'pes_fisica': 'col-tipo text-center',
                        'pes_juridica': 'col-tipo text-center',
                        'residente': 'col-tipo text-center',
                        'nao_residente': 'col-tipo text-center',
                    },
                    headings: {
                        'tipo': 'Tipo',
                        'quantidade': 'Recebidas',
                        'concluidas': 'Atendidas',
                        'rejeitadas': 'Rejeitadas',
                        'pes_fisica': 'Pes. Fís.',
                        'pes_juridica': 'Pes. Jur.',
                        'residente': 'Residente',
                        'nao_residente': 'Não Residente',
                    },
                    texts: this.vueTableTexts(),
                    filterable: true,
                    responseAdapter: function(resp) {
                        return {
                            data: resp.data,
                            count: resp.data.length
                        }
                    }
                }
            }
        },
        components: {
            FormControl
        },
        mounted() {

        },
        methods: {
            fetch() {
                this.showTable = true;
                this.$refs.table.setFilter(JSON.stringify(this.filters));
            },
            print() {
                window.print();
            },
            onLoaded() {
                if(this.showTable) {
                    this.tableVisible = true;
                }
            }
        }
    }
</script>
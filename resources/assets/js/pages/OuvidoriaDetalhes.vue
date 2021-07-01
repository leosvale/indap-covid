<template>
    <div class="container">
        <div class="page-header">
            <a class="btn btn-default pull-right" :href="baseUrl('/painel/ouvidoria')"><i class="fa fa-chevron-left fa-fw"></i> Voltar</a>
            <h1>Detalhes do Contato</h1>
        </div>

        <div class="panel panel-form">
            <table class="table">
                <colgroup>
                    <col style="width: 220px">
                </colgroup>
                <tbody>
                    <tr>
                        <th style="border-top:0">Data:</th>
                        <td style="border-top:0">{{ contato.ctt_data_cadastro }}</td>
                    </tr>
                    <tr>
                        <th>Tipo de Contato:</th>
                        <td>{{ contato.tco_nome }}</td>
                    </tr>
                    <tr>
                        <th>Sigiloso:</th>
                        <td>{{ contato.ctt_sigiloso }}</td>
                    </tr>
                    <tr>
                        <th>Nome:</th>
                        <td>{{ contato.ctt_nome }}</td>
                    </tr>
                    <tr>
                        <th>CPF/CNPJ:</th>
                        <td>{{ contato.ctt_cpf_cnpj }}</td>
                    </tr>
                    <tr>
                        <th>Endereço:</th>
                        <td>{{ contato.ctt_endereco }}</td>
                    </tr>
                    <tr>
                        <th>Telefone:</th>
                        <td>{{ contato.ctt_telefone }}</td>
                    </tr>
                    <tr>
                        <th>E-mail:</th>
                        <td>{{ contato.ctt_email }}</td>
                    </tr>
                    <tr>
                        <th>Protocolo:</th>
                        <td>{{ contato.protocolo }}</td>
                    </tr>
                    <tr>
                        <th>Mensagem:</th>
                        <td><pre>{{ contato.ctt_mensagem }}</pre></td>
                    </tr>
                    <tr>
                        <th>Anexos:</th>
                        <td>
                            <ul class="list-unstyled">
                                <template v-for="item in contato.anexos">
                                    <li><a :href="baseUrl('/painel/ouvidoria/anexo/' + item.anexo_id)" target="_blank">{{ item.ane_nome }}</a></li>
                                </template>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="panel panel-form" v-if="this.respostas[0] != null">
            <div class="panel-body">
                <h1 v-if="this.respostas.length > 1" >Respostas:</h1>
                <h1 v-if="this.respostas.length == 1" >Resposta:</h1>
                <div v-for="(resposta, indice) in respostas" :key="resposta.assunto">
                    <table class="table">
                        <colgroup>
                            <col style="width: 220px">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>Assunto:</th>
                                <td>{{ resposta.assunto }}</td>
                            </tr>
                            <tr>
                                <th>Mensagem:</th>
                                <td><pre>{{ resposta.mensagem }}</pre></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


        <div class="panel panel-form">
            <div class="panel-body">

                <form role="form" accept-charset="UTF-8" @submit.prevent="formSubmit"  enctype="multipart/form-data">

                    <label for="mensagem">Responder</label>

                    <form-control :erro="errors.assunto">
                        <input type="text" name="assunto" id="assunto" class="form-control" v-model="assunto" placeholder="Assunto" required="">
                    </form-control>



                    <form-control :error="errors.mensagem">
                        <textarea id="mensagem" name="mensagem" class="form-control" rows="5" v-model="mensagem"></textarea required> 
                    </form-control>

                    <div class="panel panel-form">
                          <table class="table">
                            <thead>
                                <tr>
                                    <td><strong>Anexos</strong></td>
                                </tr>
                            </thead>
                            <tbody>
                            <tr v-for="attachment in attachments">
                                <td>
                                    <p class="form-control-static"><a :href="baseUrl('/painel/pagina/exibir/anexo/' + attachment.pub_anexo_id)" target="_blank">{{ attachment.pub_anexo_nome }}</a></p>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger pull-right" @click="removeAttachment(attachment.pub_anexo_id)">
                                        <i class="fa fa-trash"></i> Excluir
                                    </button>
                                </td>
                            </tr>
                                <tr v-for="(row, index) in rows">
                                    <td>
                                        <label class="fileContainer">
                                        <input type="file" @change="setFilename($event, row)" :id="index" style="display: none">
                                            <a>{{row.file.name}}</a>
                                        </label>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-danger pull-right" @click="removeElement(index)">
                                            <i class="fa fa-trash"></i> Excluir
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                          <a class="btn btn-success"  @click="addRow">Adicionar Anexo</a>

                    </div>

                    <button type="submit" class="btn btn-primary pull-right" ref="submit" disabled>
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
    pre {
       white-space: pre-wrap;       /* Since CSS 2.1 */
       white-space: -moz-pre-wrap;  /* Mozilla */
       white-space: -pre-wrap;      /* Opera 4-6 */
       white-space: -o-pre-wrap;    /* Opera 7 */
       word-wrap: break-word;       /* Internet Explorer */
    }
</style>

<script>
    import FormControl from '../components/FormControl.vue'

    export default {
        props: ['resource'],
    	data() {
            return {
                contato: {},
                respostas: {},
                mensagem: '',
                assunto: '',
                errors: {},
                files: [],
                rows: [],
                attachments: []
            }
        },
        components: {
            FormControl
        },
        mounted() {
            Loading.show();
            this.fetch();
        },
        methods: {
            fetch() {

                $(this.$refs.submit).prop("disabled", false);

                axios.get('/painel/ajax/contato/' + this.resource)
                    .then((response) => {
                        this.contato = response.data.data;

                        if(this.contato.ctt_data_cadastro) {
                            this.contato.ctt_data_cadastro = moment(this.contato.ctt_data_cadastro).format('DD/MM/YYYY HH:mm');
                        }

                        if(this.contato.ctt_sigiloso == 'S') {
                            this.contato.ctt_sigiloso = 'SIM';
                        }
                        else if(this.contato.ctt_sigiloso == 'N') {
                            this.contato.ctt_sigiloso = 'NÃO';
                        }

                        Loading.hide();
                    })
                    .catch((error) => {
                        Loading.hide();
                        alert('Não foi possível carregar o recurso informado.');
                    });


                    axios.get('/painel/ajax/resposta_contato/' + this.resource)
                    .then((response) => {
                        console.log(response.data.data)
                        this.respostas = response.data.data;
                    })
                    .catch((error) => {
                        Loading.hide();
                        alert('Não foi possível carregar o recurso informado.');
                    });

            },
            formSubmit() {

                var vm = this;
                this.errors = {};

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                let formData = new FormData();
                formData.append('mensagem', this.mensagem);
                formData.append('assunto', this.assunto);
                formData.append('contato', this.resource);

                for( var i = 0; i < this.files.length; i++ ){
                  let file = this.files[i];
                  formData.append('files' + i, file);
                }

                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }

                axios.post('painel/ajax/email/contato/submit', formData, config)
                .then((response) => {

                    console.log(response);
                    console.log('saved successfully');

                    Loading.hide();

                    alert("Email enviado com sucesso!!!");
                    window.location.reload();

                })
                .catch((error) => {
                    if(error.response) {
                        if(error.response.status == 422) {
                            vm.errors = error.response.data.data;
                        }
                        else {
                            const msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação. 1";
                            alert(msg);
                        }
                    }
                    else {
                        console.log(error);
                        alert("Ocorreu um erro ao tentar processar sua solicitação. 2");
                    }

                    Loading.hide();
                });
              
            },
            addRow() {
                    var elem = document.createElement('tr');
                    this.rows.push({
                        file: {
                            name: 'Selecionar Arquivo'
                        }
                    });
            },
            removeElement: function(index) {
                this.rows.splice(index, 1);
                this.files.splice(index, 1);
            },
            setFilename: function(event, row) {
                var file = event.target.files[0];

                if (file.size > 10000 * 10000) {
                  event.preventDefault();
                  alert('Arquivo muito grande.');
                  return;
                }
                else{
                  row.file = file;
                  this.files.push(file);
                }

            },
            removeAttachment(id) {
                if (!confirm('Tem certeza que deseja remover o anexo?')) return;

                var vm = this;
                Loading.show();

                axios.post('painel/pagina/ajax/anexo/remover/' + id, { _method: 'DELETE' })
                    .then((response) => {
                        window.location.reload();
                    })
                    .catch((error) => {
                        if(error.response) {
                            const msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                            alert(msg);
                        }
                        else {
                            alert("Ocorreu um erro ao tentar processar sua solicitação.");
                        }

                        Loading.hide();
                    });
            }
        }
    }
</script>
<template>
    <div class="container">
        <div class="page-header">
            <button type="button" class="btn btn-mairi pull-right" data-toggle="modal" data-target="#modalCadastro">
                Cadastrar usuário
            </button>
            <h1>Usuários</h1>
        </div>

        <br>

        <div class="panel panel-form">
            <v-server-table ref="table" url="/painel/ajax/configuracao/usuario" :columns="columns" :options="options"></v-server-table>
        </div>

        <div class="modal fade" id="modalCadastro" tabindex="-1" role="dialog" aria-labelledby="modalCadastroLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="modalCadastroLabel">Cadastrar Usuário</h4>
                    </div>

                    <div class="modal-body">
                        <form role="form" accept-charset="UTF-8" @submit.prevent="save">
                            <form-control :error="errors.usu_login">
                                <label for="usu_login">E-mail *</label>
                                <input type="email" id="usu_login" class="form-control" autocomplete="off" v-model="usuario.usu_login">
                            </form-control>

                            <form-control :error="errors.usu_login_confirmacao">
                                <label for="usu_login_confirmacao">Confirme o e-mail *</label>
                                <input type="email" id="usu_login_confirmacao" class="form-control" autocomplete="off" v-model="usuario.usu_login_confirmacao">
                            </form-control>


                            <form-control :error="errors.privilegios">
                                <label for="privilegios">Nível de Acesso * (Selecionar apenas o acesso específico para  o usuário)</label>

                                <div class="row">
                                    <div class="col-sm-4">
                                        <label>
                                            <input type="checkbox" :checked="isAllSelected" @click="selectAllprivilegios"> Selecionar Todos
                                        </label>
                                    </div>
                                </div>

                                <div class="row">
                                      <div class="col-sm-4">
                                        <label><input type="checkbox" :checked="isAllSelected" v-model="selectedPrivilegios" :value="privilegios[0]" @click="select" >{{ privilegios[0] }}</label>
                                      </div>
                                      <div class="col-sm-4">
                                          <label><input type="checkbox" :checked="isAllSelected" v-model="selectedPrivilegios" :value="privilegios[1]" @click="select">{{ privilegios[1] }}</label>
                                      </div>
                                      <div class="col-sm-4">
                                          <label><input type="checkbox" :checked="isAllSelected" v-model="selectedPrivilegios" :value="privilegios[2]" @click="select">{{ privilegios[2] }}</label>
                                      </div>
                                </div>

                                <div class="row">
                                      <div class="col-sm-4">
                                        <label><input type="checkbox" :checked="isAllSelected" v-model="selectedPrivilegios" :value="privilegios[3]" @click="select">{{ privilegios[3] }}</label>
                                      </div>
                                      <div class="col-sm-4">
                                          <label><input type="checkbox" :checked="isAllSelected" v-model="selectedPrivilegios" :value="privilegios[4]" @click="select">{{ privilegios[4] }}</label>
                                      </div>
                                      <div class="col-sm-4">
                                          <label><input type="checkbox" :checked="isAllSelected" v-model="selectedPrivilegios" :value="privilegios[5]" @click="select">{{ privilegios[5] }}</label>
                                      </div>
                                </div>

                                <div class="row">
                                      <div class="col-sm-4">
                                        <label><input type="checkbox" :checked="isAllSelected" v-model="selectedPrivilegios" :value="privilegios[6]" @click="select">{{ privilegios[6] }}</label>
                                      </div>
                                </div>                         
                            </form-control>

                            <div class="form-group">
                                <p class="text-muted">
                                    <i class="fa fa-info-circle fa-fw"></i> A senha do usuário será gerada
                                    automaticamente pelo sistema e enviada para o e-mail cadastrado.
                                </p>
                            </div>

                            <button type="submit" class="btn btn-primary" ref="submit">Salvar</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!------------------------------------------------------------------------>
        <!------------------------------ MODAL EDITAR ---------------------------->
        <!------------------------------------------- ---------------------------->
        <div class="modal fade" id="modalEditarUsuario" tabindex="-1" role="dialog" aria-labelledby="modalCadastroLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="modalCadastroLabel">Editar Usuário <span id="user_login"></span></h4>
                    </div>

                    <div class="modal-body">
                        <span id="user_id" style="display: none;"></span>
                        <form role="form" accept-charset="UTF-8" @submit.prevent="edit_usuario">
                            
                            <form-control :error="errors.privilegios">
                                <label for="privilegios">Nível de Acesso * (Selecionar apenas o acesso específico para  o usuário)</label>

                                <div class="row">
                                    <div class="col-sm-4">
                                        <label>
                                            <input type="checkbox" id="privilegiosAllModalEditar" @click="selectAllModalEditar"> Selecionar Todos
                                        </label>
                                    </div>
                                </div>

                                <div class="row">
                                      <div class="col-sm-4">
                                        <label><input type="checkbox" value="privilegios[0]" id="privilegios[0]" >{{ privilegios[0] }}</label>
                                      </div>
                                      <div class="col-sm-4">
                                          <label><input type="checkbox" value="privilegios[1]" id="privilegios[1]">{{ privilegios[1] }}</label>
                                      </div>
                                      <div class="col-sm-4">
                                          <label><input type="checkbox" value="privilegios[2]" id="privilegios[2]">{{ privilegios[2] }}</label>
                                      </div>
                                </div>

                                <div class="row">
                                      <div class="col-sm-4">
                                        <label><input type="checkbox" value="privilegios[3]" id="privilegios[3]">{{ privilegios[3] }}</label>
                                      </div>
                                      <div class="col-sm-4">
                                          <label><input type="checkbox" value="privilegios[4]" id="privilegios[4]">{{ privilegios[4] }}</label>
                                      </div>
                                      <div class="col-sm-4">
                                          <label><input type="checkbox" value="privilegios[5]" id="privilegios[5]">{{ privilegios[5] }}</label>
                                      </div>
                                </div>

                                <div class="row">
                                      <div class="col-sm-4">
                                        <label><input type="checkbox" value="privilegios[6]" id="privilegios[6]">{{ privilegios[6] }}</label>
                                      </div>
                                </div>                         
                            </form-control>

                            <div class="form-group">
                                <p class="text-muted">
                                    <i class="fa fa-info-circle fa-fw"></i> A senha do usuário será gerada
                                    automaticamente pelo sistema e enviada para o e-mail cadastrado.
                                </p>
                            </div>

                            

                            <button type="submit" class="btn btn-primary" ref="submit">Salvar</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import FormControl from '../components/FormControl.vue'

    Vue.component('usuario-col-data', {
        props: ['data'],
        template: `<abbr :title="dateFull">{{ dateAbbr }}</abbr>`,
        computed: {
            dateFull: function () {
                return moment(this.data.usu_data_cadastro).format('DD/MM/YYYY HH:mm');
            },
            dateAbbr: function () {
                return moment(this.data.usu_data_cadastro).format('DD/MM/YYYY');
            },
        }
    });

    Vue.component('usuario-col-excluir', {
        props: ['data'],
        template: `<a href="#" class="text-danger btn-remove" @click="remove(data.usuario_id)">Excluir</a>`,
        methods: {
            remove(id) {
                if (!confirm('Tem certeza que deseja remover o usuário '+ this.data.usu_login +'?')) return;

                var vm = this;
                Loading.show();

                axios.post('painel/ajax/configuracao/usuario/' + this.data.usuario_id, { _method: 'DELETE' })
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
    });

    Vue.component('usuario-col-edit', {
        props: ['data'],
        template: `<a href="#" class="text-primary" data-toggle="modal" data-target="#modalEditarUsuario" @click="edit(data.usuario_id, data.usu_login)">Editar</a>`,
        methods: {
            edit(id, login) {
                document.getElementById('user_id').innerHTML=id;
                document.getElementById('user_login').innerHTML=login;
                
                axios.get('/painel/ajax/usuario/' + id)
                    .then((response) => {

                        if(response.data.data.privilegio_licitacoes)
                            document.getElementById("privilegios[0]").checked = true;
                        else
                            document.getElementById("privilegios[0]").checked = false;

                        if(response.data.data.privilegio_noticias)
                            document.getElementById("privilegios[1]").checked = true;
                        else
                            document.getElementById("privilegios[1]").checked = false;

                        if(response.data.data.privilegio_servicos)
                            document.getElementById("privilegios[2]").checked = true;
                        else
                            document.getElementById("privilegios[2]").checked = false;

                        if(response.data.data.privilegio_informacao)
                            document.getElementById("privilegios[3]").checked = true;
                        else
                            document.getElementById("privilegios[3]").checked = false;

                        if(response.data.data.privilegio_editais)
                            document.getElementById("privilegios[4]").checked = true;
                        else
                            document.getElementById("privilegios[4]").checked = false;

                        if(response.data.data.privilegio_esic)
                            document.getElementById("privilegios[5]").checked = true;
                        else
                            document.getElementById("privilegios[5]").checked = false;

                        if(response.data.data.privilegio_ouvidoria)
                            document.getElementById("privilegios[6]").checked = true;
                        else
                            document.getElementById("privilegios[6]").checked = false;
                    })
                    .catch((error) => {
                        Loading.hide();
                        alert('Não foi possível carregar o recurso informado.');
                    });
            }
        }
    });

	export default {
    	data() {
            return {
                privilegios: [
                     ' Licitações e contratos',
                     ' Notícias',
                     ' Serviços',
                     ' Acesso à informação',
                     ' Editais',
                     ' E-sic', 
                     ' Ouvidoria'
                ],
                isAllSelected: false,
                selectedPrivilegios: [],
                situacoes: {
                    'A': 'Ativo',
                    'P': 'Pendente',
                },
                usuario: {
                    usu_login: "",
                    usu_login_confirmacao: "",
                },
                errors: {},
                columns: [
                    'usu_login',
                    //'usu_situacao_cadastro',
                    'usu_data_cadastro',
                    'edit',
                    'excluir'
                ],
                options: {
                    skin: 'table-striped table-hover',
                    columnsClasses: {
                        'usu_login': '',
                        //'usu_situacao_cadastro': 'col-situacao',
                        'usu_data_cadastro': 'col-data',
                        'edit': 'col-actions',
                        'excluir': 'col-actions',
                    },
                    headings: {
                        'usu_login': 'Login',
                        //'usu_situacao_cadastro': 'Situação',
                        'usu_data_cadastro': 'Data',
                        'edit': '',
                    },
                    texts: this.vueTableTexts(),
                    filterable: false,
                    sortable: [
                        'usu_login',
                        //'usu_situacao_cadastro',
                        'usu_data_cadastro'
                    ],
                    orderBy: {
                        ascending: true,
                        column: 'usu_login',
                    },
                    templates: {
                        usu_data_cadastro: 'usuario-col-data',
                        edit: 'usuario-col-edit',
                        excluir: 'usuario-col-excluir',
                    },
                    params: {
                        table: true
                    },
                    responseAdapter: function (resp) {
//                        let data = resp.data.items;
//
//                        for (var i in data) {
//                            if(data[i].pub_status && this.status[data[i].pub_status]) {
//                                data[i].pub_status = this.status[data[i].pub_status];
//                            }
//                        }

                        return {
                            data: resp.data.items,
                            count: resp.data.count
                        }
                    }.bind(this)
                }
            }
        },
        components: {
            FormControl
        },
        mounted() {
            // Impedir copiar/colar nos campos de confirmação
            $("#usu_login_confirmacao").bind("cut copy paste",function(e) {
                e.preventDefault();
            });
        },
        methods: {
            selectAllModalEditar(){

                if (document.getElementById("privilegiosAllModalEditar").checked) {
                    document.getElementById("privilegios[0]").checked = true;
                    document.getElementById("privilegios[1]").checked = true;
                    document.getElementById("privilegios[2]").checked = true;
                    document.getElementById("privilegios[3]").checked = true;
                    document.getElementById("privilegios[4]").checked = true;
                    document.getElementById("privilegios[5]").checked = true;
                    document.getElementById("privilegios[6]").checked = true;

              } else {

                    document.getElementById("privilegios[0]").checked = false;
                    document.getElementById("privilegios[1]").checked = false;
                    document.getElementById("privilegios[2]").checked = false;
                    document.getElementById("privilegios[3]").checked = false;
                    document.getElementById("privilegios[4]").checked = false;
                    document.getElementById("privilegios[5]").checked = false;
                    document.getElementById("privilegios[6]").checked = false;
              }

            },
            selectAllprivilegios () {
              if (this.isAllSelected) {

                this.selectedPrivilegios = []
                this.isAllSelected = false

              } else {

                this.selectedPrivilegios = []

                for (var privilegio in this.privilegios) {
                  this.selectedPrivilegios.push(this.privilegios[privilegio])
                }

                this.isAllSelected = true
              }
            },
            select () {
              if (this.selectedPrivilegios.length !== this.privilegios.length) {
                this.isAllSelected = false
              } else {
                this.isAllSelected = true
              }
            },
            fetch() {
                this.$refs.table.setFilter(JSON.stringify(this.filters));
            },
            edit_usuario(){

                var vm = this;
                this.errors = {};
                
                var id = document.getElementById('user_id').innerHTML;

                let formData = new FormData();

                for( var i = 0; i < 7; i++ ){
                  let privilegio = this.privilegios[i];
                  if(document.getElementById('privilegios[' + i + ']').checked)
                    formData.append('privilegios[' + i + ']', privilegio);
                }

                var promise = axios({
                    method: 'post',
                    url: '/painel/ajax/editar/usuario/' + id,
                    data: formData,
                });

                promise
                    .then((response) => {
                        this.fetch();
                        $("#modalEditarUsuario").modal('hide');

                        Loading.hide();
                        $(this.$refs.submit).prop("disabled", false);

                        this.usuario.usu_login = "";
                        this.usuario.usu_login_confirmacao = "";
                        window.location.reload();
                    })
                    .catch((error) => {
                        if(error.response) {
                            if(error.response.status == 422) {
                                vm.errors = error.response.data.data;
                            }
                            else {
                                const msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                                alert(msg);
                            }
                        }
                        else {
                            alert("Ocorreu um erro ao tentar processar sua solicitação.");
                        }

                        Loading.hide();
                        $(this.$refs.submit).prop("disabled", false);
                    });
            },
            save() {
                var vm = this;
                this.errors = {};

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                let formData = new FormData();
                formData.append('usu_login', this.usuario.usu_login);
                formData.append('usu_login_confirmacao', this.usuario.usu_login_confirmacao);

                for( var i = 0; i < this.selectedPrivilegios.length; i++ ){
                  let privilegio = this.selectedPrivilegios[i];
                  formData.append('privilegios[' + i + ']', privilegio);
                }

                var promise = axios({
                    method: 'post',
                    url: '/painel/ajax/configuracao/usuario',
                    data: formData,
                });

                promise
                    .then((response) => {
                        this.fetch();
                        $("#modalCadastro").modal('hide');

                        Loading.hide();
                        $(this.$refs.submit).prop("disabled", false);

                        this.usuario.usu_login = "";
                        this.usuario.usu_login_confirmacao = "";
                        window.location.reload();
                    })
                    .catch((error) => {
                        if(error.response) {
                            if(error.response.status == 422) {
                                vm.errors = error.response.data.data;
                            }
                            else {
                                const msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                                alert(msg);
                            }
                        }
                        else {
                            alert("Ocorreu um erro ao tentar processar sua solicitação.");
                        }

                        Loading.hide();
                        $(this.$refs.submit).prop("disabled", false);
                    });
            },
        },
        watch: {
            'usuario.usu_login': function(value) {
                this.usuario.usu_login = value.toLowerCase();
            },
            'usuario.usu_login_confirmacao': function(value) {
                this.usuario.usu_login_confirmacao = value.toLowerCase();
            }
        }
    }
</script>
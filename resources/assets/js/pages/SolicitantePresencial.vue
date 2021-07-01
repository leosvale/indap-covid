<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h4>Requerimento Presencial - SIC</h4>
                <p>
                    1-Para fazer um requerimento presencial, dirija-se à Sede da Câmara ou Prefeitura e preencha o formulário que será fornecido pelo servidor(a) responsável.<br>
					2- Para sua comodidade, este formulário se
encontra também disponível no link:
                    <a :href="baseUrl('/esic/download')">Download do Formulário</a><br><br>


					3-Entregue o formulário preenchido ao servidor responsável para ele possa inserir as informações no sistema e gerar o seu n° de protocolo;<br><br>
					4-Para acompanhar o andamento de seu pedido entre em contato pelo telefone, ou dirija-se a sede da Prefeitura e informe seu nº de protocolo;<br><br>
					5-O SIC funciona de segunda a sexta-feira das 08:00 às 12:00.  <br><br>
          <!--
                    6-N�mero para contato (75) 3254-1394 / 3254-1788
          -->
          Número para contato {{ configuracao.telefone_primario }} / {{ configuracao.telefone_secundario }}
                </p>

            </div>
            <div class="col-md-6">
                <div class="panel panel-form">
                    <div class="panel-heading">
                        <h3 class="panel-title">Acesso ao E-Sic</h3>
                    </div>
                    <div class="panel-body">
                        <div class="alert alert-danger" role="alert" v-show="errorMsg">{{ errorMsg }}</div>

                        <form role="form" accept-charset="UTF-8" @submit.prevent="login">
                            <form-control :error="errors.usu_login">
                                <label for="usu_login">Login</label>
                                <input type="text" id="usu_login" class="form-control" v-model="usuario.usu_login">
                            </form-control>

                            <form-control :error="errors.usu_senha">
                                <label for="usu_senha">Senha</label>
                                <input type="password" id="usu_senha" class="form-control" v-model="usuario.usu_senha">
                            </form-control>

                            <div class="form-group">
                                <a :href="baseUrl('/esic/recuperar-senha')">Esqueci minha senha</a> |
                                <a :href="baseUrl('/esic/recuperar-senha')">Não consigo acessar o E-Sic</a>
                            </div>

                            <button type="submit" class="btn btn-mairi" ref="submit">Entrar</button>

                            <div class="alert alert-mairi" style="margin:15px 0 0">
                                Não possui acesso ao E-Sic? Cadastre-se <a :href="baseUrl('/esic/cadastro')">aqui</a>!
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FormControl from '../components/FormControl.vue'

    export default {
        data() {
            return {
                configuracao: {},
                usuario: {},
                errors: {},
                errorMsg: "",
            }
        },
        components: {
            FormControl
        },
        mounted() {
          this.fetch();
        },
        methods: {
          fetch() {
              axios.get('esic/ajax/telefones')
                  .then((response) => {
                      this.configuracao = response.data.data;

                      Loading.hide();
                      $(this.$refs.submit).prop("disabled", false);
                  })
                  .catch((error) => {
                      Loading.hide();
                      //alert('Não foi possível carregar as configurações.');
                  });
            },
            login() {
                var vm = this;
                this.errors = {};

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                axios.post('/ajax/login', this.usuario)
                    .then((response) => {
                         window.location.href = this.baseUrl('/esic');
                    })
                    .catch((error) => {
                        if(error.response) {
                            if(error.response.status == 422) {
                                vm.errors = error.response.data.data;
                            }
                            else {
                                const msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                                this.errorMsg = msg;
                            }
                        }
                        else {
                            this.errorMsg = "Ocorreu um erro ao tentar processar sua solicitação.";
                        }

                        Loading.hide();
                        $(this.$refs.submit).prop("disabled", false);
                    });
            },

        }
    }
</script>

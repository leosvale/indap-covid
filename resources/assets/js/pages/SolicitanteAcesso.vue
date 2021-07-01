<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h4>Seja bem vindo!</h4>
                <p>
                    O E-Sic foi criado em conformidade com a Lei nº 12.527/11 para atender as pessoas físicas e
                    jurídicas que queiram fazer requerimentos à {{ nome_entidade }}.
                </p>
                <p>
                    Para ter acesso ao sistema, é necessário que o requerente faça seu cadastro, podendo assim, através
                    de sua área pessoal, cadastrar requerimentos, entrar com recursos, acompanhar o andamento de suas
                    solicitações e obter o retorno através do próprio sistema.
                </p>
                <p>
                    O E-Sic tem por finalidade criar um banco de dados para interação entre a {{ nome_entidade }}
                    e o cidadão visando maiores esclarecimentos ao redor da administração pública.
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
        props: ['resource', 'nome_entidade'],
        data() {
            return {
                usuario: {},
                errors: {},
                errorMsg: "",
            }
        },
        components: {
            FormControl
        },
        mounted() {

        },
        methods: {
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
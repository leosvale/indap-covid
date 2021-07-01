<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">

                <div class="panel panel-form">
                    <div class="panel-heading">
                        <h3 class="panel-title">Acesso ao Painel Administrativo</h3>
                    </div>
                    <div class="panel-body">
                        <div class="alert alert-danger" role="alert" v-show="errorMsg">{{ errorMsg }}</div>

                        <form role="form" accept-charset="UTF-8" @submit.prevent="login">
                            <form-control :error="errors.usu_login">
                                <label for="usu_login">Login</label>
                                <input type="text" id="usu_login" class="form-control" autofocus v-model="usuario.usu_login">
                            </form-control>

                            <form-control :error="errors.usu_senha">
                                <label for="usu_senha">Senha</label>
                                <input type="password" id="usu_senha" class="form-control" v-model="usuario.usu_senha">
                            </form-control>

                            <button type="submit" class="btn btn-mairi" ref="submit">Entrar</button>
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
        props: ['resource'],
        data() {
            return {
                usuario: {
                    painel: true
                },
                errors: {},
                errorMsg: "",
            }
        },
        components: {
            FormControl
        },
        methods: {
            login() {
                var vm = this;
                this.errors = {};
                this.errorMsg = "";

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                axios.post('/ajax/login', this.usuario)
                    .then((response) => {
                         window.location.href = this.baseUrl('/painel?welcome=1');
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
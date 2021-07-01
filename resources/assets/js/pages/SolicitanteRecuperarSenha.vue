<template>
    <div class="container">
        <div class="page-header">
            <h1>Recuperar Acesso ao E-Sic</h1>
        </div>

        <div class="panel panel-form">
            <div class="panel-body">
                <div class="alert alert-danger" role="alert" v-show="!success && errorMsg">{{ errorMsg }}</div>

                <div class="alert alert-success" role="alert" v-show="success">
                    Um e-mail foi enviado para <strong>{{ usuario.usu_login }}</strong> com um link de
                    recuperação de senha.
                </div>

                <form role="form" accept-charset="UTF-8" @submit.prevent="send" v-show="!success">
                    <p>
                        Informe seu e-mail cadastrado para receber um link para recuperação de senha. Se não tiver recebido
                        o e-mail para confirmação de cadastro, você também pode solicitar o reenvio através deste formulário.
                    </p>

                    <br>

                    <form-control :error="errors.usu_login">
                        <label for="usu_login">E-mail *</label>
                        <input type="email" id="usu_login" class="form-control" v-model="usuario.usu_login">
                    </form-control>

                    <button type="submit" class="btn btn-mairi" ref="submit">Enviar</button>
                    <a :href="baseUrl('/esic/acesso')" class="btn btn-default">Voltar</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import FormControl from '../components/FormControl.vue'

    export default {
        data() {
            return {
                usuario: {
                    usu_login: "",
                },
                errors: {},
                errorMsg: "",
                success: false,
            }
        },
        components: {
            FormControl
        },
        methods: {
            send() {
                 let vm = this;
                 this.errors = {};

                 $(this.$refs.submit).prop("disabled", true);
                 Loading.show();

                 axios.post('/ajax/recuperar-senha', this.usuario)
                     .then((response) => {
                         this.success = true;
                         Loading.hide();
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
             }
        }
    }
</script>
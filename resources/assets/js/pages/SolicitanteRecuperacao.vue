<template>
    <div class="container">
        <div class="page-header">
            <h1>Recuperar Acesso ao E-Sic</h1>
        </div>

        <div class="panel panel-form">
            <div class="panel-body">
                <div class="alert alert-success" role="alert" v-show="success">
                    Seu acesso ao portal foi restaurado e seu cadastro foi confirmado.<br>
                    <a :href="baseUrl('/esic/acesso')">Clique aqui</a> para ir para a tela de login e acessar o portal.
                </div>

                <form role="form" accept-charset="UTF-8" @submit.prevent="send" v-show="!success">
                    <form-control :error="errors.usu_senha">
                        <label for="usu_senha">Nova Senha de Acesso *</label>
                        <input type="password" id="usu_senha" class="form-control" v-model="usuario.usu_senha">
                    </form-control>

                    <form-control :error="errors.usu_senha_confirmacao">
                        <label for="usu_senha_confirmacao">Confirme sua Nova Senha *</label>
                        <input type="password" id="usu_senha_confirmacao" class="form-control" v-model="usuario.usu_senha_confirmacao">
                    </form-control>

                    <button type="submit" class="btn btn-mairi" ref="submit">Enviar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import FormControl from '../components/FormControl.vue'

    export default {
        props: ['token'],
        data() {
            return {
                usuario: {},
                errors: {},
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

                 let data = $.extend({}, this.usuario);
                 data.token = this.token;

                 axios.post('/ajax/alterar-senha', data)
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
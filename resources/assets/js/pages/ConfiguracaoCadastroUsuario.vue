<template>
    <div class="container">
        <div class="page-header">
            <h1>Configurações</h1>
        </div>

        <div class="alert alert-success alert-dismissible" role="alert" v-if="showSuccessMsg">
            <button type="button" class="close" data-dismiss="alert" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
            <span>Configurações atualizadas com sucesso.</span>
        </div>

        <div class="panel panel-form">
            <div class="panel-body">
                <form role="form" accept-charset="UTF-8" @submit.prevent="save">
                    <div class="form-group">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" v-model="configuracao.alterar_senha"> Alterar senha de acesso
                            </label>
                        </div>
                    </div>

                    <form-control :error="errors.usu_senha_atual" v-show="configuracao.alterar_senha">
                        <label for="usu_senha_atual">Senha Atual *</label>
                        <input type="password" id="usu_senha_atual" class="form-control" v-model="configuracao.usu_senha_atual">
                    </form-control>

                    <form-control :error="errors.usu_senha" v-show="configuracao.alterar_senha">
                        <label for="usu_senha">Nova Senha *</label>
                        <input type="password" id="usu_senha" class="form-control" v-model="configuracao.usu_senha">
                    </form-control>

                    <form-control :error="errors.usu_senha_confirmacao" v-show="configuracao.alterar_senha">
                        <label for="usu_senha_confirmacao">Confirme sua Nova Senha *</label>
                        <input type="password" id="usu_senha_confirmacao" class="form-control" v-model="configuracao.usu_senha_confirmacao">
                    </form-control>

                    <button type="submit" class="btn btn-primary" ref="submit" disabled>Salvar</button>
                    <a :href="baseUrl('/painel')" class="btn btn-default">Voltar</a>
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
            	configuracao: {
                    alterar_senha: false,
            	},
            	errors: {},
                showSuccessMsg: false,
            }
        },
        components: {
        	FormControl
        },
        mounted() {
        	Loading.show();

        	// Mensagem de sucesso ao salvar
            const successMsg = window.location.search.split('success=')[1];
            this.showSuccessMsg = successMsg ? true : false;

            Loading.hide();
            $(this.$refs.submit).prop("disabled", false);
        },
        methods: {
        	save() {
        		var vm = this;
                this.errors = {};

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                let data = $.extend({}, this.configuracao);

                if (this.configuracao.alterar_senha === "true") {
                    this.configuracao.alterar_senha = true;
                }

                var promise = axios({
                    method: 'post',
                    url: '/painel/ajax/configuracao',
                    data: data,
                });

                promise
                	.then((response) => {
                		window.location.href = this.baseUrl('/painel/configuracoes?success=1');
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
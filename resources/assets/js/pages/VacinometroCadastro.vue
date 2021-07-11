<template>
    <div class="container">
        <div class="page-header">
            <h1>Vacinômetro</h1>
        </div>

        <div class="alert alert-success alert-dismissible" role="alert" v-if="showSuccessMsg">
            <button type="button" class="close" data-dismiss="alert" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
            <span>Vacinômetro atualizado com sucesso.</span>
        </div>

        <div class="panel panel-form">
            <div class="panel-body">
                <form role="form" accept-charset="UTF-8" @submit.prevent="save">

                    <div class="row">
                        <div class="col-md-6">
                            <form-control :error="errors.doses_recebidas">
                                <label for="doses_recebidas">Doses Recebidas</label>
                                <input id="doses_recebidas" type="text" class="form-control" name="doses_recebidas" v-model="vacinometro.doses_recebidas">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.doses_aplicadas">
                                <label for="doses_aplicadas">Doses Aplicadas</label>
                                <input id="doses_aplicadas" type="text" class="form-control" name="doses_aplicadas" v-model="vacinometro.doses_aplicadas">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.primeira_dose">
                                <label for="primeira_dose">1˚ Dose</label>
                                <input id="primeira_dose" type="text" class="form-control" name="primeira_dose" v-model="vacinometro.primeira_dose">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.segunda_dose">
                                <label for="segunda_dose">2˚ Dose</label>
                                <input id="segunda_dose" type="text" class="form-control" name="segunda_dose" v-model="vacinometro.segunda_dose">
                            </form-control>
                        </div>
                    </div>

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
              vacinometro: {
                  doses_aplicadas: '',
                  doses_recebidas: '',
                  primeira_dose: '',
                  segunda_dose: ''
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

            this.fetch();
        },
        methods: {
        	fetch() {
                axios.get('/painel/ajax/vacinometro')
                    .then((response) => {
                    
                        this.vacinometro.doses_recebidas = response.data.data.vacinometro.doses_recebidas.valor;
                        this.vacinometro.doses_aplicadas = response.data.data.vacinometro.doses_aplicadas.valor;
                        this.vacinometro.primeira_dose = response.data.data.vacinometro.primeira_dose.valor;
                        this.vacinometro.segunda_dose = response.data.data.vacinometro.segunda_dose.valor;

                        Loading.hide();
                        $(this.$refs.submit).prop("disabled", false);
                    })
                    .catch((error) => {
                        Loading.hide();
                        alert('Não foi possível carregar as configurações.');
                    });
            },
        	save() {
        		var vm = this;
                this.errors = {};

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                let data = new FormData();

                for (var i in this.vacinometro) {
                    if(this.vacinometro[i]) {
                        data.append(i, this.vacinometro[i]);
                    }
                }

                var promise = axios({
                    method: 'post',
                    url: '/painel/ajax/vacinometro',
                    data: data,
                    headers: { 'content-type': 'multipart/form-data' },
                });

                promise
                	.then((response) => {
                		window.location.href = this.baseUrl('/painel/vacinometro?success=1');
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

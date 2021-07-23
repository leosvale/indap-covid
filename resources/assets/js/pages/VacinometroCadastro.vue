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
                        <div class="col-md-6">
                            <form-control :error="errors.homens">
                                <label for="homens">Homens</label>
                                <input id="homens" type="text" class="form-control" name="homens" v-model="vacinometro.homens">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.mulheres">
                                <label for="mulheres">Mulheres</label>
                                <input id="mulheres" type="text" class="form-control" name="mulheres" v-model="vacinometro.mulheres">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.adultos">
                                <label for="adultos">Adultos</label>
                                <input id="adultos" type="text" class="form-control" name="adultos" v-model="vacinometro.adultos">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.mulheres">
                                <label for="adolescentes">Adolescentes</label>
                                <input id="adolescentes" type="text" class="form-control" name="adolescentes" v-model="vacinometro.adolescentes">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.mulheres">
                                <label for="criancas">Crianças</label>
                                <input id="criancas" type="text" class="form-control" name="criancas" v-model="vacinometro.criancas">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.cem_anos">
                                <label for="cem_anos">100 anos</label>
                                <input id="cem_anos" type="text" class="form-control" name="cem_anos" v-model="vacinometro.cem_anos">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.noventa_anos">
                                <label for="noventa_anos">90 anos</label>
                                <input id="noventa_anos" type="text" class="form-control" name="noventa_anos" v-model="vacinometro.noventa_anos">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.oitenta_anos">
                                <label for="oitenta_anos">80 anos</label>
                                <input id="oitenta_anos" type="text" class="form-control" name="oitenta_anos" v-model="vacinometro.oitenta_anos">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.setenta_anos">
                                <label for="setenta_anos">70 anos</label>
                                <input id="setenta_anos" type="text" class="form-control" name="setenta_anos" v-model="vacinometro.setenta_anos">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.sessenta_anos">
                                <label for="sessenta_anos">60 anos</label>
                                <input id="sessenta_anos" type="text" class="form-control" name="sessenta_anos" v-model="vacinometro.sessenta_anos">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.cinquenta_anos">
                                <label for="cinquenta_anos">50 anos</label>
                                <input id="cinquenta_anos" type="text" class="form-control" name="cinquenta_anos" v-model="vacinometro.cinquenta_anos">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.quarenta_anos">
                                <label for="quarenta_anos">40 anos</label>
                                <input id="quarenta_anos" type="text" class="form-control" name="quarenta_anos" v-model="vacinometro.quarenta_anos">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.trinta_anos">
                                <label for="trinta_anos">30 anos</label>
                                <input id="trinta_anos" type="text" class="form-control" name="trinta_anos" v-model="vacinometro.trinta_anos">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.vinte_anos">
                                <label for="vinte_anos">20 anos</label>
                                <input id="vinte_anos" type="text" class="form-control" name="vinte_anos" v-model="vacinometro.vinte_anos">
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
                        this.vacinometro.homens = response.data.data.vacinometro.homens.valor;
                        this.vacinometro.mulheres = response.data.data.vacinometro.mulheres.valor;
                        this.vacinometro.adultos = response.data.data.vacinometro.adultos.valor;
                        this.vacinometro.adolescentes = response.data.data.vacinometro.adolescentes.valor;
                        this.vacinometro.criancas = response.data.data.vacinometro.criancas.valor;
                        this.vacinometro.cem_anos = response.data.data.vacinometro.cem_anos.valor;
                        this.vacinometro.noventa_anos = response.data.data.vacinometro.noventa_anos.valor;
                        this.vacinometro.oitenta_anos = response.data.data.vacinometro.oitenta_anos.valor;
                        this.vacinometro.setenta_anos = response.data.data.vacinometro.setenta_anos.valor;
                        this.vacinometro.sessenta_anos = response.data.data.vacinometro.sessenta_anos.valor;
                        this.vacinometro.cinquenta_anos = response.data.data.vacinometro.cinquenta_anos.valor;
                        this.vacinometro.quarenta_anos = response.data.data.vacinometro.quarenta_anos.valor;
                        this.vacinometro.trinta_anos = response.data.data.vacinometro.trinta_anos.valor;
                        this.vacinometro.vinte_anos = response.data.data.vacinometro.vinte_anos.valor;

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

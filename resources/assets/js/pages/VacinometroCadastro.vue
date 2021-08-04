<template>
    <div class="container">
        <div class="page-header">
            <h1>Vacinômetro e Boletim</h1>
        </div>

        <div class="alert alert-success alert-dismissible" role="alert" v-if="showSuccessMsg">
            <button type="button" class="close" data-dismiss="alert" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
            <span>Vacinômetro atualizado com sucesso.</span>
        </div>

        <div class="panel panel-form">
            <div class="panel-body">
                <form role="form" accept-charset="UTF-8" @submit.prevent="save">

                    <h4>Vacinômetro</h4>

                    <div class="row">
                        <div class="col-md-6">
                            <form-control :error="errors.doses_recebidas">
                                <label for="doses_recebidas">Doses Recebidas</label>
                                <input v-mask="'##########'" id="doses_recebidas" type="text" class="form-control" name="doses_recebidas" v-model="vacinometro.doses_recebidas" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.doses_aplicadas">
                                <label for="doses_aplicadas">Doses Aplicadas</label>
                                <input v-mask="'##########'" id="doses_aplicadas" type="text" class="form-control" name="doses_aplicadas" v-model="vacinometro.doses_aplicadas" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.primeira_dose">
                                <label for="primeira_dose">1˚ Dose</label>
                                <input v-mask="'##########'" id="primeira_dose" type="text" class="form-control" name="primeira_dose" v-model="vacinometro.primeira_dose" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.segunda_dose">
                                <label for="segunda_dose">2˚ Dose</label>
                                <input v-mask="'##########'" id="segunda_dose" type="text" class="form-control" name="segunda_dose" v-model="vacinometro.segunda_dose" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.dose_unica">
                                <label for="segunda_dose">Doses Únicas</label>
                                <input v-mask="'##########'" id="dose_unica" type="text" class="form-control" name="dose_unica" v-model="vacinometro.dose_unica" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.homens">
                                <label for="homens">Homens</label>
                                <input v-mask="'##########'" id="homens" type="text" class="form-control" name="homens" v-model="vacinometro.homens" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.mulheres">
                                <label for="mulheres">Mulheres</label>
                                <input v-mask="'##########'" id="mulheres" type="text" class="form-control" name="mulheres" v-model="vacinometro.mulheres" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.adultos">
                                <label for="adultos">Adultos</label>
                                <input v-mask="'##########'" id="adultos" type="text" class="form-control" name="adultos" v-model="vacinometro.adultos" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.mulheres">
                                <label for="adolescentes">Adolescentes</label>
                                <input v-mask="'##########'" id="adolescentes" type="text" class="form-control" name="adolescentes" v-model="vacinometro.adolescentes" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.criancas">
                                <label for="criancas">Crianças</label>
                                <input v-mask="'##########'" id="criancas" type="text" class="form-control" name="criancas" v-model="vacinometro.criancas" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.cem_anos">
                                <label for="cem_anos">80 a 100 anos</label>
                                <input v-mask="'##########'" id="cem_anos" type="text" class="form-control" name="cem_anos" v-model="vacinometro.cem_anos" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.noventa_anos">
                                <label for="noventa_anos">70 a 90 anos</label>
                                <input v-mask="'##########'" id="noventa_anos" type="text" class="form-control" name="noventa_anos" v-model="vacinometro.noventa_anos" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.oitenta_anos">
                                <label for="oitenta_anos">60 a 80 anos</label>
                                <input v-mask="'##########'" id="oitenta_anos" type="text" class="form-control" name="oitenta_anos" v-model="vacinometro.oitenta_anos" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.setenta_anos">
                                <label for="setenta_anos">50 a 70 anos</label>
                                <input v-mask="'##########'" id="setenta_anos" type="text" class="form-control" name="setenta_anos" v-model="vacinometro.setenta_anos" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.sessenta_anos">
                                <label for="sessenta_anos">40 a 60 anos</label>
                                <input v-mask="'##########'" id="sessenta_anos" type="text" class="form-control" name="sessenta_anos" v-model="vacinometro.sessenta_anos" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.cinquenta_anos">
                                <label for="cinquenta_anos">30 a 50 anos</label>
                                <input v-mask="'##########'" id="cinquenta_anos" type="text" class="form-control" name="cinquenta_anos" v-model="vacinometro.cinquenta_anos" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.quarenta_anos">
                                <label for="quarenta_anos">20 a 40 anos</label>
                                <input v-mask="'##########'" id="quarenta_anos" type="text" class="form-control" name="quarenta_anos" v-model="vacinometro.quarenta_anos" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.trinta_anos">
                                <label for="trinta_anos">10 a 30 anos</label>
                                <input v-mask="'##########'" id="trinta_anos" type="text" class="form-control" name="trinta_anos" v-model="vacinometro.trinta_anos" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.vinte_anos">
                                <label for="vinte_anos">00 a 20 anos</label>
                                <input v-mask="'##########'" id="vinte_anos" type="text" class="form-control" name="vinte_anos" v-model="vacinometro.vinte_anos" required>
                            </form-control>
                        </div>
                    </div>

                    <hr>

                    <h4>Boletim</h4>

                    <div class="row">
                        <div class="col-md-6">
                            <form-control :error="errors.fonte">
                                <label for="fonte">Fonte</label>
                                <input id="fonte" type="text" class="form-control" name="doses_recebidas" v-model="boletim.fonte" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.casos_ativos">
                                <label for="casos_ativos">Casos Ativos</label>
                                <input v-mask="'##########'" id="casos_ativos" type="text" class="form-control" name="doses_recebidas" v-model="boletim.casos_ativos" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.casos_curados">
                                <label for="casos_curados">Casos Curados</label>
                                <input v-mask="'##########'" id="casos_curados" type="text" class="form-control" name="casos_curados" v-model="boletim.casos_curados" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.casos_aguardando_resultado">
                                <label for="casos_aguardando_resultado">Casos Aguardando Resultado</label>
                                <input v-mask="'##########'" id="casos_aguardando_resultado" type="text" class="form-control" name="casos_aguardando_resultado" v-model="boletim.casos_aguardando_resultado" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.casos_confirmados">
                                <label for="casos_confirmados">Casos Confirmados</label>
                                <input v-mask="'##########'" id="casos_confirmados" type="text" class="form-control" name="casos_confirmados" v-model="boletim.casos_confirmados" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.resultados_negativos">
                                <label for="resultados_negativos">Resultados Negativos</label>
                                <input v-mask="'##########'" id="resultados_negativos" type="text" class="form-control" name="resultados_negativos" v-model="boletim.resultados_negativos" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.exames_realizados">
                                <label for="exames_realizados">Exames Realizados</label>
                                <input v-mask="'##########'" id="exames_realizados" type="text" class="form-control" name="exames_realizados" v-model="boletim.exames_realizados" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.obitos">
                                <label for="obitos">Óbitos</label>
                                <input v-mask="'##########'" id="obitos" type="text" class="form-control" name="obitos" v-model="boletim.obitos" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.casos_ativos_do_dia">
                                <label for="casos_ativos_do_dia">Casos Ativos do dia</label>
                                <input v-mask="'##########'" id="casos_ativos_do_dia" type="text" class="form-control" name="casos_ativos_do_dia" v-model="boletim.casos_ativos_do_dia" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.casos_curados_do_dia">
                                <label for="casos_curados_do_dia">Casos Curados do dia</label>
                                <input v-mask="'##########'" id="casos_curados_do_dia" type="text" class="form-control" name="casos_curados_do_dia" v-model="boletim.casos_curados_do_dia" required>
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.obitos_do_dia">
                                <label for="obitos_do_dia">Óbitos do dia</label>
                                <input v-mask="'##########'" id="obitos_do_dia" type="text" class="form-control" name="obitos_do_dia" v-model="boletim.obitos_do_dia" required>
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
                  segunda_dose: '',
                  dose_unica: '',
                  homens: '',
                  mulheres: '',
                  adultos: '',
                  adolescentes: '',
                  criancas: '',
                  cem_anos: '',
                  noventa_anos: '',
                  oitenta_anos: '',
                  setenta_anos: '',
                  sessenta_anos: '',
                  cinquenta_anos: '',
                  quarenta_anos: '',
                  trinta_anos: '',
                  vinte_anos: ''
              },
              boletim: {
                  fonte: '',
                  casos_ativos: '',
                  casos_curados: '',
                  casos_aguardando_resultado: '',
                  casos_confirmados: '',
                  resultados_negativos: '',
                  exames_realizados: '',
                  obitos: '',
                  casos_ativos_do_dia: '',
                  casos_curados_do_dia: '',
                  obitos_do_dia: ''
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
                        this.vacinometro.dose_unica = response.data.data.vacinometro.dose_unica.valor;
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

                        this.boletim.fonte = response.data.data.boletim.casos_ativos.fonte;
                        this.boletim.casos_ativos = response.data.data.boletim.casos_ativos.valor;
                        this.boletim.casos_curados = response.data.data.boletim.casos_curados.valor;
                        this.boletim.casos_aguardando_resultado = response.data.data.boletim.casos_aguardando_resultado.valor;
                        this.boletim.casos_confirmados = response.data.data.boletim.casos_confirmados.valor;
                        this.boletim.resultados_negativos = response.data.data.boletim.resultados_negativos.valor;
                        this.boletim.exames_realizados = response.data.data.boletim.exames_realizados.valor;
                        this.boletim.obitos = response.data.data.boletim.obitos.valor;
                        this.boletim.casos_ativos_do_dia = response.data.data.boletim.casos_ativos_do_dia.valor;
                        this.boletim.casos_curados_do_dia = response.data.data.boletim.casos_curados_do_dia.valor;
                        this.boletim.obitos_do_dia = response.data.data.boletim.obitos_do_dia.valor;

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

                for (var i in this.boletim) {
                    if(this.boletim[i]) {
                        data.append(i, this.boletim[i]);
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

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

                    <h4>Vacinômetro</h4>

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

                    <div class="row">
                        <div class="col-md-6">
                            <form-control :error="errors.nome">
                                <label for="nome">Nome da Entidade/Órgão *</label>
                                <input type="text" id="nome" class="form-control" autofocus placeholder="Ex.: Prefeitura de ..." v-model="configuracao.nome">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.portal">
                                <label for="portal">Título do Portal *</label>
                                <input type="text" id="portal" class="form-control" placeholder="Ex.: Portal da ..." v-model="configuracao.portal">
                            </form-control>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <form-control :error="errors.uf">
                                <label for="uf">UF *</label>
                                <select id="uf" class="form-control" v-model="configuracao.uf">
                                    <option value="BA">BA</option>
                                </select>
                            </form-control>
                        </div>

                        <div class="col-md-6">
                            <form-control :error="errors.email">
                                <label for="email">E-mail de Contato</label>
                                <input type="email" id="email" class="form-control" v-model="configuracao.email">
                            </form-control>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <form-control :error="errors.email">
                                <label for="telefone_primario">Telefone primário</label>
                                <input id="fone_primario" type="phone" class="form-control" name="telefone_primario" required v-model="configuracao.telefone_primario">
                            </form-control>
                        </div>

                        <div class="col-md-6">
                            <form-control :error="errors.email">
                                <label for="telefone_secundario">Telefone secundário</label>
                                <input id="fone_secundario" type="phone" class="form-control" name="telefone_secundario" required v-model="configuracao.telefone_secundario">
                            </form-control>
                        </div>
                    </div>

                    <form-control :error="errors.logo">
                        <label for="logo_midia">Logotipo/Brasão *</label>
                        <div class="thumbnail thumbnail-preview" v-if="configuracao.logo">
                            <img :src="baseUrl(configuracao.logo)" class="img-responsive" />
                        </div>
                        <label for="logo_midia" class="btn btn-primary btn-sm">Selecionar imagem</label>
                        <input type="file" id="logo_midia" class="form-control" @change="onFileChange" accept="image/*" style="display: none" >
                    </form-control>

                    <form-control :error="errors.favico">
                        <label for="favico_midia">Favicon</label>
                        <div class="thumbnail thumbnail-preview" v-if="configuracao.favico">
                            <img :src="baseUrl(configuracao.favico)" class="img-responsive" />
                        </div>
                        <label for="favico_midia" class="btn btn-primary btn-sm">Selecionar imagem</label>
                        <input type="file" id="favico_midia" class="form-control" @change="onFileChange" accept="image/*" style="display: none" >
                        <div><small><strong>O favicon deve ter altura e largura iguais. Tamanho Máximo: 1024x1024</strong></small></div>
                    </form-control>

                    <form-control :error="errors.endereco">
                        <label for="endereco">Endereço</label>
                        <textarea id="endereco" class="form-control" rows="3" v-model="configuracao.endereco"></textarea>
                    </form-control>

                    <div class="form-group form-inline">                            
                        <label for="cor" class="mr-1">Cor Primária do Portal:</label>
                        <input id="cor" type="color" class="form-control" style="width:50px" name="cor" required v-model="configuracao.cor">
                    </div>

                    <hr>

                    <h4>Redes Sociais</h4>

                    <div class="row">
                        <div class="col-md-6">
                            <form-control :error="errors.facebook">
                                <label for="facebook">Facebook</label>
                                <input id="facebook" type="text" class="form-control" name="facebook" v-model="configuracao.facebook">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.twitter">
                                <label for="twitter">Twitter</label>
                                <input id="twitter" type="text" class="form-control" name="twitter" v-model="configuracao.twitter">
                            </form-control>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <form-control :error="errors.google">
                                <label for="google">Google Plus</label>
                                <input id="google" type="text" class="form-control" name="google" v-model="configuracao.google">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.instagram">
                                <label for="instagram">Instagram</label>
                                <input id="instagram" type="text" class="form-control" name="instagram" v-model="configuracao.instagram">
                            </form-control>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <form-control :error="errors.facebook">
                                <label for="pinterest">Pinterest</label>
                                <input id="pinterest" type="text" class="form-control" name="pinterest" v-model="configuracao.pinterest">
                            </form-control>
                        </div>
                        <div class="col-md-6">
                            <form-control :error="errors.youtube">
                                <label for="youtube">Youtube</label>
                                <input id="youtube" type="text" class="form-control" name="youtube" v-model="configuracao.youtube">
                            </form-control>
                        </div>
                    </div>

                    <hr>

                    <h4>Banner Página Inicial</h4>

                    <form-control>
                        <label for="banner_home_url">Endereço Destino (URL)</label>
                        <input id="banner_home_url" type="text" class="form-control" name="banner_home_url" v-model="configuracao.banner_home_url">
                    </form-control>

                    <form-control>
                        <label for="banner_home_img">Imagem</label>
                        <div class="thumbnail thumbnail-preview" v-if="configuracao.banner_home_img">
                            <img :src="configuracao.banner_home_img" class="img-responsive" />
                        </div>
                        <div><small><strong>Tamanho Recomendado: 728x90</strong></small></div>
                        <label for="banner_home_img" class="btn btn-primary btn-sm">Selecionar imagem</label>
                        <a class="btn btn-danger btn-sm" @click="apagarImagem('#banner_home_img')">Apagar Imagem</a>
                        <input type="file" id="banner_home_img" class="form-control" @change="onFileChange($event, true)" accept="image/*" style="display: none" >
                    </form-control>

                    <hr>

                    <h4>Popup da Página Inicial</h4>

                    <form-control>
                        <label for="popup_url">Endereço Destino (URL)</label>
                        <input id="popup_url" type="text" class="form-control" name="popup_url" v-model="configuracao.popup_url">
                    </form-control>

                    <form-control>
                        <label for="popup_img">Imagem</label>
                        <div class="thumbnail thumbnail-preview" v-if="configuracao.popup_img">
                            <img :src="configuracao.popup_img" class="img-responsive" />
                        </div>
                        <div></div>
                        <label for="popup_img" class="btn btn-primary btn-sm">Selecionar imagem</label>
                        <a class="btn btn-danger btn-sm" @click="apagarImagem('#popup_img')">Apagar Imagem</a>
                        <input type="file" id="popup_img" class="form-control" @change="onFileChange($event, true)" accept="image/*" style="display: none" >
                    </form-control>

                    <hr>

                    <form-control :error="errors.banners">
                        <h4>Banners</h4>

                        <div class="panel panel-form">
                            <v-server-table ref="table" url="/painel/ajax/banner" :columns="columns" :options="options"></v-server-table>
                            <a class="btn btn-primary pull-right" :href="baseUrl('/painel/banner/cadastro/')">Adicionar</a>
                        </div>

                        <!--
                        <textarea id="banners" class="form-control" rows="6" v-model="configuracao.banners"></textarea>
                        -->

                    </form-control>

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

  $(document).ready(function(){
            $('#fone_primario').mask('(99)  9999-9999');
        });
  $(document).ready(function(){
            $('#fone_secundario').mask('(99)  9999-9999');
        });

  Vue.component('col-edi', {
      props: ['data'],
      template: `<a :href="baseUrl('/painel/banner/edicao/' + data.banner_id)">Editar</a>`,
  });

  Vue.component('col-exc', {
      props: ['data'],
      template: `<a href="#" class="text-danger btn-remove" @click="remove(data.banner_id)">Excluir</a>`,
      methods: {

          remove(id) {
              if (!confirm('Tem certeza que deseja remover o banner '+ this.data.banner_nome +'?')) return;

              var vm = this;
              Loading.show();

              axios.post('painel/ajax/configuracao/banner/' + this.data.banner_id, { _method: 'DELETE' })
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


    export default {
    	data() {
            return {
            	configuracao: {
                    uf: "BA",
            	      logo: null,
            	      logo_midia: null,
                    alterar_senha: false,
                    telefone_primario: '1',
                    telefone_secundario: '2',
            	},
              vacinometro: {
                  doses_aplicadas: '',
                  doses_recebidas: '',
                  primeira_dose: '',
                  segunda_dose: ''
              },
              columns: [
                  'banner_nome',
                  'banner_tipo',
                  'edit',
                  'remove'
              ],
              options: {
                  skin: 'table-striped table-hover',
                  columnsClasses: {
                      'edit': 'col-actions',
                      'remove': 'col-actions',
                  },
                  headings: {
                      'banner_nome': 'Título',
                      'banner_tipo': 'Tipo',
                      'edit': '',
                      'remove': '',
                  },
                  texts: this.vueTableTexts(),
                  filterable: false,
                  orderBy: {
                      ascending: true,
                      column: 'banner_nome',
                  },
                  templates: {
                      edit: 'col-edi',
                      remove: 'col-exc',
                  },
                  params: {
                      table: true
                  }
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
                axios.get('/painel/ajax/configuracao')
                    .then((response) => {
                        this.configuracao = response.data.data.configuracoes;
                        this.configuracao.endereco = this.configuracao.endereco.replace(/<br\s*\/?>/mg,"\n");
                        this.configuracao.cor = this.configuracao.cor ? this.configuracao.cor : '#289dcc';
                        this.$set(this.configuracao, 'alterar_senha', false);
                        this.$set(this.configuracao, 'logo_midia', null);

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

                if(this.configuracao.alterar_senha === "true") {
                    this.configuracao.alterar_senha = true;
                }

                for (var i in this.configuracao) {
                    if(this.configuracao[i]) {
                        data.append(i, this.configuracao[i]);
                    }
                }

                for (var i in this.vacinometro) {
                    if(this.vacinometro[i]) {
                        data.append(i, this.vacinometro[i]);
                    }
                }

                var promise = axios({
                    method: 'post',
                    url: '/painel/ajax/configuracao',
                    data: data,
                    headers: { 'content-type': 'multipart/form-data' },
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
        	},
          onFileChange(e, base64 = false) {
                var files = e.target.files || e.dataTransfer.files;
                var file = files.length ? files[0] : null;
                var preview = $(e.target).siblings('.thumbnail-preview').find('img');
                var reader = new FileReader();
                var self = this;

                reader.onload = function(event) {
                    preview.attr('src', event.target.result);
                    self.configuracao[e.target.id] = base64 ? event.target.result : file;
                }
                if (file) {
                    reader.readAsDataURL(file); // convert to base64 string
                }
          },
          apagarImagem(selector) {
                var input = $(selector);
                var preview = input.siblings('.thumbnail-preview').find('img');
                preview.attr('src', null);
                input.val(null);
                this.configuracao[input.attr('id')] = 'apagar';
          }
        }
    }
</script>

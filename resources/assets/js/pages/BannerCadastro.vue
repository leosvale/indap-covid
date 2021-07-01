<template>
    <div class="container">
        <div class="page-header">
            <h1 v-if="this.resource[0].banner_nome == '' ">Cadastrar Banner</h1>
            <h1 v-if="!this.resource[0].banner_nome == '' ">Atualizar Banner</h1>
        </div>

        <div class="alert alert-success alert-dismissible" role="alert" v-if="showSuccessMsg">
            <button type="button" class="close" data-dismiss="alert" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
            <span>Banner salvo com sucesso.</span>
        </div>

		<div class="panel panel-form">
			<div class="panel-body">
                <form role="form" accept-charset="UTF-8" @submit="formSubmit"  enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-lg-9 col-md-8">
                            <form-control>
                                <label for="banner_nome">Nome</label>
                                  <input type="text" id="banner_nome" class="form-control" autofocus required v-model="resource[0].banner_nome">
                            </form-control>

                            <form-control>
                                <label for="banner_url">Url</label>
                                  <input type="text" id="banner_url" class="form-control" autofocus required v-model="resource[0].banner_url">
                            </form-control>

                            <form-control :error="errors.banner_lateral">
                                <div class="checkbox">
                                    <label for="banner_lateral">
                                        <input type="checkbox" id="banner_lateral" v-model="resource[0].banner_lateral">
                                        <span>Banner Lateral</span>
                                    </label>
                                </div>
                            </form-control>

                            <form-control>
                              <div class="thumbnail thumbnail-preview" v-if="resource[0].banner_imagem">
                                  <img :src="baseUrl(resource[0].banner_imagem)" class="img-responsive" />
                              </div>
                              <label for="logo_midia" class="btn btn-primary btn-sm">Selecionar imagem</label>
                              <input type="file" id="logo_midia" class="form-control" @change="onImageChange" accept="image/*" style="display: none" >
                            </form-control>

                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary" ref="submit" disabled>Salvar</button>
                    <a :href="baseUrl('/painel/configuracoes')" class="btn btn-default">Voltar</a>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
	import FormControl from '../components/FormControl.vue'

    export default {
    	props: ['resource'],
    	data() {
            return{
               image: '',
            	errors: {},
                showSuccessMsg: false,
            }
        },
        components: {
        	FormControl
        },
        mounted() {
            Loading.show();

            const successMsg = window.location.search.split('success=')[1];
            this.showSuccessMsg = successMsg ? true : false;

            $(this.$refs.conteudo).summernote({
                lang: 'pt-BR',
                minHeight: 200,
                maxHeight: 500,
                toolbar: [
                    ['style1', ['style']],
                    ['style2', ['bold', 'italic', 'underline', 'clear']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['insert', ['link', 'hr', 'table']],
                    ['misc', ['fullscreen', 'codeview', 'help']],
                ]
            });

            this.fetch();
        },
        methods: {
            fetch() {
                Loading.hide();
                $(this.$refs.submit).prop("disabled", false);
            },
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;

                var vm = this;
                this.errors = {};

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }


                let formData = new FormData();
                formData.append('image', this.image);
                formData.append('nome', this.resource[0].banner_nome);
                formData.append('url', this.resource[0].banner_url);
                formData.append('banner_lateral', this.resource[0].banner_lateral);

                axios.post('/painel/ajax/banner' +  (this.resource ? '/' + this.resource[0].banner_id : ''),
                    formData, config)
                .then(response => {
                    window.location.href = this.baseUrl('/painel/configuracoes?success=1');
                    console.log(response);
                    console.log('saved successfully');
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
            onImageChange(e) {
              console.log(e.target.files[0]);
              this.image = e.target.files[0];

            }
        }
    }
</script>

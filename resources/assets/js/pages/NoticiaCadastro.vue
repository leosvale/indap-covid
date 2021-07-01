<template>
    <div class="container">
        <div class="page-header">
            <h1 v-if="!this.resource">Cadastrar Notícia</h1>
            <h1 v-if="this.resource">Atualizar Notícia</h1>
        </div>

        <div class="alert alert-success alert-dismissible" role="alert" v-if="showSuccessMsg">
            <button type="button" class="close" data-dismiss="alert" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
            <span>Notícia salva com sucesso.</span>
        </div>

        <div class="panel panel-form">
            <div class="panel-body">
                <form role="form" accept-charset="UTF-8" @submit.prevent="save">
                    <form-control>
                        <input class="form-check-input" type="radio" name="pub_tipo" id="pub_tipo" value="NOT" v-model="noticia.pub_tipo">
                        <span>Notícia</span>
                        <input class="form-check-input" type="radio" name="pub_tipo" id="pub_tipo" value="BOL" v-model="noticia.pub_tipo">
                        <span>Boletim</span>
                    </form-control>
                    <div class="row">
                        <div class="col-lg-9 col-md-8">
                            <form-control :error="errors.pub_titulo">
                                <label for="pub_titulo">Título</label>
                                <input type="text" id="pub_titulo" class="form-control" autofocus v-model="noticia.pub_titulo">
                            </form-control>

                            <form-control :error="errors.pub_conteudo">
                                <label for="pub_conteudo">Conteúdo</label>
                                <textarea id="pub_conteudo" class="form-control" rows="10" ref="conteudo"></textarea>
                            </form-control>

                            <form-control>
                              <div class="panel panel-form">
                                  <table class="table">
                                    <thead>
                                        <tr>
                                            <td><strong>Anexos</strong></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="attachment in attachments">
                                        <td>
                                            <p class="form-control-static"><a :href="baseUrl('/painel/pagina/exibir/anexo/' + attachment.pub_anexo_id)" target="_blank">{{ attachment.pub_anexo_nome }}</a></p>
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-danger pull-right" @click="removeAttachment(attachment.pub_anexo_id)">
                                                <i class="fa fa-trash"></i> Excluir
                                            </button>
                                        </td>
                                    </tr>
                                        <tr v-for="(row, index) in rows">
                                            <td>
                                                <label class="fileContainer">
                                                <input type="file" @change="setFilename($event, row)" :id="index" style="display: none">
                                                    <a>{{row.file.name}}</a>
                                                </label>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-danger pull-right" @click="removeElement(index)">
                                                    <i class="fa fa-trash"></i> Excluir
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                  <a class="btn btn-primary pull-right"  @click="addRow">Adicionar Anexo</a>

                              </div>
                              <!--
                              <label>Imagem</label>
                              <label for="attachment" class="btn btn-primary btn-block btn-outlined">Selecionar Arquivo</label>
                              <input type="file" id="attachment" class="form-control" @change="onFileChange" style="display: none" >
                              -->
                            </form-control>
                        </div>
                        <div class="col-lg-3 col-md-4">
                            <form-control :error="errors.pub_status">
                                <label>Status</label>
                                <select class="form-control" v-model="noticia.pub_status">
                                    <option value="PUB">Publicado</option>
                                    <option value="RAS">Rascunho</option>
                                </select>
                            </form-control>

                            <div class="form-group">
                                <label for="pub_data_visivel">Data de Publicação</label>
                                <input type="date" id="pub_data_visivel" v-model="noticia.pub_data_visivel" class="form-control">
                            </div>

                            <form-control :error="errors.tipo_categoria_publicacao_id">
                                <label>Categorias</label>
                                <div class="checkbox-group">
                                    <template v-for="item in categorias">
                                        <div class="checkbox">
                                            <input type="checkbox" v-model="noticia.tipo_categoria_publicacao_id" :id="'cat_' + item.tipo_categoria_publicacao_id" v-bind:value="item.tipo_categoria_publicacao_id">
                                            <label :for="'cat_' + item.tipo_categoria_publicacao_id">{{ item.tcp_nome }}</label>
                                        </div>
                                    </template>
                                    <a href="#" class="btn-config" data-toggle="modal" data-target="#modalCategorias"><i class="fa fa-cog"></i> Gerenciar categorias</a>
                                </div>
                            </form-control>

                            <form-control :error="errors.pub_midia">
                                <label for="pub_midia">Imagem em Destaque</label>
                                <div class="thumbnail thumbnail-preview" v-if="this.resource && noticia.pub_midia_p">
                                    <a :href="noticia.pub_midia_g" target="_blank">
                                        <img :src="noticia.pub_midia_p" class="img-responsive" />
                                    </a>
                                    <a href="#" class="img-remove text-danger" @click="removeFile">
                                        <i class="fa fa-times"></i> Remover imagem
                                    </a>
                                </div>
                                <input type="file" id="pub_midia" class="form-control" @change="onFileChange">
                            </form-control>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary" ref="submit" disabled>Salvar</button>
                    <a :href="baseUrl('/painel/noticias')" class="btn btn-default">Voltar</a>

                    <button type="button" class="btn btn-danger pull-right" tabindex="-1" v-if="resource" @click="remove">
                        <i class="fa fa-trash"></i> Excluir
                    </button>
                </form>
            </div>
        </div>

        <div class="modal fade modal-categorias" id="modalCategorias" tabindex="-1" role="dialog" aria-labelledby="modalCategoriasLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="modalCategoriasLabel">Categorias</h4>
                    </div>

                    <table class="table">
                        <colgroup>
                            <col>
                            <col style="width: 170px">
                        </colgroup>
                        <tbody>
                            <template v-for="item in categorias">
                                <tr v-show="!item.remove">
                                    <td>{{ item.tcp_nome }}</td>
                                    <td v-if="!edit_categoria" class="text-right">
                                        <a href="#" class="text-danger" v-show="item.tipo_categoria_publicacao_id && (!item.tcp_fixa || item.tcp_fixa != 'S')" @click="removeCategoria(item)">
                                            <i class="fa fa-times"></i> Excluir 
                                        </a>
                                        <a href="#" v-show="item.tipo_categoria_publicacao_id && (!item.tcp_fixa || item.tcp_fixa != 'S')" @click="categoria_editada = Object.assign({}, item); categoria = item; edit_categoria = true">
                                            <i class="fa fa-edit"></i> Editar
                                        </a>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>

                    <div class="modal-body">
                        <form role="form" accept-charset="UTF-8" @submit.prevent="saveCategoria">
                            <div v-if="edit_categoria" class="form-group">
                                <h4>Editando Categoria: {{ categoria.tcp_nome }}</h4>
                                <a href="#" @click="cancelarEdicaoCategoria()"><small>cancelar edição</small></a>
                            </div>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Inserir uma nova categoria..." v-model="categoria.tcp_nome">
                                <span class="input-group-btn">
                                    <button type="submit" class="btn btn-primary">Salvar</button>
                                </span>
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
    	props: ['resource'],
    	data() {
            return {
                categoria_editada: {},
                edit_categoria: false,
                categorias: [],
                files: [],
                rows: [],
                attachments: [],
            	noticia: {
            		pub_conteudo: "",
                    pub_tipo: "NOT",
                    pub_data_visivel: new Date().toISOString().substr(0, 10),
            	    pub_status: 'PUB',
            		tipo_categoria_publicacao_id: [],
					pub_midia: null,
                    remove_image: false,
            	},
            	errors: {},
                showSuccessMsg: false,
                categoria: {
                    tcp_nome: ""
                }
            }
        },
        components: {
        	FormControl
        },
        mounted() {
        	Loading.show();

            const successMsg = window.location.search.split('success=')[1];
            this.showSuccessMsg = successMsg ? true : false;

        	// TODO: Resolver problema do codeview que não funciona com webpack
            $(this.$refs.conteudo).summernote({
                lang: 'pt-BR',
                minHeight: 200,
                maxHeight: 500,
                maximumImageFileSize: 500*1024, // 500 KB
                toolbar: [
                    ['style1', ['style']],
                    ['style2', ['bold', 'italic', 'underline', 'clear']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['insert', ['link', 'hr', 'table', 'picture', 'video', 'audio']],
                    ['misc', ['fullscreen', 'codeview', 'help']],
                ],
                callbacks:{
                    onImageUploadError: function(msg){
                        alert(msg + ' (Tamanho máximo permitido: 500 KB). Prefira imagens no formato jpeg/jpg');
                    },
                    // onAudioUpload: function (data) {
                    //     let $audio = $('<audio controls>');
                    //     $(this).summernote('insertNode', $('<p></p>').append($audio[0])[0]);
                    // }
                },
                popover: {
                    image: [
                        ['custom', ['imageAttributes']],
                        ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
                        ['float', ['floatLeft', 'floatRight', 'floatNone']],
                        ['remove', ['removeMedia']]
                    ],
                },
                imageAttributes:{
                    icon:'<i class="note-icon-pencil"/>',
                    removeEmpty:true, // true = remove attributes | false = leave empty if present
                    disableUpload: true // true = don't display Upload Options | Display Upload Options
                }
            });

			axios.get('/painel/ajax/categoria-publicacao')
				.then((response) => {
					this.categorias = response.data.data;
					this.fetch();
				});
        },
        methods: {
        	fetch() {
                if(this.resource) {
                    axios.get('/painel/ajax/noticia/' + this.resource)
                        .then((response) => {
                            this.noticia = response.data.data;
                            this.noticia.tipo_categoria_publicacao_id = [];

                            $(this.$refs.conteudo).summernote('code', this.noticia.pub_conteudo);

                            if(this.noticia.categorias.length) {
                            	for (var i = this.noticia.categorias.length - 1; i >= 0; i--) {
                            		this.noticia.tipo_categoria_publicacao_id.push( this.noticia.categorias[i].tipo_categoria_publicacao_id );
                            	}
                            }

                            Loading.hide();
                            $(this.$refs.submit).prop("disabled", false);
                        })
                        .catch((error) => {
                            Loading.hide();
                            alert('Não foi possível carregar o recurso informado.');
                        });
                    
                    axios.get('/painel/pagina/ajax/anexos/' + this.resource)
                        .then((response) => {
                            this.attachments = response.data.data;
                        })
                        .catch((error) => {
                            Loading.hide();
                            alert('Não foi possível carregar os anexos.');
                        });
                }
                else {
                	Loading.hide();
                    $(this.$refs.submit).prop("disabled", false);
                }
            },
        	save() {
        		var vm = this;
                this.errors = {};

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                // Pegar conteudo do editor de texto
                this.noticia.pub_conteudo = $(this.$refs.conteudo).summernote('code');

                let data = new FormData();

                for (var i in this.noticia) {
                    if(this.noticia[i]) {
                        data.append(i, this.noticia[i]);
                    }
                }

                for( var i = 0; i < this.files.length; i++ ){
                  let file = this.files[i];
                  data.append('files' + i, file);
                }

                if(this.resource) {
                    data.append("_method", "PUT");
                }

                var promise = axios({
                    method: 'post',
                    url: '/painel/ajax/noticia' + (this.resource ? '/' + this.resource : ''),
                    data: data,
                    headers: { 'content-type': 'multipart/form-data' },
                });

                promise
                	.then((response) => {
                		// window.location.href = this.baseUrl('/painel/noticia/' + response.data.data.publicacao_id + '/edicao?success=1');
                		window.location.href = this.baseUrl('/painel/noticias');
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
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                this.noticia[e.target.id] = files.length ? files[0] : null;
            },
            removeFile() {
                this.noticia.remove_image = true;
                this.noticia.pub_midia_p = null;
            },
            saveCategoria() {
        	    const tcp_nome = this.categoria.tcp_nome;
                const tipo_categoria_publicacao_id = this.categoria.tipo_categoria_publicacao_id;
        	    const _id = Math.random().toString(36).substr(2, 10);

                if (!this.edit_categoria)
        	        this.categorias.push({ _id: _id, tcp_nome: tcp_nome,});
                else {
                    for (let i = this.categorias.length - 1; i >= 0; i--) {
                        if(this.categorias[i].tipo_categoria_publicacao_id == tipo_categoria_publicacao_id) {
                            this.$set(this.categorias[i], '_id', _id);
                            break;
                        }
                    }
                }

                axios.post('painel/ajax/categoria-publicacao', {
                        _id: _id, 
                        tcp_nome: tcp_nome, 
                        tipo_categoria_publicacao_id: tipo_categoria_publicacao_id
                    }).then((response) => {
                        const data = JSON.parse(response.config.data);
                        for (let i = this.categorias.length - 1; i >= 0; i--) {
                            if(this.categorias[i]._id == data._id) {
                                console.log(response.data.data);
                                this.categorias[i] = response.data.data;
                                break;
                            }
                        }
                        this.categoria = {tcp_nome: '',}; 
                        this.edit_categoria = false;
                    })
                    .catch((error) => {
                        const data = JSON.parse(error.config.data);
                        for (let i = this.categorias.length - 1; i >= 0; i--) {
                            if(this.categorias[i]._id == data._id) {
                                this.categorias.splice(i, 1);
                                break;
                            }
                        }
                        alert('Ocorreu um erro ao cadastrar a categoria "' + data.tcp_nome + '".');
                    });

                this.categoria.tcp_nome = "";
            },
            cancelarEdicaoCategoria() {
                this.categoria = {tcp_nome: '',}; 
                this.edit_categoria = false;

                for (let i = this.categorias.length - 1; i >= 0; i--) {
                    if(this.categorias[i].tipo_categoria_publicacao_id == this.categoria_editada.tipo_categoria_publicacao_id) {
                        this.categorias[i] = this.categoria_editada;
                        this.categoria_editada = {};
                        break;
                    }
                }
            },
            remove() {
                if(!confirm('Tem certeza que deseja remover esta notícia? Esta ação não poderá ser desfeita!')) return;

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                axios.post('painel/ajax/noticia/' + this.resource, { _method: 'DELETE' })
                    .then((response) => {
                        window.location.href = this.baseUrl('/painel/noticias');
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
                        $(this.$refs.submit).prop("disabled", false);
                    });
            },
            removeCategoria(item) {
                this.$set(item, 'remove', true);

                axios.post('painel/ajax/categoria-publicacao/' + item.tipo_categoria_publicacao_id, { _method: 'DELETE' })
                    .then((response) => {
                        for (let i = this.categorias.length - 1; i >= 0; i--) {
                            if(this.categorias[i].tipo_categoria_publicacao_id == item.tipo_categoria_publicacao_id) {
                                this.categorias.splice(i, 1);
                                break;
                            }
                        }
                    })
                    .catch((error) => {
                        item.remove = false;
                        alert('Ocorreu um erro ao tentar remover a categoria "' + item.tcp_nome + '".');
                    });
            },
            addRow() {
                    var elem = document.createElement('tr');
                    this.rows.push({
                        file: {
                            name: 'Selecionar Arquivo'
                        }
                    });
            },
            removeElement: function(index) {
                this.rows.splice(index, 1);
            },
            setFilename: function(event, row) {
                var file = event.target.files[0];

                if (file.size > 10000 * 10000) {
                  event.preventDefault();
                  alert('Arquivo muito grande.');
                  return;
                }
                else{
                  row.file = file;
                  this.files.push(file);
                }


            },
            removeAttachment(id) {
                if (!confirm('Tem certeza que deseja remover o anexo?')) return;

                var vm = this;
                Loading.show();

                axios.post('painel/pagina/ajax/anexo/remover/' + id, { _method: 'DELETE' })
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
            },
        }
    }
</script>
<template>
    <div class="container">
        <div class="page-header">
            <h1 v-if="!this.resource">Cadastrar Serviço</h1>
            <h1 v-if="this.resource">Atualizar Serviço</h1>
        </div>

        <div class="alert alert-success alert-dismissible" role="alert" v-if="showSuccessMsg">
            <button type="button" class="close" data-dismiss="alert" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
            <span>Serviço salvo com sucesso.</span>
        </div>

		<div class="panel panel-form">
			<div class="panel-body">
                <form role="form" accept-charset="UTF-8" @submit.prevent="save">
                    <div class="row">
                        <div class="col-lg-9 col-md-8">
                            <form-control :error="errors.pub_titulo">
                                <label for="pub_titulo">Título</label>
                                <input type="text" id="pub_titulo" class="form-control" autofocus v-model="pagina.pub_titulo">
                            </form-control>

                            <form-control :error="errors.pub_descricao">
                                <label for="pub_descricao">Breve Descrição do Serviço</label>
                                <input type="text" id="pub_descricao" class="form-control" autofocus v-model="pagina.pub_descricao">
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
                                <select class="form-control" v-model="pagina.pub_status">
                                    <option value="PUB">Publicado</option>
                                    <option value="RAS">Rascunho</option>
                                </select>
                            </form-control>

                            <form-control :error="errors.tipo_categoria_servico_id">
                                <label>Categoria</label>
                                <div class="checkbox-group">
                                    <template v-for="item in categorias">
                                        <div class="checkbox">
                                            <input required class="categoria" type="radio" v-model="pagina.tipo_categoria_servico_id" :id="'cat_' + item.tipo_categoria_servico_id" v-bind:value="item.tipo_categoria_servico_id" v-on:click="handleClick">
                                            <label :for="'cat_' + item.tipo_categoria_servico_id"><i :class="item.tcs_icone"></i> {{ item.tcs_nome }}</label>
                                        </div>
                                    </template>
                                    <a href="#" class="btn-config" data-toggle="modal" data-target="#modalCategorias"><i class="fa fa-cog"></i> Gerenciar Categorias</a>
                                </div>
                            </form-control>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary" ref="submit" disabled>Salvar</button>
                    <a :href="baseUrl('/painel/paginas')" class="btn btn-default">Voltar</a>

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
                                    <td><i :class="item.tcs_icone"></i> {{ item.tcs_nome }}</td>
                                    <td v-if="!edit_categoria" class="text-right">
                                        <a href="#" class="text-danger" v-show="item.tipo_categoria_servico_id && (!item.tcs_fixa || item.tcs_fixa != 'S')" @click="removeCategoria(item)">
                                            <i class="fa fa-times"></i> Excluir 
                                        </a>
                                        <a href="#" v-show="item.tipo_categoria_servico_id && (!item.tcs_fixa || item.tcs_fixa != 'S')" @click="categoria_editada = Object.assign({}, item); categoria = item; edit_categoria = true">
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
                                <h4>Editando Categoria: <i :class="categoria.tcs_icone"></i> {{ categoria.tcs_nome }}</h4>
                                <a href="#" @click="cancelarEdicaoCategoria()"><small>cancelar edição</small></a>
                            </div>

                            <div class="form-group">
                                <input required type="text" class="form-control" placeholder="Titulo da categoria" v-model="categoria.tcs_nome">
                            </div>
                            <div class="form-group">
                                <input required type="text" class="form-control" placeholder="Descrição" v-model="categoria.tcs_descricao">
                            </div>
                            <div class="form-group">
                                <div class="get-and-preview">
                                    <button type="button" class="btn btn-primary" @click="showIconPicker">Selecionar Icone</button>
                                    <div class="icon-preview" data-toggle="tooltip" title="" data-original-title="Preview of selected Icon">
                                        <i id="IconPreview" :class="categoria.tcs_icone"></i>
                                    </div>

                                    <input required hidden ref="icon_class" type="text" id="IconInput" name="Icon" v-model="categoria.tcs_icone" required="" placeholder="Hidden etc. input for icon classname" autocomplete="off" spellcheck="false">

                                    <button ref="icon_picker" type="button" id="GetIconPicker" data-iconpicker-input="input#IconInput" data-iconpicker-preview="i#IconPreview" class="d-none">Selecionar Icone</button>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import FormControl from '../components/FormControl.vue';
    import template from '../services/TemplateService';

    export default {
    	props: ['resource'],
    	data() {
            return {
                edit_categoria: false,
                categoria_editada: {},
                categorias: [],
                categoria: {
                    tcs_nome: "",
                    tcs_descricao: "",
                    tcs_icone: "",
                },
                files: [],
                rows: [],
                attachments: [],
            	pagina: {
                    pub_titulo: "",
                    pub_descricao: "",
                    pub_conteudo: "",
            		pub_status: 'PUB',
                    pub_ordem_menu: 0,
                    pub_menu_lateral: false,
                    tipo_categoria_servico_id: 0,
                    categorias: []
            	},
            	errors: {},
                showSuccessMsg: false,
            }
        },
        components: {
        	FormControl
        },
        mounted() {
            IconPicker.Init({
                // Required: You have to set the path of IconPicker JSON file to "jsonUrl" option. e.g. '/content/plugins/IconPicker/dist/iconpicker-1.5.0.json'
                jsonUrl: this.baseUrl('IconPicker/dist/iconpicker-1.5.0.json'),
                // Optional: Change the buttons or search placeholder text according to the language.
                searchPlaceholder: 'Buscar Icone',
                showAllButton: 'Mostrar Todos',
                cancelButton: 'Cancelar',
                noResultsFound: 'Sem resultados.', // v1.5.0 and the next versions
                borderRadius: '20px', // v1.5.0 and the next versions
            });

            const self = this;
            // Select your Button element (ID or Class)
            IconPicker.Run('#GetIconPicker', function () {
                $('#modalCategorias').modal('show');
                self.categoria.tcs_icone = self.$refs.icon_class.value;
            });
            
            Loading.show();


            const successMsg = window.location.search.split('success=')[1];
            this.showSuccessMsg = successMsg ? true : false;

            $(this.$refs.conteudo).summernote({
                lang: 'pt-BR',
                minHeight: 200,
                maxHeight: 500,
                maximumImageFileSize: 500*1024, // 500 KB
                toolbar: [
                    ['style1', ['style']],
                    ['style2', ['bold', 'italic', 'underline', 'clear']],
                    ['fontsize', ['fontsize']],
                    ['color', ['color']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['insert', ['link', 'hr', 'table', 'picture', 'video', 'audio']],
                    ['misc', ['fullscreen', 'codeview', 'help']],
                ],
                callbacks:{
                    onImageUploadError: function(msg){
                        alert(msg + ' (Tamanho máximo permitido: 500 KB). Prefira imagens no formato jpeg/jpg');
                    }
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

            axios.get('/painel/ajax/categoria-servico')
				.then((response) => {
					this.categorias = response.data.data;
					this.fetch();
				});
        },
        methods: {
            fetch() {
                if(this.resource) {
                    axios.get('/painel/ajax/pagina/' + this.resource + '/?servico=1')
                        .then((response) => {
                            this.pagina = response.data.data;
                            this.pagina.pub_menu_lateral = (this.pagina.pub_menu_lateral == 'S');
                            $(this.$refs.conteudo).summernote('code', this.pagina.pub_conteudo);

                            Loading.hide();
                            $(this.$refs.submit).prop("disabled", false);
                        })
                        .catch((error) => {
                            console.log(error);
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
                    $(this.$refs.conteudo).summernote('code', template);
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
                this.pagina.pub_conteudo = $(this.$refs.conteudo).summernote('code');

                let data = $.extend({}, this.pagina);

                let formData = new FormData();
                formData.append('pub_titulo', this.pagina.pub_titulo);
                formData.append('pub_descricao', this.pagina.pub_descricao);
                formData.append('pub_conteudo', this.pagina.pub_conteudo);
                formData.append('pub_status', this.pagina.pub_status);
                formData.append('pub_ordem_menu', this.pagina.pub_ordem_menu);
                formData.append('pub_menu_lateral', this.pagina.pub_menu_lateral);
                if (this.pagina.tipo_categoria_servico_id != 0) 
                    formData.append('tipo_categoria_servico_id', this.pagina.tipo_categoria_servico_id);

                for( var i = 0; i < this.files.length; i++ ){
                  let file = this.files[i];
                  formData.append('files' + i, file);
                }

                if(this.resource) {
                    data["_method"] = "PUT";
                }

                var promise = axios({
                    method: 'post',
                    url: '/painel/ajax/pagina' + (this.resource ? '/' + this.resource : '') + '?servico=1',
                    data: formData,
                    headers: { 'content-type': 'multipart/form-data' },
                });

                promise
                    .then((response) => {
                        // window.location.href = this.baseUrl('/painel/pagina/' + response.data.data.publicacao_id + '/edicao?success=1');
                        window.location.href = this.baseUrl('/painel/paginas?servico=1');
                        // console.log(response);
                        // Loading.hide();
                        // $(this.$refs.submit).prop("disabled", false);
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
            remove() {
                if(!confirm('Tem certeza que deseja remover este serviço? Esta ação não poderá ser desfeita!')) return;

                $(this.$refs.submit).prop("disabled", true);
                Loading.show();

                axios.post('painel/ajax/pagina/' + this.resource + '?servico=1', { _method: 'DELETE' })
                    .then((response) => {
                        window.location.href = this.baseUrl('/painel/paginas?servico=1');
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
            removeCategoria(item) {
                this.$set(item, 'remove', true);

                axios.post('painel/ajax/categoria-servico/' + item.tipo_categoria_servico_id, { _method: 'DELETE' })
                    .then((response) => {
                        for (let i = this.categorias.length - 1; i >= 0; i--) {
                            if(this.categorias[i].tipo_categoria_servico_id == item.tipo_categoria_servico_id) {
                                this.categorias.splice(i, 1);
                                break;
                            }
                        }
                    })
                    .catch((error) => {
                        item.remove = false;
                        alert('Ocorreu um erro ao tentar remover a categoria "' + item.tcs_nome + '".');
                    });
            },
            saveCategoria() {
        	    const tcs_nome = this.categoria.tcs_nome;
                const tcs_descricao = this.categoria.tcs_descricao;
                const tcs_icone = this.categoria.tcs_icone;
                const tipo_categoria_servico_id = this.categoria.tipo_categoria_servico_id;
        	    const _id = Math.random().toString(36).substr(2, 10);

                if (!this.edit_categoria)
        	        this.categorias.push({ _id: _id, tcs_nome: tcs_nome, tcs_descricao: tcs_descricao, tcs_icone: tcs_icone});
                else {
                    for (let i = this.categorias.length - 1; i >= 0; i--) {
                        if(this.categorias[i].tipo_categoria_servico_id == tipo_categoria_servico_id) {
                            this.$set(this.categorias[i], '_id', _id);
                            break;
                        }
                    }
                }

                axios.post('painel/ajax/categoria-servico', {
                        _id: _id, 
                        tcs_nome: tcs_nome, 
                        tcs_descricao: tcs_descricao, 
                        tcs_icone: tcs_icone, 
                        tipo_categoria_servico_id: tipo_categoria_servico_id
                    }).then((response) => {
                        const data = JSON.parse(response.config.data);
                        for (let i = this.categorias.length - 1; i >= 0; i--) {
                            if(this.categorias[i]._id == data._id) {
                                console.log(response.data.data);
                                this.categorias[i] = response.data.data;
                                break;
                            }
                        }
                        this.categoria = {tcs_nome: '',tcs_descricao: '',tcs_icone: '',}; 
                        this.edit_categoria = false;
                        this.categoria_editada = {};
                    })
                    .catch((error) => {
                        const data = JSON.parse(error.config.data);
                        for (let i = this.categorias.length - 1; i >= 0; i--) {
                            if(this.categorias[i]._id == data._id) {
                                this.categorias.splice(i, 1);
                                break;
                            }
                        }
                        alert('Ocorreu um erro ao cadastrar a categoria "' + data.tcs_nome + '".');
                    });

                this.categoria.tcs_nome = "";
            },
            cancelarEdicaoCategoria() {
                this.categoria = {tcs_nome: '',tcs_descricao: '',tcs_icone: '',}; 
                this.edit_categoria = false;

                for (let i = this.categorias.length - 1; i >= 0; i--) {
                    if(this.categorias[i].tipo_categoria_servico_id == this.categoria_editada.tipo_categoria_servico_id) {
                        this.categorias[i] = this.categoria_editada;
                        this.categoria_editada = {};
                        break;
                    }
                }
            },
            handleClick(e){
                // in the handler, 'this' refers to the box clicked on
                console.log('handle click ' + e.target.value);
                var $box = $(e.target);
                if ($box.is(":checked")) {
                    $("input[id!='" + $box.id + "'].categoria").prop("checked", false);
                    $box.prop("checked", true);
                    this.pagina.tipo_categoria_servico_id = e.target.value;
                } else {
                    this.pagina.tipo_categoria_servico_id = 0;
                    $box.prop("checked", false);
                }

                console.log(this.pagina.tipo_categoria_servico_id);
            },
            showIconPicker() {
                $('#modalCategorias').modal('hide');
                $(this.$refs.icon_picker).click();
            }
        },
    }
</script>

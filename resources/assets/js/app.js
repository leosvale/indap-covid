require('./summernote-pt-BR');
require('./summernote-image-attributes');
require('./pt-BR');

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import {ServerTable, ClientTable, Event} from 'vue-tables-2'
import Loading from './services/LoadingService.js'
import VueMask from 'v-mask';


window.Vue = Vue;
window.Loading = Loading;

Vue.use(ServerTable);

Vue.use(VueMask);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.mixin({
    methods: {
        baseUrl: function (path) {
            // Verifica se eh uma URL completa
            if(path.substring(0,4) == 'http') {
                return path;
            }

            if(window.BASE_URL.slice(-1) != '/' && path.substring(0,1) != '/') {
                return window.BASE_URL + '/' + path;
            }

            if(window.BASE_URL.slice(-1) == '/' && path.substring(0,1) == '/') {
                return window.BASE_URL + '/' + path.substring(1);
            }

            return window.BASE_URL + path;
        },
        vueTableTexts: function() {
            return {
                count: "{from} – {to} de {count} registros|{count} registros|1 registro",
                filter: "Filter Results:",
                filterPlaceholder: "Search query",
                limit: "Registros:",
                page: "Página:",
                noResults: "Nenhum resultado encontrado",
                filterBy: "Filter by {column}",
                loading: 'Carregando...',
                defaultOption: 'Select {column}'
            }
        }
    }
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response && error.response.status == 401) {
        window.location.reload();
    }
    return Promise.reject(error);
});

const app = new Vue({
    el: '#app',
    components: {
        'painel-acesso': require('./pages/PainelAcesso.vue'),

        'documento-lista': 	  require('./pages/DocumentoLista.vue'),
        'documento-cadastro': require('./pages/DocumentoCadastro.vue'),

        'servico-lista': 	require('./pages/ServicoLista.vue'),
        'servico-cadastro': 	require('./pages/ServicoCadastro.vue'),

      	'solicitacao-lista': 	require('./pages/SolicitacaoLista.vue'),
      	'solicitacao-cadastro': require('./pages/SolicitacaoCadastro.vue'),
      	'solicitacao-detalhes': require('./pages/SolicitacaoDetalhes.vue'),

      	'noticia-lista': 	require('./pages/NoticiaLista.vue'),
      	'noticia-cadastro': require('./pages/NoticiaCadastro.vue'),

      	'pagina-lista': 	require('./pages/PaginaLista.vue'),
        'pagina-cadastro': require('./pages/PaginaCadastro.vue'),
        'pagina-accordion': require('./pages/PaginaAccordion.vue'),
        'pagina-redirect': require('./pages/PaginaRedirect.vue'),

      	'ouvidoria-lista': require('./pages/OuvidoriaLista.vue'),
      	'ouvidoria-detalhes': require('./pages/OuvidoriaDetalhes.vue'),


      	'banner-cadastro': require('./pages/BannerCadastro.vue'),

        'edital-lista': require('./pages/EditalLista.vue'),
        'edital-detalhe': require('./pages/EditalDetalhe.vue'),

        'configuracao-cadastro': require('./pages/ConfiguracaoCadastro.vue'),
        'configuracao-cadastro-usuario': require('./pages/ConfiguracaoCadastroUsuario.vue'),
        'configuracao-usuarios': require('./pages/ConfiguracaoUsuarios.vue'),

        'vacinometro-cadastro': require('./pages/VacinometroCadastro.vue'),


        'solicitante-acesso': require('./pages/SolicitanteAcesso.vue'),
        'solicitante-cadastro': require('./pages/SolicitanteCadastro.vue'),
        'solicitante-recuperar-senha': require('./pages/SolicitanteRecuperarSenha.vue'),
        'solicitante-recuperacao': require('./pages/SolicitanteRecuperacao.vue'),
        'solicitante-relatorio': require('./pages/SolicitanteRelatorio.vue'),
		'solicitante-presencial': require('./pages/SolicitantePresencial.vue'),

        'solicitacao-usuario-lista': 	require('./pages/SolicitacaoUsuarioLista.vue'),
        'solicitacao-usuario-cadastro': require('./pages/SolicitacaoUsuarioCadastro.vue'),
        'solicitacao-usuario-detalhes': require('./pages/SolicitacaoUsuarioDetalhes.vue'),
    }
});

webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(352)
/* template */
var __vue_template__ = __webpack_require__(353)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/FormControl.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7978c9dc", Component.options)
  } else {
    hotAPI.reload("data-v-7978c9dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(186);
__webpack_require__(452);
__webpack_require__(453);
module.exports = __webpack_require__(454);


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_tables_2__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_tables_2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_tables_2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_LoadingService_js__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_v_mask__ = __webpack_require__(349);
__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(190);






window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue___default.a;
window.Loading = __WEBPACK_IMPORTED_MODULE_2__services_LoadingService_js__["a" /* default */];

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_tables_2__["ServerTable"]);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_v_mask__["a" /* default */]);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.mixin({
    methods: {
        baseUrl: function baseUrl(path) {
            // Verifica se eh uma URL completa
            if (path.substring(0, 4) == 'http') {
                return path;
            }

            if (window.BASE_URL.slice(-1) != '/' && path.substring(0, 1) != '/') {
                return window.BASE_URL + '/' + path;
            }

            if (window.BASE_URL.slice(-1) == '/' && path.substring(0, 1) == '/') {
                return window.BASE_URL + '/' + path.substring(1);
            }

            return window.BASE_URL + path;
        },
        vueTableTexts: function vueTableTexts() {
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
            };
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

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    components: {
        'painel-acesso': __webpack_require__(350),

        'documento-lista': __webpack_require__(355),
        'documento-cadastro': __webpack_require__(358),

        'servico-lista': __webpack_require__(362),
        'servico-cadastro': __webpack_require__(365),

        'solicitacao-lista': __webpack_require__(369),
        'solicitacao-cadastro': __webpack_require__(372),
        'solicitacao-detalhes': __webpack_require__(375),

        'noticia-lista': __webpack_require__(378),
        'noticia-cadastro': __webpack_require__(381),

        'pagina-lista': __webpack_require__(384),
        'pagina-cadastro': __webpack_require__(387),
        'pagina-accordion': __webpack_require__(390),
        'pagina-redirect': __webpack_require__(393),

        'ouvidoria-lista': __webpack_require__(396),
        'ouvidoria-detalhes': __webpack_require__(399),

        'banner-cadastro': __webpack_require__(407),

        'edital-lista': __webpack_require__(410),
        'edital-detalhe': __webpack_require__(413),

        'configuracao-cadastro': __webpack_require__(416),
        'configuracao-cadastro-usuario': __webpack_require__(419),
        'configuracao-usuarios': __webpack_require__(422),

        'solicitante-acesso': __webpack_require__(425),
        'solicitante-cadastro': __webpack_require__(428),
        'solicitante-recuperar-senha': __webpack_require__(431),
        'solicitante-recuperacao': __webpack_require__(434),
        'solicitante-relatorio': __webpack_require__(437),
        'solicitante-presencial': __webpack_require__(440),

        'solicitacao-usuario-lista': __webpack_require__(443),
        'solicitacao-usuario-cadastro': __webpack_require__(446),
        'solicitacao-usuario-detalhes': __webpack_require__(449)
    }
});

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
  $.extend($.summernote.lang, {
    'pt-BR': {
      font: {
        bold: 'Negrito',
        italic: 'Itálico',
        underline: 'Sublinhado',
        clear: 'Remover estilo da fonte',
        height: 'Altura da linha',
        name: 'Fonte',
        strikethrough: 'Riscado',
        subscript: 'Subscrito',
        superscript: 'Sobrescrito',
        size: 'Tamanho da fonte'
      },
      image: {
        image: 'Imagem',
        insert: 'Inserir imagem',
        resizeFull: 'Redimensionar Completamente',
        resizeHalf: 'Redimensionar pela Metade',
        resizeQuarter: 'Redimensionar a um Quarto',
        floatLeft: 'Flutuar para Esquerda',
        floatRight: 'Flutuar para Direita',
        floatNone: 'Não Flutuar',
        shapeRounded: 'Forma: Arredondado',
        shapeCircle: 'Forma: Círculo',
        shapeThumbnail: 'Forma: Miniatura',
        shapeNone: 'Forma: Nenhum',
        dragImageHere: 'Arraste Imagem ou Texto para cá',
        dropImage: 'Solte Imagem ou Texto',
        selectFromFiles: 'Selecione a partir dos arquivos',
        maximumFileSize: 'Tamanho máximo do arquivo',
        maximumFileSizeError: 'Tamanho máximo do arquivo excedido.',
        url: 'URL da imagem',
        remove: 'Remover Imagem',
        original: 'Original'
      },
      video: {
        video: 'Vídeo',
        videoLink: 'Link para vídeo',
        insert: 'Inserir vídeo',
        url: 'URL do vídeo?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion ou Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Inserir link',
        unlink: 'Remover link',
        edit: 'Editar',
        textToDisplay: 'Texto para exibir',
        url: 'Para qual URL este link leva?',
        openInNewWindow: 'Abrir em uma nova janela'
      },
      table: {
        table: 'Tabela',
        addRowAbove: 'Adicionar linha acima',
        addRowBelow: 'Adicionar linha abaixo',
        addColLeft: 'Adicionar coluna à esquerda',
        addColRight: 'Adicionar coluna à direita',
        delRow: 'Excluir linha',
        delCol: 'Excluir coluna',
        delTable: 'Excluir tabela'
      },
      hr: {
        insert: 'Linha horizontal'
      },
      style: {
        style: 'Estilo',
        p: 'Normal',
        blockquote: 'Citação',
        pre: 'Código',
        h1: 'Título 1',
        h2: 'Título 2',
        h3: 'Título 3',
        h4: 'Título 4',
        h5: 'Título 5',
        h6: 'Título 6'
      },
      lists: {
        unordered: 'Lista com marcadores',
        ordered: 'Lista numerada'
      },
      options: {
        help: 'Ajuda',
        fullscreen: 'Tela cheia',
        codeview: 'Ver código-fonte'
      },
      paragraph: {
        paragraph: 'Parágrafo',
        outdent: 'Menor tabulação',
        indent: 'Maior tabulação',
        left: 'Alinhar à esquerda',
        center: 'Alinhar ao centro',
        right: 'Alinha à direita',
        justify: 'Justificado'
      },
      color: {
        recent: 'Cor recente',
        more: 'Mais cores',
        background: 'Fundo',
        foreground: 'Fonte',
        transparent: 'Transparente',
        setTransparent: 'Fundo transparente',
        reset: 'Restaurar',
        resetToDefault: 'Restaurar padrão',
        cpSelect: 'Selecionar'
      },
      shortcut: {
        shortcuts: 'Atalhos do teclado',
        close: 'Fechar',
        textFormatting: 'Formatação de texto',
        action: 'Ação',
        paragraphFormatting: 'Formatação de parágrafo',
        documentStyle: 'Estilo de documento',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': 'Inserir Parágrafo',
        'undo': 'Desfazer o último comando',
        'redo': 'Refazer o último comando',
        'tab': 'Tab',
        'untab': 'Desfazer tab',
        'bold': 'Colocar em negrito',
        'italic': 'Colocar em itálico',
        'underline': 'Sublinhado',
        'strikethrough': 'Tachado',
        'removeFormat': 'Remover estilo',
        'justifyLeft': 'Alinhar à esquerda',
        'justifyCenter': 'Centralizar',
        'justifyRight': 'Alinhar à esquerda',
        'justifyFull': 'Justificar',
        'insertUnorderedList': 'Lista não ordenada',
        'insertOrderedList': 'Lista ordenada',
        'outdent': 'Recuar parágrafo atual',
        'indent': 'Avançar parágrafo atual',
        'formatPara': 'Alterar formato do bloco para parágrafo(tag P)',
        'formatH1': 'Alterar formato do bloco para H1',
        'formatH2': 'Alterar formato do bloco para H2',
        'formatH3': 'Alterar formato do bloco para H3',
        'formatH4': 'Alterar formato do bloco para H4',
        'formatH5': 'Alterar formato do bloco para H5',
        'formatH6': 'Alterar formato do bloco para H6',
        'insertHorizontalRule': 'Inserir Régua horizontal',
        'linkDialog.show': 'Inserir um Hiperlink'
      },
      history: {
        undo: 'Desfazer',
        redo: 'Refazer'
      },
      specialChar: {
        specialChar: 'CARACTERES ESPECIAIS',
        select: 'Selecionar Caracteres Especiais'
      }
    }
  });
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* https://github.com/DiemenDesign/summernote-image-attributes */
(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
    module.exports = factory(require('jquery'));
  } else {
    factory(window.jQuery);
  }
})(function ($) {
  var readFileAsDataURL = function readFileAsDataURL(file) {
    return $.Deferred(function (deferred) {
      $.extend(new FileReader(), {
        onload: function onload(e) {
          var sDataURL = e.target.result;
          deferred.resolve(sDataURL);
        },
        onerror: function onerror() {
          deferred.reject(this);
        }
      }).readAsDataURL(file);
    }).promise();
  };
  $.extend(true, $.summernote.lang, {
    'en-US': { /* US English(Default Language) */
      imageAttributes: {
        dialogTitle: 'Image Attributes',
        tooltip: 'Image Attributes',
        tabImage: 'Image',
        src: 'Source',
        browse: 'Browse',
        title: 'Title',
        alt: 'Alt Text',
        dimensions: 'Dimensions',
        tabAttributes: 'Attributes',
        class: 'Class',
        style: 'Style',
        role: 'Role',
        tabLink: 'Link',
        linkHref: 'URL',
        linkTarget: 'Target',
        linkTargetInfo: 'Options: _self, _blank, _top, _parent',
        linkClass: 'Class',
        linkStyle: 'Style',
        linkRel: 'Rel',
        linkRelInfo: 'Options: alternate, author, bookmark, help, license, next, nofollow, noreferrer, prefetch, prev, search, tag',
        linkRole: 'Role',
        tabUpload: 'Upload',
        upload: 'Upload',
        tabBrowse: 'Browse',
        editBtn: 'OK'
      }
    }
  });
  $.extend($.summernote.options, {
    imageAttributes: {
      icon: '<i class="note-icon-pencil"/>',
      removeEmpty: true,
      disableUpload: false,
      imageFolder: ''
    }
  });
  $.extend($.summernote.plugins, {
    'imageAttributes': function imageAttributes(context) {
      var self = this,
          ui = $.summernote.ui,
          $note = context.layoutInfo.note,
          $editor = context.layoutInfo.editor,
          $editable = context.layoutInfo.editable,
          options = context.options,
          lang = options.langInfo,
          imageAttributesLimitation = '';
      if (options.maximumImageFileSize) {
        var unit = Math.floor(Math.log(options.maximumImageFileSize) / Math.log(1024));
        var readableSize = (options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 + ' ' + ' KMGTP'[unit] + 'B';
        imageAttributesLimitation = '<small class="help-block note-help-block">' + lang.image.maximumFileSize + ' : ' + readableSize + '</small>';
      }
      if (!('_counter' in $.summernote.options.imageAttributes)) {
        $.summernote.options.imageAttributes._counter = 0;
      }
      context.memo('button.imageAttributes', function () {
        var button = ui.button({
          contents: options.imageAttributes.icon,
          container: "body",
          tooltip: lang.imageAttributes.tooltip,
          click: function click() {
            context.invoke('imageAttributes.show');
          }
        });
        return button.render();
      });
      this.initialize = function () {
        var $container = options.dialogsInBody ? $(document.body) : $editor;
        $.summernote.options.imageAttributes._counter++;
        var i = $.summernote.options.imageAttributes._counter;
        // console.log('indice for imageAttribute : ', i);
        var body = '<ul class="nav note-nav nav-tabs note-nav-tabs">' + '<li class="nav-item note-nav-item active"><a class="nav-link note-nav-link active" href="#note-imageAttributes-' + i + '" data-toggle="tab">' + lang.imageAttributes.tabImage + '</a></li>' + '<li class="nav-item note-nav-item"><a class="nav-link note-nav-link" href="#note-imageAttributes-attributes-' + i + '" data-toggle="tab">' + lang.imageAttributes.tabAttributes + '</a></li>' + '<li class="nav-item note-nav-item"><a class="nav-link note-nav-link" href="#note-imageAttributes-link-' + i + '" data-toggle="tab">' + lang.imageAttributes.tabLink + '</a></li>';
        if (options.imageAttributes.disableUpload == false) {
          body += '<li class="nav-item note-nav-item"><a class="nav-link note-nav-link" href="#note-imageAttributes-upload-' + i + '" data-toggle="tab">' + lang.imageAttributes.tabUpload + '</a></li>';
        }
        body += '</ul>' + '<div class="tab-content note-tab-content">' +
        // Tab 2
        '<div class="tab-pane note-tab-pane" id="note-imageAttributes-attributes-' + i + '">' + '<div class="note-form-group form-group note-group-imageAttributes-class">' + '<label class="control-label note-form-label col-sm-3">' + lang.imageAttributes.class + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-class form-control note-form-control note-input" type="text">' + '</div>' + '</div>' + '<div class="note-form-group form-group note-group-imageAttributes-style">' + '<label class="control-label note-form-label col-sm-3">' + lang.imageAttributes.style + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-style form-control note-form-control note-input" type="text">' + '</div>' + '</div>' + '<div class="note-form-group form-group note-group-imageAttributes-role">' + '<label class="control-label note-form-label col-sm-3">' + lang.imageAttributes.role + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-role form-control note-form-control note-input" type="text">' + '</div>' + '</div>' + '</div>' +
        // Tab 3
        '<div class="tab-pane note-tab-pane" id="note-imageAttributes-link-' + i + '">' + '<div class="note-form-group form-group note-group-imageAttributes-link-href">' + '<label class="control-label note-form-label col-xs-3">' + lang.imageAttributes.linkHref + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-link-href form-control note-form-control note-input" type="text">' + '</div>' + '</div>' + '<div class="note-form-group form-group note-group-imageAttributes-link-target">' + '<label class="control-label note-form-label col-xs-3">' + lang.imageAttributes.linkTarget + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-link-target form-control note-form-control note-input" type="text">' + '</div>' + '<small class="help-block note-help-block text-right">' + lang.imageAttributes.linkTargetInfo + '</small>' + '</div>' + '<div class="note-form-group form-group note-group-imageAttributes-link-class">' + '<label class="control-label note-form-label col-xs-3">' + lang.imageAttributes.linkClass + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-link-class form-control note-form-control note-input" type="text">' + '</div>' + '</div>' + '<div class="note-form-group form-group note-group-imageAttributes-link-style">' + '<label class="control-label note-form-label col-xs-3">' + lang.imageAttributes.linkStyle + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-link-style form-control note-form-control note-input" type="text">' + '</div>' + '</div>' + '<div class="note-form-group form-group note-group-imageAttributes-link-rel">' + '<label class="control-label note-form-label col-xs-3">' + lang.imageAttributes.linkRel + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-link-rel form-control note-form-control note-input" type="text">' + '</div>' + '<small class="help-block note-help-block text-right">' + lang.imageAttributes.linkRelInfo + '</small>' + '</div>' + '<div class="note-form-group form-group note-group-imageAttributes-link-role">' + '<label class="control-label note-form-label col-xs-3">' + lang.imageAttributes.linkRole + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-link-role form-control note-form-control note-input" type="text">' + '</div>' + '</div>' + '</div>';
        if (options.imageAttributes.disableUpload == false) {
          // Tab 4
          body += '<div class="tab-pane note-tab-pane" id="note-imageAttributes-upload-' + i + '">' + '<label class="control-label note-form-label col-xs-3">' + lang.imageAttributes.upload + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-input form-control note-form-control note-input" type="file" name="files" accept="image/*" multiple="multiple">' + imageAttributesLimitation + '</div>' + '</div>';
        }
        // Tab 1
        body += '<div class="tab-pane note-tab-pane fade in active" id="note-imageAttributes-' + i + '">' + '<div class="note-form-group form-group note-group-imageAttributes-url">' + '<label class="control-label note-form-label col-sm-3">' + lang.imageAttributes.src + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-src form-control note-form-control note-input" type="text">' + '</div>' + '</div>' + '<div class="note-form-group form-group note-group-imageAttributes-title">' + '<label class="control-label note-form-label col-sm-3">' + lang.imageAttributes.title + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-title form-control note-form-control note-input" type="text">' + '</div>' + '</div>' + '<div class="note-form-group form-group note-group-imageAttributes-alt">' + '<label class="control-label note-form-label col-sm-3">' + lang.imageAttributes.alt + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-alt form-control note-form-control note-input" type="text">' + '</div>' + '</div>' + '<div class="note-form-group form-group note-group-imageAttributes-dimensions">' + '<label class="control-label note-form-label col-sm-3">' + lang.imageAttributes.dimensions + '</label>' + '<div class="input-group note-input-group col-xs-12 col-sm-9">' + '<input class="note-imageAttributes-width form-control note-form-control note-input" type="text">' + '<span class="input-group-addon note-input-group-addon">x</span>' + '<input class="note-imageAttributes-height form-control note-form-control note-input" type="text">' + '</div>' + '</div>' + '</div>' + '</div>';
        this.$dialog = ui.dialog({
          title: lang.imageAttributes.dialogTitle,
          body: body,
          footer: '<button href="#" class="btn btn-primary note-btn note-btn-primary note-imageAttributes-btn">' + lang.imageAttributes.editBtn + '</button>'
        }).render().appendTo($container);
      };
      this.destroy = function () {
        ui.hideDialog(this.$dialog);
        this.$dialog.remove();
      };
      this.bindEnterKey = function ($input, $btn) {
        $input.on('keypress', function (e) {
          if (e.keyCode === 13) $btn.trigger('click');
        });
      };
      this.bindLabels = function () {
        self.$dialog.find('.form-control:first').focus().select();
        self.$dialog.find('label').on('click', function () {
          $(this).parent().find('.form-control:first').focus();
        });
      };
      this.show = function () {
        var $img = $($editable.data('target'));
        var imgInfo = {
          imgDom: $img,
          title: $img.attr('title'),
          src: $img.attr('src'),
          alt: $img.attr('alt'),
          width: $img.attr('width'),
          height: $img.attr('height'),
          role: $img.attr('role'),
          class: $img.attr('class'),
          style: $img.attr('style'),
          imgLink: $($img).parent().is("a") ? $($img).parent() : null
        };
        this.showImageAttributesDialog(imgInfo).then(function (imgInfo) {
          ui.hideDialog(self.$dialog);
          var $img = imgInfo.imgDom;
          if (options.imageAttributes.removeEmpty) {
            if (imgInfo.alt) $img.attr('alt', imgInfo.alt);else $img.removeAttr('alt');
            if (imgInfo.width) $img.attr('width', imgInfo.width);else $img.removeAttr('width');
            if (imgInfo.height) $img.attr('height', imgInfo.height);else $img.removeAttr('height');
            if (imgInfo.title) $img.attr('title', imgInfo.title);else $img.removeAttr('title');
            if (imgInfo.src) $img.attr('src', imgInfo.src);else $img.attr('src', '#');
            if (imgInfo.class) $img.attr('class', imgInfo.class);else $img.removeAttr('class');
            if (imgInfo.style) $img.attr('style', imgInfo.style);else $img.removeAttr('style');
            if (imgInfo.role) $img.attr('role', imgInfo.role);else $img.removeAttr('role');
          } else {
            if (imgInfo.src) $img.attr('src', imgInfo.src);else $img.attr('src', '#');
            $img.attr('alt', imgInfo.alt);
            $img.attr('width', imgInfo.width);
            $img.attr('height', imgInfo.height);
            $img.attr('title', imgInfo.title);
            $img.attr('class', imgInfo.class);
            $img.attr('style', imgInfo.style);
            $img.attr('role', imgInfo.role);
          }
          if ($img.parent().is("a")) $img.unwrap();
          if (imgInfo.linkHref) {
            var linkBody = '<a';
            if (imgInfo.linkClass) linkBody += ' class="' + imgInfo.linkClass + '"';
            if (imgInfo.linkStyle) linkBody += ' style="' + imgInfo.linkStyle + '"';
            linkBody += ' href="' + imgInfo.linkHref + '" target="' + imgInfo.linkTarget + '"';
            if (imgInfo.linkRel) linkBody += ' rel="' + imgInfo.linkRel + '"';
            if (imgInfo.linkRole) linkBody += ' role="' + imgInfo.linkRole + '"';
            linkBody += '></a>';
            $img.wrap(linkBody);
          }
          $note.val(context.invoke('code'));
          $note.change();
        });
      };
      this.showImageAttributesDialog = function (imgInfo) {
        return $.Deferred(function (deferred) {
          var $imageTitle = self.$dialog.find('.note-imageAttributes-title'),
              $imageInput = self.$dialog.find('.note-imageAttributes-input'),
              $imageSrc = self.$dialog.find('.note-imageAttributes-src'),
              $imageAlt = self.$dialog.find('.note-imageAttributes-alt'),
              $imageWidth = self.$dialog.find('.note-imageAttributes-width'),
              $imageHeight = self.$dialog.find('.note-imageAttributes-height'),
              $imageClass = self.$dialog.find('.note-imageAttributes-class'),
              $imageStyle = self.$dialog.find('.note-imageAttributes-style'),
              $imageRole = self.$dialog.find('.note-imageAttributes-role'),
              $linkHref = self.$dialog.find('.note-imageAttributes-link-href'),
              $linkTarget = self.$dialog.find('.note-imageAttributes-link-target'),
              $linkClass = self.$dialog.find('.note-imageAttributes-link-class'),
              $linkStyle = self.$dialog.find('.note-imageAttributes-link-style'),
              $linkRel = self.$dialog.find('.note-imageAttributes-link-rel'),
              $linkRole = self.$dialog.find('.note-imageAttributes-link-role'),
              $editBtn = self.$dialog.find('.note-imageAttributes-btn');
          $linkHref.val();
          $linkClass.val();
          $linkStyle.val();
          $linkRole.val();
          $linkTarget.val();
          $linkRel.val();
          if (imgInfo.imgLink) {
            $linkHref.val(imgInfo.imgLink.attr('href'));
            $linkClass.val(imgInfo.imgLink.attr('class'));
            $linkStyle.val(imgInfo.imgLink.attr('style'));
            $linkRole.val(imgInfo.imgLink.attr('role'));
            $linkTarget.val(imgInfo.imgLink.attr('target'));
            $linkRel.val(imgInfo.imgLink.attr('rel'));
          }
          ui.onDialogShown(self.$dialog, function () {
            context.triggerEvent('dialog.shown');
            $imageInput.replaceWith($imageInput.clone().on('change', function () {
              var callbacks = options.callbacks;
              if (callbacks.onImageUpload) {
                context.triggerEvent('image.upload', this.files[0]);
              } else {
                readFileAsDataURL(this.files[0]).then(function (dataURL) {
                  $imageSrc.val(dataURL);
                }).fail(function () {
                  context.triggerEvent('image.upload.error');
                });
              }
            }).val(''));
            $editBtn.click(function (e) {
              e.preventDefault();
              deferred.resolve({
                imgDom: imgInfo.imgDom,
                title: $imageTitle.val(),
                src: $imageSrc.val(),
                alt: $imageAlt.val(),
                width: $imageWidth.val(),
                height: $imageHeight.val(),
                class: $imageClass.val(),
                style: $imageStyle.val(),
                role: $imageRole.val(),
                linkHref: $linkHref.val(),
                linkTarget: $linkTarget.val(),
                linkClass: $linkClass.val(),
                linkStyle: $linkStyle.val(),
                linkRel: $linkRel.val(),
                linkRole: $linkRole.val()
              }).then(function (img) {
                context.triggerEvent('change', $editable.html());
              });
            });
            $imageTitle.val(imgInfo.title);
            $imageSrc.val(imgInfo.src);
            $imageAlt.val(imgInfo.alt);
            $imageWidth.val(imgInfo.width);
            $imageHeight.val(imgInfo.height);
            $imageClass.val(imgInfo.class);
            $imageStyle.val(imgInfo.style);
            $imageRole.val(imgInfo.role);
            self.bindEnterKey($editBtn);
            self.bindLabels();
          });
          ui.onDialogHidden(self.$dialog, function () {
            $editBtn.off('click');
            if (deferred.state() === 'pending') deferred.reject();
          });
          ui.showDialog(self.$dialog);
        });
      };
    }
  });
});

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$.extend(true, $.summernote.lang, {
  'pt-BR': { /* Portuguese */
    imageAttributes: {
      dialogTitle: 'Atributos da Imagem',
      tooltip: 'Atributos da Imagem',
      tabImage: 'Imagem',
      src: 'Fonte',
      browse: 'Vistazo',
      title: 'Titulo',
      alt: 'Texto Alternativo',
      dimensions: 'Dimensões',
      tabAttributes: 'Atributos',
      class: 'Classes',
      style: 'Estilo',
      role: 'Papel',
      tabLink: 'Link',
      linkHref: 'URL',
      linkTarget: 'Destino',
      linkTargetInfo: 'Opções: _self, _blank, _top, _parent',
      linkClass: 'Classes',
      linkStyle: 'Estilo',
      linkRel: 'Rel',
      linkRelInfo: 'Opções: alternate, author, bookmark, help, license, next, nofollow, noreferrer, prefetch, prev, search, tag',
      linkRole: 'Papel',
      tabUpload: 'Enviar',
      upload: 'Enviar',
      tabBrowse: 'Navegar',
      editBtn: 'OK'
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {
// window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__(1);

  __webpack_require__(15);
  __webpack_require__(16);
  __webpack_require__(17);
  __webpack_require__(18);
  __webpack_require__(191);
} catch (e) {}

window.moment = __webpack_require__(0);

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

//require('es6-promise').polyfill();
window.axios = __webpack_require__(155);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = window.BASE_URL;

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 
 * copyright 2018 [Taal & Digitaal | Hendri Smit].
 * email: hen3smit@gmail.com
 * license: MIT
 * 
 */
(function (factory) {
    /* Global define */
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(window.jQuery);
    }
})(function ($) {
    $.extend(true, $.summernote.lang, {
        'en-US': {
            audio: {
                audio: 'Audio',
                insert: 'Insert Audio',
                selectFromFiles: 'Select from files',
                url: 'Audio URL',
                maximumFileSize: 'Maximum file size',
                maximumFileSizeError: 'Maximum file size exceeded.'
            }
        },
        'nl-NL': {
            audio: {
                audio: 'Audio',
                insert: 'Audio invoegen',
                selectFromFiles: 'Selecteer een bestand',
                url: 'URL van de audio',
                maximumFileSize: 'Maximale bestandsgrootte',
                maximumFileSizeError: 'Bestand te groot.'
            }
        },
        'pt-BR': {
            audio: {
                audio: 'Audio',
                insert: 'Inserir Audio',
                selectFromFiles: 'Selecionar Arquivo',
                url: 'Audio URL',
                maximumFileSize: 'Tamanho máximo do arquivo',
                maximumFileSizeError: 'Tamanho máximo do arquivo ultrapassado.'
            }
        }
    });

    $.extend($.summernote.options, {
        audio: {
            icon: '<i class="note-icon-audio"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75" width="12px" height="12px"><g id="g1"><polygon id="polygon1" points="39.389,13.769 22.235,28.606 6,28.606 6,47.699 21.989,47.699 39.389,62.75 39.389,13.769" style="stroke:#111111;stroke-width:5;stroke-linejoin:round;fill:#111111;" /><path id="path1" d="M 48.128,49.03 C 50.057,45.934 51.19,42.291 51.19,38.377 C 51.19,34.399 50.026,30.703 48.043,27.577" style="fill:none;stroke:#111111;stroke-width:5;stroke-linecap:round"/><path id="path2" d="M 55.082,20.537 C 58.777,25.523 60.966,31.694 60.966,38.377 C 60.966,44.998 58.815,51.115 55.178,56.076" style="fill:none;stroke:#111111;stroke-width:5;stroke-linecap:round"/><path id="path1" d="M 61.71,62.611 C 66.977,55.945 70.128,47.531 70.128,38.378 C 70.128,29.161 66.936,20.696 61.609,14.01" style="fill:none;stroke:#111111;stroke-width:5;stroke-linecap:round"/></g></svg></i>'
        },
        callbacks: {
            onAudioUpload: null,
            onAudioUploadError: null,
            onAudioLinkInsert: null
        }
    });

    $.extend($.summernote.plugins, {
        /**
         *  @param {Object} context - context object has status of editor.
         */
        'audio': function audio(context) {
            var self = this,

            // ui has renders to build ui elements
            // for e.g. you can create a button with 'ui.button'
            ui = $.summernote.ui,
                $note = context.layoutInfo.note,

            // contentEditable element
            $editor = context.layoutInfo.editor,
                $editable = context.layoutInfo.editable,
                $toolbar = context.layoutInfo.toolbar,

            // options holds the Options Information from Summernote and what we extended above.
            options = context.options,

            // lang holds the Language Information from Summernote and what we extended above.
            lang = options.langInfo;

            context.memo('button.audio', function () {
                // Here we create a button
                var button = ui.button({

                    // icon for button
                    contents: options.audio.icon,

                    // tooltip for button
                    tooltip: lang.audio.audio,
                    click: function click(e) {
                        context.invoke('audio.show');
                    }
                });
                return button.render();
            });

            this.initialize = function () {

                // This is how we can add a Modal Dialog to allow users to interact with the Plugin.

                // get the correct container for the plugin how it's attached to the document DOM.
                var $container = options.dialogsInBody ? $(document.body) : $editor;

                var audioLimitation = '';
                if (options.maximumAudioFileSize) {
                    var unit = Math.floor(Math.log(options.maximumAudioFileSize) / Math.log(1024));
                    var readableSize = (options.maximumAudioFileSize / Math.pow(1024, unit)).toFixed(2) * 1 + ' ' + ' KMGTP'[unit] + 'B';
                    audioLimitation = '<small>' + lang.audio.maximumFileSize + ' : ' + readableSize + '</small>';
                }

                // Build the Body HTML of the Dialog.
                var body = ['<div class="form-group note-form-group note-group-select-from-files">', '<label class="note-form-label">' + lang.audio.selectFromFiles + '</label>', '<input class="note-audio-input note-form-control note-input" ', ' type="file" name="files" accept="audio/*" multiple="multiple" />', '</div>', audioLimitation, '<div class="form-group note-group-image-url" style="overflow:auto;">', '<label class="note-form-label">' + lang.audio.url + '</label>', '<input class="note-audio-url form-control note-form-control note-input ', ' col-md-12" type="text" />', '</div>'].join('');

                // Build the Footer HTML of the Dialog.
                var footer = '<button href="#" class="btn btn-primary note-audio-btn">' + lang.audio.insert + '</button>';

                this.$dialog = ui.dialog({

                    // Set the title for the Dialog. Note: We don't need to build the markup for the Modal
                    // Header, we only need to set the Title.
                    title: lang.audio.insert,

                    // Set the Body of the Dialog.
                    body: body,

                    // Set the Footer of the Dialog.
                    footer: footer

                    // This adds the Modal to the DOM.
                }).render().appendTo($container);
            };

            this.destroy = function () {
                ui.hideDialog(this.$dialog);
                this.$dialog.remove();
            };

            this.bindEnterKey = function ($input, $btn) {
                $input.on('keypress', function (event) {
                    if (event.keyCode === 13) $btn.trigger('click');
                });
            };

            this.bindLabels = function () {
                self.$dialog.find('.form-control:first').focus().select();
                self.$dialog.find('label').on('click', function () {
                    $(this).parent().find('.form-control:first').focus();
                });
            };

            /**
             * @method readFileAsDataURL
             *
             * read contents of file as representing URL
             *
             * @param {File} file
             * @return {Promise} - then: dataUrl
             *
             * @todo this method already exists in summernote.js so we should use that one
             */
            this.readFileAsDataURL = function (file) {
                return $.Deferred(function (deferred) {
                    $.extend(new FileReader(), {
                        onload: function onload(e) {
                            var dataURL = e.target.result;
                            deferred.resolve(dataURL);
                        },
                        onerror: function onerror(err) {
                            deferred.reject(err);
                        }
                    }).readAsDataURL(file);
                }).promise();
            };

            this.createAudio = function (url) {
                // audio url patterns (mp3, ogg)
                var mp3RegExp = /^.+.(mp3)$/;
                var mp3Match = url.match(mp3RegExp);

                var oggRegExp = /^.+.(ogg|oga)$/;
                var oggMatch = url.match(oggRegExp);

                var base64RegExp = /^data:(audio\/mpeg|audio\/ogg).+$/;
                var base64Match = url.match(base64RegExp);

                var $audio;
                if (mp3Match || oggMatch || base64Match) {
                    $audio = $('<audio controls>').attr('src', url);
                } else {
                    console.log('return false');
                    // this is not a known audio link. Now what, Cat? Now what?
                    return false;
                }

                $audio.addClass('note-audio-clip');

                return $audio;
            };

            this.insertAudio = function (src, param) {
                var $audio = self.createAudio(src);

                if (!$audio) {
                    context.triggerEvent('audio.upload.error');
                }

                context.invoke('editor.beforeCommand');

                if (typeof param === 'string') {
                    $audio.attr('data-filename', param);
                }

                // $audio.show();
                context.invoke('editor.insertNode', $('<p></p>').append($audio[0])[0]);

                context.invoke('editor.afterCommand');
            };

            this.insertAudioFilesAsDataURL = function (files) {
                $.each(files, function (idx, file) {
                    var filename = file.name;
                    if (options.maximumAudioFileSize && options.maximumAudioFileSize < file.size) {
                        context.triggerEvent('audio.upload.error', lang.audio.maximumFileSizeError);
                    } else {
                        self.readFileAsDataURL(file).then(function (dataURL) {
                            return self.insertAudio(dataURL, filename);
                        }).fail(function () {
                            context.triggerEvent('audio.upload.error');
                        });
                    }
                });
            };

            this.show = function (data) {
                context.invoke('editor.saveRange');
                this.showAudioDialog().then(function (data) {
                    // [workaround] hide dialog before restore range for IE range focus
                    ui.hideDialog(self.$dialog);
                    context.invoke('editor.restoreRange');

                    if (typeof data === 'string') {
                        // audio url
                        // If onAudioLinkInsert set
                        if (options.callbacks.onAudioLinkInsert) {
                            context.triggerEvent('audio.link.insert', data);
                        } else {
                            self.insertAudio(data);
                        }
                    } else {
                        // array of files
                        // If onAudioUpload set
                        if (options.callbacks.onAudioUpload) {
                            context.triggerEvent('audio.upload', data);
                        } else {
                            // else insert Audio as dataURL
                            self.insertAudioFilesAsDataURL(data);
                        }
                    }
                }).fail(function () {
                    context.invoke('editor.restoreRange');
                });
            };
            this.showAudioDialog = function () {
                return $.Deferred(function (deferred) {
                    var $audioInput = self.$dialog.find('.note-audio-input');
                    var $audioUrl = self.$dialog.find('.note-audio-url');
                    var $audioBtn = self.$dialog.find('.note-audio-btn');

                    ui.onDialogShown(self.$dialog, function () {
                        context.triggerEvent('dialog.shown');

                        // Cloning AudioInput to clear element.
                        $audioInput.replaceWith($audioInput.clone().on('change', function (event) {
                            deferred.resolve(event.target.files || event.target.value);
                        }).val(''));

                        $audioBtn.click(function (e) {
                            e.preventDefault();
                            deferred.resolve($audioUrl.val());
                        });

                        $audioUrl.on('keyup paste', function () {
                            var url = $audioUrl.val();
                            ui.toggleBtn($audioBtn, url);
                        }).val('');

                        //                        if (!env.isSupportTouch) {
                        //                            $audioUrl.trigger('focus');
                        //                        }
                        self.bindEnterKey($audioUrl, $audioBtn);
                        self.bindLabels();
                    });
                    ui.onDialogHidden(self.$dialog, function () {
                        $audioInput.off('change');
                        $audioUrl.off('keyup paste keypress');
                        $audioBtn.off('click');

                        if (deferred.state() === 'pending') deferred.reject();
                    });
                    ui.showDialog(self.$dialog);
                });
            };
        }
    });
});

/***/ }),
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {// services/LoadingService.js

/* harmony default export */ __webpack_exports__["a"] = ({
    show: function show() {
        $("#page-loader").addClass("active");
    },
    hide: function hide() {
        $("#page-loader").fadeOut(300, function () {
            $(this).removeClass("active").removeAttr("style");
        });
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VueMaskDirective */
/* unused harmony export VueMaskFilter */
/* unused harmony export VueMaskPlugin */
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var placeholderChar = '_';
var strFunction = 'function';

var emptyArray = [];
function convertMaskToPlaceholder() {
  var mask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyArray;
  var placeholderChar$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : placeholderChar;

  if (!isArray(mask)) {
    throw new Error('Text-mask:convertMaskToPlaceholder; The mask property must be an array.');
  }

  if (mask.indexOf(placeholderChar$1) !== -1) {
    throw new Error('Placeholder character must not be used as part of the mask. Please specify a character ' + 'that is not present in your mask as your placeholder character.\n\n' + "The placeholder character that was received is: ".concat(JSON.stringify(placeholderChar$1), "\n\n") + "The mask that was received is: ".concat(JSON.stringify(mask)));
  }

  return mask.map(function (char) {
    return char instanceof RegExp ? placeholderChar$1 : char;
  }).join('');
}
function isArray(value) {
  return Array.isArray && Array.isArray(value) || value instanceof Array;
}
var strCaretTrap = '[]';
function processCaretTraps(mask) {
  var indexes = [];
  var indexOfCaretTrap;

  while (indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) {
    indexes.push(indexOfCaretTrap);
    mask.splice(indexOfCaretTrap, 1);
  }

  return {
    maskWithoutCaretTraps: mask,
    indexes: indexes
  };
}

var emptyArray$1 = [];
var emptyString = '';
function conformToMask() {
  var rawValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyString;
  var mask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyArray$1;
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!isArray(mask)) {
    if (_typeof(mask) === strFunction) {
      mask = mask(rawValue, config);
      mask = processCaretTraps(mask).maskWithoutCaretTraps;
    } else {
      throw new Error('Text-mask:conformToMask; The mask property must be an array.');
    }
  }

  var _config$guide = config.guide,
      guide = _config$guide === void 0 ? true : _config$guide,
      _config$previousConfo = config.previousConformedValue,
      previousConformedValue = _config$previousConfo === void 0 ? emptyString : _config$previousConfo,
      _config$placeholderCh = config.placeholderChar,
      placeholderChar$1 = _config$placeholderCh === void 0 ? placeholderChar : _config$placeholderCh,
      _config$placeholder = config.placeholder,
      placeholder = _config$placeholder === void 0 ? convertMaskToPlaceholder(mask, placeholderChar$1) : _config$placeholder,
      currentCaretPosition = config.currentCaretPosition,
      keepCharPositions = config.keepCharPositions;
  var suppressGuide = guide === false && previousConformedValue !== undefined;
  var rawValueLength = rawValue.length;
  var previousConformedValueLength = previousConformedValue.length;
  var placeholderLength = placeholder.length;
  var maskLength = mask.length;
  var editDistance = rawValueLength - previousConformedValueLength;
  var isAddition = editDistance > 0;
  var indexOfFirstChange = currentCaretPosition + (isAddition ? -editDistance : 0);
  var indexOfLastChange = indexOfFirstChange + Math.abs(editDistance);

  if (keepCharPositions === true && !isAddition) {
    var compensatingPlaceholderChars = emptyString;

    for (var i = indexOfFirstChange; i < indexOfLastChange; i++) {
      if (placeholder[i] === placeholderChar$1) {
        compensatingPlaceholderChars += placeholderChar$1;
      }
    }

    rawValue = rawValue.slice(0, indexOfFirstChange) + compensatingPlaceholderChars + rawValue.slice(indexOfFirstChange, rawValueLength);
  }

  var rawValueArr = rawValue.split(emptyString).map(function (char, i) {
    return {
      char: char,
      isNew: i >= indexOfFirstChange && i < indexOfLastChange
    };
  });

  for (var _i = rawValueLength - 1; _i >= 0; _i--) {
    var char = rawValueArr[_i].char;

    if (char !== placeholderChar$1) {
      var shouldOffset = _i >= indexOfFirstChange && previousConformedValueLength === maskLength;

      if (char === placeholder[shouldOffset ? _i - editDistance : _i]) {
        rawValueArr.splice(_i, 1);
      }
    }
  }

  var conformedValue = emptyString;
  var someCharsRejected = false;

  placeholderLoop: for (var _i2 = 0; _i2 < placeholderLength; _i2++) {
    var charInPlaceholder = placeholder[_i2];

    if (charInPlaceholder === placeholderChar$1) {
      if (rawValueArr.length > 0) {
        while (rawValueArr.length > 0) {
          var _rawValueArr$shift = rawValueArr.shift(),
              rawValueChar = _rawValueArr$shift.char,
              isNew = _rawValueArr$shift.isNew;

          if (rawValueChar === placeholderChar$1 && suppressGuide !== true) {
            conformedValue += placeholderChar$1;
            continue placeholderLoop;
          } else if (mask[_i2].test(rawValueChar)) {
            if (keepCharPositions !== true || isNew === false || previousConformedValue === emptyString || guide === false || !isAddition) {
              conformedValue += rawValueChar;
            } else {
              var rawValueArrLength = rawValueArr.length;
              var indexOfNextAvailablePlaceholderChar = null;

              for (var _i3 = 0; _i3 < rawValueArrLength; _i3++) {
                var charData = rawValueArr[_i3];

                if (charData.char !== placeholderChar$1 && charData.isNew === false) {
                  break;
                }

                if (charData.char === placeholderChar$1) {
                  indexOfNextAvailablePlaceholderChar = _i3;
                  break;
                }
              }

              if (indexOfNextAvailablePlaceholderChar !== null) {
                conformedValue += rawValueChar;
                rawValueArr.splice(indexOfNextAvailablePlaceholderChar, 1);
              } else {
                _i2--;
              }
            }

            continue placeholderLoop;
          } else {
            someCharsRejected = true;
          }
        }
      }

      if (suppressGuide === false) {
        conformedValue += placeholder.substr(_i2, placeholderLength);
      }

      break;
    } else {
      conformedValue += charInPlaceholder;
    }
  }

  if (suppressGuide && isAddition === false) {
    var indexOfLastFilledPlaceholderChar = null;

    for (var _i4 = 0; _i4 < conformedValue.length; _i4++) {
      if (placeholder[_i4] === placeholderChar$1) {
        indexOfLastFilledPlaceholderChar = _i4;
      }
    }

    if (indexOfLastFilledPlaceholderChar !== null) {
      conformedValue = conformedValue.substr(0, indexOfLastFilledPlaceholderChar + 1);
    } else {
      conformedValue = emptyString;
    }
  }

  return {
    conformedValue: conformedValue,
    meta: {
      someCharsRejected: someCharsRejected
    }
  };
}

var NEXT_CHAR_OPTIONAL = {
  __nextCharOptional__: true
};
var defaultMaskReplacers = {
  '#': /\d/,
  A: /[a-z]/i,
  N: /[a-z0-9]/i,
  '?': NEXT_CHAR_OPTIONAL,
  X: /./
};

var stringToRegexp = function stringToRegexp(str) {
  var lastSlash = str.lastIndexOf('/');
  return new RegExp(str.slice(1, lastSlash), str.slice(lastSlash + 1));
};

var makeRegexpOptional = function makeRegexpOptional(charRegexp) {
  return stringToRegexp(charRegexp.toString().replace(/.(\/)[gmiyus]{0,6}$/, function (match) {
    return match.replace('/', '?/');
  }));
};

var escapeIfNeeded = function escapeIfNeeded(char) {
  return '[\\^$.|?*+()'.indexOf(char) > -1 ? "\\".concat(char) : char;
};

var charRegexp = function charRegexp(char) {
  return new RegExp("/[".concat(escapeIfNeeded(char), "]/"));
};

var isRegexp = function isRegexp(entity) {
  return entity instanceof RegExp;
};

var castToRegexp = function castToRegexp(char) {
  return isRegexp(char) ? char : charRegexp(char);
};

function maskToRegExpMask(mask) {
  var maskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;
  return mask.map(function (char, index, array) {
    var maskChar = maskReplacers[char] || char;
    var previousChar = array[index - 1];
    var previousMaskChar = maskReplacers[previousChar] || previousChar;

    if (maskChar === NEXT_CHAR_OPTIONAL) {
      return null;
    }

    if (previousMaskChar === NEXT_CHAR_OPTIONAL) {
      return makeRegexpOptional(castToRegexp(maskChar));
    }

    return maskChar;
  }).filter(Boolean);
}

function stringMaskToRegExpMask(stringMask) {
  var maskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;
  return maskToRegExpMask(stringMask.split(''), maskReplacers);
}
function arrayMaskToRegExpMask(arrayMask) {
  var maskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;
  var flattenedMask = arrayMask.map(function (part) {
    if (part instanceof RegExp) {
      return part;
    }

    if (typeof part === 'string') {
      return part.split('');
    }

    return null;
  }).filter(Boolean).reduce(function (mask, part) {
    return mask.concat(part);
  }, []);
  return maskToRegExpMask(flattenedMask, maskReplacers);
}

var trigger = function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
};
var queryInputElementInside = function queryInputElementInside(el) {
  return el instanceof HTMLInputElement ? el : el.querySelector('input') || el;
};
var isFunction = function isFunction(val) {
  return typeof val === 'function';
};
var isString = function isString(val) {
  return typeof val === 'string';
};
var isRegexp$1 = function isRegexp(val) {
  return val instanceof RegExp;
};

function createOptions() {
  var elementOptions = new Map();
  var defaultOptions = {
    previousValue: '',
    mask: []
  };

  function get(el) {
    return elementOptions.get(el) || _objectSpread2({}, defaultOptions);
  }

  function partiallyUpdate(el, newOptions) {
    elementOptions.set(el, _objectSpread2(_objectSpread2({}, get(el)), newOptions));
  }

  function remove(el) {
    elementOptions.delete(el);
  }

  return {
    partiallyUpdate: partiallyUpdate,
    remove: remove,
    get: get
  };
}

var options = createOptions();

function triggerInputUpdate(el) {
  trigger(el, 'input');
}

function updateValue(el) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var value = el.value;

  var _options$get = options.get(el),
      previousValue = _options$get.previousValue,
      mask = _options$get.mask;

  var isValueChanged = value !== previousValue;
  var isLengthIncreased = value.length > previousValue.length;
  var isUpdateNeeded = value && isValueChanged && isLengthIncreased;

  if ((force || isUpdateNeeded) && mask) {
    var _conformToMask = conformToMask(value, mask, {
      guide: false
    }),
        conformedValue = _conformToMask.conformedValue;

    el.value = conformedValue;
    triggerInputUpdate(el);
  }

  options.partiallyUpdate(el, {
    previousValue: value
  });
}

function updateMask(el, inputMask, maskReplacers) {
  var mask;

  if (Array.isArray(inputMask)) {
    mask = arrayMaskToRegExpMask(inputMask, maskReplacers);
  } else if (isFunction(inputMask)) {
    mask = inputMask;
  } else if (isString(inputMask) && inputMask.length > 0) {
    mask = stringMaskToRegExpMask(inputMask, maskReplacers);
  } else {
    mask = inputMask;
  }

  options.partiallyUpdate(el, {
    mask: mask
  });
}

function extendMaskReplacers(maskReplacers) {
  var baseMaskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;

  if (maskReplacers === null || Array.isArray(maskReplacers) || _typeof(maskReplacers) !== 'object') {
    return baseMaskReplacers;
  }

  return Object.keys(maskReplacers).reduce(function (extendedMaskReplacers, key) {
    var value = maskReplacers[key];

    if (value !== null && !(value instanceof RegExp)) {
      return extendedMaskReplacers;
    }

    return _objectSpread2(_objectSpread2({}, extendedMaskReplacers), {}, _defineProperty({}, key, value));
  }, baseMaskReplacers);
}

function maskToString(mask) {
  var maskArray = Array.isArray(mask) ? mask : [mask];
  var filteredMaskArray = maskArray.filter(function (part) {
    return isString(part) || isRegexp$1(part);
  });
  return filteredMaskArray.toString();
}

function createDirective() {
  var directiveOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var instanceMaskReplacers = extendMaskReplacers(directiveOptions && directiveOptions.placeholders);
  return {
    bind: function bind(el, _ref) {
      var value = _ref.value;
      el = queryInputElementInside(el);
      updateMask(el, value, instanceMaskReplacers);
      updateValue(el);
    },
    componentUpdated: function componentUpdated(el, _ref2) {
      var value = _ref2.value,
          oldValue = _ref2.oldValue;
      el = queryInputElementInside(el);
      var isMaskChanged = isFunction(value) || maskToString(oldValue) !== maskToString(value);

      if (isMaskChanged) {
        updateMask(el, value, instanceMaskReplacers);
      }

      updateValue(el, isMaskChanged);
    },
    unbind: function unbind(el) {
      el = queryInputElementInside(el);
      options.remove(el);
    }
  };
}
var directive = createDirective();

var filter = (function (value, stringMask) {
  var mask = stringMaskToRegExpMask(stringMask);
  if (!isString(value) && !Number.isFinite(value)) return value;

  var _conformToMask = conformToMask("".concat(value), mask, {
    guide: false
  }),
      conformedValue = _conformToMask.conformedValue;

  return conformedValue;
});

var plugin = (function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue.directive('mask', createDirective(options));
  Vue.filter('VMask', filter);
});

/* harmony default export */ __webpack_exports__["a"] = (plugin);



/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(351)
/* template */
var __vue_template__ = __webpack_require__(354)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/PainelAcesso.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-416ce174", Component.options)
  } else {
    hotAPI.reload("data-v-416ce174", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource'],
    data: function data() {
        return {
            usuario: {
                painel: true
            },
            errors: {},
            errorMsg: ""
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    methods: {
        login: function login() {
            var _this = this;

            var vm = this;
            this.errors = {};
            this.errorMsg = "";

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            axios.post('/ajax/login', this.usuario).then(function (response) {
                window.location.href = _this.baseUrl('/painel?welcome=1');
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        _this.errorMsg = msg;
                    }
                } else {
                    _this.errorMsg = "Ocorreu um erro ao tentar processar sua solicitação.";
                }

                Loading.hide();
                $(_this.$refs.submit).prop("disabled", false);
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ["error"],
    computed: {
        errorMessage: function errorMessage() {
            // Caso o erro venha em formato de array, usa-se a primeira posição
            return Object.prototype.toString.call(this.error) === '[object Array]' ? this.error[0] : this.error;
        }
    }
});

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "form-group", class: { "has-error": _vm.error } },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c("span", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.error,
            expression: "error"
          }
        ],
        ref: "help",
        staticClass: "help-block",
        domProps: { innerHTML: _vm._s(_vm.errorMessage) }
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7978c9dc", module.exports)
  }
}

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2" },
        [
          _c("div", { staticClass: "panel panel-form" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "panel-body" }, [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errorMsg,
                      expression: "errorMsg"
                    }
                  ],
                  staticClass: "alert alert-danger",
                  attrs: { role: "alert" }
                },
                [_vm._v(_vm._s(_vm.errorMsg))]
              ),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: { role: "form", "accept-charset": "UTF-8" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.login($event)
                    }
                  }
                },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.usu_login } },
                    [
                      _c("label", { attrs: { for: "usu_login" } }, [
                        _vm._v("Login")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.usuario.usu_login,
                            expression: "usuario.usu_login"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "usu_login", autofocus: "" },
                        domProps: { value: _vm.usuario.usu_login },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.usuario,
                              "usu_login",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.usu_senha } },
                    [
                      _c("label", { attrs: { for: "usu_senha" } }, [
                        _vm._v("Senha")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.usuario.usu_senha,
                            expression: "usuario.usu_senha"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "password", id: "usu_senha" },
                        domProps: { value: _vm.usuario.usu_senha },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.usuario,
                              "usu_senha",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      ref: "submit",
                      staticClass: "btn btn-mairi",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Entrar")]
                  )
                ],
                1
              )
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h3", { staticClass: "panel-title" }, [
        _vm._v("Acesso ao Painel Portal Covid")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-416ce174", module.exports)
  }
}

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(356)
/* template */
var __vue_template__ = __webpack_require__(357)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/DocumentoLista.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f14fada8", Component.options)
  } else {
    hotAPI.reload("data-v-f14fada8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.component('documento-col-edit', {
    props: ['data'],
    template: '<a :href="baseUrl(\'/painel/processo/\' + data.documento_id + \'/edicao\')">Editar</a>'
});

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            anos: [],
            tipos: [],
            categorias: [],
            filters: {
                doc_data_cadastro: "",
                doc_numero_processo: "",
                tipo_processo_id: ""
                //tipo_categoria_processo_id: "",
            },
            columns: ['doc_data_cadastro', 'doc_numero_processo', 'tpr_nome',
            //'tcp_nome',
            'edit'],
            options: {
                skin: 'table-striped table-hover',
                columnsClasses: {
                    'tpr_nome': 'col-tipo',
                    //'tcp_nome': 'col-tipo',
                    'doc_data_cadastro': 'col-data',
                    'edit': 'col-actions'
                },
                headings: {
                    'doc_data_cadastro': 'Data',
                    'doc_numero_processo': 'Número do Processo',
                    'tpr_nome': 'Tipo de Processo',
                    //'tcp_nome': 'Categoria do Processo',
                    'edit': ''
                },
                texts: this.vueTableTexts(),
                filterable: false,
                sortable: ['doc_data_cadastro', 'doc_numero_processo', 'tpr_nome',
                //'tcp_nome',
                'doc_data_cadastro'],
                orderBy: {
                    ascending: false,
                    column: 'doc_data_cadastro'
                },
                templates: {
                    edit: 'documento-col-edit'
                },
                params: {
                    table: true
                },
                responseAdapter: function responseAdapter(resp) {
                    var data = resp.data.items;

                    for (var i in data) {
                        if (data[i].doc_data_cadastro) {
                            data[i].doc_data_cadastro = moment(data[i].doc_data_cadastro).format('DD/MM/YYYY');
                        }
                    }

                    return {
                        data: resp.data.items,
                        count: resp.data.count
                    };
                }
            }
        };
    },
    mounted: function mounted() {
        var _this = this;

        Loading.show();

        var current_year = parseInt(moment().format('YYYY'));

        for (var i = current_year; i >= 2010; i--) {
            this.anos.push(i);
        }

        axios.all([axios.get('/painel/ajax/tipo-processo'), axios.get('/painel/ajax/categoria-processo')]).then(axios.spread(function (respTipos, respCategorias) {
            _this.tipos = respTipos.data.data;
            _this.categorias = respCategorias.data.data;
            Loading.hide();
        }));
    },

    methods: {
        fetch: function fetch() {
            this.$refs.table.setFilter(JSON.stringify(this.filters));
        }
    }
});

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-mairi pull-right",
          attrs: { href: _vm.baseUrl("/painel/processo/cadastro") }
        },
        [_vm._v("Cadastrar novo")]
      ),
      _vm._v(" "),
      _c("h1", [_vm._v("Processos")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "doc_data_cadastro" } }, [_vm._v("Ano")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filters.doc_data_cadastro,
                  expression: "filters.doc_data_cadastro"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "doc_data_cadastro" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.filters,
                    "doc_data_cadastro",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }),
              _vm._v(" "),
              _vm._l(_vm.anos, function(item) {
                return [
                  _c("option", { domProps: { value: item } }, [
                    _vm._v(_vm._s(item))
                  ])
                ]
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "doc_numero_processo" } }, [
            _vm._v("Número do Processo")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filters.doc_numero_processo,
                expression: "filters.doc_numero_processo"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "doc_numero_processo" },
            domProps: { value: _vm.filters.doc_numero_processo },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(
                  _vm.filters,
                  "doc_numero_processo",
                  $event.target.value
                )
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-3" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "tipo_processo_id" } }, [
            _vm._v("Tipo de Processo")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filters.tipo_processo_id,
                  expression: "filters.tipo_processo_id"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "tipo_processo_id" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.filters,
                    "tipo_processo_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }),
              _vm._v(" "),
              _vm._l(_vm.tipos, function(item) {
                return [
                  _c("option", { domProps: { value: item.tipo_processo_id } }, [
                    _vm._v(_vm._s(item.tpr_nome))
                  ])
                ]
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v(" ")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-block btn-success",
              attrs: { type: "button" },
              on: { click: _vm.fetch }
            },
            [_c("i", { staticClass: "fa fa-search" }), _vm._v(" Buscar")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "panel panel-form" },
      [
        _c("v-server-table", {
          ref: "table",
          attrs: {
            url: "/painel/ajax/documento",
            columns: _vm.columns,
            options: _vm.options
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f14fada8", module.exports)
  }
}

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(359)
/* template */
var __vue_template__ = __webpack_require__(361)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/DocumentoCadastro.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a7b9afc0", Component.options)
  } else {
    hotAPI.reload("data-v-a7b9afc0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_createNumberMask__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_createNumberMask__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var currencyMask = __WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_createNumberMask___default()({
    prefix: 'R$',
    allowDecimal: true,
    includeThousandsSeparator: true,
    allowNegative: false
});

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource'],
    data: function data() {
        return {
            tipos: [],
            dynamicMask: '###.###.###-##',
            mask: currencyMask,
            categorias: [],
            documento: {
                tipo_processo_id: ""
            },
            camposEspecificos: {},
            anexos: [],
            errors: {},
            showSuccessMsg: false
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        var _this = this;

        Loading.show();

        var successMsg = window.location.search.split('success=')[1];
        this.showSuccessMsg = successMsg ? true : false;

        axios.all([axios.get('/painel/ajax/tipo-processo'), axios.get('/painel/ajax/categoria-processo')]).then(axios.spread(function (respTipos, respCategorias) {
            _this.tipos = respTipos.data.data;
            _this.categorias = respCategorias.data.data;
            _this.fetch();
        }));
    },

    methods: {
        fetch: function fetch() {
            var _this2 = this;

            if (this.resource) {
                axios.get('/painel/ajax/documento/' + this.resource).then(function (response) {
                    _this2.documento = response.data.data.documentos;
                    _this2.camposEspecificos = response.data.data.camposEspecificos[0];

                    for (var i in _this2.documento.anexos) {
                        _this2.anexos.push({
                            anexo_id: _this2.documento.anexos[i].anexo_id,
                            dan_data_documento: _this2.documento.anexos[i].pivot.dan_data_documento,
                            tipo_categoria_processo_id: _this2.documento.anexos[i].pivot.tipo_categoria_processo_id,
                            ane_nome: _this2.documento.anexos[i].ane_nome
                        });
                    }

                    Loading.hide();
                    $(_this2.$refs.submit).prop("disabled", false);
                }).catch(function (error) {
                    Loading.hide();
                    alert('Não foi possível carregar o recurso informado.');
                });
            } else {
                this.addArquivo();
                Loading.hide();
                $(this.$refs.submit).prop("disabled", false);
            }
        },
        save: function save() {
            var _this3 = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            var data = new FormData();

            for (var i in this.documento) {
                data.append(i, this.documento[i]);
            }

            for (var i in this.camposEspecificos) {
                data.append(i, this.camposEspecificos[i]);
            }

            if (!this.resource) {
                for (var i in this.anexos) {
                    data.append('dan_data_documento_' + (parseInt(i) + 1), this.anexos[i].dan_data_documento);
                    data.append('tipo_categoria_processo_id_' + (parseInt(i) + 1), this.anexos[i].tipo_categoria_processo_id);
                    data.append('doc_arquivo_' + (parseInt(i) + 1), this.anexos[i].doc_arquivo);
                }
            } else {
                data.append('_method', 'PUT');

                for (var i in this.anexos) {
                    data.append('dan_data_documento_' + (parseInt(i) + 1), this.anexos[i].dan_data_documento);
                    data.append('tipo_categoria_processo_id_' + (parseInt(i) + 1), this.anexos[i].tipo_categoria_processo_id);

                    if (this.anexos[i].anexo_id) {
                        data.append('anexo_id_' + (parseInt(i) + 1), this.anexos[i].anexo_id);
                    } else {
                        data.append('doc_arquivo_' + (parseInt(i) + 1), this.anexos[i].doc_arquivo);
                    }
                }
            }

            var promise = axios({
                method: 'post',
                url: '/painel/ajax/documento' + (this.resource ? '/' + this.resource : ''),
                data: data,
                headers: { 'content-type': 'multipart/form-data' }
            });

            promise.then(function (response) {
                // window.location.href = this.baseUrl('/painel/processo/' + response.data.data.documento_id + '/edicao?success=1');
                window.location.href = _this3.baseUrl('/painel/processos');
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this3.$refs.submit).prop("disabled", false);
            });
        },
        onFileChange: function onFileChange(item, e) {
            var files = e.target.files || e.dataTransfer.files;
            item.doc_arquivo = files.length ? files[0] : null;
        },
        addArquivo: function addArquivo() {
            this.anexos.push({
                dan_data_documento: moment().format('YYYY-MM-DD'),
                tipo_categoria_processo_id: null,
                doc_arquivo: null
            });
        },
        removeArquivo: function removeArquivo(index) {
            this.anexos.splice(index, 1);
            this.$forceUpdate();
        },
        remove: function remove() {
            var _this4 = this;

            if (!confirm('Tem certeza que deseja remover este processo? Esta ação não poderá ser desfeita!')) return;

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            axios.post('painel/ajax/documento/' + this.resource, { _method: 'DELETE' }).then(function (response) {
                window.location.href = _this4.baseUrl('/painel/processos');
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this4.$refs.submit).prop("disabled", false);
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.createNumberMask=t():e.createNumberMask=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([v]).concat(g.split(l));if(e===k&&M)return y.split(l).concat(["0",k,v]).concat(g.split(l));var o=e[0]===s&&q;o&&(e=e.toString().substr(1));var c=e.lastIndexOf(k),u=c!==-1,a=void 0,b=void 0,h=void 0;if(e.slice(T*-1)===g&&(e=e.slice(0,T*-1)),u&&(M||$)?(a=e.slice(e.slice(0,R)===y?R:0,c),b=e.slice(c+1,t),b=n(b.replace(f,l))):a=e.slice(0,R)===y?e.slice(R):e,P&&("undefined"==typeof P?"undefined":r(P))===p){var S="."===j?"[.]":""+j,w=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,P+w*Z)}return a=a.replace(f,l),E||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?i(a,j):a,h=n(a),(u&&M||$===!0)&&(e[c-1]!==k&&h.push(m),h.push(k,m),b&&(("undefined"==typeof L?"undefined":r(L))===p&&(b=b.slice(0,L)),h=h.concat(b)),$===!0&&e[c-1]===k&&h.push(v)),R>0&&(h=y.split(l).concat(h)),o&&(h.length===R&&h.push(v),h=[d].concat(h)),g.length>0&&(h=h.concat(g.split(l))),h}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,g=void 0===b?l:b,h=t.includeThousandsSeparator,x=void 0===h||h,S=t.thousandsSeparatorSymbol,j=void 0===S?u:S,w=t.allowDecimal,M=void 0!==w&&w,N=t.decimalSymbol,k=void 0===N?a:N,D=t.decimalLimit,L=void 0===D?2:D,O=t.requireDecimal,$=void 0!==O&&O,_=t.allowNegative,q=void 0!==_&&_,B=t.allowLeadingZeroes,E=void 0!==B&&B,I=t.integerLimit,P=void 0===I?null:I,R=y&&y.length||0,T=g&&g.length||0,Z=j&&j.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,m="[]"}])});

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      !_vm.resource ? _c("h1", [_vm._v("Cadastrar Processo")]) : _vm._e(),
      _vm._v(" "),
      _vm.resource ? _c("h1", [_vm._v("Atualizar Processo")]) : _vm._e()
    ]),
    _vm._v(" "),
    _vm.showSuccessMsg
      ? _c(
          "div",
          {
            staticClass: "alert alert-success alert-dismissible",
            attrs: { role: "alert" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("span", [_vm._v("Processo salvo com sucesso.")])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            attrs: { role: "form", "accept-charset": "UTF-8" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.save($event)
              }
            }
          },
          [
            _c(
              "form-control",
              { attrs: { error: _vm.errors.doc_numero_processo } },
              [
                _c("label", { attrs: { for: "doc_numero_processo" } }, [
                  _vm._v("Número do Processo")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.documento.doc_numero_processo,
                      expression: "documento.doc_numero_processo"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "doc_numero_processo" },
                  domProps: { value: _vm.documento.doc_numero_processo },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.documento,
                        "doc_numero_processo",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "form-control",
              { attrs: { error: _vm.errors.tipo_processo_id } },
              [
                _c("label", { attrs: { for: "tipo_processo_id" } }, [
                  _vm._v("Tipo de Processo")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.documento.tipo_processo_id,
                        expression: "documento.tipo_processo_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "tipo_processo_id" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.documento,
                          "tipo_processo_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }),
                    _vm._v(" "),
                    _vm._l(_vm.tipos, function(item) {
                      return [
                        _c(
                          "option",
                          { domProps: { value: item.tipo_processo_id } },
                          [_vm._v(_vm._s(item.tpr_nome))]
                        )
                      ]
                    })
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.anexos, function(item, index) {
              return _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-sm-3" },
                  [
                    _c(
                      "form-control",
                      {
                        attrs: {
                          error: _vm.errors["dan_data_documento_" + (index + 1)]
                        }
                      },
                      [
                        _c(
                          "label",
                          {
                            attrs: { for: "dan_data_documento_" + (index + 1) }
                          },
                          [_vm._v("Data")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: item.dan_data_documento,
                              expression: "item.dan_data_documento"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "date",
                            id: "dan_data_documento_" + (index + 1)
                          },
                          domProps: { value: item.dan_data_documento },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                item,
                                "dan_data_documento",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-sm-3" },
                  [
                    _c(
                      "form-control",
                      {
                        attrs: {
                          error:
                            _vm.errors[
                              "tipo_categoria_processo_id_" + (index + 1)
                            ]
                        }
                      },
                      [
                        _c(
                          "label",
                          {
                            attrs: {
                              for: "tipo_categoria_processo_id_" + (index + 1)
                            }
                          },
                          [_vm._v("Categoria do Processo")]
                        ),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: item.tipo_categoria_processo_id,
                                expression: "item.tipo_categoria_processo_id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "tipo_categoria_processo_id_" + (index + 1)
                            },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  item,
                                  "tipo_categoria_processo_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }),
                            _vm._v(" "),
                            _vm._l(_vm.categorias, function(subitem) {
                              return [
                                _c(
                                  "option",
                                  {
                                    domProps: {
                                      value: subitem.tipo_categoria_processo_id
                                    }
                                  },
                                  [_vm._v(_vm._s(subitem.tcp_nome))]
                                )
                              ]
                            })
                          ],
                          2
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-xs-10" },
                      [
                        !item.anexo_id
                          ? _c(
                              "form-control",
                              {
                                attrs: {
                                  error:
                                    _vm.errors["doc_arquivo_" + (index + 1)]
                                }
                              },
                              [
                                _c(
                                  "label",
                                  {
                                    attrs: { for: "doc_arquivo_" + (index + 1) }
                                  },
                                  [_vm._v("Arquivo")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "file",
                                    id: "doc_arquivo_" + (index + 1)
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.onFileChange(item, $event)
                                    }
                                  }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        item.anexo_id
                          ? _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Arquivo")]),
                              _vm._v(" "),
                              _c("p", { staticClass: "form-control-static" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: _vm.baseUrl(
                                        "/painel/processo/anexo/" +
                                          item.anexo_id
                                      ),
                                      target: "_blank"
                                    }
                                  },
                                  [_vm._v(_vm._s(item.ane_nome))]
                                )
                              ])
                            ])
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-xs-2" }, [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                (!_vm.resource && index > 0) || _vm.resource,
                              expression: "(!resource && index > 0) || resource"
                            }
                          ],
                          staticClass: "form-group"
                        },
                        [
                          _c("label", [_vm._v(" ")]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              staticStyle: {
                                display: "block",
                                "margin-left": "auto"
                              },
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.removeArquivo(index)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-times" })]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ])
            }),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: { click: _vm.addArquivo }
                },
                [_vm._v("Adicionar outro arquivo")]
              )
            ]),
            _vm._v(" "),
            _c("span", [_vm._v("Campos Específicos:")]),
            _vm._v(" "),
            _vm.documento.tipo_processo_id == "3" ||
            _vm.documento.tipo_processo_id == "4" ||
            _vm.documento.tipo_processo_id == "5" ||
            _vm.documento.tipo_processo_id == "6"
              ? _c("form-control", { attrs: { error: _vm.errors.descricao } }, [
                  _c("label", { attrs: { for: "descricao" } }, [
                    _vm._v("Descrição")
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.camposEspecificos.descricao,
                        expression: "camposEspecificos.descricao"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "descricao" },
                    domProps: { value: _vm.camposEspecificos.descricao },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.camposEspecificos,
                          "descricao",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.documento.tipo_processo_id == "1"
              ? _c("div", { staticClass: "form-group" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "orgao" } }, [
                            _vm._v("Órgão")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.orgao,
                                expression: "camposEspecificos.orgao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "orgao" },
                            domProps: { value: _vm.camposEspecificos.orgao },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "orgao",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "numero_licitacao" } }, [
                            _vm._v("Número da Licitação")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.numero_licitacao,
                                expression: "camposEspecificos.numero_licitacao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "numero_licitacao" },
                            domProps: {
                              value: _vm.camposEspecificos.numero_licitacao
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "numero_licitacao",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c(
                            "label",
                            { attrs: { for: "numero_processo_adm" } },
                            [_vm._v("Número do Processo Administrativo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.camposEspecificos.numero_processo_adm,
                                expression:
                                  "camposEspecificos.numero_processo_adm"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "numero_processo_adm" },
                            domProps: {
                              value: _vm.camposEspecificos.numero_processo_adm
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "numero_processo_adm",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "local_execucao" } }, [
                            _vm._v("Local de Execução do Contrato")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.local_execucao,
                                expression: "camposEspecificos.local_execucao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "local_execucao" },
                            domProps: {
                              value: _vm.camposEspecificos.local_execucao
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "local_execucao",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "numero_edital" } }, [
                            _vm._v("Número do Edital")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.numero_edital,
                                expression: "camposEspecificos.numero_edital"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "numero_edital" },
                            domProps: {
                              value: _vm.camposEspecificos.numero_edital
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "numero_edital",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "data_certame" } }, [
                            _vm._v("Data do Certame")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.data_certame,
                                expression: "camposEspecificos.data_certame"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date", id: "data_certame" },
                            domProps: {
                              value: _vm.camposEspecificos.data_certame
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "data_certame",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "local_certame" } }, [
                            _vm._v("Local do Certame")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.local_certame,
                                expression: "camposEspecificos.local_certame"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "local_certame" },
                            domProps: {
                              value: _vm.camposEspecificos.local_certame
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "local_certame",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "objeto" } }, [
                            _vm._v("Objeto")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.objeto,
                                expression: "camposEspecificos.objeto"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "objeto" },
                            domProps: { value: _vm.camposEspecificos.objeto },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "objeto",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "inicio_vigencia" } }, [
                            _vm._v("Data do Início da Vigência")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.inicio_vigencia,
                                expression: "camposEspecificos.inicio_vigencia"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date", id: "inicio_vigencia" },
                            domProps: {
                              value: _vm.camposEspecificos.inicio_vigencia
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "inicio_vigencia",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "final_vigencia" } }, [
                            _vm._v("Data do Final da Vigência")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.final_vigencia,
                                expression: "camposEspecificos.final_vigencia"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date", id: "final_vigencia" },
                            domProps: {
                              value: _vm.camposEspecificos.final_vigencia
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "final_vigencia",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "publicacao" } }, [
                            _vm._v("Publicação")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.publicacao,
                                expression: "camposEspecificos.publicacao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date", id: "publicacao" },
                            domProps: {
                              value: _vm.camposEspecificos.publicacao
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "publicacao",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c(
                            "label",
                            { attrs: { for: "previsao_orcamentaria" } },
                            [_vm._v("Previsão Orçamentária")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "mask",
                                rawName: "v-mask",
                                value: _vm.mask,
                                expression: "mask"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.camposEspecificos.previsao_orcamentaria,
                                expression:
                                  "camposEspecificos.previsao_orcamentaria"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "R$100.00",
                              id: "previsao_orcamentaria"
                            },
                            domProps: {
                              value: _vm.camposEspecificos.previsao_orcamentaria
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "previsao_orcamentaria",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-12" },
                      [
                        _c("form-control", [
                          _c("label", [_vm._v("Relacionado ao COVID-19:")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.camposEspecificos.relacionado_covid,
                                  expression:
                                    "camposEspecificos.relacionado_covid"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "relacionado_covid",
                                id: "relacionado_covid",
                                value: "1",
                                checked: ""
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.camposEspecificos.relacionado_covid,
                                  "1"
                                )
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(
                                    _vm.camposEspecificos,
                                    "relacionado_covid",
                                    "1"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "relacionado_covid" }
                              },
                              [
                                _vm._v(
                                  "\n                                    Sim\n                                  "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.camposEspecificos.relacionado_covid,
                                  expression:
                                    "camposEspecificos.relacionado_covid"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "relacionado_covid",
                                id: "relacionado_covid",
                                value: "0"
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.camposEspecificos.relacionado_covid,
                                  "0"
                                )
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(
                                    _vm.camposEspecificos,
                                    "relacionado_covid",
                                    "0"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "relacionado_covid" }
                              },
                              [
                                _vm._v(
                                  "\n                                    Não\n                                  "
                                )
                              ]
                            )
                          ])
                        ])
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.documento.tipo_processo_id == "2"
              ? _c("div", { staticClass: "form-group" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.dynamicMask,
                                expression: "dynamicMask"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              id: "cpf-example",
                              value: "###.###.###-##"
                            },
                            domProps: {
                              checked: _vm._q(_vm.dynamicMask, "###.###.###-##")
                            },
                            on: {
                              change: function($event) {
                                _vm.dynamicMask = "###.###.###-##"
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Pessoa Física")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.dynamicMask,
                                expression: "dynamicMask"
                              }
                            ],
                            attrs: {
                              type: "radio",
                              id: "cnpj-example",
                              value: "##.###.###/####-##"
                            },
                            domProps: {
                              checked: _vm._q(
                                _vm.dynamicMask,
                                "##.###.###/####-##"
                              )
                            },
                            on: {
                              change: function($event) {
                                _vm.dynamicMask = "##.###.###/####-##"
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Pessoa Jurídica")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "mask",
                                rawName: "v-mask",
                                value: _vm.dynamicMask,
                                expression: "dynamicMask"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.cpf_cnpj,
                                expression: "camposEspecificos.cpf_cnpj"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "cpf_cnpj" },
                            domProps: { value: _vm.camposEspecificos.cpf_cnpj },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "cpf_cnpj",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "numero_contrato" } }, [
                            _vm._v("Número do Contrato")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.numero_contrato,
                                expression: "camposEspecificos.numero_contrato"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "numero_contrato" },
                            domProps: {
                              value: _vm.camposEspecificos.numero_contrato
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "numero_contrato",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c(
                            "label",
                            { attrs: { for: "numero_processo_adm" } },
                            [_vm._v("Número Processo Administrativo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.camposEspecificos.numero_processo_adm,
                                expression:
                                  "camposEspecificos.numero_processo_adm"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "numero_processo_adm" },
                            domProps: {
                              value: _vm.camposEspecificos.numero_processo_adm
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "numero_processo_adm",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c(
                            "label",
                            { attrs: { for: "numero_processo_licitatorio" } },
                            [_vm._v("Número Processo Licitatorio")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.camposEspecificos
                                    .numero_processo_licitatorio,
                                expression:
                                  "camposEspecificos.numero_processo_licitatorio"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "numero_processo_licitatorio"
                            },
                            domProps: {
                              value:
                                _vm.camposEspecificos
                                  .numero_processo_licitatorio
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "numero_processo_licitatorio",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "valor" } }, [
                            _vm._v("Valor")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "mask",
                                rawName: "v-mask",
                                value: _vm.mask,
                                expression: "mask"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.valor,
                                expression: "camposEspecificos.valor"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "R$100.00",
                              id: "valor"
                            },
                            domProps: { value: _vm.camposEspecificos.valor },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "valor",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "data_assinatura" } }, [
                            _vm._v("Data de Assinatura")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.data_assinatura,
                                expression: "camposEspecificos.data_assinatura"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date", id: "data_assinatura" },
                            domProps: {
                              value: _vm.camposEspecificos.data_assinatura
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "data_assinatura",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "inicio_vigencia" } }, [
                            _vm._v("Data do Início da Vigência")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.inicio_vigencia,
                                expression: "camposEspecificos.inicio_vigencia"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date", id: "inicio_vigencia" },
                            domProps: {
                              value: _vm.camposEspecificos.inicio_vigencia
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "inicio_vigencia",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "final_vigencia" } }, [
                            _vm._v("Data do Final da Vigência")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.final_vigencia,
                                expression: "camposEspecificos.final_vigencia"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date", id: "final_vigencia" },
                            domProps: {
                              value: _vm.camposEspecificos.final_vigencia
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "final_vigencia",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "objeto" } }, [
                            _vm._v("Objeto")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.objeto,
                                expression: "camposEspecificos.objeto"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "objeto" },
                            domProps: { value: _vm.camposEspecificos.objeto },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "objeto",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "fundamento_legal" } }, [
                            _vm._v("Fundamento Legal")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.fundamento_legal,
                                expression: "camposEspecificos.fundamento_legal"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "fundamento_legal" },
                            domProps: {
                              value: _vm.camposEspecificos.fundamento_legal
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "fundamento_legal",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", [_vm._v("Possui Aditivo:")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.camposEspecificos.possui_aditivo,
                                  expression: "camposEspecificos.possui_aditivo"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "possui_aditivo",
                                id: "possui_aditivo",
                                value: "1",
                                checked: ""
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.camposEspecificos.possui_aditivo,
                                  "1"
                                )
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(
                                    _vm.camposEspecificos,
                                    "possui_aditivo",
                                    "1"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "possui_aditivo" }
                              },
                              [
                                _vm._v(
                                  "\n                                    Sim\n                                  "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.camposEspecificos.possui_aditivo,
                                  expression: "camposEspecificos.possui_aditivo"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "possui_aditivo",
                                id: "possui_aditivo",
                                value: "0"
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.camposEspecificos.possui_aditivo,
                                  "0"
                                )
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(
                                    _vm.camposEspecificos,
                                    "possui_aditivo",
                                    "0"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "possui_aditivo" }
                              },
                              [
                                _vm._v(
                                  "\n                                    Não\n                                  "
                                )
                              ]
                            )
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", [_vm._v("Relacionado ao COVID-19:")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.camposEspecificos.relacionado_covid,
                                  expression:
                                    "camposEspecificos.relacionado_covid"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "relacionado_covid",
                                id: "relacionado_covid",
                                value: "1",
                                checked: ""
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.camposEspecificos.relacionado_covid,
                                  "1"
                                )
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(
                                    _vm.camposEspecificos,
                                    "relacionado_covid",
                                    "1"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "relacionado_covid" }
                              },
                              [
                                _vm._v(
                                  "\n                                    Sim\n                                  "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.camposEspecificos.relacionado_covid,
                                  expression:
                                    "camposEspecificos.relacionado_covid"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "relacionado_covid",
                                id: "relacionado_covid",
                                value: "0"
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.camposEspecificos.relacionado_covid,
                                  "0"
                                )
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(
                                    _vm.camposEspecificos,
                                    "relacionado_covid",
                                    "0"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "relacionado_covid" }
                              },
                              [
                                _vm._v(
                                  "\n                                    Não\n                                  "
                                )
                              ]
                            )
                          ])
                        ])
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.documento.tipo_processo_id == "7"
              ? _c("div", { staticClass: "form-group" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "orgao" } }, [
                            _vm._v("Órgão")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.orgao,
                                expression: "camposEspecificos.orgao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "orgao" },
                            domProps: { value: _vm.camposEspecificos.orgao },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "orgao",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "numero_dispensa" } }, [
                            _vm._v("Número da Dispensa")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.numero_dispensa,
                                expression: "camposEspecificos.numero_dispensa"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "numero_dispensa" },
                            domProps: {
                              value: _vm.camposEspecificos.numero_dispensa
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "numero_dispensa",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c(
                            "label",
                            { attrs: { for: "numero_processo_adm" } },
                            [_vm._v("Número Processo Administrativo")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.camposEspecificos.numero_processo_adm,
                                expression:
                                  "camposEspecificos.numero_processo_adm"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "numero_processo_adm" },
                            domProps: {
                              value: _vm.camposEspecificos.numero_processo_adm
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "numero_processo_adm",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "local_execucao" } }, [
                            _vm._v("Local de execução do contrato")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.local_execucao,
                                expression: "camposEspecificos.local_execucao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "local_execucao" },
                            domProps: {
                              value: _vm.camposEspecificos.local_execucao
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "local_execucao",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "objeto" } }, [
                            _vm._v("Objeto")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.objeto,
                                expression: "camposEspecificos.objeto"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "objeto" },
                            domProps: { value: _vm.camposEspecificos.objeto },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "objeto",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "inicio_vigencia" } }, [
                            _vm._v("Data do Início da Vigência")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.inicio_vigencia,
                                expression: "camposEspecificos.inicio_vigencia"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date", id: "inicio_vigencia" },
                            domProps: {
                              value: _vm.camposEspecificos.inicio_vigencia
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "inicio_vigencia",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "final_vigencia" } }, [
                            _vm._v("Data do Final da Vigência")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.final_vigencia,
                                expression: "camposEspecificos.final_vigencia"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date", id: "final_vigencia" },
                            domProps: {
                              value: _vm.camposEspecificos.final_vigencia
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "final_vigencia",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "publicacao" } }, [
                            _vm._v("Publicação")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.camposEspecificos.publicacao,
                                expression: "camposEspecificos.publicacao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date", id: "publicacao" },
                            domProps: {
                              value: _vm.camposEspecificos.publicacao
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "publicacao",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-4" },
                      [
                        _c("form-control", [
                          _c(
                            "label",
                            { attrs: { for: "previsao_orcamentaria" } },
                            [_vm._v("Previsão Orçamentária")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "mask",
                                rawName: "v-mask",
                                value: _vm.mask,
                                expression: "mask"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value:
                                  _vm.camposEspecificos.previsao_orcamentaria,
                                expression:
                                  "camposEspecificos.previsao_orcamentaria"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "previsao_orcamentaria",
                              placeholder: "R$100.00"
                            },
                            domProps: {
                              value: _vm.camposEspecificos.previsao_orcamentaria
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.camposEspecificos,
                                  "previsao_orcamentaria",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-6" },
                      [
                        _c("form-control", [
                          _c("label", [_vm._v("Possui Aditivo:")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.camposEspecificos.possui_aditivo,
                                  expression: "camposEspecificos.possui_aditivo"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "possui_aditivo",
                                id: "possui_aditivo",
                                value: "1",
                                checked: ""
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.camposEspecificos.possui_aditivo,
                                  "1"
                                )
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(
                                    _vm.camposEspecificos,
                                    "possui_aditivo",
                                    "1"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "possui_aditivo" }
                              },
                              [
                                _vm._v(
                                  "\n                                    Sim\n                                  "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.camposEspecificos.possui_aditivo,
                                  expression: "camposEspecificos.possui_aditivo"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "possui_aditivo",
                                id: "possui_aditivo",
                                value: "0"
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.camposEspecificos.possui_aditivo,
                                  "0"
                                )
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(
                                    _vm.camposEspecificos,
                                    "possui_aditivo",
                                    "0"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "possui_aditivo" }
                              },
                              [
                                _vm._v(
                                  "\n                                    Não\n                                  "
                                )
                              ]
                            )
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-6" },
                      [
                        _c("form-control", [
                          _c("label", { attrs: { for: "relacionado_covid" } }, [
                            _vm._v("Relacionado ao COVID-19:")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.camposEspecificos.relacionado_covid,
                                  expression:
                                    "camposEspecificos.relacionado_covid"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "relacionado_covid",
                                id: "relacionado_covid",
                                value: "1",
                                checked: ""
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.camposEspecificos.relacionado_covid,
                                  "1"
                                )
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(
                                    _vm.camposEspecificos,
                                    "relacionado_covid",
                                    "1"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "relacionado_covid" }
                              },
                              [
                                _vm._v(
                                  "\n                                    Sim\n                                  "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.camposEspecificos.relacionado_covid,
                                  expression:
                                    "camposEspecificos.relacionado_covid"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "relacionado_covid",
                                id: "relacionado_covid",
                                value: "0"
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.camposEspecificos.relacionado_covid,
                                  "0"
                                )
                              },
                              on: {
                                change: function($event) {
                                  _vm.$set(
                                    _vm.camposEspecificos,
                                    "relacionado_covid",
                                    "0"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "relacionado_covid" }
                              },
                              [
                                _vm._v(
                                  "\n                                    Não\n                                  "
                                )
                              ]
                            )
                          ])
                        ])
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "submit",
                staticClass: "btn btn-primary",
                attrs: { type: "submit", disabled: "" }
              },
              [_vm._v("Salvar")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-default",
                attrs: { href: _vm.baseUrl("/painel/processos") }
              },
              [_vm._v("Voltar")]
            ),
            _vm._v(" "),
            _vm.resource
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-danger pull-right",
                    attrs: { type: "button", tabindex: "-1" },
                    on: { click: _vm.remove }
                  },
                  [
                    _c("i", { staticClass: "fa fa-trash" }),
                    _vm._v(" Excluir\n                ")
                  ]
                )
              : _vm._e()
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Fechar"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a7b9afc0", module.exports)
  }
}

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(363)
/* template */
var __vue_template__ = __webpack_require__(364)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/ServicoLista.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-668e06c1", Component.options)
  } else {
    hotAPI.reload("data-v-668e06c1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.component('col-data', {
    props: ['data'],
    template: '<abbr :title="dateFull">{{ dateAbbr }}</abbr>',
    computed: {
        dateFull: function dateFull() {
            return moment(this.data.pub_data_cadastro).format('DD/MM/YYYY HH:mm');
        },
        dateAbbr: function dateAbbr() {
            return moment(this.data.pub_data_cadastro).format('DD/MM/YYYY');
        }
    }
});

Vue.component('col-edit-servico', {
    props: ['data'],
    template: '<a :href="baseUrl(\'/painel/pagina/\' + data.publicacao_id + \'/edicao?servico=1\')">Editar</a>'
});

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            status: {
                'RAS': 'Rascunho',
                'PUB': 'Publicado'
            },
            filters: {
                pub_data_cadastro: "",
                tipo_categoria_publicacao_id: "",
                pub_status: "",
                text: ""
            },
            columns: ['pub_titulo', 'tipo_servico_nome', 'pub_status', 'pub_data_cadastro', 'edit'],
            options: {
                skin: 'table-striped table-hover',
                columnsClasses: {
                    'tipo_servico_nome': 'col-situacao',
                    'pub_status': 'col-situacao',
                    'pub_data_cadastro': 'col-data',
                    'edit': 'col-actions'
                },
                headings: {
                    'pub_titulo': 'Título',
                    'tipo_servico_nome': 'Categoria',
                    'pub_status': 'Status',
                    'pub_data_cadastro': 'Data',
                    'edit': ''
                },
                texts: this.vueTableTexts(),
                filterable: false,
                sortable: ['pub_titulo', 'tipo_servico_nome', 'pub_status', 'pub_data_cadastro'],
                orderBy: {
                    ascending: false,
                    column: 'pub_data_cadastro'
                },
                templates: {
                    pub_data_cadastro: 'noticia-col-data',
                    edit: 'col-edit-servico'
                },
                params: {
                    table: true
                },
                responseAdapter: function (resp) {
                    var data = resp.data.items;

                    for (var i in data) {
                        if (data[i].pub_status && this.status[data[i].pub_status]) {
                            data[i].pub_status = this.status[data[i].pub_status];
                        }
                    }

                    return {
                        data: resp.data.items,
                        count: resp.data.count
                    };
                }.bind(this)
            }
        };
    },

    methods: {
        fetch: function fetch() {
            this.$refs.table.setFilter(JSON.stringify(this.filters));
        }
    }
});

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      {
        staticClass: "page-header",
        staticStyle: {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center"
        }
      },
      [
        _c("h1", [_vm._v("Serviços")]),
        _vm._v(" "),
        _c("div", {}, [
          _c(
            "a",
            {
              staticClass: "btn btn-default",
              attrs: { href: _vm.baseUrl("/painel/pagina/cadastro?servico=1") }
            },
            [_vm._v("Cadastrar Novo Serviço")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn btn-default",
              attrs: { href: _vm.baseUrl("/painel/solicitacoes") }
            },
            [_vm._v("Listar Solicitações")]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "pub_data_cadastro" } }, [
            _vm._v("Data")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filters.pub_data_cadastro,
                expression: "filters.pub_data_cadastro"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "date", id: "pub_data_cadastro" },
            domProps: { value: _vm.filters.pub_data_cadastro },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.filters, "pub_data_cadastro", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "pub_status" } }, [_vm._v("Status")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filters.pub_status,
                  expression: "filters.pub_status"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "pub_status" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.filters,
                    "pub_status",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }),
              _vm._v(" "),
              _vm._l(_vm.status, function(item, index) {
                return [
                  _c("option", { domProps: { value: index } }, [
                    _vm._v(_vm._s(item))
                  ])
                ]
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "text" } }, [_vm._v("Texto")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filters.text,
                expression: "filters.text"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "text" },
            domProps: { value: _vm.filters.text },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.filters, "text", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v(" ")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-block btn-success",
              attrs: { type: "button" },
              on: { click: _vm.fetch }
            },
            [_c("i", { staticClass: "fa fa-search" }), _vm._v(" Buscar")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "panel panel-form" },
      [
        _c("v-server-table", {
          ref: "table",
          attrs: {
            url: "/painel/ajax/pagina?servico=1",
            columns: _vm.columns,
            options: _vm.options
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-668e06c1", module.exports)
  }
}

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(366)
/* template */
var __vue_template__ = __webpack_require__(368)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/ServicoCadastro.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2cf0332a", Component.options)
  } else {
    hotAPI.reload("data-v-2cf0332a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_TemplateService__ = __webpack_require__(367);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource'],
    data: function data() {
        return {
            edit_categoria: false,
            categoria_editada: {},
            categorias: [],
            categoria: {
                tcs_nome: "",
                tcs_descricao: "",
                tcs_icone: ""
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
            showSuccessMsg: false
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        var _this = this;

        IconPicker.Init({
            // Required: You have to set the path of IconPicker JSON file to "jsonUrl" option. e.g. '/content/plugins/IconPicker/dist/iconpicker-1.5.0.json'
            jsonUrl: this.baseUrl('IconPicker/dist/iconpicker-1.5.0.json'),
            // Optional: Change the buttons or search placeholder text according to the language.
            searchPlaceholder: 'Buscar Icone',
            showAllButton: 'Mostrar Todos',
            cancelButton: 'Cancelar',
            noResultsFound: 'Sem resultados.', // v1.5.0 and the next versions
            borderRadius: '20px' // v1.5.0 and the next versions
        });

        var self = this;
        // Select your Button element (ID or Class)
        IconPicker.Run('#GetIconPicker', function () {
            $('#modalCategorias').modal('show');
            self.categoria.tcs_icone = self.$refs.icon_class.value;
        });

        Loading.show();

        var successMsg = window.location.search.split('success=')[1];
        this.showSuccessMsg = successMsg ? true : false;

        $(this.$refs.conteudo).summernote({
            lang: 'pt-BR',
            minHeight: 200,
            maxHeight: 500,
            maximumImageFileSize: 500 * 1024, // 500 KB
            toolbar: [['style1', ['style']], ['style2', ['bold', 'italic', 'underline', 'clear']], ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['insert', ['link', 'hr', 'table', 'picture', 'video', 'audio']], ['misc', ['fullscreen', 'codeview', 'help']]],
            callbacks: {
                onImageUploadError: function onImageUploadError(msg) {
                    alert(msg + ' (Tamanho máximo permitido: 500 KB). Prefira imagens no formato jpeg/jpg');
                }
            },
            popover: {
                image: [['custom', ['imageAttributes']], ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']], ['float', ['floatLeft', 'floatRight', 'floatNone']], ['remove', ['removeMedia']]]
            },
            imageAttributes: {
                icon: '<i class="note-icon-pencil"/>',
                removeEmpty: true, // true = remove attributes | false = leave empty if present
                disableUpload: true // true = don't display Upload Options | Display Upload Options
            }
        });

        axios.get('/painel/ajax/categoria-servico').then(function (response) {
            _this.categorias = response.data.data;
            _this.fetch();
        });
    },

    methods: {
        fetch: function fetch() {
            var _this2 = this;

            if (this.resource) {
                axios.get('/painel/ajax/pagina/' + this.resource + '/?servico=1').then(function (response) {
                    _this2.pagina = response.data.data;
                    _this2.pagina.pub_menu_lateral = _this2.pagina.pub_menu_lateral == 'S';
                    $(_this2.$refs.conteudo).summernote('code', _this2.pagina.pub_conteudo);

                    Loading.hide();
                    $(_this2.$refs.submit).prop("disabled", false);
                }).catch(function (error) {
                    console.log(error);
                    Loading.hide();
                    alert('Não foi possível carregar o recurso informado.');
                });

                axios.get('/painel/pagina/ajax/anexos/' + this.resource).then(function (response) {
                    _this2.attachments = response.data.data;
                }).catch(function (error) {
                    Loading.hide();
                    alert('Não foi possível carregar os anexos.');
                });
            } else {
                $(this.$refs.conteudo).summernote('code', __WEBPACK_IMPORTED_MODULE_1__services_TemplateService__["a" /* default */]);
                Loading.hide();
                $(this.$refs.submit).prop("disabled", false);
            }
        },
        save: function save() {
            var _this3 = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            // Pegar conteudo do editor de texto
            this.pagina.pub_conteudo = $(this.$refs.conteudo).summernote('code');

            var data = $.extend({}, this.pagina);

            var formData = new FormData();
            formData.append('pub_titulo', this.pagina.pub_titulo);
            formData.append('pub_descricao', this.pagina.pub_descricao);
            formData.append('pub_conteudo', this.pagina.pub_conteudo);
            formData.append('pub_status', this.pagina.pub_status);
            formData.append('pub_ordem_menu', this.pagina.pub_ordem_menu);
            formData.append('pub_menu_lateral', this.pagina.pub_menu_lateral);
            if (this.pagina.tipo_categoria_servico_id != 0) formData.append('tipo_categoria_servico_id', this.pagina.tipo_categoria_servico_id);

            for (var i = 0; i < this.files.length; i++) {
                var file = this.files[i];
                formData.append('files' + i, file);
            }

            if (this.resource) {
                data["_method"] = "PUT";
            }

            var promise = axios({
                method: 'post',
                url: '/painel/ajax/pagina' + (this.resource ? '/' + this.resource : '') + '?servico=1',
                data: formData,
                headers: { 'content-type': 'multipart/form-data' }
            });

            promise.then(function (response) {
                // window.location.href = this.baseUrl('/painel/pagina/' + response.data.data.publicacao_id + '/edicao?success=1');
                window.location.href = _this3.baseUrl('/painel/paginas?servico=1');
                // console.log(response);
                // Loading.hide();
                // $(this.$refs.submit).prop("disabled", false);
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this3.$refs.submit).prop("disabled", false);
            });
        },
        remove: function remove() {
            var _this4 = this;

            if (!confirm('Tem certeza que deseja remover este serviço? Esta ação não poderá ser desfeita!')) return;

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            axios.post('painel/ajax/pagina/' + this.resource + '?servico=1', { _method: 'DELETE' }).then(function (response) {
                window.location.href = _this4.baseUrl('/painel/paginas?servico=1');
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this4.$refs.submit).prop("disabled", false);
            });
        },
        addRow: function addRow() {
            var elem = document.createElement('tr');
            this.rows.push({
                file: {
                    name: 'Selecionar Arquivo'
                }
            });
        },

        removeElement: function removeElement(index) {
            this.rows.splice(index, 1);
        },
        setFilename: function setFilename(event, row) {
            var file = event.target.files[0];

            if (file.size > 10000 * 10000) {
                event.preventDefault();
                alert('Arquivo muito grande.');
                return;
            } else {
                row.file = file;
                this.files.push(file);
            }
        },
        removeAttachment: function removeAttachment(id) {
            if (!confirm('Tem certeza que deseja remover o anexo?')) return;

            var vm = this;
            Loading.show();

            axios.post('painel/pagina/ajax/anexo/remover/' + id, { _method: 'DELETE' }).then(function (response) {
                window.location.reload();
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
            });
        },
        removeCategoria: function removeCategoria(item) {
            var _this5 = this;

            this.$set(item, 'remove', true);

            axios.post('painel/ajax/categoria-servico/' + item.tipo_categoria_servico_id, { _method: 'DELETE' }).then(function (response) {
                for (var i = _this5.categorias.length - 1; i >= 0; i--) {
                    if (_this5.categorias[i].tipo_categoria_servico_id == item.tipo_categoria_servico_id) {
                        _this5.categorias.splice(i, 1);
                        break;
                    }
                }
            }).catch(function (error) {
                item.remove = false;
                alert('Ocorreu um erro ao tentar remover a categoria "' + item.tcs_nome + '".');
            });
        },
        saveCategoria: function saveCategoria() {
            var _this6 = this;

            var tcs_nome = this.categoria.tcs_nome;
            var tcs_descricao = this.categoria.tcs_descricao;
            var tcs_icone = this.categoria.tcs_icone;
            var tipo_categoria_servico_id = this.categoria.tipo_categoria_servico_id;
            var _id = Math.random().toString(36).substr(2, 10);

            if (!this.edit_categoria) this.categorias.push({ _id: _id, tcs_nome: tcs_nome, tcs_descricao: tcs_descricao, tcs_icone: tcs_icone });else {
                for (var i = this.categorias.length - 1; i >= 0; i--) {
                    if (this.categorias[i].tipo_categoria_servico_id == tipo_categoria_servico_id) {
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
            }).then(function (response) {
                var data = JSON.parse(response.config.data);
                for (var _i = _this6.categorias.length - 1; _i >= 0; _i--) {
                    if (_this6.categorias[_i]._id == data._id) {
                        console.log(response.data.data);
                        _this6.categorias[_i] = response.data.data;
                        break;
                    }
                }
                _this6.categoria = { tcs_nome: '', tcs_descricao: '', tcs_icone: '' };
                _this6.edit_categoria = false;
                _this6.categoria_editada = {};
            }).catch(function (error) {
                var data = JSON.parse(error.config.data);
                for (var _i2 = _this6.categorias.length - 1; _i2 >= 0; _i2--) {
                    if (_this6.categorias[_i2]._id == data._id) {
                        _this6.categorias.splice(_i2, 1);
                        break;
                    }
                }
                alert('Ocorreu um erro ao cadastrar a categoria "' + data.tcs_nome + '".');
            });

            this.categoria.tcs_nome = "";
        },
        cancelarEdicaoCategoria: function cancelarEdicaoCategoria() {
            this.categoria = { tcs_nome: '', tcs_descricao: '', tcs_icone: '' };
            this.edit_categoria = false;

            for (var i = this.categorias.length - 1; i >= 0; i--) {
                if (this.categorias[i].tipo_categoria_servico_id == this.categoria_editada.tipo_categoria_servico_id) {
                    this.categorias[i] = this.categoria_editada;
                    this.categoria_editada = {};
                    break;
                }
            }
        },
        handleClick: function handleClick(e) {
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
        showIconPicker: function showIconPicker() {
            $('#modalCategorias').modal('hide');
            $(this.$refs.icon_picker).click();
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ('<p><b><span style="font-size: 18px;">1. O que é o serviço?</span></b></p><div><br></div><p><b><span style="font-size: 18px;">2. Quando solicitar?</span></b></p><div><br></div><p><b><span style="font-size: 18px;">3. Canais de atendimento para solicitar o serviço</span></b></p><div><br></div><p><b><span style="font-size: 18px;">4. Requisitos, Documentos e Informações para solicitar o serviço</span></b></p><div><br></div><p><b><span style="font-size: 18px;">5. Legislação/Norma que regula o serviço</span></b></p><div><br></div><p><b><span style="font-size: 18px;">6. Taxas cobradas</span></b></p><div><br></div><p><b><span style="font-size: 18px;">7. Prazo para a prestação do serviço</span></b></p><div><br></div><p><b><span style="font-size: 18px;">8. Principais etapas do Serviço - Passo a Passo</span></b></p><div><br></div><p><b><span style="font-size: 18px;">9. Outras informações</span></b></p><div><br></div>');

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      !this.resource ? _c("h1", [_vm._v("Cadastrar Serviço")]) : _vm._e(),
      _vm._v(" "),
      this.resource ? _c("h1", [_vm._v("Atualizar Serviço")]) : _vm._e()
    ]),
    _vm._v(" "),
    _vm.showSuccessMsg
      ? _c(
          "div",
          {
            staticClass: "alert alert-success alert-dismissible",
            attrs: { role: "alert" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("span", [_vm._v("Serviço salvo com sucesso.")])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            attrs: { role: "form", "accept-charset": "UTF-8" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.save($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-9 col-md-8" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_titulo } },
                    [
                      _c("label", { attrs: { for: "pub_titulo" } }, [
                        _vm._v("Título")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pagina.pub_titulo,
                            expression: "pagina.pub_titulo"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "pub_titulo",
                          autofocus: ""
                        },
                        domProps: { value: _vm.pagina.pub_titulo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pagina,
                              "pub_titulo",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_descricao } },
                    [
                      _c("label", { attrs: { for: "pub_descricao" } }, [
                        _vm._v("Breve Descrição do Serviço")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pagina.pub_descricao,
                            expression: "pagina.pub_descricao"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "pub_descricao",
                          autofocus: ""
                        },
                        domProps: { value: _vm.pagina.pub_descricao },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pagina,
                              "pub_descricao",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_conteudo } },
                    [
                      _c("label", { attrs: { for: "pub_conteudo" } }, [
                        _vm._v("Conteúdo")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        ref: "conteudo",
                        staticClass: "form-control",
                        attrs: { id: "pub_conteudo", rows: "10" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("form-control", [
                    _c("div", { staticClass: "panel panel-form" }, [
                      _c("table", { staticClass: "table" }, [
                        _c("thead", [
                          _c("tr", [
                            _c("td", [_c("strong", [_vm._v("Anexos")])])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.attachments, function(attachment) {
                              return _c("tr", [
                                _c("td", [
                                  _c(
                                    "p",
                                    { staticClass: "form-control-static" },
                                    [
                                      _c(
                                        "a",
                                        {
                                          attrs: {
                                            href: _vm.baseUrl(
                                              "/painel/pagina/exibir/anexo/" +
                                                attachment.pub_anexo_id
                                            ),
                                            target: "_blank"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(attachment.pub_anexo_nome)
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger pull-right",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          _vm.removeAttachment(
                                            attachment.pub_anexo_id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-trash" }),
                                      _vm._v(
                                        " Excluir\n                                            "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.rows, function(row, index) {
                              return _c("tr", [
                                _c("td", [
                                  _c(
                                    "label",
                                    { staticClass: "fileContainer" },
                                    [
                                      _c("input", {
                                        staticStyle: { display: "none" },
                                        attrs: { type: "file", id: index },
                                        on: {
                                          change: function($event) {
                                            _vm.setFilename($event, row)
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("a", [_vm._v(_vm._s(row.file.name))])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger pull-right",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          _vm.removeElement(index)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-trash" }),
                                      _vm._v(
                                        " Excluir\n                                                "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary pull-right",
                          on: { click: _vm.addRow }
                        },
                        [_vm._v("Adicionar Anexo")]
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-3 col-md-4" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_status } },
                    [
                      _c("label", [_vm._v("Status")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.pagina.pub_status,
                              expression: "pagina.pub_status"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.pagina,
                                "pub_status",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "PUB" } }, [
                            _vm._v("Publicado")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "RAS" } }, [
                            _vm._v("Rascunho")
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.tipo_categoria_servico_id } },
                    [
                      _c("label", [_vm._v("Categoria")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "checkbox-group" },
                        [
                          _vm._l(_vm.categorias, function(item) {
                            return [
                              _c("div", { staticClass: "checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.pagina.tipo_categoria_servico_id,
                                      expression:
                                        "pagina.tipo_categoria_servico_id"
                                    }
                                  ],
                                  staticClass: "categoria",
                                  attrs: {
                                    required: "",
                                    type: "radio",
                                    id: "cat_" + item.tipo_categoria_servico_id
                                  },
                                  domProps: {
                                    value: item.tipo_categoria_servico_id,
                                    checked: _vm._q(
                                      _vm.pagina.tipo_categoria_servico_id,
                                      item.tipo_categoria_servico_id
                                    )
                                  },
                                  on: {
                                    click: _vm.handleClick,
                                    change: function($event) {
                                      _vm.$set(
                                        _vm.pagina,
                                        "tipo_categoria_servico_id",
                                        item.tipo_categoria_servico_id
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    attrs: {
                                      for:
                                        "cat_" + item.tipo_categoria_servico_id
                                    }
                                  },
                                  [
                                    _c("i", { class: item.tcs_icone }),
                                    _vm._v(" " + _vm._s(item.tcs_nome))
                                  ]
                                )
                              ])
                            ]
                          }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn-config",
                              attrs: {
                                href: "#",
                                "data-toggle": "modal",
                                "data-target": "#modalCategorias"
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-cog" }),
                              _vm._v(" Gerenciar Categorias")
                            ]
                          )
                        ],
                        2
                      )
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "submit",
                staticClass: "btn btn-primary",
                attrs: { type: "submit", disabled: "" }
              },
              [_vm._v("Salvar")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-default",
                attrs: { href: _vm.baseUrl("/painel/paginas") }
              },
              [_vm._v("Voltar")]
            ),
            _vm._v(" "),
            _vm.resource
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-danger pull-right",
                    attrs: { type: "button", tabindex: "-1" },
                    on: { click: _vm.remove }
                  },
                  [
                    _c("i", { staticClass: "fa fa-trash" }),
                    _vm._v(" Excluir\n                    ")
                  ]
                )
              : _vm._e()
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade modal-categorias",
        attrs: {
          id: "modalCategorias",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modalCategoriasLabel"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("table", { staticClass: "table" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.categorias, function(item) {
                      return [
                        _c(
                          "tr",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !item.remove,
                                expression: "!item.remove"
                              }
                            ]
                          },
                          [
                            _c("td", [
                              _c("i", { class: item.tcs_icone }),
                              _vm._v(" " + _vm._s(item.tcs_nome))
                            ]),
                            _vm._v(" "),
                            !_vm.edit_categoria
                              ? _c("td", { staticClass: "text-right" }, [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            item.tipo_categoria_servico_id &&
                                            (!item.tcs_fixa ||
                                              item.tcs_fixa != "S"),
                                          expression:
                                            "item.tipo_categoria_servico_id && (!item.tcs_fixa || item.tcs_fixa != 'S')"
                                        }
                                      ],
                                      staticClass: "text-danger",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.removeCategoria(item)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-times" }),
                                      _vm._v(
                                        " Excluir \n                                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            item.tipo_categoria_servico_id &&
                                            (!item.tcs_fixa ||
                                              item.tcs_fixa != "S"),
                                          expression:
                                            "item.tipo_categoria_servico_id && (!item.tcs_fixa || item.tcs_fixa != 'S')"
                                        }
                                      ],
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.categoria_editada = Object.assign(
                                            {},
                                            item
                                          )
                                          _vm.categoria = item
                                          _vm.edit_categoria = true
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-edit" }),
                                      _vm._v(
                                        " Editar\n                                        "
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      ]
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    attrs: { role: "form", "accept-charset": "UTF-8" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.saveCategoria($event)
                      }
                    }
                  },
                  [
                    _vm.edit_categoria
                      ? _c("div", { staticClass: "form-group" }, [
                          _c("h4", [
                            _vm._v("Editando Categoria: "),
                            _c("i", { class: _vm.categoria.tcs_icone }),
                            _vm._v(" " + _vm._s(_vm.categoria.tcs_nome))
                          ]),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  _vm.cancelarEdicaoCategoria()
                                }
                              }
                            },
                            [_c("small", [_vm._v("cancelar edição")])]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.categoria.tcs_nome,
                            expression: "categoria.tcs_nome"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          required: "",
                          type: "text",
                          placeholder: "Titulo da categoria"
                        },
                        domProps: { value: _vm.categoria.tcs_nome },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.categoria,
                              "tcs_nome",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.categoria.tcs_descricao,
                            expression: "categoria.tcs_descricao"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          required: "",
                          type: "text",
                          placeholder: "Descrição"
                        },
                        domProps: { value: _vm.categoria.tcs_descricao },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.categoria,
                              "tcs_descricao",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "get-and-preview" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "button" },
                            on: { click: _vm.showIconPicker }
                          },
                          [_vm._v("Selecionar Icone")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "icon-preview",
                            attrs: {
                              "data-toggle": "tooltip",
                              title: "",
                              "data-original-title": "Preview of selected Icon"
                            }
                          },
                          [
                            _c("i", {
                              class: _vm.categoria.tcs_icone,
                              attrs: { id: "IconPreview" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.categoria.tcs_icone,
                              expression: "categoria.tcs_icone"
                            }
                          ],
                          ref: "icon_class",
                          attrs: {
                            required: "",
                            hidden: "",
                            type: "text",
                            id: "IconInput",
                            name: "Icon",
                            required: "",
                            placeholder: "Hidden etc. input for icon classname",
                            autocomplete: "off",
                            spellcheck: "false"
                          },
                          domProps: { value: _vm.categoria.tcs_icone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.categoria,
                                "tcs_icone",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            ref: "icon_picker",
                            staticClass: "d-none",
                            attrs: {
                              type: "button",
                              id: "GetIconPicker",
                              "data-iconpicker-input": "input#IconInput",
                              "data-iconpicker-preview": "i#IconPreview"
                            }
                          },
                          [_vm._v("Selecionar Icone")]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(3)
                  ]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Fechar"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Fechar"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c(
        "h4",
        { staticClass: "modal-title", attrs: { id: "modalCategoriasLabel" } },
        [_vm._v("Categorias")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("colgroup", [
      _c("col"),
      _vm._v(" "),
      _c("col", { staticStyle: { width: "170px" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Salvar")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2cf0332a", module.exports)
  }
}

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(370)
/* template */
var __vue_template__ = __webpack_require__(371)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/SolicitacaoLista.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ab93c1ca", Component.options)
  } else {
    hotAPI.reload("data-v-ab93c1ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.component('solicitacao-col-anexos', {
    props: ['data'],
    template: '<i v-bind:class="classObject"></i>',
    computed: {
        classObject: function classObject() {
            return {
                fa: true,
                'fa-circle': this.data.qtd_anexos > 0,
                'fa-times': this.data.qtd_anexos <= 0,
                'text-success': this.data.qtd_anexos > 0,
                'text-muted': this.data.qtd_anexos <= 0
            };
        }
    }
});

Vue.component('solicitacao-col-situacao', {
    props: ['data'],
    template: '<span v-bind:class="classObject">{{ data.slc_situacao }}</span>',
    computed: {
        classObject: function classObject() {
            return {
                label: true,
                'label-situacao': true,
                'label-default': this.data.slc_situacao_sigla == 'ESP',
                'label-primary': this.data.slc_situacao_sigla == 'ANA',
                'label-success': this.data.slc_situacao_sigla == 'CON',
                'label-danger': this.data.slc_situacao_sigla == 'REJ'
            };
        }
    }
});

Vue.component('solicitacao-col-data', {
    props: ['data'],
    template: '<abbr :title="dateFull">{{ dateAbbr }}</abbr>',
    computed: {
        dateFull: function dateFull() {
            return moment(this.data.slc_data_cadastro).format('DD/MM/YYYY HH:mm');
        },
        dateAbbr: function dateAbbr() {
            return moment(this.data.slc_data_cadastro).format('DD/MM/YYYY');
        }
    }
});

Vue.component('solicitacao-col-edit', {
    props: ['data'],
    template: '<a :href="baseUrl(\'/painel/solicitacao/\' + data.solicitacao_id + \'/detalhes\')">Detalhes</a>'
});

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        esic: Boolean
    },
    data: function data() {
        return {
            situacoes: [],
            filters: {
                slc_protocolo: "",
                slc_situacao: ""
            },
            columns: ['slc_protocolo', 'slc_titulo', 'slc_orgao', 'sol_nome', 'qtd_anexos', 'slc_situacao', 'slc_data_cadastro', 'edit'],
            options: {
                skin: 'table-striped table-hover',
                columnsClasses: {
                    'slc_protocolo': 'col-protocolo',
                    'qtd_anexos': 'col-anexos',
                    'slc_situacao': 'col-situacao',
                    'slc_data_cadastro': 'col-data',
                    'edit': 'col-actions'
                },
                headings: {
                    'slc_protocolo': 'Protocolo',
                    'slc_titulo': 'Título',
                    'slc_orgao': 'Orgão/Entidade/Serviço',
                    'sol_nome': 'Enviada por',
                    'qtd_anexos': 'Anexos',
                    'slc_situacao': 'Situação',
                    'slc_data_cadastro': 'Abertura',
                    'edit': ''
                },
                texts: this.vueTableTexts(),
                filterable: false,
                sortable: ['slc_protocolo', 'slc_titulo', 'sol_nome', 'slc_orgao', 'slc_situacao', 'slc_data_cadastro'],
                orderBy: {
                    ascending: false,
                    column: 'slc_data_cadastro'
                },
                templates: {
                    qtd_anexos: 'solicitacao-col-anexos',
                    slc_situacao: 'solicitacao-col-situacao',
                    slc_data_cadastro: 'solicitacao-col-data',
                    edit: 'solicitacao-col-edit'
                },
                params: {
                    table: true
                },
                responseAdapter: function (resp) {
                    var data = resp.data.items;

                    for (var i in data) {
                        if (data[i].slc_situacao && this.situacoes[data[i].slc_situacao]) {
                            data[i].slc_situacao_sigla = data[i].slc_situacao;
                            data[i].slc_situacao = this.situacoes[data[i].slc_situacao];
                        }
                    }

                    return {
                        data: resp.data.items,
                        count: resp.data.count
                    };
                }.bind(this)
            }
        };
    },
    mounted: function mounted() {
        var _this = this;

        Loading.show();

        axios.get('/ajax/tipo-situacao-solicitacao').then(function (response) {
            _this.situacoes = response.data.data;
            _this.fetch();
            Loading.hide();
        });
    },

    methods: {
        fetch: function fetch() {
            this.$refs.table.setFilter(JSON.stringify(this.filters));
        }
    }
});

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      {
        staticClass: "page-header",
        staticStyle: {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center"
        }
      },
      [
        _vm.esic
          ? _c("h1", [_vm._v("E-Sic")])
          : _c("h1", [_vm._v("Solicitações")]),
        _vm._v(" "),
        _c("div", {}, [
          _c(
            "a",
            {
              staticClass: "btn btn-default",
              attrs: { href: _vm.baseUrl("/painel/solicitacao/cadastro") }
            },
            [_vm._v("Cadastrar Nova Solicitação")]
          ),
          _vm._v(" "),
          !_vm.esic
            ? _c(
                "a",
                {
                  staticClass: "btn btn-default",
                  attrs: { href: _vm.baseUrl("/painel/paginas?servico=1") }
                },
                [_vm._v("Listar Serviços")]
              )
            : _vm._e()
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "slc_protocolo" } }, [
            _vm._v("Protocolo")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filters.slc_protocolo,
                expression: "filters.slc_protocolo"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "slc_protocolo" },
            domProps: { value: _vm.filters.slc_protocolo },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.filters, "slc_protocolo", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "slc_situacao" } }, [_vm._v("Situação")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filters.slc_situacao,
                  expression: "filters.slc_situacao"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "slc_situacao" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.filters,
                    "slc_situacao",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }),
              _vm._v(" "),
              _vm._l(_vm.situacoes, function(item, index) {
                return [
                  _c("option", { domProps: { value: index } }, [
                    _vm._v(_vm._s(item))
                  ])
                ]
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v(" ")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-block btn-success",
              attrs: { type: "button" },
              on: { click: _vm.fetch }
            },
            [_c("i", { staticClass: "fa fa-search" }), _vm._v(" Buscar")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "panel panel-form" },
      [
        _c("v-server-table", {
          ref: "table",
          attrs: {
            url: "/painel/ajax/solicitacao?esic=" + (_vm.esic ? 1 : 0),
            columns: _vm.columns,
            options: _vm.options
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ab93c1ca", module.exports)
  }
}

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(373)
/* template */
var __vue_template__ = __webpack_require__(374)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/SolicitacaoCadastro.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ff1b7d1", Component.options)
  } else {
    hotAPI.reload("data-v-2ff1b7d1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource', 'tipoServicos', 'servicos'],
    data: function data() {
        return {
            solicitacao: {
                slc_orgao: "",
                slc_anexo: null,
                slc_anexo_2: null,
                slc_anexo_3: null
            },
            errors: {},
            qtdAnexos: 1,
            success: false
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        Loading.hide();
        $(this.$refs.submit).prop("disabled", false);
    },

    methods: {
        save: function save() {
            var _this = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            var data = new FormData();

            for (var i in this.solicitacao) {
                if (this.solicitacao[i]) {
                    data.append(i, this.solicitacao[i]);
                }
            }

            var promise = axios.post('/painel/ajax/solicitacao', data, {
                headers: { 'content-type': 'multipart/form-data' }
            });

            promise.then(function (response) {
                _this.solicitacao = response.data.data;
                _this.success = true;
                Loading.hide();
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this.$refs.submit).prop("disabled", false);
            });
        },
        onFileChange: function onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            this.solicitacao[e.target.id] = files.length ? files[0] : null;
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      !this.resource ? _c("h1", [_vm._v("Cadastrar Solicitação")]) : _vm._e(),
      _vm._v(" "),
      this.resource ? _c("h1", [_vm._v("Atualizar Solicitação")]) : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.success,
                expression: "success"
              }
            ],
            staticClass: "alert alert-success text-center",
            attrs: { role: "alert" }
          },
          [
            _c("h4", [_vm._v("Protocolo")]),
            _vm._v(" "),
            _c("h2", [_vm._v(_vm._s(_vm.solicitacao.slc_protocolo))])
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.success,
                expression: "success"
              }
            ],
            staticClass: "btn btn-primary",
            attrs: {
              href: _vm.baseUrl(
                "/painel/solicitacao/" +
                  _vm.solicitacao.solicitacao_id +
                  "/detalhes"
              )
            }
          },
          [_vm._v("Ver detalhes")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.success,
                expression: "success"
              }
            ],
            staticClass: "btn btn-default",
            attrs: { href: _vm.baseUrl("/painel/solicitacoes") }
          },
          [_vm._v("Voltar")]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.success,
                expression: "!success"
              }
            ]
          },
          [
            _c(
              "form",
              {
                attrs: { role: "form", "accept-charset": "UTF-8" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.save($event)
                  }
                }
              },
              [
                _c("form-control", { attrs: { error: _vm.errors.slc_orgao } }, [
                  _c("label", { attrs: { for: "slc_orgao" } }, [
                    _vm._v("Serviço ou Órgão/Entidade")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.solicitacao.slc_orgao,
                          expression: "solicitacao.slc_orgao"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "slc_orgao" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.solicitacao,
                            "slc_orgao",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }),
                      _vm._v(" "),
                      _vm._l(_vm.tipoServicos, function(tipo) {
                        return _vm.servicos[tipo.tipo_categoria_servico_id]
                          ? _c(
                              "optgroup",
                              { attrs: { label: tipo.tcs_nome } },
                              _vm._l(
                                _vm.servicos[tipo.tipo_categoria_servico_id],
                                function(servico) {
                                  return _c(
                                    "option",
                                    {
                                      domProps: {
                                        value:
                                          tipo.tcs_nome +
                                          " - " +
                                          servico.pub_titulo
                                      }
                                    },
                                    [_vm._v(_vm._s(servico.pub_titulo))]
                                  )
                                }
                              )
                            )
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _c("optgroup", { attrs: { label: "Secretarias" } }, [
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Administração" } },
                          [_vm._v("Administração")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Saúde" } },
                          [_vm._v("Saúde")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Educação" } },
                          [_vm._v("Educação")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          {
                            attrs: { value: "Secretarias - Assistência Social" }
                          },
                          [_vm._v("Assistência social")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Transporte" } },
                          [_vm._v("Transporte")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Cultura" } },
                          [_vm._v("Cultura")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Agricultura" } },
                          [_vm._v("Agricultura")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Esporte/Lazer" } },
                          [_vm._v("Esporte/Lazer")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Outros" } },
                          [_vm._v("Outros")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("optgroup", { attrs: { label: "Setores" } }, [
                        _c(
                          "option",
                          { attrs: { value: "Setores - Finanças" } },
                          [_vm._v("Finanças")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Setores - Licitação" } },
                          [_vm._v("Licitação")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Setores - Contabilidade" } },
                          [_vm._v("Contabilidade")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Setores - Controladoria" } },
                          [_vm._v("Controladoria")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Setores - Pessoal" } },
                          [_vm._v("Pessoal")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Setores - Convênios" } },
                          [_vm._v("Convênios")]
                        ),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "Setores - Outros" } }, [
                          _vm._v("Outros")
                        ])
                      ])
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c(
                  "form-control",
                  { attrs: { error: _vm.errors.slc_titulo } },
                  [
                    _c("label", { attrs: { for: "slc_titulo" } }, [
                      _vm._v("Título *")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.solicitacao.slc_titulo,
                          expression: "solicitacao.slc_titulo"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "slc_titulo" },
                      domProps: { value: _vm.solicitacao.slc_titulo },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.solicitacao,
                            "slc_titulo",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "form-control",
                  { attrs: { error: _vm.errors.slc_descricao } },
                  [
                    _c("label", { attrs: { for: "slc_descricao" } }, [
                      _vm._v("Mensagem *")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.solicitacao.slc_descricao,
                          expression: "solicitacao.slc_descricao"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "slc_descricao", rows: "8" },
                      domProps: { value: _vm.solicitacao.slc_descricao },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.solicitacao,
                            "slc_descricao",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("form-control", { attrs: { error: _vm.errors.slc_anexo } }, [
                  _c("label", { attrs: { for: "slc_anexo" } }, [
                    _vm._v("Anexar arquivos (máximo de 3 arquivos)")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "file", id: "slc_anexo" },
                    on: { change: _vm.onFileChange }
                  })
                ]),
                _vm._v(" "),
                _vm.qtdAnexos >= 2
                  ? _c(
                      "form-control",
                      { attrs: { error: _vm.errors.slc_anexo_2 } },
                      [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "file", id: "slc_anexo_2" },
                          on: { change: _vm.onFileChange }
                        })
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.qtdAnexos >= 3
                  ? _c(
                      "form-control",
                      { attrs: { error: _vm.errors.slc_anexo_3 } },
                      [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "file", id: "slc_anexo_3" },
                          on: { change: _vm.onFileChange }
                        })
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.qtdAnexos < 3,
                        expression: "qtdAnexos < 3"
                      }
                    ],
                    staticClass: "form-group"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.qtdAnexos++
                          }
                        }
                      },
                      [_vm._v("Adicionar outro anexo")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    ref: "submit",
                    staticClass: "btn btn-primary",
                    attrs: { type: "submit", disabled: "" }
                  },
                  [_vm._v("Enviar")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-default",
                    attrs: { href: _vm.baseUrl("/painel/solicitacoes") }
                  },
                  [_vm._v("Voltar")]
                )
              ],
              1
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2ff1b7d1", module.exports)
  }
}

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(376)
/* template */
var __vue_template__ = __webpack_require__(377)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/SolicitacaoDetalhes.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67e396f0", Component.options)
  } else {
    hotAPI.reload("data-v-67e396f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource'],
    data: function data() {
        return {
            situacoes: [],
            solicitacao: {
                slc_situacao: "",
                slc_comentario_texto: ""
            },
            errors: {},
            anexos: []
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        var _this = this;

        Loading.show();

        axios.get('/ajax/tipo-situacao-solicitacao').then(function (response) {
            _this.situacoes = response.data.data;
            _this.fetch();
        });
    },

    methods: {
        fetch: function fetch() {
            var _this2 = this;

            axios.get('/painel/ajax/solicitacao/' + this.resource).then(function (response) {
                _this2.solicitacao = response.data.data;

                if (_this2.solicitacao.slc_data_cadastro) {
                    _this2.solicitacao.slc_data_cadastro = moment(_this2.solicitacao.slc_data_cadastro).format('DD/MM/YYYY HH:mm');
                }

                if (_this2.solicitacao.slc_situacao && _this2.situacoes[_this2.solicitacao.slc_situacao]) {
                    _this2.solicitacao.slc_situacao_texto = _this2.situacoes[_this2.solicitacao.slc_situacao];
                }

                if (_this2.solicitacao.slc_comentario) {
                    _this2.solicitacao.slc_comentario_texto = _this2.solicitacao.slc_comentario.replace(/(?:\r\n|\r|\n)/g, '<br />');
                }

                Loading.hide();
                $(_this2.$refs.submit).prop("disabled", false);
            }).catch(function (error) {
                Loading.hide();
                alert('Não foi possível carregar o recurso informado.');
            });
        },
        save: function save() {
            var _this3 = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            var data = $.extend(new FormData(), this.solicitacao);

            data.append('_method', 'PUT');

            for (var i in this.solicitacao) {
                if (this.solicitacao[i]) {
                    data.append(i, this.solicitacao[i]);
                }
            }

            for (var i in this.anexos) {
                data.append('dan_data_documento_' + (parseInt(i) + 1), this.anexos[i].dan_data_documento);
                data.append('tipo_categoria_processo_id_' + (parseInt(i) + 1), this.anexos[i].tipo_categoria_processo_id);
                data.append('doc_arquivo_' + (parseInt(i) + 1), this.anexos[i].doc_arquivo);
            }

            axios.post('/painel/ajax/solicitacao/' + this.resource, data).then(function (response) {
                window.location.href = _this3.baseUrl('/painel/solicitacao/' + response.data.data.solicitacao_id + '/detalhes');
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this3.$refs.submit).prop("disabled", false);
            });
        },
        addArquivo: function addArquivo() {
            this.anexos.push({
                dan_data_documento: moment().format('YYYY-MM-DD'),
                tipo_categoria_processo_id: null,
                doc_arquivo: null
            });
        },
        removeArquivo: function removeArquivo(index) {
            this.anexos.splice(index, 1);
            this.$forceUpdate();
        },
        onFileChange: function onFileChange(item, e) {
            var files = e.target.files || e.dataTransfer.files;
            item.doc_arquivo = files.length ? files[0] : null;
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-default pull-right",
          attrs: { href: _vm.baseUrl("/painel/solicitacoes") }
        },
        [
          _c("i", { staticClass: "fa fa-chevron-left fa-fw" }),
          _vm._v(" Voltar")
        ]
      ),
      _vm._v(" "),
      _c("h1", [_vm._v("Detalhes da Solicitação")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("table", { staticClass: "table" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("th", { staticStyle: { "border-top": "0" } }, [
              _vm._v("Protocolo:")
            ]),
            _vm._v(" "),
            _c("td", { staticStyle: { "border-top": "0" } }, [
              _vm._v(_vm._s(_vm.solicitacao.slc_protocolo))
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Solicitante:")]),
            _vm._v(" "),
            _c("td", [
              _vm.solicitacao.solicitante
                ? _c("span", [
                    _vm._v(_vm._s(_vm.solicitacao.solicitante.sol_nome))
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Data de Abertura:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.solicitacao.slc_data_cadastro))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Órgão/Entidade/Servico:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.solicitacao.slc_orgao))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Situação:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.solicitacao.slc_situacao_texto))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Título:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.solicitacao.slc_titulo))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Descrição da Solicitação:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.solicitacao.slc_descricao))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Anexos:")]),
            _vm._v(" "),
            _c("td", [
              _c(
                "ul",
                { staticClass: "list-unstyled" },
                [
                  _vm._l(_vm.solicitacao.anexos, function(item) {
                    return [
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.baseUrl(
                                "/painel/solicitacao/anexo/" + item.anexo_id
                              ),
                              target: "_blank"
                            }
                          },
                          [_vm._v(_vm._s(item.ane_nome))]
                        )
                      ])
                    ]
                  })
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Comentários:")]),
            _vm._v(" "),
            _c("td", {
              domProps: {
                innerHTML: _vm._s(_vm.solicitacao.slc_comentario_texto)
              }
            })
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            attrs: { role: "form", "accept-charset": "UTF-8" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.save($event)
              }
            }
          },
          [
            _c("form-control", { attrs: { error: _vm.errors.slc_situacao } }, [
              _c("label", { attrs: { for: "slc_situacao" } }, [
                _vm._v("Alterar Situação")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.solicitacao.slc_situacao,
                      expression: "solicitacao.slc_situacao"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "slc_situacao" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.solicitacao,
                        "slc_situacao",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _vm._l(_vm.situacoes, function(item, index) {
                    return [
                      _c("option", { domProps: { value: index } }, [
                        _vm._v(_vm._s(item))
                      ])
                    ]
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c(
              "form-control",
              { attrs: { error: _vm.errors.slc_comentario } },
              [
                _c("label", { attrs: { for: "slc_comentario" } }, [
                  _vm._v("Comentários")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.solicitacao.slc_comentario,
                      expression: "solicitacao.slc_comentario"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { id: "slc_comentario", rows: "8" },
                  domProps: { value: _vm.solicitacao.slc_comentario },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.solicitacao,
                        "slc_comentario",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _vm._l(_vm.anexos, function(item, index) {
              return _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-xs-10" },
                      [
                        !item.anexo_id
                          ? _c(
                              "form-control",
                              {
                                attrs: {
                                  error:
                                    _vm.errors["doc_arquivo_" + (index + 1)]
                                }
                              },
                              [
                                _c(
                                  "label",
                                  {
                                    attrs: { for: "doc_arquivo_" + (index + 1) }
                                  },
                                  [_vm._v("Arquivo")]
                                ),
                                _vm._v(" "),
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "file",
                                    id: "doc_arquivo_" + (index + 1)
                                  },
                                  on: {
                                    change: function($event) {
                                      _vm.onFileChange(item, $event)
                                    }
                                  }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        item.anexo_id
                          ? _c("div", { staticClass: "form-group" }, [
                              _c("label", [_vm._v("Arquivo")]),
                              _vm._v(" "),
                              _c("p", { staticClass: "form-control-static" }, [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      href: _vm.baseUrl(
                                        "/painel/processo/anexo/" +
                                          item.anexo_id
                                      ),
                                      target: "_blank"
                                    }
                                  },
                                  [_vm._v(_vm._s(item.ane_nome))]
                                )
                              ])
                            ])
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-xs-2" }, [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                (!_vm.resource && index > 0) || _vm.resource,
                              expression: "(!resource && index > 0) || resource"
                            }
                          ],
                          staticClass: "form-group"
                        },
                        [
                          _c("label", [_vm._v(" ")]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              staticStyle: {
                                display: "block",
                                "margin-left": "auto"
                              },
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.removeArquivo(index)
                                }
                              }
                            },
                            [_c("i", { staticClass: "fa fa-times" })]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ])
            }),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: { click: _vm.addArquivo }
                },
                [_vm._v("Adicionar Arquivo")]
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "submit",
                staticClass: "btn btn-primary",
                attrs: { type: "submit", disabled: "" }
              },
              [_vm._v("Salvar")]
            )
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("colgroup", [_c("col", { staticStyle: { width: "220px" } })])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-67e396f0", module.exports)
  }
}

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(379)
/* template */
var __vue_template__ = __webpack_require__(380)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/NoticiaLista.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b89373b", Component.options)
  } else {
    hotAPI.reload("data-v-1b89373b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.component('noticia-col-categorias', {
    props: ['data'],
    template: '<span>{{ textCategorias }}</span>',
    computed: {
        textCategorias: function textCategorias() {
            return this.data.categorias.map(function (current) {
                return current.tcp_nome;
            }).join(", ");
        }
    }
});

Vue.component('noticia-col-data', {
    props: ['data'],
    template: '<abbr :title="dateFull">{{ dateAbbr }}</abbr>',
    computed: {
        dateFull: function dateFull() {
            return moment(this.data.pub_data_cadastro).format('DD/MM/YYYY HH:mm');
        },
        dateAbbr: function dateAbbr() {
            return moment(this.data.pub_data_cadastro).format('DD/MM/YYYY');
        }
    }
});

Vue.component('noticia-col-edit', {
    props: ['data'],
    template: '<div><a :href="baseUrl(\'/painel/noticia/\' + data.publicacao_id + \'/edicao\')">Editar</a>&nbsp;&nbsp;\n            <a :href="baseUrl(\'/painel/noticia/\' + data.publicacao_id + \'/visualizacao\')">Ver</a></div>'
});

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            status: {
                'RAS': 'Rascunho',
                'PUB': 'Publicado'
            },
            categorias: [],
            filters: {
                pub_data_cadastro: "",
                tipo_categoria_publicacao_id: "",
                pub_status: "",
                pub_tipo: "",
                text: ""
            },
            columns: ['pub_titulo', 'categorias', 'pub_status', 'pub_tipo', 'pub_data_cadastro', 'edit'],
            options: {
                skin: 'table-striped table-hover',
                columnsClasses: {
                    'pub_data_cadastro': 'col-data',
                    'pub_status': 'col-situacao',
                    'pub_tipo': 'col-tipo',
                    'edit': 'col-actions'
                },
                headings: {
                    'pub_titulo': 'Título',
                    'categorias': 'Categorias',
                    'pub_status': 'Status',
                    'pub_tipo': 'Tipo',
                    'pub_data_cadastro': 'Data',
                    'edit': ''
                },
                texts: this.vueTableTexts(),
                filterable: false,
                sortable: ['pub_titulo', 'pub_status', 'pub_tipo', 'pub_data_cadastro'],
                orderBy: {
                    ascending: false,
                    column: 'pub_data_cadastro'
                },
                templates: {
                    categorias: 'noticia-col-categorias',
                    pub_data_cadastro: 'noticia-col-data',
                    edit: 'noticia-col-edit'
                },
                params: {
                    table: true
                },
                responseAdapter: function (resp) {
                    var data = resp.data.items;

                    for (var i in data) {
                        if (data[i].pub_status && this.status[data[i].pub_status]) {
                            data[i].pub_status = this.status[data[i].pub_status];
                        }
                    }

                    for (var i in data) {
                        if (data[i].pub_tipo && this.status[data[i].pub_tipo]) {
                            data[i].pub_tipo = this.status[data[i].pub_tipo];
                        }
                    }

                    return {
                        data: resp.data.items,
                        count: resp.data.count
                    };
                }.bind(this)
            }
        };
    },
    mounted: function mounted() {
        var _this = this;

        Loading.show();

        axios.get('/painel/ajax/categoria-publicacao').then(function (response) {
            _this.categorias = response.data.data;
            Loading.hide();
        });
    },

    methods: {
        fetch: function fetch() {
            this.$refs.table.setFilter(JSON.stringify(this.filters));
        }
    }
});

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-mairi pull-right",
          attrs: { href: _vm.baseUrl("/painel/noticia/cadastro") }
        },
        [_vm._v("Cadastrar nova")]
      ),
      _vm._v(" "),
      _c("h1", [_vm._v("Notícias e Boletins Informativos")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "pub_data_cadastro" } }, [
            _vm._v("Data")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filters.pub_data_cadastro,
                expression: "filters.pub_data_cadastro"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "date", id: "pub_data_cadastro" },
            domProps: { value: _vm.filters.pub_data_cadastro },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.filters, "pub_data_cadastro", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "tipo_categoria_publicacao_id" } }, [
            _vm._v("Categoria")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filters.tipo_categoria_publicacao_id,
                  expression: "filters.tipo_categoria_publicacao_id"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "tipo_categoria_publicacao_id" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.filters,
                    "tipo_categoria_publicacao_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }),
              _vm._v(" "),
              _vm._l(_vm.categorias, function(item) {
                return [
                  _c(
                    "option",
                    { domProps: { value: item.tipo_categoria_publicacao_id } },
                    [_vm._v(_vm._s(item.tcp_nome))]
                  )
                ]
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "pub_status" } }, [_vm._v("Status")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filters.pub_status,
                  expression: "filters.pub_status"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "pub_status" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.filters,
                    "pub_status",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }),
              _vm._v(" "),
              _vm._l(_vm.status, function(item, index) {
                return [
                  _c("option", { domProps: { value: index } }, [
                    _vm._v(_vm._s(item))
                  ])
                ]
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "text" } }, [_vm._v("Texto")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filters.text,
                expression: "filters.text"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "text" },
            domProps: { value: _vm.filters.text },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.filters, "text", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v("Tipo")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filters.pub_tipo,
                  expression: "filters.pub_tipo"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "pub_tipo" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.filters,
                    "pub_tipo",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }),
              _vm._v(" "),
              _c("option", { attrs: { value: "NOT" } }, [_vm._v("Notícia")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "BOL" } }, [_vm._v("Boletim")])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v(" ")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-block btn-success",
              attrs: { type: "button" },
              on: { click: _vm.fetch }
            },
            [_c("i", { staticClass: "fa fa-search" }), _vm._v(" Buscar")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "panel panel-form" },
      [
        _c("v-server-table", {
          ref: "table",
          attrs: {
            url: "/painel/ajax/noticia",
            columns: _vm.columns,
            options: _vm.options
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1b89373b", module.exports)
  }
}

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(382)
/* template */
var __vue_template__ = __webpack_require__(383)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/NoticiaCadastro.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3693a89e", Component.options)
  } else {
    hotAPI.reload("data-v-3693a89e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource'],
    data: function data() {
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
                remove_image: false
            },
            errors: {},
            showSuccessMsg: false,
            categoria: {
                tcp_nome: ""
            }
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        var _this = this;

        Loading.show();

        var successMsg = window.location.search.split('success=')[1];
        this.showSuccessMsg = successMsg ? true : false;

        // TODO: Resolver problema do codeview que não funciona com webpack
        $(this.$refs.conteudo).summernote({
            lang: 'pt-BR',
            minHeight: 200,
            maxHeight: 500,
            maximumImageFileSize: 500 * 1024, // 500 KB
            toolbar: [['style1', ['style']], ['style2', ['bold', 'italic', 'underline', 'clear']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['insert', ['link', 'hr', 'table', 'picture', 'video', 'audio']], ['misc', ['fullscreen', 'codeview', 'help']]],
            callbacks: {
                onImageUploadError: function onImageUploadError(msg) {
                    alert(msg + ' (Tamanho máximo permitido: 500 KB). Prefira imagens no formato jpeg/jpg');
                }
                // onAudioUpload: function (data) {
                //     let $audio = $('<audio controls>');
                //     $(this).summernote('insertNode', $('<p></p>').append($audio[0])[0]);
                // }
            },
            popover: {
                image: [['custom', ['imageAttributes']], ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']], ['float', ['floatLeft', 'floatRight', 'floatNone']], ['remove', ['removeMedia']]]
            },
            imageAttributes: {
                icon: '<i class="note-icon-pencil"/>',
                removeEmpty: true, // true = remove attributes | false = leave empty if present
                disableUpload: true // true = don't display Upload Options | Display Upload Options
            }
        });

        axios.get('/painel/ajax/categoria-publicacao').then(function (response) {
            _this.categorias = response.data.data;
            _this.fetch();
        });
    },

    methods: {
        fetch: function fetch() {
            var _this2 = this;

            if (this.resource) {
                axios.get('/painel/ajax/noticia/' + this.resource).then(function (response) {
                    _this2.noticia = response.data.data;
                    _this2.noticia.tipo_categoria_publicacao_id = [];

                    $(_this2.$refs.conteudo).summernote('code', _this2.noticia.pub_conteudo);

                    if (_this2.noticia.categorias.length) {
                        for (var i = _this2.noticia.categorias.length - 1; i >= 0; i--) {
                            _this2.noticia.tipo_categoria_publicacao_id.push(_this2.noticia.categorias[i].tipo_categoria_publicacao_id);
                        }
                    }

                    Loading.hide();
                    $(_this2.$refs.submit).prop("disabled", false);
                }).catch(function (error) {
                    Loading.hide();
                    alert('Não foi possível carregar o recurso informado.');
                });

                axios.get('/painel/pagina/ajax/anexos/' + this.resource).then(function (response) {
                    _this2.attachments = response.data.data;
                }).catch(function (error) {
                    Loading.hide();
                    alert('Não foi possível carregar os anexos.');
                });
            } else {
                Loading.hide();
                $(this.$refs.submit).prop("disabled", false);
            }
        },
        save: function save() {
            var _this3 = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            // Pegar conteudo do editor de texto
            this.noticia.pub_conteudo = $(this.$refs.conteudo).summernote('code');

            var data = new FormData();

            for (var i in this.noticia) {
                if (this.noticia[i]) {
                    data.append(i, this.noticia[i]);
                }
            }

            for (var i = 0; i < this.files.length; i++) {
                var file = this.files[i];
                data.append('files' + i, file);
            }

            if (this.resource) {
                data.append("_method", "PUT");
            }

            var promise = axios({
                method: 'post',
                url: '/painel/ajax/noticia' + (this.resource ? '/' + this.resource : ''),
                data: data,
                headers: { 'content-type': 'multipart/form-data' }
            });

            promise.then(function (response) {
                // window.location.href = this.baseUrl('/painel/noticia/' + response.data.data.publicacao_id + '/edicao?success=1');
                window.location.href = _this3.baseUrl('/painel/noticias');
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this3.$refs.submit).prop("disabled", false);
            });
        },
        onFileChange: function onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            this.noticia[e.target.id] = files.length ? files[0] : null;
        },
        removeFile: function removeFile() {
            this.noticia.remove_image = true;
            this.noticia.pub_midia_p = null;
        },
        saveCategoria: function saveCategoria() {
            var _this4 = this;

            var tcp_nome = this.categoria.tcp_nome;
            var tipo_categoria_publicacao_id = this.categoria.tipo_categoria_publicacao_id;
            var _id = Math.random().toString(36).substr(2, 10);

            if (!this.edit_categoria) this.categorias.push({ _id: _id, tcp_nome: tcp_nome });else {
                for (var i = this.categorias.length - 1; i >= 0; i--) {
                    if (this.categorias[i].tipo_categoria_publicacao_id == tipo_categoria_publicacao_id) {
                        this.$set(this.categorias[i], '_id', _id);
                        break;
                    }
                }
            }

            axios.post('painel/ajax/categoria-publicacao', {
                _id: _id,
                tcp_nome: tcp_nome,
                tipo_categoria_publicacao_id: tipo_categoria_publicacao_id
            }).then(function (response) {
                var data = JSON.parse(response.config.data);
                for (var _i = _this4.categorias.length - 1; _i >= 0; _i--) {
                    if (_this4.categorias[_i]._id == data._id) {
                        console.log(response.data.data);
                        _this4.categorias[_i] = response.data.data;
                        break;
                    }
                }
                _this4.categoria = { tcp_nome: '' };
                _this4.edit_categoria = false;
            }).catch(function (error) {
                var data = JSON.parse(error.config.data);
                for (var _i2 = _this4.categorias.length - 1; _i2 >= 0; _i2--) {
                    if (_this4.categorias[_i2]._id == data._id) {
                        _this4.categorias.splice(_i2, 1);
                        break;
                    }
                }
                alert('Ocorreu um erro ao cadastrar a categoria "' + data.tcp_nome + '".');
            });

            this.categoria.tcp_nome = "";
        },
        cancelarEdicaoCategoria: function cancelarEdicaoCategoria() {
            this.categoria = { tcp_nome: '' };
            this.edit_categoria = false;

            for (var i = this.categorias.length - 1; i >= 0; i--) {
                if (this.categorias[i].tipo_categoria_publicacao_id == this.categoria_editada.tipo_categoria_publicacao_id) {
                    this.categorias[i] = this.categoria_editada;
                    this.categoria_editada = {};
                    break;
                }
            }
        },
        remove: function remove() {
            var _this5 = this;

            if (!confirm('Tem certeza que deseja remover esta notícia? Esta ação não poderá ser desfeita!')) return;

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            axios.post('painel/ajax/noticia/' + this.resource, { _method: 'DELETE' }).then(function (response) {
                window.location.href = _this5.baseUrl('/painel/noticias');
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this5.$refs.submit).prop("disabled", false);
            });
        },
        removeCategoria: function removeCategoria(item) {
            var _this6 = this;

            this.$set(item, 'remove', true);

            axios.post('painel/ajax/categoria-publicacao/' + item.tipo_categoria_publicacao_id, { _method: 'DELETE' }).then(function (response) {
                for (var i = _this6.categorias.length - 1; i >= 0; i--) {
                    if (_this6.categorias[i].tipo_categoria_publicacao_id == item.tipo_categoria_publicacao_id) {
                        _this6.categorias.splice(i, 1);
                        break;
                    }
                }
            }).catch(function (error) {
                item.remove = false;
                alert('Ocorreu um erro ao tentar remover a categoria "' + item.tcp_nome + '".');
            });
        },
        addRow: function addRow() {
            var elem = document.createElement('tr');
            this.rows.push({
                file: {
                    name: 'Selecionar Arquivo'
                }
            });
        },

        removeElement: function removeElement(index) {
            this.rows.splice(index, 1);
        },
        setFilename: function setFilename(event, row) {
            var file = event.target.files[0];

            if (file.size > 10000 * 10000) {
                event.preventDefault();
                alert('Arquivo muito grande.');
                return;
            } else {
                row.file = file;
                this.files.push(file);
            }
        },
        removeAttachment: function removeAttachment(id) {
            if (!confirm('Tem certeza que deseja remover o anexo?')) return;

            var vm = this;
            Loading.show();

            axios.post('painel/pagina/ajax/anexo/remover/' + id, { _method: 'DELETE' }).then(function (response) {
                window.location.reload();
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      !this.resource ? _c("h1", [_vm._v("Cadastrar Notícia")]) : _vm._e(),
      _vm._v(" "),
      this.resource ? _c("h1", [_vm._v("Atualizar Notícia")]) : _vm._e()
    ]),
    _vm._v(" "),
    _vm.showSuccessMsg
      ? _c(
          "div",
          {
            staticClass: "alert alert-success alert-dismissible",
            attrs: { role: "alert" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("span", [_vm._v("Notícia salva com sucesso.")])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            attrs: { role: "form", "accept-charset": "UTF-8" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.save($event)
              }
            }
          },
          [
            _c("form-control", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.noticia.pub_tipo,
                    expression: "noticia.pub_tipo"
                  }
                ],
                staticClass: "form-check-input",
                attrs: {
                  type: "radio",
                  name: "pub_tipo",
                  id: "pub_tipo",
                  value: "NOT"
                },
                domProps: { checked: _vm._q(_vm.noticia.pub_tipo, "NOT") },
                on: {
                  change: function($event) {
                    _vm.$set(_vm.noticia, "pub_tipo", "NOT")
                  }
                }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("Notícia")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.noticia.pub_tipo,
                    expression: "noticia.pub_tipo"
                  }
                ],
                staticClass: "form-check-input",
                attrs: {
                  type: "radio",
                  name: "pub_tipo",
                  id: "pub_tipo",
                  value: "BOL"
                },
                domProps: { checked: _vm._q(_vm.noticia.pub_tipo, "BOL") },
                on: {
                  change: function($event) {
                    _vm.$set(_vm.noticia, "pub_tipo", "BOL")
                  }
                }
              }),
              _vm._v(" "),
              _c("span", [_vm._v("Boletim")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-9 col-md-8" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_titulo } },
                    [
                      _c("label", { attrs: { for: "pub_titulo" } }, [
                        _vm._v("Título")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.noticia.pub_titulo,
                            expression: "noticia.pub_titulo"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "pub_titulo",
                          autofocus: ""
                        },
                        domProps: { value: _vm.noticia.pub_titulo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.noticia,
                              "pub_titulo",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_conteudo } },
                    [
                      _c("label", { attrs: { for: "pub_conteudo" } }, [
                        _vm._v("Conteúdo")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        ref: "conteudo",
                        staticClass: "form-control",
                        attrs: { id: "pub_conteudo", rows: "10" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("form-control", [
                    _c("div", { staticClass: "panel panel-form" }, [
                      _c("table", { staticClass: "table" }, [
                        _c("thead", [
                          _c("tr", [
                            _c("td", [_c("strong", [_vm._v("Anexos")])])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.attachments, function(attachment) {
                              return _c("tr", [
                                _c("td", [
                                  _c(
                                    "p",
                                    { staticClass: "form-control-static" },
                                    [
                                      _c(
                                        "a",
                                        {
                                          attrs: {
                                            href: _vm.baseUrl(
                                              "/painel/pagina/exibir/anexo/" +
                                                attachment.pub_anexo_id
                                            ),
                                            target: "_blank"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(attachment.pub_anexo_nome)
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger pull-right",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          _vm.removeAttachment(
                                            attachment.pub_anexo_id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-trash" }),
                                      _vm._v(
                                        " Excluir\n                                        "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.rows, function(row, index) {
                              return _c("tr", [
                                _c("td", [
                                  _c(
                                    "label",
                                    { staticClass: "fileContainer" },
                                    [
                                      _c("input", {
                                        staticStyle: { display: "none" },
                                        attrs: { type: "file", id: index },
                                        on: {
                                          change: function($event) {
                                            _vm.setFilename($event, row)
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("a", [_vm._v(_vm._s(row.file.name))])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger pull-right",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          _vm.removeElement(index)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-trash" }),
                                      _vm._v(
                                        " Excluir\n                                            "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary pull-right",
                          on: { click: _vm.addRow }
                        },
                        [_vm._v("Adicionar Anexo")]
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-3 col-md-4" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_status } },
                    [
                      _c("label", [_vm._v("Status")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.noticia.pub_status,
                              expression: "noticia.pub_status"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.noticia,
                                "pub_status",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "PUB" } }, [
                            _vm._v("Publicado")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "RAS" } }, [
                            _vm._v("Rascunho")
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "pub_data_visivel" } }, [
                      _vm._v("Data de Publicação")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.noticia.pub_data_visivel,
                          expression: "noticia.pub_data_visivel"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "date", id: "pub_data_visivel" },
                      domProps: { value: _vm.noticia.pub_data_visivel },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.noticia,
                            "pub_data_visivel",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    {
                      attrs: { error: _vm.errors.tipo_categoria_publicacao_id }
                    },
                    [
                      _c("label", [_vm._v("Categorias")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "checkbox-group" },
                        [
                          _vm._l(_vm.categorias, function(item) {
                            return [
                              _c("div", { staticClass: "checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.noticia
                                          .tipo_categoria_publicacao_id,
                                      expression:
                                        "noticia.tipo_categoria_publicacao_id"
                                    }
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    id:
                                      "cat_" + item.tipo_categoria_publicacao_id
                                  },
                                  domProps: {
                                    value: item.tipo_categoria_publicacao_id,
                                    checked: Array.isArray(
                                      _vm.noticia.tipo_categoria_publicacao_id
                                    )
                                      ? _vm._i(
                                          _vm.noticia
                                            .tipo_categoria_publicacao_id,
                                          item.tipo_categoria_publicacao_id
                                        ) > -1
                                      : _vm.noticia.tipo_categoria_publicacao_id
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a =
                                          _vm.noticia
                                            .tipo_categoria_publicacao_id,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v =
                                            item.tipo_categoria_publicacao_id,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.noticia,
                                              "tipo_categoria_publicacao_id",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.noticia,
                                              "tipo_categoria_publicacao_id",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(
                                          _vm.noticia,
                                          "tipo_categoria_publicacao_id",
                                          $$c
                                        )
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    attrs: {
                                      for:
                                        "cat_" +
                                        item.tipo_categoria_publicacao_id
                                    }
                                  },
                                  [_vm._v(_vm._s(item.tcp_nome))]
                                )
                              ])
                            ]
                          }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn-config",
                              attrs: {
                                href: "#",
                                "data-toggle": "modal",
                                "data-target": "#modalCategorias"
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-cog" }),
                              _vm._v(" Gerenciar categorias")
                            ]
                          )
                        ],
                        2
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_midia } },
                    [
                      _c("label", { attrs: { for: "pub_midia" } }, [
                        _vm._v("Imagem em Destaque")
                      ]),
                      _vm._v(" "),
                      this.resource && _vm.noticia.pub_midia_p
                        ? _c(
                            "div",
                            { staticClass: "thumbnail thumbnail-preview" },
                            [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: _vm.noticia.pub_midia_g,
                                    target: "_blank"
                                  }
                                },
                                [
                                  _c("img", {
                                    staticClass: "img-responsive",
                                    attrs: { src: _vm.noticia.pub_midia_p }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "img-remove text-danger",
                                  attrs: { href: "#" },
                                  on: { click: _vm.removeFile }
                                },
                                [
                                  _c("i", { staticClass: "fa fa-times" }),
                                  _vm._v(
                                    " Remover imagem\n                                "
                                  )
                                ]
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("input", {
                        staticClass: "form-control",
                        attrs: { type: "file", id: "pub_midia" },
                        on: { change: _vm.onFileChange }
                      })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "submit",
                staticClass: "btn btn-primary",
                attrs: { type: "submit", disabled: "" }
              },
              [_vm._v("Salvar")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-default",
                attrs: { href: _vm.baseUrl("/painel/noticias") }
              },
              [_vm._v("Voltar")]
            ),
            _vm._v(" "),
            _vm.resource
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-danger pull-right",
                    attrs: { type: "button", tabindex: "-1" },
                    on: { click: _vm.remove }
                  },
                  [
                    _c("i", { staticClass: "fa fa-trash" }),
                    _vm._v(" Excluir\n                ")
                  ]
                )
              : _vm._e()
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade modal-categorias",
        attrs: {
          id: "modalCategorias",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modalCategoriasLabel"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("table", { staticClass: "table" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.categorias, function(item) {
                      return [
                        _c(
                          "tr",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !item.remove,
                                expression: "!item.remove"
                              }
                            ]
                          },
                          [
                            _c("td", [_vm._v(_vm._s(item.tcp_nome))]),
                            _vm._v(" "),
                            !_vm.edit_categoria
                              ? _c("td", { staticClass: "text-right" }, [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            item.tipo_categoria_publicacao_id &&
                                            (!item.tcp_fixa ||
                                              item.tcp_fixa != "S"),
                                          expression:
                                            "item.tipo_categoria_publicacao_id && (!item.tcp_fixa || item.tcp_fixa != 'S')"
                                        }
                                      ],
                                      staticClass: "text-danger",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.removeCategoria(item)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-times" }),
                                      _vm._v(
                                        " Excluir \n                                    "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            item.tipo_categoria_publicacao_id &&
                                            (!item.tcp_fixa ||
                                              item.tcp_fixa != "S"),
                                          expression:
                                            "item.tipo_categoria_publicacao_id && (!item.tcp_fixa || item.tcp_fixa != 'S')"
                                        }
                                      ],
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.categoria_editada = Object.assign(
                                            {},
                                            item
                                          )
                                          _vm.categoria = item
                                          _vm.edit_categoria = true
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-edit" }),
                                      _vm._v(
                                        " Editar\n                                    "
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      ]
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    attrs: { role: "form", "accept-charset": "UTF-8" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.saveCategoria($event)
                      }
                    }
                  },
                  [
                    _vm.edit_categoria
                      ? _c("div", { staticClass: "form-group" }, [
                          _c("h4", [
                            _vm._v(
                              "Editando Categoria: " +
                                _vm._s(_vm.categoria.tcp_nome)
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  _vm.cancelarEdicaoCategoria()
                                }
                              }
                            },
                            [_c("small", [_vm._v("cancelar edição")])]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.categoria.tcp_nome,
                            expression: "categoria.tcp_nome"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Inserir uma nova categoria..."
                        },
                        domProps: { value: _vm.categoria.tcp_nome },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.categoria,
                              "tcp_nome",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm._m(3)
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Fechar"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Fechar"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c(
        "h4",
        { staticClass: "modal-title", attrs: { id: "modalCategoriasLabel" } },
        [_vm._v("Categorias")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("colgroup", [
      _c("col"),
      _vm._v(" "),
      _c("col", { staticStyle: { width: "170px" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-btn" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Salvar")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3693a89e", module.exports)
  }
}

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(385)
/* template */
var __vue_template__ = __webpack_require__(386)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/PaginaLista.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72d30e20", Component.options)
  } else {
    hotAPI.reload("data-v-72d30e20", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.component('col-data', {
    props: ['data'],
    template: '<abbr :title="dateFull">{{ dateAbbr }}</abbr>',
    computed: {
        dateFull: function dateFull() {
            return moment(this.data.pub_data_cadastro).format('DD/MM/YYYY HH:mm');
        },
        dateAbbr: function dateAbbr() {
            return moment(this.data.pub_data_cadastro).format('DD/MM/YYYY');
        }
    }
});

Vue.component('col-edit', {
    props: ['data'],
    template: '<a :href="baseUrl(\'/painel/pagina/\' + data.publicacao_id + \'/edicao\' + (data.pub_url ? \'?redirect=1\' : (data.accordion ? \'?accordion=1\' : \'\')))">Editar</a>'
});

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            status: {
                'RAS': 'Rascunho',
                'PUB': 'Publicado'
            },
            columns: ['pub_titulo', 'pub_ordem_menu', 'pub_status', 'pub_data_cadastro', 'edit'],
            filters: {
                pub_data_cadastro: "",
                tipo_categoria_publicacao_id: "",
                pub_status: "",
                text: ""
            },
            options: {
                skin: 'table-striped table-hover',
                columnsClasses: {
                    'pub_ordem_menu': 'col-situacao',
                    'pub_status': 'col-situacao',
                    'pub_data_cadastro': 'col-data',
                    'edit': 'col-actions'
                },
                headings: {
                    'pub_titulo': 'Título',
                    'pub_ordem_menu': 'Ordem',
                    'pub_status': 'Status',
                    'pub_data_cadastro': 'Data',
                    'edit': ''
                },
                texts: this.vueTableTexts(),
                filterable: false,
                sortable: ['pub_titulo', 'pub_ordem_menu', 'pub_status', 'pub_data_cadastro'],
                orderBy: {
                    ascending: false,
                    column: 'pub_data_cadastro'
                },
                templates: {
                    pub_data_cadastro: 'noticia-col-data',
                    edit: 'col-edit'
                },
                params: {
                    table: true
                },
                responseAdapter: function (resp) {
                    var data = resp.data.items;

                    for (var i in data) {
                        if (data[i].pub_status && this.status[data[i].pub_status]) {
                            data[i].pub_status = this.status[data[i].pub_status];
                        }
                    }

                    return {
                        data: resp.data.items,
                        count: resp.data.count
                    };
                }.bind(this)
            }
        };
    },

    methods: {
        fetch: function fetch() {
            this.$refs.table.setFilter(JSON.stringify(this.filters));
        }
    }
});

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      {
        staticClass: "page-header",
        staticStyle: {
          display: "flex",
          "justify-content": "space-between",
          "align-items": "center"
        }
      },
      [
        _c("h1", [_vm._v("Páginas")]),
        _vm._v(" "),
        _c("div", { staticClass: "dropdown position-relative" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("ul", { staticClass: "dropdown-menu" }, [
            _c("li", [
              _c(
                "a",
                { attrs: { href: _vm.baseUrl("/painel/pagina/cadastro") } },
                [_vm._v("Nova Página")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  attrs: {
                    href: _vm.baseUrl("/painel/pagina/cadastro?accordion=1")
                  }
                },
                [_vm._v("Nova Lista Sanfona")]
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _c(
                "a",
                {
                  attrs: {
                    href: _vm.baseUrl("/painel/pagina/cadastro?redirect=1")
                  }
                },
                [_vm._v("Novo Redirecionamento")]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "pub_data_cadastro" } }, [
            _vm._v("Data")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filters.pub_data_cadastro,
                expression: "filters.pub_data_cadastro"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "date", id: "pub_data_cadastro" },
            domProps: { value: _vm.filters.pub_data_cadastro },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.filters, "pub_data_cadastro", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "pub_status" } }, [_vm._v("Status")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filters.pub_status,
                  expression: "filters.pub_status"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "pub_status" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.filters,
                    "pub_status",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }),
              _vm._v(" "),
              _vm._l(_vm.status, function(item, index) {
                return [
                  _c("option", { domProps: { value: index } }, [
                    _vm._v(_vm._s(item))
                  ])
                ]
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "text" } }, [_vm._v("Texto")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filters.text,
                expression: "filters.text"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "text" },
            domProps: { value: _vm.filters.text },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.filters, "text", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v(" ")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-block btn-success",
              attrs: { type: "button" },
              on: { click: _vm.fetch }
            },
            [_c("i", { staticClass: "fa fa-search" }), _vm._v(" Buscar")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "panel panel-form" },
      [
        _c("v-server-table", {
          ref: "table",
          attrs: {
            url: "/painel/ajax/pagina",
            columns: _vm.columns,
            options: _vm.options
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-mairi dropdown-toggle",
        attrs: {
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          href: "#"
        }
      },
      [_vm._v("Cadastrar nova "), _c("span", { staticClass: "caret" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-72d30e20", module.exports)
  }
}

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(388)
/* template */
var __vue_template__ = __webpack_require__(389)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/PaginaCadastro.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-606791dc", Component.options)
  } else {
    hotAPI.reload("data-v-606791dc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource'],
    data: function data() {
        return {
            categoria_editada: {},
            edit_categoria: false,
            categorias: [],
            categoria: {
                tcp_nome: ""
            },
            files: [],
            rows: [],
            attachments: [],
            pagina: {
                pub_titulo: "",
                pub_conteudo: "",
                pub_data_visivel: new Date().toISOString().substr(0, 10),
                pub_status: 'PUB',
                pub_ordem_menu: 0,
                pub_menu_lateral: false,
                tipo_categoria_publicacao_id: [],
                categorias: []
            },
            errors: {},
            showSuccessMsg: false
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        var _this = this;

        Loading.show();

        var successMsg = window.location.search.split('success=')[1];
        this.showSuccessMsg = successMsg ? true : false;

        $(this.$refs.conteudo).summernote({
            lang: 'pt-BR',
            minHeight: 200,
            maxHeight: 500,
            maximumImageFileSize: 500 * 1024, // 500 KB
            toolbar: [['style1', ['style']], ['style2', ['bold', 'italic', 'underline', 'clear']], ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['insert', ['link', 'hr', 'table', 'picture', 'video', 'audio']], ['misc', ['fullscreen', 'codeview', 'help']]],
            callbacks: {
                onImageUploadError: function onImageUploadError(msg) {
                    alert(msg + ' (Tamanho máximo permitido: 500 KB). Prefira imagens no formato jpeg/jpg');
                }
            },
            popover: {
                image: [['custom', ['imageAttributes']], ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']], ['float', ['floatLeft', 'floatRight', 'floatNone']], ['remove', ['removeMedia']]]
            },
            imageAttributes: {
                icon: '<i class="note-icon-pencil"/>',
                removeEmpty: true, // true = remove attributes | false = leave empty if present
                disableUpload: true // true = don't display Upload Options | Display Upload Options
            }
        });

        axios.get('/painel/ajax/categoria-publicacao').then(function (response) {
            _this.categorias = response.data.data;
            _this.fetch();
        });
    },

    methods: {
        fetch: function fetch() {
            var _this2 = this;

            if (this.resource) {
                axios.get('/painel/ajax/pagina/' + this.resource).then(function (response) {
                    _this2.pagina = response.data.data;
                    _this2.pagina.pub_menu_lateral = _this2.pagina.pub_menu_lateral == 'S';
                    $(_this2.$refs.conteudo).summernote('code', _this2.pagina.pub_conteudo);

                    _this2.pagina.tipo_categoria_publicacao_id = [];
                    if (_this2.pagina.categorias.length) {
                        for (var i = _this2.pagina.categorias.length - 1; i >= 0; i--) {
                            _this2.pagina.tipo_categoria_publicacao_id.push(_this2.pagina.categorias[i].tipo_categoria_publicacao_id);
                        }
                    }

                    Loading.hide();
                    $(_this2.$refs.submit).prop("disabled", false);
                }).catch(function (error) {
                    console.log(error);
                    Loading.hide();
                    alert('Não foi possível carregar o recurso informado.');
                });

                axios.get('/painel/pagina/ajax/anexos/' + this.resource).then(function (response) {
                    _this2.attachments = response.data.data;
                }).catch(function (error) {
                    Loading.hide();
                    alert('Não foi possível carregar os anexos.');
                });
            } else {
                Loading.hide();
                $(this.$refs.submit).prop("disabled", false);
            }
        },
        save: function save() {
            var _this3 = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            // Pegar conteudo do editor de texto
            this.pagina.pub_conteudo = $(this.$refs.conteudo).summernote('code');

            var data = $.extend({}, this.pagina);

            var formData = new FormData();
            formData.append('pub_titulo', this.pagina.pub_titulo);
            if (this.pagina.pub_data_visivel) formData.append('pub_data_visivel', this.pagina.pub_data_visivel);
            formData.append('pub_conteudo', this.pagina.pub_conteudo);
            formData.append('pub_status', this.pagina.pub_status);
            formData.append('pub_ordem_menu', this.pagina.pub_ordem_menu);
            formData.append('pub_menu_lateral', this.pagina.pub_menu_lateral);
            formData.append('tipo_categoria_publicacao_id', this.pagina.tipo_categoria_publicacao_id);

            for (var i = 0; i < this.files.length; i++) {
                var file = this.files[i];
                formData.append('files' + i, file);
            }

            if (this.resource) {
                data["_method"] = "PUT";
            }

            var promise = axios({
                method: 'post',
                url: '/painel/ajax/pagina' + (this.resource ? '/' + this.resource : ''),
                data: formData,
                headers: { 'content-type': 'multipart/form-data' }
            });

            promise.then(function (response) {
                // window.location.href = this.baseUrl('/painel/pagina/' + response.data.data.publicacao_id + '/edicao?success=1');
                window.location.href = _this3.baseUrl('/painel/paginas');
                // console.log(response);
                // Loading.hide();
                // $(this.$refs.submit).prop("disabled", false);
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this3.$refs.submit).prop("disabled", false);
            });
        },
        remove: function remove() {
            var _this4 = this;

            if (!confirm('Tem certeza que deseja remover esta página? Esta ação não poderá ser desfeita!')) return;

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            axios.post('painel/ajax/pagina/' + this.resource, { _method: 'DELETE' }).then(function (response) {
                window.location.href = _this4.baseUrl('/painel/paginas');
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this4.$refs.submit).prop("disabled", false);
            });
        },
        addRow: function addRow() {
            var elem = document.createElement('tr');
            this.rows.push({
                file: {
                    name: 'Selecionar Arquivo'
                }
            });
        },

        removeElement: function removeElement(index) {
            this.rows.splice(index, 1);
        },
        setFilename: function setFilename(event, row) {
            var file = event.target.files[0];

            if (file.size > 10000 * 10000) {
                event.preventDefault();
                alert('Arquivo muito grande.');
                return;
            } else {
                row.file = file;
                this.files.push(file);
            }
        },
        removeAttachment: function removeAttachment(id) {
            if (!confirm('Tem certeza que deseja remover o anexo?')) return;

            var vm = this;
            Loading.show();

            axios.post('painel/pagina/ajax/anexo/remover/' + id, { _method: 'DELETE' }).then(function (response) {
                window.location.reload();
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
            });
        },
        removeCategoria: function removeCategoria(item) {
            var _this5 = this;

            this.$set(item, 'remove', true);

            axios.post('painel/ajax/categoria-publicacao/' + item.tipo_categoria_publicacao_id, { _method: 'DELETE' }).then(function (response) {
                for (var i = _this5.categorias.length - 1; i >= 0; i--) {
                    if (_this5.categorias[i].tipo_categoria_publicacao_id == item.tipo_categoria_publicacao_id) {
                        _this5.categorias.splice(i, 1);
                        break;
                    }
                }
            }).catch(function (error) {
                item.remove = false;
                alert('Ocorreu um erro ao tentar remover a categoria "' + item.tcp_nome + '".');
            });
        },
        saveCategoria: function saveCategoria() {
            var _this6 = this;

            var tcp_nome = this.categoria.tcp_nome;
            var tipo_categoria_publicacao_id = this.categoria.tipo_categoria_publicacao_id;
            var _id = Math.random().toString(36).substr(2, 10);

            if (!this.edit_categoria) this.categorias.push({ _id: _id, tcp_nome: tcp_nome });else {
                for (var i = this.categorias.length - 1; i >= 0; i--) {
                    if (this.categorias[i].tipo_categoria_publicacao_id == tipo_categoria_publicacao_id) {
                        this.$set(this.categorias[i], '_id', _id);
                        break;
                    }
                }
            }

            axios.post('painel/ajax/categoria-publicacao', {
                _id: _id,
                tcp_nome: tcp_nome,
                tipo_categoria_publicacao_id: tipo_categoria_publicacao_id
            }).then(function (response) {
                var data = JSON.parse(response.config.data);
                for (var _i = _this6.categorias.length - 1; _i >= 0; _i--) {
                    if (_this6.categorias[_i]._id == data._id) {
                        console.log(response.data.data);
                        _this6.categorias[_i] = response.data.data;
                        break;
                    }
                }
                _this6.categoria = { tcp_nome: '' };
                _this6.edit_categoria = false;
            }).catch(function (error) {
                var data = JSON.parse(error.config.data);
                for (var _i2 = _this6.categorias.length - 1; _i2 >= 0; _i2--) {
                    if (_this6.categorias[_i2]._id == data._id) {
                        _this6.categorias.splice(_i2, 1);
                        break;
                    }
                }
                alert('Ocorreu um erro ao cadastrar a categoria "' + data.tcp_nome + '".');
            });

            this.categoria.tcp_nome = "";
        },
        cancelarEdicaoCategoria: function cancelarEdicaoCategoria() {
            this.categoria = { tcp_nome: '' };
            this.edit_categoria = false;

            for (var i = this.categorias.length - 1; i >= 0; i--) {
                if (this.categorias[i].tipo_categoria_publicacao_id == this.categoria_editada.tipo_categoria_publicacao_id) {
                    this.categorias[i] = this.categoria_editada;
                    this.categoria_editada = {};
                    break;
                }
            }
        },
        handleClick: function handleClick(e) {
            // in the handler, 'this' refers to the box clicked on
            var $box = $(e.target);
            if ($box.is(":checked")) {
                $("input[id!='" + $box.id + "'].categoria").prop("checked", false);
                $box.prop("checked", true);
                this.pagina.tipo_categoria_publicacao_id = [e.target.value];
            } else {
                this.pagina.tipo_categoria_publicacao_id = [];
                $box.prop("checked", false);
            }
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      !this.resource ? _c("h1", [_vm._v("Cadastrar Página")]) : _vm._e(),
      _vm._v(" "),
      this.resource ? _c("h1", [_vm._v("Atualizar Página")]) : _vm._e()
    ]),
    _vm._v(" "),
    _vm.showSuccessMsg
      ? _c(
          "div",
          {
            staticClass: "alert alert-success alert-dismissible",
            attrs: { role: "alert" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("span", [_vm._v("Página salva com sucesso.")])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            attrs: { role: "form", "accept-charset": "UTF-8" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.save($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-9 col-md-8" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_titulo } },
                    [
                      _c("label", { attrs: { for: "pub_titulo" } }, [
                        _vm._v("Título")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pagina.pub_titulo,
                            expression: "pagina.pub_titulo"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "pub_titulo",
                          autofocus: ""
                        },
                        domProps: { value: _vm.pagina.pub_titulo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pagina,
                              "pub_titulo",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_conteudo } },
                    [
                      _c("label", { attrs: { for: "pub_conteudo" } }, [
                        _vm._v("Conteúdo")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        ref: "conteudo",
                        staticClass: "form-control",
                        attrs: { id: "pub_conteudo", rows: "10" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("form-control", [
                    _c("div", { staticClass: "panel panel-form" }, [
                      _c("table", { staticClass: "table" }, [
                        _c("thead", [
                          _c("tr", [
                            _c("td", [_c("strong", [_vm._v("Anexos")])])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.attachments, function(attachment) {
                              return _c("tr", [
                                _c("td", [
                                  _c(
                                    "p",
                                    { staticClass: "form-control-static" },
                                    [
                                      _c(
                                        "a",
                                        {
                                          attrs: {
                                            href: _vm.baseUrl(
                                              "/painel/pagina/exibir/anexo/" +
                                                attachment.pub_anexo_id
                                            ),
                                            target: "_blank"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(attachment.pub_anexo_nome)
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger pull-right",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          _vm.removeAttachment(
                                            attachment.pub_anexo_id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-trash" }),
                                      _vm._v(
                                        " Excluir\n                                            "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.rows, function(row, index) {
                              return _c("tr", [
                                _c("td", [
                                  _c(
                                    "label",
                                    { staticClass: "fileContainer" },
                                    [
                                      _c("input", {
                                        staticStyle: { display: "none" },
                                        attrs: { type: "file", id: index },
                                        on: {
                                          change: function($event) {
                                            _vm.setFilename($event, row)
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("a", [_vm._v(_vm._s(row.file.name))])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger pull-right",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          _vm.removeElement(index)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-trash" }),
                                      _vm._v(
                                        " Excluir\n                                                "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary pull-right",
                          on: { click: _vm.addRow }
                        },
                        [_vm._v("Adicionar Anexo")]
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-3 col-md-4" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_status } },
                    [
                      _c("label", [_vm._v("Status")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.pagina.pub_status,
                              expression: "pagina.pub_status"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.pagina,
                                "pub_status",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "PUB" } }, [
                            _vm._v("Publicado")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "RAS" } }, [
                            _vm._v("Rascunho")
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "pub_data_visivel" } }, [
                      _vm._v("Data de Publicação")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.pagina.pub_data_visivel,
                          expression: "pagina.pub_data_visivel"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "date", id: "pub_data_visivel" },
                      domProps: { value: _vm.pagina.pub_data_visivel },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.pagina,
                            "pub_data_visivel",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_ordem_menu } },
                    [
                      _c("label", { attrs: { for: "pub_ordem_menu" } }, [
                        _vm._v("Ordem no Menu")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pagina.pub_ordem_menu,
                            expression: "pagina.pub_ordem_menu"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          id: "pub_ordem_menu",
                          min: "0"
                        },
                        domProps: { value: _vm.pagina.pub_ordem_menu },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pagina,
                              "pub_ordem_menu",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_menu_lateral } },
                    [
                      _c("div", { staticClass: "checkbox" }, [
                        _c("label", { attrs: { for: "pub_menu_lateral" } }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.pagina.pub_menu_lateral,
                                expression: "pagina.pub_menu_lateral"
                              }
                            ],
                            attrs: { type: "checkbox", id: "pub_menu_lateral" },
                            domProps: {
                              checked: Array.isArray(
                                _vm.pagina.pub_menu_lateral
                              )
                                ? _vm._i(_vm.pagina.pub_menu_lateral, null) > -1
                                : _vm.pagina.pub_menu_lateral
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.pagina.pub_menu_lateral,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.pagina,
                                        "pub_menu_lateral",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.pagina,
                                        "pub_menu_lateral",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.pagina, "pub_menu_lateral", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Inserir no Menu Lateral")])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    {
                      attrs: { error: _vm.errors.tipo_categoria_publicacao_id }
                    },
                    [
                      _c("label", [_vm._v("Categoria")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "checkbox-group" },
                        [
                          _vm._l(_vm.categorias, function(item) {
                            return [
                              _c("div", { staticClass: "checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.pagina.tipo_categoria_publicacao_id,
                                      expression:
                                        "pagina.tipo_categoria_publicacao_id"
                                    }
                                  ],
                                  staticClass: "categoria",
                                  attrs: {
                                    type: "checkbox",
                                    id:
                                      "cat_" + item.tipo_categoria_publicacao_id
                                  },
                                  domProps: {
                                    value: item.tipo_categoria_publicacao_id,
                                    checked: Array.isArray(
                                      _vm.pagina.tipo_categoria_publicacao_id
                                    )
                                      ? _vm._i(
                                          _vm.pagina
                                            .tipo_categoria_publicacao_id,
                                          item.tipo_categoria_publicacao_id
                                        ) > -1
                                      : _vm.pagina.tipo_categoria_publicacao_id
                                  },
                                  on: {
                                    click: _vm.handleClick,
                                    change: function($event) {
                                      var $$a =
                                          _vm.pagina
                                            .tipo_categoria_publicacao_id,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v =
                                            item.tipo_categoria_publicacao_id,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.pagina,
                                              "tipo_categoria_publicacao_id",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.pagina,
                                              "tipo_categoria_publicacao_id",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(
                                          _vm.pagina,
                                          "tipo_categoria_publicacao_id",
                                          $$c
                                        )
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    attrs: {
                                      for:
                                        "cat_" +
                                        item.tipo_categoria_publicacao_id
                                    }
                                  },
                                  [_vm._v(_vm._s(item.tcp_nome))]
                                )
                              ])
                            ]
                          }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn-config",
                              attrs: {
                                href: "#",
                                "data-toggle": "modal",
                                "data-target": "#modalCategorias"
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-cog" }),
                              _vm._v(" Gerenciar Categorias")
                            ]
                          )
                        ],
                        2
                      )
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "submit",
                staticClass: "btn btn-primary",
                attrs: { type: "submit", disabled: "" }
              },
              [_vm._v("Salvar")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-default",
                attrs: { href: _vm.baseUrl("/painel/paginas") }
              },
              [_vm._v("Voltar")]
            ),
            _vm._v(" "),
            _vm.resource
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-danger pull-right",
                    attrs: { type: "button", tabindex: "-1" },
                    on: { click: _vm.remove }
                  },
                  [
                    _c("i", { staticClass: "fa fa-trash" }),
                    _vm._v(" Excluir\n                    ")
                  ]
                )
              : _vm._e()
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade modal-categorias",
        attrs: {
          id: "modalCategorias",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modalCategoriasLabel"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("table", { staticClass: "table" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.categorias, function(item) {
                      return [
                        _c(
                          "tr",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !item.remove,
                                expression: "!item.remove"
                              }
                            ]
                          },
                          [
                            _c("td", [_vm._v(_vm._s(item.tcp_nome))]),
                            _vm._v(" "),
                            !_vm.edit_categoria
                              ? _c("td", { staticClass: "text-right" }, [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            item.tipo_categoria_publicacao_id &&
                                            (!item.tcp_fixa ||
                                              item.tcp_fixa != "S"),
                                          expression:
                                            "item.tipo_categoria_publicacao_id && (!item.tcp_fixa || item.tcp_fixa != 'S')"
                                        }
                                      ],
                                      staticClass: "text-danger",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.removeCategoria(item)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-times" }),
                                      _vm._v(
                                        " Excluir \n                                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            item.tipo_categoria_publicacao_id &&
                                            (!item.tcp_fixa ||
                                              item.tcp_fixa != "S"),
                                          expression:
                                            "item.tipo_categoria_publicacao_id && (!item.tcp_fixa || item.tcp_fixa != 'S')"
                                        }
                                      ],
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.categoria_editada = Object.assign(
                                            {},
                                            item
                                          )
                                          _vm.categoria = item
                                          _vm.edit_categoria = true
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-edit" }),
                                      _vm._v(
                                        " Editar\n                                        "
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      ]
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    attrs: { role: "form", "accept-charset": "UTF-8" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.saveCategoria($event)
                      }
                    }
                  },
                  [
                    _vm.edit_categoria
                      ? _c("div", { staticClass: "form-group" }, [
                          _c("h4", [
                            _vm._v(
                              "Editando Categoria: " +
                                _vm._s(_vm.categoria.tcp_nome)
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  _vm.cancelarEdicaoCategoria()
                                }
                              }
                            },
                            [_c("small", [_vm._v("cancelar edição")])]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.categoria.tcp_nome,
                            expression: "categoria.tcp_nome"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Inserir uma nova categoria..."
                        },
                        domProps: { value: _vm.categoria.tcp_nome },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.categoria,
                              "tcp_nome",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm._m(3)
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Fechar"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Fechar"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c(
        "h4",
        { staticClass: "modal-title", attrs: { id: "modalCategoriasLabel" } },
        [_vm._v("Categorias")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("colgroup", [
      _c("col"),
      _vm._v(" "),
      _c("col", { staticStyle: { width: "170px" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-btn" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Salvar")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-606791dc", module.exports)
  }
}

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(391)
/* template */
var __vue_template__ = __webpack_require__(392)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/PaginaAccordion.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8a058496", Component.options)
  } else {
    hotAPI.reload("data-v-8a058496", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource'],
    data: function data() {
        return {
            categoria_editada: {},
            edit_categoria: false,
            categorias: [],
            categoria: {
                tcp_nome: ""
            },
            files: [],
            rows: [],
            attachments: [],
            pagina: {
                pub_titulo: "",
                pub_data_visivel: new Date().toISOString().substr(0, 10),
                pub_item_titulo: "",
                pub_conteudo: "",
                pub_status: 'PUB',
                pub_ordem_menu: 0,
                pub_menu_lateral: false,
                tipo_categoria_publicacao_id: [],
                categorias: [],
                pub_item_index: null,
                parent_item_index: null,
                accordion: []
            },
            errors: {},
            showSuccessMsg: false
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        var _this = this;

        Loading.show();

        var successMsg = window.location.search.split('success=')[1];
        this.showSuccessMsg = successMsg ? true : false;

        $(this.$refs.conteudo).summernote({
            lang: 'pt-BR',
            minHeight: 200,
            maxHeight: 500,
            maximumImageFileSize: 500 * 1024, // 500 KB
            toolbar: [['style1', ['style']], ['style2', ['bold', 'italic', 'underline', 'clear']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['insert', ['link', 'hr', 'table', 'picture', 'video', 'audio']], ['misc', ['fullscreen', 'codeview', 'help']]],
            callbacks: {
                onImageUploadError: function onImageUploadError(msg) {
                    alert(msg + ' (Tamanho máximo permitido: 500 KB). Prefira imagens no formato jpeg/jpg');
                }
            },
            popover: {
                image: [['custom', ['imageAttributes']], ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']], ['float', ['floatLeft', 'floatRight', 'floatNone']], ['remove', ['removeMedia']]]
            },
            imageAttributes: {
                icon: '<i class="note-icon-pencil"/>',
                removeEmpty: true, // true = remove attributes | false = leave empty if present
                disableUpload: true // true = don't display Upload Options | Display Upload Options
            }
        });

        axios.get('/painel/ajax/categoria-publicacao').then(function (response) {
            _this.categorias = response.data.data;
            _this.fetch();
        });
    },

    methods: {
        getItem: function getItem(index) {
            index = index.split('-');
            var item = { subitens: this.pagina.accordion };

            for (var i = 0; i < index.length; i++) {
                item = item.subitens[Number(index[i])];
            }

            return item;
        },
        fetch: function fetch() {
            var _this2 = this;

            if (this.resource) {
                axios.get('/painel/ajax/pagina/' + this.resource).then(function (response) {
                    _this2.pagina = response.data.data;
                    _this2.pagina.pub_menu_lateral = _this2.pagina.pub_menu_lateral == 'S';
                    _this2.pagina.pub_item_index = '' + (_this2.pagina.accordion.length - 1);
                    _this2.pagina.parent_item_index = null;
                    _this2.pagina.pub_item_titulo = _this2.getItem(_this2.pagina.pub_item_index).titulo;
                    _this2.attachments = _this2.getItem(_this2.pagina.pub_item_index).anexos;

                    $(_this2.$refs.conteudo).summernote('code', _this2.getItem(_this2.pagina.pub_item_index).conteudo);

                    _this2.pagina.tipo_categoria_publicacao_id = [];
                    if (_this2.pagina.categorias.length) {
                        for (var i = _this2.pagina.categorias.length - 1; i >= 0; i--) {
                            _this2.pagina.tipo_categoria_publicacao_id.push(_this2.pagina.categorias[i].tipo_categoria_publicacao_id);
                        }
                    }

                    Loading.hide();
                    $(_this2.$refs.submit).prop("disabled", false);
                }).catch(function (error) {
                    console.log(error);
                    Loading.hide();
                    alert('Não foi possível carregar o recurso informado.');
                });
            } else {
                Loading.hide();
                $(this.$refs.submit).prop("disabled", false);
            }
        },
        save: function save() {
            var _this3 = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            // Pegar conteudo do editor de texto
            this.pagina.pub_conteudo = $(this.$refs.conteudo).summernote('code');

            var data = $.extend({}, this.pagina);

            var formData = new FormData();
            var arrayData = new FormData();
            formData.append('pub_titulo', this.pagina.pub_titulo);
            if (this.pagina.pub_data_visivel) formData.append('pub_data_visivel', this.pagina.pub_data_visivel);
            formData.append('pub_item_titulo', this.pagina.pub_item_titulo);
            formData.append('pub_item_index', this.pagina.pub_item_index ? this.pagina.pub_item_index : '');
            formData.append('parent_item_index', this.pagina.parent_item_index ? this.pagina.parent_item_index : '');
            formData.append('pub_conteudo', this.pagina.pub_conteudo);
            formData.append('pub_status', this.pagina.pub_status);
            formData.append('pub_ordem_menu', this.pagina.pub_ordem_menu);
            formData.append('pub_menu_lateral', this.pagina.pub_menu_lateral);
            formData.append('tipo_categoria_publicacao_id', this.pagina.tipo_categoria_publicacao_id);

            for (var i = 0; i < this.files.length; i++) {
                var file = this.files[i];
                formData.append('files' + i, file);
            }

            if (this.resource) {
                data["_method"] = "PUT";
            }

            var promise = axios({
                method: 'post',
                url: '/painel/ajax/pagina' + (this.resource ? '/' + this.resource : '') + '?accordion=1',
                data: formData,
                headers: { 'content-type': 'multipart/form-data' }
            });

            promise.then(function (response) {
                // window.location.href = this.baseUrl('/painel/pagina/' + response.data.data.publicacao_id + '/edicao?success=1');
                // window.location.href = this.baseUrl('/painel/paginas');
                // console.log(response.data.data);
                window.location.href = _this3.baseUrl('/painel/pagina/' + response.data.data.publicacao_id + '/edicao?accordion=1');
                // Loading.hide();
                // $(this.$refs.submit).prop("disabled", false);
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this3.$refs.submit).prop("disabled", false);
            });
        },
        remove: function remove() {
            var _this4 = this;

            if (!confirm('Tem certeza que deseja remover esta página? Esta ação não poderá ser desfeita!')) return;

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            axios.post('painel/ajax/pagina/' + this.resource, { _method: 'DELETE' }).then(function (response) {
                window.location.href = _this4.baseUrl('/painel/paginas');
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this4.$refs.submit).prop("disabled", false);
            });
        },
        addRow: function addRow() {
            var elem = document.createElement('tr');
            this.rows.push({
                file: {
                    name: 'Selecionar Arquivo'
                }
            });
        },
        novoItem: function novoItem(parentId) {
            this.pagina.pub_item_titulo = '';
            this.pagina.pub_item_index = null;
            this.pagina.parent_item_index = parentId;
            console.log(this.pagina.parent_item_index);
            this.attachments = [];
            $(this.$refs.conteudo).summernote('code', '');
        },
        editarItem: function editarItem(index) {
            this.pagina.pub_item_index = '' + index;
            console.log(this.pagina.pub_item_index);
            this.pagina.parent_item_index = null;
            this.pagina.pub_item_titulo = this.getItem(this.pagina.pub_item_index).titulo;
            this.attachments = this.getItem(this.pagina.pub_item_index).anexos;
            $(this.$refs.conteudo).summernote('code', this.getItem(this.pagina.pub_item_index).conteudo);
        },
        excluirItem: function excluirItem(index) {
            var _this5 = this;

            if (!confirm('Isso removerá todo o texto, anexos e subitens deste item. Esta ação NÃO pode ser desfeita. Deseja continuar?')) return;
            Loading.show();

            axios.post('/painel/ajax/pagina/' + this.resource + '/item/' + index).then(function (response) {
                if (response.data.data.delete) window.location.href = _this5.baseUrl('/painel/paginas');else window.location.reload();
                // Loading.hide();
                // $(this.$refs.submit).prop("disabled", false);
                // window.location.reload();
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
            });
        },

        removeElement: function removeElement(index) {
            this.rows.splice(index, 1);
        },
        setFilename: function setFilename(event, row) {
            var file = event.target.files[0];

            if (file.size > 10000 * 10000) {
                event.preventDefault();
                alert('Arquivo muito grande.');
                return;
            } else {
                row.file = file;
                this.files.push(file);
            }
        },
        removeAttachment: function removeAttachment(id) {
            if (!confirm('Tem certeza que deseja remover o anexo?')) return;

            var vm = this;
            Loading.show();

            axios.post('painel/pagina/ajax/anexo/remover/' + id + ('?index=' + this.pagina.pub_item_index) + (this.resource ? '&pub=' + this.resource : ''), { _method: 'DELETE' }).then(function (response) {
                window.location.reload();
                // Loading.hide();
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
            });
        },
        removeCategoria: function removeCategoria(item) {
            var _this6 = this;

            this.$set(item, 'remove', true);

            axios.post('painel/ajax/categoria-publicacao/' + item.tipo_categoria_publicacao_id, { _method: 'DELETE' }).then(function (response) {
                for (var i = _this6.categorias.length - 1; i >= 0; i--) {
                    if (_this6.categorias[i].tipo_categoria_publicacao_id == item.tipo_categoria_publicacao_id) {
                        _this6.categorias.splice(i, 1);
                        break;
                    }
                }
            }).catch(function (error) {
                item.remove = false;
                alert('Ocorreu um erro ao tentar remover a categoria "' + item.tcp_nome + '".');
            });
        },
        saveCategoria: function saveCategoria() {
            var _this7 = this;

            var tcp_nome = this.categoria.tcp_nome;
            var tipo_categoria_publicacao_id = this.categoria.tipo_categoria_publicacao_id;
            var _id = Math.random().toString(36).substr(2, 10);

            if (!this.edit_categoria) this.categorias.push({ _id: _id, tcp_nome: tcp_nome });else {
                for (var i = this.categorias.length - 1; i >= 0; i--) {
                    if (this.categorias[i].tipo_categoria_publicacao_id == tipo_categoria_publicacao_id) {
                        this.$set(this.categorias[i], '_id', _id);
                        break;
                    }
                }
            }

            axios.post('painel/ajax/categoria-publicacao', {
                _id: _id,
                tcp_nome: tcp_nome,
                tipo_categoria_publicacao_id: tipo_categoria_publicacao_id
            }).then(function (response) {
                var data = JSON.parse(response.config.data);
                for (var _i = _this7.categorias.length - 1; _i >= 0; _i--) {
                    if (_this7.categorias[_i]._id == data._id) {
                        console.log(response.data.data);
                        _this7.categorias[_i] = response.data.data;
                        break;
                    }
                }
                _this7.categoria = { tcp_nome: '' };
                _this7.edit_categoria = false;
            }).catch(function (error) {
                var data = JSON.parse(error.config.data);
                for (var _i2 = _this7.categorias.length - 1; _i2 >= 0; _i2--) {
                    if (_this7.categorias[_i2]._id == data._id) {
                        _this7.categorias.splice(_i2, 1);
                        break;
                    }
                }
                alert('Ocorreu um erro ao cadastrar a categoria "' + data.tcp_nome + '".');
            });

            this.categoria.tcp_nome = "";
        },
        cancelarEdicaoCategoria: function cancelarEdicaoCategoria() {
            this.categoria = { tcp_nome: '' };
            this.edit_categoria = false;

            for (var i = this.categorias.length - 1; i >= 0; i--) {
                if (this.categorias[i].tipo_categoria_publicacao_id == this.categoria_editada.tipo_categoria_publicacao_id) {
                    this.categorias[i] = this.categoria_editada;
                    this.categoria_editada = {};
                    break;
                }
            }
        },
        handleClick: function handleClick(e) {
            // in the handler, 'this' refers to the box clicked on
            var $box = $(e.target);
            if ($box.is(":checked")) {
                $("input[id!='" + $box.id + "'].categoria").prop("checked", false);
                $box.prop("checked", true);
                this.pagina.tipo_categoria_publicacao_id = [e.target.value];
            } else {
                this.pagina.tipo_categoria_publicacao_id = [];
                $box.prop("checked", false);
            }
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      !this.resource ? _c("h1", [_vm._v("Cadastrar Página")]) : _vm._e(),
      _vm._v(" "),
      this.resource ? _c("h1", [_vm._v("Atualizar Página")]) : _vm._e()
    ]),
    _vm._v(" "),
    _vm.showSuccessMsg
      ? _c(
          "div",
          {
            staticClass: "alert alert-success alert-dismissible",
            attrs: { role: "alert" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("span", [_vm._v("Página salva com sucesso.")])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            attrs: { role: "form", "accept-charset": "UTF-8" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.save($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-9 col-md-8" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_titulo } },
                    [
                      _c("label", { attrs: { for: "pub_titulo" } }, [
                        _vm._v("Título da Página")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pagina.pub_titulo,
                            expression: "pagina.pub_titulo"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "pub_titulo",
                          autofocus: ""
                        },
                        domProps: { value: _vm.pagina.pub_titulo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pagina,
                              "pub_titulo",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "panel-group accordion-arquivos",
                      attrs: {
                        id: "accordion",
                        role: "tablist",
                        "aria-multiselectable": "true"
                      }
                    },
                    _vm._l(_vm.pagina.accordion, function(item, index) {
                      return _c(
                        "div",
                        { staticClass: "panel panel-default panel-parent" },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "panel-heading",
                              attrs: { role: "tab", id: "title-" + index }
                            },
                            [
                              _c("h4", { staticClass: "panel-title" }, [
                                _c(
                                  "a",
                                  {
                                    staticClass: "collapsed item-titulo",
                                    attrs: {
                                      role: "button",
                                      "data-toggle": "collapse",
                                      "data-parent": "#accordion",
                                      href: "#" + index,
                                      "aria-expanded": "false",
                                      "aria-controls": "#" + index
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(item.titulo) +
                                        "\n                                            "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "item-actions" }, [
                                _c(
                                  "a",
                                  {
                                    staticClass: "item-editar",
                                    on: {
                                      click: function($event) {
                                        _vm.editarItem(index)
                                      }
                                    }
                                  },
                                  [_vm._v("Editar")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "item-excluir",
                                    on: {
                                      click: function($event) {
                                        _vm.excluirItem(index)
                                      }
                                    }
                                  },
                                  [_vm._v("Excluir")]
                                )
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "panel-collapse collapse",
                              attrs: {
                                id: index,
                                role: "tabpanel",
                                "aria-labelledby": "title-" + index
                              }
                            },
                            [
                              _c("div", { staticClass: "pad" }, [
                                _c("div", { staticClass: "bg-white pad" }, [
                                  item.conteudo
                                    ? _c("div", {
                                        staticClass:
                                          "entry-content pagina ml-2 mt-1",
                                        domProps: {
                                          innerHTML: _vm._s(item.conteudo)
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "entry-content" }, [
                                    _c(
                                      "table",
                                      {
                                        staticClass:
                                          "table table-striped table-bordered table-hover"
                                      },
                                      [
                                        _vm._m(1, true),
                                        _vm._v(" "),
                                        _c(
                                          "tbody",
                                          _vm._l(item.anexos, function(anexo) {
                                            return _c("tr", [
                                              _c("td", [
                                                _c("i", {
                                                  staticClass:
                                                    "fa fa-file-pdf-o"
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "a",
                                                  {
                                                    attrs: {
                                                      href: _vm.baseUrl(
                                                        "/painel/pagina/exibir/anexo/" +
                                                          anexo.pub_anexo_id
                                                      ),
                                                      target: "_blank"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        anexo.pub_anexo_nome
                                                      )
                                                    )
                                                  ]
                                                )
                                              ])
                                            ])
                                          })
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _vm._l(item.subitens, function(
                                subitem,
                                subindex
                              ) {
                                return _c(
                                  "div",
                                  {
                                    staticClass:
                                      "panel panel-default panel-tipo"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "panel-heading",
                                        attrs: {
                                          role: "tab",
                                          id: "title-" + index + "-" + subindex
                                        }
                                      },
                                      [
                                        _c(
                                          "h4",
                                          { staticClass: "panel-title" },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "collapsed",
                                                attrs: {
                                                  role: "button",
                                                  "data-toggle": "collapse",
                                                  href:
                                                    "#tipo-" +
                                                    index +
                                                    "-" +
                                                    subindex,
                                                  "aria-expanded": "false",
                                                  "aria-controls":
                                                    "tipo-" +
                                                    index +
                                                    "-" +
                                                    subindex
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                        " +
                                                    _vm._s(subitem.titulo) +
                                                    "\n                                                    "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "item-actions" },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass: "item-editar",
                                                on: {
                                                  click: function($event) {
                                                    _vm.editarItem(
                                                      index + "-" + subindex
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Editar")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "a",
                                              {
                                                staticClass: "item-excluir",
                                                on: {
                                                  click: function($event) {
                                                    _vm.excluirItem(
                                                      index + "-" + subindex
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Excluir")]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "panel-collapse collapse",
                                        attrs: {
                                          id: "tipo-" + index + "-" + subindex,
                                          role: "tabpanel",
                                          "aria-labelledby":
                                            "title-" + index + "-" + subindex
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "pad" }, [
                                          _c(
                                            "div",
                                            { staticClass: "bg-white pad" },
                                            [
                                              subitem.conteudo
                                                ? _c("div", {
                                                    staticClass:
                                                      "entry-content pagina ml-2 mt-1",
                                                    domProps: {
                                                      innerHTML: _vm._s(
                                                        subitem.conteudo
                                                      )
                                                    }
                                                  })
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "entry-content"
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    {
                                                      staticClass:
                                                        "table table-striped table-bordered table-hover"
                                                    },
                                                    [
                                                      _vm._m(2, true),
                                                      _vm._v(" "),
                                                      _c(
                                                        "tbody",
                                                        _vm._l(
                                                          subitem.anexos,
                                                          function(anexo) {
                                                            return _c("tr", [
                                                              _c("td", [
                                                                _c("i", {
                                                                  staticClass:
                                                                    "fa fa-file-pdf-o"
                                                                }),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "a",
                                                                  {
                                                                    attrs: {
                                                                      href: _vm.baseUrl(
                                                                        "/painel/pagina/exibir/anexo/" +
                                                                          anexo.pub_anexo_id
                                                                      ),
                                                                      target:
                                                                        "_blank"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        anexo.pub_anexo_nome
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ])
                                                          }
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(subitem.subitens, function(
                                          subsubitem,
                                          subsubindex
                                        ) {
                                          return _c(
                                            "div",
                                            {
                                              staticClass:
                                                "panel panel-default panel-processo"
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "panel-heading",
                                                  attrs: {
                                                    role: "tab",
                                                    id:
                                                      "title-processo-" +
                                                      index +
                                                      "-" +
                                                      subindex +
                                                      "-" +
                                                      subsubindex
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "h4",
                                                    {
                                                      staticClass: "panel-title"
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "collapsed",
                                                          attrs: {
                                                            role: "button",
                                                            "data-toggle":
                                                              "collapse",
                                                            href:
                                                              "#processo-" +
                                                              index +
                                                              "-" +
                                                              subindex +
                                                              "-" +
                                                              subsubindex,
                                                            "aria-expanded":
                                                              "false",
                                                            "aria-controls":
                                                              "processo-" +
                                                              index +
                                                              "-" +
                                                              subindex +
                                                              "-" +
                                                              subsubindex
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                                " +
                                                              _vm._s(
                                                                subsubitem.titulo
                                                              ) +
                                                              "\n                                                            "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "item-actions"
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "item-editar",
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              _vm.editarItem(
                                                                index +
                                                                  "-" +
                                                                  subindex +
                                                                  "-" +
                                                                  subsubindex
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("Editar")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "item-excluir",
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              _vm.excluirItem(
                                                                index +
                                                                  "-" +
                                                                  subindex +
                                                                  "-" +
                                                                  subsubindex
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("Excluir")]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "panel-collapse collapse",
                                                  attrs: {
                                                    id:
                                                      "processo-" +
                                                      index +
                                                      "-" +
                                                      subindex +
                                                      "-" +
                                                      subsubindex,
                                                    role: "tabpanel",
                                                    "aria-labelledby":
                                                      "title-processo-" +
                                                      index +
                                                      "-" +
                                                      subindex +
                                                      "-" +
                                                      subsubindex
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "pad" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "bg-white pad"
                                                        },
                                                        [
                                                          subsubitem.conteudo
                                                            ? _c("div", {
                                                                staticClass:
                                                                  "entry-content pagina ml-2 mt-1",
                                                                domProps: {
                                                                  innerHTML: _vm._s(
                                                                    subsubitem.conteudo
                                                                  )
                                                                }
                                                              })
                                                            : _vm._e(),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "entry-content"
                                                            },
                                                            [
                                                              _c(
                                                                "table",
                                                                {
                                                                  staticClass:
                                                                    "table table-striped table-bordered table-hover"
                                                                },
                                                                [
                                                                  _vm._m(
                                                                    3,
                                                                    true
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "tbody",
                                                                    _vm._l(
                                                                      subsubitem.anexos,
                                                                      function(
                                                                        anexo
                                                                      ) {
                                                                        return _c(
                                                                          "tr",
                                                                          [
                                                                            _c(
                                                                              "td",
                                                                              [
                                                                                _c(
                                                                                  "i",
                                                                                  {
                                                                                    staticClass:
                                                                                      "fa fa-file-pdf-o"
                                                                                  }
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "a",
                                                                                  {
                                                                                    attrs: {
                                                                                      href: _vm.baseUrl(
                                                                                        "/painel/pagina/exibir/anexo/" +
                                                                                          anexo.pub_anexo_id
                                                                                      ),
                                                                                      target:
                                                                                        "_blank"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        anexo.pub_anexo_nome
                                                                                      )
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        )
                                                                      }
                                                                    )
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    subsubitem.subitens,
                                                    function(
                                                      subsubsubitem,
                                                      subsubsubindex
                                                    ) {
                                                      return _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "panel panel-default panel-processo"
                                                        },
                                                        [
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "panel-heading",
                                                              attrs: {
                                                                role: "tab",
                                                                id:
                                                                  "title-processo-" +
                                                                  index +
                                                                  "-" +
                                                                  subindex +
                                                                  "-" +
                                                                  subsubindex +
                                                                  "-" +
                                                                  subsubsubindex
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "h4",
                                                                {
                                                                  staticClass:
                                                                    "panel-title"
                                                                },
                                                                [
                                                                  _c(
                                                                    "a",
                                                                    {
                                                                      staticClass:
                                                                        "collapsed",
                                                                      attrs: {
                                                                        role:
                                                                          "button",
                                                                        "data-toggle":
                                                                          "collapse",
                                                                        href:
                                                                          "#processo-" +
                                                                          index +
                                                                          "-" +
                                                                          subindex +
                                                                          "-" +
                                                                          subsubindex +
                                                                          "-" +
                                                                          subsubsubindex,
                                                                        "aria-expanded":
                                                                          "false",
                                                                        "aria-controls":
                                                                          "processo-" +
                                                                          index +
                                                                          "-" +
                                                                          subindex +
                                                                          "-" +
                                                                          subsubindex +
                                                                          "-" +
                                                                          subsubsubindex
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                                        " +
                                                                          _vm._s(
                                                                            subsubsubitem.titulo
                                                                          ) +
                                                                          "\n                                                                    "
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "item-actions"
                                                                },
                                                                [
                                                                  _c(
                                                                    "a",
                                                                    {
                                                                      staticClass:
                                                                        "item-editar",
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          _vm.editarItem(
                                                                            index +
                                                                              "-" +
                                                                              subindex +
                                                                              "-" +
                                                                              subsubindex +
                                                                              "-" +
                                                                              subsubsubindex
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Editar"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "a",
                                                                    {
                                                                      staticClass:
                                                                        "item-excluir",
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          _vm.excluirItem(
                                                                            index +
                                                                              "-" +
                                                                              subindex +
                                                                              "-" +
                                                                              subsubindex +
                                                                              "-" +
                                                                              subsubsubindex
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Excluir"
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "panel-collapse collapse",
                                                              attrs: {
                                                                id:
                                                                  "processo-" +
                                                                  index +
                                                                  "-" +
                                                                  subindex +
                                                                  "-" +
                                                                  subsubindex +
                                                                  "-" +
                                                                  subsubsubindex,
                                                                role:
                                                                  "tabpanel",
                                                                "aria-labelledby":
                                                                  "title-processo-" +
                                                                  index +
                                                                  "-" +
                                                                  subindex +
                                                                  "-" +
                                                                  subsubindex +
                                                                  "-" +
                                                                  subsubsubindex
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "pad"
                                                                },
                                                                [
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "bg-white pad"
                                                                    },
                                                                    [
                                                                      subsubsubitem.conteudo
                                                                        ? _c(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "entry-content pagina ml-2 mt-1",
                                                                              domProps: {
                                                                                innerHTML: _vm._s(
                                                                                  subsubsubitem.conteudo
                                                                                )
                                                                              }
                                                                            }
                                                                          )
                                                                        : _vm._e(),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "entry-content"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "table",
                                                                            {
                                                                              staticClass:
                                                                                "table table-striped table-bordered table-hover"
                                                                            },
                                                                            [
                                                                              _vm._m(
                                                                                4,
                                                                                true
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "tbody",
                                                                                _vm._l(
                                                                                  subsubsubitem.anexos,
                                                                                  function(
                                                                                    anexo
                                                                                  ) {
                                                                                    return _c(
                                                                                      "tr",
                                                                                      [
                                                                                        _c(
                                                                                          "td",
                                                                                          [
                                                                                            _c(
                                                                                              "i",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "fa fa-file-pdf-o"
                                                                                              }
                                                                                            ),
                                                                                            _vm._v(
                                                                                              " "
                                                                                            ),
                                                                                            _c(
                                                                                              "a",
                                                                                              {
                                                                                                attrs: {
                                                                                                  href: _vm.baseUrl(
                                                                                                    "/painel/pagina/exibir/anexo/" +
                                                                                                      anexo.pub_anexo_id
                                                                                                  ),
                                                                                                  target:
                                                                                                    "_blank"
                                                                                                }
                                                                                              },
                                                                                              [
                                                                                                _vm._v(
                                                                                                  _vm._s(
                                                                                                    anexo.pub_anexo_nome
                                                                                                  )
                                                                                                )
                                                                                              ]
                                                                                            )
                                                                                          ]
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  }
                                                                                )
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  )
                                                ],
                                                2
                                              )
                                            ]
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          )
                        ]
                      )
                    })
                  ),
                  _vm._v(" "),
                  this.resource ? _c("hr") : _vm._e(),
                  _vm._v(" "),
                  _vm.pagina.pub_item_index
                    ? _c(
                        "div",
                        {
                          staticStyle: {
                            display: "flex",
                            "justify-content": "space-between",
                            "align-items": "center"
                          }
                        },
                        [
                          _c("h4", [
                            _vm._v(
                              "Editando o Item: " +
                                _vm._s(
                                  _vm.getItem(_vm.pagina.pub_item_index).titulo
                                )
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "dropdown position-relative" },
                            [
                              _vm._m(5),
                              _vm._v(" "),
                              _c(
                                "ul",
                                {
                                  staticClass:
                                    "dropdown-menu dropdown-menu-right"
                                },
                                [
                                  _c("li", [
                                    _c(
                                      "a",
                                      {
                                        on: {
                                          click: function($event) {
                                            _vm.novoItem(null)
                                          }
                                        }
                                      },
                                      [_vm._v("Item")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  ("" + _vm.pagina.pub_item_index).split("-")
                                    .length < 4
                                    ? _c("li", [
                                        _c(
                                          "a",
                                          {
                                            on: {
                                              click: function($event) {
                                                _vm.novoItem(
                                                  _vm.pagina.pub_item_index
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "Subitem de " +
                                                _vm._s(
                                                  _vm.getItem(
                                                    _vm.pagina.pub_item_index
                                                  ).titulo
                                                )
                                            )
                                          ]
                                        )
                                      ])
                                    : _vm._e()
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_item_titulo } },
                    [
                      _c("label", { attrs: { for: "pub_item_titulo" } }, [
                        _vm._v("Título do Item")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pagina.pub_item_titulo,
                            expression: "pagina.pub_item_titulo"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "pub_item_titulo",
                          required: ""
                        },
                        domProps: { value: _vm.pagina.pub_item_titulo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pagina,
                              "pub_item_titulo",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_conteudo } },
                    [
                      _c("label", { attrs: { for: "pub_conteudo" } }, [
                        _vm._v("Conteúdo")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        ref: "conteudo",
                        staticClass: "form-control",
                        attrs: { id: "pub_conteudo", rows: "10" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("form-control", [
                    _c("div", { staticClass: "panel panel-form" }, [
                      _c("table", { staticClass: "table" }, [
                        _c("thead", [
                          _c("tr", [
                            _c("td", [_c("strong", [_vm._v("Anexos")])])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          [
                            _vm._l(_vm.attachments, function(attachment) {
                              return _c("tr", [
                                _c("td", [
                                  _c(
                                    "p",
                                    { staticClass: "form-control-static" },
                                    [
                                      _c(
                                        "a",
                                        {
                                          attrs: {
                                            href: _vm.baseUrl(
                                              "/painel/pagina/exibir/anexo/" +
                                                attachment.pub_anexo_id
                                            ),
                                            target: "_blank"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(attachment.pub_anexo_nome)
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger pull-right",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          _vm.removeAttachment(
                                            attachment.pub_anexo_id
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-trash" }),
                                      _vm._v(
                                        " Excluir\n                                            "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.rows, function(row, index) {
                              return _c("tr", [
                                _c("td", [
                                  _c(
                                    "label",
                                    { staticClass: "fileContainer" },
                                    [
                                      _c("input", {
                                        staticStyle: { display: "none" },
                                        attrs: { type: "file", id: index },
                                        on: {
                                          change: function($event) {
                                            _vm.setFilename($event, row)
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("a", [_vm._v(_vm._s(row.file.name))])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-danger pull-right",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          _vm.removeElement(index)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-trash" }),
                                      _vm._v(
                                        " Excluir\n                                                "
                                      )
                                    ]
                                  )
                                ])
                              ])
                            })
                          ],
                          2
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-primary pull-right",
                          on: { click: _vm.addRow }
                        },
                        [_vm._v("Adicionar Anexo")]
                      )
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-3 col-md-4" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_status } },
                    [
                      _c("label", [_vm._v("Status")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.pagina.pub_status,
                              expression: "pagina.pub_status"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.pagina,
                                "pub_status",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "PUB" } }, [
                            _vm._v("Publicado")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "RAS" } }, [
                            _vm._v("Rascunho")
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "pub_data_visivel" } }, [
                      _vm._v("Data de Publicação")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.pagina.pub_data_visivel,
                          expression: "pagina.pub_data_visivel"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "date", id: "pub_data_visivel" },
                      domProps: { value: _vm.pagina.pub_data_visivel },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.pagina,
                            "pub_data_visivel",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_ordem_menu } },
                    [
                      _c("label", { attrs: { for: "pub_ordem_menu" } }, [
                        _vm._v("Ordem no Menu")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pagina.pub_ordem_menu,
                            expression: "pagina.pub_ordem_menu"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          id: "pub_ordem_menu",
                          min: "0"
                        },
                        domProps: { value: _vm.pagina.pub_ordem_menu },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pagina,
                              "pub_ordem_menu",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_menu_lateral } },
                    [
                      _c("div", { staticClass: "checkbox" }, [
                        _c("label", { attrs: { for: "pub_menu_lateral" } }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.pagina.pub_menu_lateral,
                                expression: "pagina.pub_menu_lateral"
                              }
                            ],
                            attrs: { type: "checkbox", id: "pub_menu_lateral" },
                            domProps: {
                              checked: Array.isArray(
                                _vm.pagina.pub_menu_lateral
                              )
                                ? _vm._i(_vm.pagina.pub_menu_lateral, null) > -1
                                : _vm.pagina.pub_menu_lateral
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.pagina.pub_menu_lateral,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.pagina,
                                        "pub_menu_lateral",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.pagina,
                                        "pub_menu_lateral",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.pagina, "pub_menu_lateral", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Inserir no Menu Lateral")])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    {
                      attrs: { error: _vm.errors.tipo_categoria_publicacao_id }
                    },
                    [
                      _c("label", [_vm._v("Categoria")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "checkbox-group" },
                        [
                          _vm._l(_vm.categorias, function(item) {
                            return [
                              _c("div", { staticClass: "checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.pagina.tipo_categoria_publicacao_id,
                                      expression:
                                        "pagina.tipo_categoria_publicacao_id"
                                    }
                                  ],
                                  staticClass: "categoria",
                                  attrs: {
                                    type: "checkbox",
                                    id:
                                      "cat_" + item.tipo_categoria_publicacao_id
                                  },
                                  domProps: {
                                    value: item.tipo_categoria_publicacao_id,
                                    checked: Array.isArray(
                                      _vm.pagina.tipo_categoria_publicacao_id
                                    )
                                      ? _vm._i(
                                          _vm.pagina
                                            .tipo_categoria_publicacao_id,
                                          item.tipo_categoria_publicacao_id
                                        ) > -1
                                      : _vm.pagina.tipo_categoria_publicacao_id
                                  },
                                  on: {
                                    click: _vm.handleClick,
                                    change: function($event) {
                                      var $$a =
                                          _vm.pagina
                                            .tipo_categoria_publicacao_id,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v =
                                            item.tipo_categoria_publicacao_id,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.pagina,
                                              "tipo_categoria_publicacao_id",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.pagina,
                                              "tipo_categoria_publicacao_id",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(
                                          _vm.pagina,
                                          "tipo_categoria_publicacao_id",
                                          $$c
                                        )
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    attrs: {
                                      for:
                                        "cat_" +
                                        item.tipo_categoria_publicacao_id
                                    }
                                  },
                                  [_vm._v(_vm._s(item.tcp_nome))]
                                )
                              ])
                            ]
                          }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn-config",
                              attrs: {
                                href: "#",
                                "data-toggle": "modal",
                                "data-target": "#modalCategorias"
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-cog" }),
                              _vm._v(" Gerenciar Categorias")
                            ]
                          )
                        ],
                        2
                      )
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "submit",
                staticClass: "btn btn-primary",
                attrs: { type: "submit", disabled: "" }
              },
              [_vm._v("Salvar")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-default",
                attrs: { href: _vm.baseUrl("/painel/paginas") }
              },
              [_vm._v("Voltar")]
            ),
            _vm._v(" "),
            _vm.resource
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-danger pull-right",
                    attrs: { type: "button", tabindex: "-1" },
                    on: { click: _vm.remove }
                  },
                  [
                    _c("i", { staticClass: "fa fa-trash" }),
                    _vm._v(" Excluir\n                    ")
                  ]
                )
              : _vm._e()
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade modal-categorias",
        attrs: {
          id: "modalCategorias",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modalCategoriasLabel"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(6),
              _vm._v(" "),
              _c("table", { staticClass: "table" }, [
                _vm._m(7),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.categorias, function(item) {
                      return [
                        _c(
                          "tr",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !item.remove,
                                expression: "!item.remove"
                              }
                            ]
                          },
                          [
                            _c("td", [_vm._v(_vm._s(item.tcp_nome))]),
                            _vm._v(" "),
                            !_vm.edit_categoria
                              ? _c("td", { staticClass: "text-right" }, [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            item.tipo_categoria_publicacao_id &&
                                            (!item.tcp_fixa ||
                                              item.tcp_fixa != "S"),
                                          expression:
                                            "item.tipo_categoria_publicacao_id && (!item.tcp_fixa || item.tcp_fixa != 'S')"
                                        }
                                      ],
                                      staticClass: "text-danger",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.removeCategoria(item)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-times" }),
                                      _vm._v(
                                        " Excluir \n                                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            item.tipo_categoria_publicacao_id &&
                                            (!item.tcp_fixa ||
                                              item.tcp_fixa != "S"),
                                          expression:
                                            "item.tipo_categoria_publicacao_id && (!item.tcp_fixa || item.tcp_fixa != 'S')"
                                        }
                                      ],
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.categoria_editada = Object.assign(
                                            {},
                                            item
                                          )
                                          _vm.categoria = item
                                          _vm.edit_categoria = true
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-edit" }),
                                      _vm._v(
                                        " Editar\n                                        "
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      ]
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    attrs: { role: "form", "accept-charset": "UTF-8" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.saveCategoria($event)
                      }
                    }
                  },
                  [
                    _vm.edit_categoria
                      ? _c("div", { staticClass: "form-group" }, [
                          _c("h4", [
                            _vm._v(
                              "Editando Categoria: " +
                                _vm._s(_vm.categoria.tcp_nome)
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  _vm.cancelarEdicaoCategoria()
                                }
                              }
                            },
                            [_c("small", [_vm._v("cancelar edição")])]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.categoria.tcp_nome,
                            expression: "categoria.tcp_nome"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Inserir uma nova categoria..."
                        },
                        domProps: { value: _vm.categoria.tcp_nome },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.categoria,
                              "tcp_nome",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm._m(8)
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Fechar"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [_c("tr", [_c("th", [_vm._v(" Anexos")])])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [_c("tr", [_c("th", [_vm._v(" Anexos")])])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [_c("tr", [_c("th", [_vm._v(" Anexos")])])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [_c("tr", [_c("th", [_vm._v(" Anexos")])])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-primary dropdown-toggle",
        attrs: {
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          href: "#"
        }
      },
      [_vm._v("Novo "), _c("span", { staticClass: "caret" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Fechar"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c(
        "h4",
        { staticClass: "modal-title", attrs: { id: "modalCategoriasLabel" } },
        [_vm._v("Categorias")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("colgroup", [
      _c("col"),
      _vm._v(" "),
      _c("col", { staticStyle: { width: "170px" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-btn" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Salvar")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8a058496", module.exports)
  }
}

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(394)
/* template */
var __vue_template__ = __webpack_require__(395)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/PaginaRedirect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ed5a3ff", Component.options)
  } else {
    hotAPI.reload("data-v-2ed5a3ff", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource'],
    data: function data() {
        return {
            categoria_editada: {},
            edit_categoria: false,
            categorias: [],
            categoria: {
                tcp_nome: ""
            },
            files: [],
            rows: [],
            attachments: [],
            pagina: {
                pub_titulo: "",
                pub_conteudo: "",
                pub_status: 'PUB',
                pub_ordem_menu: 0,
                pub_menu_lateral: false,
                tipo_categoria_publicacao_id: [],
                categorias: []
            },
            errors: {},
            showSuccessMsg: false
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        var _this = this;

        Loading.show();

        var successMsg = window.location.search.split('success=')[1];
        this.showSuccessMsg = successMsg ? true : false;

        axios.get('/painel/ajax/categoria-publicacao').then(function (response) {
            _this.categorias = response.data.data;
            _this.fetch();
        });
    },

    methods: {
        fetch: function fetch() {
            var _this2 = this;

            if (this.resource) {
                axios.get('/painel/ajax/pagina/' + this.resource).then(function (response) {
                    _this2.pagina = response.data.data;
                    _this2.pagina.pub_menu_lateral = _this2.pagina.pub_menu_lateral == 'S';

                    _this2.pagina.tipo_categoria_publicacao_id = [];
                    if (_this2.pagina.categorias.length) {
                        for (var i = _this2.pagina.categorias.length - 1; i >= 0; i--) {
                            _this2.pagina.tipo_categoria_publicacao_id.push(_this2.pagina.categorias[i].tipo_categoria_publicacao_id);
                        }
                    }

                    Loading.hide();
                    $(_this2.$refs.submit).prop("disabled", false);
                }).catch(function (error) {
                    console.log(error);
                    Loading.hide();
                    alert('Não foi possível carregar o recurso informado.');
                });

                axios.get('/painel/pagina/ajax/anexos/' + this.resource).then(function (response) {
                    _this2.attachments = response.data.data;
                }).catch(function (error) {
                    Loading.hide();
                    alert('Não foi possível carregar os anexos.');
                });
            } else {
                Loading.hide();
                $(this.$refs.submit).prop("disabled", false);
            }
        },
        save: function save() {
            var _this3 = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            // Pegar conteudo do editor de texto
            this.pagina.pub_conteudo = "";

            var data = $.extend({}, this.pagina);

            var formData = new FormData();
            var arrayData = new FormData();
            formData.append('pub_titulo', this.pagina.pub_titulo);
            formData.append('pub_url', this.pagina.pub_url);
            formData.append('pub_conteudo', this.pagina.pub_conteudo);
            formData.append('pub_status', this.pagina.pub_status);
            formData.append('pub_ordem_menu', this.pagina.pub_ordem_menu);
            formData.append('pub_menu_lateral', this.pagina.pub_menu_lateral);
            formData.append('tipo_categoria_publicacao_id', this.pagina.tipo_categoria_publicacao_id);

            for (var i = 0; i < this.files.length; i++) {
                var file = this.files[i];
                formData.append('files' + i, file);
            }

            if (this.resource) {
                data["_method"] = "PUT";
            }

            var promise = axios({
                method: 'post',
                url: '/painel/ajax/pagina' + (this.resource ? '/' + this.resource : ''),
                data: formData,
                headers: { 'content-type': 'multipart/form-data' }
            });

            promise.then(function (response) {
                // window.location.href = this.baseUrl('/painel/pagina/' + response.data.data.publicacao_id + '/edicao?success=1');
                window.location.href = _this3.baseUrl('/painel/paginas');
                // console.log(response);
                // Loading.hide();
                // $(this.$refs.submit).prop("disabled", false);
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this3.$refs.submit).prop("disabled", false);
            });
        },
        remove: function remove() {
            var _this4 = this;

            if (!confirm('Tem certeza que deseja remover este Link de Redirecionamento? Esta ação não poderá ser desfeita!')) return;

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            axios.post('painel/ajax/pagina/' + this.resource, { _method: 'DELETE' }).then(function (response) {
                window.location.href = _this4.baseUrl('/painel/paginas');
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this4.$refs.submit).prop("disabled", false);
            });
        },
        addRow: function addRow() {
            var elem = document.createElement('tr');
            this.rows.push({
                file: {
                    name: 'Selecionar Arquivo'
                }
            });
        },

        removeElement: function removeElement(index) {
            this.rows.splice(index, 1);
        },
        setFilename: function setFilename(event, row) {
            var file = event.target.files[0];

            if (file.size > 10000 * 10000) {
                event.preventDefault();
                alert('Arquivo muito grande.');
                return;
            } else {
                row.file = file;
                this.files.push(file);
            }
        },
        removeAttachment: function removeAttachment(id) {
            if (!confirm('Tem certeza que deseja remover o anexo?')) return;

            var vm = this;
            Loading.show();

            axios.post('painel/pagina/ajax/anexo/remover/' + id, { _method: 'DELETE' }).then(function (response) {
                window.location.reload();
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
            });
        },
        removeCategoria: function removeCategoria(item) {
            var _this5 = this;

            this.$set(item, 'remove', true);

            axios.post('painel/ajax/categoria-publicacao/' + item.tipo_categoria_publicacao_id, { _method: 'DELETE' }).then(function (response) {
                for (var i = _this5.categorias.length - 1; i >= 0; i--) {
                    if (_this5.categorias[i].tipo_categoria_publicacao_id == item.tipo_categoria_publicacao_id) {
                        _this5.categorias.splice(i, 1);
                        break;
                    }
                }
            }).catch(function (error) {
                item.remove = false;
                alert('Ocorreu um erro ao tentar remover a categoria "' + item.tcp_nome + '".');
            });
        },
        saveCategoria: function saveCategoria() {
            var _this6 = this;

            var tcp_nome = this.categoria.tcp_nome;
            var tipo_categoria_publicacao_id = this.categoria.tipo_categoria_publicacao_id;
            var _id = Math.random().toString(36).substr(2, 10);

            if (!this.edit_categoria) this.categorias.push({ _id: _id, tcp_nome: tcp_nome });else {
                for (var i = this.categorias.length - 1; i >= 0; i--) {
                    if (this.categorias[i].tipo_categoria_publicacao_id == tipo_categoria_publicacao_id) {
                        this.$set(this.categorias[i], '_id', _id);
                        break;
                    }
                }
            }

            axios.post('painel/ajax/categoria-publicacao', {
                _id: _id,
                tcp_nome: tcp_nome,
                tipo_categoria_publicacao_id: tipo_categoria_publicacao_id
            }).then(function (response) {
                var data = JSON.parse(response.config.data);
                for (var _i = _this6.categorias.length - 1; _i >= 0; _i--) {
                    if (_this6.categorias[_i]._id == data._id) {
                        console.log(response.data.data);
                        _this6.categorias[_i] = response.data.data;
                        break;
                    }
                }
                _this6.categoria = { tcp_nome: '' };
                _this6.edit_categoria = false;
            }).catch(function (error) {
                var data = JSON.parse(error.config.data);
                for (var _i2 = _this6.categorias.length - 1; _i2 >= 0; _i2--) {
                    if (_this6.categorias[_i2]._id == data._id) {
                        _this6.categorias.splice(_i2, 1);
                        break;
                    }
                }
                alert('Ocorreu um erro ao cadastrar a categoria "' + data.tcp_nome + '".');
            });

            this.categoria.tcp_nome = "";
        },
        cancelarEdicaoCategoria: function cancelarEdicaoCategoria() {
            this.categoria = { tcp_nome: '' };
            this.edit_categoria = false;

            for (var i = this.categorias.length - 1; i >= 0; i--) {
                if (this.categorias[i].tipo_categoria_publicacao_id == this.categoria_editada.tipo_categoria_publicacao_id) {
                    this.categorias[i] = this.categoria_editada;
                    this.categoria_editada = {};
                    break;
                }
            }
        },
        handleClick: function handleClick(e) {
            // in the handler, 'this' refers to the box clicked on
            var $box = $(e.target);
            if ($box.is(":checked")) {
                $("input[id!='" + $box.id + "'].categoria").prop("checked", false);
                $box.prop("checked", true);
                this.pagina.tipo_categoria_publicacao_id = [e.target.value];
            } else {
                this.pagina.tipo_categoria_publicacao_id = [];
                $box.prop("checked", false);
            }
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      !this.resource
        ? _c("h1", [_vm._v("Cadastrar Link de Redirecionamento")])
        : _vm._e(),
      _vm._v(" "),
      this.resource
        ? _c("h1", [_vm._v("Atualizar Link de Redirecionamento")])
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.showSuccessMsg
      ? _c(
          "div",
          {
            staticClass: "alert alert-success alert-dismissible",
            attrs: { role: "alert" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("span", [_vm._v("Link de Redirecionamento salva com sucesso.")])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            attrs: { role: "form", "accept-charset": "UTF-8" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.save($event)
              }
            }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-9 col-md-8" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_titulo } },
                    [
                      _c("label", { attrs: { for: "pub_titulo" } }, [
                        _vm._v("Título")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pagina.pub_titulo,
                            expression: "pagina.pub_titulo"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "pub_titulo",
                          autofocus: ""
                        },
                        domProps: { value: _vm.pagina.pub_titulo },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pagina,
                              "pub_titulo",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("form-control", { attrs: { error: _vm.errors.pub_url } }, [
                    _c("label", { attrs: { for: "pub_url" } }, [
                      _vm._v("Endereço (URL)")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.pagina.pub_url,
                          expression: "pagina.pub_url"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "pub_url", autofocus: "" },
                      domProps: { value: _vm.pagina.pub_url },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.pagina, "pub_url", $event.target.value)
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_status } },
                    [
                      _c("label", [_vm._v("Status")]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.pagina.pub_status,
                              expression: "pagina.pub_status"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.pagina,
                                "pub_status",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "PUB" } }, [
                            _vm._v("Publicado")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "RAS" } }, [
                            _vm._v("Rascunho")
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_ordem_menu } },
                    [
                      _c("label", { attrs: { for: "pub_ordem_menu" } }, [
                        _vm._v("Ordem no Menu")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.pagina.pub_ordem_menu,
                            expression: "pagina.pub_ordem_menu"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          id: "pub_ordem_menu",
                          min: "0"
                        },
                        domProps: { value: _vm.pagina.pub_ordem_menu },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.pagina,
                              "pub_ordem_menu",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-3 col-md-4" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.pub_menu_lateral } },
                    [
                      _c("div", { staticClass: "checkbox" }, [
                        _c("label", { attrs: { for: "pub_menu_lateral" } }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.pagina.pub_menu_lateral,
                                expression: "pagina.pub_menu_lateral"
                              }
                            ],
                            attrs: { type: "checkbox", id: "pub_menu_lateral" },
                            domProps: {
                              checked: Array.isArray(
                                _vm.pagina.pub_menu_lateral
                              )
                                ? _vm._i(_vm.pagina.pub_menu_lateral, null) > -1
                                : _vm.pagina.pub_menu_lateral
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.pagina.pub_menu_lateral,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.pagina,
                                        "pub_menu_lateral",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.pagina,
                                        "pub_menu_lateral",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.pagina, "pub_menu_lateral", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Inserir no Menu Lateral")])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    {
                      attrs: { error: _vm.errors.tipo_categoria_publicacao_id }
                    },
                    [
                      _c("label", [_vm._v("Categoria")]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "checkbox-group" },
                        [
                          _vm._l(_vm.categorias, function(item) {
                            return [
                              _c("div", { staticClass: "checkbox" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.pagina.tipo_categoria_publicacao_id,
                                      expression:
                                        "pagina.tipo_categoria_publicacao_id"
                                    }
                                  ],
                                  staticClass: "categoria",
                                  attrs: {
                                    type: "checkbox",
                                    id:
                                      "cat_" + item.tipo_categoria_publicacao_id
                                  },
                                  domProps: {
                                    value: item.tipo_categoria_publicacao_id,
                                    checked: Array.isArray(
                                      _vm.pagina.tipo_categoria_publicacao_id
                                    )
                                      ? _vm._i(
                                          _vm.pagina
                                            .tipo_categoria_publicacao_id,
                                          item.tipo_categoria_publicacao_id
                                        ) > -1
                                      : _vm.pagina.tipo_categoria_publicacao_id
                                  },
                                  on: {
                                    click: _vm.handleClick,
                                    change: function($event) {
                                      var $$a =
                                          _vm.pagina
                                            .tipo_categoria_publicacao_id,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v =
                                            item.tipo_categoria_publicacao_id,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.pagina,
                                              "tipo_categoria_publicacao_id",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.pagina,
                                              "tipo_categoria_publicacao_id",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(
                                          _vm.pagina,
                                          "tipo_categoria_publicacao_id",
                                          $$c
                                        )
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  {
                                    attrs: {
                                      for:
                                        "cat_" +
                                        item.tipo_categoria_publicacao_id
                                    }
                                  },
                                  [_vm._v(_vm._s(item.tcp_nome))]
                                )
                              ])
                            ]
                          }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn-config",
                              attrs: {
                                href: "#",
                                "data-toggle": "modal",
                                "data-target": "#modalCategorias"
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-cog" }),
                              _vm._v(" Gerenciar Categorias")
                            ]
                          )
                        ],
                        2
                      )
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "submit",
                staticClass: "btn btn-primary",
                attrs: { type: "submit", disabled: "" }
              },
              [_vm._v("Salvar")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-default",
                attrs: { href: _vm.baseUrl("/painel/paginas") }
              },
              [_vm._v("Voltar")]
            ),
            _vm._v(" "),
            _vm.resource
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-danger pull-right",
                    attrs: { type: "button", tabindex: "-1" },
                    on: { click: _vm.remove }
                  },
                  [
                    _c("i", { staticClass: "fa fa-trash" }),
                    _vm._v(" Excluir\n                    ")
                  ]
                )
              : _vm._e()
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade modal-categorias",
        attrs: {
          id: "modalCategorias",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modalCategoriasLabel"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("table", { staticClass: "table" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.categorias, function(item) {
                      return [
                        _c(
                          "tr",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !item.remove,
                                expression: "!item.remove"
                              }
                            ]
                          },
                          [
                            _c("td", [_vm._v(_vm._s(item.tcp_nome))]),
                            _vm._v(" "),
                            !_vm.edit_categoria
                              ? _c("td", { staticClass: "text-right" }, [
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            item.tipo_categoria_publicacao_id &&
                                            (!item.tcp_fixa ||
                                              item.tcp_fixa != "S"),
                                          expression:
                                            "item.tipo_categoria_publicacao_id && (!item.tcp_fixa || item.tcp_fixa != 'S')"
                                        }
                                      ],
                                      staticClass: "text-danger",
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.removeCategoria(item)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-times" }),
                                      _vm._v(
                                        " Excluir \n                                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value:
                                            item.tipo_categoria_publicacao_id &&
                                            (!item.tcp_fixa ||
                                              item.tcp_fixa != "S"),
                                          expression:
                                            "item.tipo_categoria_publicacao_id && (!item.tcp_fixa || item.tcp_fixa != 'S')"
                                        }
                                      ],
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          _vm.categoria_editada = Object.assign(
                                            {},
                                            item
                                          )
                                          _vm.categoria = item
                                          _vm.edit_categoria = true
                                        }
                                      }
                                    },
                                    [
                                      _c("i", { staticClass: "fa fa-edit" }),
                                      _vm._v(
                                        " Editar\n                                        "
                                      )
                                    ]
                                  )
                                ])
                              : _vm._e()
                          ]
                        )
                      ]
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    attrs: { role: "form", "accept-charset": "UTF-8" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.saveCategoria($event)
                      }
                    }
                  },
                  [
                    _vm.edit_categoria
                      ? _c("div", { staticClass: "form-group" }, [
                          _c("h4", [
                            _vm._v(
                              "Editando Categoria: " +
                                _vm._s(_vm.categoria.tcp_nome)
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  _vm.cancelarEdicaoCategoria()
                                }
                              }
                            },
                            [_c("small", [_vm._v("cancelar edição")])]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.categoria.tcp_nome,
                            expression: "categoria.tcp_nome"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Inserir uma nova categoria..."
                        },
                        domProps: { value: _vm.categoria.tcp_nome },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.categoria,
                              "tcp_nome",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm._m(3)
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Fechar"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Fechar"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c(
        "h4",
        { staticClass: "modal-title", attrs: { id: "modalCategoriasLabel" } },
        [_vm._v("Categorias")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("colgroup", [
      _c("col"),
      _vm._v(" "),
      _c("col", { staticStyle: { width: "170px" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-btn" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Salvar")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2ed5a3ff", module.exports)
  }
}

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(397)
/* template */
var __vue_template__ = __webpack_require__(398)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/OuvidoriaLista.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-226372fa", Component.options)
  } else {
    hotAPI.reload("data-v-226372fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.component('ouvidoria-col-data', {
    props: ['data'],
    template: '<abbr :title="dateFull">{{ dateAbbr }}</abbr>',
    computed: {
        dateFull: function dateFull() {
            return moment(this.data.ctt_data_cadastro).format('DD/MM/YYYY HH:mm');
        },
        dateAbbr: function dateAbbr() {
            return moment(this.data.ctt_data_cadastro).format('DD/MM/YYYY');
        }
    }
});

Vue.component('ouvidoria-col-sigiloso', {
    props: ['data'],
    template: '<i v-bind:class="classObject"></i>',
    computed: {
        classObject: function classObject() {
            return {
                fa: true,
                'fa-check': this.data.ctt_sigiloso == 'S',
                'text-muted': this.data.ctt_sigiloso == 'S'
            };
        }
    }
});

Vue.component('ouvidoria-col-protocolo', {
    props: ['data'],
    template: '<span>{{ formatted }}</span>',
    computed: {
        formatted: function formatted() {
            if (this.data.protocolo) {
                return this.data.protocolo;
            }
            return '';
        }
    }
});

Vue.component('ouvidoria-col-edit', {
    props: ['data'],
    template: '<a :href="baseUrl(\'/painel/ouvidoria/\' + data.contato_id + \'/detalhes\')">Detalhes</a>'
});

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            columns: ['ctt_data_cadastro', 'ctt_nome', 'ctt_sigiloso', 'protocolo', 'ctt_email', 'edit'],
            options: {
                skin: 'table-striped table-hover',
                columnsClasses: {
                    'ctt_data_cadastro': 'col-data',
                    'protocolo': 'col-situacao',
                    'ctt_sigiloso': 'col-anexos',
                    'edit': 'col-actions'
                },
                headings: {
                    'ctt_data_cadastro': 'Data',
                    'ctt_nome': 'Nome',
                    'protocolo': 'Protocolo',
                    'ctt_email': 'E-mail',
                    'ctt_sigiloso': 'Sigiloso',
                    'edit': ''
                },
                texts: this.vueTableTexts(),
                filterable: false,
                sortable: ['ctt_data_cadastro', 'ctt_nome', 'ctt_sigiloso'],
                orderBy: {
                    ascending: false,
                    column: 'ctt_data_cadastro'
                },
                templates: {
                    ctt_data_cadastro: 'ouvidoria-col-data',
                    ctt_sigiloso: 'ouvidoria-col-sigiloso',
                    protocolo: 'ouvidoria-col-protocolo',
                    edit: 'ouvidoria-col-edit'
                },
                params: {
                    table: true
                },
                responseAdapter: function responseAdapter(resp) {
                    return {
                        data: resp.data.items,
                        count: resp.data.count
                    };
                }
            }
        };
    },

    methods: {
        fetch: function fetch() {
            this.$refs.table.setFilter(JSON.stringify(this.filters));
        }
    }
});

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "panel panel-form" },
      [
        _c("v-server-table", {
          ref: "table",
          attrs: {
            url: "/painel/ajax/contato",
            columns: _vm.columns,
            options: _vm.options
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("h1", [_vm._v("Ouvidoria")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-226372fa", module.exports)
  }
}

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(400)
}
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(405)
/* template */
var __vue_template__ = __webpack_require__(406)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/OuvidoriaDetalhes.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ea927a9e", Component.options)
  } else {
    hotAPI.reload("data-v-ea927a9e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(401);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(403)("795bc4b4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ea927a9e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OuvidoriaDetalhes.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ea927a9e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./OuvidoriaDetalhes.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(402)(false);
// imports


// module
exports.push([module.i, "\npre {\n   white-space: pre-wrap;       /* Since CSS 2.1 */\n   white-space: -moz-pre-wrap;  /* Mozilla */\n   white-space: -pre-wrap;      /* Opera 4-6 */\n   white-space: -o-pre-wrap;    /* Opera 7 */\n   word-wrap: break-word;       /* Internet Explorer */\n}\n", ""]);

// exports


/***/ }),
/* 402 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(404)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 404 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 405 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource'],
    data: function data() {
        return {
            contato: {},
            respostas: {},
            mensagem: '',
            assunto: '',
            errors: {},
            files: [],
            rows: [],
            attachments: []
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        Loading.show();
        this.fetch();
    },

    methods: {
        fetch: function fetch() {
            var _this = this;

            $(this.$refs.submit).prop("disabled", false);

            axios.get('/painel/ajax/contato/' + this.resource).then(function (response) {
                _this.contato = response.data.data;

                if (_this.contato.ctt_data_cadastro) {
                    _this.contato.ctt_data_cadastro = moment(_this.contato.ctt_data_cadastro).format('DD/MM/YYYY HH:mm');
                }

                if (_this.contato.ctt_sigiloso == 'S') {
                    _this.contato.ctt_sigiloso = 'SIM';
                } else if (_this.contato.ctt_sigiloso == 'N') {
                    _this.contato.ctt_sigiloso = 'NÃO';
                }

                Loading.hide();
            }).catch(function (error) {
                Loading.hide();
                alert('Não foi possível carregar o recurso informado.');
            });

            axios.get('/painel/ajax/resposta_contato/' + this.resource).then(function (response) {
                console.log(response.data.data);
                _this.respostas = response.data.data;
            }).catch(function (error) {
                Loading.hide();
                alert('Não foi possível carregar o recurso informado.');
            });
        },
        formSubmit: function formSubmit() {

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            var formData = new FormData();
            formData.append('mensagem', this.mensagem);
            formData.append('assunto', this.assunto);
            formData.append('contato', this.resource);

            for (var i = 0; i < this.files.length; i++) {
                var file = this.files[i];
                formData.append('files' + i, file);
            }

            var config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            axios.post('painel/ajax/email/contato/submit', formData, config).then(function (response) {

                console.log(response);
                console.log('saved successfully');

                Loading.hide();

                alert("Email enviado com sucesso!!!");
                window.location.reload();
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação. 1";
                        alert(msg);
                    }
                } else {
                    console.log(error);
                    alert("Ocorreu um erro ao tentar processar sua solicitação. 2");
                }

                Loading.hide();
            });
        },
        addRow: function addRow() {
            var elem = document.createElement('tr');
            this.rows.push({
                file: {
                    name: 'Selecionar Arquivo'
                }
            });
        },

        removeElement: function removeElement(index) {
            this.rows.splice(index, 1);
            this.files.splice(index, 1);
        },
        setFilename: function setFilename(event, row) {
            var file = event.target.files[0];

            if (file.size > 10000 * 10000) {
                event.preventDefault();
                alert('Arquivo muito grande.');
                return;
            } else {
                row.file = file;
                this.files.push(file);
            }
        },
        removeAttachment: function removeAttachment(id) {
            if (!confirm('Tem certeza que deseja remover o anexo?')) return;

            var vm = this;
            Loading.show();

            axios.post('painel/pagina/ajax/anexo/remover/' + id, { _method: 'DELETE' }).then(function (response) {
                window.location.reload();
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-default pull-right",
          attrs: { href: _vm.baseUrl("/painel/ouvidoria") }
        },
        [
          _c("i", { staticClass: "fa fa-chevron-left fa-fw" }),
          _vm._v(" Voltar")
        ]
      ),
      _vm._v(" "),
      _c("h1", [_vm._v("Detalhes do Contato")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("table", { staticClass: "table" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("th", { staticStyle: { "border-top": "0" } }, [_vm._v("Data:")]),
            _vm._v(" "),
            _c("td", { staticStyle: { "border-top": "0" } }, [
              _vm._v(_vm._s(_vm.contato.ctt_data_cadastro))
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Tipo de Contato:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.contato.tco_nome))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Sigiloso:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.contato.ctt_sigiloso))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Nome:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.contato.ctt_nome))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("CPF/CNPJ:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.contato.ctt_cpf_cnpj))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Endereço:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.contato.ctt_endereco))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Telefone:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.contato.ctt_telefone))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("E-mail:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.contato.ctt_email))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Protocolo:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.contato.protocolo))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Mensagem:")]),
            _vm._v(" "),
            _c("td", [_c("pre", [_vm._v(_vm._s(_vm.contato.ctt_mensagem))])])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Anexos:")]),
            _vm._v(" "),
            _c("td", [
              _c(
                "ul",
                { staticClass: "list-unstyled" },
                [
                  _vm._l(_vm.contato.anexos, function(item) {
                    return [
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.baseUrl(
                                "/painel/ouvidoria/anexo/" + item.anexo_id
                              ),
                              target: "_blank"
                            }
                          },
                          [_vm._v(_vm._s(item.ane_nome))]
                        )
                      ])
                    ]
                  })
                ],
                2
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    this.respostas[0] != null
      ? _c("div", { staticClass: "panel panel-form" }, [
          _c(
            "div",
            { staticClass: "panel-body" },
            [
              this.respostas.length > 1
                ? _c("h1", [_vm._v("Respostas:")])
                : _vm._e(),
              _vm._v(" "),
              this.respostas.length == 1
                ? _c("h1", [_vm._v("Resposta:")])
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.respostas, function(resposta, indice) {
                return _c("div", { key: resposta.assunto }, [
                  _c("table", { staticClass: "table" }, [
                    _vm._m(1, true),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("th", [_vm._v("Assunto:")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(resposta.assunto))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Mensagem:")]),
                        _vm._v(" "),
                        _c("td", [
                          _c("pre", [_vm._v(_vm._s(resposta.mensagem))])
                        ])
                      ])
                    ])
                  ])
                ])
              })
            ],
            2
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            attrs: {
              role: "form",
              "accept-charset": "UTF-8",
              enctype: "multipart/form-data"
            },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.formSubmit($event)
              }
            }
          },
          [
            _c("label", { attrs: { for: "mensagem" } }, [_vm._v("Responder")]),
            _vm._v(" "),
            _c("form-control", { attrs: { erro: _vm.errors.assunto } }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.assunto,
                    expression: "assunto"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  name: "assunto",
                  id: "assunto",
                  placeholder: "Assunto",
                  required: ""
                },
                domProps: { value: _vm.assunto },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.assunto = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("form-control", { attrs: { error: _vm.errors.mensagem } }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.mensagem,
                    expression: "mensagem"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "mensagem", name: "mensagem", rows: "5" },
                domProps: { value: _vm.mensagem },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.mensagem = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel panel-form" }, [
              _c("table", { staticClass: "table" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm._l(_vm.attachments, function(attachment) {
                      return _c("tr", [
                        _c("td", [
                          _c("p", { staticClass: "form-control-static" }, [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.baseUrl(
                                    "/painel/pagina/exibir/anexo/" +
                                      attachment.pub_anexo_id
                                  ),
                                  target: "_blank"
                                }
                              },
                              [_vm._v(_vm._s(attachment.pub_anexo_nome))]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger pull-right",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.removeAttachment(attachment.pub_anexo_id)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-trash" }),
                              _vm._v(
                                " Excluir\n                                "
                              )
                            ]
                          )
                        ])
                      ])
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.rows, function(row, index) {
                      return _c("tr", [
                        _c("td", [
                          _c("label", { staticClass: "fileContainer" }, [
                            _c("input", {
                              staticStyle: { display: "none" },
                              attrs: { type: "file", id: index },
                              on: {
                                change: function($event) {
                                  _vm.setFilename($event, row)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("a", [_vm._v(_vm._s(row.file.name))])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger pull-right",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.removeElement(index)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-trash" }),
                              _vm._v(
                                " Excluir\n                                    "
                              )
                            ]
                          )
                        ])
                      ])
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "btn btn-success", on: { click: _vm.addRow } },
                [_vm._v("Adicionar Anexo")]
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "submit",
                staticClass: "btn btn-primary pull-right",
                attrs: { type: "submit", disabled: "" }
              },
              [_vm._v("\n                    Enviar\n                ")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("colgroup", [_c("col", { staticStyle: { width: "220px" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("colgroup", [_c("col", { staticStyle: { width: "220px" } })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [_c("td", [_c("strong", [_vm._v("Anexos")])])])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ea927a9e", module.exports)
  }
}

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(408)
/* template */
var __vue_template__ = __webpack_require__(409)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/BannerCadastro.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-729ab082", Component.options)
  } else {
    hotAPI.reload("data-v-729ab082", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource'],
    data: function data() {
        return {
            image: '',
            errors: {},
            showSuccessMsg: false
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        Loading.show();

        var successMsg = window.location.search.split('success=')[1];
        this.showSuccessMsg = successMsg ? true : false;

        $(this.$refs.conteudo).summernote({
            lang: 'pt-BR',
            minHeight: 200,
            maxHeight: 500,
            toolbar: [['style1', ['style']], ['style2', ['bold', 'italic', 'underline', 'clear']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['insert', ['link', 'hr', 'table']], ['misc', ['fullscreen', 'codeview', 'help']]]
        });

        this.fetch();
    },

    methods: {
        fetch: function fetch() {
            Loading.hide();
            $(this.$refs.submit).prop("disabled", false);
        },
        formSubmit: function formSubmit(e) {
            var _this = this;

            e.preventDefault();
            var currentObj = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            var config = {
                headers: { 'content-type': 'multipart/form-data' }
            };

            var formData = new FormData();
            formData.append('image', this.image);
            formData.append('nome', this.resource[0].banner_nome);
            formData.append('url', this.resource[0].banner_url);
            formData.append('banner_lateral', this.resource[0].banner_lateral);

            axios.post('/painel/ajax/banner' + (this.resource ? '/' + this.resource[0].banner_id : ''), formData, config).then(function (response) {
                window.location.href = _this.baseUrl('/painel/configuracoes?success=1');
                console.log(response);
                console.log('saved successfully');
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this.$refs.submit).prop("disabled", false);
            });
        },
        onImageChange: function onImageChange(e) {
            console.log(e.target.files[0]);
            this.image = e.target.files[0];
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      this.resource[0].banner_nome == ""
        ? _c("h1", [_vm._v("Cadastrar Banner")])
        : _vm._e(),
      _vm._v(" "),
      !this.resource[0].banner_nome == ""
        ? _c("h1", [_vm._v("Atualizar Banner")])
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.showSuccessMsg
      ? _c(
          "div",
          {
            staticClass: "alert alert-success alert-dismissible",
            attrs: { role: "alert" }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("span", [_vm._v("Banner salvo com sucesso.")])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            attrs: {
              role: "form",
              "accept-charset": "UTF-8",
              enctype: "multipart/form-data"
            },
            on: { submit: _vm.formSubmit }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-9 col-md-8" },
                [
                  _c("form-control", [
                    _c("label", { attrs: { for: "banner_nome" } }, [
                      _vm._v("Nome")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.resource[0].banner_nome,
                          expression: "resource[0].banner_nome"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "banner_nome",
                        autofocus: "",
                        required: ""
                      },
                      domProps: { value: _vm.resource[0].banner_nome },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.resource[0],
                            "banner_nome",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("form-control", [
                    _c("label", { attrs: { for: "banner_url" } }, [
                      _vm._v("Url")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.resource[0].banner_url,
                          expression: "resource[0].banner_url"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "banner_url",
                        autofocus: "",
                        required: ""
                      },
                      domProps: { value: _vm.resource[0].banner_url },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.resource[0],
                            "banner_url",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.banner_lateral } },
                    [
                      _c("div", { staticClass: "checkbox" }, [
                        _c("label", { attrs: { for: "banner_lateral" } }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.resource[0].banner_lateral,
                                expression: "resource[0].banner_lateral"
                              }
                            ],
                            attrs: { type: "checkbox", id: "banner_lateral" },
                            domProps: {
                              checked: Array.isArray(
                                _vm.resource[0].banner_lateral
                              )
                                ? _vm._i(_vm.resource[0].banner_lateral, null) >
                                  -1
                                : _vm.resource[0].banner_lateral
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.resource[0].banner_lateral,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.resource[0],
                                        "banner_lateral",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.resource[0],
                                        "banner_lateral",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(
                                    _vm.resource[0],
                                    "banner_lateral",
                                    $$c
                                  )
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Banner Lateral")])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("form-control", [
                    _vm.resource[0].banner_imagem
                      ? _c(
                          "div",
                          { staticClass: "thumbnail thumbnail-preview" },
                          [
                            _c("img", {
                              staticClass: "img-responsive",
                              attrs: {
                                src: _vm.baseUrl(_vm.resource[0].banner_imagem)
                              }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "btn btn-primary btn-sm",
                        attrs: { for: "logo_midia" }
                      },
                      [_vm._v("Selecionar imagem")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "form-control",
                      staticStyle: { display: "none" },
                      attrs: {
                        type: "file",
                        id: "logo_midia",
                        accept: "image/*"
                      },
                      on: { change: _vm.onImageChange }
                    })
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "submit",
                staticClass: "btn btn-primary",
                attrs: { type: "submit", disabled: "" }
              },
              [_vm._v("Salvar")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-default",
                attrs: { href: _vm.baseUrl("/painel/configuracoes") }
              },
              [_vm._v("Voltar")]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Fechar"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-729ab082", module.exports)
  }
}

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(411)
/* template */
var __vue_template__ = __webpack_require__(412)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/EditalLista.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9e1594be", Component.options)
  } else {
    hotAPI.reload("data-v-9e1594be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



Vue.component("col-ver", {
  props: ["data"],
  template: "<a :href=\"baseUrl('/painel/edital/ver/' + data.edital_acessados_id)\">Detalhes</a>"
});

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tipos: [],
      filters: {
        doc_numero_processo: "",
        tipo_processo_id: ""
      },
      columns: ["edital_nome", "edital_email", "edital_cpf", "num_processo", "tipo_processo", "created_at", "ver"],
      options: {
        skin: "table-striped table-hover",
        columnsClasses: {
          ver: "col-actions",
          created_at: "col-data",
          edital_email: "col-tipo"
        },
        headings: {
          edital_nome: "Nome",
          edital_email: "Email",
          edital_cpf: "Cpf",
          num_processo: "Número do Processo",
          tipo_processo: "Tipo do Processo",
          created_at: "Data",
          ver: ""
        },
        texts: this.vueTableTexts(),
        filterable: false,
        sortable: ["num_processo", "tipo_processo", "created_at"],
        orderBy: {
          ascending: true,
          column: "created_at"
        },
        templates: {
          ver: "col-ver"
        },
        params: {
          table: true
        },
        responseAdapter: function responseAdapter(resp) {

          var data = resp.data.items;

          for (var i in data) {
            if (data[i].created_at) {
              data[i].created_at = moment(data[i].created_at).format('DD/MM/YYYY');
            }
          }

          return {
            data: resp.data.items,
            count: resp.data.count
          };
        }
        // errors: {},
        // showSuccessMsg: false
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    Loading.show();

    axios.all([axios.get("/painel/ajax/tipo-processo")]
    //axios.get("/painel/ajax/categoria-processo")
    ).then(axios.spread(function (respTipos, respCategorias) {
      _this.tipos = respTipos.data.data;
      //this.categorias = respCategorias.data.data;
      Loading.hide();
    }));
  },

  methods: {
    fetch: function fetch() {
      this.$refs.table.setFilter(JSON.stringify(this.filters));
    }
  }
});

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "doc_numero_processo" } }, [
            _vm._v("Número do Processo")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filters.doc_numero_processo,
                expression: "filters.doc_numero_processo"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "doc_numero_processo" },
            domProps: { value: _vm.filters.doc_numero_processo },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(
                  _vm.filters,
                  "doc_numero_processo",
                  $event.target.value
                )
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-3" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "tipo_processo_id" } }, [
            _vm._v("Tipo de Processo")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filters.tipo_processo_id,
                  expression: "filters.tipo_processo_id"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "tipo_processo_id" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.filters,
                    "tipo_processo_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }),
              _vm._v(" "),
              _vm._l(_vm.tipos, function(item) {
                return [
                  _c("option", { domProps: { value: item.tipo_processo_id } }, [
                    _vm._v(_vm._s(item.tpr_nome))
                  ])
                ]
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v(" ")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-block btn-success",
              attrs: { type: "button" },
              on: { click: _vm.fetch }
            },
            [
              _c("i", { staticClass: "fa fa-search" }),
              _vm._v(" Buscar\n        ")
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "panel panel-form" },
      [
        _c("v-server-table", {
          ref: "table",
          attrs: {
            url: "/painel/ajax/edital",
            columns: _vm.columns,
            options: _vm.options
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("h1", [_vm._v("Editais Acessados")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9e1594be", module.exports)
  }
}

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(414)
/* template */
var __vue_template__ = __webpack_require__(415)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/EditalDetalhe.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-568f2999", Component.options)
  } else {
    hotAPI.reload("data-v-568f2999", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource'],
    data: function data() {
        return {
            edital: {},
            tipo_categoria_processo: {},
            mes: {}
        };
    },
    mounted: function mounted() {
        Loading.show();
        this.fetch();
    },

    methods: {
        fetch: function fetch() {
            var _this = this;

            axios.get('/painel/ajax/tipo-processo/' + this.resource[0].edital_tipo).then(function (response) {
                _this.tipo_categoria_processo = response.data.data.tpr_nome;

                if (_this.resource[0].created_at) {
                    _this.resource[0].created_at = moment(_this.resource[0].created_at).format('DD/MM/YYYY HH:mm');
                }

                if (_this.resource[0].edital_mes == 1) {
                    _this.mes = "Janeiro";
                } else if (_this.resource[0].edital_mes == 2) {
                    _this.mes = "Fevereiro";
                } else if (_this.resource[0].edital_mes == 3) {
                    _this.mes = "Março";
                } else if (_this.resource[0].edital_mes == 4) {
                    _this.mes = "Abril";
                } else if (_this.resource[0].edital_mes == 5) {
                    _this.mes = "Maio";
                } else if (_this.resource[0].edital_mes == 6) {
                    _this.mes = "Junho";
                } else if (_this.resource[0].edital_mes == 7) {
                    _this.mes = "Julho";
                } else if (_this.resource[0].edital_mes == 8) {
                    _this.mes = "Agosto";
                } else if (_this.resource[0].edital_mes == 9) {
                    _this.mes = "Setembro";
                } else if (_this.resource[0].edital_mes == 10) {
                    _this.mes = "Outubro";
                } else if (_this.resource[0].edital_mes == 11) {
                    _this.mes = "Novembro";
                } else if (_this.resource[0].edital_mes == 12) {
                    _this.mes = "Dezembro";
                }

                Loading.hide();
            }).catch(function (error) {
                Loading.hide();
                alert('Não foi possível carregar o recurso informado.');
            });
        }
    }
});

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-default pull-right",
          attrs: { href: _vm.baseUrl("/painel/editais") }
        },
        [
          _c("i", { staticClass: "fa fa-chevron-left fa-fw" }),
          _vm._v(" Voltar")
        ]
      ),
      _vm._v(" "),
      _c("h1", [_vm._v("Detalhes do Edital")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("table", { staticClass: "table" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("th", { staticStyle: { "border-top": "0" } }, [
              _vm._v("Data do Acesso:")
            ]),
            _vm._v(" "),
            _c("td", { staticStyle: { "border-top": "0" } }, [
              _vm._v(_vm._s(_vm.resource[0].created_at))
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Nome:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.resource[0].edital_nome))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Email:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.resource[0].edital_email))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Cpf:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.resource[0].edital_cpf))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Telefone:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.resource[0].edital_telefone))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Tipo:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.tipo_categoria_processo))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Mês:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.mes))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Ano:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.resource[0].edital_ano))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Edital:")]),
            _vm._v(" "),
            _c("td", [
              _c(
                "a",
                {
                  attrs: {
                    href: _vm.baseUrl(
                      "/processo/anexo/" + _vm.resource[0].edital_DocumentoId
                    ),
                    target: "_blank"
                  }
                },
                [_vm._v("Edital")]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("colgroup", [_c("col", { staticStyle: { width: "220px" } })])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-568f2999", module.exports)
  }
}

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(417)
/* template */
var __vue_template__ = __webpack_require__(418)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/ConfiguracaoCadastro.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51be1ec5", Component.options)
  } else {
    hotAPI.reload("data-v-51be1ec5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



$(document).ready(function () {
    $('#fone_primario').mask('(99)  9999-9999');
});
$(document).ready(function () {
    $('#fone_secundario').mask('(99)  9999-9999');
});

Vue.component('col-edi', {
    props: ['data'],
    template: '<a :href="baseUrl(\'/painel/banner/edicao/\' + data.banner_id)">Editar</a>'
});

Vue.component('col-exc', {
    props: ['data'],
    template: '<a href="#" class="text-danger btn-remove" @click="remove(data.banner_id)">Excluir</a>',
    methods: {
        remove: function remove(id) {
            if (!confirm('Tem certeza que deseja remover o banner ' + this.data.banner_nome + '?')) return;

            var vm = this;
            Loading.show();

            axios.post('painel/ajax/configuracao/banner/' + this.data.banner_id, { _method: 'DELETE' }).then(function (response) {
                window.location.reload();
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
            });
        }
    }
});

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            configuracao: {
                uf: "BA",
                logo: null,
                logo_midia: null,
                alterar_senha: false,
                telefone_primario: '1',
                telefone_secundario: '2'
            },
            vacinometro: {
                doses_aplicadas: '',
                doses_recebidas: '',
                primeira_dose: '',
                segunda_dose: ''
            },
            columns: ['banner_nome', 'banner_tipo', 'edit', 'remove'],
            options: {
                skin: 'table-striped table-hover',
                columnsClasses: {
                    'edit': 'col-actions',
                    'remove': 'col-actions'
                },
                headings: {
                    'banner_nome': 'Título',
                    'banner_tipo': 'Tipo',
                    'edit': '',
                    'remove': ''
                },
                texts: this.vueTableTexts(),
                filterable: false,
                orderBy: {
                    ascending: true,
                    column: 'banner_nome'
                },
                templates: {
                    edit: 'col-edi',
                    remove: 'col-exc'
                },
                params: {
                    table: true
                }
            },
            errors: {},
            showSuccessMsg: false
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        Loading.show();

        // Mensagem de sucesso ao salvar
        var successMsg = window.location.search.split('success=')[1];
        this.showSuccessMsg = successMsg ? true : false;

        this.fetch();
    },

    methods: {
        fetch: function fetch() {
            var _this = this;

            axios.get('/painel/ajax/configuracao').then(function (response) {
                _this.configuracao = response.data.data.configuracoes;
                _this.configuracao.endereco = _this.configuracao.endereco.replace(/<br\s*\/?>/mg, "\n");
                _this.configuracao.cor = _this.configuracao.cor ? _this.configuracao.cor : '#289dcc';
                _this.$set(_this.configuracao, 'alterar_senha', false);
                _this.$set(_this.configuracao, 'logo_midia', null);

                _this.vacinometro.doses_recebidas = response.data.data.vacinometro.doses_recebidas.valor;
                _this.vacinometro.doses_aplicadas = response.data.data.vacinometro.doses_aplicadas.valor;
                _this.vacinometro.primeira_dose = response.data.data.vacinometro.primeira_dose.valor;
                _this.vacinometro.segunda_dose = response.data.data.vacinometro.segunda_dose.valor;

                Loading.hide();
                $(_this.$refs.submit).prop("disabled", false);
            }).catch(function (error) {
                Loading.hide();
                alert('Não foi possível carregar as configurações.');
            });
        },
        save: function save() {
            var _this2 = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            var data = new FormData();

            if (this.configuracao.alterar_senha === "true") {
                this.configuracao.alterar_senha = true;
            }

            for (var i in this.configuracao) {
                if (this.configuracao[i]) {
                    data.append(i, this.configuracao[i]);
                }
            }

            for (var i in this.vacinometro) {
                if (this.vacinometro[i]) {
                    data.append(i, this.vacinometro[i]);
                }
            }

            var promise = axios({
                method: 'post',
                url: '/painel/ajax/configuracao',
                data: data,
                headers: { 'content-type': 'multipart/form-data' }
            });

            promise.then(function (response) {
                window.location.href = _this2.baseUrl('/painel/configuracoes?success=1');
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this2.$refs.submit).prop("disabled", false);
            });
        },
        onFileChange: function onFileChange(e) {
            var base64 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var files = e.target.files || e.dataTransfer.files;
            var file = files.length ? files[0] : null;
            var preview = $(e.target).siblings('.thumbnail-preview').find('img');
            var reader = new FileReader();
            var self = this;

            reader.onload = function (event) {
                preview.attr('src', event.target.result);
                self.configuracao[e.target.id] = base64 ? event.target.result : file;
            };
            if (file) {
                reader.readAsDataURL(file); // convert to base64 string
            }
        },
        apagarImagem: function apagarImagem(selector) {
            var input = $(selector);
            var preview = input.siblings('.thumbnail-preview').find('img');
            preview.attr('src', null);
            input.val(null);
            this.configuracao[input.attr('id')] = 'apagar';
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm.showSuccessMsg
      ? _c(
          "div",
          {
            staticClass: "alert alert-success alert-dismissible",
            attrs: { role: "alert" }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c("span", [_vm._v("Configurações atualizadas com sucesso.")])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            attrs: { role: "form", "accept-charset": "UTF-8" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.save($event)
              }
            }
          },
          [
            _c("h4", [_vm._v("Vacinômetro")]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.doses_recebidas } },
                    [
                      _c("label", { attrs: { for: "doses_recebidas" } }, [
                        _vm._v("Doses Recebidas")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.vacinometro.doses_recebidas,
                            expression: "vacinometro.doses_recebidas"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "doses_recebidas",
                          type: "text",
                          name: "doses_recebidas"
                        },
                        domProps: { value: _vm.vacinometro.doses_recebidas },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.vacinometro,
                              "doses_recebidas",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.doses_aplicadas } },
                    [
                      _c("label", { attrs: { for: "doses_aplicadas" } }, [
                        _vm._v("Doses Aplicadas")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.vacinometro.doses_aplicadas,
                            expression: "vacinometro.doses_aplicadas"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "doses_aplicadas",
                          type: "text",
                          name: "doses_aplicadas"
                        },
                        domProps: { value: _vm.vacinometro.doses_aplicadas },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.vacinometro,
                              "doses_aplicadas",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.primeira_dose } },
                    [
                      _c("label", { attrs: { for: "primeira_dose" } }, [
                        _vm._v("1˚ Dose")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.vacinometro.primeira_dose,
                            expression: "vacinometro.primeira_dose"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "primeira_dose",
                          type: "text",
                          name: "primeira_dose"
                        },
                        domProps: { value: _vm.vacinometro.primeira_dose },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.vacinometro,
                              "primeira_dose",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.segunda_dose } },
                    [
                      _c("label", { attrs: { for: "segunda_dose" } }, [
                        _vm._v("2˚ Dose")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.vacinometro.segunda_dose,
                            expression: "vacinometro.segunda_dose"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "segunda_dose",
                          type: "text",
                          name: "segunda_dose"
                        },
                        domProps: { value: _vm.vacinometro.segunda_dose },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.vacinometro,
                              "segunda_dose",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c("form-control", { attrs: { error: _vm.errors.nome } }, [
                    _c("label", { attrs: { for: "nome" } }, [
                      _vm._v("Nome da Entidade/Órgão *")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.configuracao.nome,
                          expression: "configuracao.nome"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "nome",
                        autofocus: "",
                        placeholder: "Ex.: Prefeitura de ..."
                      },
                      domProps: { value: _vm.configuracao.nome },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.configuracao,
                            "nome",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c("form-control", { attrs: { error: _vm.errors.portal } }, [
                    _c("label", { attrs: { for: "portal" } }, [
                      _vm._v("Título do Portal *")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.configuracao.portal,
                          expression: "configuracao.portal"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "portal",
                        placeholder: "Ex.: Portal da ..."
                      },
                      domProps: { value: _vm.configuracao.portal },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.configuracao,
                            "portal",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c("form-control", { attrs: { error: _vm.errors.uf } }, [
                    _c("label", { attrs: { for: "uf" } }, [_vm._v("UF *")]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.configuracao.uf,
                            expression: "configuracao.uf"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "uf" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.configuracao,
                              "uf",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [_c("option", { attrs: { value: "BA" } }, [_vm._v("BA")])]
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c("form-control", { attrs: { error: _vm.errors.email } }, [
                    _c("label", { attrs: { for: "email" } }, [
                      _vm._v("E-mail de Contato")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.configuracao.email,
                          expression: "configuracao.email"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "email", id: "email" },
                      domProps: { value: _vm.configuracao.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.configuracao,
                            "email",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c("form-control", { attrs: { error: _vm.errors.email } }, [
                    _c("label", { attrs: { for: "telefone_primario" } }, [
                      _vm._v("Telefone primário")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.configuracao.telefone_primario,
                          expression: "configuracao.telefone_primario"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "fone_primario",
                        type: "phone",
                        name: "telefone_primario",
                        required: ""
                      },
                      domProps: { value: _vm.configuracao.telefone_primario },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.configuracao,
                            "telefone_primario",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c("form-control", { attrs: { error: _vm.errors.email } }, [
                    _c("label", { attrs: { for: "telefone_secundario" } }, [
                      _vm._v("Telefone secundário")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.configuracao.telefone_secundario,
                          expression: "configuracao.telefone_secundario"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "fone_secundario",
                        type: "phone",
                        name: "telefone_secundario",
                        required: ""
                      },
                      domProps: { value: _vm.configuracao.telefone_secundario },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.configuracao,
                            "telefone_secundario",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("form-control", { attrs: { error: _vm.errors.logo } }, [
              _c("label", { attrs: { for: "logo_midia" } }, [
                _vm._v("Logotipo/Brasão *")
              ]),
              _vm._v(" "),
              _vm.configuracao.logo
                ? _c("div", { staticClass: "thumbnail thumbnail-preview" }, [
                    _c("img", {
                      staticClass: "img-responsive",
                      attrs: { src: _vm.baseUrl(_vm.configuracao.logo) }
                    })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: { for: "logo_midia" }
                },
                [_vm._v("Selecionar imagem")]
              ),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                staticStyle: { display: "none" },
                attrs: { type: "file", id: "logo_midia", accept: "image/*" },
                on: { change: _vm.onFileChange }
              })
            ]),
            _vm._v(" "),
            _c("form-control", { attrs: { error: _vm.errors.favico } }, [
              _c("label", { attrs: { for: "favico_midia" } }, [
                _vm._v("Favicon")
              ]),
              _vm._v(" "),
              _vm.configuracao.favico
                ? _c("div", { staticClass: "thumbnail thumbnail-preview" }, [
                    _c("img", {
                      staticClass: "img-responsive",
                      attrs: { src: _vm.baseUrl(_vm.configuracao.favico) }
                    })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: { for: "favico_midia" }
                },
                [_vm._v("Selecionar imagem")]
              ),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                staticStyle: { display: "none" },
                attrs: { type: "file", id: "favico_midia", accept: "image/*" },
                on: { change: _vm.onFileChange }
              }),
              _vm._v(" "),
              _c("div", [
                _c("small", [
                  _c("strong", [
                    _vm._v(
                      "O favicon deve ter altura e largura iguais. Tamanho Máximo: 1024x1024"
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("form-control", { attrs: { error: _vm.errors.endereco } }, [
              _c("label", { attrs: { for: "endereco" } }, [_vm._v("Endereço")]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.configuracao.endereco,
                    expression: "configuracao.endereco"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "endereco", rows: "3" },
                domProps: { value: _vm.configuracao.endereco },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.configuracao, "endereco", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group form-inline" }, [
              _c("label", { staticClass: "mr-1", attrs: { for: "cor" } }, [
                _vm._v("Cor Primária do Portal:")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.configuracao.cor,
                    expression: "configuracao.cor"
                  }
                ],
                staticClass: "form-control",
                staticStyle: { width: "50px" },
                attrs: { id: "cor", type: "color", name: "cor", required: "" },
                domProps: { value: _vm.configuracao.cor },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.configuracao, "cor", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("h4", [_vm._v("Redes Sociais")]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.facebook } },
                    [
                      _c("label", { attrs: { for: "facebook" } }, [
                        _vm._v("Facebook")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.configuracao.facebook,
                            expression: "configuracao.facebook"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "facebook",
                          type: "text",
                          name: "facebook"
                        },
                        domProps: { value: _vm.configuracao.facebook },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.configuracao,
                              "facebook",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c("form-control", { attrs: { error: _vm.errors.twitter } }, [
                    _c("label", { attrs: { for: "twitter" } }, [
                      _vm._v("Twitter")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.configuracao.twitter,
                          expression: "configuracao.twitter"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "twitter", type: "text", name: "twitter" },
                      domProps: { value: _vm.configuracao.twitter },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.configuracao,
                            "twitter",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c("form-control", { attrs: { error: _vm.errors.google } }, [
                    _c("label", { attrs: { for: "google" } }, [
                      _vm._v("Google Plus")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.configuracao.google,
                          expression: "configuracao.google"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "google", type: "text", name: "google" },
                      domProps: { value: _vm.configuracao.google },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.configuracao,
                            "google",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.instagram } },
                    [
                      _c("label", { attrs: { for: "instagram" } }, [
                        _vm._v("Instagram")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.configuracao.instagram,
                            expression: "configuracao.instagram"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "instagram",
                          type: "text",
                          name: "instagram"
                        },
                        domProps: { value: _vm.configuracao.instagram },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.configuracao,
                              "instagram",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c(
                    "form-control",
                    { attrs: { error: _vm.errors.facebook } },
                    [
                      _c("label", { attrs: { for: "pinterest" } }, [
                        _vm._v("Pinterest")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.configuracao.pinterest,
                            expression: "configuracao.pinterest"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "pinterest",
                          type: "text",
                          name: "pinterest"
                        },
                        domProps: { value: _vm.configuracao.pinterest },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.configuracao,
                              "pinterest",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c("form-control", { attrs: { error: _vm.errors.youtube } }, [
                    _c("label", { attrs: { for: "youtube" } }, [
                      _vm._v("Youtube")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.configuracao.youtube,
                          expression: "configuracao.youtube"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "youtube", type: "text", name: "youtube" },
                      domProps: { value: _vm.configuracao.youtube },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.configuracao,
                            "youtube",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("h4", [_vm._v("Banner Página Inicial")]),
            _vm._v(" "),
            _c("form-control", [
              _c("label", { attrs: { for: "banner_home_url" } }, [
                _vm._v("Endereço Destino (URL)")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.configuracao.banner_home_url,
                    expression: "configuracao.banner_home_url"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  id: "banner_home_url",
                  type: "text",
                  name: "banner_home_url"
                },
                domProps: { value: _vm.configuracao.banner_home_url },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.configuracao,
                      "banner_home_url",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("form-control", [
              _c("label", { attrs: { for: "banner_home_img" } }, [
                _vm._v("Imagem")
              ]),
              _vm._v(" "),
              _vm.configuracao.banner_home_img
                ? _c("div", { staticClass: "thumbnail thumbnail-preview" }, [
                    _c("img", {
                      staticClass: "img-responsive",
                      attrs: { src: _vm.configuracao.banner_home_img }
                    })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", [
                _c("small", [
                  _c("strong", [_vm._v("Tamanho Recomendado: 728x90")])
                ])
              ]),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: { for: "banner_home_img" }
                },
                [_vm._v("Selecionar imagem")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-danger btn-sm",
                  on: {
                    click: function($event) {
                      _vm.apagarImagem("#banner_home_img")
                    }
                  }
                },
                [_vm._v("Apagar Imagem")]
              ),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                staticStyle: { display: "none" },
                attrs: {
                  type: "file",
                  id: "banner_home_img",
                  accept: "image/*"
                },
                on: {
                  change: function($event) {
                    _vm.onFileChange($event, true)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("h4", [_vm._v("Popup da Página Inicial")]),
            _vm._v(" "),
            _c("form-control", [
              _c("label", { attrs: { for: "popup_url" } }, [
                _vm._v("Endereço Destino (URL)")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.configuracao.popup_url,
                    expression: "configuracao.popup_url"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "popup_url", type: "text", name: "popup_url" },
                domProps: { value: _vm.configuracao.popup_url },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.configuracao, "popup_url", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("form-control", [
              _c("label", { attrs: { for: "popup_img" } }, [_vm._v("Imagem")]),
              _vm._v(" "),
              _vm.configuracao.popup_img
                ? _c("div", { staticClass: "thumbnail thumbnail-preview" }, [
                    _c("img", {
                      staticClass: "img-responsive",
                      attrs: { src: _vm.configuracao.popup_img }
                    })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div"),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: { for: "popup_img" }
                },
                [_vm._v("Selecionar imagem")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-danger btn-sm",
                  on: {
                    click: function($event) {
                      _vm.apagarImagem("#popup_img")
                    }
                  }
                },
                [_vm._v("Apagar Imagem")]
              ),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                staticStyle: { display: "none" },
                attrs: { type: "file", id: "popup_img", accept: "image/*" },
                on: {
                  change: function($event) {
                    _vm.onFileChange($event, true)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("form-control", { attrs: { error: _vm.errors.banners } }, [
              _c("h4", [_vm._v("Banners")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "panel panel-form" },
                [
                  _c("v-server-table", {
                    ref: "table",
                    attrs: {
                      url: "/painel/ajax/banner",
                      columns: _vm.columns,
                      options: _vm.options
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-primary pull-right",
                      attrs: { href: _vm.baseUrl("/painel/banner/cadastro/") }
                    },
                    [_vm._v("Adicionar")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "checkbox" }, [
                _c("label", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.configuracao.alterar_senha,
                        expression: "configuracao.alterar_senha"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.configuracao.alterar_senha)
                        ? _vm._i(_vm.configuracao.alterar_senha, null) > -1
                        : _vm.configuracao.alterar_senha
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.configuracao.alterar_senha,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.configuracao,
                                "alterar_senha",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.configuracao,
                                "alterar_senha",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.configuracao, "alterar_senha", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" Alterar senha de acesso\n                        ")
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "form-control",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.configuracao.alterar_senha,
                    expression: "configuracao.alterar_senha"
                  }
                ],
                attrs: { error: _vm.errors.usu_senha_atual }
              },
              [
                _c("label", { attrs: { for: "usu_senha_atual" } }, [
                  _vm._v("Senha Atual *")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.configuracao.usu_senha_atual,
                      expression: "configuracao.usu_senha_atual"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "password", id: "usu_senha_atual" },
                  domProps: { value: _vm.configuracao.usu_senha_atual },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.configuracao,
                        "usu_senha_atual",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "form-control",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.configuracao.alterar_senha,
                    expression: "configuracao.alterar_senha"
                  }
                ],
                attrs: { error: _vm.errors.usu_senha }
              },
              [
                _c("label", { attrs: { for: "usu_senha" } }, [
                  _vm._v("Nova Senha *")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.configuracao.usu_senha,
                      expression: "configuracao.usu_senha"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "password", id: "usu_senha" },
                  domProps: { value: _vm.configuracao.usu_senha },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.configuracao,
                        "usu_senha",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "form-control",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.configuracao.alterar_senha,
                    expression: "configuracao.alterar_senha"
                  }
                ],
                attrs: { error: _vm.errors.usu_senha_confirmacao }
              },
              [
                _c("label", { attrs: { for: "usu_senha_confirmacao" } }, [
                  _vm._v("Confirme sua Nova Senha *")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.configuracao.usu_senha_confirmacao,
                      expression: "configuracao.usu_senha_confirmacao"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "password", id: "usu_senha_confirmacao" },
                  domProps: { value: _vm.configuracao.usu_senha_confirmacao },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.configuracao,
                        "usu_senha_confirmacao",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "submit",
                staticClass: "btn btn-primary",
                attrs: { type: "submit", disabled: "" }
              },
              [_vm._v("Salvar")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-default",
                attrs: { href: _vm.baseUrl("/painel") }
              },
              [_vm._v("Voltar")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("h1", [_vm._v("Configurações")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Fechar"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-51be1ec5", module.exports)
  }
}

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(420)
/* template */
var __vue_template__ = __webpack_require__(421)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/ConfiguracaoCadastroUsuario.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ab30044e", Component.options)
  } else {
    hotAPI.reload("data-v-ab30044e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            configuracao: {
                alterar_senha: false
            },
            errors: {},
            showSuccessMsg: false
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        Loading.show();

        // Mensagem de sucesso ao salvar
        var successMsg = window.location.search.split('success=')[1];
        this.showSuccessMsg = successMsg ? true : false;

        Loading.hide();
        $(this.$refs.submit).prop("disabled", false);
    },

    methods: {
        save: function save() {
            var _this = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            var data = $.extend({}, this.configuracao);

            if (this.configuracao.alterar_senha === "true") {
                this.configuracao.alterar_senha = true;
            }

            var promise = axios({
                method: 'post',
                url: '/painel/ajax/configuracao',
                data: data
            });

            promise.then(function (response) {
                window.location.href = _this.baseUrl('/painel/configuracoes?success=1');
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this.$refs.submit).prop("disabled", false);
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm.showSuccessMsg
      ? _c(
          "div",
          {
            staticClass: "alert alert-success alert-dismissible",
            attrs: { role: "alert" }
          },
          [
            _vm._m(1),
            _vm._v(" "),
            _c("span", [_vm._v("Configurações atualizadas com sucesso.")])
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "form",
          {
            attrs: { role: "form", "accept-charset": "UTF-8" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.save($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "checkbox" }, [
                _c("label", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.configuracao.alterar_senha,
                        expression: "configuracao.alterar_senha"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.configuracao.alterar_senha)
                        ? _vm._i(_vm.configuracao.alterar_senha, null) > -1
                        : _vm.configuracao.alterar_senha
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.configuracao.alterar_senha,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.configuracao,
                                "alterar_senha",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.configuracao,
                                "alterar_senha",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.configuracao, "alterar_senha", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" Alterar senha de acesso\n                        ")
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "form-control",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.configuracao.alterar_senha,
                    expression: "configuracao.alterar_senha"
                  }
                ],
                attrs: { error: _vm.errors.usu_senha_atual }
              },
              [
                _c("label", { attrs: { for: "usu_senha_atual" } }, [
                  _vm._v("Senha Atual *")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.configuracao.usu_senha_atual,
                      expression: "configuracao.usu_senha_atual"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "password", id: "usu_senha_atual" },
                  domProps: { value: _vm.configuracao.usu_senha_atual },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.configuracao,
                        "usu_senha_atual",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "form-control",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.configuracao.alterar_senha,
                    expression: "configuracao.alterar_senha"
                  }
                ],
                attrs: { error: _vm.errors.usu_senha }
              },
              [
                _c("label", { attrs: { for: "usu_senha" } }, [
                  _vm._v("Nova Senha *")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.configuracao.usu_senha,
                      expression: "configuracao.usu_senha"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "password", id: "usu_senha" },
                  domProps: { value: _vm.configuracao.usu_senha },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.configuracao,
                        "usu_senha",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "form-control",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.configuracao.alterar_senha,
                    expression: "configuracao.alterar_senha"
                  }
                ],
                attrs: { error: _vm.errors.usu_senha_confirmacao }
              },
              [
                _c("label", { attrs: { for: "usu_senha_confirmacao" } }, [
                  _vm._v("Confirme sua Nova Senha *")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.configuracao.usu_senha_confirmacao,
                      expression: "configuracao.usu_senha_confirmacao"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "password", id: "usu_senha_confirmacao" },
                  domProps: { value: _vm.configuracao.usu_senha_confirmacao },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.configuracao,
                        "usu_senha_confirmacao",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "submit",
                staticClass: "btn btn-primary",
                attrs: { type: "submit", disabled: "" }
              },
              [_vm._v("Salvar")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-default",
                attrs: { href: _vm.baseUrl("/painel") }
              },
              [_vm._v("Voltar")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("h1", [_vm._v("Configurações")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "alert",
          "aria-label": "Fechar"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ab30044e", module.exports)
  }
}

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(423)
/* template */
var __vue_template__ = __webpack_require__(424)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/ConfiguracaoUsuarios.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4af620de", Component.options)
  } else {
    hotAPI.reload("data-v-4af620de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 423 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



Vue.component('usuario-col-data', {
    props: ['data'],
    template: '<abbr :title="dateFull">{{ dateAbbr }}</abbr>',
    computed: {
        dateFull: function dateFull() {
            return moment(this.data.usu_data_cadastro).format('DD/MM/YYYY HH:mm');
        },
        dateAbbr: function dateAbbr() {
            return moment(this.data.usu_data_cadastro).format('DD/MM/YYYY');
        }
    }
});

Vue.component('usuario-col-excluir', {
    props: ['data'],
    template: '<a href="#" class="text-danger btn-remove" @click="remove(data.usuario_id)">Excluir</a>',
    methods: {
        remove: function remove(id) {
            if (!confirm('Tem certeza que deseja remover o usuário ' + this.data.usu_login + '?')) return;

            var vm = this;
            Loading.show();

            axios.post('painel/ajax/configuracao/usuario/' + this.data.usuario_id, { _method: 'DELETE' }).then(function (response) {
                window.location.reload();
            }).catch(function (error) {
                if (error.response) {
                    var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                    alert(msg);
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
            });
        }
    }
});

Vue.component('usuario-col-edit', {
    props: ['data'],
    template: '<a href="#" class="text-primary" data-toggle="modal" data-target="#modalEditarUsuario" @click="edit(data.usuario_id, data.usu_login)">Editar</a>',
    methods: {
        edit: function edit(id, login) {
            document.getElementById('user_id').innerHTML = id;
            document.getElementById('user_login').innerHTML = login;

            axios.get('/painel/ajax/usuario/' + id).then(function (response) {

                if (response.data.data.privilegio_licitacoes) document.getElementById("privilegios[0]").checked = true;else document.getElementById("privilegios[0]").checked = false;

                if (response.data.data.privilegio_noticias) document.getElementById("privilegios[1]").checked = true;else document.getElementById("privilegios[1]").checked = false;

                if (response.data.data.privilegio_servicos) document.getElementById("privilegios[2]").checked = true;else document.getElementById("privilegios[2]").checked = false;

                if (response.data.data.privilegio_informacao) document.getElementById("privilegios[3]").checked = true;else document.getElementById("privilegios[3]").checked = false;

                if (response.data.data.privilegio_editais) document.getElementById("privilegios[4]").checked = true;else document.getElementById("privilegios[4]").checked = false;

                if (response.data.data.privilegio_esic) document.getElementById("privilegios[5]").checked = true;else document.getElementById("privilegios[5]").checked = false;

                if (response.data.data.privilegio_ouvidoria) document.getElementById("privilegios[6]").checked = true;else document.getElementById("privilegios[6]").checked = false;
            }).catch(function (error) {
                Loading.hide();
                alert('Não foi possível carregar o recurso informado.');
            });
        }
    }
});

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            privilegios: [' Licitações e contratos', ' Notícias', ' Serviços', ' Acesso à informação', ' Editais', ' E-sic', ' Ouvidoria'],
            isAllSelected: false,
            selectedPrivilegios: [],
            situacoes: {
                'A': 'Ativo',
                'P': 'Pendente'
            },
            usuario: {
                usu_login: "",
                usu_login_confirmacao: ""
            },
            errors: {},
            columns: ['usu_login',
            //'usu_situacao_cadastro',
            'usu_data_cadastro', 'edit', 'excluir'],
            options: {
                skin: 'table-striped table-hover',
                columnsClasses: {
                    'usu_login': '',
                    //'usu_situacao_cadastro': 'col-situacao',
                    'usu_data_cadastro': 'col-data',
                    'edit': 'col-actions',
                    'excluir': 'col-actions'
                },
                headings: {
                    'usu_login': 'Login',
                    //'usu_situacao_cadastro': 'Situação',
                    'usu_data_cadastro': 'Data',
                    'edit': ''
                },
                texts: this.vueTableTexts(),
                filterable: false,
                sortable: ['usu_login',
                //'usu_situacao_cadastro',
                'usu_data_cadastro'],
                orderBy: {
                    ascending: true,
                    column: 'usu_login'
                },
                templates: {
                    usu_data_cadastro: 'usuario-col-data',
                    edit: 'usuario-col-edit',
                    excluir: 'usuario-col-excluir'
                },
                params: {
                    table: true
                },
                responseAdapter: function (resp) {
                    //                        let data = resp.data.items;
                    //
                    //                        for (var i in data) {
                    //                            if(data[i].pub_status && this.status[data[i].pub_status]) {
                    //                                data[i].pub_status = this.status[data[i].pub_status];
                    //                            }
                    //                        }

                    return {
                        data: resp.data.items,
                        count: resp.data.count
                    };
                }.bind(this)
            }
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        // Impedir copiar/colar nos campos de confirmação
        $("#usu_login_confirmacao").bind("cut copy paste", function (e) {
            e.preventDefault();
        });
    },

    methods: {
        selectAllModalEditar: function selectAllModalEditar() {

            if (document.getElementById("privilegiosAllModalEditar").checked) {
                document.getElementById("privilegios[0]").checked = true;
                document.getElementById("privilegios[1]").checked = true;
                document.getElementById("privilegios[2]").checked = true;
                document.getElementById("privilegios[3]").checked = true;
                document.getElementById("privilegios[4]").checked = true;
                document.getElementById("privilegios[5]").checked = true;
                document.getElementById("privilegios[6]").checked = true;
            } else {

                document.getElementById("privilegios[0]").checked = false;
                document.getElementById("privilegios[1]").checked = false;
                document.getElementById("privilegios[2]").checked = false;
                document.getElementById("privilegios[3]").checked = false;
                document.getElementById("privilegios[4]").checked = false;
                document.getElementById("privilegios[5]").checked = false;
                document.getElementById("privilegios[6]").checked = false;
            }
        },
        selectAllprivilegios: function selectAllprivilegios() {
            if (this.isAllSelected) {

                this.selectedPrivilegios = [];
                this.isAllSelected = false;
            } else {

                this.selectedPrivilegios = [];

                for (var privilegio in this.privilegios) {
                    this.selectedPrivilegios.push(this.privilegios[privilegio]);
                }

                this.isAllSelected = true;
            }
        },
        select: function select() {
            if (this.selectedPrivilegios.length !== this.privilegios.length) {
                this.isAllSelected = false;
            } else {
                this.isAllSelected = true;
            }
        },
        fetch: function fetch() {
            this.$refs.table.setFilter(JSON.stringify(this.filters));
        },
        edit_usuario: function edit_usuario() {
            var _this = this;

            var vm = this;
            this.errors = {};

            var id = document.getElementById('user_id').innerHTML;

            var formData = new FormData();

            for (var i = 0; i < 7; i++) {
                var privilegio = this.privilegios[i];
                if (document.getElementById('privilegios[' + i + ']').checked) formData.append('privilegios[' + i + ']', privilegio);
            }

            var promise = axios({
                method: 'post',
                url: '/painel/ajax/editar/usuario/' + id,
                data: formData
            });

            promise.then(function (response) {
                _this.fetch();
                $("#modalEditarUsuario").modal('hide');

                Loading.hide();
                $(_this.$refs.submit).prop("disabled", false);

                _this.usuario.usu_login = "";
                _this.usuario.usu_login_confirmacao = "";
                window.location.reload();
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this.$refs.submit).prop("disabled", false);
            });
        },
        save: function save() {
            var _this2 = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            var formData = new FormData();
            formData.append('usu_login', this.usuario.usu_login);
            formData.append('usu_login_confirmacao', this.usuario.usu_login_confirmacao);

            for (var i = 0; i < this.selectedPrivilegios.length; i++) {
                var privilegio = this.selectedPrivilegios[i];
                formData.append('privilegios[' + i + ']', privilegio);
            }

            var promise = axios({
                method: 'post',
                url: '/painel/ajax/configuracao/usuario',
                data: formData
            });

            promise.then(function (response) {
                _this2.fetch();
                $("#modalCadastro").modal('hide');

                Loading.hide();
                $(_this2.$refs.submit).prop("disabled", false);

                _this2.usuario.usu_login = "";
                _this2.usuario.usu_login_confirmacao = "";
                window.location.reload();
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this2.$refs.submit).prop("disabled", false);
            });
        }
    },
    watch: {
        'usuario.usu_login': function usuarioUsu_login(value) {
            this.usuario.usu_login = value.toLowerCase();
        },
        'usuario.usu_login_confirmacao': function usuarioUsu_login_confirmacao(value) {
            this.usuario.usu_login_confirmacao = value.toLowerCase();
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "panel panel-form" },
      [
        _c("v-server-table", {
          ref: "table",
          attrs: {
            url: "/painel/ajax/configuracao/usuario",
            columns: _vm.columns,
            options: _vm.options
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "modalCadastro",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modalCadastroLabel"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    attrs: { role: "form", "accept-charset": "UTF-8" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.save($event)
                      }
                    }
                  },
                  [
                    _c(
                      "form-control",
                      { attrs: { error: _vm.errors.usu_login } },
                      [
                        _c("label", { attrs: { for: "usu_login" } }, [
                          _vm._v("E-mail *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.usuario.usu_login,
                              expression: "usuario.usu_login"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            id: "usu_login",
                            autocomplete: "off"
                          },
                          domProps: { value: _vm.usuario.usu_login },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.usuario,
                                "usu_login",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "form-control",
                      { attrs: { error: _vm.errors.usu_login_confirmacao } },
                      [
                        _c(
                          "label",
                          { attrs: { for: "usu_login_confirmacao" } },
                          [_vm._v("Confirme o e-mail *")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.usuario.usu_login_confirmacao,
                              expression: "usuario.usu_login_confirmacao"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            id: "usu_login_confirmacao",
                            autocomplete: "off"
                          },
                          domProps: {
                            value: _vm.usuario.usu_login_confirmacao
                          },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.usuario,
                                "usu_login_confirmacao",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "form-control",
                      { attrs: { error: _vm.errors.privilegios } },
                      [
                        _c("label", { attrs: { for: "privilegios" } }, [
                          _vm._v(
                            "Nível de Acesso * (Selecionar apenas o acesso específico para  o usuário)"
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                attrs: { type: "checkbox" },
                                domProps: { checked: _vm.isAllSelected },
                                on: { click: _vm.selectAllprivilegios }
                              }),
                              _vm._v(
                                " Selecionar Todos\n                                    "
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.selectedPrivilegios,
                                    expression: "selectedPrivilegios"
                                  }
                                ],
                                attrs: { type: "checkbox" },
                                domProps: {
                                  checked: _vm.isAllSelected,
                                  value: _vm.privilegios[0],
                                  checked: Array.isArray(
                                    _vm.selectedPrivilegios
                                  )
                                    ? _vm._i(
                                        _vm.selectedPrivilegios,
                                        _vm.privilegios[0]
                                      ) > -1
                                    : _vm.selectedPrivilegios
                                },
                                on: {
                                  click: _vm.select,
                                  change: function($event) {
                                    var $$a = _vm.selectedPrivilegios,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = _vm.privilegios[0],
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.selectedPrivilegios = $$a.concat(
                                            [$$v]
                                          ))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.selectedPrivilegios = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.selectedPrivilegios = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[0]))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.selectedPrivilegios,
                                    expression: "selectedPrivilegios"
                                  }
                                ],
                                attrs: { type: "checkbox" },
                                domProps: {
                                  checked: _vm.isAllSelected,
                                  value: _vm.privilegios[1],
                                  checked: Array.isArray(
                                    _vm.selectedPrivilegios
                                  )
                                    ? _vm._i(
                                        _vm.selectedPrivilegios,
                                        _vm.privilegios[1]
                                      ) > -1
                                    : _vm.selectedPrivilegios
                                },
                                on: {
                                  click: _vm.select,
                                  change: function($event) {
                                    var $$a = _vm.selectedPrivilegios,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = _vm.privilegios[1],
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.selectedPrivilegios = $$a.concat(
                                            [$$v]
                                          ))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.selectedPrivilegios = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.selectedPrivilegios = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[1]))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.selectedPrivilegios,
                                    expression: "selectedPrivilegios"
                                  }
                                ],
                                attrs: { type: "checkbox" },
                                domProps: {
                                  checked: _vm.isAllSelected,
                                  value: _vm.privilegios[2],
                                  checked: Array.isArray(
                                    _vm.selectedPrivilegios
                                  )
                                    ? _vm._i(
                                        _vm.selectedPrivilegios,
                                        _vm.privilegios[2]
                                      ) > -1
                                    : _vm.selectedPrivilegios
                                },
                                on: {
                                  click: _vm.select,
                                  change: function($event) {
                                    var $$a = _vm.selectedPrivilegios,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = _vm.privilegios[2],
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.selectedPrivilegios = $$a.concat(
                                            [$$v]
                                          ))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.selectedPrivilegios = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.selectedPrivilegios = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[2]))
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.selectedPrivilegios,
                                    expression: "selectedPrivilegios"
                                  }
                                ],
                                attrs: { type: "checkbox" },
                                domProps: {
                                  checked: _vm.isAllSelected,
                                  value: _vm.privilegios[3],
                                  checked: Array.isArray(
                                    _vm.selectedPrivilegios
                                  )
                                    ? _vm._i(
                                        _vm.selectedPrivilegios,
                                        _vm.privilegios[3]
                                      ) > -1
                                    : _vm.selectedPrivilegios
                                },
                                on: {
                                  click: _vm.select,
                                  change: function($event) {
                                    var $$a = _vm.selectedPrivilegios,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = _vm.privilegios[3],
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.selectedPrivilegios = $$a.concat(
                                            [$$v]
                                          ))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.selectedPrivilegios = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.selectedPrivilegios = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[3]))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.selectedPrivilegios,
                                    expression: "selectedPrivilegios"
                                  }
                                ],
                                attrs: { type: "checkbox" },
                                domProps: {
                                  checked: _vm.isAllSelected,
                                  value: _vm.privilegios[4],
                                  checked: Array.isArray(
                                    _vm.selectedPrivilegios
                                  )
                                    ? _vm._i(
                                        _vm.selectedPrivilegios,
                                        _vm.privilegios[4]
                                      ) > -1
                                    : _vm.selectedPrivilegios
                                },
                                on: {
                                  click: _vm.select,
                                  change: function($event) {
                                    var $$a = _vm.selectedPrivilegios,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = _vm.privilegios[4],
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.selectedPrivilegios = $$a.concat(
                                            [$$v]
                                          ))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.selectedPrivilegios = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.selectedPrivilegios = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[4]))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.selectedPrivilegios,
                                    expression: "selectedPrivilegios"
                                  }
                                ],
                                attrs: { type: "checkbox" },
                                domProps: {
                                  checked: _vm.isAllSelected,
                                  value: _vm.privilegios[5],
                                  checked: Array.isArray(
                                    _vm.selectedPrivilegios
                                  )
                                    ? _vm._i(
                                        _vm.selectedPrivilegios,
                                        _vm.privilegios[5]
                                      ) > -1
                                    : _vm.selectedPrivilegios
                                },
                                on: {
                                  click: _vm.select,
                                  change: function($event) {
                                    var $$a = _vm.selectedPrivilegios,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = _vm.privilegios[5],
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.selectedPrivilegios = $$a.concat(
                                            [$$v]
                                          ))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.selectedPrivilegios = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.selectedPrivilegios = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[5]))
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.selectedPrivilegios,
                                    expression: "selectedPrivilegios"
                                  }
                                ],
                                attrs: { type: "checkbox" },
                                domProps: {
                                  checked: _vm.isAllSelected,
                                  value: _vm.privilegios[6],
                                  checked: Array.isArray(
                                    _vm.selectedPrivilegios
                                  )
                                    ? _vm._i(
                                        _vm.selectedPrivilegios,
                                        _vm.privilegios[6]
                                      ) > -1
                                    : _vm.selectedPrivilegios
                                },
                                on: {
                                  click: _vm.select,
                                  change: function($event) {
                                    var $$a = _vm.selectedPrivilegios,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = _vm.privilegios[6],
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.selectedPrivilegios = $$a.concat(
                                            [$$v]
                                          ))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.selectedPrivilegios = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.selectedPrivilegios = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[6]))
                            ])
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        ref: "submit",
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Salvar")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button", "data-dismiss": "modal" }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ],
                  1
                )
              ])
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "modalEditarUsuario",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modalCadastroLabel"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("span", {
                  staticStyle: { display: "none" },
                  attrs: { id: "user_id" }
                }),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    attrs: { role: "form", "accept-charset": "UTF-8" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.edit_usuario($event)
                      }
                    }
                  },
                  [
                    _c(
                      "form-control",
                      { attrs: { error: _vm.errors.privilegios } },
                      [
                        _c("label", { attrs: { for: "privilegios" } }, [
                          _vm._v(
                            "Nível de Acesso * (Selecionar apenas o acesso específico para  o usuário)"
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                attrs: {
                                  type: "checkbox",
                                  id: "privilegiosAllModalEditar"
                                },
                                on: { click: _vm.selectAllModalEditar }
                              }),
                              _vm._v(
                                " Selecionar Todos\n                                    "
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                attrs: {
                                  type: "checkbox",
                                  value: "privilegios[0]",
                                  id: "privilegios[0]"
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[0]))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                attrs: {
                                  type: "checkbox",
                                  value: "privilegios[1]",
                                  id: "privilegios[1]"
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[1]))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                attrs: {
                                  type: "checkbox",
                                  value: "privilegios[2]",
                                  id: "privilegios[2]"
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[2]))
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                attrs: {
                                  type: "checkbox",
                                  value: "privilegios[3]",
                                  id: "privilegios[3]"
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[3]))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                attrs: {
                                  type: "checkbox",
                                  value: "privilegios[4]",
                                  id: "privilegios[4]"
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[4]))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                attrs: {
                                  type: "checkbox",
                                  value: "privilegios[5]",
                                  id: "privilegios[5]"
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[5]))
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-4" }, [
                            _c("label", [
                              _c("input", {
                                attrs: {
                                  type: "checkbox",
                                  value: "privilegios[6]",
                                  id: "privilegios[6]"
                                }
                              }),
                              _vm._v(_vm._s(_vm.privilegios[6]))
                            ])
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        ref: "submit",
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Salvar")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default",
                        attrs: { type: "button", "data-dismiss": "modal" }
                      },
                      [_vm._v("Cancelar")]
                    )
                  ],
                  1
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-mairi pull-right",
          attrs: {
            type: "button",
            "data-toggle": "modal",
            "data-target": "#modalCadastro"
          }
        },
        [_vm._v("\n            Cadastrar usuário\n        ")]
      ),
      _vm._v(" "),
      _c("h1", [_vm._v("Usuários")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Fechar"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c(
        "h4",
        { staticClass: "modal-title", attrs: { id: "modalCadastroLabel" } },
        [_vm._v("Cadastrar Usuário")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("p", { staticClass: "text-muted" }, [
        _c("i", { staticClass: "fa fa-info-circle fa-fw" }),
        _vm._v(
          " A senha do usuário será gerada\n                                automaticamente pelo sistema e enviada para o e-mail cadastrado.\n                            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Fechar"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      ),
      _vm._v(" "),
      _c(
        "h4",
        { staticClass: "modal-title", attrs: { id: "modalCadastroLabel" } },
        [_vm._v("Editar Usuário "), _c("span", { attrs: { id: "user_login" } })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("p", { staticClass: "text-muted" }, [
        _c("i", { staticClass: "fa fa-info-circle fa-fw" }),
        _vm._v(
          " A senha do usuário será gerada\n                                automaticamente pelo sistema e enviada para o e-mail cadastrado.\n                            "
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4af620de", module.exports)
  }
}

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(426)
/* template */
var __vue_template__ = __webpack_require__(427)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/SolicitanteAcesso.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38bea25c", Component.options)
  } else {
    hotAPI.reload("data-v-38bea25c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource', 'nome_entidade'],
    data: function data() {
        return {
            usuario: {},
            errors: {},
            errorMsg: ""
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {},

    methods: {
        login: function login() {
            var _this = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            axios.post('/ajax/login', this.usuario).then(function (response) {
                window.location.href = _this.baseUrl('/esic');
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        _this.errorMsg = msg;
                    }
                } else {
                    _this.errorMsg = "Ocorreu um erro ao tentar processar sua solicitação.";
                }

                Loading.hide();
                $(_this.$refs.submit).prop("disabled", false);
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h4", [_vm._v("Seja bem vindo!")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n                O E-Sic foi criado em conformidade com a Lei nº 12.527/11 para atender as pessoas físicas e\n                jurídicas que queiram fazer requerimentos à " +
              _vm._s(_vm.nome_entidade) +
              ".\n            "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n                Para ter acesso ao sistema, é necessário que o requerente faça seu cadastro, podendo assim, através\n                de sua área pessoal, cadastrar requerimentos, entrar com recursos, acompanhar o andamento de suas\n                solicitações e obter o retorno através do próprio sistema.\n            "
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n                O E-Sic tem por finalidade criar um banco de dados para interação entre a " +
              _vm._s(_vm.nome_entidade) +
              "\n                e o cidadão visando maiores esclarecimentos ao redor da administração pública.\n            "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "panel panel-form" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errorMsg,
                    expression: "errorMsg"
                  }
                ],
                staticClass: "alert alert-danger",
                attrs: { role: "alert" }
              },
              [_vm._v(_vm._s(_vm.errorMsg))]
            ),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { role: "form", "accept-charset": "UTF-8" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.login($event)
                  }
                }
              },
              [
                _c("form-control", { attrs: { error: _vm.errors.usu_login } }, [
                  _c("label", { attrs: { for: "usu_login" } }, [
                    _vm._v("Login")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.usuario.usu_login,
                        expression: "usuario.usu_login"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "usu_login" },
                    domProps: { value: _vm.usuario.usu_login },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.usuario, "usu_login", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("form-control", { attrs: { error: _vm.errors.usu_senha } }, [
                  _c("label", { attrs: { for: "usu_senha" } }, [
                    _vm._v("Senha")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.usuario.usu_senha,
                        expression: "usuario.usu_senha"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "password", id: "usu_senha" },
                    domProps: { value: _vm.usuario.usu_senha },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.usuario, "usu_senha", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "a",
                    { attrs: { href: _vm.baseUrl("/esic/recuperar-senha") } },
                    [_vm._v("Esqueci minha senha")]
                  ),
                  _vm._v(" |\n                            "),
                  _c(
                    "a",
                    { attrs: { href: _vm.baseUrl("/esic/recuperar-senha") } },
                    [_vm._v("Não consigo acessar o E-Sic")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    ref: "submit",
                    staticClass: "btn btn-mairi",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Entrar")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "alert alert-mairi",
                    staticStyle: { margin: "15px 0 0" }
                  },
                  [
                    _vm._v(
                      "\n                            Não possui acesso ao E-Sic? Cadastre-se "
                    ),
                    _c(
                      "a",
                      { attrs: { href: _vm.baseUrl("/esic/cadastro") } },
                      [_vm._v("aqui")]
                    ),
                    _vm._v("!\n                        ")
                  ]
                )
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h3", { staticClass: "panel-title" }, [_vm._v("Acesso ao E-Sic")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-38bea25c", module.exports)
  }
}

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(429)
/* template */
var __vue_template__ = __webpack_require__(430)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/SolicitanteCadastro.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7eb6fe5f", Component.options)
  } else {
    hotAPI.reload("data-v-7eb6fe5f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 429 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource'],
    data: function data() {
        return {
            tipos_instituicao: [],
            areas_atuacao: [],
            estados: [],
            cidades: [],
            paises: [],
            solicitante: {
                sol_tipo_pessoa: "F",
                sol_cpf: "",
                sol_cnpj: "",
                sol_doc_identificacao: false,
                sol_estrangeiro: false,
                end_cep: "",
                end_logradouro: null,
                end_complemento: null,
                end_bairro: null,
                sol_telefone: "",
                sol_email: null
            },
            errors: {},
            needsUpdateCep: false,
            success: false
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        var _this = this;

        Loading.show();

        // Máscaras
        $("#sol_cpf").mask('000.000.000-00', { clearIfNotMatch: false });
        $("#sol_cnpj").mask('00.000.000/0000-00', { clearIfNotMatch: false });
        $("#end_cep").mask('00000-000', { clearIfNotMatch: false });
        $("#sol_telefone").mask('(00) 0000-00009', { clearIfNotMatch: false });

        // Impedir copiar/colar nos campos de confirmação
        $("#sol_email_confirmacao, #usu_senha_confirmacao").bind("cut copy paste", function (e) {
            e.preventDefault();
        });

        axios.all([axios.get('/ajax/tipo-instituicao'), axios.get('/ajax/area-atuacao'), axios.get('/ajax/estado'), axios.get('/ajax/pais')]).then(axios.spread(function (respTipos, respAreas, respEstados, respPaises) {
            _this.tipos_instituicao = respTipos.data.data;
            _this.areas_atuacao = respAreas.data.data;
            _this.estados = respEstados.data.data;
            _this.paises = respPaises.data.data;

            // Tirar "Brasil" da lista de paises
            for (var i = _this.paises.length - 1; i >= 0; i--) {
                if (_this.paises[i].pai_nome == "Brasil") {
                    _this.paises.splice(i, 1);
                    break;
                }
            }

            Loading.hide();
            $(_this.$refs.submit).prop("disabled", false);
        })).catch(function () {
            Loading.hide();
            alert("Ocorreu um erro ao tentar carregar as informações necessárias para o cadastro. Por favor, atualize sua página e tente novamente.");
        });
    },

    methods: {
        save: function save() {
            var _this2 = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            // Transformar dados
            var data = $.extend({}, this.solicitante);

            data.sol_cpf = data.sol_cpf.replace(/[^0-9]/g, "");
            data.sol_cnpj = data.sol_cnpj.replace(/[^0-9]/g, "");
            data.end_cep = data.end_cep.replace(/[^0-9]/g, "");
            data.sol_telefone = data.sol_telefone.replace(/[^0-9]/g, "");

            axios.post('/ajax/solicitante', data).then(function (response) {
                _this2.success = true;
                Loading.hide();
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this2.$refs.submit).prop("disabled", false);
            });
        },
        checkCep: function checkCep() {
            var _this3 = this;

            if (this.needsUpdateCep) {
                this.needsUpdateCep = false;
                var cep = this.solicitante.end_cep.replace(/[^0-9]/g, "");

                if (cep.length == 8) {
                    $(this.$refs.submit).prop("disabled", true);
                    Loading.show();

                    $.getJSON("//viacep.com.br/ws/" + cep + "/json/?callback=?", function (response) {
                        if (!("erro" in response)) {
                            response.complemento = response.complemento.replace(/^\((.*)\)$/g, "$1");

                            _this3.cidades = [{ cid_codigo_ibge: response.ibge, cid_nome: response.localidade }];

                            _this3.solicitante.est_sigla = response.uf;
                            _this3.solicitante.cid_codigo_ibge = response.ibge;

                            $("#est_sigla, #cid_codigo_ibge").prop('disabled', true);

                            _this3.solicitante.end_logradouro = response.logradouro;
                            _this3.solicitante.end_complemento = response.complemento;
                            _this3.solicitante.end_bairro = response.bairro;
                        } else {
                            alert("Não foi possível buscar os dados para o CEP informado.");
                        }

                        Loading.hide();
                        $(_this3.$refs.submit).prop("disabled", false);
                    });
                } else {
                    this.solicitante.est_sigla = "";
                    this.solicitante.cid_codigo_ibge = "";
                    this.cidades = [];
                    $("#est_sigla, #cid_codigo_ibge").prop('disabled', false);
                }
            }
        },
        loadCidades: function loadCidades() {
            var _this4 = this;

            if (!this.solicitante.est_sigla) {
                this.cidades = [];
                return;
            }

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            axios.get('/ajax/estado/' + this.solicitante.est_sigla + '/cidades').then(function (response) {
                _this4.cidades = response.data.data;
                Loading.hide();
                $(_this4.$refs.submit).prop("disabled", false);
            }).catch(function (error) {
                alert("Ocorreu um erro ao tentar listar as cidades. Por favor, atualize sua página e tente novamente.");
                Loading.hide();
                $(_this4.$refs.submit).prop("disabled", false);
            });
        }
    },
    watch: {
        'solicitante.sol_email': function solicitanteSol_email(value) {
            this.solicitante.sol_email = value.toLowerCase();
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.success,
                expression: "success"
              }
            ],
            staticClass: "alert alert-success",
            attrs: { role: "alert" }
          },
          [
            _c("h4", [_vm._v("Seu cadastro foi realizado com sucesso!")]),
            _vm._v("\n                Agora, acesse o e-mail "),
            _c("strong", [_vm._v(_vm._s(_vm.solicitante.sol_email))]),
            _vm._v(
              " e confirme seu cadastro clicando no link enviado.\n            "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.success,
                expression: "!success"
              }
            ]
          },
          [
            _c(
              "form",
              {
                attrs: { role: "form", "accept-charset": "UTF-8" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.save($event)
                  }
                }
              },
              [
                _c(
                  "form-control",
                  { attrs: { error: _vm.errors.sol_tipo_pessoa } },
                  [
                    _c("label", [_vm._v("Tipo de Pessoa")]),
                    _vm._v(" "),
                    _c("div", [
                      _c("label", { staticClass: "radio-inline" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.solicitante.sol_tipo_pessoa,
                              expression: "solicitante.sol_tipo_pessoa"
                            }
                          ],
                          attrs: { type: "radio", value: "F" },
                          domProps: {
                            checked: _vm._q(
                              _vm.solicitante.sol_tipo_pessoa,
                              "F"
                            )
                          },
                          on: {
                            change: function($event) {
                              _vm.$set(_vm.solicitante, "sol_tipo_pessoa", "F")
                            }
                          }
                        }),
                        _vm._v(" Física\n                            ")
                      ]),
                      _vm._v(" "),
                      _c("label", { staticClass: "radio-inline" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.solicitante.sol_tipo_pessoa,
                              expression: "solicitante.sol_tipo_pessoa"
                            }
                          ],
                          attrs: { type: "radio", value: "J" },
                          domProps: {
                            checked: _vm._q(
                              _vm.solicitante.sol_tipo_pessoa,
                              "J"
                            )
                          },
                          on: {
                            change: function($event) {
                              _vm.$set(_vm.solicitante, "sol_tipo_pessoa", "J")
                            }
                          }
                        }),
                        _vm._v("Jurídica\n                            ")
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-8" },
                    [
                      _c(
                        "form-control",
                        { attrs: { error: _vm.errors.sol_nome } },
                        [
                          _c(
                            "label",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.solicitante.sol_tipo_pessoa == "F",
                                  expression:
                                    "solicitante.sol_tipo_pessoa == 'F'"
                                }
                              ],
                              attrs: { for: "sol_nome" }
                            },
                            [_vm._v("Nome Completo *")]
                          ),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.solicitante.sol_tipo_pessoa == "J",
                                  expression:
                                    "solicitante.sol_tipo_pessoa == 'J'"
                                }
                              ],
                              attrs: { for: "sol_nome" }
                            },
                            [_vm._v("Razão Social *")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.sol_nome,
                                expression: "solicitante.sol_nome"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "sol_nome" },
                            domProps: { value: _vm.solicitante.sol_nome },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "sol_nome",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-4" },
                    [
                      _c(
                        "form-control",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.solicitante.sol_tipo_pessoa == "F" &&
                                !_vm.solicitante.sol_doc_identificacao,
                              expression:
                                "solicitante.sol_tipo_pessoa == 'F' && !solicitante.sol_doc_identificacao"
                            }
                          ],
                          attrs: { error: _vm.errors.sol_cpf }
                        },
                        [
                          _c("label", { attrs: { for: "sol_cpf" } }, [
                            _vm._v("CPF *")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.sol_cpf,
                                expression: "solicitante.sol_cpf"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "sol_cpf" },
                            domProps: { value: _vm.solicitante.sol_cpf },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "sol_cpf",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "form-control",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.solicitante.sol_tipo_pessoa == "J",
                              expression: "solicitante.sol_tipo_pessoa == 'J'"
                            }
                          ],
                          attrs: { error: _vm.errors.sol_cnpj }
                        },
                        [
                          _c("label", { attrs: { for: "sol_cnpj" } }, [
                            _vm._v("CNPJ *")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.sol_cnpj,
                                expression: "solicitante.sol_cnpj"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "sol_cnpj" },
                            domProps: { value: _vm.solicitante.sol_cnpj },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "sol_cnpj",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.solicitante.sol_tipo_pessoa == "F",
                        expression: "solicitante.sol_tipo_pessoa == 'F'"
                      }
                    ],
                    staticClass: "form-group"
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "checkbox",
                        staticStyle: { "margin-top": "0" }
                      },
                      [
                        _c("label", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.sol_doc_identificacao,
                                expression: "solicitante.sol_doc_identificacao"
                              }
                            ],
                            attrs: { type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(
                                _vm.solicitante.sol_doc_identificacao
                              )
                                ? _vm._i(
                                    _vm.solicitante.sol_doc_identificacao,
                                    null
                                  ) > -1
                                : _vm.solicitante.sol_doc_identificacao
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.solicitante.sol_doc_identificacao,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.solicitante,
                                        "sol_doc_identificacao",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.solicitante,
                                        "sol_doc_identificacao",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(
                                    _vm.solicitante,
                                    "sol_doc_identificacao",
                                    $$c
                                  )
                                }
                              }
                            }
                          }),
                          _vm._v(
                            " Cidadão não possui CPF\n                            "
                          )
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "form-control",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.solicitante.sol_tipo_pessoa == "F" &&
                          _vm.solicitante.sol_doc_identificacao,
                        expression:
                          "solicitante.sol_tipo_pessoa == 'F' && solicitante.sol_doc_identificacao"
                      }
                    ],
                    attrs: { error: _vm.errors.sol_tipo_doc_identificacao }
                  },
                  [
                    _c(
                      "label",
                      { attrs: { for: "sol_tipo_doc_identificacao" } },
                      [_vm._v("Tipo de Documento de Identificação *")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.solicitante.sol_tipo_doc_identificacao,
                          expression: "solicitante.sol_tipo_doc_identificacao"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "sol_tipo_doc_identificacao" },
                      domProps: {
                        value: _vm.solicitante.sol_tipo_doc_identificacao
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.solicitante,
                            "sol_tipo_doc_identificacao",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "form-control",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.solicitante.sol_tipo_pessoa == "F" &&
                          _vm.solicitante.sol_doc_identificacao,
                        expression:
                          "solicitante.sol_tipo_pessoa == 'F' && solicitante.sol_doc_identificacao"
                      }
                    ],
                    attrs: { error: _vm.errors.sol_numero_doc_identificacao }
                  },
                  [
                    _c(
                      "label",
                      { attrs: { for: "sol_numero_doc_identificacao" } },
                      [_vm._v("Número do Documento de Identificação *")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.solicitante.sol_numero_doc_identificacao,
                          expression: "solicitante.sol_numero_doc_identificacao"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "sol_numero_doc_identificacao"
                      },
                      domProps: {
                        value: _vm.solicitante.sol_numero_doc_identificacao
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.solicitante,
                            "sol_numero_doc_identificacao",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "form-control",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.solicitante.sol_tipo_pessoa == "F" &&
                          _vm.solicitante.sol_doc_identificacao,
                        expression:
                          "solicitante.sol_tipo_pessoa == 'F' && solicitante.sol_doc_identificacao"
                      }
                    ],
                    attrs: { error: _vm.errors.sol_orgao_doc_identificacao }
                  },
                  [
                    _c(
                      "label",
                      { attrs: { for: "sol_orgao_doc_identificacao" } },
                      [_vm._v("Órgão Expedidor *")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.solicitante.sol_orgao_doc_identificacao,
                          expression: "solicitante.sol_orgao_doc_identificacao"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "sol_orgao_doc_identificacao"
                      },
                      domProps: {
                        value: _vm.solicitante.sol_orgao_doc_identificacao
                      },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.solicitante,
                            "sol_orgao_doc_identificacao",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "form-control",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.solicitante.sol_tipo_pessoa == "F" &&
                          _vm.solicitante.sol_doc_identificacao,
                        expression:
                          "solicitante.sol_tipo_pessoa == 'F' && solicitante.sol_doc_identificacao"
                      }
                    ],
                    attrs: { error: _vm.errors.sol_termos_doc_identificacao }
                  },
                  [
                    _c("div", { staticClass: "checkbox" }, [
                      _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value:
                                _vm.solicitante.sol_termos_doc_identificacao,
                              expression:
                                "solicitante.sol_termos_doc_identificacao"
                            }
                          ],
                          attrs: { type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(
                              _vm.solicitante.sol_termos_doc_identificacao
                            )
                              ? _vm._i(
                                  _vm.solicitante.sol_termos_doc_identificacao,
                                  null
                                ) > -1
                              : _vm.solicitante.sol_termos_doc_identificacao
                          },
                          on: {
                            change: function($event) {
                              var $$a =
                                  _vm.solicitante.sol_termos_doc_identificacao,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.solicitante,
                                      "sol_termos_doc_identificacao",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.solicitante,
                                      "sol_termos_doc_identificacao",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(
                                  _vm.solicitante,
                                  "sol_termos_doc_identificacao",
                                  $$c
                                )
                              }
                            }
                          }
                        }),
                        _vm._v(
                          "\n                                Li e aceito os "
                        ),
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              "data-toggle": "modal",
                              "data-target": "#modalTermos"
                            }
                          },
                          [_vm._v("termos e condições")]
                        ),
                        _vm._v(
                          " para o cadastro sem CPF *\n                            "
                        )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "form-control",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.solicitante.sol_tipo_pessoa == "J",
                              expression: "solicitante.sol_tipo_pessoa == 'J'"
                            }
                          ],
                          attrs: { error: _vm.errors.sol_nome_representante }
                        },
                        [
                          _c(
                            "label",
                            { attrs: { for: "sol_nome_representante" } },
                            [_vm._v("Nome do Representante *")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.sol_nome_representante,
                                expression: "solicitante.sol_nome_representante"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "sol_nome_representante"
                            },
                            domProps: {
                              value: _vm.solicitante.sol_nome_representante
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "sol_nome_representante",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "form-control",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.solicitante.sol_tipo_pessoa == "J",
                              expression: "solicitante.sol_tipo_pessoa == 'J'"
                            }
                          ],
                          attrs: { error: _vm.errors.sol_cargo_representante }
                        },
                        [
                          _c(
                            "label",
                            { attrs: { for: "sol_cargo_representante" } },
                            [_vm._v("Cargo do Representante *")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.sol_cargo_representante,
                                expression:
                                  "solicitante.sol_cargo_representante"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "sol_cargo_representante"
                            },
                            domProps: {
                              value: _vm.solicitante.sol_cargo_representante
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "sol_cargo_representante",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "form-control",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.solicitante.sol_tipo_pessoa == "J",
                              expression: "solicitante.sol_tipo_pessoa == 'J'"
                            }
                          ],
                          attrs: { error: _vm.errors.tipo_instituicao_id }
                        },
                        [
                          _c(
                            "label",
                            { attrs: { for: "tipo_instituicao_id" } },
                            [_vm._v("Tipo de Instituição *")]
                          ),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.solicitante.tipo_instituicao_id,
                                  expression: "solicitante.tipo_instituicao_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { id: "tipo_instituicao_id" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.solicitante,
                                    "tipo_instituicao_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }),
                              _vm._v(" "),
                              _vm._l(_vm.tipos_instituicao, function(item) {
                                return [
                                  _c(
                                    "option",
                                    {
                                      domProps: {
                                        value: item.tipo_instituicao_id
                                      }
                                    },
                                    [_vm._v(_vm._s(item.tin_nome))]
                                  )
                                ]
                              })
                            ],
                            2
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "form-control",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.solicitante.sol_tipo_pessoa == "J",
                              expression: "solicitante.sol_tipo_pessoa == 'J'"
                            }
                          ],
                          attrs: { error: _vm.errors.tipo_area_atuacao_id }
                        },
                        [
                          _c(
                            "label",
                            { attrs: { for: "tipo_area_atuacao_id" } },
                            [_vm._v("Área de Atuação *")]
                          ),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.solicitante.tipo_area_atuacao_id,
                                  expression: "solicitante.tipo_area_atuacao_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { id: "tipo_area_atuacao_id" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.solicitante,
                                    "tipo_area_atuacao_id",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "" } }),
                              _vm._v(" "),
                              _vm._l(_vm.areas_atuacao, function(item) {
                                return [
                                  _c(
                                    "option",
                                    {
                                      domProps: {
                                        value: item.tipo_area_atuacao_id
                                      }
                                    },
                                    [_vm._v(_vm._s(item.taa_nome))]
                                  )
                                ]
                              })
                            ],
                            2
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.solicitante.sol_estrangeiro,
                          expression: "!solicitante.sol_estrangeiro"
                        }
                      ],
                      staticClass: "col-sm-4"
                    },
                    [
                      _c(
                        "form-control",
                        { attrs: { error: _vm.errors.end_cep } },
                        [
                          _c("label", { attrs: { for: "end_cep" } }, [
                            _vm._v("CEP *")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.end_cep,
                                expression: "solicitante.end_cep"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "end_cep",
                              autocomplete: "off"
                            },
                            domProps: { value: _vm.solicitante.end_cep },
                            on: {
                              change: function($event) {
                                _vm.needsUpdateCep = true
                              },
                              blur: _vm.checkCep,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "end_cep",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "div",
                    {
                      staticClass: "checkbox",
                      staticStyle: { "margin-top": "0" }
                    },
                    [
                      _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.solicitante.sol_estrangeiro,
                              expression: "solicitante.sol_estrangeiro"
                            }
                          ],
                          attrs: { type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(
                              _vm.solicitante.sol_estrangeiro
                            )
                              ? _vm._i(_vm.solicitante.sol_estrangeiro, null) >
                                -1
                              : _vm.solicitante.sol_estrangeiro
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.solicitante.sol_estrangeiro,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.solicitante,
                                      "sol_estrangeiro",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.solicitante,
                                      "sol_estrangeiro",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(
                                  _vm.solicitante,
                                  "sol_estrangeiro",
                                  $$c
                                )
                              }
                            }
                          }
                        }),
                        _vm._v(
                          "\n                                Cidadão não reside no Brasil\n                            "
                        )
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "form-control",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.solicitante.sol_estrangeiro,
                        expression: "solicitante.sol_estrangeiro"
                      }
                    ],
                    attrs: { error: _vm.errors.pais_id }
                  },
                  [
                    _c("label", { attrs: { for: "pais_id" } }, [
                      _vm._v("País")
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.solicitante.pais_id,
                            expression: "solicitante.pais_id"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "pais_id" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.solicitante,
                              "pais_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }),
                        _vm._v(" "),
                        _vm._l(_vm.paises, function(item) {
                          return [
                            _c(
                              "option",
                              { domProps: { value: item.pais_id } },
                              [_vm._v(_vm._s(item.pai_nome))]
                            )
                          ]
                        })
                      ],
                      2
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-sm-8 col-lg-10" },
                    [
                      _c(
                        "form-control",
                        { attrs: { error: _vm.errors.end_logradouro } },
                        [
                          _c("label", { attrs: { for: "end_logradouro" } }, [
                            _vm._v("Logradouro *")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.end_logradouro,
                                expression: "solicitante.end_logradouro"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "end_logradouro",
                              placeholder: "Rua, Avenida, Caminho, etc."
                            },
                            domProps: { value: _vm.solicitante.end_logradouro },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "end_logradouro",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-sm-4 col-lg-2" },
                    [
                      _c(
                        "form-control",
                        { attrs: { error: _vm.errors.end_numero } },
                        [
                          _c("label", { attrs: { for: "end_numero" } }, [
                            _vm._v("Número")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.end_numero,
                                expression: "solicitante.end_numero"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "end_numero" },
                            domProps: { value: _vm.solicitante.end_numero },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "end_numero",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "form-control",
                        { attrs: { error: _vm.errors.end_complemento } },
                        [
                          _c("label", { attrs: { for: "end_complemento" } }, [
                            _vm._v("Complemento")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.end_complemento,
                                expression: "solicitante.end_complemento"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "end_complemento" },
                            domProps: {
                              value: _vm.solicitante.end_complemento
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "end_complemento",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "form-control",
                        { attrs: { error: _vm.errors.end_bairro } },
                        [
                          _c("label", { attrs: { for: "end_bairro" } }, [
                            _vm._v("Bairro *")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.end_bairro,
                                expression: "solicitante.end_bairro"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "end_bairro" },
                            domProps: { value: _vm.solicitante.end_bairro },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "end_bairro",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.solicitante.sol_estrangeiro,
                        expression: "!solicitante.sol_estrangeiro"
                      }
                    ],
                    staticClass: "row"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "form-control",
                          { attrs: { error: _vm.errors.est_sigla } },
                          [
                            _c("label", { attrs: { for: "est_sigla" } }, [
                              _vm._v("Estado *")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.solicitante.est_sigla,
                                    expression: "solicitante.est_sigla"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { id: "est_sigla" },
                                on: {
                                  change: [
                                    function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.solicitante,
                                        "est_sigla",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    },
                                    _vm.loadCidades
                                  ]
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }),
                                _vm._v(" "),
                                _vm._l(_vm.estados, function(item) {
                                  return [
                                    _c(
                                      "option",
                                      { domProps: { value: item.est_sigla } },
                                      [_vm._v(_vm._s(item.est_nome))]
                                    )
                                  ]
                                })
                              ],
                              2
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6" },
                      [
                        _c(
                          "form-control",
                          { attrs: { error: _vm.errors.cid_codigo_ibge } },
                          [
                            _c("label", { attrs: { for: "cid_codigo_ibge" } }, [
                              _vm._v("Cidade *")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.solicitante.cid_codigo_ibge,
                                    expression: "solicitante.cid_codigo_ibge"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { id: "cid_codigo_ibge" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.solicitante,
                                      "cid_codigo_ibge",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "" } }),
                                _vm._v(" "),
                                _vm._l(_vm.cidades, function(item) {
                                  return [
                                    _c(
                                      "option",
                                      {
                                        domProps: {
                                          value: item.cid_codigo_ibge
                                        }
                                      },
                                      [_vm._v(_vm._s(item.cid_nome))]
                                    )
                                  ]
                                })
                              ],
                              2
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c(
                  "form-control",
                  { attrs: { error: _vm.errors.sol_telefone } },
                  [
                    _c("label", { attrs: { for: "sol_telefone" } }, [
                      _vm._v("Telefone *")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.solicitante.sol_telefone,
                          expression: "solicitante.sol_telefone"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "tel", id: "sol_telefone" },
                      domProps: { value: _vm.solicitante.sol_telefone },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.solicitante,
                            "sol_telefone",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "form-control",
                        { attrs: { error: _vm.errors.sol_email } },
                        [
                          _c("label", { attrs: { for: "sol_email" } }, [
                            _vm._v("E-mail *")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.sol_email,
                                expression: "solicitante.sol_email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "email", id: "sol_email" },
                            domProps: { value: _vm.solicitante.sol_email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "sol_email",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "form-control",
                        { attrs: { error: _vm.errors.sol_email_confirmacao } },
                        [
                          _c(
                            "label",
                            { attrs: { for: "sol_email_confirmacao" } },
                            [_vm._v("Confirme seu E-mail *")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.sol_email_confirmacao,
                                expression: "solicitante.sol_email_confirmacao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              id: "sol_email_confirmacao",
                              autocomplete: "off"
                            },
                            domProps: {
                              value: _vm.solicitante.sol_email_confirmacao
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "sol_email_confirmacao",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "form-control",
                        { attrs: { error: _vm.errors.usu_senha } },
                        [
                          _c("label", { attrs: { for: "usu_senha" } }, [
                            _vm._v("Senha de acesso *")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.usu_senha,
                                expression: "solicitante.usu_senha"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "password", id: "usu_senha" },
                            domProps: { value: _vm.solicitante.usu_senha },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "usu_senha",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c(
                        "form-control",
                        { attrs: { error: _vm.errors.usu_senha_confirmacao } },
                        [
                          _c(
                            "label",
                            { attrs: { for: "usu_senha_confirmacao" } },
                            [_vm._v("Confirme sua Senha *")]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.solicitante.usu_senha_confirmacao,
                                expression: "solicitante.usu_senha_confirmacao"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "password",
                              id: "usu_senha_confirmacao"
                            },
                            domProps: {
                              value: _vm.solicitante.usu_senha_confirmacao
                            },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.solicitante,
                                  "usu_senha_confirmacao",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    ref: "submit",
                    staticClass: "btn btn-mairi",
                    attrs: { type: "submit", disabled: "" }
                  },
                  [_vm._v("Enviar")]
                )
              ],
              1
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("h1", [_vm._v("Cadastro de Solicitante")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "modalTermos",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modalTermosLabel"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Fechar"
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "h4",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "modalTermosLabel" }
                  },
                  [
                    _vm._v(
                      "Declaração de Responsabilidade e Preenchimento de Documento"
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("p", [
                  _vm._v(
                    "\n                        Declaro não possuir CPF e assumo inteira responsabilidade pela exatidão e\n                        veracidade das informações prestadas, inclusive quanto aos dados do documento\n                        de identificação a ser utilizado para aferição do meu cadastro no Sistema\n                        Eletrônico do Serviço de Informação ao Cidadão (E‐Sic). Declaro ainda ter\n                        conhecimento das sanções legais aplicáveis caso as informações sejam\n                        inverídicas.\n                    "
                  )
                ])
              ])
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7eb6fe5f", module.exports)
  }
}

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(432)
/* template */
var __vue_template__ = __webpack_require__(433)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/SolicitanteRecuperarSenha.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-087fdeb2", Component.options)
  } else {
    hotAPI.reload("data-v-087fdeb2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 432 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            usuario: {
                usu_login: ""
            },
            errors: {},
            errorMsg: "",
            success: false
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    methods: {
        send: function send() {
            var _this = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            axios.post('/ajax/recuperar-senha', this.usuario).then(function (response) {
                _this.success = true;
                Loading.hide();
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this.$refs.submit).prop("disabled", false);
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.success && _vm.errorMsg,
                expression: "!success && errorMsg"
              }
            ],
            staticClass: "alert alert-danger",
            attrs: { role: "alert" }
          },
          [_vm._v(_vm._s(_vm.errorMsg))]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.success,
                expression: "success"
              }
            ],
            staticClass: "alert alert-success",
            attrs: { role: "alert" }
          },
          [
            _vm._v("\n                Um e-mail foi enviado para "),
            _c("strong", [_vm._v(_vm._s(_vm.usuario.usu_login))]),
            _vm._v(
              " com um link de\n                recuperação de senha.\n            "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "form",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.success,
                expression: "!success"
              }
            ],
            attrs: { role: "form", "accept-charset": "UTF-8" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.send($event)
              }
            }
          },
          [
            _c("p", [
              _vm._v(
                "\n                    Informe seu e-mail cadastrado para receber um link para recuperação de senha. Se não tiver recebido\n                    o e-mail para confirmação de cadastro, você também pode solicitar o reenvio através deste formulário.\n                "
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("form-control", { attrs: { error: _vm.errors.usu_login } }, [
              _c("label", { attrs: { for: "usu_login" } }, [
                _vm._v("E-mail *")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.usuario.usu_login,
                    expression: "usuario.usu_login"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "email", id: "usu_login" },
                domProps: { value: _vm.usuario.usu_login },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.usuario, "usu_login", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "submit",
                staticClass: "btn btn-mairi",
                attrs: { type: "submit" }
              },
              [_vm._v("Enviar")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-default",
                attrs: { href: _vm.baseUrl("/esic/acesso") }
              },
              [_vm._v("Voltar")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("h1", [_vm._v("Recuperar Acesso ao E-Sic")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-087fdeb2", module.exports)
  }
}

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(435)
/* template */
var __vue_template__ = __webpack_require__(436)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/SolicitanteRecuperacao.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79f844b2", Component.options)
  } else {
    hotAPI.reload("data-v-79f844b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['token'],
    data: function data() {
        return {
            usuario: {},
            errors: {},
            success: false
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    methods: {
        send: function send() {
            var _this = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            var data = $.extend({}, this.usuario);
            data.token = this.token;

            axios.post('/ajax/alterar-senha', data).then(function (response) {
                _this.success = true;
                Loading.hide();
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this.$refs.submit).prop("disabled", false);
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.success,
                expression: "success"
              }
            ],
            staticClass: "alert alert-success",
            attrs: { role: "alert" }
          },
          [
            _vm._v(
              "\n                Seu acesso ao portal foi restaurado e seu cadastro foi confirmado."
            ),
            _c("br"),
            _vm._v(" "),
            _c("a", { attrs: { href: _vm.baseUrl("/esic/acesso") } }, [
              _vm._v("Clique aqui")
            ]),
            _vm._v(
              " para ir para a tela de login e acessar o portal.\n            "
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "form",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.success,
                expression: "!success"
              }
            ],
            attrs: { role: "form", "accept-charset": "UTF-8" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.send($event)
              }
            }
          },
          [
            _c("form-control", { attrs: { error: _vm.errors.usu_senha } }, [
              _c("label", { attrs: { for: "usu_senha" } }, [
                _vm._v("Nova Senha de Acesso *")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.usuario.usu_senha,
                    expression: "usuario.usu_senha"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "password", id: "usu_senha" },
                domProps: { value: _vm.usuario.usu_senha },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.usuario, "usu_senha", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "form-control",
              { attrs: { error: _vm.errors.usu_senha_confirmacao } },
              [
                _c("label", { attrs: { for: "usu_senha_confirmacao" } }, [
                  _vm._v("Confirme sua Nova Senha *")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.usuario.usu_senha_confirmacao,
                      expression: "usuario.usu_senha_confirmacao"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "password", id: "usu_senha_confirmacao" },
                  domProps: { value: _vm.usuario.usu_senha_confirmacao },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.usuario,
                        "usu_senha_confirmacao",
                        $event.target.value
                      )
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "submit",
                staticClass: "btn btn-mairi",
                attrs: { type: "submit" }
              },
              [_vm._v("Enviar")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("h1", [_vm._v("Recuperar Acesso ao E-Sic")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-79f844b2", module.exports)
  }
}

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(438)
/* template */
var __vue_template__ = __webpack_require__(439)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/SolicitanteRelatorio.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c451cec2", Component.options)
  } else {
    hotAPI.reload("data-v-c451cec2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            showTable: false,
            tableVisible: false,
            filters: {
                data_inicial: moment().format('YYYY-01-01'),
                data_final: moment().format('YYYY-MM-DD')
                //formato: "T",
            },
            columns: ['tipo', 'quantidade', 'concluidas', 'rejeitadas', 'pes_fisica', 'pes_juridica', 'residente', 'nao_residente'],
            options: {
                skin: 'table-hover',
                columnsClasses: {
                    'tipo': 'col-tipo',
                    'quantidade': 'col-tipo text-center',
                    'concluidas': 'col-tipo text-center',
                    'rejeitadas': 'col-tipo text-center',
                    'pes_fisica': 'col-tipo text-center',
                    'pes_juridica': 'col-tipo text-center',
                    'residente': 'col-tipo text-center',
                    'nao_residente': 'col-tipo text-center'
                },
                headings: {
                    'tipo': 'Tipo',
                    'quantidade': 'Recebidas',
                    'concluidas': 'Atendidas',
                    'rejeitadas': 'Rejeitadas',
                    'pes_fisica': 'Pes. Fís.',
                    'pes_juridica': 'Pes. Jur.',
                    'residente': 'Residente',
                    'nao_residente': 'Não Residente'
                },
                texts: this.vueTableTexts(),
                filterable: true,
                responseAdapter: function responseAdapter(resp) {
                    return {
                        data: resp.data,
                        count: resp.data.length
                    };
                }
            }
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {},

    methods: {
        fetch: function fetch() {
            this.showTable = true;
            this.$refs.table.setFilter(JSON.stringify(this.filters));
        },
        print: function print() {
            window.print();
        },
        onLoaded: function onLoaded() {
            if (this.showTable) {
                this.tableVisible = true;
            }
        }
    }
});

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "\n        Acessibilidade significa o direito de acesso e utilização por todos a serviços, produtos e informação,\n        independente de possuírem qualquer tipo de deficiência ou limitações. Este direito se estende a todos os\n        aspectos sociais.\n    "
      )
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "data_inicial" } }, [
            _vm._v("Data Inicial")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filters.data_inicial,
                expression: "filters.data_inicial"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "date", id: "data_inicial" },
            domProps: { value: _vm.filters.data_inicial },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.filters, "data_inicial", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "data_final" } }, [_vm._v("Data Final")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filters.data_final,
                expression: "filters.data_final"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "date", id: "data_final" },
            domProps: { value: _vm.filters.data_final },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.filters, "data_final", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2 hidden-print" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v(" ")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-block btn-success",
              attrs: { type: "button" },
              on: { click: _vm.fetch }
            },
            [_vm._v("Gerar Relatório")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.tableVisible,
              expression: "tableVisible"
            }
          ],
          staticClass: "col-sm-2 hidden-print"
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v(" ")]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-block btn-mairi",
                attrs: { type: "button" },
                on: { click: _vm.print }
              },
              [_vm._v("Imprimir")]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.tableVisible,
            expression: "tableVisible"
          }
        ],
        staticClass: "panel panel-form"
      },
      [
        _c("v-server-table", {
          ref: "table",
          attrs: {
            id: "table-relatorio",
            url: "/ajax/relatorio",
            columns: _vm.columns,
            options: _vm.options
          },
          on: { loaded: _vm.onLoaded }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("h1", [_vm._v("Relatório Público de Atendimento")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c451cec2", module.exports)
  }
}

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(441)
/* template */
var __vue_template__ = __webpack_require__(442)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/SolicitantePresencial.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ae5b88e0", Component.options)
  } else {
    hotAPI.reload("data-v-ae5b88e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            configuracao: {},
            usuario: {},
            errors: {},
            errorMsg: ""
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        this.fetch();
    },

    methods: {
        fetch: function fetch() {
            var _this = this;

            axios.get('esic/ajax/telefones').then(function (response) {
                _this.configuracao = response.data.data;

                Loading.hide();
                $(_this.$refs.submit).prop("disabled", false);
            }).catch(function (error) {
                Loading.hide();
                //alert('Não foi possível carregar as configurações.');
            });
        },
        login: function login() {
            var _this2 = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            axios.post('/ajax/login', this.usuario).then(function (response) {
                window.location.href = _this2.baseUrl('/esic');
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        _this2.errorMsg = msg;
                    }
                } else {
                    _this2.errorMsg = "Ocorreu um erro ao tentar processar sua solicitação.";
                }

                Loading.hide();
                $(_this2.$refs.submit).prop("disabled", false);
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h4", [_vm._v("Requerimento Presencial - SIC")]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n                    1-Para fazer um requerimento presencial, dirija-se à Sede da Câmara ou Prefeitura e preencha o formulário que será fornecido pelo servidor(a) responsável."
          ),
          _c("br"),
          _vm._v(
            "\n\t\t\t\t\t2- Para sua comodidade, este formulário se\nencontra também disponível no link:\n                    "
          ),
          _c("a", { attrs: { href: _vm.baseUrl("/esic/download") } }, [
            _vm._v("Download do Formulário")
          ]),
          _c("br"),
          _c("br"),
          _vm._v(
            "\n\n\n\t\t\t\t\t3-Entregue o formulário preenchido ao servidor responsável para ele possa inserir as informações no sistema e gerar o seu n° de protocolo;"
          ),
          _c("br"),
          _c("br"),
          _vm._v(
            "\n\t\t\t\t\t4-Para acompanhar o andamento de seu pedido entre em contato pelo telefone, ou dirija-se a sede da Prefeitura e informe seu nº de protocolo;"
          ),
          _c("br"),
          _c("br"),
          _vm._v(
            "\n\t\t\t\t\t5-O SIC funciona de segunda a sexta-feira das 08:00 às 12:00.  "
          ),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _vm._v(
            "\n          Número para contato " +
              _vm._s(_vm.configuracao.telefone_primario) +
              " / " +
              _vm._s(_vm.configuracao.telefone_secundario) +
              "\n                "
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "panel panel-form" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errorMsg,
                    expression: "errorMsg"
                  }
                ],
                staticClass: "alert alert-danger",
                attrs: { role: "alert" }
              },
              [_vm._v(_vm._s(_vm.errorMsg))]
            ),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { role: "form", "accept-charset": "UTF-8" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.login($event)
                  }
                }
              },
              [
                _c("form-control", { attrs: { error: _vm.errors.usu_login } }, [
                  _c("label", { attrs: { for: "usu_login" } }, [
                    _vm._v("Login")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.usuario.usu_login,
                        expression: "usuario.usu_login"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "usu_login" },
                    domProps: { value: _vm.usuario.usu_login },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.usuario, "usu_login", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("form-control", { attrs: { error: _vm.errors.usu_senha } }, [
                  _c("label", { attrs: { for: "usu_senha" } }, [
                    _vm._v("Senha")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.usuario.usu_senha,
                        expression: "usuario.usu_senha"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "password", id: "usu_senha" },
                    domProps: { value: _vm.usuario.usu_senha },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.usuario, "usu_senha", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "a",
                    { attrs: { href: _vm.baseUrl("/esic/recuperar-senha") } },
                    [_vm._v("Esqueci minha senha")]
                  ),
                  _vm._v(" |\n                                "),
                  _c(
                    "a",
                    { attrs: { href: _vm.baseUrl("/esic/recuperar-senha") } },
                    [_vm._v("Não consigo acessar o E-Sic")]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    ref: "submit",
                    staticClass: "btn btn-mairi",
                    attrs: { type: "submit" }
                  },
                  [_vm._v("Entrar")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "alert alert-mairi",
                    staticStyle: { margin: "15px 0 0" }
                  },
                  [
                    _vm._v(
                      "\n                                Não possui acesso ao E-Sic? Cadastre-se "
                    ),
                    _c(
                      "a",
                      { attrs: { href: _vm.baseUrl("/esic/cadastro") } },
                      [_vm._v("aqui")]
                    ),
                    _vm._v("!\n                            ")
                  ]
                )
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h3", { staticClass: "panel-title" }, [_vm._v("Acesso ao E-Sic")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ae5b88e0", module.exports)
  }
}

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(444)
/* template */
var __vue_template__ = __webpack_require__(445)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/SolicitacaoUsuarioLista.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-486faae6", Component.options)
  } else {
    hotAPI.reload("data-v-486faae6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

Vue.component('solicitacao-usuario-col-situacao', {
    props: ['data'],
    template: '<span v-bind:class="classObject">{{ data.slc_situacao }}</span>',
    computed: {
        classObject: function classObject() {
            return {
                label: true,
                'label-situacao': true,
                'label-default': this.data.slc_situacao_sigla == 'ESP',
                'label-primary': this.data.slc_situacao_sigla == 'ANA',
                'label-success': this.data.slc_situacao_sigla == 'CON',
                'label-danger': this.data.slc_situacao_sigla == 'REJ'
            };
        }
    }
});

Vue.component('solicitacao-usuario-col-data', {
    props: ['data'],
    template: '<abbr :title="dateFull">{{ dateAbbr }}</abbr>',
    computed: {
        dateFull: function dateFull() {
            return moment(this.data.slc_data_cadastro).format('DD/MM/YYYY HH:mm');
        },
        dateAbbr: function dateAbbr() {
            return moment(this.data.slc_data_cadastro).format('DD/MM/YYYY');
        }
    }
});

Vue.component('col-view', {
    props: ['data'],
    template: '<a :href="baseUrl(\'/esic/solicitacao/\' + data.solicitacao_id + \'/detalhes\')">Detalhes</a>'
});

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            situacoes: [],
            filters: {
                slc_protocolo: "",
                slc_data_cadastro: "",
                slc_situacao: ""
            },
            columns: ['slc_protocolo', 'slc_titulo', 'slc_orgao', 'slc_situacao', 'slc_data_cadastro', 'view'],
            options: {
                skin: 'table-striped table-hover',
                columnsClasses: {
                    'slc_protocolo': 'col-protocolo',
                    'slc_situacao': 'col-situacao',
                    'slc_data_cadastro': 'col-data',
                    'view': 'col-actions'
                },
                headings: {
                    'slc_protocolo': 'Protocolo',
                    'slc_titulo': 'Título',
                    'slc_orgao': 'Orgão/Entidade/Serviço',
                    'slc_situacao': 'Situação',
                    'slc_data_cadastro': 'Abertura',
                    'view': ''
                },
                texts: this.vueTableTexts(),
                filterable: false,
                sortable: ['slc_protocolo', 'slc_orgao', 'slc_data_cadastro', 'slc_situacao'],
                orderBy: {
                    ascending: false,
                    column: 'slc_data_cadastro'
                },
                templates: {
                    slc_situacao: 'solicitacao-usuario-col-situacao',
                    slc_data_cadastro: 'solicitacao-usuario-col-data',
                    view: 'col-view'
                },
                params: {
                    table: true
                },
                responseAdapter: function (resp) {
                    var data = resp.data.items;

                    for (var i in data) {
                        if (data[i].slc_situacao && this.situacoes[data[i].slc_situacao]) {
                            data[i].slc_situacao_sigla = data[i].slc_situacao;
                            data[i].slc_situacao = this.situacoes[data[i].slc_situacao];
                        }
                    }

                    return {
                        data: resp.data.items,
                        count: resp.data.count
                    };
                }.bind(this)
            }
        };
    },
    mounted: function mounted() {
        var _this = this;

        Loading.show();

        $("#slc_data_cadastro").mask('00/00/0000', { clearIfNotMatch: true });

        axios.get('/ajax/tipo-situacao-solicitacao').then(function (response) {
            _this.situacoes = response.data.data;
            _this.fetch();
            Loading.hide();
        });
    },

    methods: {
        fetch: function fetch() {
            this.$refs.table.setFilter(JSON.stringify(this.filters));
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-mairi pull-right",
          attrs: { href: _vm.baseUrl("/esic/solicitacao/cadastro") }
        },
        [_vm._v("Cadastrar nova")]
      ),
      _vm._v(" "),
      _c("h1", [_vm._v("Solicitações")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "slc_protocolo" } }, [
            _vm._v("Protocolo")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filters.slc_protocolo,
                expression: "filters.slc_protocolo"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "slc_protocolo" },
            domProps: { value: _vm.filters.slc_protocolo },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.filters, "slc_protocolo", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "slc_data_cadastro" } }, [
            _vm._v("Data de Abertura")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filters.slc_data_cadastro,
                expression: "filters.slc_data_cadastro"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              id: "slc_data_cadastro",
              placeholder: "__/__/____"
            },
            domProps: { value: _vm.filters.slc_data_cadastro },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.filters, "slc_data_cadastro", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "slc_situacao" } }, [_vm._v("Situação")]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.filters.slc_situacao,
                  expression: "filters.slc_situacao"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "slc_situacao" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.filters,
                    "slc_situacao",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }),
              _vm._v(" "),
              _vm._l(_vm.situacoes, function(item, index) {
                return [
                  _c("option", { domProps: { value: index } }, [
                    _vm._v(_vm._s(item))
                  ])
                ]
              })
            ],
            2
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xs-2" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", [_vm._v(" ")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-block btn-success",
              attrs: { type: "button" },
              on: { click: _vm.fetch }
            },
            [_c("i", { staticClass: "fa fa-search" }), _vm._v(" Buscar")]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "panel panel-form" },
      [
        _c("v-server-table", {
          ref: "table",
          attrs: {
            url: "/esic/ajax/solicitacao",
            columns: _vm.columns,
            options: _vm.options
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-486faae6", module.exports)
  }
}

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(447)
/* template */
var __vue_template__ = __webpack_require__(448)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/SolicitacaoUsuarioCadastro.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b58c1c2", Component.options)
  } else {
    hotAPI.reload("data-v-7b58c1c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['tipoServicos', 'servicos'],
    data: function data() {
        return {
            solicitacao: {
                slc_orgao: "",
                slc_anexo: null,
                slc_anexo_2: null,
                slc_anexo_3: null
            },
            errors: {},
            qtdAnexos: 1,
            success: false,
            protocolo: ""
        };
    },

    components: {
        FormControl: __WEBPACK_IMPORTED_MODULE_0__components_FormControl_vue___default.a
    },
    mounted: function mounted() {
        Loading.hide();
        $(this.$refs.submit).prop("disabled", false);
    },

    methods: {
        save: function save() {
            var _this = this;

            var vm = this;
            this.errors = {};

            $(this.$refs.submit).prop("disabled", true);
            Loading.show();

            var data = new FormData();

            for (var i in this.solicitacao) {
                if (this.solicitacao[i]) {
                    data.append(i, this.solicitacao[i]);
                }
            }

            var promise = axios.post('/esic/ajax/solicitacao', data, {
                headers: { 'content-type': 'multipart/form-data' }
            });

            promise.then(function (response) {
                _this.success = true;
                _this.protocolo = response.data.data.slc_protocolo;
                Loading.hide();
            }).catch(function (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        vm.errors = error.response.data.data;
                    } else {
                        var msg = error.response.data.message || "Ocorreu um erro ao tentar processar sua solicitação.";
                        alert(msg);
                    }
                } else {
                    alert("Ocorreu um erro ao tentar processar sua solicitação.");
                }

                Loading.hide();
                $(_this.$refs.submit).prop("disabled", false);
            });
        },
        onFileChange: function onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            this.solicitacao[e.target.id] = files.length ? files[0] : null;
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("div", { staticClass: "panel-body" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.success,
                expression: "success"
              }
            ],
            staticClass: "alert alert-success",
            attrs: { role: "alert" }
          },
          [
            _c("h4", [_vm._v("Sua solicitação foi enviada com sucesso!")]),
            _vm._v("\n                Seu número de protocolo é "),
            _c("strong", [_vm._v(_vm._s(_vm.protocolo))]),
            _vm._v(".\n            ")
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.success,
                expression: "!success"
              }
            ]
          },
          [
            _c(
              "form",
              {
                attrs: { role: "form", "accept-charset": "UTF-8" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.save($event)
                  }
                }
              },
              [
                _c("form-control", { attrs: { error: _vm.errors.slc_orgao } }, [
                  _c("label", { attrs: { for: "slc_orgao" } }, [
                    _vm._v("Serviço ou Órgão/Entidade")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.solicitacao.slc_orgao,
                          expression: "solicitacao.slc_orgao"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "slc_orgao" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.solicitacao,
                            "slc_orgao",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }),
                      _vm._v(" "),
                      _vm._l(_vm.tipoServicos, function(tipo) {
                        return _vm.servicos[tipo.tipo_categoria_servico_id]
                          ? _c(
                              "optgroup",
                              { attrs: { label: tipo.tcs_nome } },
                              _vm._l(
                                _vm.servicos[tipo.tipo_categoria_servico_id],
                                function(servico) {
                                  return _c(
                                    "option",
                                    {
                                      domProps: {
                                        value:
                                          tipo.tcs_nome +
                                          " - " +
                                          servico.pub_titulo
                                      }
                                    },
                                    [_vm._v(_vm._s(servico.pub_titulo))]
                                  )
                                }
                              )
                            )
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _c("optgroup", { attrs: { label: "Secretarias" } }, [
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Administração" } },
                          [_vm._v("Administração")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Saúde" } },
                          [_vm._v("Saúde")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Educação" } },
                          [_vm._v("Educação")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          {
                            attrs: { value: "Secretarias - Assistência Social" }
                          },
                          [_vm._v("Assistência social")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Transporte" } },
                          [_vm._v("Transporte")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Cultura" } },
                          [_vm._v("Cultura")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Agricultura" } },
                          [_vm._v("Agricultura")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Esporte/Lazer" } },
                          [_vm._v("Esporte/Lazer")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Secretarias - Outros" } },
                          [_vm._v("Outros")]
                        )
                      ]),
                      _vm._v(" "),
                      _c("optgroup", { attrs: { label: "Setores" } }, [
                        _c(
                          "option",
                          { attrs: { value: "Setores - Finanças" } },
                          [_vm._v("Finanças")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Setores - Licitação" } },
                          [_vm._v("Licitação")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Setores - Contabilidade" } },
                          [_vm._v("Contabilidade")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Setores - Controladoria" } },
                          [_vm._v("Controladoria")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Setores - Pessoal" } },
                          [_vm._v("Pessoal")]
                        ),
                        _vm._v(" "),
                        _c(
                          "option",
                          { attrs: { value: "Setores - Convênios" } },
                          [_vm._v("Convênios")]
                        ),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "Setores - Outros" } }, [
                          _vm._v("Outros")
                        ])
                      ])
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c(
                  "form-control",
                  { attrs: { error: _vm.errors.slc_titulo } },
                  [
                    _c("label", { attrs: { for: "slc_titulo" } }, [
                      _vm._v("Título *")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.solicitacao.slc_titulo,
                          expression: "solicitacao.slc_titulo"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "slc_titulo",
                        placeholder:
                          "Informe uma breve descrição da solicitação..."
                      },
                      domProps: { value: _vm.solicitacao.slc_titulo },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.solicitacao,
                            "slc_titulo",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "form-control",
                  { attrs: { error: _vm.errors.slc_descricao } },
                  [
                    _c("label", { attrs: { for: "slc_descricao" } }, [
                      _vm._v("Mensagem *")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.solicitacao.slc_descricao,
                          expression: "solicitacao.slc_descricao"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "slc_descricao", rows: "8" },
                      domProps: { value: _vm.solicitacao.slc_descricao },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.solicitacao,
                            "slc_descricao",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("form-control", { attrs: { error: _vm.errors.slc_anexo } }, [
                  _c("label", { attrs: { for: "slc_anexo" } }, [
                    _vm._v("Anexar arquivos (máximo de 3 arquivos)")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "file", id: "slc_anexo" },
                    on: { change: _vm.onFileChange }
                  })
                ]),
                _vm._v(" "),
                _vm.qtdAnexos >= 2
                  ? _c(
                      "form-control",
                      { attrs: { error: _vm.errors.slc_anexo_2 } },
                      [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "file", id: "slc_anexo_2" },
                          on: { change: _vm.onFileChange }
                        })
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.qtdAnexos >= 3
                  ? _c(
                      "form-control",
                      { attrs: { error: _vm.errors.slc_anexo_3 } },
                      [
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "file", id: "slc_anexo_3" },
                          on: { change: _vm.onFileChange }
                        })
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.qtdAnexos < 3,
                        expression: "qtdAnexos < 3"
                      }
                    ],
                    staticClass: "form-group"
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.qtdAnexos++
                          }
                        }
                      },
                      [_vm._v("Adicionar outro anexo")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    ref: "submit",
                    staticClass: "btn btn-primary",
                    attrs: { type: "submit", disabled: "" }
                  },
                  [_vm._v("Enviar")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-default",
                    attrs: { href: _vm.baseUrl("/esic/solicitacoes") }
                  },
                  [_vm._v("Voltar")]
                )
              ],
              1
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header" }, [
      _c("h1", [_vm._v("Cadastrar Solicitação")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7b58c1c2", module.exports)
  }
}

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(450)
/* template */
var __vue_template__ = __webpack_require__(451)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/SolicitacaoUsuarioDetalhes.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0b750384", Component.options)
  } else {
    hotAPI.reload("data-v-0b750384", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['resource'],
    data: function data() {
        return {
            situacoes: [],
            solicitacao: {}
        };
    },
    mounted: function mounted() {
        var _this = this;

        Loading.show();

        axios.get('/ajax/tipo-situacao-solicitacao').then(function (response) {
            _this.situacoes = response.data.data;
            _this.fetch();
        });
    },

    methods: {
        fetch: function fetch() {
            var _this2 = this;

            axios.get('/esic/ajax/solicitacao/' + this.resource).then(function (response) {
                _this2.solicitacao = response.data.data;

                if (_this2.solicitacao.slc_data_cadastro) {
                    _this2.solicitacao.slc_data_cadastro = moment(_this2.solicitacao.slc_data_cadastro).format('DD/MM/YYYY HH:mm');
                }

                if (_this2.solicitacao.slc_situacao && _this2.situacoes[_this2.solicitacao.slc_situacao]) {
                    _this2.solicitacao.slc_situacao = _this2.situacoes[_this2.solicitacao.slc_situacao];
                }

                if (_this2.solicitacao.slc_comentario) {
                    _this2.solicitacao.slc_comentario = _this2.solicitacao.slc_comentario.replace(/(?:\r\n|\r|\n)/g, '<br />');
                }

                Loading.hide();
            }).catch(function (error) {
                Loading.hide();
                alert('Não foi possível carregar o recurso informado.');
            });
        }
    }
});

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "page-header" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-default pull-right",
          attrs: { href: _vm.baseUrl("/esic/solicitacoes") }
        },
        [
          _c("i", { staticClass: "fa fa-chevron-left fa-fw" }),
          _vm._v(" Voltar")
        ]
      ),
      _vm._v(" "),
      _c("h1", [_vm._v("Detalhes da Solicitação")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel panel-form" }, [
      _c("table", { staticClass: "table" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("tbody", [
          _c("tr", [
            _c("th", { staticStyle: { "border-top": "0" } }, [
              _vm._v("Protocolo:")
            ]),
            _vm._v(" "),
            _c("td", { staticStyle: { "border-top": "0" } }, [
              _vm._v(_vm._s(_vm.solicitacao.slc_protocolo))
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Solicitante:")]),
            _vm._v(" "),
            _c("td", [
              _vm.solicitacao.solicitante
                ? _c("span", [
                    _vm._v(_vm._s(_vm.solicitacao.solicitante.sol_nome))
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Data de Abertura:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.solicitacao.slc_data_cadastro))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Órgão/Entidade/Serviço:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.solicitacao.slc_orgao))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Situação:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.solicitacao.slc_situacao))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Título:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.solicitacao.slc_titulo))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Descrição da Solicitação:")]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm.solicitacao.slc_descricao))])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Anexos:")]),
            _vm._v(" "),
            _c("td", [
              _c(
                "ul",
                { staticClass: "list-unstyled" },
                [
                  _vm._l(_vm.solicitacao.anexos, function(item) {
                    return [
                      _c("li", [
                        _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.baseUrl(
                                "/esic/solicitacao/anexo/" + item.anexo_id
                              ),
                              target: "_blank"
                            }
                          },
                          [_vm._v(_vm._s(item.ane_nome))]
                        )
                      ])
                    ]
                  })
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("th", [_vm._v("Comentários:")]),
            _vm._v(" "),
            _c("td", {
              domProps: { innerHTML: _vm._s(_vm.solicitacao.slc_comentario) }
            })
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("colgroup", [_c("col", { staticStyle: { width: "220px" } })])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0b750384", module.exports)
  }
}

/***/ }),
/* 452 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 453 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 454 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[185]);
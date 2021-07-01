<template>
  <div class="container">
    <div class="page-header">
      <h1>Editais Acessados</h1>
    </div>

    <div class="row">
      <div class="col-sm-2">
        <div class="form-group">
          <label for="doc_numero_processo">Número do Processo</label>
          <input
            type="text"
            id="doc_numero_processo"
            class="form-control"
            v-model="filters.doc_numero_processo"
          />
        </div>
      </div>
      <div class="col-sm-3">
        <div class="form-group">
          <label for="tipo_processo_id">Tipo de Processo</label>
          <select id="tipo_processo_id" v-model="filters.tipo_processo_id" class="form-control">
            <option value></option>
            <template v-for="item in tipos">
              <option :value="item.tipo_processo_id">{{ item.tpr_nome }}</option>
            </template>
          </select>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="form-group">
          <label>&nbsp;</label>
          <button type="button" class="btn btn-block btn-success" @click="fetch">
            <i class="fa fa-search"></i> Buscar
          </button>
        </div>
      </div>
    </div>

    <br />

    <div class="panel panel-form">
      <v-server-table ref="table" url="/painel/ajax/edital" :columns="columns" :options="options"></v-server-table>
    </div>
  </div>
</template>

<script>
import FormControl from "../components/FormControl.vue";

Vue.component("col-ver", {
  props: ["data"],
  template: `<a :href="baseUrl('/painel/edital/ver/' + data.edital_acessados_id)">Detalhes</a>`
});

export default {
  data() {
    return {
      tipos: [],
      filters: {
        doc_numero_processo: "",
        tipo_processo_id: ""
      },
      columns: [
        "edital_nome",
        "edital_email",
        "edital_cpf",
        "num_processo",
        "tipo_processo",
        "created_at",
        "ver"
      ],
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
        sortable: [
          "num_processo",
          "tipo_processo",
          "created_at",
        ],
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
        responseAdapter: function(resp) {
          
          let data = resp.data.items;

          for (var i in data) {
            if(data[i].created_at) {
              data[i].created_at = moment(data[i].created_at).format('DD/MM/YYYY');
            }
          }

          return { 
            data: resp.data.items,
            count: resp.data.count
          }
        },
        // errors: {},
        // showSuccessMsg: false
      }
    };
  },
  mounted() {
    Loading.show();

    axios
      .all([
        axios.get("/painel/ajax/tipo-processo"),
        //axios.get("/painel/ajax/categoria-processo")
      ])
      .then(
        axios.spread((respTipos, respCategorias) => {
          this.tipos = respTipos.data.data;
          //this.categorias = respCategorias.data.data;
          Loading.hide();
        })
      );
  },
  methods: {
    fetch() {
      this.$refs.table.setFilter(JSON.stringify(this.filters));
    }
  }
};
</script>

<!DOCTYPE html>
<html>
<head>
	<title>Detalhes</title>
</head>
<body>

	<h3>Detalhes {{$documento->doc_numero_processo}}</h3>

	<br>

      @if(isset($campos['descricao']))
        <li>
          <a class="text_btn">Descricão: </a>
          <a class="btn btn-link">{{ $campos['descricao'] }}</a>
        </li>
      @endif
      @if(isset($campos['orgao']))
        <li>
          <a class="text_btn">Orgão:</a>
          <a class="btn btn-link">{{ $campos['orgao'] }}</a>
        </li>
      @endif
      @if(isset($campos['numero_licitacao']))
        <li>
          <a class="text_btn">Número Licitação:</a>
          <a class="btn btn-link">{{ $campos['numero_licitacao'] }}</a>
        </li>
      @endif
      @if(isset($campos['numero_processo_adm']))
        <li>
          <a class="text_btn">Número do Processo Administrativo:</a>
          <a class="btn btn-link">{{ $campos['numero_processo_adm'] }}</a>
        </li>
      @endif
      @if(isset($campos['local_execucao']))
        <li>
          <a class="text_btn">Local Execução:</a>
          <a class="btn btn-link">{{ $campos['local_execucao'] }}</a>
        </li>
      @endif
      @if(isset($campos['numero_edital']))
        <li>
          <a class="text_btn">Número Edital:</a>
          <a class="btn btn-link">{{ $campos['numero_edital'] }}</a>
        </li>
      @endif
      @if(isset($campos['data_certame']))
        <li>
          <a class="text_btn">Data Certame:</a>
          <a class="btn btn-link">
            {{ date('d/m/Y', strtotime($campos['data_certame'])) }}
          </a>
        </li>
      @endif
      @if(isset($campos['local_certame']))
        <li>
          <a class="text_btn">Local Certame:</a>
          <a class="btn btn-link">{{ $campos['local_certame'] }}</a>
        </li>
      @endif
      @if(isset($campos['objeto']))
        <li>
          <a class="text_btn">Objeto:</a>
          <a class="btn btn-link">{{ $campos['objeto'] }}</a>
        </li>
      @endif
      @if(isset($campos['inicio_vigencia']))
        <li>
          <a class="text_btn">Início Vigência:</a>
          <a class="btn btn-link">
            {{ date('d/m/Y', strtotime($campos['inicio_vigencia'])) }}
        </a>
        </li>
      @endif
      @if(isset($campos['final_vigencia']))
        <li>
          <a class="text_btn">Final Vigência:</a>
          <a class="btn btn-link">
            {{ date('d/m/Y', strtotime($campos['final_vigencia'])) }}
        </a>
        </li>
      @endif
      @if(isset($campos['publicacao']))
        <li>
          <a class="text_btn">Publicação:</a>
          <a class="btn btn-link">
            {{ date('d/m/Y', strtotime($campos['publicacao'])) }}
        </a>
        </li>
      @endif
      @if(isset($campos['previsao_orcamentaria']))
        <li>
          <a class="text_btn">Previsão Orçamentária:</a>
          <a class="btn btn-link">{{ $campos['previsao_orcamentaria'] }}</a>
        </li>
      @endif
      @if(isset($campos['relacionado_covid']))
        <li>
          <a class="text_btn">Relacionado ao Covid?</a>
          @if($campos['relacionado_covid'])
            <a class="btn btn-link">Sim</a>
          @else
            <a class="btn btn-link">Não</a>
          @endif
        </li>
      @endif
      @if(isset($campos['cpf_cnpj']))
        <li>
          <a class="text_btn">CPF/CNPJ:</a>
          <a class="btn btn-link">{{ $campos['cpf_cnpj'] }}</a>
        </li>
      @endif
      @if(isset($campos['numero_contrato']))
        <li>
          <a class="text_btn">Número Contrato:</a>
          <a class="btn btn-link">{{ $campos['numero_contrato'] }}</a>
        </li>
      @endif
      @if(isset($campos['numero_processo_licitatorio']))
        <li>
          <a class="text_btn">Número Processo Licitatório:</a>
          <a class="btn btn-link">{{ $campos['numero_processo_licitatorio'] }}</a>
        </li>
      @endif
      @if(isset($campos['valor']))
        <li>
          <a class="text_btn">Valor:</a>
          <a class="btn btn-link">{{ $campos['valor'] }}</a>
        </li>
      @endif
      @if(isset($campos['data_assinatura']))
        <li>
          <a class="text_btn">Data Assinatura:</a>
          <a class="btn btn-link">
            {{ date('d/m/Y', strtotime($campos['data_assinatura'])) }}
          </a>
        </li>
      @endif
      @if(isset($campos['fundamento_legal']))
        <li>
          <a class="text_btn">Fundamento Legal:</a>
          <a class="btn btn-link">{{ $campos['fundamento_legal'] }}</a>
        </li>
      @endif
      @if(isset($campos['numero_dispensa']))
        <li>
          <a class="text_btn">Número Dispensa:</a>
          <a class="btn btn-link">{{ $campos['numero_dispensa'] }}</a>
        </li>
      @endif
      @if(isset($campos['possui_aditivo']))
        <li>
          <a class="text_btn">Possui aditivo?</a>
          @if($campos['possui_aditivo'])
            <a class="btn btn-link">Sim</a>
          @else
            <a class="btn btn-link">Não</a>
          @endif
        </li>
      @endif
	
</body>
</html>
<?php

namespace App\Http\Controllers;

use Auth, DB, Log;
use Illuminate\Http\Request;
use App\Models\Documento;
use App\Services\AnexoService;
use App\Models\Anexo;
use App\Models\EditaisAcessados;
use App\Models\CamposEspecificos;
use File;
use Response;
use View;
use PDF;

class EditalController extends Controller
{
  public function lista()
  {
      return view('edital.lista');
  }

  public function baixarArquivo(Request $request, $id){

    $documento = Documento::find($id);
    $campos = CamposEspecificos::where('documento_id', $id)->first();

    if($request->formato == 1){

      $data = [
        'documento' => $documento,
        'campos' => $campos,
      ];
      $pdf = PDF::loadView('documento.myPDF', $data);

      return $pdf->download('documento.pdf');

    }
    else if($request->formato == 2){
      $fileName = 'documento.csv';

          $headers = array(
              "Content-type"        => "text/csv",
              "Content-Disposition" => "attachment; filename=$fileName",
              "Pragma"              => "no-cache",
              "Cache-Control"       => "must-revalidate, post-check=0, pre-check=0",
              "Expires"             => "0"
          );

          $columns = array('Key', 'Value');

          $callback = function() use($documento, $campos, $columns) {
              $file = fopen('php://output', 'w');
              fputcsv($file, $columns);


              if(isset($campos['descricao'])){
                $row['Key']  = 'Descricão';
                $row['Value']  = $campos['descricao'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['orgao'])){
                $row['Key']  = 'Orgão';
                $row['Value']  = $campos['orgao'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['numero_licitacao'])){
                $row['Key']  = 'Número Licitação';
                $row['Value']  = $campos['numero_licitacao'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['numero_processo_adm'])){
                $row['Key']  = 'Número do Processo Administrativo';
                $row['Value']  = $campos['numero_processo_adm'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['local_execucao'])){
                $row['Key']  = 'Local Execução';
                $row['Value']  = $campos['local_execucao'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['numero_edital'])){
                $row['Key']  = 'Número Edital';
                $row['Value']  = $campos['numero_edital'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['data_certame'])){
                $row['Key']  = 'Data Certame';
                $row['Value']  = $campos['data_certame'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['local_certame'])){
                $row['Key']  = 'Local Certame';
                $row['Value']  = $campos['local_certame'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['objeto'])){
                $row['Key']  = 'Objeto';
                $row['Value']  = $campos['objeto'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['inicio_vigencia'])){
                $row['Key']  = 'Início Vigência';
                $row['Value']  = $campos['inicio_vigencia'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['final_vigencia'])){
                $row['Key']  = 'Final Vigência';
                $row['Value']  = strtotime($campos['final_vigencia']);
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['publicacao'])){
                $row['Key']  = 'Publicação';
                $row['Value']  = $campos['publicacao'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['previsao_orcamentaria'])){
                $row['Key']  = 'Previsão Orçamentária';
                $row['Value']  = $campos['previsao_orcamentaria'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['relacionado_covid'])){
                  $row['Key']  = 'Relacionado ao Covid?';
                  if($campos['relacionado_covid'])
                    $row['Value']  = 'Sim';
                  else
                    $row['Value']  = 'Não';
                  fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['cpf_cnpj'])){
                $row['Key']  = 'CPF/CNPJ';
                $row['Value']  = $campos['cpf_cnpj'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['numero_contrato'])){
                $row['Key']  = 'Número Contrato';
                $row['Value']  = $campos['numero_contrato'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['numero_processo_licitatorio'])){
                $row['Key']  = 'Número Processo Licitatório';
                $row['Value']  = $campos['numero_processo_licitatorio'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['valor'])){
                $row['Key']  = 'Valor';
                $row['Value']  = $campos['valor'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['data_assinatura'])){
                $row['Key']  = 'Data Assinatura';
                $row['Value']  = $campos['data_assinatura'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['fundamento_legal'])){
                $row['Key']  = 'Fundamento Legal';
                $row['Value']  = $campos['fundamento_legal'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['numero_dispensa'])){
                $row['Key']  = 'Número Dispensa';
                $row['Value']  = $campos['numero_dispensa'];
                fputcsv($file, array($row['Key'], $row['Value']));
              }
              if(isset($campos['possui_aditivo'])){
                $row['Key']  = 'Possui Aditivo?';
                if($campos['possui_aditivo'])
                    $row['Value']  = 'Sim';
                  else
                    $row['Value']  = 'Não';
                  fputcsv($file, array($row['Key'], $row['Value']));
              }

              fclose($file);
          };

        return response()->stream($callback, 200, $headers);

    }
    else if($request->formato == 3){

      $data = json_encode([$campos]);
      $file = time() . '_file.json';
      $destinationPath=storage_path()."/upload/json/";
      if (!is_dir($destinationPath)) {  mkdir($destinationPath,0777,true);  }
      File::put($destinationPath.$file,$data);

      return response()->download($destinationPath.$file);
    }
    else if($request->formato == 4){

      $xml = new \SimpleXMLElement('<?xml version="1.0" encoding="utf-8"?><mydoc></mydoc>');

      $xml->addAttribute('version', '1.0');
      $xml->addChild('datetime', date('Y-m-d H:i:s'));

      $camp = $xml->addchild('campos');

      foreach ($campos->getAttributes() as $key => $value) {
        if($value != null)
          $camp->addChild($key, $value);
      }

      $file = time() . '_file.xml';
      $destinationPath=storage_path()."/upload/xml/";
      if (!is_dir($destinationPath)) {  mkdir($destinationPath,0777,true);  }
      $xml->saveXML($destinationPath.$file);

      return response()->download($destinationPath.$file);
    }

  }

  public function salvarEditalAcessado(Request $request, $tipo, $mes, $ano, $id)
  {

    $nome = $request->input('nome');
		$email  = $request->input('email');
		$cpf  = $request->input('ctt_cpf_cnpj');
    $telefone = $request->input('ctt_telefone');

    DB::beginTransaction();

    try {
      $banner =  EditaisAcessados::create([
        'edital_nome'             =>    $nome,
        'edital_email'            =>    $email,
        'edital_cpf'              =>    $cpf,
        'edital_telefone'         =>    $telefone,
        'edital_tipo'             =>    $tipo,
        'edital_mes'              =>    $mes,
        'edital_ano'              =>    $ano,
        'edital_DocumentoId'      =>    $id
      ]);

      DB::commit();

    }
    catch(\Exception $e) {
      DB::rollback();
      Log::error($e);
      return $this->error($e->getMessage(), 500, $e);
    }


    // Buscar anexo
		$anexo = Anexo::select('anexo.*')
					  ->join('documento_anexo AS dan', 'dan.anexo_id', '=', 'anexo.anexo_id')
					  ->where('dan.anexo_id', $id)
					  ->first();

		return AnexoService::exibirAnexo($anexo);
  }

  public function index(Request $request)
  {
    $table     = $request->input('table', true);
    $limit     = $request->input('limit', 20);
    $page      = $request->input('page', 1);
    $orderBy   = $request->input('orderBy', 'doc_data_cadastro');
    $ascending = $request->input('ascending', 0);

    $data = EditaisAcessados::select('editais_acessados.*', 'tipo_processo.tpr_nome', 'documento.doc_numero_processo')
      ->join('tipo_processo', 'editais_acessados.edital_tipo', '=', 'tipo_processo.tipo_processo_id')
      ->join('documento_anexo', 'editais_acessados.edital_DocumentoId', '=', 'documento_anexo.anexo_id')
      ->join('documento', 'documento_anexo.documento_id', '=', 'documento.documento_id');
    
    // Filtros
    if ($request->has('query')) {
      $filters = json_decode($request->input('query'));

      if (!empty($filters->doc_numero_processo)) {
        $data->where('documento.doc_numero_processo', 'like', '%'.$filters->doc_numero_processo.'%');
      }

      if (!empty($filters->tipo_processo_id)) {
        $data->where('editais_acessados.edital_tipo', $filters->tipo_processo_id);
      }
    }

    // Contagem e Limite/Paginacao
    if($table) {
      $count = $data->count();
      $data->limit($limit)->skip($limit * ($page - 1));
    }

    // Ordenacao
    $direction = $ascending == 1 ? "ASC" : "DESC";
    $data->orderBy($orderBy, $direction);

    $result = $data->get()->toArray();

    if($table) {
      return $this->success([ 'items' => $result, 'count' => $count ]);
    }

    return $this->success($result);
  }

  public function show(Request $request, $id)
  {
    $edital = EditaisAcessados::where('edital_acessados_id', $id)->get();

    //dd($banner);
    return view('edital.detalhe')->with('edital', $edital);
  }
}

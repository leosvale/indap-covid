<?php

namespace  App\Models;

use Illuminate\Database\Eloquent\Model;
use DB;

class EditaisAcessados extends Model
{
  protected $table      = 'editais_acessados';
  protected $primaryKey = 'edital_acessados_id';

  protected $fillable = [
  'edital_nome',
  'edital_email',
  'edital_cpf',
  'edital_telefone',
  'edital_tipo',
  'edital_mes',
  'edital_ano',
  'edital_DocumentoId' // ATENÇÃO: Este atributo está apontando para um anexo, não para um documento!
  ];

  /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['tipo_processo', 'num_processo', 'data_formatada'];

  public function getTipoNomeAttribute()
  {
    return DB::table('tipo_categoria_processo')->where('tipo_categoria_processo_id',$this->edital_tipo)->first()->tcp_nome;
  }

  public function getTipoProcessoAttribute()
  {
    return DB::table('tipo_processo')->where('tipo_processo_id', $this->edital_tipo)->first()->tpr_nome;
  }

  public function getNumProcessoAttribute()
  {
    // Recuperando o documento_id de verdade
    $documentoAnexo = DB::table('documento_anexo')
      ->where('anexo_id',$this->edital_DocumentoId)
      ->first();//->documento_id;

    if (!$documentoAnexo)
      return '---';

    $documentoId = $documentoAnexo->documento_id;

    $documento = DB::table('documento')->where('documento_id', $documentoId)->first();
    
    return $documento ? $documento->doc_numero_processo : '---';
  }

  public function getDataFormatadaAttribute()
  {
    return $this->created_at->format('d/m/y');
  }
}

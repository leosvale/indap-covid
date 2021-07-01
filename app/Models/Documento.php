<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Documento extends Model
{
    protected $table      = 'documento';
    protected $primaryKey = 'documento_id';

    const CREATED_AT = 'doc_data_cadastro';
    const UPDATED_AT = 'doc_data_atualizacao';

    protected $fillable = [
        'usuario_id',
		'tipo_processo_id',
		'doc_numero_processo',
    ];
    
    protected $hidden = [];

    public function campos() {
        return $this->hasOne(CamposEspecificos::class, 'documento_id');
    }

	public function anexos() {
		return $this->belongsToMany(Anexo::class, 'documento_anexo', 'documento_id', 'anexo_id')
					->withPivot(['tipo_categoria_processo_id', 'dan_data_documento']);
	}
}

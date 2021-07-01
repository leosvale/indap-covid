<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Solicitacao extends Model
{
	protected $table      = 'solicitacao';
	protected $primaryKey = 'solicitacao_id';

	const CREATED_AT = 'slc_data_cadastro';
	const UPDATED_AT = 'slc_data_atualizacao';

	/*
	 * Atenção: A coluna slc_protocolo é gerada automaticamente através de uma trigger
	 * e por isso não se encontra entre as colunas fillable.
	 * O protocolo não deve ser inserido manualmente, apenas através dessa trigger.
	 */
	protected $fillable = [
		'solicitante_id',
		'slc_tipo',
		'slc_protocolo',
		'slc_orgao',
		'slc_prazo_resposta',
		'slc_situacao',
		'slc_titulo',
		'slc_descricao',
	];

	protected $hidden = [];

	public function solicitante() {
		return $this->belongsTo(Solicitante::class, 'solicitante_id');
	}

	public function anexos() {
		return $this->belongsToMany(Anexo::class, 'solicitacao_anexo', 'solicitacao_id', 'anexo_id');
	}
}

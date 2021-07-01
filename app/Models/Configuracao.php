<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Configuracao extends Model
{
	protected $table      = 'configuracao';
	protected $primaryKey = 'configuracao_id';
	public $incrementing  = false;

	const CREATED_AT = 'cfg_data_cadastro';
	const UPDATED_AT = 'cfg_data_atualizacao';

	protected $fillable = [
		'configuracao_id',
		'cfg_valor',
		'cfg_descricao',
	];

	protected $hidden = [];
}

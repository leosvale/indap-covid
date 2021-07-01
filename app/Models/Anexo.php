<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Anexo extends Model
{
	protected $table      = 'anexo';
	protected $primaryKey = 'anexo_id';

	const CREATED_AT = 'ane_data_cadastro';
	const UPDATED_AT = NULL;

	protected $fillable = [
		'ane_nome',
		'ane_mime',
		'ane_publico',
		'ane_arquivo',
	];

	protected $hidden = [];
}

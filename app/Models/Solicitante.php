<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Solicitante extends Model
{
	protected $table      = 'solicitante';
	protected $primaryKey = 'solicitante_id';

	const CREATED_AT = 'sol_data_cadastro';
	const UPDATED_AT = 'sol_data_atualizacao';

	protected $fillable = [];

	protected $hidden = [];
}

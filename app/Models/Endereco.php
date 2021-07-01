<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Endereco extends Model
{
	protected $table      = 'endereco';
	protected $primaryKey = 'endereco_id';

	const CREATED_AT = 'end_data_cadastro';
	const UPDATED_AT = 'end_data_atualizacao';

	protected $fillable = [];

	protected $hidden = [];
}

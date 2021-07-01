<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoriaPublicacao extends Model
{
    protected $table      = 'tipo_categoria_publicacao';
    protected $primaryKey = 'tipo_categoria_publicacao_id';

    const CREATED_AT = 'tcp_data_cadastro';
    const UPDATED_AT = NULL;

	protected $fillable = [
		'tcp_nome',
	];
}

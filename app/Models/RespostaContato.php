<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RespostaContato extends Model
{
	protected $table      = 'resposta_contato';
	protected $primaryKey = 'id';

	protected $fillable = [
		'assunto',
		'mensagem',
        'contato_id'
	];
}

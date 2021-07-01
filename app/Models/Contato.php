<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contato extends Model
{
	protected $table      = 'contato';
	protected $primaryKey = 'contato_id';

	const CREATED_AT = 'ctt_data_cadastro';
	const UPDATED_AT = NULL;

	protected $fillable = [];

	protected $hidden = [];

	public function anexos() {
		return $this->belongsToMany(Anexo::class, 'contato_anexo', 'contato_id', 'anexo_id');
	}
}

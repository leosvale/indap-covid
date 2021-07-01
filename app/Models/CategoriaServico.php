<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoriaServico extends Model
{
    protected $table      = 'tipo_categoria_servico';
    protected $primaryKey = 'tipo_categoria_servico_id';

    const CREATED_AT = 'tcs_data_cadastro';
    const UPDATED_AT = NULL;

	protected $fillable = [
		'tcs_nome',
        'tcs_icone',
        'tcs_descricao',
	];

    public function publicacoes() {
    	return $this->hasMany(Publicacao::class, 'tipo_categoria_servico_id', 'tipo_categoria_servico_id');
    }

}

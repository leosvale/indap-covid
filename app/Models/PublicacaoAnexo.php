<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PublicacaoAnexo extends Model
{
    protected $table      = 'publicacao_anexo';
    protected $primaryKey = 'pub_anexo_id';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $fillable = [
		'pub_id',
		'pub_anexo_endereco',
		'pub_anexo_nome',
		'ane_mime',
    ];

}

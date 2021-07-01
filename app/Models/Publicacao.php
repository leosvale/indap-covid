<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use File;

class Publicacao extends Model
{
    protected $table      = 'publicacao';
    protected $primaryKey = 'publicacao_id';

    const CREATED_AT = 'pub_data_cadastro';
    const UPDATED_AT = 'pub_data_atualizacao';

    protected $fillable = [
		'autor_id',
		'pub_tipo',
		'pub_titulo',
		'pub_descricao',
		'pub_url',
		'pub_conteudo',
		'pub_resumo',
		'pub_status',
		'pub_ordem_menu',
		'pub_menu_lateral',
		'pub_data_visivel',
		'tipo_categoria_servico_id',
    ];

	protected $hidden = [];
	
	/**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['accordion', 'tipo_servico_nome'];

    public function categorias() {
    	return $this->belongsToMany(CategoriaPublicacao::class, 'publicacao_categoria', 'publicacao_id', 'tipo_categoria_publicacao_id');
    }

	public function tipoServico() {
    	return $this->belongsTo(CategoriaServico::class, 'tipo_categoria_servico_id', 'tipo_categoria_servico_id');
    }

	public function getTipoServicoNomeAttribute()
	{
		return $this->tipoServico ? $this->tipoServico->tcs_nome : null;
	}

	public function anexo() {
		return $this->belongsTo(Anexo::class, 'anexo_id');
	}
	
	public function getAccordionAttribute()
	{
		if ($this->pub_conteudo && $this->pub_conteudo[0] == '[' && 
			$this->pub_conteudo[strlen($this->pub_conteudo) - 1] == ']') {
			return json_decode($this->pub_conteudo, true);
		} else {
			return false;
		}
	}

	protected static function boot()
    {
		parent::boot();

		static::deleting(function ($publicacao) {
			try {
				DB::beginTransaction();
				$anexos = PublicacaoAnexo::where('pub_id', $publicacao->publicacao_id)->get();
	
				foreach ($anexos as $anexo) {
					$path = storage_path($anexo->pub_anexo_endereco);
					File::Delete($path);
					$anexo->delete();
				}
				DB::commit();
			}
			catch(\Exception $e) {
				DB::rollback();
				throw $e;
			}
        });
	}
}

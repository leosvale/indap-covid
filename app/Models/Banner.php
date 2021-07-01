<?php

namespace  App\Models;

use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    protected $table      = 'banners';
    protected $primaryKey = 'banner_id';

    protected $fillable = [
		'banner_nome',
		'banner_url',
        'banner_imagem',
        'banner_lateral'
    ];

    protected $appends = ['banner_tipo'];

    public function getBannerTipoAttribute()
    {
      return $this->banner_lateral == 'S' ? 'Banner Lateral' : 'Serviço Online';
    }
}

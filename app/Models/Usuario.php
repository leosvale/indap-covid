<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Usuario extends Authenticatable
{
    use Notifiable;

	protected $table      = 'usuario';
	protected $primaryKey = 'usuario_id';

	const CREATED_AT = 'usu_data_cadastro';
	const UPDATED_AT = 'usu_data_atualizacao';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'usu_senha',
	    'usu_administrador',
	    'usu_codigo_confirmacao',
    ];

	public function username() {
		return 'usu_login';
	}

	public function getAuthPassword() {
		return $this->usu_senha;
	}

	public function getRememberToken() {
		return $this->usu_token;
	}

	public function setRememberToken($value) {
		$this->usu_token = $value;
	}

	public function getRememberTokenName() {
		return 'usu_token';
	}
}

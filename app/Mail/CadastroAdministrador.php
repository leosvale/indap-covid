<?php

namespace App\Mail;

use App\Models\Configuracao;
use App\Models\Usuario;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class CadastroAdministrador extends Mailable
{
    use Queueable, SerializesModels;

	protected $usuario;
	protected $usu_senha;

	/**
	 * Create a new message instance.
	 *
	 * @param \App\Models\Usuario $usuario
	 * @param $usu_senha
	 */
    public function __construct(Usuario $usuario, $usu_senha)
    {
	    $this->usuario = $usuario;
	    $this->usu_senha = $usu_senha;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
	    $portal   = Configuracao::where('configuracao_id', 'portal')->value('cfg_valor');
	    $reply_to = Configuracao::where('configuracao_id', 'email')->value('cfg_valor');

	    if (!$portal) {
		    $portal = 'E-Sic';
	    }

	    $data = [
		    'portal' => $portal,
		    'link'   => url( 'painel' ),
		    'login'  => $this->usuario->usu_login,
		    'senha'  => $this->usu_senha,
	    ];

	    if ($reply_to) {
		    $this->replyTo($reply_to, $portal);
	    }

	    return $this->view('emails.cadastro_usuario')
	                ->with($data)
	                ->subject('Confirmação de cadastro no '.$data['portal']);
    }
}

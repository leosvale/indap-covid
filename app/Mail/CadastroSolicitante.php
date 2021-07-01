<?php

namespace App\Mail;

use App\Models\Configuracao;
use App\Models\Solicitante;
use App\Models\Usuario;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class CadastroSolicitante extends Mailable
{
    use Queueable, SerializesModels;

    protected $solicitante;
    protected $usuario;

	/**
	 * Create a new message instance.
	 *
	 * @param \App\Models\Solicitante $solicitante
	 * @param \App\Models\Usuario $usuario
	 */
    public function __construct(Solicitante $solicitante, Usuario $usuario)
    {
	    $this->solicitante = $solicitante;
	    $this->usuario = $usuario;
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

	    if(!$portal) {
	    	$portal = 'Portal da Prefeitura';
	    }

	    $data = [
		    'nome'   => $this->solicitante->sol_nome,
		    'portal' => $portal,
		    'link'   => url( 'esic/confirmacao?token=' . $this->usuario->usu_codigo_confirmacao ),
	    ];

	    if($reply_to) {
	    	$this->replyTo($reply_to, $portal);
	    }

	    return $this->view('emails.solicitante.cadastro')
		            ->with($data)
		            ->subject('Confirmação de cadastro no '.$data['portal']);
    }
}

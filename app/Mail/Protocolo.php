<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Models\Configuracao;

class Protocolo extends Mailable
{
    use Queueable, SerializesModels;

    protected $protocolo;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($protocolo)
    {
        $this->protocolo = $protocolo;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $portal   = Configuracao::where('configuracao_id', 'portal')->value('cfg_valor');

        if (!$portal) {
            $portal = 'E-Sic';
        }

        $data = [
            'portal'    => $portal,
            'protocolo' => $this->protocolo
        ];


        return $this->view('emails.ouvidoria.protocolo')
                ->with($data)
                ->subject('Confirmação do número de protocolo - '.$data['portal']);
    }
}

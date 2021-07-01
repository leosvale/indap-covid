<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Models\Contato;


class OuvidoriaEmail extends Mailable
{
    use Queueable, SerializesModels;

    private $texto;
    private $assunto;
    private $files = [];
    private $contato;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($texto, $assunto, $files, Contato $contato)
    {
        $this->texto = $texto;
        $this->assunto = $assunto;
        $this->files = $files;
        $this->contato = $contato;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $data = [
            'texto' => $this->texto,
            'contato' => $this->contato
        ];

        $email =  $this->view('emails.ouvidoria.resposta_ouvidoria')
                    ->with($data)
                    ->subject($this->assunto);

        // $attachments is an array with file paths of attachments
        foreach($this->files as $file){
            $email->attach($file);
        }
        return $email;
    }
}

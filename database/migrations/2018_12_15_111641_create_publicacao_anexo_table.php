<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePublicacaoAnexoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('publicacao_anexo', function(Blueprint $table){
        $table->increments('publcao_anexo_id');
        $table->string('pub_id');
        $table->string('pub_anexo_endereco');
        $table->string('pub_anexo_nome');
        $table->string('ane_mime');
        $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('publicacao_anexo');
    }
}

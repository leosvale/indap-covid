<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEditaisAcessadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('editais_acessados', function(Blueprint $table){
        $table->increments('edital_acessados_id');
        $table->string('edital_nome');
        $table->string('edital_email');
        $table->string('edital_cpf');
        $table->integer('edital_tipo');
        $table->integer('edital_mes');
        $table->integer('edital_ano');
        $table->integer('edital_DocumentoId');
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
        Schema::dropIfExists('editais_acessados');
    }
}

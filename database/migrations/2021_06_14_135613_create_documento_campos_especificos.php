<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDocumentoCamposEspecificos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documento_campos_especificos', function(Blueprint $table){
        $table->increments('id');
        $table->integer('documento_id');
        $table->longText('descricao')->nullable();
        $table->string('orgao')->nullable();
        $table->string('numero_licitacao')->nullable();
        $table->string('numero_processo_adm')->nullable();
        $table->string('local_execucao')->nullable();
        $table->string('numero_edital')->nullable();
        $table->date('data_certame')->nullable();
        $table->string('local_certame')->nullable();
        $table->string('objeto')->nullable();
        $table->date('inicio_vigencia')->nullable();
        $table->date('final_vigencia')->nullable();
        $table->date('publicacao')->nullable();
        $table->string('previsao_orcamentaria')->nullable();
        $table->boolean('relacionado_covid')->nullable();
        $table->string('cpf_cnpj')->nullable();
        $table->string('numero_contrato')->nullable();
        $table->string('numero_processo_licitatorio')->nullable();
        $table->string('valor')->nullable();
        $table->date('data_assinatura')->nullable();
        $table->string('fundamento_legal')->nullable();
        $table->boolean('possui_aditivo')->nullable();
        $table->string('numero_dispensa')->nullable();
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
        Schema::dropIfExists('documento_campos_especificos');
    }
}

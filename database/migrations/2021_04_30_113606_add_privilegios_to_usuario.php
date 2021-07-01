<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPrivilegiosToUsuario extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('usuario', function($table) {
            $table->boolean('privilegio_licitacoes');
            $table->boolean('privilegio_noticias');
            $table->boolean('privilegio_servicos');
            $table->boolean('privilegio_informacao');
            $table->boolean('privilegio_editais');
            $table->boolean('privilegio_esic');
            $table->boolean('privilegio_ouvidoria');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('usuario', function($table) {
            $table->dropColumn('privilegio_licitacoes');
            $table->dropColumn('privilegio_noticias');
            $table->dropColumn('privilegio_servicos');
            $table->dropColumn('privilegio_informacao');
            $table->dropColumn('privilegio_editais');
            $table->dropColumn('privilegio_esic');
            $table->dropColumn('privilegio_ouvidoria');
        });
    }
}

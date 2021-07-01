<?php

use Illuminate\Database\Seeder;

class ConfiguracaoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('configuracao')->insert([
        'configuracao_id' => 'telefone_primario',
    ]);
        DB::table('configuracao')->insert([
        'configuracao_id' => 'telefone_secundario',
    ]);
    }
}

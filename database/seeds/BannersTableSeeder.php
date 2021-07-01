<?php

use Illuminate\Database\Seeder;

class BannersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('banners')->insert([
        'banner_nome' => 'Diário Oficial do Município',
        'banner_url' => 'http://www.indap.org.br/cad.php?true&estado=Bahia&%20categoria=Ia%E7u&palavra=Prefeitura&pg=buscar',
        'banner_imagem' => '/images/btn-diario-municipio.jpg',
    ]);
        DB::table('banners')->insert([
        'banner_nome' => 'Ouvidoria',
        'banner_url' => '/ouvidoria',
        'banner_imagem' => '/images/btn-ouvidoria.jpg',
    ]);
        DB::table('banners')->insert([
        'banner_nome' => 'E-Sic',
        'banner_url' => '/esic',
        'banner_imagem' => '/images/btn-esic.jpg',
    ]);
        DB::table('banners')->insert([
        'banner_nome' => 'Licitações e Contratos',
        'banner_url' => '/licitacoes',
        'banner_imagem' => '/images/btn-licitacoes.jpg',
    ]);
        DB::table('banners')->insert([
        'banner_nome' => '131 Receita Despesa',
        'banner_url' => 'http://177.39.224.203:5020/portal/',
        'banner_imagem' => '/images/btn-131.jpg',
    ]);
        DB::table('banners')->insert([
        'banner_nome' => 'Nota Fiscal Eletrônica',
        'banner_url' => 'http://www.nfe.nobe.com.br/',
        'banner_imagem' => '/images/btn-nfse.jpg',
    ]);
    }
}

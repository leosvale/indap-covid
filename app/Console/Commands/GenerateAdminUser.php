<?php

namespace App\Console\Commands;

use DB, Hash;
use App\Models\Usuario;
use Illuminate\Console\Command;

class GenerateAdminUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'painel:admin {domain} {password}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Gerar usuário administrativo para o sistema.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
    	$domain = $this->argument('domain');

	    $entidade = DB::table('entidade')->where('ent_dominio', $domain)->first();

	    if(!$entidade) {
		    $this->error('ERRO: Nenhuma entidade com o dominio informado.');
		    exit;
	    }

	    // Configurar banco da entidade
	    $default_conn = DB::getDefaultConnection();
	    $database_config = [ 'database.connections.'.$default_conn.'.database' => $entidade->ent_banco ];

	    if($entidade->ent_usuario) {
		    $database_config['database.connections.'.$default_conn.'.username'] = $entidade->ent_usuario;
	    }

	    if($entidade->ent_senha) {
		    $database_config['database.connections.'.$default_conn.'.password'] = $entidade->ent_senha;
	    }

	    config( $database_config );

	    // Reconectar
	    DB::reconnect( $default_conn );

	    // Verificar se usuário admin já existe
	    if(Usuario::where('usu_login', 'admin')->first()) {
	        $this->error('ERRO: Usuario admin ja esta cadastrado no banco de dados.');
	        exit;
        }

	    // Validação da senha
        if(preg_match('/^(?=.*[A-Za-z])(?=.*[0-9]).{8,20}$/', $this->argument('password')) !== 1) {
	        $this->error('ERRO: A senha deve ter de 8 a 20 caracteres e pelo menos 1 letra e 1 número.');
	        exit;
        }

		$admin = new Usuario();
	    $admin->usu_login = 'admin';
	    $admin->usu_senha = Hash::make($this->argument('password'));
	    $admin->usu_tipo = 'ADM';
	    $admin->usu_situacao_cadastro = 'A';
	    $admin->save();

	    $this->info('Usuario "admin" cadastrado com sucesso.');
    }
}

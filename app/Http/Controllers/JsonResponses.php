<?php

namespace App\Http\Controllers;

trait JsonResponses
{
	/**
     * Resposta JSON de sucesso.
     * 
     * @param $data		Dados da resposta
     */
    protected function success($data = [])
    {
        return response()->json([
        	'status' => 'success',
        	'data'   => $data
    	]);
    }

	/**
	 * Resposta de JSON de erro.
	 * 
	 * @param string $message Mensagem de erro
	 * @param int $code	Código de erro HTTP
	 * @param mixed $debug Define a informação a ser exibida em modo de DEBUG
	 *
	 * @return \Illuminate\Http\JsonResponse
	 */
	protected function error($message = '', $code = 500, $debug = null)
    {
		$message = $message ?: 'Ocorreu um erro durante a sua solicitação. Por favor, tente novamente mais tarde.';
	    
	    $response = [
	    	'status'  => 'error',
	    	'message' => $message
    	];

	    $error_data = [];
	    
	    if($debug)
	    {
	    	if($debug instanceof \Exception) 
	    	{
	    		$class_name = get_class($debug);
	    		$reduced_name = strrchr($class_name, '\\');
	    		// $exception_code = $debug->getStatusCode();
	    		$error_data['exception'] = $reduced_name ? substr($reduced_name, 1) : $class_name;
	    		
    			$error_data['debug'] = $debug->getMessage();

	    		// Usar código de erro da Exception
	    		// $code = $exception_code ?: $code;
	    	}
	    	else {
	    		$error_data['debug'] = (string) $debug;
	    	}
	    }

	    if(config('app.debug') && $error_data) {
	    	$response['data'] = $error_data;
	    }
		
		return response()->json($response, $code);
    }

    /**
     * 
     */
    protected function fail($data = [], $code = 422)
    {
    	$response = [
        	'status' => 'fail',
        	'data'   => $data
    	];

    	return response()->json($response, $code);
    }
}
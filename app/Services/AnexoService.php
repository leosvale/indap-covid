<?php

namespace App\Services;

use Image;
use App\Models\Anexo;

class AnexoService
{
	/**
	 * @param \Illuminate\Http\UploadedFile|null $arquivo
	 * @param string $dir
	 *
	 * @return \App\Models\Anexo|null
	 * @throws \Exception
	 */
	public static function gerarAnexo($arquivo, $dir = 'anexos/')
	{
		if (!$arquivo) { return null; }

		if (!$arquivo->isValid()) {
			throw new \Exception('Ocorreu um erro no upload do arquivo. Por favor, atualize sua página e tente novamente.');
		}

		$file_path = $dir . date('Y/m');
		$file_hash = uniqid(mt_rand());
		$file_name = $arquivo->getClientOriginalName();
		$file_mime = $arquivo->getMimeType();
		$file_mime = $file_mime ?: $arquivo->getClientMimeType();
		$file_ext  = $arquivo->getClientOriginalExtension();

		$arquivo->move(storage_path($file_path), $file_hash . '.' . $file_ext);

		$anexo = Anexo::create([
			'ane_nome'    => $file_name,
			'ane_mime'    => $file_mime,
			'ane_arquivo' => $file_path . '/' . $file_hash . '.' . $file_ext
		]);

		return $anexo;
	}

	/**
	 * @param \Illuminate\Http\UploadedFile $arquivo
	 *
	 * @return \App\Models\Anexo|null
	 */
	public static function gerarAnexoPublico($arquivo)
	{
		if(!$arquivo || !$arquivo->isValid()) {
			return null;
		}

		$file_path = 'anexos/' . date('Y/m');
		$file_hash = uniqid(mt_rand());
		$file_name = $arquivo->getClientOriginalName();
		$file_mime = $arquivo->getMimeType();
		$file_mime = $file_mime ?: $arquivo->getClientMimeType();
		$file_ext  = $arquivo->getClientOriginalExtension();
		// $arquivo->move(storage_path($file_path), $file_hash . '.' . $file_ext);

		// Pasta pública de anexos
		$public_path = public_path($file_path);

		if(!file_exists($public_path)) {
			mkdir($public_path, 0755, true);
		}

		// Gerar imagens nos tamanhos necessarios
		$img = Image::make($arquivo);
		$img->backup();

		// Imagem pequena
		$img->fit(300, 300, function ($constraint) { $constraint->upsize(); });
		$img->save($public_path . '/' . $file_hash . '_p.' . $file_ext);

		// Imagem grande
		$img->reset();
		$img->widen(1080, function ($constraint) { $constraint->upsize(); });
		$img->save($public_path . '/' . $file_hash . '_g.' . $file_ext);

		$img->destroy();

		$anexo = Anexo::create([
			'ane_nome'    => $file_name,
			'ane_mime'    => $file_mime,
			'ane_publico' => 'S',
			'ane_arquivo' => $file_path . '/' . $file_hash . '.' . $file_ext
		]);

		return $anexo;
	}

	/**
	 * Remover os arquivos e o objeto de um anexo público.
	 *
	 * @param \App\Models\Anexo $anexo
	 */
	public static function removerAnexoPublico($anexo)
	{
		$path_info = pathinfo($anexo->ane_arquivo);
		$public_path = public_path($path_info['dirname']);
		$file_pattern = $public_path . '/' . $path_info['filename'] . '*';

		// Buscando e removendo arquivos
		foreach (glob($file_pattern) as $filename) {
			@unlink($filename);
		}

		// Excluindo objeto
		$anexo->delete();
	}

	/**
	 * Exibir um arquivo privado para o usuário.
	 *
	 * @param \App\Models\Anexo $anexo
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public static function exibirAnexo($anexo)
	{
		if(!$anexo) {
			return response('Arquivo não encontrado.', 404);
		}

		// Carregar arquivo físico
		$path = storage_path($anexo->ane_arquivo);

		// Erro 404 se o arquivo físico não for encontrado
		if(!is_file($path)) {
			return response('Arquivo não encontrado.', 404);
		}

		// Exibir arquivo
		$file = file_get_contents($path);

		return response($file)
			->header('Content-Type', $anexo->ane_mime)
			->header('Content-Length', strlen($file))
			->header('Content-Disposition', 'inline; filename="'. $anexo->ane_nome .'"');
	}

	/**
	 * Exibir um arquivo privado para o usuário.
	 *
	 * @param \App\Models\Anexo $anexo
	 * @return \Symfony\Component\HttpFoundation\Response
	 */
	public static function exibirAnexoPublicacao($anexo)
	{
		if(!$anexo) {
			return response('Arquivo não encontrado.', 404);
		}

		// Carregar arquivo físico
		$path = storage_path($anexo->pub_anexo_endereco);

		// Erro 404 se o arquivo físico não for encontrado
		if(!is_file($path)) {
			return response('Arquivo não encontrado.', 404);
		}

		// Exibir arquivo
		$file = file_get_contents($path);

		return response($file)
			->header('Content-Type', $anexo->ane_mime)
			->header('Content-Length', strlen($file))
			->header('Content-Disposition', 'inline; filename="'. $anexo->ane_nome .'"');
	}
}

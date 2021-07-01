<?php

namespace App\Http\Controllers;

use Auth, DB, Log;
use Illuminate\Http\Request;
use App\Models\Banner;
use App\Models\Configuracao;

class BannerController extends Controller
{

    /**
     * Tela de cadastro de páginas.
     */
    public function cadastro($id = null)
    {
        if (!$id == null) {
            $banner = Banner::where('banner_id', $id)->get();
            $banner->first()->banner_lateral = $banner->first()->banner_lateral == 'S';
        } else {
            $array[0] = ["banner_nome" => "", "banner_url" => "", "banner_id" => "novo", "banner_imagem" => "oi", "banner_lateral" => true];
            $banner = collect($array);
        }
        return view('banner.cadastro')->with('banner', $banner);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Banner::all();

        return $this->success($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request);
        // Validação
        //$this->validateRequest($request);

        // Usuário
        $usuario = Auth::user();

        $imageName = $request->image->getClientOriginalName() . time() . '.' . $request->image->getClientOriginalExtension();
        $request->image->move(public_path('images'), $imageName);

        DB::beginTransaction();

        try {
            $banner =  Banner::create([
                'banner_nome'     =>    $request->nome,
                'banner_url'      =>    $request->url,
                'banner_imagem'   =>    '/images/' . $imageName,
                'banner_lateral'  =>    $request->banner_lateral == 'true' ? 'S' : 'N'
            ]);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            Log::error($e);
            return $this->error($e->getMessage(), 500, $e);
        }

        $this->updateBannersInConfiguracao();

        return $this->success($banner);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $banner = Banner::where('banner_id', $id)->get();

        //dd($banner);
        return $this->success($banner);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //dd($id);
        $banner_id =  $request->input($id);
        $banner = Banner::where('banner_id', $id)->first();

        // Validação
        //$this->validateRequest($request);

        DB::beginTransaction();

        try {
            $banner->banner_nome    =   $request->nome;
            $banner->banner_url     =   $request->url;
            $banner->banner_lateral =   $request->banner_lateral == 'true' ? 'S' : 'N';
            if ($request->image != null) {
                $imageName = $request->image->getClientOriginalName() . time() . '.' . $request->image->getClientOriginalExtension();
                $request->image->move(public_path('images'), $imageName);
                $banner->banner_imagem = '/images/' . $imageName;
            }
            //$banner->banner_nome       = $request->input( 'banner_nome' );
            //$banner->banner_url       = $request->input( 'banner_url' );

            $banner->save();

            //$banner->update(['banner_nome' => $request->input('banner_nome'),
            //               'banner_url' => $request->input('banner_url')]);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            Log::error($e);
            return $this->error($e->getMessage(), 500, $e);
        }

        $this->updateBannersInConfiguracao();

        return $this->success($banner);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Autorização
        $usuario = Auth::user();

        if ($usuario->usu_administrador != 'S') {
            return $this->error('Não permitido.', 403);
        }

        $banner = Banner::where('banner_id', $id)->first();

        $banner->delete();

        $this->updateBannersInConfiguracao();

        return $this->success();
    }

    /**
     * Validação para store e update.
     */
    private function validateRequest(Request $request)
    {
        $rules = [
            'banner_nome'      => 'required|min:3|max:200',
            'banner_url'       => 'required|min:3|max:200',
        ];

        $messages = [
            'banner_nome.min' => 'O nome deve ter pelo menos 3 caracteres.',
        ];

        $this->validate($request, $rules, $messages);
    }

    /**
     * Sempre que criar ou atualizr banner atualiar em Configuracao->banners->cfg_valor
     */
    private function updateBannersInConfiguracao()
    {
        //<a href="/esic"><img src="/images/btn-esic.jpg" alt="E-Sic"></a>

        $banners = Banner::all();
        $html = "";
        $htmlServico = "";

        foreach ($banners as $banner) {
            if ($banner->banner_lateral == 'S') {
                $html .= '<a target="_blank" href="' . $banner->banner_url . '"><img src="' . $banner->banner_imagem . '" alt="' .
                $banner->banner_nome . '"></a>';
            } else {
                $htmlServico .= '<a target="_blank" href="' . $banner->banner_url . '"><img src="' . $banner->banner_imagem . '" alt="' .
                    $banner->banner_nome . '"></a>';
            }
        }
        
        $configuracao = Configuracao::firstOrNew(['configuracao_id' => 'banners']);
        $configuracao->cfg_valor = $html;
        $configuracao->save();

        $configuracao_servico = Configuracao::firstOrNew(['configuracao_id' => 'banners_servico']);
        $configuracao_servico->cfg_valor = $htmlServico;
        $configuracao_servico->save();
    }
}

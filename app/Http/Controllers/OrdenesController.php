<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Clientes;
use App\Usuarios;
use App\Ordenes;

class OrdenesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function ConsultaPorRol(){
        if (session()->get("id")==2) { $Consulta[0]=session()->get("id"); }
        else{ $Consulta = Usuarios::select("id")->get()->toArray();  }

        return $Consulta;
    }


    public function index()
    {
    	$Ordenes = Ordenes::whereHas("clientes", function($q){
			    		$q->whereIn("id_usuario", self::ConsultaPorRol());
			    	})->with("clientes")->get();

    	$Clientes=Clientes::whereIn("id_usuario", self::ConsultaPorRol())->get();

        return view("ordenes.ordenes", ["Clientes" => $Clientes, "Ordenes" => $Ordenes]);
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
    public function store(Request $Request)
    {

        Ordenes::insert($Request->all());
        return "Exito";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(Request $Request, $id)
    {
    	Ordenes::where("id", $id)->update($Request->except("_method"));
    	return "Exito";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function listaUpdate(Request $Request){

        $Ordenes = Ordenes::whereHas("clientes", function($q){
			    		$q->whereIn("id_usuario", self::ConsultaPorRol());
			    	})->with("clientes")->get();

    	$Clientes=Clientes::whereIn("id_usuario", self::ConsultaPorRol())->get();

        return view("ordenes.lista", ["Clientes" => $Clientes, "Ordenes" => $Ordenes]);
    }

    public function destroy($id)
    {
        Ordenes::where("id", $id)->delete();
    }
}

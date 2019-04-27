<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Clientes;
use App\Usuarios;

class ClientesController extends Controller
{
    public function ConsultaPorRol(){
        if (session()->get("id")==2) { $Consulta[0]=session()->get("id"); }
        else{ $Consulta = Usuarios::select("id")->get()->toArray();  }

        return $Consulta;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Clientes = Clientes::whereIn("id_usuario", self::ConsultaPorRol())->get();
        return view("clientes.clientes", ["Clientes" => $Clientes]);
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
        $Request->merge(["id_usuario" => session()->get("id")]);
        Clientes::insert($Request->all());
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
        // return $Request;
        Clientes::where("id", $id)->update($Request->except("_method"));
        return "Exito";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Clientes::where("id", $id)->delete();
        return "Exito";
    }

    public function listaUpdate(Request $Request){

        $Clientes = Clientes::whereIn("id_usuario", self::ConsultaPorRol())->get();
        return view("clientes.lista", ["Clientes" => $Clientes]);
    }
}

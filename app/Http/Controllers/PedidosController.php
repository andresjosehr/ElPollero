<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Clientes;
use App\Usuarios;
use App\Ordenes;
use App\Pedidos;
use App\Productos;


class PedidosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function ConsultaPorRol(){
        if (session()->get("rol")==2) { $Consulta[0]=session()->get("id"); }
        else{ $Consulta = Usuarios::select("id")->get()->toArray();  }

        return $Consulta;
    }


    public function index()
    {
        
        $Pedidos = Pedidos::whereHas("clientes", function($q){
            $q->whereIn("id_usuario", self::ConsultaPorRol());
        })->with("clientes")->where("orden_creada", "No")->get();

        Productos::all();

        $Clientes=Clientes::whereIn("id_usuario", self::ConsultaPorRol())->get();

        return view("pedidos.pedidos", ["Clientes" => $Clientes, "Pedidos" => $Pedidos, "Productos" => Productos::all()]);
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

        if(session()->get("rol")=="2"){
            $Request->merge(["created_at" => new \DateTime()]);
        }
        
        Pedidos::insert($Request->all());
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
        Pedidos::where("id", $id)->update($Request->except("_method"));
        return "Exito";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

     public function listaUpdate()
     {
         $Pedidos = Pedidos::whereHas("clientes", function($q){
            $q->whereIn("id_usuario", self::ConsultaPorRol());
        })->with("clientes")->get();

        $Clientes=Clientes::whereIn("id_usuario", self::ConsultaPorRol())->get();

        return view("pedidos.lista", ["Clientes" => $Clientes, "Pedidos" => $Pedidos]);
     }
    public function destroy($id)
    {
        Pedidos::where("id", $id)->delete();
        return "Exito";
    }

    public function OrdenCreada($id){
        Pedidos::where("id", $id)->update(["orden_creada" => "Si"]);
    }

    public function MostrarForm(){

        return view("pedidos.crearPublico", ["Productos" => Productos::all()]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Clientes;
use App\Usuarios;
use App\Ordenes;
use Carbon\Carbon;

class InformesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){

        $Clientes=Usuarios::whereHas("Clientes", function($q){
            $q->where("created_at", "like", Carbon::today()->format('Y-m-d')."%");
        })->with("clientes")->get();

        $Ordenes=Clientes::whereHas("Ordenes", function($q){
                $q->where("created_at", "like", Carbon::today()->format('Y-m-d')."%");
            })->with("Ordenes")->get();

        $Pedidos=Clientes::whereHas("Pedidos", function($q){
            $q->where("created_at", "like", Carbon::today()->format('Y-m-d')."%");
        })->with("Pedidos")->get();;
        
        $Usuarios=Usuarios::where("rol", 2)->get();

        return view("informes", ["Usuarios" => $Usuarios, "Clientes" => $Clientes, "Ordenes" =>$Ordenes, "Pedidos" =>$Pedidos]);
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
        //
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

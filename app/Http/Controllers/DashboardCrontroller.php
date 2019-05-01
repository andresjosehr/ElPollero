<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pedidos;
use App\Ordenes;
use App\Usuarios;
use App\Clientes;
use DateTime;

class DashboardCrontroller extends Controller
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



        

        setlocale(LC_ALL,"es_ES");
        $string = date('d/m/Y', strtotime(date("d/m/Y") . ' +1 day'));
        $date = DateTime::createFromFormat("d/m/Y", $string);
        $CurrentDay = ucwords(strftime("%A",$date->getTimestamp()));

        // return $CurrentDay;

        $Pedidos = Pedidos::whereHas("clientes", function($q){
                                        $q->whereIn("id_usuario", self::ConsultaPorRol());
                                    })->with("clientes")->where("periodicidad", "like", "%".$CurrentDay."%")->get();

        $Clientes=Clientes::whereIn("id_usuario", self::ConsultaPorRol())->get();
        
        return view('escritorio', ["Pedidos" => $Pedidos]);
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

    public function llamadoPedidos(Request $Request){
        

        Pedidos::where($Request->only("id"))->update($Request->only("llamado"));
        return "Exito";
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pedidos;
use App\Ordenes;
use App\Usuarios;
use App\Clientes;
use App\Metas;
use App\Notificaciones;
use App\Productos;
use DateTime;
use Carbon\Carbon;

class DashboardCrontroller extends Controller
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



        

        setlocale(LC_ALL,"es_ES");
        $string = date('d/m/Y', strtotime(date("d/m/Y") . ' +1 months'));
        $date = DateTime::createFromFormat("m/d/Y", $string);
        $CurrentDay = ucwords(strftime("%A",$date->getTimestamp()));

        $Pedidos = Pedidos::whereHas("clientes", function($q){
                                        $q->whereIn("id_usuario", self::ConsultaPorRol());
                                    })->with("clientes")->where("periodicidad", "like", "%".$CurrentDay."%")->orWhere("periodicidad", $CurrentDay)->where("orden_creada", "No")->get();

        $Clientes=Clientes::whereIn("id_usuario", self::ConsultaPorRol())->get();

        $Metas=Metas::where("id_usuario", session()->get("id"))->get();

        $OrdenesHoyAbiertas = Ordenes::whereHas("clientes", function($q){
            $q->whereIn("id_usuario", self::ConsultaPorRol());
        })->with("clientes")->where("fecha_hora_entrega", "like", Carbon::today()->format('Y-m-d')."%")->where("estado", "Abierta")->get();
        
        $OrdenesHoyCerradas = Ordenes::whereHas("clientes", function($q){
            $q->whereIn("id_usuario", self::ConsultaPorRol());
        })->with("clientes")->where("fecha_hora_entrega", "like", Carbon::today()->format('Y-m-d')."%")->where("estado", "Cerrada")->get();

        $ClientesHoy=Clientes::whereIn("id_usuario", self::ConsultaPorRol())->where("created_at", "like", Carbon::today()->format('Y-m-d')."%")->get();
        
        return view('escritorio', ["Pedidos" => $Pedidos, "Metas" => $Metas, "OrdenesHoyAbiertas" => $OrdenesHoyAbiertas, "OrdenesHoyCerradas" => $OrdenesHoyCerradas, "ClientesHoy" => $ClientesHoy, "Productos" => Productos::all(), "Clientes" => $Clientes]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

     public function VerNotificacion(Request $Request)
     {
        Notificaciones::where("id_usuario", session()->get("id"))->update(["visto" => "1"]);
     }

     public function notificaciones()
     {
        $Notificaciones=Notificaciones::where("id_usuario", session()->get("id"))->get();

        $NotificacionesNoVistas=Notificaciones::where("id_usuario", session()->get("id"))->where("visto", 0)->get();

        return view("Notificaciones", ["Notificaciones" => $Notificaciones, "NotificacionesNoVistas" => $NotificacionesNoVistas]);
     }
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

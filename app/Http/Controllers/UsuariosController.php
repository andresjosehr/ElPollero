<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Usuarios;
use Illuminate\Support\Str;
use Hash;
use View;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $UsuariosInvitados=Usuarios::where("confirmando_registro", "<>", null)->where("rol", '1')->get();
        $UsuariosRegistrados=Usuarios::where("confirmando_registro", null)->where("rol", '1')->get();

        return view("Administradores.administradores", ["UsuariosInvitados" => $UsuariosInvitados, "UsuariosRegistrados" => $UsuariosRegistrados]);
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
         $v = \Validator::make($Request->all(), [
                'email'  => 'required|email|unique:usuarios,email,'.session()->get("id"),
                'nombre' => 'required',
          ]); 

         if ($v->fails()){
              return $v->errors();;   
         }

         $Request->merge(["confirmando_registro" => Str::random(32)]);
         Usuarios::insert($Request->all());

         self::EmailInivitacion($Request->email, $Request->confirmando_registro);

         return Usuarios::orderBy("id", "desc")->first();
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
        if ($Request->pass!="true") {
         $v = \Validator::make($Request->all(), [
                'email'  => 'required|email|unique:usuarios,email,'.session()->get("id"),
                'nombre' => 'required',
          ]); 

         if ($v->fails()){
              return $v->errors();;   
         }

         Usuarios::update($Request->except("_method"))->where("id", session()->get("id"));

         return "Exito";

        } else{

            $Request->merge(["password" => Hash::make($Request->password)]);

            Usuarios::where("id", session()->get("id"))->update(["password" => $Request->password]);

            return "Exito";
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Usuarios::where(["id" => $id])->delete();
    }

    public function showFormAdmin($codigo)
    {
        if (Usuarios::where("confirmando_registro", $codigo)->first()) {
            return view("Acceso.registroAdmin");
        } else{
            return redirect("../public");
        }
    }




    public function EmailInivitacion($destinatario, $codigo){


        $header = "From: El Pollero <no-responder@elpollero.com> \r\n";
        $header .= "Bcc: elpollero@gmail.com \r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/html";

        $body=(string)View::make('email.invitacion_registro_admin', ["codigo" => $codigo]);
        mail($destinatario, "El Pollero | Inivitación de registro", $body, $header);
    }
}

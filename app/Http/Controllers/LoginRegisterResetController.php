<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Usuarios;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Validator;
use Auth;
use View;

class LoginRegisterResetController extends Controller
{
    public function Login(Request $Request){

        $v = \Validator::make($Request->all(), [
				'email'    => 'required|email',
				'password' => 'required',
          ]); 

         if ($v->fails()){
              return "Error";
              die();
         } 


    	$Usuario = Usuarios::where('email', $Request->email)->first();

		if ($Usuario && Hash::check($Request->password, $Usuario->password)) { 

			session()->put('sesion', 'true');
			session()->put('id', $Usuario->id);
			session()->put('nombre', $Usuario->nombre);
			session()->put('email', $Usuario->email);
      session()->put('rol', $Usuario->rol);
			
			return "Exito";
		}  

		else { return "Invalido"; }

    }
    public function createAdmin(Request $Request)
    {
    	$Usuarios = Usuarios::where($Request->only("confirmando_registro"))->first();

        $Request->merge(["password" => Hash::make($Request->password), "confirmando_registro" => null]);

        Usuarios::where("id", $Usuarios->id)->update($Request->only("password", "confirmando_registro"));

        return "Exito";
    }
    public function showFormSeller()
    {
      return view("Acceso.registroVendedor");
    }

    public function createSeller(Request $Request){


       $v = \Validator::make($Request->all(), [
                'email'  => 'required|email|unique:usuarios',
                'nombre' => 'required',
                'password' => 'required',
          ]); 

         if ($v->fails()){
              return $v->errors();;   
         } else{
            $Request->merge(["password" => Hash::make($Request->password), "confirmando_registro" => null]);
            Usuarios::insert($Request->except("password2"));
            return "Exito";
         }
    }

    public function resetPass(Request $Request){
      
      $v = \Validator::make($Request->all(), [
                'email'  => 'required|email',
          ]); 

         if ($v->fails()){
              return $v->errors();;   
         } else{

            $Codigo=Str::random(32);
            Usuarios::where($Request->only("email"))->update(["codigo_password" => $Codigo]);


            self::EmailReset($Request->email, $Codigo);
            return "Exito";
         }


    }

    public function resetPass2($codigo)
    {
      if (Usuarios::where(["codigo_password" => $codigo])->first()) {
        return view("Acceso.resetear-contrasena2");
      } else{
        return redirect("../");
      }

    }

    public function resetPass3(Request $Request, $codigo){

      Usuarios::where(["codigo_password" => $codigo])->update(["codigo_password" => null, "password" => Hash::make($Request->password)]);
      return "Exito";
    }


    public function EmailReset($destinatario, $codigo){


        $header = "From: El Pollero <no-responder@elpollero.com> \r\n";
        $header .= "Bcc: elpollero@gmail.com \r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/html";

        $body=(string)View::make('email.resetPass', ["codigo" => $codigo]);
        mail($destinatario, "El Pollero | Reseteo de contraseña", $body, $header);
    }
}

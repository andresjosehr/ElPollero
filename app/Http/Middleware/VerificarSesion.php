<?php

namespace App\Http\Middleware;

use Auth;
use Closure;

class VerificarSesion
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next){

        $usuario = session()->get("id");

        if (!$usuario) {

            return redirect("acceso");

        }

        return $next($request);
    }
}

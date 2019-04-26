<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('CerrarSesion', function(){
	session()->forget('sesion');
	session()->forget('email');
	session()->forget('id');
	session()->forget('nombre');
    return redirect("/");
});


Route::get('acceso', function () {
	if (!session()->get("id")) { return view('Acceso.login'); }
	else{ return redirect("/"); }
});

Route::group(['middleware' => ['VerificarSesion']], function () {
	Route::get('/', function () {
	    return view('escritorio');
	});
	Route::get('perfil', function () {
	    return view('perfil.perfil');
	});
});


Route::get('resetear-contrasena', function(){
	return view("Acceso.resetear-contrasena");
});

Route::get('resetear-contrasena/{codigo}', "LoginRegisterResetController@resetPass2");
Route::post('resetear-contrasena/{codigo}', "LoginRegisterResetController@resetPass3");
Route::post('usuarios/resetPass', "LoginRegisterResetController@resetPass");
Route::post('login', "LoginRegisterResetController@Login");

Route::resource('usuarios', "UsuariosController");
Route::post('usuarios/createAdmin', "LoginRegisterResetController@createAdmin");
Route::post('usuarios/createSeller', "LoginRegisterResetController@createSeller");

Route::get('registro/', "LoginRegisterResetController@showFormSeller");
Route::get('registro/{codigo}', "UsuariosController@showFormAdmin");

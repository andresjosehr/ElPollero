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

	Route::resource("/", "DashboardCrontroller");
	
	Route::get('perfil', function () {
	    return view('Perfil.perfil');
	});

	Route::resource("clientes", "ClientesController");
	Route::post("clientes/listaUpdate", "ClientesController@listaUpdate");

	Route::resource("ordenes", "OrdenesController");
	Route::post("ordenes/listaUpdate", "OrdenesController@listaUpdate");


	Route::resource("pedidos", "PedidosController");
	Route::post("pedidos/listaUpdate", "PedidosController@listaUpdate");


	Route::post("llamadoPedidos", "DashboardCrontroller@llamadoPedidos");

	Route::get("email-clientes", "ClientesController@emailCliente");
	Route::post("email-clientes", "ClientesController@emailCliente2");



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

Route::get("registrar-pedido-public", function(){
	return view("pedidos.crearPublico");
});

Route::post("registrar-pedido-public2", "ClientesController@registrarPedidoPublic");


Route::get("satisfaccion", function(){
	return view("email.ordenCerrada");
});

Route::get("satisfaccion/{orden}/{satisfaccion}", "OrdenesController@satisfaccion");


Route::resource("metas", "MetasController");
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
         Schema::create('clientes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre');
            $table->string('cedula')->nullable();
            $table->string('direccion')->nullable();
            $table->string('zona')->nullable();
            $table->string('telefono')->nullable();
            $table->string('correo')->nullable();
            $table->string('productos')->nullable();
            $table->string('tipo_negocio')->nullable();
            $table->string('tipo_cliente')->nullable();
            $table->integer('id_usuario');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clientes');
    }
}

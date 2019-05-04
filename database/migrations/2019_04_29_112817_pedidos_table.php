<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class PedidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('productos')->nullable();
            $table->string('cantidad')->nullable();
            $table->string('tipo_cantidad')->nullable();
            $table->string('periodicidad')->nullable();
            $table->string('tipo_pago')->nullable();
            $table->string('observaciones')->nullable();
            $table->string('especificaciones')->nullable();
            $table->string('llamado')->nullable()->default("No");
            $table->string('orden_creada')->nullable()->default("No");
            $table->string('id_cliente')->nullable();
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
        Schema::dropIfExists('pedidos');
    }
}

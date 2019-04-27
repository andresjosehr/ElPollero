<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class OrdenesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ordenes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('productos')->nullable();
            $table->string('cantidad')->nullable();
            $table->string('hora_entrega')->nullable();
            $table->string('forma_pago')->nullable();
            $table->string('numero_factura')->nullable();
            $table->string('especificaciones')->nullable();
            $table->string('estado')->nullable();
            $table->string('id_cliente')->nullable();
            $table->integer('receptor');
            $table->string('tipo_cliente')->nullable();
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
        Schema::dropIfExists('ordenes');
    }
}

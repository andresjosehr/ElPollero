<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{
    protected $table = "clientes";

    public function Usuarios()
    {
    	return $this->hasOne(Usuarios::class, "id", "id_usuario");
    }

    public function Ordenes()
    {
    	return $this->hasMany(Ordenes::class, "id_cliente", "id");
    }

    public function Pedidos()
    {
    	return $this->hasMany(Pedidos::class, "id_cliente", "id");
    }
}

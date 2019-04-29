<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pedidos extends Model
{
    protected $table='pedidos';

    public function Clientes()
    {
    	return $this->hasOne(Clientes::class, "id", "id_cliente");
    }
}

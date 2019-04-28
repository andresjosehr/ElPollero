<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ordenes extends Model
{
    protected $table="ordenes";

    public function Clientes()
    {
    	return $this->hasOne(Clientes::class, "id", "id_cliente");
    }
}

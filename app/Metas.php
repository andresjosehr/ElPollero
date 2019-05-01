<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Metas extends Model
{
    protected $table = "metas";

    public function Clientes()
    {
    	return $this->belongsToMany(Clientes::class, "metas", "id_usuario");
    }
}

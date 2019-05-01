<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{
    protected $table = "clientes";

    public function Metas()
    {
    	return $this->hasMany(Metas::class, "id", "id_usuario");
    }
}

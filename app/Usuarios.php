<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuarios extends Model
{
    protected $table="usuarios";

    public function Metas()
    {
    	return $this->hasMany(Metas::class, "id_usuario", "id");
    }

    public function Clientes()
    {
    	return $this->hasMany(Clientes::class, "id_usuario", "id");
    }

}

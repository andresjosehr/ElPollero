<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Metas extends Model
{
    protected $table = "metas";

    public function Usuarios()
    {
    	return $this->belongsToMany(Usuarios::class, "metas", "id", "id_usuario");
    }
}

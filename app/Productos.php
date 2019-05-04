<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Productos extends Model
{
    protected $table='productos';

    protected $fillable = ['nombre'];

    public function OrdenesCerradas()
    {
    	return $this->hasMany(Ordenes::class, "productos", "nombre");
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoNegocios extends Model
{
    protected $table='tipo_negocios';

    protected $fillable = ['nombre'];
}

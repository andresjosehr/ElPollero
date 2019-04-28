<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        			DB::table('usuarios')->delete();
                    DB::table('clientes')->delete();
                    DB::table('ordenes')->delete();



                     DB::table("usuarios")->insert([
                            'nombre'   => "Jose Andres",
                            'email'    => "usuario@gmail.com",
                            'password' => Hash::make('secret'),
                            'rol'      => "2"
                        ]);

                    $faker = Faker::create();

                    foreach (range(1,10) as $index) {
                        DB::table("usuarios")->insert([
                            'nombre'   => $faker->name,
                            'email'    => $faker->email,
                            'password' => Hash::make('secret'),
                            'rol'      => $faker->numberBetween(1,2)
                        ]);
                    }


                    foreach (range(1,10) as $index) {
                        DB::table("clientes")->insert([
                            'nombre'   => $faker->name,
                            'cedula'    => $faker->numberBetween(100000, 999999),
                            'direccion'    => $faker->sentence($nbWords = 6, $variableNbWords = true),
                            'zona'    => $faker->country,
                            'telefono'    => $faker->tollFreePhoneNumber,
                            'correo'    => $faker->email,
                            'productos'    => $faker->randomElement(array ('Muslo','Pechuga','Alitas', 'Pescuezo', 'Pollo Entero')),
                            'tipo_negocio'    => $faker->randomElement(array ('Colmado','Pollera','Restaurant')),
                            'tipo_cliente'    => $faker->randomElement(array ('Fisico personal','Juridico empresa')),
                            'id_usuario'    => "1"
                        ]);
                    }


                     foreach (range(1,10) as $index) {
                        DB::table("ordenes")->insert([
                            'productos'   => $faker->randomElement(array ('Muslo','Pechuga','Alitas', 'Pescuezo', 'Pollo Entero')),
                            'cantidad'    => $faker->numberBetween(1, 10)." Kilos",
                            'fecha_hora_entrega'    => $faker->date($format = 'Y-m-d', $min = 'now')." ".$faker->time($format = 'H:i:s', $min = 'now'),
                            'especificaciones'    => $faker->sentence,
                            'id_cliente'    => $faker->numberBetween(1, 10),
                        ]);
                    }
    }
}

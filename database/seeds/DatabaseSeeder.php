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
                    DB::table('metas')->delete();

                    DB::select("ALTER TABLE sys_poll_usuarios AUTO_INCREMENT = 1;");
                    DB::select("ALTER TABLE sys_poll_clientes AUTO_INCREMENT = 1;");
                    DB::select("ALTER TABLE sys_poll_ordenes AUTO_INCREMENT = 1;");
                    DB::select("ALTER TABLE sys_poll_metas AUTO_INCREMENT = 1;");



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



                    foreach (range(1,10) as $index) {
                        DB::table("pedidos")->insert([
                            'productos'   => $faker->randomElement(array ('Muslo','Pechuga','Alitas', 'Pescuezo', 'Pollo Entero')),
                            'cantidad'    => $faker->numberBetween(1, 10)." Kilos",
                            'periodicidad'    => $faker->randomElement(array ('Lunes','Martes','Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo')),
                            'especificaciones'    => $faker->sentence,
                            'observaciones'    => $faker->sentence,
                            'tipo_pago'    => $faker->randomElement(array ('Efectivo','Cheque','Tarjeta de credito', 'Tarjeta de debito')),
                            'id_cliente'    => $faker->numberBetween(1, 10),
                        ]);
                    }


                    foreach (range(1,50) as $index) {
                        DB::table("metas")->insert([
                            'id_usuario'   => $faker->numberBetween(1, 10),
                            'tipo'    => $faker->randomElement(array ('Muslo','Pechuga','Alitas', 'Pescuezo', 'Pollo Entero')),
                            'periodo'    => $faker->randomElement(array ('Diario','Semanal','Mensual', 'Trimestral', 'Semestral', 'Anual')),
                            'cantidad'    => $faker->numberBetween(1, 10),
                        ]);
                    }
    }
}

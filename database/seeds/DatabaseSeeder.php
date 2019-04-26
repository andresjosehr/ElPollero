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



                     DB::table("usuarios")->insert([
                            'nombre'        => "Jose Andres",
                            'email'         => "usuario@gmail.com",
                            'password'      => Hash::make('secret'),
                            'rol'      => "1"
                        ]);

                    $faker = Faker::create();

                    foreach (range(1,10) as $index) {
                        DB::table("usuarios")->insert([
							'nombre'        => $faker->name,
							'email'         => $faker->email,
							'password'      => Hash::make('secret'),
                            'rol'      => $faker->numberBetween(1,2)
                        ]);
                    }
    }
}

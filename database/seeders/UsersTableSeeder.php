<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'first_name' => 'Mathews',
            'username' => 'kodiyak',
            'email' => 'mathewsto51@gmail.com',
            'password' => Hash::make('s.o536123'),
            'is_contributor' => true,
            'role' => User::ADMIN,
        ]);
    }
}

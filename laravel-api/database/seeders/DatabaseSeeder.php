<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call(PostSeeder::class);

        // Create two test users for the auth viability test.
        // Login: email + "password"
        $users = [
            ['name' => 'SarahFitness',  'email' => 'sarah@smoothie.social'],
            ['name' => 'GreenGuru',      'email' => 'green@smoothie.social'],
        ];

        foreach ($users as $data) {
            User::firstOrCreate(
                ['email' => $data['email']],
                ['name' => $data['name'], 'password' => Hash::make('password')]
            );
        }
    }
}

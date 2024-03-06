<?php

namespace Database\Seeders;

use App\Models\Pembuat;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class PembuatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pembuats = [
            "Aerell",
            "Azra",
            "Eric",
            "Iqbal",
            "Ranny",
            "Angel"
        ];
        foreach ($pembuats as $nama) {
            Pembuat::create([
                'nama' => $nama
            ]);
        }
    }
}

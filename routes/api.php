<?php

use App\Http\Controllers\API\PembuatController;
use App\Http\Middleware\CheckAllowedUrl;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/ambil_semua_data_pembuat', [PembuatController::class, 'ambil_semua_data_pembuat']);
Route::post('/tambah_data_pembuat', [PembuatController::class, 'tambah_data_pembuat']);
Route::get('/ambil_data_pembuat_dari_id/{id}', [PembuatController::class, 'ambil_data_pembuat_dari_id']);
Route::post('/perbarui_data_pembuat/{id}', [PembuatController::class, 'perbarui_data_pembuat']);
Route::delete('/hapus_data_pembuat/{id}', [PembuatController::class, 'hapus_data_pembuat']);

<?php

use App\Http\Controllers\MaisonController;
use App\Http\Controllers\ReservationController;
use Illuminate\Support\Facades\Route;

Route::post('/maisons', [MaisonController::class, 'store']);
Route::get('/maisons', [MaisonController::class, 'index']);
Route::get('/maisons/{id}', [MaisonController::class, 'show']);

Route::post('/reservations', [ReservationController::class, 'store']);
Route::get('/reservations', [ReservationController::class, 'index']);
Route::get('/reservations/{id}', [ReservationController::class, 'show']);



Route::get('/', function () {
    return view('welcome');
    Route::prefix('api')->group(base_path('routes/api.php'));
});

Route::get('/csrf-token', function () {
    return response()->json(['csrf_token' => csrf_token()]);
});

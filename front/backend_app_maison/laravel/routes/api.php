<?php

use App\Http\Controllers\MaisonController;
use App\Http\Controllers\ReservationController;
use Illuminate\Support\Facades\Route;

Route::post('/maison', [MaisonController::class, 'store']);
Route::get('/maison', [MaisonController::class, 'index']);
Route::get('/maison/{id}', [MaisonController::class, 'show']);

Route::post('/reservation', [ReservationController::class, 'store']);
Route::get('/reservation', [ReservationController::class, 'index']);
Route::get('/reservation/{id}', [ReservationController::class, 'show']);


<?php

use App\Http\Controllers\CommandesController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProduitsController;

Route::post('/produits', [ProduitsController::class, 'store']);
Route::get('/produits', [ProduitsController::class, 'index']);
Route::get('/produits/{id}', [ProduitsController::class, 'show']);

Route::post('/commande', [CommandesController::class, 'store']);
Route::get('/commande', [CommandesController::class, 'index']);
Route::get('/commande/{id}', [CommandesController::class, 'show']);


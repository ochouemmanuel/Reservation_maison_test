<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Reservation extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom','prenoms','email','categorie','date_debut',
        'date_fin','moyen_paiement','numero_carte',
        'cvv','date_expiration'
    ];
}

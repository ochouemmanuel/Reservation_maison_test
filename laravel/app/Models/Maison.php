<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Maison extends Model
{
    use HasFactory;

    protected $fillable = [
        'categorie','pays','ville','description','prix',"image"
    ];
    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}

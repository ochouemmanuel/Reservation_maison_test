<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class commandeItem extends Model
{
    protected $fillable = ['commande_id', 'produit_id', 'quantité', 'prix'];
    
    public function produit() {
        return $this->belongsTo(Produits::class);
    }
}

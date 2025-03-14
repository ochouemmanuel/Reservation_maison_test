<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class commandes extends Model
{
    use HasFactory;
    protected $fillable = ['customer_name', 'status',
     'prix_total'];

    public function items() {
        return $this->hasMany(commandeItem::class);
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('reservations', function (Blueprint $table) {



        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('reservations', function(Blueprint $table){
            $table->dropColumn(['nom', 'prenoms', 'email', 'categorie','date_debut','date_fin','moyen_paiement',
             'numero_carte','cvv','date_expiration'] );
        });
    }
};

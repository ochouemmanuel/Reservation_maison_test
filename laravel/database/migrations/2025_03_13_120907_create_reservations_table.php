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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('maison_id')->constrained()->onDelete('cascade');
            $table->string('nom')->nullable();
            $table->string('prenoms')->nullable();
            $table->string('email')->nullable();
            $table->string('categorie')->nullable();
            $table->string('date_debut')->nullable();
            $table->string('date_fin')->nullable();
            $table->string('moyen_paiement')->nullable();
            $table->string('numero_carte')->nullable();
            $table->string('cvv')->nullable();
            $table->string('date_expiration')->nullable();
            $table->timestamps();
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

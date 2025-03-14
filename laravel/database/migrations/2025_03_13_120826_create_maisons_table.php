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
        Schema::create('maisons', function (Blueprint $table) {
            $table->id();
            $table->string('categorie')->nullable();
            $table->string('pays')->nullable();
            $table->string('ville')->nullable();
            $table->text('description')->nullable();
            $table->decimal('prix', 10, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */


     public function down()
     {
         Schema::table('maisons', function (Blueprint $table) {
             $table->dropColumn(['categorie', 'pays', 'ville', 'description', 'prix']);
         });
     }

};

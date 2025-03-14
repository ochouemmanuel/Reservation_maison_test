<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationController extends Controller
{
    public function index(){
        return response()->json(Reservation::all());
    }

    public function store(Request $request){
        $request->validate([
            'nom'=> 'required|string|max:20',
            'prenoms'=> 'required|string|max:20',
            'email'=> 'required|email',
            'categorie'=> 'required|string|max:30',
            'date_debut'=> 'required|date|max:10',
            'date_fin'=> 'required|date|max:10',
            'moyen_de_paiement'=> 'required|string|max:20',
            'numero_carte'=> 'required|string|max:30',
            'cvv'=> 'required|string|max:6',
            'date_expiration'=> 'required|date|max:10'
        ]);
        $reservation = Reservation::create($request->all());
        return response()->json(['message' => 'Réservation réussie', 'reservation' => $reservation], 201);
    }

    public function show($id){
        $reservation = Reservation::findOrFail($id);
        return response()->json($reservation);
    }
}

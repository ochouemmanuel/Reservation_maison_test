<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Maison;


class MaisonController extends Controller
{
    public function index(){
        return response()->json(Maison::all());
    }

    public function store(Request $request){
        $request -> validate([
            'categorie' => 'required|string|max=30',
            'pays' => 'required|string|max=50',
            'ville' => 'required|string|max=50',
            'description' => 'required|string|max=500',
            'prix' => 'required|string',

        ]);

        $maison = Maison::create([
            'categorie' => $request->Catégorie,
            'pays' => $request->Pays,
            'ville' => $request->Ville,
            'description' => $request->Description,
            'prix' => $request->Prix,
            'image' => $request->Image,
        ]);

        return response()->json(['message' => 'La maison a bien été enregistrée', 'maison' => $maison], 201);
    }

    public function show($id){
        $maison = Maison::findOrFail($id);
        return response()->json($maison);
    }
}

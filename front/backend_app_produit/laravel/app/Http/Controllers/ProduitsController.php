<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produits;
use Illuminate\Support\Facades\Storage;

class ProduitsController extends Controller
{
    public function index(){
        return response()->json(Produits::all());
    }

    public function store(Request $request){
        $request -> validate([
            'nom' => 'required|string|max:20',
            'description' => 'required|string|max:200',
            'prix' => 'required|integer|min:1',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max2048'
        ]);

        $produit = Produits::create([
            'nom'=>$request->nom,
            'description'=>$request->description,
            'prix'=>$request->prix,
            'image'=>$request->image,
        ]);
        return response()->json(['message' => 'Votre article a bien été enregistré','produits' => $produit ], 201);

        if($request->hasFile('image')){
            $imagePath= $request->file('image')->store('images', 'public');
        }

        $produit = Produits::create([]);


    }

    public function show($id){
        $produit = Produits::find($id);
        if (!$produit) {
            return response()->json(['message' => 'Produit non trouvé'], 404);
        }
        return response()->json($produit);
    }
}

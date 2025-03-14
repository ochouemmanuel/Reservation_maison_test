<?php

namespace App\Http\Controllers;

use App\Models\commandeItem;
use Illuminate\Http\Request;
use App\Models\commandes;
use App\Models\Produits;

class CommandesController extends Controller
{
    public function index(){
        return response()->json(Commandes::with('items.product')->get());
    }

    public function store(Request $request){
        $request -> validate([
            'customer_name' => 'required|string|max:30',
            'items' => 'required|array',
            'items.*.produit_id' => 'required|exists:products,id',
            'items.*.quantité' => 'required|integer|min:1'
        ]);


        $total = 0;
        foreach ($request->items as $item) {
            $produit = Produits::find($item['product_id']);
            $total += $produit->price * $item['quantity'];
        }

        $commande = Commandes::create([
            'customer_name' => $request->customer_name,
            'prix_total' => $total,
        ]);

        foreach ($request->items as $item) {
            commandeItem::create([
                'order_id' => $commande->id,
                'produit_id' => $item['produit_id'],
                'quantité' => $item['quantité'],
                'prix' => Produits::find($item['produit_id'])->prix,
            ]);
        }
        return response()->json($commande->load('items.produit'), 201);


        return response()->json(['message' => 'Commande réussie','commandes' => $commande], 201);
    }

    public function show($id){
        $commande = Commandes::with('items.product')->find($id);
        if (!$commande) {
            return response()->json(['message' => 'Commande non trouvée'], 404);
        }
        return response()->json($commande);
    }
}


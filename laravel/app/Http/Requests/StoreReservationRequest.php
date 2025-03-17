<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreReservationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'maison_id' => 'required|exists:maisons,id',
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
        ];
    }
}

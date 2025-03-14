import React, { useState } from 'react';
import { Link } from "react-router-dom";

function ReservationPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenoms: '',
    email: '',
    categorie: 'Studio',
    date_debut: '',
    date_fin: '',
    moyen_de_paiement: 'Mastercard',
    numero_carte: '',
    cvv: '',
    date_expiration: ''
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Réservation réussie !');
      } else {
        alert(`Erreur : ${data.message}`);
      }
    } catch (error) {
      console.error('Erreur de connexion à l\'API:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <Link to='/'>
        <button type="button" className="btn btn-primary">Accueil</button>
      </Link>
      <br />
      <br />
      <br />
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
        <p className="fw-bold fs-1 text-primary">Confirmez votre choix</p>
      </div>
      <div className="container w-100">
        <form onSubmit={handleSubmit}>
          <div className="left">
            <div>
              <label>Nom</label>
              <input
                type="text"
                className="form-control"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Entrez votre nom"
              />
            </div>
            <div>
              <label>Prénoms</label>
              <input
                type="text"
                className="form-control"
                name="prenoms"
                value={formData.prenoms}
                onChange={handleChange}
                placeholder="Entrez vos prénoms"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Entrez votre adresse mail"
              />
            </div>
            <div>
              <label>Catégorie de maison</label>
              <select
                className="form-select"
                name="categorie"
                value={formData.categorie}
                onChange={handleChange}
              >
                <option value="Studio">Studio</option>
                <option value="Multiplex">Multiplex</option>
                <option value="Basse">Basse</option>
              </select>
            </div>
            <div>
              <label>Début de la réservation</label>
              <input
                type="date"
                name="date_debut"
                className="form-control"
                value={formData.date_debut}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Fin de la réservation</label>
              <input
                type="date"
                className="form-control"
                name="date_fin"
                value={formData.date_fin}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="right">
            <div>
              <label>Moyen de paiement</label>
              <select
                className="form-select"
                name="moyen_de_paiement"
                value={formData.moyen_de_paiement}
                onChange={handleChange}
              >
                <option value="Mastercard">Mastercard</option>
                <option value="Visa">Visa</option>
                <option value="Paypal">Paypal</option>
              </select>
            </div>
            <div>
              <label>Numéro de la carte</label>
              <input
                type="text"
                className="form-control"
                name="numero_carte"
                value={formData.numero_carte}
                onChange={handleChange}
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div>
              <label>CVV</label>
              <input
                type="text"
                className="form-control"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
              />
            </div>
            <div>
              <label>Date d'expiration</label>
              <input
                type="date"
                className="form-control"
                name="date_expiration"
                value={formData.date_expiration}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <button type="submit" className="btn btn-primary">Confirmez la réservation</button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default ReservationPage;


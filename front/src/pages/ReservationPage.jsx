import React, { useState } from 'react';
import { Link } from "react-router-dom";

function ReservationPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenoms: '',
    email: '',
    categorie: '',
    date_debut: '',
    date_fin: '',
    moyen_de_paiement: '',
    numero_carte: '',
    cvv: '',
    date_expiration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
     

      
            <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
              <p className="fw-bold fs-1 text-primary">Confirmez votre réservation</p>
            </div>
      <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">Nom</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">Prénoms</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            name="prenoms"
            value={formData.prenoms}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="validationCustomUsername"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">Catégorie</label>
          <select
            className="form-select"
            id="validationCustom04"
            name="categorie"
            value={formData.categorie}
            onChange={handleChange}
            required
          >
            <option value="Studio">Studio</option>
            <option value="Multiplex">Multiplex</option>
            <option value="Basse">Basse</option>
          </select>
        </div>
  
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">Date de début</label>
          <input
            type="date"
            className="form-control"
            id="validationCustom05"
            name="date_debut"
            value={formData.date_debut}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="col-md-3">
          <label htmlFor="validationCustom06" className="form-label">Date de fin</label>
          <input
            type="date"
            className="form-control"
            id="validationCustom06"
            name="date_fin"
            value={formData.date_fin}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="col-md-3">
          <label htmlFor="validationCustom07" className="form-label">Moyen de paiement</label>
          <select
            className="form-select"
            id="validationCustom07"
            name="moyen_de_paiement"
            value={formData.moyen_de_paiement}
            onChange={handleChange}
            required
          >
            <option value="Mastercard">Mastercard</option>
            <option value="Visa">Visa</option>
            <option value="Paypal">Paypal</option>
          </select>
        </div>
  
        <div className="col-md-6">
          <label htmlFor="validationCustom08" className="form-label">Numéro de carte</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom08"
            name="numero_carte"
            value={formData.numero_carte}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="col-md-6">
          <label htmlFor="validationCustom09" className="form-label">CVV</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom09"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="col-md-6">
          <label htmlFor="validationCustom10" className="form-label">Date d'expiration</label>
          <input
            type="date"
            className="form-control"
            id="validationCustom10"
            name="date_expiration"
            value={formData.date_expiration}
            onChange={handleChange}
            required
          />
        </div>
  <br />
  <br />
  <br />
  <br />
  
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Confirmer la réservation</button>
        </div>
        <br />
  <br />
  <br />
  <br />
  <br />
      </form>
    </div>
  );
}  

export default ReservationPage;


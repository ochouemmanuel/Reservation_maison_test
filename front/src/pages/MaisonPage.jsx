import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function MaisonPage() {
  const [maisons, setMaisons] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les maisons depuis l'API Laravel
    const fetchMaisons = async () => {
      try {
        const response = await fetch('http://localhost/api/maison');  // Assurez-vous que l'URL de votre API est correcte
        const data = await response.json();
        setMaisons(data);  // Stocker les maisons dans l'état
      } catch (error) {
        console.error('Erreur lors de la récupération des maisons :', error);
      }
    };

    fetchMaisons();  // Appel de la fonction pour récupérer les maisons à chaque chargement de la page
  }, []);  // Le tableau vide assure que l'effet ne s'exécute qu'une seule fois lors du premier rendu

  return (
    <div>
      <Link to='/'>
        <button type="button" className="btn btn-primary">Accueil</button>
      </Link>
      <br />
      <br />
      <br />
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
        <p className="fw-bold fs-1 text-primary">Faites votre choix</p>
      </div>

      <div className="container w-100">
        <div className="row">
          {/* Boucle sur les maisons et affichage dynamique */}
          {maisons.length > 0 ? (
            maisons.map((maison) => (
              <div className="col-md-4" key={maison.id}>
                <div className="card" style={{ width: '18rem' }}>
                  <img src={maison.image} className="card-img-top" alt={maison.categorie} />
                  <div className="card-body">
                    <h5 className="card-title">{maison.categorie}</h5>
                    <p className="card-text">{maison.description}</p>
                    <p className="card-text"><strong>Prix:</strong> {maison.prix} €</p>
                    <Link to={`/reservation/${maison.id}`}>
                      <button className="btn btn-primary">Réserver</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Aucune maison disponible.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MaisonPage;


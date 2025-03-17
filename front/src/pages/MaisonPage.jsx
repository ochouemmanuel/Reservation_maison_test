import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import API from "../config/api";
import axios from 'axios';

function MaisonPage() {
  const [maisons, setMaisons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaisons = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/maisons', {
          headers: {
            Accept: 'application/json',
          }
        });
        
        setMaisons(response.data);
      } catch (error) {
        console.error("Erreur :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMaisons();
  }, []);

  return (
    <div>
      <Link to='/'>
        <button type="button" className="btn btn-primary">Accueil</button>
      </Link>

      <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
        <p className="fw-bold fs-1 text-primary">Faites votre choix</p>
      </div>

      <div className="container w-100">
        <div className="row">
          {loading ? (
            <p className="fw-bold fs-3 text-primary">Chargement des maisons...</p>
          ) : maisons.length > 0 ? (
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
            <p className="fw-bold fs-3 text-primary">Aucune maison disponible</p>
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      
    </div>
  );
}

export default MaisonPage;

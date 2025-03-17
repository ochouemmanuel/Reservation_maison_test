import React from 'react'
import {Link} from "react-router-dom"

function HomePage() {
  return (
<div className='bg-transparent text-body'>
  
      <div className='welcome'>
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
        <p className="fw-bold fs-1 text-primary">Bienvenue sur Booking </p>
      </div>
      </div>
    <div id="carouselExampleDark" className="carousel carousel-dark slide mt-20">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
                <img src="/m-5.jpg" class="d-block w-900" alt="..."/>
                <div className=" text-white carousel-caption d-none d-md-block text-light">
                    <h5>Faites votre choix</h5>
                    <p>Réservez la maison qui vous tape le plus dans l'oeil, de toutes façon <br /> vous ne serez pas deçus.</p>
                    <Link to='/maison'>
                        <button type="button" className="btn btn-primary">Visitez les maisons disponibles</button>
                    </Link>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src="/m-6.jpg" class="d-block w-900" alt="..."/>
                <div className="carousel-caption d-none d-md-block text-light">
                    <h5>Faites votre choix</h5>
                    <p>Réservez la maison qui vous tape le plus dans l'oeil, de toutes façon <br /> vous ne serez pas deçus.</p>
                    <Link to='/maison'>
                        <button type="button" className="btn btn-primary">Visitez les maisons disponibles</button>
                    </Link>
                 </div>
            </div>
                <div className="carousel-item">
                <img src="/maison_11.jpg" class="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block text-light">
                    <h5>Faites votre choix</h5>
                    <p>Réservez la maison qui vous tape le plus dans l'oeil, de toutes façon <br /> vous ne serez pas deçus.</p>
                    <Link to='/maison'>
                        <button type="button" className="btn btn-primary">Visitez les maisons disponibles</button>
                    </Link>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    <br />
    <br />
   
    <br />
    <br />
       


        <div className="shadow-sm p-3  bg-transparent mb-5 bg-body-tertiary rounded">
            <p className='fs-5 '>Notre site de réservation de maisons se distingue par son engagement envers la qualité et l'excellence. Grâce à une interface 
                intuitive et des fonctionnalités optimisées, nous offrons une expérience utilisateur fluide et sécurisée,
                 permettant à nos clients de réserver leur hébergement en toute confiance.
                 Nos partenariats avec des propriétaires rigoureusement sélectionnés garantissent des logements de haut standing, répondant aux attentes 
                 les plus exigeantes. Fiers de nos accomplissements, nous avons déjà facilité des milliers de réservations, avec un taux de satisfaction client
                  dépassant les 95 %. Chaque amélioration apportée à notre plateforme témoigne de notre volonté constante de répondre aux besoins de nos utilisateurs 
                  et de maintenir notre position
                  de leader dans le domaine des réservations en ligne.
            </p>
            <br /><br />
            
            <Link to='/reservation'>
                <button type="button" className="btn btn-outline-primary btn-lg">Réservez maintenant</button>
            </Link>
        
        </div>

        <div className="row g-0 bg-body-secondary position-relative">
            <div className="col-md-6 mb-md-0 p-md-4">
                <img src="/maison_7.jpeg" class="w-100" alt=""/>
            </div>
            <div className="col-md-6 p-4 ps-md-0 ">
                <h5 className="fs-1 text-primary">Voici ....</h5>
                <p>votre plateforme de confiance pour la réservation de maisons de vacances, d'appartements et de villas
                     à travers le monde.
                     Que vous recherchiez un chalet cosy en montagne, une villa luxueuse en 
                     bord de mer ou un appartement moderne en ville, notre site vous propose une large sélection 
                     d'hébergements adaptés à tous les goûts et budgets.</p>
                <p>Grâce à une interface intuitive, des filtres de recherche avancés et des avis vérifiés,
                     trouvez et réservez en quelques clics le logement parfait pour votre prochain séjour.
                      Profitez d'une expérience de réservation simple, sécurisée et personnalisée, avec des offres 
                      exclusives et un service client disponible 24/7 pour répondre à toutes vos questions.</p>
                <p>Réservez en toute sérénité avec Booking</p>
                <Link to='/maison'>
                        <button type="button" className="btn btn-primary">Visitez les maisons disponibles</button>
                </Link>
            </div>


        

       

 </div>
 </div>
  )
};

export default HomePage

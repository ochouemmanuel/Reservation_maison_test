import React from 'react'
import {Link} from "react-router-dom"

function HomePage() {
  return (
<div >
      <div className='welcome'>
      <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
        <p class="fw-bold fs-1 text-primary">Bienvenue sur Booking </p>
      </div>
        <h1 class='fs-2'>votre plateforme de réservation de maison </h1>
      </div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide mt-20">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
                <img src="/m-5.jpg" class="d-block w-900" alt="..."/>
                <div class=" text-white carousel-caption d-none d-md-block text-light">
                    <h5>Faites votre choix</h5>
                    <p>Réservez la maison qui vous tape le plus dans l'oeil, de toutes façon <br /> vous ne serez pas deçus.</p>
                    <Link to='/maison'>
                        <button type="button" class="btn btn-primary">Visitez les maisons disponibles</button>
                    </Link>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="/m-6.jpg" class="d-block w-900" alt="..."/>
                <div class="carousel-caption d-none d-md-block text-light">
                    <h5>Faites votre choix</h5>
                    <p>Réservez la maison qui vous tape le plus dans l'oeil, de toutes façon <br /> vous ne serez pas deçus.</p>
                    <Link to='/maison'>
                        <button type="button" class="btn btn-primary">Visitez les maisons disponibles</button>
                    </Link>
                 </div>
            </div>
                <div class="carousel-item">
                <img src="/maison_11.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block text-light">
                    <h5>Faites votre choix</h5>
                    <p>Réservez la maison qui vous tape le plus dans l'oeil, de toutes façon <br /> vous ne serez pas deçus.</p>
                    <Link to='/maison'>
                        <button type="button" class="btn btn-primary">Visitez les maisons disponibles</button>
                    </Link>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <br />
    <br />
   
    <br />
    <br />

        <div class="row g-0 bg-body-secondary position-relative">
            <div class="col-md-6 mb-md-0 p-md-4">
                <img src="/maison_7.jpeg" class="w-100" alt=""/>
            </div>
            <div class="col-md-6 p-4 ps-md-0 ">
                <h5 class="fs-1 text-primary">Voici ....</h5>
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
                        <button type="button" class="btn btn-primary">Visitez les maisons disponibles</button>
                </Link>
            </div>
        </div>


</div>
  )
}

export default HomePage

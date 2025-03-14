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
                <img src="/maison_11.jpg" class="d-block w-900" alt="..."/>
                <div class=" text-white carousel-caption d-none d-md-block text-light">
                    <h5>Faites votre choix</h5>
                    <p>Réservez la maison qui vous tape le plus dans l'oeil, de toutes façon <br /> vous ne serez pas deçus.</p>
                    <Link to='/maison'>
                        <button type="button" class="btn btn-primary">Visitez les maisons disponibles</button>
                    </Link>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="/maison_11.jpg" class="d-block w-900" alt="..."/>
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


</div>
  )
}

export default HomePage

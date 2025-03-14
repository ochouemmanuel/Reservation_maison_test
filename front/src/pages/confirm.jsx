import React from 'react'

function confirm() {
  return (
    <div>
        <Link to='/'>
                <button type="button" class="btn btn-primary">Accueil</button>
            </Link>
            <br />
            <br />
            <br />
            
        <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
            <p class="fw-bold fs-1 text-primary">Réservation réussie </p>
        </div>

    </div>
  )
}

export default confirm

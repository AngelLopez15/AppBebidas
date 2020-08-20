import React from 'react'

// recibe los prop por que va a iterar un map
export const Receta = ({receta}) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />

        <button
          type="button"
          className="btn btn-primary btn-block"
        >
          Ver Receta
        </button>
      </div>
    </div>
  )
}

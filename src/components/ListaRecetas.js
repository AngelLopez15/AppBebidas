import React, { useContext } from 'react'
import { RecetasContext } from '../context/RecetasContext'
import { Receta } from './Receta'

export const ListaRecetas = () => {

  // Extrayendo las recetas del context
  // desestrecturando lo que necesitemos del context
  // de esta forma ya podemos acceder a las recetas que nos traiga la API
  const { recetas } = useContext(RecetasContext)

  return (
    <div className="row mt-5">
      {recetas.map(receta=>(
        <Receta 
          key={receta.idDrink}
          receta={receta}
        />
      ))}
    </div>
  )
}

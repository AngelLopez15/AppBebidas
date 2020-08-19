// Creando un segundo context para las recetas
// Es buena practica tener las cosas lo mas separado posible

import React, { createContext, useState } from 'react'

export const RecetasContext = createContext()

const RecetasProvider = (props) => {
  
  // state para la busqueda
  const [busquedaRecetas, setBusquedaRecetas] = useState({
    nombre:'',
    categoria:''
  })
  
  // state para las recetas que son resultado de las busquedas
  const [recetas, setRecetas] = useState([])

  return(
    <RecetasContext.Provider
      value={{
        setBusquedaRecetas
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  )
}

export default RecetasProvider

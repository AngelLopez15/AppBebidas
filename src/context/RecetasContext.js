// Creando un segundo context para las recetas
// Es buena practica tener las cosas lo mas separado posible

import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'

export const RecetasContext = createContext()

const RecetasProvider = (props) => {
  
  // state para la busqueda
  const [busquedaRecetas, setBusquedaRecetas] = useState({
    nombre:'',
    categoria:''
  })

  // desestructurando para poder pasarlo al endpoint (url)
  const {nombre, categoria} = busquedaRecetas
  
  // state para las recetas que son resultado de las busquedas
  const [recetas, setRecetas] = useState([])

  // state para ver el estado de la consulta
  const [consultar, setConsultar] = useState(false)

  // useEffect para disparar la busqueda de la recetas
  // Como dependencia le pasamos la busqueda para que se ejecute cada
  // el usuario haga una busqueda 
  useEffect(() => {
    
    if (consultar) {
      
      const obtenerRecetas = async() =>{
        
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i==${nombre}&c=${categoria}`
        
        const resultado = await Axios.get(url)

        // console.log(resultado.data.drinks)
        setRecetas(resultado.data.drinks)
      }

      obtenerRecetas()

    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busquedaRecetas])

  return(
    <RecetasContext.Provider
      value={{
        recetas,
        setBusquedaRecetas,
        setConsultar
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  )
}

export default RecetasProvider

// Cuando se utila Context ahora los datos fluyen desde Aqui
// ya no tanto desde App.js
import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'

export const CategoriaContext = createContext()

// Siempre que se crea un context se debe crear tambien un Provider
// El provider es el que provee osea es de donde van a salir 
// los datos y las funciones

// Creando el Provider

const CategoriaProvider = (props) =>{

  // dentro del provider podemos crear un state un effect
  // todo lo que necesitemos
  // const [hola, setHola] = useState('Hola desde Context')
  const [categorias, setCategorias] = useState([])

  // Ejecutando el llamado a la API con useEffect
  useEffect(() => {
    
    const obtenerCategorias = async () =>{
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

      const pedirCategorias = await Axios.get(url)

      setCategorias(pedirCategorias.data.drinks)

    }
    obtenerCategorias()
  }, [])

  // Todo lo que esta en return ahora si ya es lo 
  // que va a fluir a los demas componentes
  return(
    // debemos pasar como value todos los datos que queremos que se compartan a los demas
    // componentes
    <CategoriaContext.Provider
      value={{
        categorias
      }}
    >
      {/* aqui van a estar todos los componentes hijos */}
      {props.children}
    </CategoriaContext.Provider>

  )

}

// Debemos exportarlo por Default para poder ponerlo disponible en los demas componentes
export default CategoriaProvider
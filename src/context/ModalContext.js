import React, { useState, useEffect, createContext } from 'react'
import Axios from 'axios'

export const ModalContext = createContext()


const ModalProvider = (props) => {
  
  // state para guardar el id de la receta a la que el usuario le de click
  // el state inical es null por que no hay nada hasta que el usuario le de click a
  // alguna receta
  const [IdReceta, setGuardarIdReceta] = useState(null)

  // State para renderizar la receta
  const [guardarReceta, setGuardarReceta] = useState({})

  // llamando a la API para pedir la receta por medio del id que esta guardado en 
  // el click del boton (setGuardarIdReceta)

  // Como edependencia mandamos el idReceta por que queremos que se ejecute cada
  // que este cambie
  useEffect(() => {
    
    const obtenerReceta = async ()=>{

      // Como al principio esta en null debemos hacer un if para que no haga nada
      // cuando se monte el componenete por primera vez
      if (!IdReceta) {
        return
      }

      // haciendo la peticion cuando ya se tenga un idReceta
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${IdReceta}`

      const resultado = await Axios.get(url)

      setGuardarReceta(resultado.data.drinks[0])

    }
    
    obtenerReceta()

  }, [IdReceta])

  return(
    <ModalContext.Provider
      value={{
        guardarReceta,
        setGuardarReceta,
        setGuardarIdReceta
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
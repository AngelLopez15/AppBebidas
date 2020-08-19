import React, { useContext, useState } from 'react'
import { CategoriaContext } from '../context/CategoriaContext'
import { RecetasContext } from '../context/RecetasContext'

export const Formulario = () => {

  // importando el Context para ocuparlo en el Formulario
  // aplicando desestructuracion para poder ocupar los datos directamente

  // Para poder consumir nuestro Context siempre debemos usar el hook useContext
  // const {hola} = useContext(CategoriaContext)
  // alert(hola)
  const {categorias} = useContext(CategoriaContext)
  
  // importando el segundo context
  const {setBusquedaRecetas} = useContext(RecetasContext)

  // State para manejar el formulario
  // el estado va a inicializar como un objeto con string vacio
  const [busqueda, setBusqueda] = useState({
    nombre:'',
    categoria:''
  })

  // Funcion para obtener los contenidos
  const obtenerDatosReceta = (e) =>{
    setBusqueda({
      ...busqueda,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setBusquedaRecetas(busqueda)
  }

  return (
    <form
      className="col-12"
      onSubmit={handleSubmit}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría o ingrediente</legend>
      </fieldset>

      <div className="row mt-4">

        <div className="col-md-4">
          <input 
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Buscar por ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>
        
        <div className="col-md-4 mt-2">
          <select
            className="form-control"
            name="categoria"
            onChange={obtenerDatosReceta}
          >
            <option value="">--Selecciona categoría--</option>
            {/* iterar sobre categorias para mostar las opciones. Para iterar siempre
            debemos pasar un key. En este caso como el nombre no se repite ese es el que
            usaremos. Ademas en este ejemplo el Key es el mismo para el value y el nombre para
            mostart */}
            {categorias.map(categoria=>(
              <option
                key={categoria.strCategory}
                value={categoria.strCategory}
              >
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4 mt-2">
          <input 
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>

      </div>
    </form>
  )
}

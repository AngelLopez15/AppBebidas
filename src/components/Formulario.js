import React, { useContext } from 'react'
import { CategoriaContext } from '../context/CategoriaContext'

export const Formulario = () => {

  // importando el Context para ocuparlo en el Formulario
  // aplicando desestructuracion para poder ocupar los datos directamente

  // Para poder consumir nuestro Context siempre debemos usar el hook useContext
  // const {hola} = useContext(CategoriaContext)
  // alert(hola)
  const {categorias} = useContext(CategoriaContext)

  const handleSubmit = () => {
    console.log('hola')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="col-12"
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
          />
        </div>
        
        <div className="col-md-4 mt-2">
          <select
            className="form-control"
            name="categoria"
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

import React, { useContext, useState } from 'react'
import { ModalContext } from '../context/ModalContext'

// Ocupando la ventana model de Material UI
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

// Funciones para ocupar el modal

function getModalStyle() {
  // Ubicacion del modal
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  // estilos del modal
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'scroll',
    height: '100%',
    maxHeight: 500,
    display: 'block'
  },
  header: {
    padding: '12px 0',
    borderBottom: '1px solid darkgrey'
  },
  content: {
    padding: "12px 0",
    overflow: 'scroll'
  }
}));



// recibe los prop por que va a iterar un map
export const Receta = ({receta}) => {

  // Configuración de modal de material UI
  // Estas funciones estan en la documentacion de Material UI
  const [modalStyle] = useState(getModalStyle)

  const [open, setOpen] = useState(false)

  const classes = useStyles()
  
  const handleOpen=()=>{
    setOpen(true)
  }

  const handleClose=()=>{
    setOpen(false)
  }

  // extrayendo los valores del context
  const {setGuardarIdReceta, guardarReceta, setGuardarReceta} = useContext(ModalContext)

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />

        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={()=>{
            setGuardarIdReceta(receta.idDrink)
            handleOpen()
          }}
        >
          Ver Receta
        </button>

        {/* Agregando el Modal de Material UI se usa igual que cualquier componente */}
        <Modal
          open={open}
          onClose={()=>{
            // es importante volver a limpiar el state por eso volver a pasar en null
            // el setGuardarIdReceta
            setGuardarIdReceta(null)
            handleClose()
            // Para que no se queden "quemadas" las imagnes tenemos que limpear 
            // el state de las recetas en el modal por eso lo regresamos a su estado
            // inical que es un objeto vacio
            setGuardarReceta({})
          }}
        >
          <div style={modalStyle} className={classes.paper} >
            <h2>{guardarReceta.strDrink}</h2>
            <h3 className="mt-4">Instrucciones</h3>
            <p>{guardarReceta.strInstructions}</p>
            <img className="img-fluid my-4" src={guardarReceta.strDrinkThumb} alt={guardarReceta.strDrink} />
          </div>
        </Modal>
      </div>
    </div>
  )
}

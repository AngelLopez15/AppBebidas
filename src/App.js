import React from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { ListaRecetas } from './components/ListaRecetas';
import CategoriaProvider from './context/CategoriaContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';

function App() {


  // Envoovemos todos nuestros componentes en el componente de orden superior
  // o Context para que esta pueda enviar los datos y funciones a todos los demas
  // El orden en que pongamos lo provider no importa. Lo que importa es que ambos
  // envuelvan a los demas componenetes si es que queremos que los datos de los provider
  // esten disppnibles en todo el arbol de componentes internos
  return (
    <CategoriaProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriaProvider>
  );
}

export default App;

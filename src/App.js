import React from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import CategoriaProvider from './context/CategoriaContext';

function App() {


  // Envoovemos todos nuestros componentes en el componente de orden superior
  // o Context para que esta pueda enviar los datos y funciones a todos los demas
  return (
    <CategoriaProvider>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategoriaProvider>
  );
}

export default App;

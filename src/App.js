import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './context/PruebaContext';
import { AppRouter } from './routing/AppRouter';

function App() {

  const [usuario, setUsuario] = useState ({});

  useEffect(() => {
    console.log("USE EFFECT UNA SOLA VEZ")
    //La primera vez que se carga el componente
    let usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
    setUsuario(usuarioLocal);
  },[]);

  useEffect(() => {
    console.log("CAMBIO EN ESTADO USUARIO")
    //Cada vez que se actualice el estado usuario se guarda en el LS
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  return (
    <div className="App">

      <PruebaContext.Provider value = {{
        usuario, setUsuario
      }}>

        <AppRouter />
      </PruebaContext.Provider>

    </div>
  );
}

export default App;

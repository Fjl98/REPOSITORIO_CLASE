import React,{Component, useContext} from 'react'
import { useState,createContext } from 'react';

  let contextoUsuario = createContext();
  function App() {
    let [usuario,setUsuario]=useState("Javi");

    return(
      <div>
      <contextoUsuario.Provider value={usuario}>
        <Componente2></Componente2>
      </contextoUsuario.Provider>
      </div>
    );
  }
function Componente2() {
  return(
    <div>
      <Componente3></Componente3>
    </div>
  )
}
function Componente3() {
  let usuarioQuerido = useContext(contextoUsuario);
  return(
    <h2>hola {usuarioQuerido}</h2>
  )
}



export default App;
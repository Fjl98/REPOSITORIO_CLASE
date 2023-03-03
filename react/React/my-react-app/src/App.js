
import React from "react";

//USO DE ESTADOS 

import { useState } from "react";




const   Formulario = () => {
  const [nombre,setNombre] = useState("Tu nombre");
  
  const eventoCmanbiar = (evento) => {
    setNombre(evento.target.value);
    console.log(nombre);
  };

  let elemento = (
  <form>
    <p>Dime tu nombre</p>
    <input type="text" value={nombre} onChange={eventoCmanbiar}></input>
  </form>
  );
  return elemento;
};
function App() {
  return (<Formulario></Formulario>);
}


export default App;













/*
const Likes = ({ parametros }) => {
  const [meGusta,setMeGusta] = useState(parametros);
  let elemento = (
  <button 
    onClick={() =>{setMeGusta(meGusta + 1)}}
    >
      {meGusta} likes
  </button>
  );
  return elemento;
};
function App() {
  return (<Likes parametros={12}></Likes>);
}
*/


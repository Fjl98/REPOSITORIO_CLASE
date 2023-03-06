// uso de los use State
import { useState } from "react";
function App() {

  const [infoContacto,setInfoContacto] = useState({
    nombre: "",
    email: "",
    tlf:""
  });

  const manejaCambio = (evento) => {
    setInfoContacto({...infoContacto,[evento.target.name]:evento.target.value});
  }

  const manejaSubmit = (evento) =>{
    evento.preventDefault();
    console.log(infoContacto);
  }

  return (
    <div>
      <form onSubmit={manejaSubmit}>
        <h3>Contacto</h3>
        <br></br>
        <input type="text" name="nombre" id="nombre" onChange={manejaCambio}></input>
        <br></br><br></br>
        <input type="email" name="email" id="email" onChange={manejaCambio}></input>
        <br></br><br></br>
        <input type="number" name="tlf" id="tlf" onChange={manejaCambio}></input>
        <br></br><br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;


/*
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


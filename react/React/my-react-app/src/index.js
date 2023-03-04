import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App></App>
);


/*

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <App></App>
);











/*

//CREACION DE UN RELOJ
let Reloj = () =>{
  let [ahora,setAhora] = React.useState(new Date().toLocaleTimeString());
  let elemento = (
    <div className="container">
      <span className="reloj">{ahora}</span>
    </div>
    
    );

  
  root.render(elemento);
}

Reloj();

setInterval(tictac,1000);

*/

  
/*
function tictac() {

let ahora = new Date().toLocaleTimeString();

  let elemento = (
<div className="container">
  <span className="reloj">{hora}</span>
</div>
);
root.render(elemento);
}


tictac();

setInterval(tictac,1000);
*/






















/*

let getPlaneta = () => "tierra";
let numeros = [1, 2, 3, 4, 5];
let elementos = numeros.map((numero) => <li>{numero}</li>);

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <div>
     <p>
     {elementos}
     </p>
   </div>
 );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <p>hola{getPlaneta()}</p>
  <App />
  <App />
  </div>
);
*/











/*

//CREACION DE UN RELOJ
let Reloj = () =>{
  let [ahora,setAhora] = React.useState(new Date().toLocaleTimeString());
  let elemento = (
    <div className="container">
      <span className="reloj">{ahora}</span>
    </div>
    
    );

  
  root.render(elemento);
}

Reloj();

setInterval(tictac,1000);

*/

  
/*
function tictac() {

let ahora = new Date().toLocaleTimeString();

  let elemento = (
<div className="container">
  <span className="reloj">{hora}</span>
</div>
);
root.render(elemento);
}


tictac();

setInterval(tictac,1000);
*/

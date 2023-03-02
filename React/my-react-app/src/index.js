import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let getPlaneta = () => "tierra";
/*
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
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <p>hola{getPlaneta()}</p>
  <App />
  <App />
  </div>
);


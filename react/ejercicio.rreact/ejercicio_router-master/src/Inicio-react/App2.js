//HOOKS
import React from "react";
import { useState } from "react";
function App() {

  const [ensenaTexto,setEnsenaTexto] = useState({
    nombre: "",
    apellido: "",
    ensenar:false
  });

  return (
    <div>
      <form>
        <input type="text" name="nombre" id="nombre"></input>
        <br></br><br></br>
        <input type="email" name="apellido" id="apellido"></input>
        <br></br><br></br>

        <button type="button" onClick={() => {
            setEnsenaTexto({
                nombre:document.getElementById("nombre").value,
                apellido:document.getElementById("apellido").value,
                ensenar:true
            });
        }}
        >Muestrame el texto
        </button>
        {ensenaTexto.ensenar && <p>holaaaa</p>}
      </form>
    </div>
  );
}


  export default App;
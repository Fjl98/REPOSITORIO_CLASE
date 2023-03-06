
//USECONTEXT
import React, { createContext, useContext } from 'react';

// Crea un contexto
const MiContexto = createContext();

// Componente que provee el contexto
function MiProveedorDeContexto(props) {
  return (
    <MiContexto.Provider value={{ mensaje: "Hola desde el contexto!" }}>
      {props.children}
    </MiContexto.Provider>
  );
}

// Componente que consume el contexto
function MiConsumidorDeContexto() {
  // Utiliza el hook useContext para acceder al valor del contexto
  const { mensaje } = useContext(MiContexto);
  return <div>{mensaje}</div>;
}

// Uso de los componentes
function App() {
  return (
    <MiProveedorDeContexto>
      <MiConsumidorDeContexto />
    </MiProveedorDeContexto>
  );
}
export default App;
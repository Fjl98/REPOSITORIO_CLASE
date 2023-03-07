import React, {Component} from 'react';
import { useEffect,useReducer,useRef } from 'react';

/*
    let initialState = {
        activado: false,
        tiempo:0,
    };

    function App() {
    let [estado,dispatch] = useReducer(reducer,initialState);

    let referenciaId = useRef(0);

    useEffect(() =>{
        referenciaId.current = setInterval(()=>dispatch({type:"tick"}), 1000);
        return () => {
            clearInterval(referenciaId.current);
            referenciaId.current = 0;
        };
    },[estado.activado]);


    return(
        <div>
            {estado.tiempo}
            <div>
                <button onClick={() => dispatch ({type:"start"})}>Empezar</button>
                <button onClick={() => dispatch ({type:"stop"})}>Parar</button>
                <button onClick={() => dispatch ({type:"reset"})}>Resetear</button>
            </div>
        </div>
    )



    }
    function reducer(estado, accion) {
    switch (accion.type) {
        case "start":
            return { ...estado, activado: true};
        case "stop":
            return { ...estado, activado: false};
            
        case "reset":
            return { activado: false, tiempo:0};

        case "tick":

            return { ...estado, tiempo: estado.tiempo + 1};
    }
}

*/
/*

let initialState = {
    activado: false,
    tiempo: 0,
  };
  
  function App() {
    let [estado, funcionUsada] = useReducer(reducer, initialState);
  
    let referenciaId = useRef(0);
  
    useEffect(() => {
      referenciaId.current = setInterval(()=>funcionUsada({ type: "tick" }), 1000);
      return () => {
        clearInterval(referenciaId.current);
        referenciaId.current = 0;
      };
    }, [estado.activado]);
  return (
      <div>
        {estado.tiempo}
        <div>
          <button onClick={() => funcionUsada({ type: "start" })}>Empezar</button>
          <button onClick={() => funcionUsada({ type: "stop" })}>Parar</button>
          <button onClick={() => funcionUsada({ type: "reset" })}>Resetear</button>
        </div>
      </div>
    );
  }
  function reducer(estado, accion) {
    switch (accion.type) {
      case "start":
        return { ...estado, activado: true };
      case "stop":
        return { ...estado, activado: false };
  
      case "reset":
        return { activado: false, tiempo: 0 };
  
      case "tick":
        return { ...estado, tiempo: estado.tiempo + 1 };
    }
  }

  */




  //CONTADOR


    let valorInicial = [
        {
            id: 1,
            titulo: "primera accion",
            completo: false,
        },
        {
            id: 2,
            titulo: "segunda accion",
            completo: false,
        }
    ];

    function reducer (estado,accion) {
        switch (accion.type) {
            case "completo":
                return estado.map((hacer)=>{
                    console.log(hacer);
                    if (hacer.id == accion.id) {
                        return{...hacer, completo: !hacer.completo };
                    }else{
                        return hacer;
                    }
                });


        
            default: return estado;
                
        }
    }
    
    function App() {
        let [tareas,funcionUsada] = useReducer(reducer,valorInicial);

        function manejaCompeto(hacer) {
            funcionUsada({type: "completo", id:hacer.id});
        };

        return (
            <>
                {tareas.map((hacer)=>(
                    <div>
                        <label>
                            <input type="checkbox" 
                            checked={hacer.completo} 
                            onChange={()=>manejaCompeto}>
                            </input>
                            {hacer.titulo}
                        </label>
                    </div>

                ))}
            </>
        )
    }

export default App;
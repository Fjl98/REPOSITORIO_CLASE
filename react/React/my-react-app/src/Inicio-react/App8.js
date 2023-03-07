// una pagina en que un usario pueda afregar elementos 
// a una lista de cosas que hacer el usuario puede marcar
//  como completado o no el elemento

import { useState, useEffect, useRef, useReducer} from "react";

const initialState = [
    {
        id:1,
        name:"terminar esta clase de reducer",
        isCompleted: false,
    },

];

const reducer = (estado, accion)=>{
    if (accion.type === "ADD_TODO") {
        let name = accion.payload;
        return[...estado,
            {id : Math.ramdon(Math.floor())*9,name,isCompleted:false},
        ];
    }
    if (accion.type === "DONE") {
        let id = accion.payload; 
        let newState = estado.map((unTodo) => {
            if (unTodo.id == id) {
                return {...unTodo,isCompleted:!unTodo.isCompleted};
            }
            return unTodo;
        });
        return newState;
    }
};

function App(){


    let [todoText,setTodoText]=useState("");
    let[state,dispatch]= useReducer(reducer,initialState);

    const manejaCambios = ({target})=>{
        setTodoText(target.value);

    }

    const manejaAgregar = () => {
        dispatch({type:"AD_TODO", payload:{name:todoText}});
        setTodoText("");
    }
    return (<>
    <p>Nuevo todo:
        <input type="text" value={todoText} onChange={manejaCambios}></input>
        <button onClick={manejaAgregar}>
            Agregar
        </button>
    </p>
    <ul>
       {state.map(({name,isCompleted,id})=>{
        let style= {
            return(<li key={id} style={style} >{name}</li>);
        });
    }
    </ul>
    
    </>);


};

export default App;


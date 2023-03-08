// una pagina en que un usario pueda afregar elementos 
// a una lista de cosas que hacer el usuario puede marcar
//  como completado o no el elemento

import React, { useState, useReducer } from "react";

const initialState = [
    {
    id: 1,
    name: "Terminar la clase de reducers",
    isCompleted: false
    }
];

const reducer = (state, action) => {
    if (action.type === "ADD_TODO") {
    const { name } = action.payload;

    return [
        ...state,
        {
        id: Math.random()+1,
        name,
        isCompleted: false
        }
    ];
    }

    if (action.type === "TOGGLE_IS_COMPLETED") {
    const { id } = action.payload;

    const newState = state.map((singleTodo) => {
        if (singleTodo.id === id) {
        return { ...singleTodo, isCompleted: !singleTodo.isCompleted };
        }

        return singleTodo;
    });

    return newState;
    }

    return state;
};


function App() {
    const [todoText, setTodoText] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = ({ target }) => setTodoText(target.value);

    const handleClick = () => {
    dispatch({
        type: "ADD_TODO",
        payload: { name: todoText }
    });
    setTodoText("");
    };

    const handleToggle = (id) => {
    dispatch({
        type: "TOGGLE_IS_COMPLETED",
        payload: { id }
    });
    };

    return (
    <>
        <p>
        Nuevo TODO:
        <input type="text" value={todoText} onChange={handleChange} />
        <button onClick={handleClick}>Agregar</button>
        </p>

        <h2>Listado</h2>

        <ul>
        {state.map(({ name, isCompleted, id }) => {
            const style = {
            textDecoration: isCompleted ? "line-through" : "inherit"
            };

            return (
            <li key={id} style={style} onClick={() => handleToggle(id)}>
                {name}
            </li>
            );
        })}
        </ul>
    </>
    );
};

export default App;


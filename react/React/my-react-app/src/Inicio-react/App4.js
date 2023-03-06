
import React from "react";
import { useState } from "react";

const Ensenar = () => {

    let [ensenaTexto,setEnsenaTexto] = useEstate(false);

    return(<div>
        <button type="button" onClick={() => {
            setEnsenaTexto(true);
        }}>
            muestrame el texto
        </button>
    
    {
        ensenaTexto && "holaaaa";
    }
    </div>
    );
}

export default App;
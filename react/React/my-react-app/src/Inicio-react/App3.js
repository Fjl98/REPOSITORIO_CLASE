import React, {Component} from "react";
import { useState,useEffect } from "react";


function App() {
    let [contar,setContar] = useState(0);
    useEffect(() => {
        setContar(contar+1);
        return () => {console.log("adios");}
    },[]);
    return (
        <div>
            <p>{contar}</p> 
        </div>
    );

}
export default App;
//A


/*
fetch("hola.txt")
.then(function Si(response) {
    console.log("ahoraSi");
})
.then(function Si(response) {
    console.log("ahoraSi");
})
.catch(function No(response) {
    console.log("ahoraNo");
})
.finally(function Siempre(response) {
    console.log("ahoraSiempre");
})





fetch("hola.txt")
.then((response) => response.txt())
.then((response) => console.log(response))
.catch((response) => console.log(ahoraNo))
.finally((response) => console.log("ahoraSiempre"))


------------------------------------


*/




/*
function Ejecutate() {
console.log("CUIDADO");
console.log("CUIDADO");
console.log("CUIDADO");
console.log("CUIDADO");
console.log("CUIDADO");
console.log("hola");

}



function Ejecutate() {
    return("Hola");
}

async function Llamada() {
    console.log("ahí me voy");
    await Ejecutate();
    console.log(a);
}
Llamada();

---------------------------------------

*/

/*
function Ejecutate() {
    new Promise(resolve =>{
        console.log("hola");
        resolve("javi");
        console.log(resolve);
    }).then(function Si() {
        var devuelve = "Javi";
        console.log("ahoraSi");
        return devuelve;
    });
}

async function Llamada() {
    console.log("ahí me voy");
    await Ejecutate();
    console.log(a);
}
Llamada();
*/


//TIMEOUT
/*
let div = document.getElementById("div");

setTimeout(() => {
    let h1 = document.createElement("h1");
    let texto = document.createTextNode("ahora si que estoy despierto");
    h1.appendChild(texto);
    div.appendChild(h1);
    }, 5000);
    console.log("hola");
*/
/*
    let h1 = document.getElementById("h1");

    setInterval(() => {
        if (h1.style.color === "red") {
            h1.style.color = "black";
            
        } else {
            h1.style.color = "red";
        }
        
    }, 500);
*/



/*

let boton = document.getElementById("boton");

    function anadirElemento() {
        boton.addEventListener("click", paraInterval);
    }
    function paraInterval() {
        setTimeout(() => {
            clearInterval(intervalo);
        }, 3000);
    }

    let intervalo = setInterval(() => {
        if (h1.style.color === "red") {
            h1.style.color = "black";
            
        } else {
            h1.style.color = "red";
        }
        
    }, 500);

window.onload = anadirElemento();

*/

//EJERCICIO UN SEMAFORO


let div = document.getElementsByClassName("div");


setInterval(() => {
    if (div[0].style.backgroundColor === "black") {
        div[0].style.backgroundColor = "red"
    }else{
        div[0].style.backgroundColor = "black"
    }
}, 1000);
 
setInterval(() => {
    if (div[1].style.backgroundColor === "black") {
        div[1].style.backgroundColor = "orange"
    }else{
        div[1].style.backgroundColor = "black"
    }
}, 1000);

setInterval(() => {
    if (div[2].style.backgroundColor === "black") {
        div[2].style.backgroundColor = "green"
    }else{
        div[2].style.backgroundColor = "black"
    }
}, 1000);
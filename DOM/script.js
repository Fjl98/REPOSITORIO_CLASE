/*
let h1 = document.getElementById("id").innerHTML = "hola";
console.log(h1);

for (let i = 0; i < 5; i++) {
    
    
}


//AÑADIR ELEMENTOS AL HTML Y CLASES

let div = document.getElementById("id");

let elemento = document.createElement("p");
let texto = document.createTextNode("He sido creado dinamicamente");
elemento.id = "p";
elemento.className = "clase1"
elemento.appendChild(texto);
div.appendChild(elemento);

console.log(div);
*/


/*  BOTON CLICABLE Y QUE APAREZCA EL ALERTA

let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    alert("hola");
})

SEGUNDA FORMA DE HACERLO

let boton = document.getElementById("boton");

function clica() {
    alert("hola");
}

//TERCERA FORMA

function anadirelemento(){


let boton = document.getElementById("boton");

boton.addEventListener("click", Clica); 

    function Clica() {
        alert("hola")
    }
}
window.onload = anadirelemento(); 
*/

//CUARTA FORMA

function anadirelemento(){


    let area = document.getElementById("area");
    
    area.addEventListener("mouseover", pasa); 
    area.addEventListener("mouseout", sale); 
    
        function pasa() {
            let area = document.getElementById("area");
            area.style.backgroundColor = "green";
        }

        function sale() {
            let area = document.getElementById("area");
            area.style.backgroundColor = "white";
        }
    }
    window.onload = anadirelemento();




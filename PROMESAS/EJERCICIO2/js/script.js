
let numero = document.getElementById("edad");
let enviar = document.getElementById("boton");
let reloj = document.querySelector("h1");
let segundos = 0;
let nombreCompleto = document.getElementById("nombre apellido");
let resultado = document.getElementById("caja");

function anadirElemento(){
    numero.addEventListener("blur", menor);   
    enviar.addEventListener("click", aparecer);
}
function menor(){
    if (numero.value < 18) {
        alert("DEBE SER MAYOR DE EDAD");
        numero.style.border = " 2px solid red";
        numero.value = 0;             
    } else{
        numero.style.border = " 2px solid green";
    }
}

function aparecer(){

    caja.innerHTML = "edad:" + nombreCompleto; 

    setInterval(() => {
        reloj.innerHTML = segundos;
        segundos++;
    }, 1000);
}






window.onload = anadirElemento();

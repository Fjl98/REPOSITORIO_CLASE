
function manejaEventos() {
    email.addEventListener("blur", checkemail);
}



function checkemail(event) {
    let email = document.getElementById("email");

    let uno = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm

    if (uno.test(email.value)) {
        alert("valido");
    }else{
        alert("no valido");
    }
}


/*
let telefono = document.getElementById("telefono").value;

let dos = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm

if (dos.test(telefono)) {
    alert("valido");
}else{
    alert("no valido");
}

let nombre = document.getElementById("nombre").value;

let tres = /^[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+$/i

if (tres.test(nombre)) {
    console.log("valido");
}else{
    console.log("no valido");
}

let edad = document.getElementById("edad").value;

let cuatro = /^[0-9|0-9{2}|]$/

if (cuatro.test(edad)) {
    console.log("valido");
}else{
    console.log("no valido");
}
*/

window.onload = manejaEventos;
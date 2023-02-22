
//EJERCICIO 1
//SOLICITAR AL USUARIIO QUE INGRESE EL NOMBRE Y LA CLAVE DE UN USUARIO
//MOSTRAR UNA VENTANA DE ALERTA SI LA CLAVE TIENE MENOS DE 7 CARACTERES
//DEBERAR USAR EL EELEMENTO ONBLUR

/*
let form = document.getElementById("form");

function anadirElemento(){
    form.addEventListener("blur", foco);
    }
function foco(){
    if(form.value.length < 7 ){
        alert("incorrecto");
        form.style.backgroundColor = "pink";
    }else{
        alert("correcto");
        form.style.backgroundColor = "blue";
    }
}



window.onload = anadirElemento();
*/

//EJERCICIO 2

//ELABORAR UN PROGRAMA QUE MUESTRE UN DIV DE COLOR ROJO
//CUANDO SE PRESIONE CAMBIAR EL COLOR A AMARILLO
//LUEGO DE SOLTAR EL BOTON VUELVA ROJO
/*
function anadirElemento(){
    let cubo = document.getElementById("contenedor");
    cubo.addEventListener("mousedown", amarillo);
    cubo.addEventListener("mouseup", rojo);
}
function amarillo(){
    let cubo = document.getElementById("contenedor");
    cubo.style.backgroundColor = "yellow";
}

function rojo(){
    let cubo = document.getElementById("contenedor");
    cubo.style.backgroundColor = "red";
}



window.onload = anadirElemento();

*/





let form = document.getElementById("password");
let mousemove1 = document.getElementById("datos");
function anadirElemento(){
    form.addEventListener("blur", rojo);
    mousemove1.addEventListener('mousemove', mousemove);
}
function rojo(){
    if (form.value.length < 7) {
        //alert("EL CAMPO ES INCORRECTO");
        form.style.backgroundColor = "red";
        
    } else{
        form.style.backgroundColor = "white";
        
    }
}



window.onload = anadirElemento();


/*

function mousemove(evento){
    document.getElementById("coordenadas").innerHTML="pageX: "+evento.pageX+ 
    "pageY: "+  evento.pageY+
    "clientX: " + evento.clientX+ 
    "clientY:" +  evento.clientY;
    
}

*/
/*
function suma(p1,p2) {
    return p1-p2;
}

let a = 1;
let b = 2;

console.log( suma(a,b));

let c = 6;
let d = 8;

console.log( suma(c,d));


//-------------------------------------------


const suma = (p1,p2) => p1-p2

let a = 1;
let b = 2;

console.log( suma(a,b));

let c = 6;
let d = 8;

console.log( suma(c,d));


//------------------------------------------------


const suma = () => p1-p2

let a = 1;
let b = 2;

console.log( suma(a,b));

let c = 6;
let d = 8;

console.log( suma(c,d));


//--------------------------------------------------------------


function suma(p1,p2) {
    return p1-p2;
}

let a = 1;
let b = 2;

console.log( suma(a,b));

let c = 6;
let d = 8;

console.log( suma(c,d));


//EJERCICIO 1

HAZME UNA FUNCION QUE RETORNE LA CANTIDAD DE DIGITOS QUE TIENE 
UN NUMERO ENTERO DE HASTA 5 DIGITOS


function numero(a) {
    if(a/10 < 1){
        return "tiene una cifra";
    }else if(a/100 < 1){
        return "tiene dos cifras"
    }else if(a/1000 < 1){
        return "tiene tres cifras"
    }else if(a/10000 < 1){
        return "tiene cuatro cifras"
    }else{
        return " tiene cinco cifras"
    }
}

let num = parseInt(prompt("poner cifra"));
console.log(numero(num));

*/

//EJERCICIO 2

//Elaborar una función a la cual le envíe el valor del lado de un cuadrado y me retorne su perímetro.

function perimetro(lado) {
  perimetro = lado * 4;
  return perimetro;
}

let lado = parseInt(prompt("pon un numero"));

console.log("el perimetro sera " + perimetro(lado));

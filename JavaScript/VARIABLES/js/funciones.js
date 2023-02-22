/* EJERCICIO 1

let b = 5;
let c = 4;
let d = 2;

if ((d+b+c)/3 <= 7){
    console.log("correcto");
}else{
    console.log("has suspendido");
}
*/


/*EJERCICIO 2
dos numeros por prompt

si el primero es mayor que el segundo sumarlo y restarlo

en caso contrario la multiplicacion y la divisionm
*/
/* 

let a = parseInt(prompt("añadir numero"));
let b = parseInt(prompt("añadir numero"));

if (a > b) {
    alert((a+b) + " " + (a-b));
} else {
    alert((a*b) + " " + (a/b));
}
*/

//EJERCICIO 3

/*POR TECLADO TRES NUMEROS DISTINTO
ENSEÑAME EL MAYOR DE LOS TRES*/
/*
let a = parseInt(prompt("añadir numero"));
let b = parseInt(prompt("añadir numero"));
let c = parseInt(prompt("añadir numero"));

if (a>b && a>c) {

    console.log(a);

}else if(b>a && b>c){

    console.log(b);   

}else if(c>a && c>b){

    console.log(c);   

}
*/
/*EJERCICIO 4
confeccionar un programa que permita cargar un numero entero positivo de hasta tres cifras por teclado
y muestra un mensaje indicando si tiene una o dos cifras*/

let a = parseInt(prompt("Pon un número del 1 al 999 porfa :) "));

if (a < 10) {

    console.log("tiene un digito");

} else if(a < 100){

    console.log("tiene dos digitos");

}else if(a < 999){

    console.log("tiene tres digitos");

}else if(a > 1000){

    alert("NO PUEDE SER");

}
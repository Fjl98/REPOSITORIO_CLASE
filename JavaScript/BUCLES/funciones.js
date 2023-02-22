/*
------------- BUCLE FOR------------
for (let i = 0; i < 10; i++) {
    alert("hola"+i);  
}

for (let i = 0; i < 10; i++) {

    if (i%2!=0) { //asi se ponen los numeros impares
        console.log("hola"+i);  
    }

}

-------------BUCLE WHILE------------------

let i = false;
let num = 0;


while (i==false) {
    if (num < 10){
        console.log("tu numero es menos de 10");
    }else(i==true){
        console.log("tu numero es mayor de 10");
    }
}




let i = 0;

while (i < 10) {
    console.log("hola" + i);
    i++;
} 

let bandera = 0;

while (i < 10) {
    console.log("hola" + i);
    i++;
} 

------DO WHILE-------------



do{
    let i = prompt("introduce el numero")
    console.log("hola" + i);
    i++;
} while (i=="hola");
*/

//EJERCICIO 1

/*
SE PIDEN LAS EDADES DE 5 ALUMNOS AL USUARIO POR prompt
CALCULAR EL PROMEDO DE LAS EDADES DE LOS ALUMNOS INGRESADOS


let edad = 0;

for (let i = 0; i < 5; i++) {
    let aux = parseInt(prompt("dime tu edad"));
    edad = edad + aux;
    
}

console.log(edad/5);
*/

//EJERCICIO 2

/*
PEDIR POR TECLADO 10 NUMEROS 
DIME CUATRO COSAS:
CUANTOS SON NEGATIVOS
CUANTOS SON POSITIVOS
CUANTOS SON PARES 
CUANTOS SON MULTIPLOS DE 15
 

let negativos = 0;
let positivos = 0;
let pares = 0;
let multiplos = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("introduce un numero"));
    if (numero < 0) {
        negativos++;
    }else{
        positivos++;
    }

    if (numero%2 == 0) {
        pares++;
    }
    if (numero%15 == 0) {
            multiplos++;
    }
}

console.log("negativos: " + negativos + "positivos: " + positivos + "pares: " + pares + "multiplos de 15: " + multiplos);
*/

//EJRCICIO 3
/*
QUIERO UN PROGRAMA QUE SUME NUMEROS HATSA QUE DE EL NUMERO 9999
dIME SI EL NUMERO QUE A QUEDADO ES MAYOR O MENOR QUE 0


let resultado = 0;
let aux = 0;

do {
    aux = parseInt(prompt("dame el numero"));
   
    if (aux != 9999) {
        resultado = resultado + aux;
    }
} while (aux != 9999);

    if (resultado == 0) {
        console.log("es 0");
    }else if(resultado < 0){
        console.log("es menor que 0");
    }else{
        console.log("es mayor que 0");
    }
*/

//EJERCICIO 4

//Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 -16 -24, etc

let a = 8;

do{
    a = a + 8;
    if (a <= 500){
        console.log(a);
    }
}
while (a <= 500);
    



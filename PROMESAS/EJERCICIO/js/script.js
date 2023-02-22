/*
EJERCICIO 1

HACER UNA PAGINA Y CREAR UN LINK DE CARGA
Y AL PASAR X SEGUNDOS CAMBUIE LA IMAGEN POR UN H1 
QUE DIGA HAN CARGADO LOS DATOS SATISFACTORIAMENTE

let gif = document.getElementById("img");
let contenedor = document.getElementById("div");

let h1 = document.createElement("h1");
let texto = document.createTextNode("Hola");
h1.appendChild(texto);

setTimeout(() => {
    gif.hidden = true;
    contenedor.appendChild(h1);
}, 2000);

*/

/*
EJERCICIO 2

HAZME UN RELOJ EN JS QUE CUENTE LOS SEGUNDOS
DESDE QUE SE HA INICIADO LA APLICACION
*/
let reloj = document.querySelector("h1");
let segundos = 0;
let minutos = 0;

setInterval(() => {
    reloj.innerHTML = minutos + ":" + segundos;
    segundos++;
    if (segundos == 60) {
        segundos = 0;
        minutos++;
        
    }
}, 1000);

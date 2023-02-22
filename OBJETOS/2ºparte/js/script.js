
/*
class Coche{
    //constructor
    constructor(nombre){
        this.nombre = nombre;
    }
    static diHola(nombre){
        return "hola soy " + nombre;
    }
}
let coche1 = new Coche("Manuel");
console.log(Coche.diHola(coche1.nombre));
*/


//EJERCICIO 1
/*
HACER UNA FUNCION QUE RECIBA UN OBJETO Y QUE RETORNR 
UNA ARRAY CON LOS VALORES DE SUS ATRIBUTOS A LOS 
ELEMENTOS HACER LA CLASE PERSONA
*/
class Persona{
    constructor(nombre,apellido,color){
        this.nombre = nombre;
        this.apellido = apellido;
        this.color = color;

    }
    toString(){
        return " Nombre: " + this.nombre + " Apellido: " + this.apellido + " Color: " + this.color;
    }
}
/*
function ejemplo(persona1,persona2,persona3) {
    return[persona1.toString(), persona2.toString(), persona3.toString()];
}
*/
function ejemplo(arrayPersona) {
    let arrayDevolver = [];
    for (let i = 0; i < arrayPersona.length; i++) {
        arrayDevolver.push(arrayPersona[1].toString());     
    }
    return arrayDevolver;
}

let persona1 = new Persona("Jesús", "Laguna", "azul");
let persona2 = new Persona("Ana", "Rodriguez", "verde");
let persona3 = new Persona("Jose", "Lacort", "rojo");

let array = [];

array.push(persona1);
array.push(persona2);
array.push(persona3);

console.log(ejemplo(array));



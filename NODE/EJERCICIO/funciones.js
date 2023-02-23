// crear una clase persona que sea el padre de una clase llamada cliente 
// la clase persona tendra de atributo nombre apellidos y edad
// la clase cliemte tendra de atributos lista de la compra y dinerpo gastado
// escribir un archivo (buscando en node)con los datos del cliente


const fs = require("fs");

class Persona{
    constructor(nombre,apellidos,edad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    toString(){
        return this.nombre + this.apellidos + this.edad;

    }
}
class Cliente extends Persona{
    constructor(nombre,apellidos,edad,lista,dinero){
        super(nombre ,apellidos ,edad);
        this.lista = lista;
        this.dinero = dinero;

    }
    toString(){
        return ("Nombre: " + this.nombre + " Apellidos: " + this.apellidos + " Edad: " + this.edad + " Lista de la compra: " + this.lista + " Dinero gastado: " + this.dinero);
    }
}

let cliente1 = new Cliente("Jesús","Laguna Porcuna",25,["tomate","carne","huevos"],20);


fs.writeFile("listaClientes.txt" , cliente1.toString(), function(){});
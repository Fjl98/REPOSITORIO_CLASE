
//EJERCICIO 2
/*CREAR UNA ARRAY DE OBJETOS CON LET CLIENTES Y QUE ESTA SE CREA OTRA ARRAY 
PERO DE CLIENTES.*/

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
    constructor(nombre,apellidos,edad,lista,dinero,cosas){
        super(nombre ,apellidos ,edad);
        this.lista = lista;
        this.dinero = dinero;
        this.cosas = cosas;

    }
    toString(){
        return (" Nombre: " + this.nombre + " Apellidos: " + this.apellidos + " Edad: " + this.edad + " Lista de la compra: " + this.lista + " Dinero gastado: " + this.dinero + " Cosas que tengo: " + this.cosas + "/n");
    }
}

let cliente1 = new Cliente("Jesús","Laguna Porcuna",25,["tomate","carne","huevos"],20,[" cartera "," telefono "]);
let cliente2 = new Cliente("Ana","Rodriguez Baez",21,["pasta","aceite","agua"],50,[" telefono "," bolso "," maquillaje"]);
let cliente3 = new Cliente("Jose","Lopez Garcia",23,["pera","naranja","melon"],30,[" cartera "," telefono"]);
let cliente4 = new Cliente("Maria","Perez hdhdh",18,["esparagos","lomo","aceite"],45,[" carte "," bolso"]);

let clientes = [cliente1,cliente2,cliente3,cliente4];

fs.writeFile("listacliente.txt", "" ,function(){});

clientes.forEach(cliente => {
    fs.appendFile("listacliente.txt", cliente.toString() + "\n" ,function(){});
});

//fs.appendFile("listaClientes.txt" , clientes.toString(), function(){});


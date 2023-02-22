
/*
let rotulador = {
    grosor : "fino",
    Color : "negro",
    pinta : true,
    brillante : false
    colorea : function hola() {
        console.log("hola");
    }

}
rotulador.marca = "bic";
rotulador.grosor = "gordo";
console.log(rotulador);
*/

/*
let array = [];

for (let i = 0; i < 4; i++) {
    let comensal = {
        nombre : prompt(),
        apellido: "gonzalez",
        nocomensal : i+1
    }
    array.push(comensal)
}
console.log(array);

*/




/*
let comensal = {
    nombre: "javier",
    apellidos: "Gonzalez",
    nocomensal: function hola() {
        console.log(this.nombre);
    },
};
let string = "adios"

comensal.nocomensal();

string.concat();
*/
/*
class Persona{

    constructor(name,apellido,colorFavorito){
        this.name = name;
        this.apellido = apellido;
        this.colorFavorito = colorFavorito;
    }

}
let personas = [new Persona("Andrea","Gonzalez","azul"),new Persona("jesus","Gonzalez","rojo")]
console.log(personas);

*/

/*

class Persona{
    //constructor
    constructor(name,apellido,colorFavorito){
        this.name = name;
        this.apellido = apellido;
        this.colorFavorito = colorFavorito;
    }
    //toString
    toString (){
        return "Nombre: "+this.name+" apellido: "+this.apellido+" color Favorito "+this.colorFavorito;
    }
}
let persona1 = [new Persona("Andrea","Gonzalez","azul"),new Persona("jesus","Gonzalez","rojo")]
console.log(persona1.toString());



class Persona{
    //constructor
    constructor(name,apellido,colorFavorito){
        this.name = name;
        this.apellido = apellido;
        this.colorFavorito = colorFavorito;
    }
    //toString
    toString (){
        return "Nombre: "+this.name+" apellido: "+this.apellido+" color Favorito "+this.colorFavorito;
    }
    //GETTER Y SETTERS
    getName(){
        return this.name;

    }
    setName(name){
        this.name = name
    }
}
let persona1 = new Persona("Andrea","Gonzalez","azul");
persona1.setName("pepe")
console.log(persona1);







class Persona{
    //constructor
    constructor(name,apellido,colorFavorito){
        this.name = name;
        this.apellido = apellido;
        this.colorFavorito = colorFavorito;
    }
    //toString
    toString (){
        return "Nombre: "+this.name+" apellido: "+this.apellido+" color Favorito "+this.colorFavorito;
    }
    //GETTER Y SETTERS
    getName(){
        return this.name;

    }
    setName(name){
        this.name = name
    }
    devuelveHola(){
        return "hola "+this.name + " " + this.apellido
    }
    
}
class Alumno extends Persona{
        constructor(hora,asignatura,name,apellido,colorFavorito){
            super(name,apellido,colorFavorito);
            this.hora = hora;
            this.asignatura = asignatura;
        }
    }
let persona1 = new Alumno(4,"Fullstack","Andrea","Gonzalez","azul");
console.log(persona1);



*/





class Persona{
    //constructor
    constructor(name,apellido,colorFavorito){
        this.name = name;
        this.apellido = apellido;
        this.colorFavorito = colorFavorito;
    }
    //toString
    toString (){
        return "Nombre: "+this.name+" apellido: "+this.apellido+" color Favorito "+this.colorFavorito;
    }
    //GETTER Y SETTERS
    getName(){
        return this.name;

    }
    setName(name){
        this.name = name
    }
    devuelveHola(){
        return "hola "+this.name + " " + this.apellido
    }
    
}
class Alumno extends Persona{
        constructor(hora,asignatura,name,apellido,colorFavorito){
            super(name,apellido,colorFavorito);
            this.hora = hora;
            this.asignatura = asignatura;
        }
        toEnsena(){
            return this.toString() + "Hola "+this.hora+" asignatura; "+this.asignatura;
        }
    }
let persona1 = new Alumno(4,"Fullstack","Andrea","Gonzalez","azul");
console.log(persona1.toEnsena());








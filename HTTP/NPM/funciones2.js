const buffer = require("buffer");
const fs = require("fs");

/*
let Stream = fs.createReadStream('logs.txt','utf-8');

let data = "";

Stream.once('data',()=>{
    console.log("iniciando el stem..");

});

Stream.on('datos',(chunk)=> {
    data = chunk;
    console.log(chunk);
});

Stream.on('end',()=>{
    console.log("se acabo");
});
                                            
*/


//SIRVE PARA CREAR ARCHIVOS DE TEXTO
let stream = fs.createWriteStream('logs.txt');

stream.write("hola desde streams")
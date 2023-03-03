let oracion = "12435";

let patron = /^[A-Z]/;
let a = /[0-9]{3,8}/;
let b = /[a-z]{2}[0-9]{3}[a-z]{2}/
let c = /[a-z]+/
let d = /^[\+\-]?[0-9]+$/
let e = /^[0-9]+\.?[0-9]+$/
let f = /^\d{5}$/

let hola = "elefante elegido elento";
let h = /adm/i;
let i = /el/gi;




if (a.test(oracion)) {
    console.log("valido");
}else{
    console.log("no valido");
}
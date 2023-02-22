

let conexion;
function cargaDatos() {
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = proesarCargaJson;
    conexion.open("GET","https://randomuser.me/api/?results=10",true);
    conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    conexion.send();
}

function proesarCargaJson() {
    let div = document.getElementById("resp");
    if (conexion.readyState == 4 || conexion.readyState == 200) {
        let datos = JSON.parse(conexion.responseText);
        datos.results.forEach(dato => {
            let p = document.createElement("p");
            let texto = document.createTextNode(dato.name.first);           
            p.appendChild(texto);
            div.appendChild(p);
        });
    }
}
window.onload = cargaDatos();


/* PROMESAS

let promesa = new Promise(){
    
}
promesa.then(); //lo primero que comprueba
promesa.catch(); //manejador de errores
promesa.finally(); //siempre se ejecuta 
*/











let conexion;
function cargaDatos() {
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = proesarCargaJson;
    conexion.open("GET","https://pokeapi.co/api/v2/pokemon/pikachu",true);
    conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    conexion.send();
}

function proesarCargaJson() {
    let div = document.getElementById("resp");
    if (conexion.readyState == 4 || conexion.readyState == 200) {

        let datos = JSON.parse(conexion.responseText);
        console.log(conexion.responseText);
        let p = document.createElement("p");
        let texto = document.createTextNode(datos.name);
        p.appendChild(texto);
        div.appendChild(p);
        let img = document.createElement("img");
        img.src = datos.sprites.front_default;
        div.appendChild(img);







        // datos.results.forEach(dato => {
        //     let p = document.createElement("p");
        //     let texto = document.createTextNode(dato.name);           
        //     p.appendChild(texto);
        //     div.appendChild(p);
        // });
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









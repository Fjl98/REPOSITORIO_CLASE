/*
EJERCICIO 1

CREAR UN FORMULARIO DE RESERVAS DE HABITACION DE UN HOTEL QUE CUENTE CON LOS SIGUIENTES REQUISITOS:
QUE SU NOMBRE NO TENGA MAS DE 12 CARACTERES
ELEGIR EN UN RADIO BUTTON SI ES FUMADOR O NO CHECKBOX
SI NO LO ES SE VERA UN CAMPO LLAMADO NUMERO DE HIJOS que sean 3 NUMBER
Y AÑDIREMOS UNOS CHECKBOX DICIENDO SI ES INTOLREANTE A GLUTEN LACTEO O A NADA  CHECKBOX
*/

let nombre = document.getElementById("nombre");
    let hijos = document.getElementById("hijos");
    let radioNo = document.getElementById("fumador2");
    let radioSi = document.getElementById("fumador1");
    let noAlergias = document.getElementById("noAlergias");
    let alergias = document.getElementsByClassName("alergias");

    function anadirEventos() {
      nombre.addEventListener("blur", compruebaNombre);
      hijos.hidden = true;
      radioNo.addEventListener("change", checkFuma);
      radioSi.addEventListener("change", checkFuma);
      noAlergias.addEventListener("click", checkAlergia);
    }

    function checkFuma() {
      if (radioNo.checked == true) {
        hijos.hidden = false;
      } else {
        hijos.hidden = true;
      }
    }

    function checkAlergia(params) {
      if (noAlergias.checked == true) {

        alergias[0].disabled = true;
        alergias[1].disabled = true;


      }else{

        alergias[0].disabled = false;
        alergias[1].disabled = false;
      }
    }

    function compruebaNombre() {
      if (nombre.value.length >= 1) {
        if (nombre.value.length >= 12) {
          alert("NOMBRE INVALIDO: no puede tener mas de 12 caracteres");
          nombre.style.borderColor = "red ";
          nombre.value = "";
        } else {
          nombre.style.borderColor = "lightgreen";
        }
      } else {
        alert("NOMBRE INVALIDO: introduzca nombre");
        nombre.style.borderColor = "red ";
      }
    }

    window.onload = anadirEventos();
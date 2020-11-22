function validarFormulario() {
    var nombre=document.forms["formulario"]["nombre"].value;
    var apellido=document.forms["formulario"]["apellido"].value;
    var correo=document.forms["formulario"]["correo"].value;
    var auto=document.forms["formulario"]["auto"].value;
    if(nombre=="") {
        alert("Falta escribir nombre");
    } else if(apellido=="") {
        alert("Falta escribir apellido");
    } else if(correo=="") {
        alert("Falta escribir correo");
    } else {
        alert("Enviado");
    }

}
function sumar(x,y) {
    var total;
    total=x + y;
    alert(total);
}

/* Change languaje */
let actualLanguaje = 'es';
function setLanguaje(newLanguaje) {
    const oldLanguajeElements = document.getElementsByClassName(actualLanguaje);
    for (element of oldLanguajeElements) {   
        element.style.display = 'none';
    }
    actualLanguaje = newLanguaje;
    const newLanguajeElements = document.getElementsByClassName(actualLanguaje);
    for (element of newLanguajeElements) {
        element.style.display = 'block';
    }
}
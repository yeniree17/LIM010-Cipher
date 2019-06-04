/* Acá va tu código */
const nombreUsuario= document.getElementById('nombre');

const botonNombre = document.getElementById('botonNombre');

/* botonNombre.addEventListener ('click', mostrarNombre ());
/*=> {
const nombre = nombreUsuario.value;
});*/

/* botonPassword.addEventListener ('click', () => {
    const password = password.value;
    }); */

function mostrarNombre () {
    const nombre= nombreUsuario.value;
    document.getElementById('nombre2').innerHTML='Hola '+ nombre + ' !';
    document.getElementById('inicio').style.display="none"; //Oculta la seccion de inicio
    document.getElementById('opciones').style.display="block"; //Muestra la seccion de seleccionar metodo
}


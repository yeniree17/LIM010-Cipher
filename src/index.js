/* Acá va tu código */
const nombreUsuario = document.getElementById('nombre');
const password = document.getElementById('password');
const clave = 1;
/*'laboratoria'.toUpperCase();*/
const boton = document.getElementById("botonPassword");
let intento = 0;

boton.addEventListener('click', (event) => {
    event.preventDefault()
    const nombre = nombreUsuario.value;
    const psw = password.value;
    if (psw == clave) {
        document.getElementById('inicio').style.display = 'none'; //oculto la seccion de inicio ventana1
        document.getElementById('opciones').style.display = 'block'; //muestro la seccion de seleccionar metodo ventana2
        document.getElementById('nombre2').innerHTML = "Hola " + nombre + "!";
    }
    else if (intento > 1) {
        alert('Ya utilizaste todos tus intentos, en estos momentos no podrás ingresar!');
    }
    else {
        alert('Contraseña Incorrecta! Recuerda colocar la clave en mayúscula, al 3er intento fallido, ya no podras ingresar');
        intento++;
    }
});
const boton2 = document.getElementById('darConsejo');
boton2.addEventListener('click', () => {
    document.getElementById('opciones').style.display = 'none'; //oculto la seccion de opciones ventana2
    document.getElementById('cifMje').style.display = 'block'; //muestro la seccion de cifrado
});
const boton3 = document.getElementById('descifrarSecreto');
boton3.addEventListener('click', () => {
    document.getElementById('opciones').style.display= 'none';
    document.getElementById('descifMje').style.display= 'block';
    document.getElementById('nombre3').innerHTML = "BienvenidX " + nombre + "!";
});


/* botonNombre.addEventListener ('click', mostrarNombre ());
/*=> {
const nombre = nombreUsuario.value;
});*/

/* botonPassword.addEventListener ('click', () => {
    const password = password.value;
    }); */

/*function mostrarNombre () {
    const nombre= nombreUsuario.value;
    document.getElementById('nombre2').innerHTML='Hola '+ nombre + ' !';
    document.getElementById('inicio').style.display="none"; //Oculta la seccion de inicio
    document.getElementById('opciones').style.display="block"; //Muestra la seccion de seleccionar metodo
}*/


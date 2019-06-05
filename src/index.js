/* Acá va tu código */
const nombreUsuario= document.getElementById('nombre');
const password = document.getElementById('password');
const clave= 'laboratoria'.toUpperCase();
const boton= document.getElementById("botonPassword");
let intento= 0;


boton.addEventListener('click', function() {
const nombre= nombreUsuario.value;
const psw= password.value;

    if(psw == clave){
    
    document.getElementById('inicio').style.display='none'; //oculto la seccion de inicio ventana1
    document.getElementById('opciones').style.display='block'; //muestro la seccion de seleccionar metodo ventana2
    /*document.getElementById('nombre2').innerHTML= "Hola "+ nombre + "!";*/
}
    else if(intento>1){
        alert('Ya utilizaste todos tus intentos, en estos momentos no podrás ingresar!');
    }
    else{
        alert ('Contraseña Incorrecta! Recuerda colocar la clave en mayúscula, al 3er intento fallido, ya no podras ingresar');
        intento++;
    }
})




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


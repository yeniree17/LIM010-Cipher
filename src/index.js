/* Acá va tu código */
const nombreUsuario= document.getElementById('nombre');
const password = document.getElementById('password');
const clave= "laboratoria".toUpperCase();
const boton= document.getElementById("botonPassword");
let c=1;
boton.addEventListener("click", function(){
const name= password.value;
    if(password==clave){
      alert('Bienvenido');
    }
    if else(c>2){
        alert('ERROR Ya no puedes ingresar');
    }
    else{
        alert ('Intenta de nuevo');
        c++;

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


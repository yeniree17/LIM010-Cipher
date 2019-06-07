/*import { Cipher } from "crypto";

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
    /* if (nombre == ' ' && psw == ' '){
        alert('Debe ingresar su nombre y contraseña para acceder');
    }*/
    if (psw == clave) {
        document.getElementById('inicio').style.display = 'none'; //oculto la seccion de inicio ventana1
        document.getElementById('opciones').style.display = 'block'; //muestro la seccion de seleccionar metodo ventana2
        document.getElementById('nombre2').innerHTML = 'Hola ${nombre}!';
    }
    else if (intento > 1) {
        alert('Ya utilizaste todos tus intentos, en estos momentos no podrás ingresar!');
    }
    else {
        alert('Contraseña Incorrecta! Recuerda colocar la clave en mayúscula, al 3er intento fallido, ya no podras ingresar');
        intento++;
    }
}); 

/*const offset= document.getElementById('claveCif').value;
const string= document.getElementById('textCif').value;*/

const boton2 = document.getElementById('darConsejo');
boton2.addEventListener('click', () => {
    document.getElementById('opciones').style.display = 'none'; //oculto la seccion de opciones ventana2
    document.getElementById('cifMje').style.display = 'block'; //muestro la seccion de cifrado
});
const boton3 = document.getElementById('descifrarSecreto');
boton3.addEventListener('click', () => {
    const nombre1 = nombreUsuario.value;
    document.getElementById('opciones').style.display = 'none';
    document.getElementById('descifMje').style.display = 'block';
    document.getElementById('nombre3').innerHTML = "BienvenidX " + nombre1 + "!";
});
const boton4 = document.getElementById('botonConsejo');
boton4.addEventListener('click', () => {
    const offset= document.getElementById('claveCif').value;
const string= document.getElementById('txtCif').value;
let resultCif= document.getElementById("mjeCifrado");
let mensaje=cipher.encode(offset.value, string.value);
resultCif.innerHTML= (mensaje)
    document.getElementById('cifMje').style.display = 'none';
   /* document.getElementById('resultCif').value = cipher.encode (offset.value, string.value);*/
    document.getElementById('resultCif').style.display = 'block';
    
});
const boton5 = document.getElementById('back1');
boton5.addEventListener('click',() => {
document.getElementById('resultCif').style.display= 'none';
document.getElementById('inicio').style.display= 'block';
document.getElementById('password').value='';
});
const boton6 = document.getElementById('botonSecreto');
boton6.addEventListener('click', () => {
    document.getElementById('descifMje').style.display = 'none';
    document.getElementById('resultDescif').style.display = 'block';
});
const boton7 = document.getElementById('back2');
boton7.addEventListener('click',() => {
document.getElementById('resultDescif').style.display= 'none';
document.getElementById('inicio').style.display= 'block';
});

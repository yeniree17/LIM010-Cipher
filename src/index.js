/*Login del Usuario*/
const nombreUsuario = document.getElementById("nombre");
const password = document.getElementById("password");
const clave = 1;
/*'laboratoria'.toUpperCase();*/
const boton = document.getElementById("botonPassword");
let intento = 0;
/*Evento que ejecuta el ingreso en 3 intentos*/
boton.addEventListener("click", (event) => {
    event.preventDefault()
    const nombre = nombreUsuario.value;
    const psw = password.value;
    /* if (nombre == ' ' && psw == ' '){
        alert('Debe ingresar su nombre y contraseña para acceder');
    }*/
    if (psw == clave) {
        document.getElementById("inicio").style.display = 'none'; //oculto la seccion de inicio ventana1
        document.getElementById("opciones").style.display = 'block'; //muestro la seccion de seleccionar metodo ventana2
        document.getElementById("nombre2").innerHTML = `Hola ${nombre}!`;
    }
    else if (intento > 1) {
        const alertFinal= "Ya utilizaste todos tus intentos, en estos momentos no podrás ingresar!";
        document.getElementById("error").innerHTML= alertFinal;
    }
    else {
        const alert="Contraseña Incorrecta! Recuerda colocar la clave en mayúscula, al 3er intento fallido, ya no podras ingresar";
        document.getElementById("error").innerHTML= alert;
        intento++;
    }
});
/*Acceder al metodo de cifrado ventana 3 cuando el usuario escoge DarConsejo*/
const boton2 = document.getElementById("darConsejo");
boton2.addEventListener("click", () => {
    document.getElementById("opciones").style.display = 'none'; //oculto la seccion de opciones ventana2
    document.getElementById("cifMje").style.display = 'block'; //muestro la seccion de cifrado
});
/*Acceder al metodo de descifrado ventana 5*/
const boton3 = document.getElementById("descifrarSecreto");
boton3.addEventListener("click", () => {
    const nombre1 = nombreUsuario.value;
    document.getElementById("opciones").style.display = 'none';
    document.getElementById("descifMje").style.display = 'block';
    document.getElementById("nombre3").innerHTML = `BienvenidX ${nombre1}!`;
});
/*Ejecuta el metodo cifrado ventana 3 y accede a resultadosCif ventana 4*/
const boton4 = document.getElementById("botonConsejo");
boton4.addEventListener("click", () => {
    const nombre2 = nombreUsuario.value;
    const offset = document.getElementById("claveCif");
    const string = document.getElementById("txtCif");
    const mjeCifrado = document.getElementById("mjeCifrado");
    let mensajeCode = cipher.encode(offset.value, string.value);
    mjeCifrado.innerHTML = (mensajeCode);
    document.getElementById("cifMje").style.display = 'none';
    document.getElementById("resultCif").style.display = 'block';
    document.getElementById("nombre4").innerHTML = `Genial ${nombre2}!`;
});
/*Para retornar al pagina de Inicio luego de codificar*/
const boton5 = document.getElementById("back1");
boton5.addEventListener("click", () => {
    document.getElementById("resultCif").style.display = 'none';
    document.getElementById("inicio").style.display = 'block';
    document.getElementById("password").value = '';
});
/*Ejecuta el metodo descifrado ventana 5 y accede a resultadoDescif ventana 6*/
const boton6 = document.getElementById("botonSecreto");
boton6.addEventListener("click", () => {
    const offset1 = document.getElementById("claveDescif");
    const string1 = document.getElementById("txtDescif");
    const mjeCifrado = document.getElementById("mjeDescifrado");
    let mensajeDecode = cipher.decode(offset1.value, string1.value);
    mjeCifrado.innerHTML = (mensajeDecode);
    document.getElementById("descifMje").style.display = 'none';
    document.getElementById("resultDescif").style.display = 'block';
});
/*Para retornar al pagina de Inicio luego de descifrar*/
const boton7 = document.getElementById("back2");
boton7.addEventListener("click", () => {
    document.getElementById("resultDescif").style.display = 'none';
    document.getElementById("inicio").style.display = 'block';
    document.getElementById("nombre").value = " ";
    document.getElementById("password").value = " ";
});
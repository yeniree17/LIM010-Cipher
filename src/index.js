/*Login del Usuario*/
const nombreUsuario = document.getElementById("nombre");
const password = document.getElementById("password");
const clave = 'uno';
/*'laboratoria'.toUpperCase();*/
const boton = document.getElementById("botonPassword");
let intento = 0;
/*Evento que ejecuta el ingreso en 3 intentos*/
boton.addEventListener("click", (event) => {
    event.preventDefault()
    const nombre = nombreUsuario.value;
    const psw = password.value;
    const ventana1 = document.getElementById("inicio");
    const ventana2 = document.getElementById("opciones");
    /* if (nombre == ' ' && psw == ' '){
        alert('Debe ingresar su nombre y contraseña para acceder');
    }*/
    if (psw === clave) {
        ventana1.classList.add("hide"); //se oculta la seccion de inicio
        ventana2.classList.remove("hide"); //muestro la seccion de seleccionar metodo ventana2
        document.getElementById("nombre2").innerHTML = `Hola ${nombre}!`;
        intento = 0;
    }
    else if (intento > 1) {
        const alertFinal = "Ya utilizaste todos tus intentos, en estos momentos no podrás ingresar!";
        document.getElementById("error").innerHTML = alertFinal;
    }
    else {
        const alert = "Contraseña Incorrecta! Recuerda colocar la clave en mayúscula, al 3er intento fallido, ya no podras ingresar";
        document.getElementById("error").innerHTML = alert;
        intento++;
    }
});
/*Acceder al metodo de cifrado ventana 3 cuando el usuario escoge DarConsejo*/
const boton2 = document.getElementById("darConsejo");
boton2.addEventListener("click", () => {
const ventana2 = document.getElementById("opciones");
const ventana3 = document.getElementById("cifMje");
    ventana2.classList.add("hide"); //oculto la seccion de opciones ventana2
    ventana3.classList.remove("hide"); //muestro la seccion de cifrado
});
/*Acceder al metodo de descifrado ventana 5*/
const boton3 = document.getElementById("descifrarSecreto");
boton3.addEventListener("click", () => {
    const nombre1 = nombreUsuario.value;
    const ventana2 = document.getElementById("opciones");
    const ventana5 = document.getElementById("descifMje");
    ventana2.classList.add("hide"); // oculta la seccion de opciones
    ventana5.classList.remove("hide");//cuando el usuario selecciona descifrar
    document.getElementById("nombre3").innerHTML = `${nombre1}!`;
});
/*Ejecuta el metodo cifrado ventana 3 y accede a resultadosCif ventana 4*/
const boton4 = document.getElementById("botonConsejo");
boton4.addEventListener("click", () => {
    const nombre2 = nombreUsuario.value;
    const ventana3 = document.getElementById("cifMje");
    const ventana4 = document.getElementById("resultCif");
    ventana3.classList.add("hide");//oculta la opcion de cifrado
    ventana4.classList.remove("hide");//muestra el resultado de cifrado
    const offset = document.getElementById("claveCif");
    const string = document.getElementById("txtCif");
    const mjeCifrado = document.getElementById("mjeCifrado");
    let mensajeCode = cipher.encode(offset.value, string.value);
    mjeCifrado.innerHTML = (mensajeCode);
    document.getElementById("nombre4").innerHTML = `Genial ${nombre2}!`;
});
/*Para retornar al pagina de Inicio luego de codificar*/
const boton5 = document.getElementById("back1");
boton5.addEventListener("click", () => {
    const ventana4 = document.getElementById("resultCif");
    const ventana1 = document.getElementById("inicio");
    ventana4.classList.add("hide");//oculta los resultados
    ventana1.classList.remove("hide");//muestra la pantalla de inicio
    document.getElementById("nombre").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error").innerHTML = "";
});
/*Ejecuta el metodo descifrado ventana 5 y accede a resultadoDescif ventana 6*/
const boton6 = document.getElementById("botonSecreto");
boton6.addEventListener("click", () => {
    const ventana5 = document.getElementById("descifMje");
    const ventana6 = document.getElementById("resultDescif");
    ventana5.classList.add("hide");//luego de ejecutar el descifrado
    ventana6.classList.remove("hide");//muestra el resultado de descifrar
    const offset1 = document.getElementById("claveDescif");
    const string1 = document.getElementById("txtDescif");
    const mjeCifrado = document.getElementById("mjeDescifrado");
    let mensajeDecode = cipher.decode(offset1.value, string1.value);
    mjeCifrado.innerHTML = (mensajeDecode);
});
/*Para retornar al pagina de Inicio luego de descifrar*/
const boton7 = document.getElementById("back2");
boton7.addEventListener("click", () => {
    const ventana6 = document.getElementById("resultDescif");
    const ventana1 = document.getElementById("inicio");
    ventana6.classList.add("hide");//oculta el resultado descifrado
    ventana1.classList.remove("hide");//retorna a la ventana de inicio
    document.getElementById("nombre").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error").innerHTML = "";
});
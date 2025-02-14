/*Login del Usuario*/
const nombreUsuario = document.getElementById("nombre");
const password = document.getElementById("password");
const clave = "laboratoria".toUpperCase();
const boton = document.getElementById("botonPassword");
let intento = 0; //variable que representa los intentos para login
/*Display de las ventanas*/
const ventana1 = document.getElementById("inicio");
const ventana2 = document.getElementById("opciones");
const ventana3 = document.getElementById("cifMje");
const ventana4 = document.getElementById("resultCif");
const ventana5 = document.getElementById("descifMje");
const ventana6 = document.getElementById("resultDescif");
/*Evento que ejecuta el ingreso en 3 intentos*/
boton.addEventListener("click", (event) => {
    event.preventDefault()
    const nombre = nombreUsuario.value;
    const psw = password.value;
    if (psw === clave) {
        ventana1.classList.add("hide"); //se oculta la seccion de inicio
        ventana2.classList.remove("hide"); //muestro la seccion de seleccionar metodo ventana2
        document.getElementById("nombre2").innerHTML = `Hola ${nombre}!`;
        intento = 0;
    }
    else if (intento > 1) {
        document.getElementById("error").innerHTML = "Ya utilizaste todos tus intentos, en estos momentos no podrás ingresar!";
        nombreUsuario.disabled = true;
        password.disabled = true;
        boton.disabled = true;
    }
    else {
        document.getElementById("error").innerHTML = "Contraseña Incorrecta! Recuerda colocar la clave en mayúscula, al 3er intento fallido, ya no podrás ingresar";
        intento++;
    }
});
/*Acceder al metodo de cifrado ventana 3 cuando el usuario escoge DarConsejo*/
const boton2 = document.getElementById("darConsejo");
boton2.addEventListener("click", () => {
    ventana2.classList.add("hide"); //oculto la seccion de opciones ventana2
    ventana3.classList.remove("hide"); //muestro la seccion de cifrado
});
/*Acceder al metodo de descifrado ventana 5*/
const boton3 = document.getElementById("descifrarSecreto");
boton3.addEventListener("click", () => {
    const nombre1 = nombreUsuario.value;
    ventana2.classList.add("hide"); // oculta la seccion de opciones
    ventana5.classList.remove("hide");//cuando el usuario selecciona descifrar
    document.getElementById("nombre3").innerHTML = `${nombre1}!`;
});
/*Ejecuta el metodo cifrado ventana 3 y accede al consejo cifrado ventana 4*/
const boton4 = document.getElementById("botonConsejo");
boton4.addEventListener("click", () => {
    const nombre2 = nombreUsuario.value;
    /*Captura el valor de offset y el mje ingresado por el usuario*/
    let offset = document.getElementById("claveCif").value;
    let string = document.getElementById("txtCif").value;
   /*Aviso al usuario para que rellene los campos y no pueda avanzar*/
    if (string === "" || offset === ""){
        document.getElementById("claveCif").focus();
        document.getElementById("txtCif").focus();
        document.getElementById("required").innerHTML = "Debes completar los campos"
    }
    else {
    const mjeCifrado = document.getElementById("mjeCifrado");  
    ventana3.classList.add("hide");//oculta la opcion de cifrado
    ventana4.classList.remove("hide");//muestra el resultado de cifrado  
    mjeCifrado.innerHTML = cipher.encode(offset, string);//Ejecuta el metodo de cifrado
    document.getElementById("nombre4").innerHTML = `Genial ${nombre2}!`;
    document.getElementById("required").innerHTML = "";//Resetea el aviso
    }
});
/*Para retornar al pagina de Inicio luego de codificar*/
const boton5 = document.getElementById("back1");
boton5.addEventListener("click", () => {
    ventana4.classList.add("hide");//oculta los resultados
    ventana1.classList.remove("hide");//muestra la pantalla de inicio
/*Borra la informacion cuando regresa al inicio*/
    document.getElementById("nombre").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("claveCif").value = "";
    document.getElementById("txtCif").value = "";
});
/*Ejecuta el metodo descifrado ventana 5 y accede al resultado del descifrado del secreto ventana 6*/
const boton6 = document.getElementById("botonSecreto");
boton6.addEventListener("click", () => {
    /*Captura el valor de offset y el mje ingresado por el usuario*/
    const offset1 = document.getElementById("claveDescif").value;
    const string1 = document.getElementById("txtDescif").value;
    /*Aviso al usuario para que rellene los campos y no pueda avanzar*/
    if (string1 === "" || offset1 === "") {
        document.getElementById("claveDescif").focus();
        document.getElementById("txtDescif").focus();
        document.getElementById("required1").innerHTML = "Debes completar los campos"
    }
    else { 
    const mjeDescifrado = document.getElementById("mjeDescifrado");
    mjeDescifrado.innerHTML = cipher.decode(offset1, string1);//Ejecuta el metodo de descifrado
    ventana5.classList.add("hide");//luego de ejecutar el descifrado
    ventana6.classList.remove("hide");//muestra el resultado de descifrar
    document.getElementById("required1").innerHTML = "";//Resetea el aviso
    }
});
/*Para retornar al pagina de Inicio luego de descifrar*/
const boton7 = document.getElementById("back2");
boton7.addEventListener("click", () => {
    ventana6.classList.add("hide");//oculta el resultado descifrado
    ventana1.classList.remove("hide");//retorna a la ventana de inicio
    /*Borra la informacion cuando regresa al inicio*/
    document.getElementById("nombre").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("claveDescif").value = "";
    document.getElementById("txtDescif").value = "";
});
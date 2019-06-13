/* Acá va tu código de cifrado */
window.cipher = {
  encode: (offset, string) => {
    let mensajeCifrado = "";
    let position = 0; //ubicacion de cada letra
    // Para recorrer cada letra del txt ingresado
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        position = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      }
    else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i)<=122){
        position = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
      }
    else {
        position = string.charCodeAt(i);
      }
     mensajeCifrado += String.fromCharCode(position);
    }
    return mensajeCifrado;
  },
  /*Aca va tu codigo de descifrado*/
  decode: (offset1, string1) => {
    let mensajeDescifrado = "";
    let position1 = 0;
    for (let i = 0; i < string1.length; i++) {
if (string1.charCodeAt(i) >= 65 && string1.charCodeAt(i) <= 90) {
  position1 = (string1.charCodeAt(i) - 90 - parseInt(offset1)) % 26 + 90;
}
else if (string1.charCodeAt(i) >= 97 && string1.charCodeAt(i)<=122) {
  position1 = (string1.charCodeAt(i) - 122 - parseInt(offset1)) % 26 + 122;
}
else {
  position1 = string1.charCodeAt(i);
}
 mensajeDescifrado += String.fromCharCode(position1);
    }
     return mensajeDescifrado;
    }
};
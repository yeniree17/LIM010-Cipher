/* Acá va tu código de cifrado */
window.cipher = {
  encode: (offset, string) => {
    let mensajeCifrado = "";//resultado del cifrado
    let positionLetra = 0; //letra que sera cifrada
    // Para recorrer cada letra del texto ingresado
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        positionLetra = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65; //Cifrado para mayuscula con offset positivo
      }
      else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        positionLetra = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;//Cifrado para minuscula con offset positivo
      }
      else {
        positionLetra = string.charCodeAt(i);//Para otros caracteres
      }
      mensajeCifrado += String.fromCharCode(positionLetra);//Para concatenar las letras que contiene el mje cifrado
    }
    return mensajeCifrado;// devuelve el valor de la variable
  },
  /*Aca va tu codigo de descifrado*/
  decode: (offset1, string1) => {
    let mensajeDescifrado = "";//resultado del descifrado
    let positionLetra1 = 0;//letra que sera descifrada
    //para recorrer cada letra del txt a descifrar
    for (let i = 0; i < string1.length; i++) {
      if (string1.charCodeAt(i) >= 65 && string1.charCodeAt(i) <= 90) {
        positionLetra1 = (string1.charCodeAt(i) - 90 - parseInt(offset1)) % 26 + 90; // Descifrado para mayuscula con offset positivo
      }
      else if (string1.charCodeAt(i) >= 97 && string1.charCodeAt(i) <= 122) {
        positionLetra1 = (string1.charCodeAt(i) - 122 - parseInt(offset1)) % 26 + 122; // Descifrado para minuscula con offset positivo
      }
      else {
        positionLetra1 = string1.charCodeAt(i);//Descifrado para otros caracteres
      }
      mensajeDescifrado += String.fromCharCode(positionLetra1);//Para concatenar las letras que contiene el mje descifrado
    }
    return mensajeDescifrado;// devuelve el valor de la variable
  }
};
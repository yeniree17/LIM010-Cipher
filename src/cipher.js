/* Acá va tu código de cifrado */
window.cipher = {
  encode: (offset, string) => {
    let mensajeCifrado = " ";
    let position = 0;
    for (let i = 0; i < string.length; i++) {
      if (string.charCodeAt(i) === 32) {
        position = string.charCodeAt(i);
      }
      else {
        position = (string.toUpperCase().charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
      }
      let mensajeCode = String.fromCharCode(position);
      mensajeCifrado += mensajeCode;
    }
    return mensajeCifrado;
  },
  /*Aca va tu codigo de descifrado*/
  decode: (offset1, string1) => {
    let mensajeDescifrado = " ";
    let position1 = 0;
    for (let i = 0; i < string1.length; i++){
      if (string1.charCodeAt(i) === 32){
position1 = string1.charCodeAt(i);
      }
    else {
      position1= (string1.toUpperCase().charCodeAt(i)- 90 - parseInt(offset1)) % 26 + 90;
    }
  let mensajeDecode = String.fromCharCode(position1);
    mensajeDescifrado += mensajeDecode;
    } 
    return mensajeDescifrado;
    }
};
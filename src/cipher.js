/* Acá va tu código que cifra
const offset= document.getElementById('claveCif').value;
const string= document.getElementById('textCif').value;*/
window.cipher = {
  encode: (offset, string) => {
  let resulCif = '';
    for(let i=0; i<string.length; i++) { 
    let asciiNum= (i.charCodeAt(0)-65 + offset) % 26 + 65;
      if (asciiNum>=65 && asciiNum<=90){
        resulCif += String.fromCharCode(asciiNum)
      }
      else{
        asciiNum=i.charCodeAt(0);
      }
     return resulCif;
    }

  },
  

   /* Acá va tu código que descifra}*/

/*const offset= document.getElementById('claveDescif');
const string= document.getElementById('')*/

  decode: (offset, string) => {
  let resulDescif = '';
    for(let i=0; i<string.length; i++)
    let asciiNum= (i.charCodeAt(0)-90 - offset) % 26 + 90;
      if (asciiNum>=65 && asciiNum<=90){
        resulDescif += string.fromCharCode(asciiNum)
      } 
    } return resulDesCif;

},
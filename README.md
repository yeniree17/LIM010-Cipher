
# Proyecto N° 1: Cifrado Cesar
# Nombre: La Pachamama te aconseja 

## Indice
- [Resumen](#Resumen)
- [Imagen Final del Proyecto](#imagen-final-del-proyecto) 
- [Investigación UX](#investigación-UX)
- [Primer prototipo en papel](#primer-prototipo-en-papel)
- [Feedback](#feedback)
- [Imagen del prototipo final en Balsamiq](#imagen-del-prototipo-final-en-balsamiq)


## Resumen
- - -

Es una campaña de difusión de buenas prácticas ambientales, que le permitirá al usuario reflexionar y tomar conciencia de cómo sus actividades diarias pueden afectar el equilibrio de la Tierra. La problemática que se quiere solucionar es el uso irracional de los recursos naturales provenientes de las actividades humanas (antrópicas) que afectan significativamente el medio ambiente.

## Imagen Final del Proyecto
---

![image](https://user-images.githubusercontent.com/50186958/59644378-4b589680-9132-11e9-983b-f2a7470f3aad.png)

## Investigación UX 
---
Esta aplicación Web tendrá dos tipos de usuarios, el primero comparte un consejo (buena práctica ambiental). Mientras que el segundo usuario, es el receptor de ese consejo compartido como un secreto del primer usuario; y junto con un código clave, le permitirá descifrar el mensaje compartido. Los objetivos de este producto son:

- Sensibilizar a los usuarios en el impacto de sus actividades diarias sobre el medio ambiente.
- Difundir buenas prácticas ambientales que contribuyan con la Educación Ambiental e influyan positivamente en el estilo de vida de los usuarios.

El producto actúa como una campaña de difusión de buenas prácticas ambientales de una manera divertida para que los usuarios reflexionen sobre la problemática actual en el uso irracional de los recursos naturales que afectan significativamente el medio ambiente. Se espera que los usuarios adopten las buenas prácticas ambientales compartidas en esta aplicación web para mejorar su estilo de vida, contribuyendo al desarrollo sostenible y al uso racional de los recursos naturales.

## Primer prototipo en papel
---

- El usuario debe ingresar su nombre y la contraseña LABORATORIA que le fue suministrada previamente y dar _click_ en el botón **Ingresar**.

- Si ingresa una contraseña incorrecta, se muestra un mensaje de error, recordando al usuario que tiene sólo 3 intentos. El usuario tiene que dar _click_ en **Intenta de nuevo**.

- Luego, de 3 intentos fallidos la página le indica que ya no podrá ingresar, y tendrá que dar _click_ en **Volver al inicio.**

- Si ingresa correctamente la contraseña, la aplicación le indica que escoja la opción de su preferencia: **Regalar un consejo** _(cifrar)_ o **Descifrar un secreto** _(descifrar)_. 

![image](https://user-images.githubusercontent.com/50186958/59278055-ed561b80-8c26-11e9-8133-9d51660da5f2.png)

- Si el usuario escogió la opción Regalar un consejo, le aparecerá en pantalla las instrucciones a seguir, antes de escribir el mensaje tiene que crear un **código clave** que corresponde al _desplazamiento offset_ para ejecutar el cifrado por sustitución para luego dar _click_ a **Enviar**.

- Le aparecerá un mensaje que está procesando la información y luego le aparece el consejo codificado. En esta parte se le debe indicar que comparta el mensaje cifrado junto con el código clave.Dar _click_ en **Volver al Inicio** para regresar a la página de Ingreso a la aplicación

- En cambio, si el usuario escoge la opción descifrar el secreto, se le despliega la siguiente vista, con un mensaje y colocando el **código de clave** suministrado por el usuario que le compartió el secreto, así como el secreto codificado. Dar _Click_ en **Descifrar**.

- Una vez procesada la información, le aparece el mensaje descifrado, y recibe un mensaje de agradecimiento, así como también se le anima a compartir un consejo con otro usuario. Dar _click_ en el boton **Volver al Inicio**.

![image](https://user-images.githubusercontent.com/50186958/59278616-f2679a80-8c27-11e9-8f6c-76624860105f.png)

## Feedback
---
Se llevaron a cabo dos (2) feedback, luego de entrevistar a 4 usuarios. En el primero, se presentó el prototipo en lápiz y papel de cada una de las ventanas diseñadas para la aplicación Web. El feedback fue positivo, ya que las personas entendieron el objetivo y su funcionamiento en la primera interacción. Entre las mejoras que se definieron fueron la inclusión de un cuadro input para definir el desplazamiento “offset” por parte del usuario al momento de cifrar o descifrar el mensaje. Así mismo, se decide cambiarlo por un nombre más amigable al usuario y se define como “código clave”. Así mismo se colocó una pequeña instrucción al momento de definir este elemento, colocando que el código debe tener dos dígitos comprendidos entre 01 al 99. Por otra parte, se añadieron dos ventanas para mostrar el mensaje de error y de advertencia al usuario cuando ingresa la contraseña de forma incorrecta. Uno de los entrevistados sugiere que el texto que se muestra al final del mensaje descifrado se visualice de forma dinámica o en imagen para que se luzca más llamativo al usuario. 

El segundo feedback se realizó luego de elaborar el producto digital. Los 4 usuarios interactuaron con el producto y les gusto la visual y el tópico abordado. Recomiendan agregar un boton de volver a las opciones, en vez del inicio al terminar el cifrado/descifrado.

## Imagen del prototipo final en Balsamiq
---

![image](https://user-images.githubusercontent.com/50186958/58821308-64256000-85fa-11e9-8704-a40316843496.png)

![image](https://user-images.githubusercontent.com/50186958/58821462-b9fa0800-85fa-11e9-97ff-de26c3dbe569.png)

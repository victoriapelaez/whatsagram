
// variable booleana para controlar el fluyo de las Mayusculas que se mantienen activas hasta que clickas
let controlInfiniteMayus = false

// variable que recoge en un array todos los botones con clase letra para recoger todos los valores del teclado
let letras = document.querySelectorAll(".letra")


/* FUNCIÓN PARA ENVIAR LOS MENSAJE A SU AREA
 * Al apretar una tecla con clase letra (las recogeremos en un array que será recorrido),
 * se activará la funcion que añadirá y concatenará las letras a formar el mensaje.
 * Además condicionaremos que se escriba en mayúscula hasta que se aprete otra tecla o que se ponga en minúscula 
 * dependiendo de que clase esté activada en las mayúsculas en ese momento.*/

letras.forEach((letra) => {
  letra.onclick = function () {
    document.getElementById("recuadro-escribir").value += letra.value
    if (controlInfiniteMayus) {
      return
    }
    if (letra.classList.contains("clase-mayus")) {
      letras.forEach((letra) => {
        letra.classList.toggle("clase-mayus")
        letra.value = letra.value.toLowerCase()
      })
      return
    }
  }
})



/* FUNCIÓN PARA ENVIAR LOS MENSAJES A SU AREA 
 * Se declaran las variables para la fecha y hora de cada mensaje, actualizándose en cada click
 * Además convertimos el número del mes al nombre del mes
 * Se ha de tener en cuenta que si al escribir encuantra una salto de línea, lo sustituya por <br>
 * También convertiremos las horas y los minutos a dos cifras en el caso que la primera sea un 0.
*/

document.getElementById("enviar").onclick = function () {
  let hour = new Date()
  let date = new Date()
  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  document.getElementById("recuadro-fecha").innerHTML =
    date.getDate() + " de " + meses[date.getMonth()] + " de " + date.getFullYear()

  let saltoLinea = document.getElementById("recuadro-escribir").value.replaceAll("\n", "<br>")

  document.querySelector(".container-recuadros").innerHTML += 
    `<div class="message">
        <div class="texto-message">${saltoLinea + " "}
        </div> 
        <div class="recuadro-hora">${
          hour.getHours() + ":" + (hour.getMinutes() < 10 ? `0${hour.getMinutes()}` : hour.getMinutes())
          }
          &#x2713;  
        </div>
      </div>`
  document.getElementById("recuadro-escribir").value = ""
}

// FUNCIÓN BORRAR TODO EL MENSAJE A ENVIAR
document.getElementById("C").onclick = function () {
  document.getElementById("recuadro-escribir").value = ""
}

// FUNCIÓN BORRAR LA ÚLTIMA PALABRA
document.getElementById("CE").onclick = function () {
  let frase = document.getElementById("recuadro-escribir").value
  let ultimaPalabra = frase.lastIndexOf(" ")
  frase = frase.substring(0, ultimaPalabra)
  document.getElementById("recuadro-escribir").value = frase
}

// FUNCIÓN BORRAR LA PRIMERA LETRA
document.getElementById("→").onclick = function () {
  let recuadroInput = document.getElementById("recuadro-escribir").value
  document.getElementById("recuadro-escribir").value = recuadroInput.substring(1)
}

// FUNCIÓN BORRAR LA ÚLTIMA LETRA
document.getElementById("←").onclick = function () {
  let recuadroInput = document.getElementById("recuadro-escribir").value
  document.getElementById("recuadro-escribir").value = recuadroInput.substring( 0, recuadroInput.length - 1)
}

// FUNCIÓN SALTO DE LÍNEA
document.getElementById("↵").onclick = function () {
  let recuadroInput = document.getElementById("recuadro-escribir").value
  document.getElementById("recuadro-escribir").value = recuadroInput + "\n"
}

// FUNCIÓN MAYÚSCULA MANTENIDA DOBLE CLICK
document.getElementById("Mayus").ondblclick = function () {
  controlInfiniteMayus = true
  letras.forEach((letra) => {
    letra.value = letra.value.toUpperCase()
  })
}

/* FUNCIÓN PRIMERA LETRA MAYÚSCULA
 * En este caso hay que tener en cuenta la interferencia que había con la función anterior y es por ello, el uso del booleano
 * que controle el flujo. Al hacer un click puede ejecutar dos cosas: la primera que si estaba activada la funcion de las mayusculas
 * mantenidas, ponga las letras en minuscula y la pare. Y si no, que active que la letra se ponga en mayuscula, pero solo lo hará un vez
 */
document.getElementById("Mayus").onclick = function () {
  if (controlInfiniteMayus) {
    letras.forEach((letra) => {
      letra.value = letra.value.toLowerCase()
    })
    controlInfiniteMayus = false
  } else {
    letras.forEach((letra) => {
      letra.classList.toggle("clase-mayus")
      letra.value = letra.value.toUpperCase()
    })
  }
}

/* FUNCIÓN CAMBIO TECLADO EMOJI Y ESTILO
 * Permite al hacer click ocultar el contenedor del teclado de letras y hacer visible el contenedor del teclado de emoticonos.
 * Además cambia el icono de emoji/teclado y cambia los colores de la cabecera y el area de teclas según el teclado que esté
 */
document.getElementById("emoji").addEventListener("click", function emoji() {
  var icono = document.getElementById("emoji")
  icono.classList.toggle("icono-cara")
  if (icono.classList.contains("icono-cara")) {
    icono.setAttribute("value", "\u2328")
    document.getElementById("area-emoji").style.display = "contents"
    document.getElementById("teclado").style.display = "none"
    document.getElementById("keyboard-area").style.backgroundColor = "rgb(107, 86, 122)"
    document.getElementById("header-area").style.backgroundColor = "rgb(107, 86, 122)"
    document.getElementById("enviar").style.backgroundColor = "rgb(107, 86, 122)"
    document.getElementById("boton-micro").style.backgroundColor = "rgb(107, 86, 122)"
  } else {
    icono.setAttribute("value", "😀")
    document.getElementById("area-emoji").style.display = "none"
    document.getElementById("teclado").style.display = "contents"
    document.getElementById("keyboard-area").style.backgroundColor = "#4d7470"
    document.getElementById("header-area").style.backgroundColor = "#4d7470"
    document.getElementById("enviar").style.backgroundColor = "#4d7470"
    document.getElementById("boton-micro").style.backgroundColor = "#4d7470"
  }
})

/* FUNCIÓN MODO OSCURO
 * Esta función permite cambiar a modo oscuro y modo claro.
 * El icono bombilla cambiará de color para simular encendido o apagado y a partir de cada estado, se cambiarán
 * los colores de la aplicación de los elementos elegidos 
 */
document.getElementById("bombilla").addEventListener("click", function light() {
  let bombilla = document.getElementById("bombilla")

  bombilla.classList.toggle("bombilla-off")
  if (bombilla.classList.contains("bombilla-off")) {
    bombilla.style.filter = "grayscale(1)"
    document.getElementById("header-area").style.backgroundColor = "rgb(8, 43, 40)"
    document.getElementById("keyboard-area").style.backgroundColor = "rgb(8, 43, 40)"
    document.getElementById("space").style.backgroundColor = "#323133"
    document.getElementById("messaging-area").style.backgroundImage = "url(images/fondo_oscuro.jpg)"
    document.getElementById("recuadro-escribir").style.backgroundColor = "#09443e"
    document.getElementById("recuadro-escribir").style.color = "white"
    document.getElementById("recuadro-fecha").style.backgroundColor= "#09443e"
    document.getElementById("recuadro-fecha").style.color= "white"

    let letras = document.getElementsByClassName("letra")
    for (let i = 0; i < letras.length; i++)
      letras[i].style.backgroundColor = "#323133"

    let teclaFuncion = document.getElementsByClassName("tecla-funcion")
    for (let i = 0; i < teclaFuncion.length; i++)
      teclaFuncion[i].style.backgroundColor = "#323133"

    let recuadroEscribir = document.getElementsByClassName("message")
    for (let i = 0; i < recuadroEscribir.length; i++)
      recuadroEscribir[i].style.backgroundColor = "#09443e"
      recuadroEscribir[i].style.color = "white"

  } else {
    bombilla.style.filter = "grayscale(0)"
    document.getElementById("header-area").style.backgroundColor = "#4d7470"
    document.getElementById("keyboard-area").style.backgroundColor = "#4d7470"
    document.getElementById("space").style.backgroundColor = "rgb(107, 86, 122)"
    document.getElementById("messaging-area").style.backgroundImage = "url(images/fondo_translucido.png)"
    document.getElementById("recuadro-escribir").style.backgroundColor = "white"
    document.getElementById("recuadro-escribir").style.color = "rgb(107, 86, 122)"
    document.getElementById("recuadro-fecha").style.backgroundColor= "white"
    document.getElementById("recuadro-fecha").style.color= "rgb(107, 86, 122)"

    let letras = document.getElementsByClassName("letra")
    for (let i = 0; i < letras.length; i++)
      letras[i].style.backgroundColor = "rgb(107, 86, 122)"

    let teclaFuncion = document.getElementsByClassName("tecla-funcion")
    for (let i = 0; i < teclaFuncion.length; i++)
      teclaFuncion[i].style.backgroundColor = "rgb(107, 86, 122)"
    
    let recuadroEscribir = document.getElementsByClassName("message")
    for (let i = 0; i < recuadroEscribir.length; i++)
      recuadroEscribir[i].style.backgroundColor = "white"
    recuadroEscribir[i].style.color = "#4d7470"
  }
})


/* FUNCIONES MENSAJE DE AUDIO
 * Estas dos funciones permitn imitar la salida de audio con un audio predefinido al hacer click en el micro 
 * El audio se incrustará visualmente como un mensaje con la hora de envio y sonará*/
window.addEventListener("load", function () {
  document.getElementById("boton-micro").addEventListener("click", sonarAudio)
})

function sonarAudio() {
  let hour = new Date()
  document.querySelector(".container-recuadros").innerHTML += 
    `<div class="message">
      <div class="texto-message">
         <audio src="audio/feliz_halloween.mp3" id="audio-micro" controls></audio>
      </div> 
      <div class="recuadro-hora">${hour.getHours() + ":" + (hour.getMinutes() < 10 ? `0${hour.getMinutes()}` : hour.getMinutes())
      }
  &#x2713;
      </div>
    </div>`
  document.getElementById("audio-micro").play()
}

let controlInfiniteMayus = false;
let letras = document.querySelectorAll(".letra");

/*selecciono todas las letras que tienen la clase letra
 *recorro mi colección de letras anterior, sacando cada letra de la coleccion
 *clickar en cada una de las letras activará la funcion
 *añado en el html, en el recuadro de escritura y concateno cada letra*/

letras.forEach((letra) => {
  letra.onclick = function () {
    document.getElementById("recuadro-escribir").value += letra.value;
    if (controlInfiniteMayus) {
      return;
    }
    if (letra.classList.contains("clase-mayus")) {
      letras.forEach((letra) => {
        letra.classList.toggle("clase-mayus");
        letra.value = letra.value.toLowerCase();
      });
      return;
    }
  };
});

//funcion principal de todo lo q hara al enviar
document.getElementById("enviar").onclick = function () {
  //estas variables las pongo aqui para que a actualice la fecha y hora en cada click, poniendolo arriba solo pillaba la hora en la que caragaba la pagina
  let hour = new Date();
  let date = new Date();
  //añadir fecha y convertir numero mes en mes
  var meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  document.getElementById("recuadro-fecha").innerHTML =
    date.getDate() +
    " de " +
    meses[date.getMonth()] +
    " de " +
    date.getFullYear();

  let saltoLinea = document
    .getElementById("recuadro-escribir")
    .value.replaceAll("\n", "<br>");

  document.querySelector(
    ".container-recuadros"
  ).innerHTML += `<div class="message">
                    <div class="texto-message">${saltoLinea + " "}
                    </div> 
                    <div class="recuadro-hora">${
                      hour.getHours() +
                      ":" +
                      (hour.getMinutes() < 10
                        ? `0${hour.getMinutes()}`
                        : hour.getMinutes())
                    }
                    &#x2713;
                    </div>
                  </div>
                  `;
  document.getElementById("recuadro-escribir").value = "";
};

//funcion borrar todo
document.getElementById("C").onclick = function () {
  document.getElementById("recuadro-escribir").value = "";
};

//funcion borrar ultima palabra
document.getElementById("CE").onclick = function () {
  let frase = document.getElementById("recuadro-escribir").value;
  var ultimaPalabra = frase.lastIndexOf(" ");
  frase = frase.substring(0, ultimaPalabra);
  document.getElementById("recuadro-escribir").value = frase;
};

//funcion borrar primera letra
document.getElementById("→").onclick = function () {
  let recuadroInput = document.getElementById("recuadro-escribir").value;
  document.getElementById("recuadro-escribir").value =
    recuadroInput.substring(1);
};

//funcion borrar ultima letra
document.getElementById("←").onclick = function () {
  let recuadroInput = document.getElementById("recuadro-escribir").value;
  document.getElementById("recuadro-escribir").value = recuadroInput.substring(
    0,
    recuadroInput.length - 1
  );
};

//funcion saltos de linea
document.getElementById("↵").onclick = function () {
  let recuadroInput = document.getElementById("recuadro-escribir").value;
  document.getElementById("recuadro-escribir").value = recuadroInput + "\n";
};

//funcion mayusculas
document.getElementById("Mayus").ondblclick = function () {
  controlInfiniteMayus = true;
  letras.forEach((letra) => {
    letra.value = letra.value.toUpperCase();
  });
};

document.getElementById("Mayus").onclick = function () {
  if (controlInfiniteMayus) {
    letras.forEach((letra) => {
      letra.value = letra.value.toLowerCase();
    });
    controlInfiniteMayus = false;
  } else {
    letras.forEach((letra) => {
      letra.classList.toggle("clase-mayus");
      letra.value = letra.value.toUpperCase();
    });
  }
};

document.getElementById("emoji").addEventListener("click", function emoji() {
  var icono = document.getElementById("emoji");
  icono.classList.toggle("icono-cara");
  if (icono.classList.contains("icono-cara")) {
    icono.setAttribute("value", "\u2328");
    document.getElementById("area-emoji").style.display = "contents";
    document.getElementById("teclado").style.display = "none";
    document.getElementById("keyboard-area").style.backgroundColor =
      "rgb(107, 86, 122)";
    document.getElementById("header-area").style.backgroundColor =
      "rgb(107, 86, 122)";
    document.getElementById("enviar").style.backgroundColor =
      "rgb(107, 86, 122)";
    document.getElementById("boton-micro").style.backgroundColor =
      "rgb(107, 86, 122)";
  } else {
    icono.setAttribute("value", "😀");
    document.getElementById("area-emoji").style.display = "none";
    document.getElementById("teclado").style.display = "contents";
    document.getElementById("keyboard-area").style.backgroundColor = "#4d7470";
    document.getElementById("header-area").style.backgroundColor = "#4d7470";
    document.getElementById("enviar").style.backgroundColor = "#4d7470";
    document.getElementById("boton-micro").style.backgroundColor = "#4d7470";
  }
});

document.getElementById("bombilla").addEventListener("click", function light() {
  let bombilla = document.getElementById("bombilla");
  bombilla.classList.toggle("bombilla-off");
  if (bombilla.classList.contains("bombilla-off")) {
    bombilla.style.filter = "grayscale(1)";
    document.getElementById("header-area").style.backgroundColor =
      "rgb(8, 43, 40)";
    document.getElementById("keyboard-area").style.backgroundColor =
      "rgb(8, 43, 40)";
    document.getElementById("space").style.backgroundColor = "#323133";

    let letras = document.getElementsByClassName("letra");
    for (let i = 0; i < letras.length; i++)
      letras[i].style.backgroundColor = "#323133";

    let teclaFuncion = document.getElementsByClassName("tecla-funcion");
    for (let i = 0; i < teclaFuncion.length; i++)
      teclaFuncion[i].style.backgroundColor = "#323133";

    document.getElementById("messaging-area").style.backgroundImage =
      "url(images/fondo_oscuro.jpg)";
    document.getElementById("recuadro-escribir").style.backgroundColor =
      "#09443e";
  
    document.getElementById("recuadro-escribir").style.color = "white";

    document.getElementById("recuadro-fecha").style.backgroundColor= "#09443e"
    document.getElementById("recuadro-fecha").style.color= "white"
    let recuadroEscribir = document.getElementsByClassName("message");
    for (let i = 0; i < recuadroEscribir.length; i++)
      recuadroEscribir[i].style.backgroundColor = "#09443e";
    recuadroEscribir[i].style.color = "white"; 

  } else {
    bombilla.style.filter = "grayscale(0)";
    document.getElementById("header-area").style.backgroundColor =
      "#4d7470";
    document.getElementById("keyboard-area").style.backgroundColor =
      "#4d7470";
    document.getElementById("space").style.backgroundColor = "rgb(107, 86, 122)";

    let letras = document.getElementsByClassName("letra");
    for (let i = 0; i < letras.length; i++)
      letras[i].style.backgroundColor = "rgb(107, 86, 122)";

    let teclaFuncion = document.getElementsByClassName("tecla-funcion");
    for (let i = 0; i < teclaFuncion.length; i++)
      teclaFuncion[i].style.backgroundColor = "rgb(107, 86, 122)";

    document.getElementById("messaging-area").style.backgroundImage =
      "url(images/fondo_translucido.png)";
    document.getElementById("recuadro-escribir").style.backgroundColor =
      "white";
      
    document.getElementById("recuadro-escribir").style.color = "rgb(107, 86, 122)";

    document.getElementById("recuadro-fecha").style.backgroundColor= "white"
    document.getElementById("recuadro-fecha").style.color= "rgb(107, 86, 122)"
    let recuadroEscribir = document.getElementsByClassName("message");
    for (let i = 0; i < recuadroEscribir.length; i++)
      recuadroEscribir[i].style.backgroundColor = "white";
    recuadroEscribir[i].style.color = "#4d7470";
  }
});

window.addEventListener("load", function () {
  document.getElementById("boton-micro").addEventListener("click", sonarAudio);
});
function sonarAudio() {
  //estas variables las pongo aqui para que a actualice la fecha y hora en cada click, poniendolo arriba solo pillaba la hora en la que caragaba la pagina
  let hour = new Date();
  document.querySelector(
    ".container-recuadros"
  ).innerHTML += `<div class="message">
  <div class="texto-message">
  <audio src="audio/feliz_halloween.mp3" id="audio-micro" controls></audio>
  </div> 
  <div class="recuadro-hora">${
    hour.getHours() +
    ":" +
    (hour.getMinutes() < 10 ? `0${hour.getMinutes()}` : hour.getMinutes())
  }
  &#x2713;
  </div>
</div>
`;
  document.getElementById("audio-micro").play();
}

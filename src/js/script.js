
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
  document.getElementById("recuadro-escribir").value = recuadroInput.substring(0,recuadroInput.length - 1);
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
    document.getElementById("teclado").style.display="none"
  } else {
    icono.setAttribute("value", "😀");
    document.getElementById("area-emoji").style.display = "none";
    document.getElementById("teclado").style.display="contents"
  }
  
});

window.addEventListener("load", function () {
  document.getElementById("boton-micro").addEventListener("click", sonarAudio);
});
function sonarAudio() {
  document.querySelector(".container-recuadros").innerHTML += `<div class="message">
  <div class="texto-message">
  <audio src="audio/feliz_halloween.mp3" id="audio-micro" controls></audio>
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
  document.getElementById("audio-micro").play();
}

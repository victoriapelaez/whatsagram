//window.onload = function () {

var hour = new Date();
var date = new Date();
//var contenidoInput= document.getElementById("recuadro-escribir").value;

/*selecciono todas las letras que tienen la clase letra
 *recorro mi colección de letras anterior, sacando cada letra de la coleccion
 *clickar en cada una de las letras activará la funcion
 *añado en el html, en el recuadro de escritura y concateno cada letra, además creo un texto al hacerlo*/

var letras = document.querySelectorAll(".letra");

letras.forEach((letra) => {
  letra.onclick = function () {
    document.getElementById("recuadro-escribir").value += letra.value;

    //funcion principal de todo lo q hara al enviar
    document.getElementById("enviar").onclick = function () {
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
      //creacion nodo de texto con hora

      let saltoLinea = document
        .getElementById("recuadro-escribir")
        .value.replaceAll("\n", "<br>");

      document.querySelector(
        ".container-recuadros"
      ).innerHTML += `<div class="message">
                          <div class="texto-message">${saltoLinea + " "}
                          </div> 
                          <div id="recuadro-hora">${
                          hour.getHours() +
                          ":" +
                          (hour.getMinutes() < 10
                          ? `0${hour.getMinutes()}`
                          : hour.getMinutes())
                          }
                          </div>
                      </div>
                `;
      document.getElementById("recuadro-escribir").value = "";
    };
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
    document.getElementById("recuadro-escribir").value =
      recuadroInput.substring(0, recuadroInput.length - 1);
  };

  //funcion saltos de linea
  document.getElementById("↵").onclick = function () {
    let recuadroInput = document.getElementById("recuadro-escribir").value;
    document.getElementById("recuadro-escribir").value = recuadroInput + "\n";
  };

  //funcion mayusculas
  document.getElementById("Mayus").onclick = function () {
    letras.className = "clase-mayus";
    /*let mayus = false;
      if(mayus==true){
       letras.forEach(letra) => {
      letras.style.textTransform()= "capitalize";
    } }
     let contenido= document.getElementById("recuadro-escribir").value
      let newContenido = contenido.toUpperCase()
      console.log(newContenido)
      document.getElementById("recuadro-escribir").value= newContenido  */
  };

  document.getElementById("emoji").onclick = function () {
    console.log("hola");
    let emojis = [
      "&#128512",
      "&#128514",
      "&#128517",
      "&#128519",
      "&#128520",
      "&#128521",
      "&#128525",
      "&#128526",
      "&#128545",
      "&#128564",
    ];
    console.log(emojis);
    document.getElementById("desplegable").style.display = "flex";
  };
});

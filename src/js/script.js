//window.onload = function () {

var hour = new Date();
var date = new Date();

/*selecciono todas las letras que tienen la clase letra
 *recorro mi colección de letras anterior, sacando cada letra de la coleccion
 *clickar en cada una de las letras activará la funcion
 *añado en el html, en el recuadro de escritura y concateno cada letra, además creo un texto al hacerlo*/
var letras = document.querySelectorAll(".letra"); 
var letrasFuncion = document.querySelector(".tecla-funcion");

letras.forEach((letra) => {
  letra.onclick = function () {
    var texto = (document.getElementById("recuadro-escribir").value +=
      letra.value);




//funcion de todo lo q hara al enviar
    document.getElementById("enviar").onclick = function () {
//añadir fecha y convertir numero mes en mes
      var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
      document.getElementById("recuadro-fecha").innerHTML = date.getDay() + " de " + meses[date.getMonth()] + " de " + date.getFullYear();

//creacion nodo de texto con hora
      var nodo = document.createElement("div");
      nodo.classList.add("message");
      var nodotexto = document.createTextNode(texto);
      var nodohorario = document.createTextNode(" " +hour.getHours() + ":" +(hour.getMinutes() < 10 ? `0${hour.getMinutes()}` : hour.getMinutes()));
      nodo.appendChild(nodotexto);
      nodo.appendChild(nodohorario);
      document.getElementById("recuadro").appendChild(nodo);
      document.getElementById("recuadro-escribir").value = "";
    };
  

    document.getElementById("←").onclick = function () {};
    document.getElementById("Mayus").onclick = function () {};
    document.getElementById("↵").onclick = function () {};
    document.getElementById("C").onclick = function () {
      document.getElementById("recuadro-escribir").value = ""
    };
    document.getElementById("CE").onclick = function () {};
    document.getElementById("→").onclick = function () {};
  };
});

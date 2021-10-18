//window.onload = function () {

var hour = new Date();
var date = new Date();

var letras = document.querySelectorAll(".letra"); //selecciono todas las letras que tienen la clase letra
letras.forEach((letra) => {
  //recorro mi colección de letras anterior, sacando cada letra de la coleccion
  letra.onclick = function () {
    //clickar en cada una de las letras activará la funcion
    var texto = (document.getElementById("recuadro-escribir").value +=
      letra.value);

    //añado en el html, en el recuadro de escritura y concateno cada letra, además creo un texto al hacerlo
    document.getElementById("enviar").onclick = function () {
      
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
        date.getDay() +
        " de " +
        meses[date.getMonth()] +
        " de " +
        date.getFullYear();

      var nodo = document.createElement("div");
      nodo.classList.add("message");
      var nodotexto = document.createTextNode(texto);
      var nodohorario = document.createTextNode(
        " " +
          hour.getHours() +
          ":" +
          (hour.getMinutes() < 10 ? `0${hour.getMinutes()}` : hour.getMinutes())
      );
      nodo.appendChild(nodotexto);
      nodo.appendChild(nodohorario);

      document.getElementById("recuadro").appendChild(nodo);
      document.getElementById("recuadro-escribir").value = "";
    };
  };
});

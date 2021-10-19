//window.onload = function () {

var hour = new Date();
var date = new Date();

/*selecciono todas las letras que tienen la clase letra
 *recorro mi colección de letras anterior, sacando cada letra de la coleccion
 *clickar en cada una de las letras activará la funcion
 *añado en el html, en el recuadro de escritura y concateno cada letra, además creo un texto al hacerlo*/

var letras = document.querySelectorAll(".letra"); 

letras.forEach((letra) => {
  letra.onclick = function () {
    var texto = (document.getElementById("recuadro-escribir").value +=
      letra.value);




//funcion de todo lo q hara al enviar
    document.getElementById("enviar").onclick = function() {
//añadir fecha y convertir numero mes en mes
      var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
      document.getElementById("recuadro-fecha").innerHTML = date.getDate() + " de " + meses[date.getMonth()] + " de " + date.getFullYear();

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


    //funcion borrar todo
    document.getElementById("C").onclick = function () {
      document.getElementById("recuadro-escribir").value = ""
    };
    //funcion borrar primera letra
    document.getElementById("→").onclick = function () {
      let recuadroInput= document.getElementById("recuadro-escribir").value 
       let quitarprimera=recuadroInput.substring(1)
       console.log(quitarprimera)
       //document.getElementById("recuadro-escribir").value = quitarprimera
      };
      //funcion borrar ultima letra
    document.getElementById("←").onclick = function () {//hay q meter aqui texto y poner un return?
     let recuadroInput= document.getElementById("recuadro-escribir").value 
     let quitarUltima=recuadroInput.substring(0,recuadroInput.length-1)
     console.log(quitarUltima)
     //document.getElementById("recuadro-escribir").value= quitarUltima
    };

    //funcion mayusculas
    document.getElementById("Mayus").onclick = function (texto) {



    };
    //funcion borrar ultima palabra
    document.getElementById("CE").onclick = function () {};
    let frase = document.getElementById("recuadro-escribir").value
    var ultimaPalabra = frase.lastIndexOf(" "); 
    frase = frase.substring(0, ultimaPalabra); 
    console.log(frase)
    //document.getElementById("recuadro-escribir").value = frase
  };
});

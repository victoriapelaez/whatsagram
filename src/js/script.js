//window.onload = function () {
  

  /* var letras = document.querySelectorAll(".letra");
  console.log(letras);
  letras.forEach((letra) => {
    letra.addEventListener("click", () => {
      console.log(letra.value);
      document.getElementById("recuadro-escribir").value += letra.value
    });
  }); */

  var letras = document.querySelectorAll(".letra");
  console.log(letras);
  letras.forEach((letra) => {
    letra.onclick = function () {
      console.log(letra.value);
      var texto = document.getElementById("recuadro-escribir").value += letra.value;
      console.log(texto);
      document.getElementById("enviar").onclick = function (){
        document.getElementById("messaging-area").innerHTML = texto}}})
 
    
    
  
  
  

  /* function escribirLetra(valor) {
    document.getElementById("recuadro-escribir").value += valor;
  }
  document.getElementById("a").onclick = function () {
    escribirLetra(this.id);
  };
  document.getElementById("b").onclick = function () {
    escribirLetra(this.id);
  }; */

  


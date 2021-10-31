# WHATSAGRAM

## Proyecto DIW y DWEC

**Proyecto que consiste en crear una pequeña aplicación de mensajería.**

Esta aplicación, creada con javascript en un entorno cliente, está inspirada en whassap, con la diferencia de que no permite la comunicación con un externo aún.
Entre todas su funciones, permite escribir palabras y emoticonos, y puedes jugar con las teclas función para borrar primera o última letra, palabras, crear saltos de línea y mayúsculas. Además, he querido jugar con distintos colores y al activar el teclado emoji, la cabecera y el area de los botones cambia de color.
También he querido recrear el modo claro y oscuro.
Como sorpresa final, un pequeño audio incrustado al apretar el micro, para simular el envio de un mensaje de voz!

### TODO

- [x] Mardown
- [x] Crear base HTML
- [x] Ordenar teclado _qwerty_
- [x] Js para escribir letra
- [x] Js para escribir mensaje enviado
- [x] Espacio
- [x] Función C -> Borrar texto, CE -> Borrar última palabra
- [x] Funciones borrar primer y última letra
- [x] Función Majúsculas
- [x] Hacer Mayuscula con un click y dos clicks
- [x] Función espacio
- [x] Función salto de línea
- [x] CSS _flexbox_(keyboard) y _grid_(layout), Responsive-centrado
- [x] CSS Colores
- [x] CSS Botones, forma y tamaño, efectos
- [x] Importar letra
- [x] Iconos
- [x] Teclado emoticonos
- [x] Añadir fecha del dia y hora al enviar mensaje
- [x] Añadir audio boton micro
- [x] Conseguir audio salga como mensaje
- [x] Conectar proyecto en Netlify
- [x] Mejora estilo scroll
- [x] Completar teclado emoji
- [x] Comentar codigo
- [x] Revisar y refactorizar
- [x] Problema los emojis dejaron de pintarse
- [x] hacer la release y poner en git enlace web
- [x] cambiar estilo a algo mas colorido que me defina más
- [x] funcion modo dia/noche

#### Pequeños bugs no resueltos

- El modo noche cambia el color de fondo de los mensajes ya escritos, pero si se genera uno nueva, el color de fondo pertenece al modo claro inicial
- Intente crear una variable global para recoger el texto a enviar ya que se iba a usar en muchas funciones pero al hacerlo, el programa no funcionaba. Entiendo que es porque al final se sustituye, pero no conseguí refactorizar el código para no tener que repetir tanto algunas cosas.
- Tuve problemas con el alto de la página, así que tuve que crear el css desde cero. Aún así no ha quedado 100% perfecto a mi parecer.
- Una vez solucioné lo de los tamaños de la página, vi que al usar el enlace de netlify en mi móvil, no se veía bien, así que lo solucioné cambiando el mínimo de ancho de la media query. Con 900 consigo que se vea bien tanto en pc, como en el samsung galaxy s5, como en cualquier móvil.

##### Herramientas usadas externas

[https://markdown.es/sintaxis-markdown/]

[https://www.javatpoint.com/javascript-onclick-event]

[https://lenguajecss.com/css/maquetacion-y-colocacion/flexbox/]

[https://css-tricks.com/snippets/css/complete-guide-grid/]

[https://lemoncode.net/lemoncode-blog/2017/9/5/introduccion-programacion-funcional-javascript]

[https://www.digitalocean.com/community/tutorials/como-modificar-atributos-clases-y-estilos-en-el-dom-es]

[https://www.w3schools.com/charsets/ref_emoji.asp]

[https://www.peko-step.com/es/tool/alphachannel.html]

[https://www.it-swarm-es.com/es/css/css-para-evitar-que-el-elemento-hijo-herede-los-estilos-principales/971827137/]

[https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity]

[https://www.campusmvp.es/recursos/post/como-personalizar-los-estilos-css-de-las-barras-de-scroll.aspx]

[https://donnierock.com/2019/02/06/javascript-funciones-queryselector-y-queryselectorall/]

[https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/]
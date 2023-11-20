**Modulo 3**

**MÓDULO SOBRE DOM E INTERACCIÓN CON EL DOM**
 
Preguntas teóricas 
 
1. ¿Qué es el DOM (Modelo de Objeto de Documento) en el contexto de la programación web? 
***El modelo de objetos (DOM) es una interfaz de programacion para los documentos HTML. El DOM fue diselada para ser independiente de cualquier lenguaje de programacion***
la forma de acceder al DOM es a traves de un objeto llamado document. Lista de apis utilizando el DOM 
 document.getElementById()
 document.createElement(name)
 element.innerHTML
 element.addEventListener

2. ¿Cuál es la diferencia entre el DOM y el HTML en una página web? 
***Una pagina con HTML, es un modelo estatico, si se agrega javascript se pueden crear pag dinamicas . El DOM es una estructura de arbl, mediante la cual se puede acceder a ella y modificar los elementos del HTML desde javasvript***

3. ¿Porqué es importante entender y manipular el DOM en el desarrollo web Frontend? 
***Incluir el DOM atumatiza las tareas, indicar caundo un ususario haga determinadas acciones, ejm: pulsar un botton, click parte de un documento, escribir texto, crear listas***

4. ¿Qué son los eventos del DOM y cuál es su función en una página web? 
***Los eventos DOM son notificaciones que ocurren cuando el usuario navega por la pagina. EJ: Click en cualquier apartado de la pag, Reproduccion de un archivo, scroll sobre un elemento de la pag,entre otros***

5. Proporcionar ejemplos de eventos prácticos y comunes, como “click”, “submit” y “load o 
DOMContentLoad”. 
***onclick: click sobre un elemento ejm: Una pagina con un diseño carrusel de img, cuando se le de a la flecha para que cambie de img.Formulario con caracteristicas como nombre, apellido, correo y el boton enviar, con el evento onsubmit se asigna unas carcateristicas a cumplir y si no se cumplen no permite enviar el formulario***

6. ¿Por  qué  es  importante  manejar  eventos  en  la  interacción  usuario-web  y  cómo  se añaden controladores de eventos a los elementos del DOM? 
***Porque permiten que las pag sean interactivas y respondan a las dinamicas de las acciones que realice el usuario.***

7. Describir al menos tres métodos para seleccionar elementos del DOM en JavaScript. 
***Los siguientes metodos periten realizar busquedas de elementos en el documento dependiendo de los aributos id, class, name***
.getElementById(id)
.GetElemetsByName(name)
.querySelector(set)

8. ¿Cómo se crea un nuevo elemento HTML y se agrega al DOM utilizando JavaScript? 
se crea un documento index.html, dentro de ese documento se crea una estructura base y posterior a eso, se crea la etiqueta div
<div id="pepito" Se creo el documento HTML></div>
Luego se crea un documento javascript.jsm en el cual se hace el llamado 
function addElement(){
    const ensayoDiv = document.getElementById("pepito");
    document.body.insertBefore(ensayoDiv);
}

9. ¿Cuál es la importancia de la manipulación del DOM en la creación de aplicaciones web dinámicas e interactivas? 
***Es importante porque nos perdmite el acceso a elementos de una pag en js y tambien permite la manipulacion del mismo. Con el DOM se puede crear animaciones, cambiar informacion, reaccionar a los eventos.***

10. Explicar brevemente los conceptos “event bubbling” y “event delegation” en el contexto de eventos del DOM. 
***El evento bubbling, sucede cuando un elemento recibe un evento y se trasmite a los demas elementos, ejm: se crea una etiqueta button que es a la cual se le da el event click, este evento rebota a las etiqetas anteriores del button, span, div, y el body que es el elemento raiz.Cuando se hace clic al boton, se hace clic a las siguientes etiquetas porque son ancestros del boton***
El event delegation se asigna cuando hay varios elementos manejados de manera similar, asignar un unico evento.

11. ¿Por  qué  son  relevantes  los  conceptos  “event  bubbling”  y  “event  delegation”  en  la gestión de eventos en páginas web con múltiples elementos interactivos?
***Porque permiten la optmizacion de eventos y mejoran la eficiencia del codigo.***


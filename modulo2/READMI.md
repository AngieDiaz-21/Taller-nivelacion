**Modulo 2**

**MÓDULO SOBRE HTML, CSS Y RESPONSIVE DESIGN**
 
Preguntas teóricas 
 
1. ¿Qué significa HTML y cuál es su función en el desarrollo web? 
***Es un cdigo que se utiliza para estructurar y deplegar una pegina web y su conteido***

2. ¿Cuál  es  la  estructura básica  de  un  documento  HTML?  Describir  las etiquetas 
esenciales. 
***La estructura basica de un HTML se compone de etiquetas que sirven para diferenciar los elementos dentro de una pg web, la esructura basica es html, head,body pero permite agrupar elementos como img, texto, videos, tablas. Las etiquetas son: header, title, body, section, article,h1, footer,nav, entre otros.***

3. ¿Qué es CSS y cuál es su propósito en el desarrollo web? 
***CSS es una coleccion de reglas que afectan a la apariencia de un documento, su principal proposito es graegar color, tipo de fuente, bordes, diseño de la pagina y cada componente***

4. ¿Qué son selectores CSS, cuáles son los principales tipos de selectores y porqué es importante entender la especificidad en el contexto de las hojas de estilo en cascada (CSS)? Describir al menos tres tipos de selectores CSS y cómo la especificidad afecta a  la  aplicación  de  estilos  en  un  proyecto  de  desarrollo  webFrontend.  Proporcionar  ejemplos de situaciones en las que se utiliza la especificidad de selectores para resolver conflictos de estilos.
***Los selectores son los que definen sore que elemtos de aplicara las reglas establecidas en CSS, los selectores basicos son: selectores de tipo: aquellos que coinciden con el nombre del elemneto especificado, ejm: h1, main, footer. Selector de clase: Son los que contienen el tributo class. Selector ID: Son los que tienen el atributo id***

5. Explicar las diferencias entre los estilos en línea (inline), estilos internos (embedded) y estilos externos (external) en CSS.  Indicar cuál de los tres estilos es el recomendado usar y por qué. 
***CSS se encarga de la apariencia de las pag web***
Interno: Requiere que se adaña la equiqueta <style> en la seccion <head> en el documento HTML
Externo: ENtrelaza la pagina web a un archivo.css externo, en la seccion <head> se añade una referencia del archivo.css
Inline: Se utiliza para dar estilo, solo se tendra qie añadir un atributo style a cad etiqueta HTML. Ejm: <h1 style="color:;padding:px;">Hola mundo hermoso</h1>
***El recomendado para usar es el externo, ya que se tendra una estructura mas limpia y ordenada***

6. ¿Qué es flexbox y cómo se utiliza para el diseño de páginas web? 
***Flexbos es un metodo el cual aplica un diseño de pagina para organizar o agrupat elementos en filas o columnas ***

7. Explicar  cómo  se  emplean  las  propiedades  flexbox  y  explicar  la  función  de  las principales propiedades en la creación de diseños flexibles.
***El modulo flexible cuanta con dos ejes, el eje principal y el eje cruzado. El eje principal esta definifo por flex-direction y cuanta con cuatro valores: row o row reverse (correra a lo largo de la fila) y el colum o column-reverse (corre desde el borde superior de la pag hasta el fin, segun direccion del bloque).***
Ej eje principal: main axis-flex-direction:row
***El eje cruzado va perpendicular al eje prinncipal, si es row o row-reverse el eje ira por las columnas, y si es column o colum-reverse el eje corre a lo largo de las filas. Ambis usan el flex-direction.***
EJ eje cruzado: Cross axis - flex-direction:row

8. ¿Qué es CSS Grid Layout y en qué se diferencia de flexbox? 
***Flexbox fue creado para diseños de una dimension ya sea en una fila o columna. En cambio, Grid se penso para varias filas y columnas al mismo tiempo*** 

9. Proporcionar un ejemplo de cómo crear una cuadrícula sencilla con CSS Grid.
***En el siguiente ejemplo se construye un diseño usando GRID. se organiza en tres columnas con el mismo tamaño***
<div class ="column"> 
<div> One </div>
<div> Two </div>
<div> Three </div>
stilos css
.column{
    display:grid;
    grid-template-columns: repeat (3, 1fr);
}

10. ¿Qué significa el diseño responsivo en el contexto del desarrollo web? 
***Desarrollo de la pagina web que permite la optica visual en distitos tipos de tamaño de los dispositivos***

11. Enumerar al  menos  tres técnicas o estrategias utilizadas  para lograr el diseño  responsivo en una página web
***Media Queries: parte de CSS que permite adptar el contenido a diferentes factores como el tamaño de pantalla o la resolucion***
***Flexbox: Proporciona una manera de diseñar, alinear y distribuir espacio entre los items de un contenedor  (1. display: flex, 2. flex-wrap:wrap)***
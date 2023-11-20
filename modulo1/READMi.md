**MODULO 1**
*** MÓDULO  SOBRE  LÓGICA,  LÓGICA  DE  PROGRAMACIÓN  Y  PROGRAMACIÓN CON JAVASCRIPT**

*** Preguntas teóricas**
 
1. ¿Qué es la lógica en el contexto de la programación? Y explicar por qué es importante en el desarrollo web Frontend. 
***La lógica es la capacidad de darle solución a un problema, es importante porque con la lógica se aborda los problemas de forma efectiva y eficiente***

2. Definir  el  concepto  de  “algoritmo”  y  proporcionar  un  ejemplo  sencillo  de  un  algoritmo relacionado con la lógica de programación. 
***Un algoritmo es una secuencia de pasos que permiten dar la solución a un problema. Ejm: Calcular la suma de unos valores***

3. ¿Qué  son  estructuras  de  control  en  la  programación?,  ¿Cuáles  son  los  tipos  de estructuras de control y las estructuras más comunes de cada tipo?, Describir al menos dos  tipos  de  estructura  de  control,  explicar  por  qué  son  importantes  y  proporcionar ejemplos de cada uno de cómo se utilizan en el desarrollo web Frontend. 
***Son un conjunto de reglas que permiten controlar el flujo de ejecuciones de las instrucciones de un algoritmo. Se clasifican en secuenciales, condicionales e iterativas.***
                      **Estructuras de control**
***Estructura de control secuenciales: Metodolodia que esta compuesta por un numero definido de acciones que se ubican en un orden especifico y de forma secuencial. Ejm: Hacer la interfaz de un proyecto***

***Estructura de control condicionales: Permiten decidir que ejecutar y que no en un proyecto. las estructura condicional mas comun es la declaracion if-else, permite tomar decisiones basando el resultado del condicional. Ejm: Rendimiento educativo (si un estudiante aprueba pasa, si no pierde la materia)***

4. Describir  cómo  se  declaraban  variables  y  constantes  en  JavaScript  antes  de  la  introducción  de  ECMAScript  6  (ES6).  Explicar  cómo  ES6  mejoró  la  declaración  de  variables  y  constantes,  y  mencionar  los  problemas  que  esta  mejora  resuelve  en  el  desarrollo web Frontend. 
***Antes de la introduccion de ECMAScript 6, la forma de declarara variables y constantes se hacia utilizando la palabra var para declarar variables en javaScript, con ES6 se incluyeron nuevas formas de declarar las variables y constantes (let, const, arrow Functions). Las variables mencionado permiten la declarción de ambito de bloqueo, ademas el const permite la reasignación accidental de valores, la introducción de importar y exportar modulos, mejora la renderización, modulación y la organización del codigo***

5. ¿Cómo  se  declaran  las  funciones  en  JavaScript  y  cuál  es  la  diferencia  entre  una declaración  de  función,  una  expresión  de  función  y  una  función  de  flecha  (arrow function)? Proporcionar ejemplos de cada una. 
**Cómo se declaran las funciones en JavaScript**
La declaración de funciones se da a través de funciones y las expresiones de funciones

**Declaración de función**
tipo hosting-puede ser utilizada antes de la declaración en el código
function resta(a,b){
    return a-b;
}
**Expresión de función**
No hay hoisting- no puede ser referencida antes de su declración
la función se asigna a una variable, en este caso la función no tiene un nombre.
let resta= function(a,b){
    return a-b;
}
**Función flecha (arrow function)**
Sintaxis corta y concisa
let resta = (a,b) => a-b;
***Ventajas: Sintaxis corta y concisa, claridad del código, ***

6. ¿Por qué es necesario el uso de funciones en el desarrollo web Frontend? Enumerar al menos tres razones fundamentales y proporcionar ejemplos de situaciones en las que las funciones son esenciales. Además, mencionar la ventaja de las funciones flecha en el contexto de estas razones. 
***Las funciones desempeñan un papel fundamental en la creación y mantenimiento de la creación de un proyecto. RAZONES: Reutilización de código,manejo de eventos, operaciones asincronas***
***Ejemplo: Eventos (evento click-function handleClick(){})***
***Ejemplo: Validación de loggin (evento click-function validarFormulario(){})***

7. ¿Cuál es la diferencia entre parámetro y argumento? 
***Paramtro es lo que se declara, donde se recibe el valor. En cambio, el argumento es el valor que se envia a la funcion cuando se invoca***
8. Definir el concepto de Callback y proporcionar un ejemplo práctico.
***Es una funcion que pasa como argumento a otra funcion, es decir, se puede hacer el llamado de nuevo. Opera de forma sincrona***
const si = function(){
    console.log("funcion ejecutada");
};
const sl = function(callback){
    callback();
};
sl(si);

9. ¿Qué  es  el  hoisting  en  JavaScript  y  cómo  afecta  a  las  variables  y  funciones? 
Proporcionar ejemplos de hoisting en declaraciones de variables y funciones. 
*** ***
10. Definir brevemente el concepto de objeto en JavaScript y cuál es la visión general sobre 
este concepto. Indicar, también cómo se declaran estas estructuras de datos. 
***Un objeto es una entidad con propiedades y tipos. Los objetos de javaScript pueden tener propiedades que definansus caracteristicas***
11. ¿Qué son propiedades?, y ¿Cuál es la diferencia entre una propiedad y un método en un objeto? 
***una propiedad se puede explicar como una variable adjunta al objeto. Las propiedades de un objeto definen las caracteristicas del objeto***

12. Explicar las dos formas de acceder a una propiedad de objetos e indicar las situaciones en que conviene usar una manera sobre la otra.
***Se puede acceder a las propiedades mediante el udo de un valor de cadena que se almacena en una variable. Tambien se accede mediante la notaciòn del punto*** 

13. ¿Existe  alguna  forma  de  recorrer  las  propiedades  de  un  objeto?  En  caso  negativo, explicar por qué no es posible y en caso positivo proporcionar un ejemplo. Mencionar una situación en la cual sea muy útil recorrer las propiedades de un objeto. 

***Recorrer las propiedades de un objeto puede ser util para depurar o para mostrar informacion en la interfaz de usuario. Tambien se puede crear una representacion legible y adaptable, sin tener en cuenta las propiedades del objeto***

14. ¿Por qué son útiles los objetos en la programación web y qué tipos de datos pueden  almacenar? 
***Los objetivos son esenciales porque proporcionas una forma eficiente y organizada de gestionar y representar datos en la programacion web. Los tipos de datos que almacena: cadenas, numeros, arrays, datos personalizados, funciones***

15. ¿Qué es un array en JavaScript y por qué son esenciales? 
***Un array es un conjunto de datos ordenados por posiciones y toods asociados en una sola variable***
16. ¿Cómo acceder a un elemento dentro de un array? Explicar con un ejemplo. 
***Los arrays cuentan con un indice el cual indica la posicion de los elementos***´´
Let verdura = [tomate, cebolla];
const primerElemento = frutas [0];
console.log ("PRIMER ELEMENTO DEL AREGLO:" + primerElemento);

17.  Mencionar al menos tres funciones de arrays y describir su utilidad en la programación web. 
***Estas funciones son fundamentales para manipular y tranformar datos de manera eficiente, se realizan operaciones como mapear, filtrar y reducir con los datos de un app web***
***map(): Modifica cada elemento de un array sin perjudicar el array original***
***filter(): Se usa para obtener un subconjunto de elementos que cumplen ciertos criterior***
***reduce(): Realiza operaciones de reduccion***
18.  Proporcionar  un  ejemplo  de  cómo  se  utiliza  una  función  de  array  para  transformar  y filtrar datos en un array.
const numeros =[1,2,3,4,5];
const duplicados = numeros.map (numero => numero * 2);
resultado: [2,4]


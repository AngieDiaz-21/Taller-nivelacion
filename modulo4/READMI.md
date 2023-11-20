**Modulo 4**

**MÓDULO SOBRE COMUNICACIÓN CON EL SERVIDOR (STORAGE, PROMESAS,  ASINCRONÍAS Y PETICIONES HTTPS)** 
 
Preguntas teóricas 
 
1. Definir brevemente el concepto de localStorage y sessionStorage.
***Son propiedades que acceden al objet storage y tiene la funcion de almacenar datos de manera local.***
localStorage: Almacena la informacion de forma indefinida o hasta que se elimine los datos del navegador 
sessionStorage: Almecena la informacion mientras la pestaña siga abierta.
  
2. Describir las diferencias claves entre localStorage y sessionStorage. 
***La diferencia es que local guarda la informacion hasta que se decida borrarla del navegador y la de session se elimina apenas se cierre la pestaña***

3. ¿Por  qué  son  útiles  para  almacenar  datos  en  el  navegador  y  cuál  es  su  límite  de capacidad? 
***Son dos mecanismos de almacenamiento que permiten a las app almacenar informacion, en el caso de localStorage los datos almacenados se guardan despues de cerrar y volver a abrir el navegador, y los de sessiostorage se guardan de manera temporal. el limite varia segun el navegador, pero es de alrededor de 5 MB***

4. ¿Qué son las promesas en JavaScript y para qué se utilizan en el desarrollo web? 
***Son una forma de manejar operaciones asincronicas, las promesas son objetos que representan la finalizacion o flla de una operacion asincronica*** 

5. Explica  el  concepto  de  asincronía  en  programación  y  cómo  las  promesas  ayudan  a manejar operaciones asincrónicas. 
***La asincronia se refiere a la capacidad de realizar operaciones sin esperar una operacion completa, las operaciones asincronas permiten que el programa se ejecite mientras que una operacion en curso se completa en segundo plazo. Las promesas facilitan la escritura del codigo***

6. Proporciona  un  ejemplo  de  cómo  se  utiliza  una  promesa  para  realizar  una  operación asincrónica, como una solicitud de red. 


7. ¿Qué es JSON Server y cómo se utiliza en el desarrollo web? 
***JSON server es una herramienta que permite crear una API utilizando un archivo JSON. Es util para el desarrollo y prueba de un app***

8. ¿Por qué es útil simular una API REST falsa con JSON Server en el desarrollo frontend? 
***Porque permite simular un servicio backend sin tener una base real***

9. ¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().catch() y las palabras claves async/await? 
***.then() .catch(): Son los que manejan los resultados y los errores de las promesas ***
***async/await: Define una funcion asincronica, el await pausa la ejecucion de la funcion asincrona, da paso a una promesa anterior y luego reanuda la ejecucion de la funcion async ***

10. Proporciona un ejemplo de cómo configurar una API falsa con JSON Server y realizar solicitudes (GET, POST, PUT, PATCH y DELETE) a través de ella. 
1. se instala el servidor JSON
2. Se crea un archivo JSON 
3. Se inicia el servidor 
4. fetch ("url")
POST: agregar nuevo elemento 
5. fetch('url/tu_recurso', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ "campo1": 'valor1', campo2: 'valor2' }),
})
  .then(response => response.json())
  .then(data => console.log(data));
  PUT: reemplazar un elemento
6. fetch('url/tu_recurso', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ "campo1": 'nuevo_valor1', campo2: 'nuevo_valor2' }),
})
  .then(response => response.json())
  .then(data => console.log(data));
  PATCH:Actualizacion de un elemento
7. fetch('url/tu_recurso', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ "campo1": "nuevo_valor" }),
})
  .then(response => response.json())
  .then(data => console.log(data));

11. Describe  las  diferencias  entre  Fetch  y  Axios  como  métodos  para  realizar  solicitudes HTTP en JavaScript. 
***Fetch es una API moderna, mientras que Axios proporciona una interfaz mas simple***

12. ¿Por qué es importante considerar las peticiones HTTP en aplicaciones web modernas? 
***Las solicitudes HTTP es la base de comunicacion entre el cliente y el servidor, las peticiones permite enviar y recibir datos , generand la actualizacion, recuperacion de infromacion***

13. Proporciona ejemplos de cómo se utilizan Fetch y Axios para realizar solicitudes GET y POST. 

14. Explica la importancia del manejo de errores al trabajar con promesas en el desarrollo web. 
***El manejo de errores y las promesa en el desarrollo web, es esencial ya que permite la identificacion de poblemas, evitar erores que afectan la logica y el flujo de la aplicacion,el manejo adecuado de las experiencias de usuarios, solucionar las vulnerabilidades de seguridad. ***

15. Describe cómo se manejan los errores en las promesas, incluyendo el uso de catch. 
***Trabajar con promesas y el uso .catch() ayuda a mostrar, manejar errores.***

16. ¿Cuáles son las diferencias claves entre los métodos del objeto promesa .then().catch() y la estructura try/catch? 
***.then() .catch(): va de la mano con la programacion basada en promesas y es adecuado para cogido asincrono.***
***try/cache: se usa en funciones asincronas para manejar errores en codigo asincrono de manera similar al manejo errores en el codigo sincrono***

17. Proporciona un ejemplo de cómo se puede manejar un error en una promesa al realizar una solicitud de red.   
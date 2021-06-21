# Desafío Cookies, Session y Storage 1

La aplicacion tiene una lista de productos y un chat. La base de datos usada es MongoDB desde Atlas.

Al ingresar desde el login se direcciona a la pagina /index donde se puede usar la aplicación.

Los datos de sesion som grabados en la tabla "sessions" en Mongo Atlas.

La sesion dura 10 minutos y se actualiza cada vez que se hace un request, tanto cuando se refresca la pagina como cuando se agrega/actualiza/borra un producto o se agrega un mensaje.

Cree un Middleware de autorizacion que se ejectua al ingresar a /index y tambien cuando se intenta agregar/modificar/borrar un producto o agregar un mensaje. Asi si la sesion esta cerrada y se hace un refresh o se intenta modificar los datos va a aparecer un mensaje de "No autorizado" y volver al login.

En caso de haberse cerrado la sesion la pagina que muestra el mensaje de "No autorizado" espera 3 segundos y direcciona al login.

En caso de que el usuario cierre la sesion desde el boton "Desloguear" se va a una pagina de despedida y luego de 3 segundos tambien se direcciona al login.

Agregue en el chat, que en el campo nombre ya aparezca precargado el nombre ingresado desde el login.


**Formulario de Ingreso**<br />
http://localhost:8080/login

**URL auxiliar para cerrar sesiones en test**<br />
http://localhost:8080/api/auth/logout
# Mercado Libre - Challenge Front-end #

Se utilizó React para el cliente y Nodejs + Express para el servidor, utilizando `Create React App` para comenzar
el proyecto (https://github.com/facebook/create-react-app). También, se instaló `node-sass` (https://github.com/sass/node-sass)
para el manejo de Sass en los estilos.

## Setup Cliente ##

Es necesario instalar las dependencias:
```
npm install
```

Luego, para ejecutar el cliente localmente:
```
npm start
```
Por default levanta el cliente en el puerto 3000

## Setup Servidor ##

Posicionarse en la carpeta "server" y ejecutar:
```
npm init
```

Luego, para instalar Express ejecutar:
```
npm install express --save
```

Para iniciar el servidor ejecutar:
```
node app.js
```
Levanta el server en el puerto 3001 (se puede modificar en app.js)

## Cliente ##

Fue desarrollado con React, utilizando `React Router` (https://reacttraining.com/react-router/web/guides/quick-start) para
gestionar las rutas y poder navegar por las distintas vistas y `Redux` (https://es.redux.js.org/), que permite desacoplar el
estado global de la parte visual, es decir los componentes.

La vista de detalle del producto es navegable de manera independiente, es decir, se puede ingresar manualmente un ID de
producto y la vista mostrará el detalle del mismo.
El input de la caja de búsqueda guarda la búsqueda realizada y vuelve a estar vacía si se ingresa a la vista principal.

**DISCLAIMER:** En las vistas mostradas en la consigna, en el listado de productos se muestra la ubicación del vendedor, pero 
en la API que pedía construir no figuraba ese dato, por lo cual se procedió a mostrar la condición del producto (Nuevo/Usado). 
Otro detalle, es que para realizar el breadcrumb de un producto era necesario contar en la API con una clave y valor con las
categorías, por lo cual se agregó una clave similar a la que figura en el listado de productos.

## Servidor ##

Está desarrollado en Nodejs utilizando Express. Además, se utilizó `Axios`, el cual permite realizar peticiones HTTP desde Nodejs
de una manera sencilla.
Recibe la solicitud del Front-end, procesa los datos buscando en la API de Mercado Libre y genera la respuesta según lo
especificado en la consigna para devolver al Front-end.

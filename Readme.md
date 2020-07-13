[![Build Status](https://abuzzany.semaphoreci.com/badges/capculator/branches/master.svg?style=shields)](https://abuzzany.semaphoreci.com/projects/capculator)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Capculator  ⚙️🧮
Capculator es una aplicación web, cuya principal función es emular el
funcionamiento de una calculadora para realizar operaciones
aritméticas básicas tales como suma, resta, multiplicación y división.

## Pre-requisitos
Esta aplicación aunque es un sitio estático, hace uso de NodeJS para poder trabajar con los módulos de ES6, ejecutar unit tests y generar los compilados de los archivos estáticos.
 
Antes de comenzar te recomiendo que instales NodeJS en su versión v14.4.0 o superior, lo puedes hacer en la siguiente liga:

[Descarga NodeJS](https://nodejs.org/en/)	

## Instalación
>Nota: El proyecto tiene un Makefile para simplificar el uso de comando engorrosos y
repetitivos, si quieres ver la lista de comandos y su documentación solo ejecuta:

```bash
make help
```

Para instalar el proyecto solo ejecuta desde tu terminarl el 
sigiuente comando:

```bash
make setup
```

## Uso

Para que puedas probar el proyecto en tu maquina solo ejecuta el siguiente comando:

```bash
make start
```

## Demo en vivo

Si prefieres ver el proyecto en vivo sin necesidad de instalarlo lo puedes hacer
desde la siguiente liga, el sitio está hosteado en un S3 de AWS:

[Demo](https://capculator.s3-us-west-2.amazonaws.com/index.html)

## CI/CD

El pipeline de Continuous integration y Continuous delivery (CI/CD) del proyecto corre
sobre [SemaphoreCI](https://abuzzany.semaphoreci.com/branches/f6c9090a-7b57-42f6-878e-b007efde46d4). El pipeline de CI contempla 4 fases:

<ol>
<li>Install dependencies</li>
<li>Code analysis</li>
<li>Build project</li>
<li>Run tests</li>
</ol>

si el pipeline se rompe en cualquiera de estos escenarios no se podrá hacer 
deploy del sitio.

## Guía de estilo

Se siguen las guías de estilo de [Airbnb](https://github.com/airbnb/javascript), 
para cuidar y atuomatizar se hace uso de [JavaScript Standard Style
](https://standardjs.com).

## Tests

El testing se hace con [Jest](https://jestjs.io/), si quieres ejecutar la suite re prueba solo ejecuta el siguiente comando:

```bash
make test
```



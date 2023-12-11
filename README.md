<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Api de cambio de divisas.

## Installation Docker

```bash
$ docker compose up -d
```

Ejecutar seed para llenar la base de datos

```bash
$ localhost:3000/seed/data
```

Swagger 

```bash
$ http://localhost:3000/api/ 
```


## Running the app (Node.js)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Unit Test

```bash
# ExChange Controller
$ npm run test exchange

# Auth Controller
$ npm run test auth

```


# Important :

## Bugs :
Usando .env al momento de levantar el docker no conecta con la app con la base de datos.

## TODO :
Trasladar los datos en crudo a variables de entornos. 
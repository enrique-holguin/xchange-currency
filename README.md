<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Currency exchange API.

## Stack :

```
Nest.js App
MySQL Database
```

## Run with Docker

```bash
$ docker compose up -d
```

Run seed to populate the database

```bash
http://localhost:3000/seed/data
```

Swagger 

```bash
http://localhost:3000/api/ 
```

## Routes Requiring Bearer Token

### Convert Currency
Description : Perform currency exchange.

URL: POST 
```bash
http://localhost:3000/exchange
```

Body: 
```json
{
  "from": "string",
  "to": "string",
  "amount": 0
}
```

### Get List of Available Currencies

Description : Retrieve information about all available currencies.

URL: GET
```bash
http://localhost:3000/exchange/list
```


## Running the app with Node.js

### Installing dependencies
```
$ npm i
```

```bash
$ npm run start:dev
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
Using .env when starting the docker does not connect the app with the database.

## TODO :
Move raw data to environment variables.

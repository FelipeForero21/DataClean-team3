<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
<a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## File Management and Processing API

This API provides functionalities for file management and processing. Users can upload files, perform data sanitization tasks such as removing duplicates, validating formats, and sorting columns, and download the processed files in various formats. The API supports integration with cloud storage for file management and includes comprehensive logging for request tracking. Ensure you authenticate using the API key provided for secure access to the services.

## Environment Variables

Set the following environment variables in your `.env` file:

```plaintext
MONGODB_URI=mongodb+srv://elipeforero21:dJybd8CPBjePuhOF@assesment.yugiws4.mongodb.net/
API_KEY="añlsidjewefwee"

Project Structure

src
│
├── database
│   ├── database.module.ts
│   └── database.provider.ts
│
├── file
│   ├── file.controller.ts
│   ├── file.module.ts
│   ├── file.service.ts
│
├── person
│   ├── dto
│   │   └── person.dto.ts
│   ├── interfaces
│   │   └── person.interface.ts
│   ├── schemas
│   │   └── person.schema.ts
│   ├── person.controller.ts
│   ├── person.module.ts
│   └── person.service.ts
│
├── upload
│   ├── upload.controller.ts
│   ├── upload.module.ts
│
├── app.controller.ts
├── app.module.ts
└── main.ts

API Endpoints
Upload File

Method: POST
Endpoint: /file/upload
Request:
file: The file to be uploaded.
Response:
{ message: 'File processed and PDF generated', pdfPath: 'path/to/pdf' }
Get Person Data

Method: GET
Endpoint: /person
Response:
Array of Person objects.

Installation
$ npm install

Runing the app
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

Test
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

Support
Nest is an MIT-licensed open-source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please read more here.

Stay in touch
Author - Kamil Myśliwiec
Website - https://nestjs.com
Twitter - @nestframework
License
Nest is MIT licensed.

Puedes copiar y pegar este texto directamente en tu archivo `README.md` en GitHub.

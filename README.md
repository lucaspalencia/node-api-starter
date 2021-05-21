# Node API Starter

Node.js API starter using typescript implementing [SOLID](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) principles + [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

- [express](https://github.com/expressjs/express#readme) for web framework
- [body-parser](https://github.com/expressjs/body-parser#readme) for body parsing middleware
- [Helmet](https://github.com/helmetjs/helmet#readme) for help on express security
- [http-status-codes](https://github.com/prettymuchbryce/http-status-codes#readme) for HTTP status codes
- [routing-controllers](https://github.com/typestack/routing-controllers#readme) for controller classes
- [class-transformer](https://github.com/typestack/class-transformer#readme) for transform plain object to some instance of class and versa
- [class-validator](https://github.com/typestack/class-validator#readme) for use of decorator and non-decorator based validation
- [inversify](https://github.com/inversify/InversifyJS#readme) for inversion of control (IoC)
- [axios](https://github.com/axios/axios#readme) for http client
- [uuid](https://github.com/uuidjs/uuid#readme) for the creation of RFC4122 UUIDs
- [winston](https://github.com/winstonjs/winston#readme) for logging
- [cls-hooked](https://github.com/jeff-lewis/cls-hooked#readme) for local storage based on chains of Node-style callbacks instead of threads
- [reflect-metadata](https://github.com/rbuckton/reflect-metadata#readme) for decorators, custom metadata to classes, class fields, etc
- [module-alias](https://github.com/ilearnio/module-alias#readme) for create aliases of directories and register custom module paths
- [Mocha](https://github.com/mochajs/mocha#readme), [chai](https://github.com/chaijs/chai#readme) and [Sinon](https://github.com/sinonjs/sinon#readme) for tests
- [Nock](https://github.com/nock/nock#readme) for mock HTTP server on tests
- [SuperTest](https://github.com/visionmedia/supertest#readme) for integration tests
- [C8](https://github.com/bcoe/c8#readme) for code coverage
- Github Actions CI configured for running lint and tests

## Requirements

To run this project you need to have installed:

- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)
- [gnu make](https://www.gnu.org/software/make/)

## Setup

### Prepare your development environment

Create a copy `.env` file from `.env.example` and populate the variables.

Install dependencies:

```bash
make install
```

Start application:
```bash
make up
```

View logs:
```bash
make logs
```

This command will boot:
- Node API on [http://localhost:3000](http://localhost:3000) if `PORT` variable has not been set on .env file.
- If variable has been set, will boot API on `http://localhost:${PORT}`

## Commands

```bash
make install                  - install dependencies
make add lib=PACKAGE_NAME     - add dependency
make add-dev lib=PACKAGE_NAME - add dev dependency
make up                       - start app
make logs                     - view logs
make down                     - kill app
make lint                     - run lint
make test                     - run tests
make test-watch               - run tests on watch mode
make test-coverage            - run tests with coverage report on /coverage folder
make build                    - build app on /dist folder
make up-build                 - start built app
make shell                    - run app shell
```

## Coding

- [Install .editorconfig plugin on your editor](http://editorconfig.org/#download)
- [Install eslint lint plugin on your editor](https://eslint.org/docs/user-guide/integrations)

## Examples

- [To do list application with PostgreSQL](https://github.com/lucaspalencia/node-api-pg)

# [Digiproc-API]
Digiproc-API is the backend part of the Digiproc project. It defines the REST stateless API consumed by the Digiproc webapp. 

## Installation
```
npm install
```

## Starting development (livereload)
```
npm run dev
```

## Running tests
```
npm test
```

## Project structure
The project structure is the following :
* app directory: Contains the backend source code
* environments directory: Contains the .env files defining each environment variable. 
* test directory: Contains the Unit / Integration tests of the application. Its structure should mirror the app directory structure but with test files

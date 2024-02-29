# Form Input List - Study Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Description

This little registration and list-making project using a form was 
part of the first stage of my studies in Angular. I'm planning to 
beef up this project gradually, turning it into a solid learning 
experience that can help out fellow students along the way.

## Starting this Project

From website https://nodejs.org/en/download/ 
> Install Node

Terminal: 
> npm install -g @angular/cli@1.4.1 

> unzip or clone this project to a local directory  

Terminal:
> npm install

Run a local server:
> ng serve 


## Starting a Project from Scratch
## Install

Global Install:
npm install -g @angular/cli

Any version install:
npm install -g @angular/cli@1.4.1

Uninstall and Clean cash:
npm uninstall -g @angular/cli
npm cache clean

Version check:
npm list -g @angular/cli

## Starting a Project

ng new <project-name>

## Bootstrap, JQuery and Popper Install

npm i bootstrap --save
npm i jquery --save
npm i popper.js --save

Bootstrap setup:

SETUP
---

Open angular.json --> styles/scripts

"styles": [
"src/styles.css"
],

- add:

"styles": [
"src/styles.css",
"node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
"node_modules/jquery/dist/jquery.slim.min.js",
"node_modules/popper.js/dist/umd/popper.min.js",
"node_modules/bootstrap/dist/js/bootstrap.min.js"
]

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Angular further info

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

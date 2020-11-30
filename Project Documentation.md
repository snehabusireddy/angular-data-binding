# Project Documentation

This document contains sample processes followed in development of the project.

## Create a new project

Create a new Angular project using `ng new <project-name>` which creates a project structure with all required files.

## Include Bootstrap for styling

1. To install: Run `npm i bootstrap`
2. To import: Add `./node_modules/bootstrap/dist/css/bootstrap.min.css` to `styles` property in `angular.json`

## Generate a component

Generate a new component using angular-cli command `ng g c <component_name>` which creates a new component and declares it in app.module.ts.

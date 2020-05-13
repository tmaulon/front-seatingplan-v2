
# Seating Plan 

## Table of contents

- [Seating Plan](#seating-plan)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Available Scripts](#available-scripts)
    - [Run Project Reusable Components Library](#run-project-reusable-components-library)
      - [React Styleguidist : `npm run styleguidist`](#react-styleguidist--npm-run-styleguidist)
    - [Run Project](#run-project)
      - [`npm run start`](#npm-run-start)
      - [`npm run test`](#npm-run-test)
      - [`npm run build`](#npm-run-build)
      - [`npm run eject`](#npm-run-eject)
  - [Project Structure](#project-structure)



## Introduction

> This project was carried out during course at CESI Bordeaux.
> The goal was to create an application for managing employees, offices and equipment within buildings
> The back had to be done using the following stack: Java, Hibernates, Spring, Maven/Gradle.
> The front was up to the students. That's why I choose CRA with TypeScript. I use StyledComponents, framer-motion and react-flip-toolkit for styles and animations. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
> More over, I use React Styleguidist to make a reusable components library.


## Available Scripts

In the project directory, you can run:


### Run Project Reusable Components Library 

#### React Styleguidist : `npm run styleguidist`

Runs the library in the development mode.<br />
Open [http://localhost:2345](http://localhost:2345) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

See more on [React Styleguidist](https://react-styleguidist.js.org/)


### Run Project 

#### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Project Structure

```
|-- /node_modules
|-- /public
|   |-- /images
|   |-- favicon.ico
|   |-- index.html
|   |-- logo192.png
|   |-- logo512.png
|   |-- manifest.json
|   |-- robots.txt
|-- /src
|   |-- /components
|   |   |-- /building-card
|   |   |   |-- building-card.tsx
|   |   |   |-- building-card-details.tsx
|   |   |-- /building-zones
|   |   |   |-- building-zones.tsx
|   |   |   |-- building-zones-section.tsx
|   |   |   |-- zones-svg.tsx
|   |   |-- /button
|   |   |   |-- button.md
|   |   |   |-- button.tsx
|   |   |-- /container
|   |   |   |-- container.tsx
|   |   |-- /footer
|   |   |   |-- footer.tsx
|   |   |-- /form
|   |   |   |-- form.md
|   |   |   |-- form.tsx
|   |   |-- /header
|   |   |   |-- header.tsx
|   |   |-- /layout
|   |   |   |-- layout.tsx
|   |-- /content
|   |   |-- fake-buildings-data.ts
|   |-- /domain
|   |   |-- buildings.ts
|   |-- /fonts
|   |   |-- BalooDa2-Bold.ttf
|   |   |-- BalooDa2-ExtraBold.ttf
|   |   |-- BalooDa2-Medium.ttf
|   |   |-- BalooDa2-Regular.ttf
|   |   |-- BalooDa2-SemiBold.ttf
|   |   |-- OFL.txt
|   |-- /hooks
|   |   |-- useCustomFetch.tsx
|   |-- /pages
|   |   |-- building-template-page.tsx
|   |   |-- floor-template-page.tsx
|   |   |-- home-page.tsx
|   |   |-- plan-template-page.tsx
|   |-- App.css
|   |-- App.test.tsx
|   |-- App.tsx
|   |-- index.css
|   |-- index.tsx
|   |-- logo.svg
|   |-- react-app-env.d.ts
|   |-- serviceWorker.ts
|   |-- setupTeset.ts
|-- .gitignore
|-- .prettierrc
|-- package-lock.json
|-- package.json
|-- README.md
|-- styleguide.config.js
|-- tsconfig.json
|-- yarn.lock
```
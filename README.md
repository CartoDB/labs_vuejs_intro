# Vue.js Introductory Workshop

## Objective

This workshop aims to give you a first approach to [Vue.js](https://vuejs.org/) JavaScript framework.

## Prerequisites

You only need a modern browser and a HTML/JS/CSS editor is recommended. It will make your learning easier if you leverage the official [Devtools](https://github.com/vuejs/vue-devtools) package that works with Google Chrome, Mozilla Firefox or as an standalone application.

## Set up

This reposirory comes with a `node`/`yarn` configuration to help you set up a live reload web server. This is totally optional and you may want to use your own server command, your code editor own server functionality, or just open your files in your web browser.

To set up the configuration you can run:

```sh
$ yarn install
$ yarn serve
```

This will set up a web server pointing directly to the `src` folder with auto-reloading functionality.

## Content

* [`src/step_01`](src/step_01)
  * Minimal Airship + CARTO VL dashboard
  * Just with the map and some template content
* [`src/step_02`](src/step_02)
  * Add Vue.js library
  * Load a Vue app with static data
* [`src/step_03`](src/step_03)
  * Add a map center y zoom level to the Vue app
  * Load the map using that information
  * Every time the map is moved update it
  * Present that information in the dashboard
* [`src/step_04`](src/step_04)
  * Add the CARTO VL `totalCount` to the Vue app
  * Add a widget with that count
  * Conditional render a loading text until information is ready
* [`src/step_05`](src/step_05)
  * Add a method to format figures
  * Add a computed property as the division of two VL variables
* [`src/step_06`](src/step_06)
  * Add a conditional class for widgets with no data
* [`src/step_07`](src/step_07)
  * Add a table of features
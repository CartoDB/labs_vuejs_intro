# Vue.js Introductory Workshop

## Objective

This workshop aims to give you a first approach to [Vue.js](https://vuejs.org/) JavaScript framework.

## Prerequisites

You only need a modern browser and a HTML/JS/CSS editor is recommended. It will make your learning easier if you leverage the official [Devtools](https://github.com/vuejs/vue-devtools) package that works with Google Chrome, Mozilla Firefox or as an standalone application.

## Set up

This repository comes with a `node`/`yarn` configuration to help you set up a live reload web server. This is totally optional and you may want to use your own server command, your code editor own server functionality, or just open your files in your web browser.

To set up the configuration you can run:

```sh
yarn install
yarn serve
```

This will set up a web server pointing directly to the `src` folder with auto-reloading functionality.

## Sections

### [`src/step_01`](src/step_01)

* Minimal Airship + CARTO VL dashboard
* Just with the map and some template content

Just check the HTML markup for the Airship dashboard and then how we wait for the `as-responsive-content` tag to be `ready` to load the Mapbox GL map and the VL layer.

The CARTO VL layer is placed in a `.src/common/viz.js` file that will be used by all the sections. This viz loads a simple point dataset along with some variables that will be exposed incrementally.

### [`src/step_02`](src/step_02)

* Add Vue.js library
* Load a Vue app with static data
* Bind link `href` property to a JavaScript expression

On this step we add a new JS file to create the Vue app with just a single static data (`step`). This data is rendered on the HTML file, look for the `{{ step }}` template.

Additionally, aside the dashboard title we add a couple of links on the same Airship item group where the `href` property is computed dynamically based in the `step` value.

### [`src/step_03`](src/step_03)

* Add a map center y zoom level to the Vue app
* Load the map using that information
* Every time the map is moved update it
* Present that information in the dashboard

We add a few new properties to the Vue app `data` object, then a new listener to the map `moveend` event that will update them, and finally we expose that dynamic information on the Airship sidebar. Look for the new template calls and how they automatically update when you pan and zoom your map. No need to refer to the HTML markup from your JS code!

### [`src/step_04`](src/step_04)

* Add the CARTO VL `totalCount` to the Vue app
* Add a widget with that count
* Conditional render a loading text until information is ready

Let's start checking our VL layer `updated` event to reflect the new value of `totalCount` into our Vue instance. This variable then rendered in our HTML but with a new feature, we use the `v-if` template instruction to decide if we render the count or a `loading...` label while the variable is not ready. Load your map and check the HTML elements in your browser developer tools to find how Vue updates dynamically the DOM to reflect the application state.

### [`src/step_05`](src/step_05)

* Add a method to format figures
* Add a computed property as the division of two VL variables

On this section we add a new VL variable to the application and the dashboard, the sum of the population of the populated places displayed. But beyond that we leverage two more Vue features:

First we create a Vue `method` we can call from our templates to format our figures so they are nicely represented with thousand separators and a fixed number of decimals. Look for the `formatNumber` calls in the HTML and its definition at the Vue application configuration.

The second feature we display is a very interesting one. With Vue you can expose computed variables, that's data that you calculate dynamically. That data is then used on your templates and code as any other Vue data, as they are *observed* information. Check the `computed` section in the Vue application and how that `avgPop` variable is treated as the rest of the normal application data on the HTML template (methods, conditional rendering, etc).

### [`src/step_06`](src/step_06)

* Add a conditional class for widgets with no data

In the second step we did a binding between the `step` variable and the `href` property of a couple of HTML links. We can do the same with CSS classes to set up the styling of our elements based in different application conditions.

On this example we added a new `noCities` boolean computed variable and bind the class `disabled` to it. The syntax is a bit elaborated but as for now, note that you need to declare an object where the keys are the classes you want to toggle and the values are the conditions for them.

On this exercise the map is centered in Null Island and at a very low zoom level so you'll see the `disabled` class activated for the different `as-box` divs of your HTML. Zoom out and as soon as you get any populated place in your bounding box you'll see how that class disappears from your HTML. This is a powerful feature that opens many interesting UI capabilities to your applications.

Binding classes is probably the most common scenario but if you want more complex behavior and even set directly CSS styles on your templates check the [documentation](https://vuejs.org/v2/guide/class-and-style.html).

### [`src/step_07`](src/step_07)

* Add a table of features

On this section we add to the Vue application a new array variable to store the name and population of the features of the bounding box. Check the `map.js` code to see how we generate a new array using the `map` JavaScript method. We should always only extract the data we need to the Vue application instead of assigning the full VL object.

We only want to render a few cities on our dashboard so we create a new computed property called `topPlaces` that will return a sort array of the most populated places. The number of places return is driven by the application `topCitiesCount` variable.

Finally, to expose those places on our dashboard we add a new sidebar to the right with an Airship styled table. To loop over the elements of `topPlaces` and generate a new row each, we use the `v-for` Vue construct.

Move around the map and check how nicely the table is updated and you can even play on your Vue extension to change the value of `topCitiesCount` to change the number of cities displayed in your site. Cool, ugh?

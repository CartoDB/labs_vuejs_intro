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

### [`src/step_08`](src/step_08)

* Listen to mouse events
* Watch a property change

Firstly we add a couple of Airship badges to the tables widget and listen to the click event using `v-on:click` Vue construct. We can call a Vue method but on this case for simplicity we directly increase or decrease the value of `topCitiesCount` right away without having to touch any of our JavaScript files. Just look for the badges in the HTML code to find how easy this was.

The second part of this lesson introduces an interesting Vue feature: watchers. If you check the Vue application definition you'll find a new section called `watch`. We add to this section functions with the same name of a static or computed variable to *listen* for their change. Anytime a variable changes its value this function is triggered so we can add intentional side effects to changes in our application state. In this case we are setting a `zooming` variable based in the value of the previous and current zoom levels so we can have `-1`, `0` or `+1` depending if we are zooming out, panning, or zooming in. Finally we render this variable just aside the zoom level.

### [`src/step_09`](src/step_09)

* Move the formula widgets to a dedicated component

If you look at our previous HTML, the code for the formula widgets was a bit repetitive. Anytime we added a new formula we copy&pasted our HTML template and all the Vue logic. If we need to improve the styling or the behaviour we should be having quite a few places to touch and adjust. This is a perfect scenario for leveraging Vue components.

Vue components are the framework feature to make pieces of composable markup and behaviour. Check on this lesson HTML how we changed our markup to replace our code by a new HTML tag called `formula-widget`, passing to this tag the minimum information needed to render the logic:

* The title of our widget
* A binding (so it's dynamic) to our application variable
* An optional caption we will see below the title
* An optional unit to place after the value
* An optional formatter function to change the way the value is displayed.

The `formatter` parameter needs to be bind because we can only pass strings to Vue components as static data.

Now you can check the new `formula-widget.js` file and see a minimal Vue component definition. Any Vue component needs:

* A name to use as HTML tag in your template
* A template using the same HTML and Vue constructs as you've seen before
* An object with the component properties (`props`), it's optional but recommended to specify your property type and if it's required.
* Optionally you can also have `computed` and `methods` sections as a regular Vue application.

This is not an accurate list and there's much more to discover, check the [documentation](https://vuejs.org/v2/guide/components.html).

Check how the template resembles to our previous repeated code, even in this case we added a few more Airship classes to improve the widget rendering. Check also how the `formattedValue` computed variable dynamically checks for the `formatter` existence.


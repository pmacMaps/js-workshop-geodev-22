## Welcome & Introductions

#### Patrick McKinney
- GIS Administrator for Pennsylvania Department of Health
- Previously worked in county GIS, Planning, and Recreation departments
- I have built web map applications using Leaflet.js, ArcGIS API for JavaScript, and customizations of Esri COTS solutions (Web AppBuilder, Classic StoryMaps)
- Learned front-end developer skills to build interactive web maps

## Agenda
- Writing Code in Visual Studio Code
- The Webpage (HTML / CSS / JavaScript)
- Adding JavaScript to HTML File
- Variables
- Data Types
- Functions
- Conditional & Switch Statements
- Iterators
- Modules
- DOM Manipulation
- Asynchronous Data Fetching
- Building a Basic App
- ... Web Map? ...

## Writing Code in Visual Studio Code
> TODO

## The Webpage (HTML / CSS / JavaScript) | Lesson 1

#### HTML
- HyperText Markup Language
- Provides structure and content for a webpage or web app
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)

#### CSS
- Cascading Style Sheets
- Provides rules for layout and design of a webpage or web app
- Hierarchy of how rules "win out"
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

#### JavaScript
- Provides interactivity to a webpage or web app
- Can fetch data from other sources and place on page/app
- Interactive web maps use JavaScript (JS)
- The focus of this workshop
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

#### Sample Code 
> TODO

## Adding JavaScript to HTML File | Lesson 2
#### `<script>` element
- JavaScript code is written in this element
- Purpose is to embed executable code or data
- Can place directly within `html` file
- Can load from an external source (same server or different server)
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

#### `console.log()` method
- Prints a message to the web console
- Can be used during development to view state of variables and data
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/console/log)
- Related are `console.warn()` ([reference](https://developer.mozilla.org/en-US/docs/Web/API/console/warn)) and `console.error()` ([reference](https://developer.mozilla.org/en-US/docs/Web/API/console/error))

### strict mode
- Eliminates some silent errors by changing them to throw errors
- Can be set to a script or function
- Modules are automatically in strict mode
- Please review the [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) for more info

#### Production Code Concerns
- Limit the number resources (CSS files, JavaScript files, images, etc.) that are loaded
- Use minified versions of CSS and JavaScript files to reduce file size
- Lazy load images, videos, iframes, etc.
- Bundlers can help with this
- All of this is beyond today's focus, but worth looking into on your own

#### What if JavaScript is Disabled?
- `<noscript>` element displays content if JavaScript is disabled ([MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript))
- One approach is to have a `no-js` class, and then use a library like modernizr to change the class to `js` if JavaScript is enabled.  You would have CSS rules for both scenarios
- What about interactive web maps?  I would suggest having your `<noscript>` tag include a message about turning on JavaScript, and providing a link to a static version of your web maps purpose

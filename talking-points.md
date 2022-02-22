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
- DOM Manipulation
- Modules 
- Asynchronous Data Fetching
- Building an App: **Find Nearby Parks**
- Building a Web Map App

## Writing Code in Visual Studio Code
- Free text editor from Microsoft
- Contains many plugins to make writing code easier
- [Download VS Code](https://code.visualstudio.com/)

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
> [Lesson 1 Demo](https://github.com/pmacMaps/js-workshop-geodev-22/tree/main/Code/Lessons/Lesson%201)

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

#### strict mode
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

#### Sample Code 
> [Lesson 2 Demo](https://github.com/pmacMaps/js-workshop-geodev-22/tree/main/Code/Lessons/Lesson%202)

## Variables | Lesson 3
#### `const`
- Best to use when you don't want value to change
- Block-scoped
- Cannot change the value through reassignment
- Cannot re-declare variable
- Cannot declare variable without value assignment
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

#### `let`
- Best to used when you plan on the value to change
- Block-scoped
- Value can be changed through reassignment
- Can declare variable without assigning a value

#### Scope
- Refers to current context of code execution
- Context in which values and expressions can be referenced
- Global scope vs. function scope
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

#### Sample Code 
> [Lesson 3 Demo](https://github.com/pmacMaps/js-workshop-geodev-22/tree/main/Code/Lessons/Lesson%203)

## Data Types | Lesson 4

#### Boolean
- Data type that can be either `true` or `false`
- Commonly used in conditional statements and loops
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
- ["Truthy" values](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- ["Falsy" values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- example: `true` or `false`

#### Null
- the absence of any object value
- expresses a lack of identification
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
- example: `null`

#### Undefined
- the value of a variable that has not been assigned a value
- A function returns undefined if a value was not returned
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
- example: `undefined`

#### Numeric
- `Number` is a double-precision 64-bit binary format
- `BigInt` can be used for large integers
- Can perform math calculations with this data type
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- example: `25`

#### Strings
- Represents textual data
- In web maps, common data type for URLs associated with web service
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- example: `JavaScript rocks!`

#### Arrays
- list-like objects that can store data
- can iteratore over or grab data from a specific index
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- example: `[ 'Broad Street Market', '1233 N 3rd St, Harrisburg, PA 17102', 40.26956, -76.8887 ]`

#### Objects
- collections of properties
- data stored in key:value pairs
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects)
- example: `{ name: 'Broad Street Market', address: '1233 N 3rd St, Harrisburg, PA 17102', latitude: 40.26956, longitude: -76.8887 }`

#### Sample Code 
> [Lesson 4 Demo](https://github.com/pmacMaps/js-workshop-geodev-22/tree/main/Code/Lessons/Lesson%204)

## Functions | Lesson 5
- typically takes an input, performs a task, and returns an output
- a repeatable task in your app is a good candidate to become a function
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- example: `const reduceNumberDecimals = (data) => {
    return data.toFixed(2);
}`

#### Sample Code 
> [Lesson 5 Demo](https://github.com/pmacMaps/js-workshop-geodev-22/tree/main/Code/Lessons/Lesson%205)

## Conditional & Switch Statements | Lesson 6
#### Conditional Statements
- controls flow of code
- tests if a value is `true` or `false`
- **types of equality**
- - Equal (`==`)
- - - Returns true if the operands are equal
- - Strict Equal (`===`)
- - - Returns true if the operands are equal and of the same type
- - Not Equal (`!=`)
- - - Returns true if the operands are not equal
- - Strict Not Equal (`!==`)
- - - Returns true if the operands are of the same type but not equal, or are of different type
- **logical operators**
- - `&&` (AND)
- - - `expr1 && expr2`
- - - returns `true` if both operands are true; otherwise, returns `false`
- - `||` (OR)
- - - `expr1 || expr2`
- - -  returns `true` if either operand is true; if both are false, returns `false`
- - `!` (NOT)
- - - `!expr`
- - - Returns `false` if its single operand that can be converted to true; otherwise, returns `true`
-  **arithmetic operators**
- - `>` (greater than)
- - - returns true if the left operand is greater than the right operand
- - `>=` (greater than or equal to)
- - - returns true if the left operand is greater than or equal to the right operand
- - `<` (less than)
- - - returns true if the left operand is less than the right operand
- - `<=` (less than or equal to)
- - - returns true if the left operand is less than or equal to the right operand
- TODO: true/false guide in JS
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- example: `if (values >= 12) { return 'green';} else { return 'red';}`

#### Switch Statements
- matches expression to a cause clause
- can control no matching clause with `default` case
- use `break` statement within each clause to exit out of switch statement
- can be preferable to many if/else if clauses
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- example: `switch(feature.properties.Name) {
            case 'Boundary Trail':
                lineColor = 'rgb(255,170,170)';
                break;
            case "Cat's Eye Trail":
                lineColor = 'rgb(255,85,0)';
                break;
            case 'Cathedral Trail':
                lineColor = 'rgb(0,92,230)';
                break;
            default:
                lineColor = '#fff';}`              

#### Sample Code 
> [Lesson 6 Demo](https://github.com/pmacMaps/js-workshop-geodev-22/tree/main/Code/Lessons/Lesson%206)

## Iterators and Loops | Lesson 7
#### Cycling Through Data
- Can cycle through a list of data and perform some operation
- Can nest conditional statements within iterators to test for certain data values
- `Arrays` can use the `forEach` method ([documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach))
- - provides callback function once for each element in the array
- - example: `mapServices.forEach(element => element.addTo(map));` (adds layers in an array to a web map)
- `Objects` can use the `for...in` loop ([documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in))
- - iterates over enumerable properties
- - can access both keys and values
- - example: `for (const property in object) { console.log('${property}: ${object[property]}'); }` (prints key and value of object)
- `for...of` loop can be used on multiple iterable objects ([documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of))
- - example: `for (const element of features) { let newRow = table.insertRow(-1); addRow(newRow, element.attributes.MUNI); addRow(newRow, Number(element.attributes.POP_2020).toLocaleString()); }` (adds row to table using data from a feature service)

#### Other Topics
- `while` loop runs its statements as long as the condition is true
- - you can to avoid situations where the condition will always remain true (`infinite loop`)
- - [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement)
- - example: `let n = 0; let x = 0; while (n < 3) { n++; x += n; }`
- `do...while` loop is similar to `while` loop
- - BUT, the statement is executed once before the condition is checked
- - [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_statement)
- - example: `let i = 0; do { i += 1; console.log(i); } while (i < 5);`
- `break` statement terminates a loop or switch statement ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#break_statement))
- `continue` statement can be used to control flow within a loop ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#continue_statement))
- - example: `let i = 0; while (i < 4) { i++; if (i === 3) {continue} console.log(i) }`

#### Sample Code 
> TODO

## DOM Manipulation | Lesson 8
- Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document
- Document is a logical tree, with each branch ending in a node, and each node containing objects
- Nodes can have event handlers attached (i.e., when you click on a button)
- Can gain access to HTML elements by tag name, class name, id, or combination
- Can do things via JavaScript like change properties of elements, or run a function when an element is clicked
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- example: `document.getElementById('resultsContainer').style.display = 'block'` 

#### Sample Code 
> [Lesson 8 Demo](https://github.com/pmacMaps/js-workshop-geodev-22/tree/main/Code/Lessons/Lesson%208)

## Modules | Lesson 9
- Allow for JavaScript code to be distributed among various files
- Code is easier to maintain, and modules can be reused across apps
- When using modules, type script tag in html file as `<script type="module" src=""></script>`
- You can make code available in other modules by using `export` keyword
- You can use code from other modules by using `import` keyword
- [MDN Reference] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- example: `import { setInitialMapZoom } from './functions.js'; export const initZoom = setInitialMapZoom(windowWidth);`

#### Sample Code 
> [Lesson 9 Demo](https://github.com/pmacMaps/js-workshop-geodev-22/tree/main/Code/Lessons/Lesson%209)

## Asynchronous Data Fetching | Lesson 10
- Websites/apps request data from other sources
- These requests occur `asynchronous` (i.e., not sure when request will be completed)
- `Promises` represent the eventual completion (or failure) of an asynchronous operation and its resulting value
- `Promises` are a way to ensure code using requested data runs after the data is fetched
- `promise.then()` takes two arguments: 1) callback function for resolved case; 2) callback function for rejected case
- `promise.catch()` is a method for handling errors
- `Promises` can be chained together
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- example: `getCurrentPosition().then((position) => {console.log(position); }).catch((err) => { console.error(err.message); });`

#### Sample Code 
> [Lesson 10 Demo](https://github.com/pmacMaps/js-workshop-geodev-22/tree/main/Code/Lessons/Lesson%2010)

## Building an App: Find Nearby Parks
- User will enter a search distance (units are miles)
- When user clicks on the button, the following will happen:
- - `Geolocation API` will be used to get user's coordinates in latitude and longitude 
- - A geometry object using WGS 1984 will be created from user's location
- - the `Esri Rest JS` library will be used to locate Local Parks that are within the specified distance from the user (as the crow flies)
- - the returned features from the Esri REST service will be iterated over, and a table wil be generated with the attributes from the service
- It's basically spatial analysis without a map
- [Geolocatoin API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [ArcGIS Rest JS documentation](https://developers.arcgis.com/arcgis-rest-js/)
- [Project Code](https://github.com/pmacMaps/js-workshop-geodev-22/tree/main/Code/Lessons/Find%20Nearby%20Parks)
- [DCNR Local Parks Rest Service](https://www.gis.dcnr.state.pa.us/agsprod/rest/services/BRC/LocalParks/MapServer/1)

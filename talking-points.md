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
> TODO

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
> TODO

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
> TODO

## Functions | Lesson 5
- typically takes an input, performs a task, and returns an output
- a repeatable task in your app is a good candidate to become a function
- [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- example: `const reduceNumberDecimals = (data) => {
    return data.toFixed(2);
}`

#### Sample Code 
> TODO

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
> TODO

## Iterators | Lesson 7
> TODO

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
> TODO

/*
DOM is a standard of how to:
   Get HTML element
   Change HTML element
   Add HTML element
   Delete HTML element

DOM Methods
   DOM Methods - actions you can perform on HTML elements (line add or delete elements)
   DOM Properties - values of HTML elements that you can set or change

DOM Manipulations
   Ways to find a certain HTML element in the DOM
      By id - 'getElementById()',
      By tag name - 'getElementsByTagName()',
      By class name - 'getElementsByClassName()',
      By CSS selector = 'querySelector()',

   The HTML DOM allows JavaScript to change the content of HTML elements
      "innerHTML"
      "attributes"
      "setAttribute()"
      "style.property"

   We can create, append and remove HTML elements dynamically
      "removeChild()"
      "appendChild()"
      "replaceChild()"
      "document.write()"

CSS Selectors 
   They allow very fast and powerful element matching
      "#main" - return the element with ID 'main'
      "#content div" - select all <div>s inside #content
      ".note, .alert" - all elements with class "note" ot "alert"
      "input[name='login']" - <input> with name "login"

Creating a new DOM element
   Creating a new DOM element
      let p = document.createElement("p");
      let li = document.createElement("li");

   Create a copy / cloning DOM element
      let li = document.getElementById("my-list");
      let newLli = li.cloneNode(true);

      The above code creates a new elements. But these elements don't exist anywhere except as values insie variables.

Properties vs. Attributes
   Attributes are difined by HTML. Properties are defined by DOM

   Attributes initialize DOM properties
      Property values can change
      Attributes values can't
   
   The HTML attributes and the DOM property are not the same thing, even when they have the same name

DOM Properties
   "textContent" - reads and writes text
   "innerHTML" - returns and writes the HTML of a given element
   "value" - gets and sets value

HTML Attributes and Methonds
   "getAttribute()" - returns the value of attributes of specified HTML element,
   "setAttribute()" - sets the value of an attribute on the specified HTML element,
   "removeAttribute()" - removes the attributes with the specified name from an HTML element,
   "hasAttribute()" - mothod return true if the specified attribute exists, otherwise it returns false,
   "classList" - is a read - only it returns a collection of the class attributes of specified element
      classList Methods
         "add()" - Adds the specified class values "classList.add()",
         "remove()" - Remove the specified class values "classList.remove()",


*/



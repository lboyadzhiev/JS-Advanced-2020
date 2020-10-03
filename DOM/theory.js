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

      The above code creates a new elements. But these elements don't exist anywhere except as values insie variables

*/



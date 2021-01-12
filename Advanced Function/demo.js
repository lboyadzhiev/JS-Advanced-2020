"use strict"

function foo(a, b, c) {
   console.log(this, a, b, c);
}

function HRFDecorateWithParams(fn, param1, param2) {
   return fn.bind('I am this', param1, param2)
   // "bind" - позволява да зададем нов контекст на функцията и да и хардкоднем параметри
}

const myFoo = HRFDecorateWithParams(foo, 1, 2);

myFoo(3);
foo(3);

// Currying
   // Техника за декомпозиция на функции

// What is IIFE?

/*
   - Define anonymous function expression
   - Invoke it immediately after declaration
*/


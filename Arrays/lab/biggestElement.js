/*
    7. Biggest Element
Write a function that finds the biggest element inside a matrix.
The input comes as array of arrays, containing number elements (2D matrix of numbers).
The output is the return value of your function. Find the biggest element and return it
*/

function solve(input) {
   
   // return Math.max(...input.flat(1));

   return Math.max(...input.reduce((a, b) => [...a, ...b], []));

}

console.log(solve(
   [
      [20, 50, 10],
      [8, 33, 145]
   ]
))
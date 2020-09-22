/*
    5. Sum Even Numbers
Write a program which receives an array of strings, parse them to numbers and sum only the even numbers.
*/

function solve(input) {
   let even = x => x % 2 === 0;
   return input
      .map(Number)
      .filter(even)
      .reduce((a, b) => a + b, 0);
}

console.log(solve(
   ['3','5','7','9']
))
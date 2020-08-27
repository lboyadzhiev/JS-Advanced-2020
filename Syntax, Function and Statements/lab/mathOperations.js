/*
    2. Math Operations
Write a JS function that takes two numbers and a string as an input. 

The string may be one of the following: '+', '-', '*', '/', '%', '**'.  

Print on the console the result of the mathematical operation between both numbers and the operator you receive as a string.
The input comes as two numbers and a string argument passed to your function.
The output should be printed on the console.
*/

// function solve(x, y, operator) {
//    return eval(`${x}${operator}${y}`);
// }

function solve(...params) {
   let operator  = params.pop();

   return params
      .reduce (
         (a, b) => eval(`${a}${operator}${b}`),
         params.shift()
      );
}

console.log(solve(5, 6, 7, 8, '+'));
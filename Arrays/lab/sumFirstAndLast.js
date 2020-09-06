/*
    1. Sum First Last
Write a function that calculates and prints the sum of the first and the last elements in an array.
The input comes as array of string elements holding numbers.
The output is the return value of your function.
*/

function solve(input) {
   let a = Number(input[0]);
   let b = Number(input[input.length - 1]);
   sum = a + b;

   return sum;
}

    console.log(solve(['20', '30', '40']))
/*
    4. Largest Number
Write a function that takes three number arguments as an input and find the largest of them. Print the following text on the console:  'The largest number is {number}.'.
The input comes as three number arguments passed to your function.
The output should be printed to the console.
*/

function solve(...params) {
   let message = 'The largest number is'
   let maxNum = Math.max(...params);
   return `${message} ${maxNum}.`;
}

console.log(solve(5, -3, 16));
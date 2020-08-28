/*
    3. Same Numbers
Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
Print on the console true if all numbers are same and false if not. On the next line print the sum of all the digits.
The input comes as an integer number.
The output should be printed on the console.
*/

function solve(input) {
   let inputArr = input
   .toString()
   .split('')
   .map(Number);

   let result = inputArr.reduce((a, b) => a + b, 0);
   let b = inputArr.shift();
   let isEqual = (a) => a === b;

   return [inputArr.every(isEqual), result].join('\n');
}  

console.log(solve(1234))
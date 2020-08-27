/*
    3. Sum of Numbers N…M
Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
The input comes as two string elements that need to be parsed as numbers.
The output should return the sum.
*/

function solve(min, max) {
   min = Number(min);
   max = Number(max);
   let result = 0;
   for(let i = min; i <= max; i++) {
      result += i;
   }
   return result;
}  

console.log(solve('-8', '20'));
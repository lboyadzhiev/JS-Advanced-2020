/*
    2. Greatest Common Divisor - GCD
Write a function that takes two positive numbers as input and compute the greatest common divisor.	
The input comes as two positive integer numbers.
The output should be printed on the console.
*/

function solve(...params) {
   let x = Math.min(...params);
   let y = Math.max(...params);

   let result = y % x;


   while (result !== 0){
      let z = result;
      result = x % z;
      x = z;
   }
   
   return x;
}

console.log(solve(42154, 458));
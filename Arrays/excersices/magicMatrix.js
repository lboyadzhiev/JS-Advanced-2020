/*
    7. Magic Matrices
Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal. 
The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
The output is a Boolean result indicating whether the matrix is magical or not.
*/


function solve(params) {
   let sum = params[0].reduce((a, b) => a + b);
   let isMagic = true;

   for(let i = 0; i < params.length; i++) {
      let sumRows = params[i].reduce((a, b) => a + b);
      let sumCols = params.map((x) => x[i]).reduce((a, b) => a + b);
      
      if(sumRows !== sumCols || sumCols !== sum || sumRows !== sum) {
         isMagic = false;
      }
   }

   return isMagic;
}

console.log(solve(
   [
      [4, 5, 6],
      [6, 5, 4],
      [5, 5, 5]
   ]
))
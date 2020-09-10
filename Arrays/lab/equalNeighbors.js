/*
    9. Equal Neighbors
Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
The input comes as array of arrays, containing string elements (2D matrix of strings).
The output is return value of you function. Save the number of equal pairs you find and return it.
*/

function solve(input) {
   let result = 0;
   
   for(let i = 0; i < input.length - 1; i++) {
      result += intersect(input[i], input[i + 1]);
   }

   return result;

   function intersect(a, b) {
      return a.filter((element, index) => b[index] === element).length;
   }
}

console.log(
   solve([
      ['2', '3', '4', '7', '0'],
      ['4', '0', '5', '3', '4'],
      ['2', '3', '5', '4', '2'],
      ['9', '8', '7', '5', '4']
   ])
   )
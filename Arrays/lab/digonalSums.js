/*
    8. Diagonal Sums
A square matrix of numbers comes as an array of strings, each string holding numbers (space separated). Write a function that finds the sum at the main and at the secondary diagonals.
The input comes as array of arrays, containing number elements (2D matrix of numbers).
The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal, then the sum at the secondary diagonal.
*/

function solve(input) {

   return input
      .reduce(
         (result, row, i, arr) => {
            result[0] += row[i];
            result[1] += row[arr.length - 1 - i]

            return result;
         }, [0, 0]
      )
      .join(' ');

   // let first = 0;
   // let second = 0;

   // for(let row = 0; row < input.length; row++) {

   //    first += input[row][row];
   //    second += input[row][input.length - 1 -row]
   // }

   // return [first, second].join(' ');
}

console.log(solve([
   [20, 40],
   [10, 60]
]))
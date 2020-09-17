/*
    1. Print an Array with a Given Delimiter
The input comes as an array of strings. The last element of the array is the delimiter.
The output is the same array, printed on the console, each element separated from the others by the given delimiter.
*/

function solve(input) {
   let del = input.pop();

   let outputArr = input.join(del);

   return outputArr;
}

console.log(solve(
   ['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
))
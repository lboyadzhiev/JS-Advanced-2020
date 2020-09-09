/*
    3. Negative / Positive Numbers
Write a JS function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
The input comes as array of number elements.
The output is printed on the console, each element on a new line.
*/



function solve(input) {
   const map = {
      true: 'unshift',
      false: 'push'
   }
   return input
      .reduce(
         (result, x) => {
            result[
               map[x < 0]
            ](x);
            return result;
         }, []
      );
}

// function solve(input) {

//    let result = [];
//    for (let i = 0; i < input.length; i++) {
      
//       if (input[i] < 0) {
//          result.unshift(input[i]);
//       } else {
//          result.push(input[i]);
//       }
//    }
//    return result;
// }

console.log(solve([3, -2, 0, -1]));
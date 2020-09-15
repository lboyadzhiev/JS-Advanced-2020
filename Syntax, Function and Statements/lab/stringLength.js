/*
    1. String Length
Write a JS function that takes three string arguments as an input. 

Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.
The input comes as three string arguments passed to your function.
The output should be printed on the console on two lines.
*/

// function solve(x, y, z) {
//    let sum = x.length + y.length + z.length;
//    let avrg = Math.floor(sum / 3);

//    console.log(sum);
//    console.log(avrg);
// }



function solve(...params) {
   let sum = params.reduce((a, b) => a + b.length, 0);
   let avrg = Math.floor(sum / params.length);

   return [sum, avrg].join('\n')
}

console.log(solve('chocolate', 'ice cream'));
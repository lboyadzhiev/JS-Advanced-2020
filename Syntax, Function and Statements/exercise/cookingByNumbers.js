/*
    6. Cooking by Numbers
Write a program that receives a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
    • chop - divide the number by two
    • dice - square root of number
    • spice - add 1 to number
    • bake - multiply number by 3
    • fillet - subtract 20% from number
The input comes as an array of 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
The output should be printed on the console
*/

// function solve(input) {
//    let num = Number(input[0])
//    let commands = input.slice(1,);
//    let result = [];



//    commands.forEach(el => {
//       if(el === 'chop') {
//          num = num / 2;
//       } else if(el === 'dice') {
//          num = Math.sqrt(num);
//       } else if(el === 'spice') {
//          num = num + 1;
//       } else if(el === 'bake') {
//          num = num * 3;
//       } else if(el === 'fillet') {
//          num = num - num * 0.20;
//       }
//       result.push(num);
//    });

//    return result.join('\n');
// }

function solve(params) {
   let commandsMap = {
      'chop': x => x / 2,
      'dice': x => Math.sqrt(x),
      'spice': x => x + 1,
      'bake': x => x * 3,
      'fillet': x => x = x - x * 0.20
   };

   let num = Number(params.shift());
   let arr = [];
   
   function calculate(operation, num) {
      return operation(num);
   }


   params.forEach(el => {
      let result = calculate(commandsMap[el], num);
      num = result;
      arr.push(num);
   });

   return arr;

}

console.log(solve(
   ['9', 'dice', 'spice', 'chop', 'bake', 'fillet']
))
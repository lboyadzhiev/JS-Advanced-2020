// let sum = (a, b) => a + b;

// function calculate(operation, a, b) {
//    return operation(a, b);
// }

// let result = calculate(sum, 5, 10);

// console.log(result)


function solve(params) {
   let num = Number(params.shift());

   let commandsMap = {
      'chop': x => x / 2,
      'dice': x => Math.sqrt(x),
      'spice': x => x + 1,
      'bake': x => x * 3,
      'fillet': x => x = x - x * 0.20
   };

   function calculate(operation, num) {
      num = operation(num);

      return num;
   }
   let arr = [];
   
   params.forEach(el => {
      let result = calculate(commandsMap[el], num);
      num = result;
      arr.push(num);
   });

   return arr;

}

console.log(solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']))
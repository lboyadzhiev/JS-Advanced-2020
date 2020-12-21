function solve(input) {
   let result = [];
   for (let i = 0; i < input.length; i++) {
      if (input[i] < 0) {
         result.unshift(input[i]);
      } else {
         result.push(input[i]);
      }
   }
   console.log(result);
}

solve([3, -2, 0, -1])
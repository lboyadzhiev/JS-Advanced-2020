function solve(input) {
   let output = [];

   for(let i = 0; i < 2; i++) {
      let smallestNum = Math.min(...input);
      let index = input.indexOf(smallestNum);
      let num = input.splice(index, 1);

      output.push(num);
   }

   console.log(output. join(' '));
}

solve([3, 0, 10, 4, 7, 3])

// function solve(input) {
//    return input
//    .slice()
//    .sort((a, b) => a - b)
//    .slice(0, 2)
//    .join(' ');
// }
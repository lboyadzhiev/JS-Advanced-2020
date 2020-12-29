function refactorSolution(...params) {
   let sum = params.reduce((a, b) => a + b.length, 0);
   let avrg = Math.floor(sum / params.length);

   return [sum, avrg].join('\n');
}

console.log(
   refactorSolution('chocolate', 'ice cream', 'cake')
);
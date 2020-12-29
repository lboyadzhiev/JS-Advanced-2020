function solve(...params) {
   let operator = params.pop();

   const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
      '%': (a, b) => a % b,
      '**': (a, b) => a ** b
   };

   return params
      .reduce(
         (a, b) => operations[operator](
            a, Number(b)
         ),
         Number(params.shift())
      );
}

console.log(
   solve(1, 2, 3, 4, '+')
);
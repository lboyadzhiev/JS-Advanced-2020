function solve(a, b, str) {
   const operations = {
      '+': a + b,
      '-': a - b,
      '*': a * b,
      '/': a / b,
      '%': a % b,
      '**': a ** b
   };

   console.log(operations[str])
}

solve(5, 6, '+');
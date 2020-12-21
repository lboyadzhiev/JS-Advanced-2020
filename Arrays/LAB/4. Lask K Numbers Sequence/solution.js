function solve(n, k) {
   let output = [1];

   for(let i = 1; i < n; i++) {
      let number = output.slice(-k).reduce((a, b) => a + b);

      output.push(number);
   }

      console.log(output);

}

solve(6, 3)
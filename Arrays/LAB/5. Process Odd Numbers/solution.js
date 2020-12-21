function solve(input) {
   let outpu = [];

   for(let i = 1; i < input.length; i+=2) {
      let num = input[i] * 2;

      outpu.unshift(num);
   }

   console.log(outpu);
}

solve([3, 0, 10, 4, 7, 3])
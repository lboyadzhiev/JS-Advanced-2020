function solve(strOne, strTwo,) {
   let start = Number(strOne);
   let end = Number(strTwo);

   let sum = 0;
   for(let i = start; i <= end; i++) {
      sum += i;
   }

   return sum;

}

console.log(solve('1', '5'));
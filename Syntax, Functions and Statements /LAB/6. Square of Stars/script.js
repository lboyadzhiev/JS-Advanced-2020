function solve(x = 5) {
   let result = new Array(x);
   for (let i = 0; i < x; i++) {
      result[i] = '*'
         .repeat(x)
         .split('')
         .join(' ');
   }

   console.log(result.join('\n'));
}

/*
function solve(num = 5) {
   for (let i = 0; i < num; i++) {
      let row = '';
      for (let j = 0; j < num; j++) {
         row += '* ';
      }

      console.log(row);
   }
}
*/

solve(10)
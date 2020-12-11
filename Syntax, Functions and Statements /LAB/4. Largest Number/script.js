function solve(...params) {
   let largestNum = Math.max(...params);

   console.log(`The largest number is ${largestNum}.`);
}

solve(-3, -5, -22.5);
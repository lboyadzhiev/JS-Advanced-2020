/*
    5. Calorie Object
Write a function that composes an object by given properties. The input comes as an array of strings. Every even index of the array represents the name of the food. Every odd index is a number that is equal to the calories in 100 grams of the given product. Assign each value to its corresponding property and print it on the console.
The input comes as an array of string elements.
The output should be printed on the console.
*/

function solve(input) {
   let object = {};
   let name = '';
   let calories = 0;
   for(let i = 0; i < input.length; i++) {
      
      if (i === 0 || i % 2 === 0) {
         name = input[i];
      }
      if (i % 2 !== 0) {
         calories = Number(input[i]);
         object[name] = calories;
      }
   }

   console.log(object);
}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
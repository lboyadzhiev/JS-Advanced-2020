/*
    4. Rotate Array
Write a JS function that rotates an array. The array should be rotated to the right side, meaning that the last element should become the first, upon rotation. 
The input comes as an array of strings. The last element of the array is the amount of rotation you need to perform.
The output is the resulted array after the rotations. The elements should be printed on one line, separated by a single space.
*/

function solve(params) {
   let num = Number(params.pop());
   let rotations = 0;
   if(num > params.length) {
      rotations = num % params.length;
   } else {
      rotations = num;
   }
   

   while (rotations > 0) {
      let el = params.pop();
      params.unshift(el);
      rotations--;
   }
   return params.join(' ');
}

console.log(solve(
   [
      'Banana', 
      'Orange', 
      'Coconut', 
      'Apple', 
      '15'
   ]
))
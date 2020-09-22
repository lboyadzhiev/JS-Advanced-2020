/*
    3. Reverse an Array of Numbers
Write a program which receives a number n and an array of elements. Your task is to create a new array with n numbers, reverse it and print its elements on a single line, space separated.
*/

function solve(num, arr) {

   return arr
      .slice(0, num)
      .reverse()
      .join(' ');
}

console.log(solve(
   3, [10, 20, 30, 40, 50]
))
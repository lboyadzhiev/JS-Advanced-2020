/*
    7. Day of Week
Write a function that prints a number between 1 and 7 when a day of the week is passed to it as a string and an error message if the string is not recognized.
The input comes as a single string argument.
The output should be returned as a result.
*/

function solve(day) {
   const daysMap = {
      'Monday': 1,
      'Tuesday': 2,
      'Wednesday': 3,
      'Thursday': 4,
      'Friday': 5,
      'Saturday': 6,
      'Sunday': 7
   }

   return daysMap[day] ? daysMap[day] : 'error';
}

console.log(solve('Monday'));
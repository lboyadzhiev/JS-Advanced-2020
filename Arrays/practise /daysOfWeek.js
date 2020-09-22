/*
    2. Day of Week
Write a program which receives a number and prints the corresponding name of the day of week. 
If the number is NOT a valid day, print 'Invalid day!'.
*/

function solve(num) {
   let input = num.toString();
   let days = {
      '1': 'Monday',
      '2': 'Tuesday',
      '3': 'Wednesday',
      '4': 'Thursday',
      '5': 'Friday',
      '6': 'Saturday',
      '7': 'Sunday'
   }

   return days[input] ? days[input] : 'Invalid day!';
}

console.log(solve(
   8
))
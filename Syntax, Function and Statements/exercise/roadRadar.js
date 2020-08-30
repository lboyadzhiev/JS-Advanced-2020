/*
    6. Road Radar
Write a function that determines whether a driver is within the speed limit. You will receive the speed and the area. Each area has a different limit: 
    • On the motorway the limit is 130 km/h
    • On the interstate the limit is 90 km/h
    • In the city the limit is 50 km/h 
    • Within a residential area the limit is 20 km/h
If the driver is within the limits, there should not be any output. If the driver is over the limit, however, your function should print the severity of the infraction. 
For speeding up to 20 km/h over the limit, speeding should be printed 
For speeding up to 40 km/h over the limit, excessive speeding should be printed
For anything else, reckless driving should be printed
The input comes as an array of elements. The first element is the current speed (number),  the second element is the area.
The output should be printed on the console. Note that in certain cases there isn’t any output.
*/

function solve(input) {

   const limitMap = {
      'motorway': 130,
      'interstate': 90,
      'city': 50,
      'residential': 20
   };
   let x = Number(input[0]);
   let y = input[1];

   if(y === limitMap[])

   console.log(y)
}

solve([40, 'city']);
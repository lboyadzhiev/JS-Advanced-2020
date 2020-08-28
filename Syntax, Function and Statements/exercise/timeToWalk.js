/*
    4. Time to Walk
Write a function that calculates how long it takes a student to get to university. 
The function takes three numbers:
    • The first is the number of steps the student takes from their home to the university
    • Тhe second number is the length of the student's footprint in meters
    • Тhe third number is the student speed in km/h
Every 500 meters the students a rest and takes a 1 minute break.
Calculate how long the student walks from home to university and print on the console the result in the following format: 'hours:minutes:seconds'.
The input comes as three numbers.
The output should be printed on the console.
*/

function solve(...params) {

   let steps, footprint, speed;
      steps = params[0];
      footprint = params[1];
      speed = params[2];
   let distance = (steps * footprint);
   let distanceMetter = distance;
   let delay = 0;

   while(distanceMetter >= 500) {
      distanceMetter -= 500
      delay++;
   }

   let distanceKm = distance / 1000;

   let time = (distanceKm / speed * 3600) + delay * 60;

   let hours = Math.floor(time / 3600);
   let minutes = Math.floor(time % 3600 / 60);
   let seconds = Math.ceil(time % 3600 % 60);

   let hoursPrint, minPrint, secPrint;

   if (hours < 10) {
      hoursPrint = `0${hours}`;
   } else {
      hoursPrint = hours;
   }

   if(minutes < 10) {
      minPrint = `0${minutes}`;
   } else {
      minPrint = minutes;
   }

   if(seconds < 10) {
      secPrint = `0${seconds}`;
   } else {
      secPrint = seconds;
   }

   console.log(`${hoursPrint}:${minPrint}:${secPrint}`);
}

solve(4000, 0.60, 5)
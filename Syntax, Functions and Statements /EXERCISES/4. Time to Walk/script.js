function solve(steps, footprint, speed) {
  let distance = steps * footprint;
  let distanceMetter = distance;
  let delay = 0;

  while (distanceMetter >= 500) {
    distanceMetter -= 500;
    delay++;
  }

  let distanceKm = distance / 1000;

  let time = (distanceKm / speed) * 3600 + delay * 60;

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.ceil((time % 3600) % 60);

  let hoursPrint, minPrint, secPrint;

  if (hours < 10) {
    hoursPrint = `0${hours}`;
  } else {
    hoursPrint = hours;
  }

  if (minutes < 10) {
    minPrint = `0${minutes}`;
  } else {
    minPrint = minutes;
  }

  if (seconds < 10) {
    secPrint = `0${seconds}`;
  } else {
    secPrint = seconds;
  }

  console.log(`${hoursPrint}:${minPrint}:${secPrint}`);
}

solve(4000, 0.6, 5);

function solve([speed, area]) {
  const speedLimits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  if (speed > speedLimits[area]) {
    let overSpeed = speed - speedLimits[area];

    if (overSpeed <= 20) {
      console.log("speeding");
    } else if (overSpeed <= 40) {
      console.log("excessive speeding");
    } else {
      console.log("reckless driving");
    }
  }
}

solve(40, "residential");

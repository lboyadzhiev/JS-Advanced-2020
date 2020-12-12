function solve(day) {
  const days = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };

  if (days.hasOwnProperty(day)) {
    return days[day];
  } else {
    return "error";
  }
}

console.log(solve("Sunday"));

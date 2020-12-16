function solve(input) {
  let evenPositionEl = [];

  for (let i = 0; i < input.length; i += 2) {
    evenPositionEl.push(input[i]);
  }

  return evenPositionEl.join(" ");
}

console.log(solve(["20", "30", "40"]));

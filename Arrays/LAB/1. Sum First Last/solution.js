function solve(input) {
  let x = Number(input[0]);
  let y = Number(input[input.length - 1]);

  return x + y;
}

console.log(solve(["20", "30", "40"]));

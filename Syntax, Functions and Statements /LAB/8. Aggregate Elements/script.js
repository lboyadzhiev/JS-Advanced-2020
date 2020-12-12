function solve(params) {
  const add = params.reduce((x, y) => x + y, 0);
  const enverseADd = params.reduce((x, y) => x + 1 / y, 0);
  const makeString = params.join("");

  console.log(add);
  console.log(enverseADd);
  console.log(makeString);
}

solve([2, 4, 8, 16]);

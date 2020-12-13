function solve(x, y) {
  if (x === 0) return y;

  while (y !== 0) {
    if (x > y) x = x - y;
    else y = y - x;
  }

  console.log(x);
}

solve(15, 5);

function solve(input) {
  let arr = input.toString().split("");
  let isEQual = true;

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      isEQual = false;
    }
  }
  let result = arr.map(Number).reduce((a, b) => a + b, 0);

  console.log(isEQual);
  console.log(result);
}

solve(1234);

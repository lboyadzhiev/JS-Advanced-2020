function solve(...params) {
   let operator = params.pop();

   return params
      .reduce(
         (a, b) => eval(`${a}${operator}${b}`),
         params.shift()
      );
}

console.log(
   solve(1, 2, 3, 4, '+')
);
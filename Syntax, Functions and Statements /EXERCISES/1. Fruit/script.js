function solve(fruit, weightGr, price) {
  let weight = weightGr / 1000;
  let money = weight * price;

  console.log(
    `I need $${money.toFixed(2)} to buy ${weight.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

solve("orange", 1563, 2.35);

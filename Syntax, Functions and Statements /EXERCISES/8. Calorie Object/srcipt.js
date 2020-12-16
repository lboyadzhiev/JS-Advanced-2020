function solve(params) {
  let obj = {};

  let key = "";
  let value = "";

  for (let i = 0; i < params.length; i++) {
    if (i === 0 || i % 2 === 0) {
      key = params[i];
    } else {
      value = params[i];
    }

    obj[key] = Number(value);
  }

  console.log(obj);
}

solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);

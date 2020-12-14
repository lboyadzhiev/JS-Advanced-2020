function solve([...params]) {
  let num = Number(params.shift());

  let result = 0;

  for (let el of params) {
    if (el === "chop") {
      result = num / 2;
    } else if (el === "dice") {
      result = Math.sqrt(num);
    } else if (el === "spice") {
      result = num + 1;
    } else if (el === "bake") {
      result = num * 3;
    } else if (el === "fillet") {
      result = num - num * 0.2;
    }

    num = result;
    console.log(result);
  }
}

solve("9", "dice", "spice", "chop", "bake", "fillet");

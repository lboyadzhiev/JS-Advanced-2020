function solve(arg) {

   if (typeof arg !== 'number') {
      console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`)
   } else {
      let area = Math.pow(arg, 2) * Math.PI;

      console.log(area.toFixed(2));
   }
}

solve('name');
/*
    1.  Heroic Inventory
In the era of heroes, every hero has his own items which make him unique. Create a function which creates a register for the heroes, with their names, level, and items, if they have such. The register should accept data in a specified format, and return it presented in a specified format. 
Input
The input comes as array of strings. Each element holds data for a hero, in the following format:
“{heroName} / {heroLevel} / {item1}, {item2}, {item3}...” 
You must store the data about every hero. The name is a string, the level is a number and the items are all strings.
Output
The output is a JSON representation of the data for all the heroes you’ve stored. The data must be an array of all the heroes. Check the examples for more info.
*/


function solve(input) {
   let heroes = [];

   input.forEach(line => {
      let[name, level, items] = line.split(' / ');
      level = Number(level);
      items = items ? items.split(', ') : [];

      heroes.push({name, level, items});
   });

   return JSON.stringify(heroes);
}

// function solve(input) {

//    let result = [];
   
//    input.forEach(line => {
//       let obj = {};
//       let arr = line.split(' / ');
//       let name, level, items;
//          name = arr[0];
//          level = Number(arr[1]);
//          items = arr[2] ? arr.split(', '): [];

//          obj['name'] = name;
//          obj['level'] = level;
//          obj['items'] = items;

//          result.push(obj);
//    });

//    return JSON.stringify(result);
// }

console.log(
   solve(
      [
         'Isacc / 25 / Apple, GravityGun',
         'Derek / 12 / BarrelVest',
         'Hes / 1 / Desolator, Sentinel, Antara'
      ]
   )
)
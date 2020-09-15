/*
truthy

When we say that a value is truthy in JS, what we mean is that the value coerces to true when evalueted in a boolean context 
*/

/*
There are only six falsy values - false, null, undefined, NaN, 0 and "".
*/

/*
Function - named list of instructons (statements and expressions)

Can take parameters and return result
   Functions names and parameters use camel case


*/

// const arr1 = [1, 2, 3, 4];
// const reducer = (a, b) => a + b;

// console.log(arr1.reduce(reducer));

// console.log(arr1.reduce((a, b, i, arr) => {
//    return a + b;
// }, 10))


// let sum = arr1.reduce((a, b) => a + b
// , 0)

// let initValue = 0;
// let sum = [{x: 1}, {x: 3}, {x: 4}].reduce((a, b) => a + b.x, initValue)

// console.log(sum)

// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
//    return a.concat(b);
// }, []);

// let flattened = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => a.concat(b), []);

// console.log(flattened);


// let names = ['Sevda', 'Lucho', 'Albena', 'Boryana', 'Sevda', 'Lucho', 'Hristo', 'Albena'];

// let countedNames = names.reduce(function (allNames, name) {
//    if (name in allNames) {
//       allNames[name]++;
//    } else {
//       allNames[name] = 1
//    }

//    return allNames;
// }, {});

// console.log(countedNames)


let people = [
   {name: 'Lucho', age: 32},
   {name: 'Sevda', age: 32},
   {name: 'Elza', age: 52},
   {name: 'Albena', age: 22},
];

function groupBy(objectArray, property) {
   return objectArray.reduce(function(acc, obj) {
      let key = obj[property];
      if(!acc[key]) {
         acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
   }, {})
}

let groupedPeople = groupBy(people, 'age');

console.log(groupedPeople)
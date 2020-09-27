/*
    1. Towns to JSON
You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
Input
The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
Output
    • The output should be an array of objects wrapped in JSON.stringify(). 
    • Latitude and longitude must be parsed to numbers, and represented till the second digit after the decimal point!
*/


function solve(input) {

   let data = input.map(x => x
      .split('|')
      .filter(x => x.length > 0)
      .map(x => x.trim())
   )

   let keys = data.shift();

   let result = [];

   data.map(row => {
      let town = {
         [keys[0]]: row[0],
         [keys[1]]: Number(Number(row[1]).toFixed(2)),
         [keys[2]]: Number(Number(row[2]).toFixed(2)),
      }

      result.push(town);
   });

   return JSON.stringify(result);
}

// function solve(data) {
//    const isNotEmptyString = x => x !== '';
//    const trimMyString = x => x.trim();
//    const parseIfNum = x => Number(x) ? Math.ceil(Number(x)) : x;

//    function extractData(str) {
//       return str
//          .split('|')
//          .filter(isNotEmptyString)
//          .map(trimMyString)
//          .map(parseIfNum);
//    }

//    let keys = extractData(data[0]);

//    return data
//       .slice(1)
//       .map(extractData)
//       .map(x => x.reduce((res, val, i) => {
//          res[keys[i]] = val;
//          return res;
//       }, {}))
//       .map(x => JSON.stringify(x));
// }

// function solve(data) {
//    let keys = [];
//    let keysToBe = data[0].split('|');

//    for (let i = 0; i < keysToBe.length; i++) {
//       if (keysToBe[i] !== '') {
//          keys.push(keysToBe[i].trim());
//       }
//    }

//    let values = [];
//    for (let i = 1; i < data.length; i++) {
//       let row = data[i].split('|');
//       let valuesToBe = [];
//       for (let j = 0; j < row.length; j++) {
//          if (row[j] !== '') {
//             let value = Number(row[j]);
//             if (isNaN(value)) {
//                value = row[j].trim();
//             } else {
//                value = Math.ceil(value * 100) / 100;
//             }
//             valuesToBe.push(value);
//          }
//       }
//       values.push(valuesToBe);
//    }

//    let result = [];

//    for (let i = 0; i < values.length; i++) {
//       let obj = {};
//       for (let j = 0; j < keys.length; j++) {
//          obj[keys[j]] = values[i][j];
//       }

//       result.push(obj)
//    }

//    let printArr = [];

//    for(let line of result) {
//       let print = JSON.stringify(line);
//       printArr.push(print);
//    }

//    return printArr
// }



console.log(solve(['| Town | Latitude | Longitude |', '| Random Town | 0.00 | 0.00 |']))


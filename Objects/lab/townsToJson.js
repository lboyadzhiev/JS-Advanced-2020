/*
    1. Towns to JSON
You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
Input
The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
Output
    • The output should be an array of objects wrapped in JSON.stringify(). 
    • Latitude and longitude must be parsed to numbers, and represented till the second digit after the decimal point!
*/



const isNotEmptyString = x => x !== '';
const trimMyStrings = x => x.trim();
const parseIfNumber = x => Number(x) ? Math.floor(Number(x) * 100) / 100 : x

function extractData(str) {
   return str
      .split('|')
      .filter(isNotEmptyString)
      .map(trimMyStrings)
      .map(parseIfNumber)
}




function solve(data) {
   let keys = extractData(data.shift());
   return data
      .map(extractData)
      .map(x => x.reduce((res, val, i) => {
         res[keys[i]] = val;
         return res;
      }, {}));
}

console.log(   solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']))


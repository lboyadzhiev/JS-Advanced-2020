/*
    2. JSON’s Table
JSON’s Table is a magical table which turns JSON data into an HTML table. You will be given JSON strings holding data about employees, including their name, position and salary. You need to parse that data into objects, and create an HTML table which holds the data for each employee on a different row, as columns. 
The name and position of the employee are strings, the salary is a number.
Input
The input comes as array of strings. Each element is a JSON string which represents the data for a certain employee.
Output
The output is the HTML code of a table which holds the data exactly as explained above. Check the examples for more info.
*/

function solve(input) {
   const rows = [];
   // обходим входа
   for (let line of input) {
   // JSON parse 
      const person = JSON.parse(line);

   // съставим съдържащ  html ред със стойностите от обекта
      rows.push(`<tr><td>${person.name}</td><td>${person.position}</td><td>${person.salary}</td></tr>`)
   }
  
   // отпечатваме началото на таблицата 
   // отпечакваме резултата 
   console.log(rows.join('\n'));
   // отпечатваме края на таблицата 


}


console.log(solve(
   [
      '{"name":"Pesho","position":"Promenliva","salary":100000}',
      '{"name":"Teo","position":"Lecturer","salary":1000}',
      '{"name":"Georgi","position":"Lecturer","salary":1000}'
   ]
))
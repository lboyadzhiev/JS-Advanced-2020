/*
    3. From JSON to HTML Table
You’re tasked with creating an HTML table of students and their scores. You will receive a single string representing an array of objects, the table’s headings should be equal to the object’s keys, while each object’s values should be a new entry in the table. Any text values in an object should be escaped, in order to avoid introducing dangerous code into the HTML. 

Input
The input comes a single string argument (the array of objects).
Output
The output should be printed on the console – for each entry row in the input print the object representing it.
Note:
Object’s keys will always be the same. Check more information for the HTML Entity here.
*/

function solve(input) {
   let jsonData = input.shift();
   let students = JSON.parse(jsonData);
   let first = students[0];

   let html = '<table>';

   html += `<tr>${Object.keys(first).map(x => `<th>${x}</th>`).join('')}</tr>`;
   students.forEach(student => {
      html += '<tr>';
      html += Object.values(student).map(x => `<td>${x}</td>`).join(' ');
      html += '</tr>'
   });
   html += '</table>';

   return html;
}

console.log(
   solve(
      [`[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},
{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]`]
   )
)
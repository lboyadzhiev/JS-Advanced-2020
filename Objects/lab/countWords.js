/*
    3. Count Words in a Text
You are tasked to count the number of words in a text using an object as an associative array, any combination of letters, digits and _ (underscore) should be counted as a word. The words should be stored in the object as properties - the key being the word and the value being the amount of times the word is contained in the text. 
Input
The input comes as an array of strings containing one entry - the text whose words should be counted. The text may consist of more than one sentence.
Output
The output should be printed on the console - the JSON representation of the object containing the words.
*/
function addIfMissing(a, b) {
   if (typeof a[b] === 'undefined') {
      a[b] = 0;
   }
   return a;
}
function solve(input) {

   return input
      .match(/\w+/gim)
      .reduce((a, b) => {
         addIfMissing(a, b);
         a[b]++;
         return a;
      }, {});




      
   // let data = input.match(/\w+/gim);
   // let obj = {};

   // for(let i = 0; i < data.length; i++) {
   //    if(typeof obj[data[i]] === 'undefined') {
   //       obj[data[i]] = 0;
   //    }
   //    obj[data[i]] ++
   // }

   // return obj;
}

console.log(solve('JS devs use Node.js for server-side JS.-- JS for devs'));
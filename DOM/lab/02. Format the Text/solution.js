/*
    2. Format the Text
In this problem, you should create a JS functionality which formats the given text into paragraphs.

When the [Format] button is clicked, you need to format the text inside the paragraph with an id "input". The formatting is done as follows:
    • You need to create a new paragraph element which holds no more than 3 sentences from the given input.
    • If the given input contains less or 3 sentences, you need to create only 1 paragraph, fill it with these sentences and append this paragraph to the div with an id "output". 
Otherwise, when you have more than 3 sentences in that input paragraph, you need to create enough paragraphs to get all sentences from the input text.
Just remember to restrict the sentences in each paragraph to 3.
*/

function solve() {
  let parrent = document.getElementById('output');
  let text = document
    .getElementById('input').innerHTML;
  let sentence = text.split('. ');

  while (sentence.length > 0) {
    let p = document.createElement('p');

    let pText = '';
    if (sentence.length >= 2) {
      pText = sentence.splice(0, 3).join('. ') + '.';
      p.setAttribute('id', 'input');
    } else {
      pText = sentence.splice(0,).join('. ');
      p.setAttribute('id', 'output');
    }
    p.innerHTML = pText;
    parrent.appendChild(p);
  }
}

// function solve() {
//   const inputText = document.getElementById('input').innerText;
//   const outputElement = document.getElementById('output');

//   inputText
//     .match(/(?:\s*)([^.!?]+[.!?]+)/g)
//     .map(sentence => sentence.trim())
//     .reduce((acc, sentence, index) => {
//       if (index % 3 === 0) { acc.push([sentence]); } else { acc[acc.length - 1].push(sentence); }
//       return acc;
//     }, [])
//     .forEach(paragraph => {
//       let parHTML = document.createElement('p');
//       parHTML.textContent = paragraph;
//       outputElement.appendChild(parHTML);
//     });
// }
/*
Write a function that orders names alphabetically.
*/

function solve() {
    let addButton = document.getElementsByTagName("button")[0];
    let inputTextElement = document.getElementsByTagName("input")[0];

    let orderListElement = document.getElementsByTagName("ol")[0];
    let listItemElements = orderListElement.getElementsByTagName("li");

    addButton.addEventListener("click", function () {
        let inputName = inputTextElement.value;

        if (inputName) {
            let currentName = "";
            currentName += inputName[0].toUpperCase();

            for (let i = 1; i < inputName.length; i++) {
                currentName += inputName[i].toLowerCase();
            }

            let index = currentName.charCodeAt(0) - 65;

            if (listItemElements[index].textContent.length === 0) {
                listItemElements[index].textContent += currentName;
            } else {
                listItemElements[index].textContent += ", " + currentName;
            }

            inputTextElement.value = null;
        }
    })
}

// function solve() {
//     let input = document.getElementsByTagName('input')[0];
//     let btn = document.getElementsByTagName('button')[0];

//     let liElements = document.getElementsByTagName("li");
//     btn.addEventListener('click', onClick);

//     function onClick() {
//         let dataMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16, 'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24, 'Z': 25 };

//         let inputName = input.value;

//         if (inputName) {
//             let capLetter = inputName
//                 .slice(0, 1)
//                 .toUpperCase();
//             inputName = capLetter + inputName.slice(1,);
//             if (liElements[dataMap[capLetter]].textContent.length === 0) {
//                 liElements[dataMap[capLetter]].textContent = `${inputName}`;
//             } else {
//                 liElements[dataMap[capLetter]].textContent += `, ${inputName}`;
//             }

//             input.value = null;
//         }
//     }
// }
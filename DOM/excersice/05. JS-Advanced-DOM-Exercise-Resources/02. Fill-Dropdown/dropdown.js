/*
Your task is to take values from input fields with ids "newItemText" and "newItemValue". Then you should create and append an <option> to the <select> with id "menu".


*/

function addItem() {
    let text = document.getElementById('newItemText');
    let data = document.getElementById('newItemValue');

    let select = document.getElementById('menu');
    let option = document.createElement('option');
    // let option = `<option value = ${data.value}>${text.value}</option>`;
    option.value = data.value;
    option.innerText = text.value;

    select.appendChild(option);
    text.value = '';
    data.value = '';
}
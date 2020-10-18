/*
Your task is to take values from input fields with ids "newItemText" and "newItemValue". Then you should create and append an <option> to the <select> with id "menu".


*/


function addItem() {

    //read references 
    const text = document.querySelector('#newItemText').value;
    const value = document.querySelector('#newItemValue').value;

    //create new HTML element
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;

    //append the new element 
    
    document.querySelector('#menu').appendChild(option);

    // null the fields
    document.querySelector('#newItemText').value = '';
    document.querySelector('#newItemValue').value = '';
}

function addItem() {
    let inputEl = document.querySelector('#newItemText');

    let liEl = document.createElement('li');

    liEl.innerText = inputEl.value;
    inputEl.value = '';

    let ulEl = document.querySelector('#items');

    ulEl.appendChild(liEl);
}
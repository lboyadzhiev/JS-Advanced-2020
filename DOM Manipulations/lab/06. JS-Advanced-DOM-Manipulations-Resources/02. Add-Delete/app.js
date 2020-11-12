function addItem() {
    let input = document.querySelector('#newText');

    let li = document.createElement('li');
    li.innerHTML = `${input.value} <a href='#'>[Delete]</a`;
    input.value = '';

    let ul = document.querySelector('#items');
    ul.appendChild(li);

    let link = document.querySelector('#delete');
    li.addEventListener('click', deleteEelmenet);

    function deleteEelmenet(e) {
        let element = e.target.parentElement;

        element.remove();
    }
}
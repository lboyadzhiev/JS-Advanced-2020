function solve() {
    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }
    let buttons = document.getElementsByClassName('keys')[0].children;

    for (let button of Array.from(buttons)) {
        button.addEventListener('click', display);
    }

    let clearButton = document.getElementsByClassName('clear')[0];
    clearButton.addEventListener('click', clear);

    let firstNum = '';
    let secNum = '';
    let operator = '';

    
    }

    function clear() {
        document.getElementById('expressionOutput').textContent = '';
        document.getElementById('resultOutput').textContent = '';
        firstNum = '';
        secNum = '';
        operator = '';
    }
}
function solve() {
    //запазваме референции на елементите, които ще манипулираме през целия живот на приложението

    const trainings = document.querySelector('.modules');

    const inputFields = document.querySelectorAll('.form-control');

    const lectureName = inputFields.item(0).querySelector('input');
    const dateForm = inputFields.item(1).querySelector('input');
    const moduleForm = inputFields.item(2).querySelector('select');
    const addBtn = inputFields.item(3).querySelector('button');
    const modules = [];

    addBtn.addEventListener('click', addTraining);

    // създаване на DOM elements

    function addTraining(e) {
        e.preventDefault();

        // прочитаме съдържанието на формите и валидираме
        const name = lectureName.value;
        const date = dateForm.value;
        const module = `${moduleForm.value} - MODULE`;



        // създаваме елементи 

        // if (name === '' || date === '' || module == 'Select module') {
        //     return
        // }

        const delBtn = el('button', 'Del', { className: 'red' });

        const div = el('div', el('h3', module), { className: 'module'});
        const ul = el('ul', '');
        const li = el('li', [
            el('h4', `${name} - ${date}`),
            delBtn
        ], { className: 'flex' });



        if(modules.includes(module) && modules.length > 0) {
            let divElements = Array.from(document.querySelectorAll('.module'));

            
        } else {
            ul.appendChild(li);
            div.appendChild(ul);
            trainings.appendChild(div);
            modules.push(module);
        }
            
        
        
 

        delBtn.addEventListener('click', () => {
            ul.remove();
        })
    }


    function el(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }

        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }

        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }

            result.appendChild(node)
        }

        return result;
    }
}
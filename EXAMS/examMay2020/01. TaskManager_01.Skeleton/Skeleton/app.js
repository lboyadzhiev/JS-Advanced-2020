function solve() {
    // запазваме референции на елементите, които ще манимулираме през целия живот на приложението
    const sections = document.querySelectorAll('section');
    const openDiv = sections.item(1).querySelectorAll('div').item(1);
    const progressDiv = sections.item(2).querySelectorAll('div').item(1);
    const completeDiv = sections.item(3).querySelectorAll('div').item(1);

    const inputTask = document.querySelector('#task');
    const inputDesc = document.querySelector('#description');
    const inputDate = document.querySelector('#date');

    document.querySelector('#add').addEventListener('click', addTask)


    // създаване на задачи (DOM elements)

    function addTask(e) {
        e.preventDefault();
        // прочитаме съдържанието на формуляра и валидираме
        const taskName = inputTask.value;
        const descName = inputDesc.value;
        const dataName = inputDate.value;

        if (taskName.length > 0 && descName.length > 0 && dataName.length > 0) {
            // създаваме елементите
            
            const startBtn = el('button', 'Start', { className: 'green' });
            const finishBtn = el('button', 'Finish', { className: 'orange' });
            const delteBtn = el('button', 'Delete', { className: 'red' });

            const btnDiv = el('div', [
                startBtn,
                delteBtn
            ], { className: 'flex'});

            const task = el('article', [
                el('h3', taskName),
                el('p', `Description: ${descName}`),
                el('p', `Due Date: ${dataName}`),
                btnDiv
            ]);

            // закачаме функционалност
            startBtn.addEventListener('click', () => {
                progressDiv.appendChild(task);
                startBtn.remove();
                btnDiv.appendChild(finishBtn);
            });

            finishBtn.addEventListener('click', () => {
                completeDiv.appendChild(task);
                btnDiv.remove();
            });

            delteBtn.addEventListener('click', () => {
                task.remove();
            })



            // добавяме елемента в DOM дървото
            openDiv.appendChild(task);

            
        }

        inputTask.value = '';
        inputDesc.value = '';
        inputDate.value = '';
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
function solve() {
    let lectureElement = document.getElementsByClassName('form-control')[0].childNodes[3];
    let dateElement = document.getElementsByClassName('form-control')[1].childNodes[3];
    let moduleElement = document.getElementsByClassName('form-control')[2].childNodes[3];

    let addBtn = document.getElementsByClassName('form-control')[3].addEventListener('click', addInfo);




    function addInfo(e) {
        e.preventDefault();

        let lectureName = lectureElement.value;
        let date = dateElement.value;
        let module = moduleElement.value;

        let obj = {
            module: []
        };

        console.log(obj);

        if (lectureName !== '' && date !== '' && module !== '') {

            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let btn = document.createElement('button');
            btn.textContent = 'Del';
            btn.className = 'red';

            let dataArr = date.split('T');
            let dateArr = dataArr[0].split('-').join('/');

            h4.innerText = `${lectureName} - ${dateArr} - ${dataArr[1]}`;
            h3.innerText = `${module.toUpperCase()} - MODULE`;

            let ul = document.createElement('ul');
            let li = document.createElement('li');
            li.className = 'flex';
            li.appendChild(h4);
            li.appendChild(btn);

            ul.appendChild(li);



            let userWindow = document.getElementsByClassName('modules')[0];

            userWindow.appendChild(h3);
            userWindow.appendChild(ul);


            lectureElement.value = '';
            dateElement.value = '';
            moduleElement.value  = '';
        }
    }

};
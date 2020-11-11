import * as data from './data.js';
import el from './dom.js';

const symbols = {
    'sunny': '&#x2600;',
    'partlySunny': '&#x26C5;',
    'overcast': '&#x2601;',
    'rain': '&#x2614;',
    'degrees': '&#176;'
};

window.addEventListener('load', () => {

    let input = document.getElementById('location');
    let main = document.getElementById('forecast');
    let current = document.getElementById('current');
    let upCommint = document.getElementById('upcoming');

    document.getElementById('submit').addEventListener('click', getForecast);

    async function getForecast() {
        let locationName = input.value;
        let code = await data.getCode(locationName);
        let todayP = data.getToday(code);
        let commingP = data.getUpcoming(code);
    
        let [today, comming] = [
            await todayP,
            await commingP
        ];

        let symbolSpan = el('span', '', { className: 'condition symbol' });
        symbolSpan.innerHTML = symbols[today.forecast.condition];
     
        current.appendChild (le('div', [
            symbolSpan,
            el('span', [
                el('span', today.name, { className: 'forecast-data'}),
                el('span', `${today.forecast.low}/${today.forecast.high}`, { className: 'forecast-data'}),
                el('span', today.forecast.condition, { className: 'forecast-data'})
            ], { className: 'condition'})
        ], { className: 'forecast'}));

        main.style.display = 'block';   

    }
});


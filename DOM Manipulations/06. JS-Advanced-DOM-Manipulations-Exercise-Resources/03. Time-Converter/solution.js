function attachEventsListeners() {
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convert(value, from) {
        const inDays = value / ratios[from];
        return {
            day: inDays * ratios.days,
            hour: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        };
    }

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    document.querySelector('main').addEventListener('click', onClick);


    function onClick(e) {
        if (e.target.nodeName === 'INPUT' && e.target.type === 'button') {
            const el = e.target.parentNode.querySelector('input[type="text"]');
            const value = Number(el.value);
            console.log(value);
            const id = el.id;
            const readyValues = convert(value, id);
            console.log(readyValues);
            display(readyValues);
        }
    }

    function display(values) {
        daysEl.value = values.day;
        hoursEl.value = values.hour;
        minutesEl.value = values.minutes;
        secondsEl.value = values.seconds;
    }
}
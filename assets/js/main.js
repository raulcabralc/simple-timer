function timerScope () {

    function getTimeFromSeconds (seconds) {
        const date = new Date(seconds * 1000);
        // JS lê segundos em milésimos de segundos
        return date.toLocaleTimeString('pt-BR', {
            // NÃO CONFUNDIR .toLocaleDataString com
            // .toLocaleTimeString!!
            hour12: false,
            timeZone: 'GMT'
        });
    };

    const watch = document.querySelector('.timer');

    let seconds = 0;
    let timer;

    function startTimer () {
        timer = setInterval(() => {
            seconds++;
            watch.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    };

    document.addEventListener('click', (event) => {
        const element = event.target;

        if (element.classList.contains('start')) {
            watch.classList.remove('paused');
            clearInterval(timer);
            startTimer();
        };

        if (element.classList.contains('pause')) {
            watch.classList.add('paused');
            clearInterval(timer);
        };

        if (element.classList.contains('reset')) {
            watch.classList.remove('paused');
            clearInterval(timer);
            watch.innerHTML = '00:00:00';
            seconds = 0;
        };
    });
};

timerScope();
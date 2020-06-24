document.addEventListener('DOMContentLoaded', (event) => {

    let counters = document.querySelectorAll('.count');
    let countersQuantity = counters.length;
    let counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    const count = function(start, value, id) {
        let localStart = start;
        setInterval(function() {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }}, 20);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});
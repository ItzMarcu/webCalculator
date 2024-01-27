let display = document.getElementById('display');
const acBUtton = document.getElementById('ac');
acBUtton.addEventListener("click", function () {
    clear();
})

function appendToDisplay(value) {
    display.value += value;
}

function clear() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

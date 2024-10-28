//CALCULATOR

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "ERROR";
    }
}

function setNegative() {
    try {
        display.value = eval(display.value * ("-1"));
    }
    catch(error) {
        display.value = "ERROR";
    }
}

function calculateSquareRoot() {
    display.value = Math.sqrt(display.value);
}

function powerOfTwo() {
    display.value = Math.pow(display.value, 2);
}
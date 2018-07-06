document.querySelectorAll('.number')
    .forEach( el => el.addEventListener('click', clickNumber) );
document.querySelector('.all-clean').addEventListener('click', operationClean);
document.querySelector('.calc').addEventListener('click', operationCalc);
document.querySelector('.sqrt').addEventListener('click', operationSqrt);
document.querySelector('.power').addEventListener('click', operationPower);
const display = document.querySelector('.display');

function clickNumber(event) {
    display.value += event.target.innerText;
}

function operationClean() {
    display.value = '';
}

function operationPower() {
    display.value = Math.pow(display.value, 2);
}

function operationSqrt() {
    display.value = Math.sqrt(display.value);
}

function operationCalc() {
    display.value = eval(display.value);
}












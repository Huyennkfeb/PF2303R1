let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let resultElement = document.getElementById('result');

function add() {
    let first = +firstNumber.value;
    let second = +secondNumber.value;
    let result = first + second;
    resultElement.innerText = `${first} + ${second} = ${result};`
}
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(){
    addBtn()
});

function minus() {
    let first = +firstNumber.value;
    let second = +secondNumber.value;
    let result = first - second;
    resultElement.innerText = `${first} - ${second} = ${result};`
}

function multiplication() {
    let first = +firstNumber.value;
    let second = +secondNumber.value;
    let result = first * second;
    resultElement.innerText = `${first} * ${second} = ${result};`
}

function division() {
    let first = +firstNumber.value;
    let second = +secondNumber.value;
    let result = first / second;
    resultElement.innerText = `${first} / ${second} = ${result};`
}
'strict'
const hud = document.querySelector('.hud-content');
const numberButtons = document.querySelectorAll('.number-btn');
const btnAddtion = document.querySelector('.plus');
const btnEquals = document.querySelector('.equals');
const btnSubstract = document.querySelector('.minus');
const btnMultiply = document.querySelector('.multiply');
const btnDivide = document.querySelector('.divide');
const btnFlipSign = document.querySelector('.sign-change');
const btnPercentage = document.querySelector('.percent');
const operatorButtons = document.querySelectorAll('.operand');

let currentInput = '';
let previousInput = null;
let selectedOperator = null;

function appendNumberToDisplay(number){
    currentInput += number;
    hud.value = currentInput;
}


numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        appendNumberToDisplay(button.value);
    })
})

operatorButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        appendOperatorToDisplay(button.value);
    })
})

function clearDisplay (){
    hud.value = '';
    selectedOperator = null;
    previousInput = null;
    currentInput = '';
}

function setOperator(op) {
    if(previousInput === null) {
        previousInput = parseFloat(currentInput);
    }
    selectedOperator = op;
    currentInput = ''
}

 function flipSign() {
    currentInput = parseFloat(hud.value);

    if(!isNaN(currentInput)){
        currentInput *=-1;
        hud.value = currentInput;
    }
 }

 function appendOperatorToDisplay(operator){
    if(currentInput === ''){
       return;
    }

    if(previousInput !== ''){
        calculate();
    }
    previousInput = currentInput;
    selectedOperator = operator;
    currentInput = '';
    hud.value = previousInput + '' + selectedOperator;
}

function calculate(){
    if(previousInput !== null && selectedOperator ==='+' && currentInput !==''){
        const secondNumber = parseFloat(currentInput);
        const result = previousInput + secondNumber;
        hud.value = result;
        previousInput = result;
        selectedOperator = null;
        currentInput = '';
    }else if(previousInput !== null && selectedOperator ==='-' && currentInput !==''){
        const secondNumber = parseFloat(currentInput);
        const result = previousInput - secondNumber;
        hud.value = result;
        previousInput = result;
        selectedOperator = null;
        currentInput = '';
    }else if(previousInput !== null && selectedOperator ==='*' && currentInput !==''){
        const secondNumber = parseFloat(currentInput);
        const result = previousInput * secondNumber;
        hud.value = result;
        previousInput = result;
        selectedOperator = null;
        currentInput = '';
    }else if(previousInput !== null && selectedOperator ==='/' && currentInput !==''){
        const secondNumber = parseFloat(currentInput);
        const result = previousInput / secondNumber;
        hud.value = result;
        previousInput = result;
        selectedOperator = null;
        currentInput = '';
    }else if(previousInput !== null && selectedOperator ==='%'){
        const result = previousInput / 100;
        hud.value = result;
        previousInput = null;
        selectedOperator = null;
        currentInput = ''; 
    }
}



document.querySelector('.clear').addEventListener('click', clearDisplay);
btnAddtion.addEventListener('click',()=> setOperator('+'));
btnSubstract.addEventListener('click',()=> setOperator('-'));
btnMultiply.addEventListener('click', ()=> setOperator('*'));
btnDivide.addEventListener('click', ()=> setOperator('/'));
btnPercentage.addEventListener('click',()=> setOperator('%'))
btnEquals.addEventListener('click', ()=> calculate());
btnFlipSign.addEventListener('click', ()=> flipSign());


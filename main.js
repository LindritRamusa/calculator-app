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
    if(number ==='.' && currentInput.includes('.')){
        return;
    }
    
    if (currentInput === '' && previousInput !== null && selectedOperator === null) {
        previousInput = null;
    }
    
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

 function flipSign() {
    currentInput = parseFloat(hud.value);

    if(!isNaN(currentInput)){
        currentInput *=-1;
        hud.value = currentInput;
    }
 }

 function appendOperatorToDisplay(operator){
    if(currentInput === '' && previousInput !== null && selectedOperator === null){
        selectedOperator = operator;
        hud.value = previousInput + '' + selectedOperator;
        return;
    }
    if(currentInput === ''){
       return;
    }

    if(previousInput !== null && currentInput !== ''){
        calculate();
    } else{
        previousInput = parseFloat(currentInput);
    }
    selectedOperator = operator;
    currentInput = '';
    hud.value = previousInput + '' + selectedOperator;
}

function calculate() {
    if (selectedOperator === '%' && previousInput !== null) {
        const result = previousInput / 100;
        hud.value =  result;
        previousInput = result;
        selectedOperator = null;
        currentInput = '';
        return;
    }

    if (previousInput === null || selectedOperator === null || currentInput === '') {
        return;
    }

    const secondNumber = parseFloat(currentInput);
    let result = null;

    switch (selectedOperator) {
        case '+':
            result = previousInput + secondNumber;
            break;
        case '-':
            result = previousInput - secondNumber;
            break;
        case '*':
            result = previousInput * secondNumber;
            break;
        case '/':
            result = previousInput / secondNumber;
            break;
    }
    previousInput = result;
    hud.value = result;
    selectedOperator = null;
    currentInput = '';
}



document.querySelector('.clear').addEventListener('click', clearDisplay);
btnEquals.addEventListener('click', ()=> calculate());
btnFlipSign.addEventListener('click', ()=> flipSign());
btnPercentage.addEventListener('click', () => {
    if (currentInput !== '') {
        previousInput = parseFloat(currentInput);
    }
    selectedOperator = '%';
    calculate();
});
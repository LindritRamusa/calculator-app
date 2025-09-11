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

let currentInput = '';
let firstNumber = null;
let operator = null;

function appendNumberToDisplay(number){
    currentInput += number;
    hud.value = currentInput;

}
numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        appendNumberToDisplay(button.value);
    })
})

function clearDisplay (){
    hud.value = '';
    operator = null;
    firstNumber = null;
}

function setOperator(op) {
    if(firstNumber === null) {
        firstNumber = parseFloat(currentInput);
    }
    operator = op;
    currentInput = ''
}

 function flipSign() {
    currentInput = parseFloat(hud.value);

    if(!isNaN(currentInput)){
        currentInput *=-1;
        hud.value = currentInput;
    }
 }

function calculate(){
    if(firstNumber !== null && operator ==='+' && currentInput !==''){
        const secondNumber = parseFloat(currentInput);
        const result = firstNumber + secondNumber;
        hud.value = result;
        firstNumber = result;
        operator = null;
        currentInput = '';
    }else if(firstNumber !== null && operator ==='-' && currentInput !==''){
        const secondNumber = parseFloat(currentInput);
        const result = firstNumber - secondNumber;
        hud.value = result;
        firstNumber = result;
        operator = null;
        currentInput = '';
    }else if(firstNumber !== null && operator ==='*' && currentInput !==''){
        const secondNumber = parseFloat(currentInput);
        const result = firstNumber * secondNumber;
        hud.value = result;
        firstNumber = result;
        operator = null;
        currentInput = '';
    }else if(firstNumber !== null && operator ==='/' && currentInput !==''){
        const secondNumber = parseFloat(currentInput);
        const result = firstNumber / secondNumber;
        hud.value = result;
        firstNumber = result;
        operator = null;
        currentInput = '';
    }else if(firstNumber !== null && operator ==='%'){
        const result = firstNumber / 100;
        hud.value = result;
        firstNumber = null;
        operator = null;
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


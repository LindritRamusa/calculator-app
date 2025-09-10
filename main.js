'strict'
const hud = document.querySelector('.hud-content');
const numberButtons = document.querySelectorAll('.number-btn');

function appendNumberToDisplay(number){
    hud.value += number;
}

numberButtons.forEach(button => {
    button.addEventListener('click', ()=>{
        appendNumberToDisplay(button.value);
    })
})

function clearDisplay (){
    hud.value = '';
}

document.querySelector('.clear').addEventListener('click', clearDisplay);


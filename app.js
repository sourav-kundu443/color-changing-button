const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

let copyAllButtons = [];
for(let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
}

function buttonColorChange(buttonThingly) {
    // console.log(buttonThingly.value);
    if(buttonThingly.value === 'red') {
        buttonChangeInRed();
    }else if(buttonThingly.value === 'blue') {
        buttonChangeInBlue();
    }else if(buttonThingly.value === 'green') {
        buttonChangeInGreen();
    }else if(buttonThingly.value === 'yellow') {
        buttonChangeInYellow();
    }else if(buttonThingly.value === 'reset') {
        buttonReset();
    }else if(buttonThingly.value === 'random'){
        buttonChangeInRandom();
    }
}

function buttonChangeInRed() {
    for(let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonChangeInBlue() {
    for(let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-primary');
    }
}

const buttonChangeInGreen = () => {
    for(let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

const buttonChangeInYellow = () => {
    for(let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-warning');
    }
}

const buttonReset = () => {
    for(let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons);
    }
}

const buttonChangeInRandom = () => {
    
}
// console.log(copyAllButtons);

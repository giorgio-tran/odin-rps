const boxes = document.querySelectorAll('.box');
/* Game Functions */
let playerPoints = 0;
let cpuPoints = 0;
let selection = ["rock","paper","scissors"];
let cpuChoice = "";
let pChoice = "";

/* Animations */
boxes.forEach(box => box.addEventListener('transitionend',removeTransition));
boxes.forEach(box => box.addEventListener('click', decreaseSizeOnClick));

//obtains player choice
boxes.forEach(box => box.addEventListener('click', (box) => {
pChoice = box.currentTarget.id;
console.log(pChoice);
}));

/* Transition functions */
function decreaseSizeOnClick(e) {
    e.stopPropagation();
    e.target.classList.add('small');
}

function removeTransition(e) {
    e.stopPropagation();
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('small');
}

/* RPS Game */
//return the player's selection
function computerPlay() {
    console.log('fn computer play');
    //selects random number in the array from 0-2
    return selection[Math.floor(Math.random() * 3)];
}



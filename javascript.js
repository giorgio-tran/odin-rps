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

boxes.forEach(box => box.addEventListener('click', playARound));

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

 //play a round: compare player input with computer choice 
 function playARound(e) {
        let str1 = computerPlay();
        let str2 = e.currentTarget.id;
        //if tie, return 0
        if (str1 == str2) {
            console.log('tie');
        } else if (str1 == "rock" && str2 == "scissors"
            || str1 == "paper" && str2 == "rock"
            || str1 == "scissors" && str2 == "paper") {
            //if the computer return -1
            console.log('computer wins');
        } else {
            //else the player wins return 1
            console.log('player wins');
        }

}

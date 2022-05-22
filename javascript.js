const boxes = document.querySelectorAll('.box');
/* Game Functions */
let playerPoints = 0;
let cpuPoints = 0;
let selection = ["rock","paper","scissors"];

/* Animations */
boxes.forEach(box => box.addEventListener('transitionend',removeTransition));
boxes.forEach(box => box.addEventListener('click', decreaseSizeOnClick));

/* Play a Round */
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

 //play a round: compare player input with computer choice 
 function playARound(e) {
        let str1 = selection[Math.floor(Math.random() * 3)];

        const container = document.querySelector('.content-2');

        console.log(`cpu choice: ${str1}`);

        //specifically targets the main div
        let str2 = e.currentTarget.id;
        console.log(`player choice: ${str2}`);

        //if tie, return 0
        if (str1 == str2) {
            console.log('tie');
            container.textContent = "IT'S A TIE";
        } else if (str1 == "rock" && str2 == "scissors"
            || str1 == "paper" && str2 == "rock"
            || str1 == "scissors" && str2 == "paper") {
            //if the computer return -1
            console.log('computer wins');
            container.textContent = "CPU WINS";
        } else {
            //else the player wins return 1
            console.log('player wins');
            container.textContent = "YOU WON";
        }

}

const boxes = document.querySelectorAll('.box');
/* Game Functions */
let round = 0;
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
        const container2 = document.querySelector('.content-3');

        console.log(`cpu choice: ${str1}`);

        //specifically targets the main div
        let str2 = e.currentTarget.id;
        console.log(`player choice: ${str2}`);

        //adds to round
        //if tie, return 0
        if (str1 == str2) {
            console.log('tie');
            container.textContent = "IT'S A TIE";
            container2.textContent = `YOU: ${playerPoints} CPU: ${cpuPoints}`;
        } else if (str1 == "rock" && str2 == "scissors"
            || str1 == "paper" && str2 == "rock"
            || str1 == "scissors" && str2 == "paper") {
            cpuPoints++;
            console.log('computer wins');
            container.textContent = "CPU WINS";
            container2.textContent = `YOU: ${playerPoints} CPU: ${cpuPoints}`;
        } else {
            //else the player wins return 1
            playerPoints++;
            console.log('player wins');
            container.textContent = "YOU WON";
            container2.textContent = `YOU: ${playerPoints} CPU: ${cpuPoints}`;
        }

        round++;

        if (round == 5) {
            if (playerPoints > cpuPoints) {
                container.textContent = "CONGRATS ON THE W!";
            } else if (playerPoints < cpuPoints) {
                container.textContent = "BETTER LUCK NEXT TIME!";
            } else {
                container.textContent = "TIEEEEEEEEE"
            }
            playerPoints = 0;
            cpuPoints = 0;
            round = 0;
        }

}

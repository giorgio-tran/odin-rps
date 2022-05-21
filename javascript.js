const boxes = document.querySelectorAll('.box');

boxes.forEach(box => box.addEventListener('click', playGame));

boxes.forEach(box => box.addEventListener('transitionend',removeTransition));

boxes.forEach(box => box.addEventListener('click', decreaseSizeOnClick));

function decreaseSizeOnClick(e) {
    e.target.classList.add('small');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('small');
}

//Play a game 
function playGame(e) {
    let cpuPoints = 0;
    let playerPoints = 0;
    let selection = ["rock","paper","scissors"];
    let choice = e.currentTarget.id;
    
    function computerPlay() {
        return selection[Math.floor(Math.random() * 3)];
    }

    function playARound(computerSelection, playerSelection) {
        //if tie, return 0
        if (computerSelection === playerSelection) {
            return 0;
        } else if (computerSelection === "rock" 
            && playerSelection === "scissors"
            || computerSelection === "paper" 
            && playerSelection === "rock"
            || computerSelection === "scissors" 
            && playerSelection === "paper") {
            //if the computer return -1
            return -1;
        } else {
            //else the player wins return 1
            return 1;
        }
    }

    function game() {
        for (let i = 0; i < 5; i++) {
            const win = playARound(computerPlay, choice);
            if (win == 0) {
                console.log(win);
            } else if (win > 0) {
                playerPoints++;
                console.log(win);
            } else {
                cpuPoints++;
                console.log(win);
            }
        }
        if (playerPoints > cpuPoints) {
            console.log("victory");
        } else {
            console.log("loss");
        }
    }

    game();
}


//if box is clicked
    //id is stored
    //computer selects a random choice
    //the choices get compared via a comparator
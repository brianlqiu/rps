let playerScore = 0;
let compScore = 0;

function computerPlay() {
    const compChoiceContainer = document.querySelector('#compChoiceContainer');
    const compChoice = document.createElement('p');
    let choice = "";
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    compChoice.classList.add('compChoice');
    compChoice.textContent = 'The computer chose ' + choice.toLowerCase() + "!";
    compChoiceContainer.appendChild(compChoice);
    return choice;
}

function play(playerSelection, computerSelection) {
    const compChoiceContainer = document.querySelector('#compChoiceContainer');
    if (compChoiceContainer.childNodes.length == 2) {
        compChoiceContainer.removeChild(compChoiceContainer.childNodes[0]);
        compChoiceContainer.removeChild(compChoiceContainer.childNodes[0]);
    }
    const result = document.createElement('p');
    result.classList.add('result');
    let returnVal = 0;
    if (playerSelection === computerSelection) {
        result.textContent = 'You both chose ' + playerSelection + "!";
        returnVal = 0;;
    } else if (playerSelection < computerSelection || (playerSelection === "scissors" && computerSelection === "paper")) {
        result.textContent = 'You won! ' + playerSelection + ' beats ' + computerSelection.toLowerCase() + "!";
        incrementPlayer();
        returnVal = 1;
    } else {
        result.textContent = 'You lost! ' + computerSelection + ' beats ' + playerSelection.toLowerCase() + "!";
        incrementComp();
        returnVal = -1;
    }
    compChoiceContainer.appendChild(result);
    return returnVal;
}

function incrementPlayer() {
    playerScore++;
    document.getElementById('playerScore').innerHTML = "Your score: " + playerScore;
}

function incrementComp() {
    compScore++;
    document.getElementById('compScore').innerHTML = "Computer score: " + compScore;
}
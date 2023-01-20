
// randomly return rock paper or scissors
// generate a random number between 0 and 1
// if number if less than .3, return "rock", etc etc

const getComputerChoice = () => {
    const randomNum = Math.random();
    if (randomNum <= .33) {
        return "rock";
    }
    else if (randomNum > .33 && randomNum < .66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            return "You win! Rock beats Scissors!";
        }
        else {
            computerScore++;
            return "You lose! Paper beats Rock";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return "You win! Paper beats Rock!";
        }
        else {
            computerScore++;
            return "You lose! Scissors beats Paper";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerScore++;
            return "You win! Scissors beats Paper!";
        }
        else {
            computerScore++;
            return "You lose! Rock beats Scissors";
        }
    }
}
function updateScore() {
    const playerCounter = document.querySelector('.playerCounter')
    const computerCounter = document.querySelector('.computerCounter')
    playerCounter.textContent = playerScore;
    computerCounter.textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
}

const winner = (roundWinner) => {
    const message = document.querySelector('.message')
    if (playerScore < 5 && computerScore < 5 && roundWinner) {
        message.textContent = `${roundWinner}`;
    }
    else if (playerScore > computerScore) {
        message.textContent = 'You won the match!'
        resetGame();
    }
    else if (computerScore > playerScore) {
        message.textContent = 'You lost this match :('
        return "You lost this match :("
        resetGame();
    }
    else {
        message.textContent = '';
    }
}

function callPlayRound(e) {
    const roundWinner = playRound(e.target.classList.value, getComputerChoice());
    updateScore();
    winner(roundWinner);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', callPlayRound));


winner();
// console.log("Player:" + playerScore);
// console.log("Computer:" + computerScore);
// console.log(winner());

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


const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Enter rock paper or scissors").toLowerCase();
        console.log(playRound(playerChoice, getComputerChoice()));
    }
}

game();

const winner = () => {
    if (playerScore === computerScore) {
        return "This match is a tie!"
    }
    else if (playerScore > computerScore) {
        return "You won the match!"
    }
    else {
        return "You lost this match :("
    }
}
console.log("Player:" + playerScore);
console.log("Computer:" + computerScore);
console.log(winner());
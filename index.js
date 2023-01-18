
// randomly return rock paper or scissors
// generate a random number between 0 and 1
// if number if less than .3, return "rock", etc etc
const getComputerChoice = () => {
    const randomNum = Math.random();
    if (randomNum <= .33) {
        return "Rock";
    }
    else if (randomNum > .33 && randomNum < .66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return "You win! Rock beats Scissors!";
        }
        else {
            return "You lose! Paper beats Rock";
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You win! Paper beats Rock!";
        }
        else {
            return "You lose! Scissors beats Paper";
        }
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            return "You win! Scissors beats Paper!";
        }
        else {
            return "You lose! Rock beats Scissors";
        }
    }
}

console.log(playRound("Rock", getComputerChoice()));

const game = () => {
    for (let i = 0; i < 5; i++) {
        playRound(playerChoice, getComputerChoice());
    }
}
//create a function called getComputerChoice
//function will randomly return either rock paper or scissors


function getComputerChoice () {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return computerSelection;
    
}

let playerSelection = prompt('Lets play rock, paper scissors! Enter your choice below:')
let computerSelection = getComputerChoice();

function playRound (playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'You Lose! Paper beats Rock.'
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'You Lose! Scissors beats Paper.'
    }
    else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return 'You win! Scissors beats Paper.'
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return 'You win! Rock beats scissors.'
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return 'You win! Paper beats Rock.'
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return 'You Lose! Rock beats scissors.'
    }
    else if (computerSelection === 'rock' && playerSelection === 'rock') {
        return "It's a tie!"
    }
    else if (computerSelection === 'paper' && playerSelection === 'paper') {
        return "It's a tie!"
    }
    else if ( computerSelection === 'scissors' && playerSelection === 'scissors') {
        return "It's a tie!"
    }
    else {
        return 'Invalid input.'
    }

}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
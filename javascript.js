//create a function called getComputerChoice
//function will randomly return either rock paper or scissors


function getComputerChoice () {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return computerSelection;

}

let playerSelection = prompt('Lets play rock, paper scissors! Enter your choice below:')
let computerSelection = getComputerChoice();

//function will take 2 parameters, playerSelection and computerSelection
//will return string that declares winner "You Lose! Paper beats Rock"
//Make function's playerSelection case-insensitive (rock, ROCK, RocK)

function playRound (playerSelectionInput, computerSelectionInput) {

    playerSelection = playerSelection.toLowerCase();

    if (computerSelectionInput === 'paper' && playerSelectionInput === 'rock') {
        return 'You Lose! Paper beats Rock.'
    }
    else if (computerSelectionInput === 'scissors' && playerSelectionInput === 'paper') {
        return 'You Lose! Scissors beats Paper.'
    }
    else if (computerSelectionInput === 'paper' && playerSelectionInput === 'scissors') {
        return 'You win! Scissors beats Paper.'
    }
    else if (computerSelectionInput === 'scissors' && playerSelectionInput === 'rock') {
        return 'You win! Rock beats scissors.'
    }
    else if (computerSelectionInput === 'rock' && playerSelectionInput === 'paper') {
        return 'You win! Paper beats Rock.'
    }
    else if (computerSelectionInput === 'rock' && playerSelectionInput === 'scissors') {
        return 'You Lose! Rock beats scissors.'
    }
    else if (computerSelectionInput === 'rock' && playerSelectionInput === 'rock') {
        return "It's a tie!"
    }
    else if (    computerSelectionInput === 'paper' && playerSelectionInput === 'paper') {
        return "It's a tie!"
    }
    else if ( computerSelectionInput === 'scissors' && playerSelectionInput === 'scissors') {
        return "It's a tie!"
    }
    else {
        return 'Invalid input.'
    }

}


console.log(getComputerChoice());
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));






//function playRound (playerSelection, computerSelection) {

//}

//const playerSelection = 'rock';
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
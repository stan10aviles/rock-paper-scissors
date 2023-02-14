

function getComputerChoice () {
    let computerOptions = ['rock', 'paper', 'scissors'];
    let computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return computerSelection;
    
}


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


function game () {

    
    let results = [];

        for (let i=0; i < 5; i++) {
            let computerSelection = getComputerChoice();
            let playerSelection = prompt('Let\'s play rock, paper, scissors! There will be 5 rounds total. Enter your choice below! ');
            let roundResult = playRound(playerSelection, computerSelection);
            results.push(roundResult);
            alert(`The computer chose: ${computerSelection}.

                ${roundResult}`);
        }

    //return results
/*
    let score = {}; 
    for (let i = 0; i < results.length; i++) {
        let num = results[i];

        if (score[num]) {
            score[num] = score[num] + 1
        }
        else {
            score[num] = 1
        }
    }
*/
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i < results.length; i++)

    if (results[i] === 'You win! Paper beats Rock.' || results[i] === 'You win! Rock beats scissors.' || results[i] === 'You win! Scissors beats Paper.') {
        playerScore = playerScore + 1
    }
    else if (results[i] === 'You Lose! Paper beats Rock.' || results[i] === 'You Lose! Scissors beats Paper.' || results[i] === 'You Lose! Rock beats scissors.') {
        computerScore = computerScore + 1
    }

    //console.log(score);
   //console.log(score["It's a tie!"])
    console.log(results);
    console.log(playerScore);
    console.log(computerScore);
}





let results = game();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log(results);
console.log(roundResult);
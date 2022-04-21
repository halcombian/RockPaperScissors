//Random number generator for computerSelection
function computerPlay() {
    return Math.floor(Math.random() * 3);
}

//Function that runs the game
function game() {
    for (let i = 0; 1 < 5; i++) {
        if (i === 5 && playerScore > computerScore) {
            console.log("Game!  Player Wins");
            break;
        } else if (i === 5 && computerScore > playerScore) {
            console.log("Game!  Computer Wins");
            break;
        } else if (i === 5) {
            console.log("Game!  Tie");
            break;
        }
        const playerSelection = prompt();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log("Score: " + playerScore + " - " + computerScore);
    }
}

//Score
let playerScore = 0
let computerScore = 0

//Determines the outcome of each round
//Player "rock" outcomes
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === 0) {
        console.log("Draw!");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === 1) {
        computerScore++
        console.log("Computer Wins!  Paper beats Rock");
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === 2) {
        playerScore++
        console.log("Player Wins!  Rock beats Scissors");
    }
//Player "paper" outcomes
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === 0) {
        playerScore++
        console.log("Player Wins!  Paper beats Rock");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === 1) {
        console.log("Draw!");
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === 2) {
        computerScore++
        console.log("Computer Wins!  Scissors beats Paper");
    }
//Player "scissors" outcomes
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === 0) {
        computerScore++
        console.log("Computer Wins!  Rock beats Scissors");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === 1) {
        playerScore++
        console.log("Player Wins!  Scissors beats Papers");
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === 2) {
        console.log("Draw!");
    }
}

game();
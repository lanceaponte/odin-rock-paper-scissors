function getComputerChoice() {
    let choiceArray = ["Rock", "Paper", "Scissors"];
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalizeFirstLetter(playerSelection);
    computerSelection = capitalizeFirstLetter(computerSelection);
    let roundResult = "";

    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
        roundResult = "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection == computerSelection) {
        roundResult = "Tie";
    }
    else {
        roundResult = "You Lose! " + computerSelection + " beats " + playerSelection;
    }

    return roundResult;
}

function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

function game() {
    const ROUNDS = 5;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < ROUNDS; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?")
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult.slice(0, 7) == "You Win") {
            playerScore++;
        }
        else if (roundResult.slice(0, 8) == "You Lose") {
            computerScore++;
        }
        console.log(roundResult);

    }

    if (playerScore > computerScore) {
        gameResult = "Player Wins! Score " + playerScore + " to " + computerScore;
    }
    else if (playerScore == computerScore) {
        gameResult = "Tie"

    }
    else {
        gameResult = "You lose the game!"
    }
    return gameResult;
}

console.log(game());
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

    results.textContent = roundResult;
    return roundResult;
}

function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            let roundResult = playRound(button.id, getComputerChoice());
            if (roundResult.slice(0, 7) == "You Win") {
                playerScore++;
            }
            else if (roundResult.slice(0, 8) == "You Lose") {
                computerScore++;
            }
            if (computerScore >= 5 || playerScore >= 5) {
                if (playerScore > computerScore) {
                    gameResult = "Player wins the game!";
                }
                else if (playerScore == computerScore) {
                    gameResult = "Tie game!"

                }
                else {
                    gameResult = "You lose the game!"
                }

                results.textContent = gameResult;
            }
            score.textContent = "Player: " + playerScore + " Computer: " + computerScore;

        });
    });



    return gameResult;
}

game();

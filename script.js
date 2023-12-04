function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}


function playRound(playerSelection, computerSelection) {
    let playerChoice = capitalizeWord(playerSelection);
    let winner = "Computer";  // Default value

    if(computerSelection === playerChoice) {
        return "tie";
    }

    switch (computerSelection) {
        case "Rock":
            if(playerChoice === "Paper") {
                winner = "Player";
            }
            break;
        case "Paper":
            if(playerChoice === "Scissors") {
                winner = "Player";
            }
            break;
        case "Scissors":
            if(playerChoice == "Rock") {
                winner = "Player";
            }
    }
    return winner;
}


function resultMassage(roundResult, playerSelection, computerSelection) {
    let winnerSignal, loserSignal;
    let playerChoice = capitalizeWord(playerSelection);

    if(roundResult === "tie") {
        return "It's a TIE!"
    }
    if(roundResult === "Player") {
        winnerSignal = playerChoice;
        loserSignal = computerSelection;
    }
    else {
        winnerSignal = computerSelection;
        loserSignal = playerChoice;
    }
    return `${roundResult} Wins! ${winnerSignal} beats ${loserSignal}`;
}


function capitalizeWord(word) {
    let firstChar = word.charAt(0);
    firstChar = firstChar.toUpperCase();
    let restOfTheWord = word.slice(1).toLowerCase();
    return firstChar + restOfTheWord;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let winner;

    for(let roundNumber = 1; roundNumber <= 5; roundNumber++) {
        let playerSelection = prompt("Insert your choice: ");
        let computerSelection = getComputerChoice();
        let roundWinner = playRound(playerSelection, computerSelection);
        
        if(roundWinner === 'Computer') {
            computerWins++;
        }
        else if(roundWinner === 'Player') {
            playerWins++;
        }

        let result = resultMassage(roundWinner, playerSelection, computerSelection);
        console.log(`round ${roundNumber}: ${result}`);
    }
    if(playerWins > computerWins) {
        winner = "Player wins!";
    }
    else if(playerWins < computerWins) {
        winner = "Computer wins!";
    }
    else {
        winner = "It's a TIE!"
    }
    console.log(`Final Score:
    Player wins ${playerWins} times, computer wins ${computerWins} times.
    The match result: ${winner}`)
}
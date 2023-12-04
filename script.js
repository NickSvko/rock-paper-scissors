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
    if(roundResult === "tie") {
        return "It's a TIE!"
    }
    if(roundResult === "Player") {
        winnerSignal = playerSelection;
        loserSignal = computerSelection;
    }
    else {
        winnerSignal = computerSelection;
        loserSignal = playerSelection;
    }
    return `${roundResult} Wins! ${winnerSignal} beats ${loserSignal}`;
}


function capitalizeWord(word) {
    let firstChar = word.charAt(0);
    firstChar = firstChar.toUpperCase();
    let restOfTheWord = word.slice(1).toLowerCase();
    return firstChar + restOfTheWord;
}
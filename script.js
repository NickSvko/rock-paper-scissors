function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}


function playRound(playerSelection, computerSelection) {
    let playerChoice = capitalizeWord(playerSelection);
    let winner = "computer";  // Default value

    if(computerSelection === playerChoice) {
        return "tie";
    }

    switch (computerSelection) {
        case "Rock":
            if(playerChoice === "Paper") {
                winner = "player";
            }
            break;
        case "Paper":
            if(playerChoice === "Scissors") {
                winner = "player";
            }
            break;
        case "Scissors":
            if(playerChoice == "Rock") {
                winner = "player";
            }
    }
    return winner;
}


function roundResult(playerResult, playerSelection, computerSelection) {
    let winner, looser;

    if( playerResult === "Win") {
        winner = playerSelection;
        looser = computerSelection;
    }
    else {
        winner = computerSelection;
        looser = playerSelection;
    }
    return `You ${playerResult}! ${winner} beats ${looser}`;
}


function capitalizeWord(word) {
    let firstChar = word.charAt(0);
    firstChar = firstChar.toUpperCase();
    let restOfTheWord = word.slice(1).toLowerCase();
    return firstChar + restOfTheWord;
}
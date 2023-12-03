function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}


function playRound(playerSelection, computerSelection) {
    let playerChoice = capitalizeWord(playerSelection);
    let playerResult = "Lose";

    switch (computerSelection) {
        case "Rock":
            if(playerChoice === "Paper") {
                playerResult = "Win";
            }
            break;
        case "Paper":
            if(playerChoice === "Scissors") {
                playerResult = "Win";
            }
            break;
        case "Scissors":
            if(playerChoice == "Rock") {
                playerResult = "Win";
            }
    }

    return roundResult(playerResult, playerChoice, computerSelection);
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
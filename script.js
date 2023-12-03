function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}


function roundResult(state, playerSelection, computerSelection) {
    let winner, looser;

    if(state == "Win") {
        winner = playerSelection;
        looser = computerSelection;
    }
    else {
        winner = computerSelection;
        looser = playerSelection;
    }
    return `You ${state}! ${winner} beats ${looser}`;
}


function capitalizeWord(word) {
    firstChar = word.charAt(0);
    firstChar = firstChar.toUpperCase();
    restOfTheWord = word.slice(1).toLowerCase();
    return firstChar + restOfTheWord;
}
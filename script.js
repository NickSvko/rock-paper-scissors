function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}

const log = console.log;
console.clear();
let playerChoice = "";
let computerChoice = "";

function getComputerChoice() {
  let random = Math.random() * 3;
  let choice = "";

  if (random < 1) {
    choice = "Rock";
  } else if (random > 1 && random < 2) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  return choice;
}
log(getComputerChoice());

function getPlayerChoice() {
  let choice = "";
  choice = prompt("Enter your choice between Rock, Paper or Scissors");

  if (
    choice != null &&
    (choice.toLowerCase() === "rock" ||
      choice.toLowerCase() === "paper" ||
      choice.toLowerCase() === "scissors")
  ) {
    playerChoice = choice.toLowerCase();
  } else {
    alert("Enter a valid choice!");
    getPlayerChoice();
  }
  return playerChoice;
}
playerChoice = getPlayerChoice();

log(playerChoice);

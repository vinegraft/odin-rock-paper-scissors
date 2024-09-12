const log = console.log;
console.clear();
let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.random() * 3;
  let choice = "";

  if (random < 1) {
    choice = "rock";
  } else if (random > 1 && random < 2) {
    choice = "paper";
  } else {
    choice = "rcissors";
  }
  return choice;
}

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

function playRound() {
  playerChoice = getPlayerChoice();
  computerChoice = getComputerChoice();

  if (computerChoice === "rock") {
    if (playerChoice === "rock") {
      alert("Computer chose Rock. It's a tie!");
    } else if (playerChoice === "paper") {
      alert("Computer chose Rock. You win!");
      playerScore += 1;
    } else {
      alert("Computer chose Rock. You lose!");
      computerScore += 1;
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "rock") {
      alert("Computer chose Paper. You lose!");
      computerScore += 1;
    } else if (playerChoice === "paper") {
      alert("Computer chose Paper. It's a tie!");
    } else {
      alert("Computer chose Paper. You win!");
      playerScore += 1;
    }
  } else {
    if (playerChoice === "rock") {
      alert("Computer chose Scissors. You win!");
      playerScore += 1;
    } else if (playerChoice === "paper") {
      alert("Computer chose Scissors. You lose!");
      computerScore += 1;
    } else {
      alert("Computer chose Scissors. It's a tie!");
    }
  }
}

playRound();

log(`Computer choice: ${computerChoice}`);
log(`Player choice: ${playerChoice}`);
log(`Computer score: ${computerScore}`);
log(`Player score: ${playerScore}`);

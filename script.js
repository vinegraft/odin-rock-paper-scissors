let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;

function getComputerChoice() {
  let random = Math.random() * 3;
  let choice = "";

  if (random <= 1) {
    choice = "rock";
  } else if (random > 1 && random <= 2) {
    choice = "paper";
  } else {
    choice = "rcissors";
  }
  return choice;
}

function getPlayerChoice() {
  let choice = "";
  choice = prompt(
    `Round ${gameRound}!\nEnter your choice between Rock, Paper or Scissors.`
  );

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
      alert("Computer chose Rock.\nIt's a tie!");
    } else if (playerChoice === "paper") {
      alert("Computer chose Rock.\nYou win!");
      playerScore++;
    } else {
      alert("Computer chose Rock.\nYou lose!");
      computerScore++;
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "rock") {
      alert("Computer chose Paper.\nYou lose!");
      computerScore++;
    } else if (playerChoice === "paper") {
      alert("Computer chose Paper.\nIt's a tie!");
    } else {
      alert("Computer chose Paper.\nYou win!");
      playerScore++;
    }
  } else {
    if (playerChoice === "rock") {
      alert("Computer chose Scissors.\nYou win!");
      playerScore++;
    } else if (playerChoice === "paper") {
      alert("Computer chose Scissors.\nYou lose!");
      computerScore++;
    } else {
      alert("Computer chose Scissors.\nIt's a tie!");
    }
  }
}

function playGame(rounds) {
  alert(`Get ready for ${rounds} rounds of Rock, Paper, Scissors!`);
  for (let i = 0; i < rounds; i++) {
    gameRound++;
    playRound();
    alert(`Your score: ${playerScore}\nComputer score: ${computerScore}`);
  }

  if (playerScore > computerScore) {
    alert("You won the match!");
  } else if (playerScore < computerScore) {
    alert("You lost the match!");
  } else {
    alert("You tied the match!");
  }
}
playGame(5);

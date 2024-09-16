let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
let rounds = 5;

const textContainer = document.querySelector(".text-container");
textContainer.textContent = `Get ready for ${rounds} rounds of Rock, Paper, Scissors!\r\nChoose your weapon!`;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (gameRound < rounds) {
      playRound(button.textContent);
    }
  });
});

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

function playRound(weapon) {
  playerChoice = weapon;
  computerChoice = getComputerChoice();

  if (computerChoice === "rock") {
    if (playerChoice === "rock") {
      textContainer.textContent = "Computer chose Rock.\r\nIt's a tie!";
    } else if (playerChoice === "paper") {
      textContainer.textContent = "Computer chose Rock.\r\nYou win!";
      playerScore++;
    } else {
      textContainer.textContent = "Computer chose Rock.\r\nYou lose!";
      computerScore++;
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "rock") {
      textContainer.textContent = "Computer chose Paper.\r\nYou lose!";
      computerScore++;
    } else if (playerChoice === "paper") {
      textContainer.textContent = "Computer chose Paper.\r\nIt's a tie!";
    } else {
      textContainer.textContent = "Computer chose Paper.\r\nYou win!";
      playerScore++;
    }
  } else {
    if (playerChoice === "rock") {
      textContainer.textContent = "Computer chose Scissors.\r\nYou win!";
      playerScore++;
    } else if (playerChoice === "paper") {
      textContainer.textContent = "Computer chose Scissors.\r\nYou lose!";
      computerScore++;
    } else {
      textContainer.textContent = "Computer chose Scissors.\r\nIt's a tie!";
    }
  }

  textContainer.textContent += `\r\nYour score: ${playerScore}\r\nComputer score: ${computerScore}`;
  gameRound++;

  if (gameRound >= rounds && playerScore > computerScore) {
    textContainer.textContent += "\r\nYou won the match!";
  } else if (gameRound >= rounds && playerScore < computerScore) {
    textContainer.textContent += "\r\nYou lost the match!";
  } else if (gameRound >= rounds) {
    textContainer.textContent += "\r\nYou tied the match!";
  }
}

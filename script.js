const log = console.log;
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

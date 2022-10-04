function getComputerChoice() {
  let rps = ["rock", "paper", "scissors"];
  let random = rps[Math.floor(Math.random() * rps.length)];
  return random;
}

function playRound(userInput, computerSelection) {
  if (userInput === computerSelection) {
    return "It's a draw!";
  } else if (userInput === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors";
  } else if (userInput === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats rock";
  } else if (userInput === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock";
  } else if (userInput === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat paper";
  } else if (userInput === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beat paper";
  } else if (userInput === "scissors" && computerSelection === "rock") {
    return "You lose!Rock beats scissors";
  }
}
for (let i = 0; i < 5; i++) {
  let computerSelection = getComputerChoice();
  let userInput = prompt("Choose your weapon");
  console.log("Round" + i + " Computer picks: " + computerSelection);
  console.log("Round" + i + " User picks: " + userInput);
  console.log(playRound(userInput, computerSelection));
}

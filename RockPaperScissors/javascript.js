function getComputerChoice() {
  let rps = ["rock", "paper", "scissors"];
  let random = rps[Math.floor(Math.random() * rps.length)];
  return random;
}

function playRound(userInput, computerSelection) {
  if (userInput === computerSelection) {
    return 0;
  } else if (userInput === "rock" && computerSelection === "scissors") {
    return 1;
  } else if (userInput === "rock" && computerSelection === "paper") {
    return 2;
  } else if (userInput === "paper" && computerSelection === "rock") {
    return 1;
  } else if (userInput === "paper" && computerSelection === "scissors") {
    return 2;
  } else if (userInput === "scissors" && computerSelection === "paper") {
    return 1;
  } else if (userInput === "scissors" && computerSelection === "rock") {
    return 2;
  }
}

let playerScore = 0;
let computerScore = 0;

const body = document.querySelector("body");

const score = document.createElement("div");
score.classList.add("scoreKeeper");
score.style.border = "1px solid black";
score.style.backgroundColor = "#486670";
score.style.color = "white";
score.style.fontWeight = "bold";
score.style.textTransform = "uppercase";
score.style.marginTop = "25px";
score.style.textAlign = "center";
score.style.padding = "25px";
body.appendChild(score);

const winner = document.createElement("div");
winner.classList.add("gameWinner");
winner.style.border = "1px solid black";
winner.style.backgroundColor = "#486670";
winner.style.color = "white";
winner.style.fontWeight = "bold";
winner.style.textTransform = "uppercase";
winner.style.marginTop = "25px";
winner.style.textAlign = "center";
winner.style.padding = "25px";
winner.style.width = "60%";
winner.style.display = "none";
body.appendChild(winner);

const picks = document.createElement("p");
picks.classList.add("gamePicks");
picks.style.backgroundColor = "#486670";
winner.appendChild(picks);

const displayWinner = document.createElement("p");
displayWinner.classList.add("whoWon");
displayWinner.style.backgroundColor = "#486670";
displayWinner.style.marginTop = "50px";
displayWinner.style.fontSize = "20px";
winner.appendChild(displayWinner);

const player = document.createElement("section");
player.classList.add("playerTracker");
player.textContent = "Player Score = " + playerScore;
player.style.backgroundColor = "#486670";
player.style.marginBottom = "15px";
score.appendChild(player);

const computer = document.createElement("section");
computer.classList.add("computerTracker");
computer.textContent = "Computer Score = " + computerScore;
computer.style.backgroundColor = "#486670";
score.appendChild(computer);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let userInput = button.id;
    winner.style.display = "initial";

    if (userInput === "reset") {
      playerScore = 0;
      player.textContent = "Player Score = " + playerScore;
      computerScore = 0;
      computer.textContent = "Computer Score = " + computerScore;
      winner.style.display = "none";
    }
    if (playerScore === 5 || computerScore === 5) {
      playerScore = 0;
      computerScore = 0;
      player.textContent = "Player Score = " + playerScore;
      computer.textContent = "Computer Score = " + computerScore;
      winner.style.display = "none";
      return;
    }

    let computerSelection = getComputerChoice();
    result = playRound(userInput, computerSelection);

    if (result === 0) {
      picks.textContent =
        "Player chooses " +
        userInput +
        " and " +
        "Computer chooses " +
        computerSelection;
      displayWinner.style.display = "none";
    }

    if (result === 1) {
      playerScore += 1;
      player.textContent = "Player Score = " + playerScore;
      picks.textContent =
        "Player chooses " +
        userInput +
        " and " +
        "Computer chooses " +
        computerSelection;
      displayWinner.style.display = "none";
      if (playerScore === 5) {
        displayWinner.style.display = "initial";
        displayWinner.textContent = "PLAYER WINS THE GAME!!!";
      }
    } else if (result === 2) {
      computerScore += 1;
      computer.textContent = "Computer Score = " + computerScore;
      picks.textContent =
        "Player chooses " +
        userInput +
        " and " +
        "Computer chooses " +
        computerSelection;
      displayWinner.style.display = "none";
      if (computerScore === 5) {
        displayWinner.style.display = "initial";
        displayWinner.textContent = "COMPUTER WINS THE GAME :(";
      }
    }
  });
});

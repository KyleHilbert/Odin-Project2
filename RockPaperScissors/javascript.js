
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
body.appendChild(score);

const player = document.createElement("section");
player.classList.add("playerTracker");
player.textContent = "Player Score = " + playerScore;
score.appendChild(player);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (playerScore === 5 || computerScore === 5) {
      return;
    } 
    else {
      let userInput = button.id;
      let computerSelection = getComputerChoice();
      //console.log("User: " + button.id + " Score: " + playerScore); 
      //console.log("Computer: " + computerSelection + " Score: " + computerScore);
      result = playRound(userInput, computerSelection);
      //console.log(result);
      if (result === 1) {
        playerScore += 1;
        player.textContent = "Player Score = " + playerScore;
        score.appendChild(player);
        if (playerScore === 5) {
          console.log("PLAYER WINS GAME!!!");
        }
      } else if (result === 2) {
        computerScore += 1;
        if (computerScore === 5) {
          console.log("COMPUTER WINS GAME!!!");
        }
      }
    }
  });
});





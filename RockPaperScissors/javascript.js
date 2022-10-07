
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

let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll('button');

// console.log(buttons); // list of buttons 

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (playerScore ===5 || computerScore ===5) {
      return;
    } 
    else {
      let userInput = button.id;
      let computerSelection = getComputerChoice();
      console.log("User: " + button.id + " Score: " + playerScore); 
      console.log("Computer: " + computerSelection + " Score: " + computerScore);
      result = playRound(userInput, computerSelection);
      console.log(result);
      if (result === "It's a draw!") {
        playerScore += 1;
        console.log(playerScore);
      }


      //let userInput = button.id; // Sets user input to button they click
      //let computerSelection = getComputerChoice();
      //console.log(button.id); 
      //console.log(computerSelection);
      //alert(playRound(userInput, computerSelection));

    }
  });
});





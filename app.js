let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice == 0) return "rock";
  if (choice == 1) return "paper";
  if (choice == 2) return "scissors";
}

function getHumanChoice() {
  let flag = false;
  let userInput;

  while (!flag) {
    userInput = prompt("Choose rock, paper or scissors").toLowerCase();

    if (
      userInput === "rock" ||
      userInput === "scissors" ||
      userInput === "paper"
    ) {
      flag = true;
    }
  }

  return userInput;
}

function playRound(humanChoice, computerChoice) {
  let won =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  let tie = humanChoice === computerChoice;
  if (won) {
    humanScore++;
    return "You win, rock beats paper";
  }

  return "You lose " + computerChoice;
}

console.log(playRound(getHumanChoice(), getComputerChoice()));


const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const result = document.querySelector("#result");

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice == 0) return "rock";
  if (randomChoice == 1) return "paper";
  if (randomChoice == 2) return "scissors";
}

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = this.dataset.choice;

  let win =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  let tie = humanChoice === computerChoice;

  if (win) {
    result.innerText = `You win, ${humanChoice} beats ${computerChoice}`;
    return 0;
  } else if (tie) {
    result.innerText = "You tie";
    return 1;
  } else {
    result.innerText = `You lose, ${computerChoice} beats ${humanChoice}`;
    return 2;
  }
}

function playGame(numOfRounds) {
  let humanScore = 0;
  let computerScore = 0;

  for (i = 1; i <= numOfRounds; i++) {
    let game = playRound(getHumanChoice(), getComputerChoice());
    
    if (game === 0) humanScore++;
    if (game === 2) computerScore++;
  }

  console.log(
    `The game ended, 
    ${
      humanScore === computerScore
        ? "you tied..."
        : humanScore > computerScore
        ? "you win... "
        : "you lost..."
    } 
    YOU: ${humanScore} pts - COMPUTER ${computerScore} pts`
  );
}



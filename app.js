function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice == 0) return "rock";
  if (randomChoice == 1) return "paper";
  if (randomChoice == 2) return "scissors";
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
  let win =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  let tie = humanChoice === computerChoice;

  if (win) {
    console.log(`You win, ${humanChoice} beats ${computerChoice}`);
    return 0;
  } else if (tie) {
    console.log("You tie");
    return 1;
  } else {
    console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
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

playGame(5);

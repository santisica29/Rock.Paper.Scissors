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
  let nums = 0;

  for (i = 1; i <= numOfRounds; i++) {
    let game = playRound(getHumanChoice(), getComputerChoice());
    if (game === 0) {
      humanScore++;
    } else if (game === 2) {
      computerScore++;
    }

    nums++;
  }

  console.log(
    `The game ended, 
    ${(humanScore === computerScore) ? "you tied..." : (humanScore > computerScore) ? "you win... " : "you lost..."} 
    YOU: ${humanScore} pts - COMPUTER ${computerScore} pts`
  );

}

playGame(5);

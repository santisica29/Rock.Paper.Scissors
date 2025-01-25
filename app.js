let humanScore = 0;
let compScore = 0;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const btnReset = document.querySelector("#reset");
const result = document.querySelector("#result");

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);
btnReset.addEventListener('click', () => {
  humanScore = 0;
  compScore = 0;
  result.innerText = '';
})

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice == 0) return "rock";
  if (randomChoice == 1) return "paper";
  if (randomChoice == 2) return "scissors";
}

function playRound() {

  if (humanScore === 5 || compScore === 5){
    return;
  }

  let computerChoice = getComputerChoice();
  let humanChoice = this.dataset.choice;

  let win =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  let tie = humanChoice === computerChoice;

  if (win) {
    result.innerText = `You win, ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (tie) {
    result.innerText = "You tie";
  } else {
    result.innerText = `You lose, ${computerChoice} beats ${humanChoice}`;
    compScore++;
  }

  result.innerText += `\nYou: ${humanScore} - Comp: ${compScore}`;

  if (humanScore === 5 || compScore === 5){
    gameOver();
    return;
  }
}

function gameOver(){
  result.innerText = `Game Over ${humanScore} - ${compScore}\n ${humanScore > compScore ? 'You win' : 'You lose'}\n Press reset for a new game`;
}

// function playGame(numOfRounds) {
//   let humanScore = 0;
//   let computerScore = 0;

//   for (i = 1; i <= numOfRounds; i++) {
//     let game = playRound(getHumanChoice(), getComputerChoice());
    
//     if (game === 0) humanScore++;
//     if (game === 2) computerScore++;
//   }

//   console.log(
//     `The game ended, 
//     ${
//       humanScore === computerScore
//         ? "you tied..."
//         : humanScore > computerScore
//         ? "you win... "
//         : "you lost..."
//     } 
//     YOU: ${humanScore} pts - COMPUTER ${computerScore} pts`
//   );
// }



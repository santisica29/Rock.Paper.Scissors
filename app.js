let humanScore = 0;
let compScore = 0;

const btnReset = document.querySelector("#reset");
const result = document.querySelector("#result");

const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    
    const playerSelection = e.target.getAttribute('data-choice');
    playRound(playerSelection)
  })
})

btnReset.addEventListener('click', () => {
  humanScore = 0;
  compScore = 0;
  result.innerText = '';
})

function getComputerChoice() {
  let options = ['rock', 'paper', 'scissors'];
  let randomChoice = Math.floor(Math.random() * 3);

  return options[randomChoice];
}

function playRound(humanChoice) {

  if (humanScore === 5 || compScore === 5){
    return;
  }

  let computerChoice = getComputerChoice();
  //let humanChoice = this.dataset.choice;

  let win =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  let tie = humanChoice === computerChoice;

  result.innerText = `${humanChoice.toUpperCase()} vs. ${computerChoice.toLocaleUpperCase()}\n`

  if (win) {
    result.innerText += `You win, ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (tie) {
    result.innerText += "You tie";
  } else {
    result.innerText += `You lose, ${computerChoice} beats ${humanChoice}`;
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



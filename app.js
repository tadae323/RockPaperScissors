let userScore = 0;
let computerScore = 0;


// caching the DOM 
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");



function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  const computerSelection = options[Math.floor(Math.random() * 3)];

  return computerSelection;
}

function win(playerSelection, computerSelection) {
  userScore++;
  userScore_span.innerHTML= userScore;
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  result_div.innerHTML = `${playerSelection} beats ${computerSelection}. You win!`
}

function lose(playerSelection, computerSelection) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  result_div.innerHTML = `${playerSelection} loses to ${computerSelection}. Computer wins!`;
}

function draw(playerSelection) {
  result_div.innerHTML = `Both players selected ${playerSelection}. Draw!`;
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    draw(playerSelection);
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      lose(playerSelection, computerSelection);
    } else if (computerSelection === "scissors") {
      win(playerSelection, computerSelection);
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      lose(playerSelection, computerSelection);
    } else if (computerSelection === "rock") {
      win(playerSelection, computerSelection);
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      lose(playerSelection, computerSelection);
    } else if (computerSelection === "paper") {
      win(playerSelection, computerSelection);
    }
  }
}


function game() {
  rock_div.addEventListener('click', function() {
    playRound("rock");
  })
  paper_div.addEventListener('click', function() {
    playRound("paper");
  })
  scissors_div.addEventListener('click', function() {
    playRound("scissors")
  })
}

game();



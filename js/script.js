function computerPlay() {
  let randomNumber = Math.random();

  if (randomNumber < 0.33) {
      return "rock";
  } else if (randomNumber < 0.66) {
      return "paper";
  } else {
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock" && computerSelection === "rock") {
      return "It's a tie! Try again.";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
      return "You lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win! Rock beats Scissors.";
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
      return "It's a tie! Try again.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return "You lose! Scissors beats paper.";
  }

  if (playerSelection === "scissors" && computerSelection === "rock") {
      return "You lose! Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You win! Scissors beats paper.";
  } else {
      return "It's a tie! Try again.";
  }
}

let playerSelection = "rock";
let computerSelection = computerPlay();

console.log("You chose " + playerSelection);
console.log("Computer chose " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
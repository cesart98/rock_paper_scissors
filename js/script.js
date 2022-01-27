function computerSelection() {
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


function playerSelection() {
    const buttonRock = document.querySelector(".rock");
    const buttonPaper = document.querySelector(".paper");
    const buttonScissors = document.querySelector(".scissors");

    buttonRock.addEventListener("click", () => "rock")
    buttonPaper.addEventListener("click", () => "paper")
    buttonScissors.addEventListener("click", () => "scissors")
}

console.log(playRound());

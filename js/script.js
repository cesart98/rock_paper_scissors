
// Code for single round of rock paper scissors
/*
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
*/

// Code for 5 round game of rock paper scissors

        function game() {

            function playerPlay() {
                let playerInput = prompt("Rock, paper, or scissors?")

                if (playerInput.toLowerCase() === "rock") {
                    return "rock";
                } else if (playerInput.toLowerCase() === "paper") {
                    return "paper";
                } else if (playerInput.toLowerCase() === "scissors") {
                    return "scissors";
                }
            }

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

                let result;

                if (playerSelection === "rock" && computerSelection === "rock") {
                    result = "It's a tie this round! Try again.";
                } else if (playerSelection === "rock" && computerSelection === "paper") {
                    result = "You lose this round! Paper beats rock.";
                    computerScore = ++computerScore;
                } else if (playerSelection === "rock" && computerSelection === "scissors") {
                    result = "You win this round! Rock beats Scissors.";
                    playerScore = ++playerScore;
                }

                if (playerSelection === "paper" && computerSelection === "rock") {
                    result = "You win this round! Paper beats rock.";
                    playerScore = ++playerScore;
                } else if (playerSelection === "paper" && computerSelection === "paper") {
                    result = "It's a tie this round! Try again.";
                } else if (playerSelection === "paper" && computerSelection === "scissors") {
                    result = "You lose this round! Scissors beats paper.";
                    computerScore = ++computerScore;
                }

                if (playerSelection === "scissors" && computerSelection === "rock") {
                    result = "You lose this round! Rock beats scissors.";
                    computerScore = ++computerScore;
                } else if (playerSelection === "scissors" && computerSelection === "paper") {
                    result = "You win this round! Scissors beats paper.";
                    playerScore = ++playerScore;
                } else if (playerSelection === "scissors" && computerSelection === "scissors") {
                    result = "It's a tie this round! Try again.";
                }

                return result;

            }

            let playerSelection = playerPlay();
            let computerSelection = computerPlay();

            console.log("You chose " + playerSelection);
            console.log("Computer chose " + computerSelection);
            return playRound(playerSelection, computerSelection);
        }

        let playerScore;
        let computerScore;

        function resetScore () {
            playerScore = 0;
            computerScore = 0;
            console.log("Scores reset.")
        }

        function announceScore () {
            console.log("Your score: " + playerScore + " | Computer score: " + computerScore);
        }

        function announceFinal () {
            if (playerScore > computerScore) {
                console.log("Congratulations! You won this game! Refresh to try again.")
            } else if (playerScore < computerScore) {
                console.log("Sorry! You lost this game. Refresh to try again.")
            } else if (playerScore = computerScore) {
                console.log("It's a tie! Refresh to try again.")
            }
        }

        resetScore();
        announceScore();
        console.log("Beginning round 1...")
        console.log(game());
        announceScore();

        console.log("Beginning round 2...")
        console.log(game());
        announceScore();

        console.log("Beginning round 3...")
        console.log(game());
        announceScore();

        console.log("Beginning round 4...")
        console.log(game());
        announceScore();

        console.log("Beginning round 5...")
        console.log(game());
        announceScore();

        announceFinal();

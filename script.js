let userScore = 0;
let computerScore = 0;

function getUserChoice() {
    const input = prompt("Enter your choice of either rock, paper, or scissors:");
    console.log("You entered: ", input);
    return input.toLowerCase(); // Convert user input to lowercase for case insensitivity
}

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    let choice;

    if (randomNum === 0) {
        choice = "rock";
    } else if (randomNum === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function whoWins(choice, input) {
    if (input === choice) {
        return "Draw!! User and computer chose the same, please play again.";
    } else if (
        (input === "paper" && choice === "rock") ||
        (input === "scissors" && choice === "paper") ||
        (input === "rock" && choice === "scissors")
    ) {
        userScore++;
        return `User wins this round! (${input} beats ${choice})`;
    } else {
        computerScore++;
        return `Computer wins this round! (${choice} beats ${input})`;
    }
}

function playGame() {
    while (userScore < 3 && computerScore < 3) {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        const result = whoWins(computerChoice, userChoice);

        console.log(result);
        console.log(`Score - User: ${userScore}, Computer: ${computerScore}`);
    }

    if (userScore === 3) {
        console.log("User wins the game!");
    } else {
        console.log("Computer wins the game!");
    }
}

// Call playGame to start the game
playGame();

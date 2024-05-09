// Initialize scores
let wins = 0;
let losses = 0;
let ties = 0;

// Attach event listeners only once
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("rock").addEventListener("click", () => playGame("rock"));
    document.getElementById("paper").addEventListener("click", () => playGame("paper"));
    document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
});

// Game logic
function playGame(userChoice) {
    // Choices available
    const choices = ["rock", "paper", "scissors"];
    
    // Random computer choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    // Determine the winner
    let result;
    if (userChoice === computerChoice) {
        result = `It's a tie! Both chose ${userChoice}.`;
        ties++;
        updateScoreboard();
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You win! ${userChoice} beats ${computerChoice}.`;
        wins++;
        updateScoreboard();
    } else {
        result = `You lose! ${computerChoice} beats ${userChoice}.`;
        losses++;
        updateScoreboard();
    }
    
    // Display the result
    document.getElementById("result").innerText = result;
}

// Function to update the scoreboard
function updateScoreboard() {
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    document.getElementById("ties").innerText = ties;
}

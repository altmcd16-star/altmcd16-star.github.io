// Game State Variables
let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];
const emojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

// DOM Elements
const playerChoiceDisplay = document.getElementById('player-choice-display');
const computerChoiceDisplay = document.getElementById('computer-choice-display');
const resultText = document.getElementById('result-text');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetBtn = document.getElementById('reset-btn');

// Add Event Listeners to Buttons
choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('data-choice');
        playRound(playerChoice);
    });
});

resetBtn.addEventListener('click', resetGame);

// Main Game Logic
function playRound(playerChoice) {
    // 1. Generate computer choice
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    // 2. Update display emojis
    playerChoiceDisplay.textContent = emojis[playerChoice];
    computerChoiceDisplay.textContent = emojis[computerChoice];

    // 3. Reset utility styling classes
    resultText.className = '';

    // 4. Evaluate winner
    if (playerChoice === computerChoice) {
        resultText.textContent = "It's a Tie!";
        resultText.classList.add('tie');
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText.textContent = "You Win! 🎉";
        resultText.classList.add('win');
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else {
        resultText.textContent = "Computer Wins! 😢";
        resultText.classList.add('lose');
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}

// Reset Function
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    playerChoiceDisplay.textContent = '❓';
    computerChoiceDisplay.textContent = '❓';
    resultText.textContent = 'Choose your weapon!';
    resultText.className = '';
}

let hoverboard = document.getElementById("hoverboard");
let gameArea = document.getElementById("game-area");
let timerDisplay = document.getElementById("timer");
let scoreDisplay = document.getElementById("score");
let startButton = document.getElementById("start-btn");
let gameOverScreen = document.getElementById("game-over");
let finalScore = document.getElementById("final-score");
let playAgainButton = document.getElementById("play-again-btn");

let score = 0;
let timeLeft = 30;
let gameActive = false;

// Function to move hoverboard randomly
function moveHoverboard() {
    if (!gameActive) return;

    let maxX = gameArea.clientWidth - hoverboard.clientWidth;
    let maxY = gameArea.clientHeight - hoverboard.clientHeight;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    hoverboard.style.left = randomX + "px";
    hoverboard.style.top = randomY + "px";
}

// Function to update timer
function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timerDisplay.textContent = `Time: ${timeLeft}s`;
    } else {
        endGame();
    }
}

// Function to start the game
function startGame() {
    score = 0;
    timeLeft = 30;
    gameActive = true;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time: ${timeLeft}s`;
    gameOverScreen.style.display = "none";

    hoverboard.addEventListener("mouseenter", () => {
        if (gameActive) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            moveHoverboard();
        }
    });

    let timerInterval = setInterval(() => {
        if (!gameActive) {
            clearInterval(timerInterval);
        } else {
            updateTimer();
        }
    }, 1000);
}

// Function to end the game
function endGame() {
    gameActive = false;
    finalScore.textContent = `Your Score: ${score}`;
    gameOverScreen.style.display = "block";
}

// Event Listeners
startButton.addEventListener("click", startGame);
playAgainButton.addEventListener("click", startGame);
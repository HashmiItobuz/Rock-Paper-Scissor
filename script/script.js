const startBtn = document.getElementById("playButton");
const player = document.getElementById("playerChoice");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const computerContainer = document.getElementById("computerContainer");
const rockIcon = document.getElementById("rockIcon");
const paperIcon = document.getElementById("paperIcon");
const scissorIcon = document.getElementById("scissorIcon");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("compScore");
const scoreBoard = document.getElementById("scoreBoard");
const gameContainer = document.getElementById("gameContainer");
const playerContainer = document.getElementById("playerContainer");
const resultText = document.getElementById("result-text");
const playAgainBtn = document.getElementById("playAgain");
const gameEnd = document.getElementById("gameEnd");

let result = 0;
let playerPoint = 0;
let computerPoint = 0;

playAgainBtn.classList.add("hidden");
startBtn.addEventListener("click", allBtns);

function allBtns() {
    document.getElementById("scoreBoard").classList.remove("game-box");

    player.innerText = "Make Your Move";
    rockBtn.addEventListener("click", () => {
        result = randomNumber();
        gameOn();
        rockScore();
    });

    paperBtn.addEventListener("click", () => {
        result = randomNumber();
        gameOn();
        paperScore();
    });

    scissorBtn.addEventListener("click", () => {
        result = randomNumber();
        gameOn();
        scissorScore();
    });
}

function randomNumber(maxLimit = 3) {
    let rand = Math.random() * maxLimit + 1;
    rand = parseInt(Math.floor(rand));
    return rand;
}

function gameOn() {
    if (result === 1) {
        rockIcon.classList.remove("hidden");
        paperIcon.classList.add("hidden");
        scissorIcon.classList.add("hidden");
    } else if (result === 2) {
        rockIcon.classList.add("hidden");
        paperIcon.classList.remove("hidden");
        scissorIcon.classList.add("hidden");
    } else {
        rockIcon.classList.add("hidden");
        paperIcon.classList.add("hidden");
        scissorIcon.classList.remove("hidden");
    }
}

function rockScore() {
    if (result === 1) {

    } else if (result === 2) {
        computerPoint++;
        computerScore.innerHTML = computerPoint;
    } else {
        playerPoint++;
        playerScore.innerHTML = playerPoint;
    }
    pointReset();
}

function paperScore() {
    if (result === 1) {
        playerPoint++;
        playerScore.innerHTML = playerPoint;
    } else if (result === 2) {

    } else {
        computerPoint++;
        computerScore.innerHTML = computerPoint;
    }
    pointReset();
}

function scissorScore() {
    if (result === 1) {
        computerPoint++;
        computerScore.innerHTML = computerPoint;
    } else if (result === 2) {
        playerPoint++;
        playerScore.innerHTML = playerPoint;
    } else {

    }
    pointReset();
}

function pointReset() {
    if (playerPoint === 5) {
        gameEnd.innerHTML = "Congratulation!!! You Win the game";
        document.getElementById("scoreBoard").classList.add("game-box");
        startBtn.style.display = "none";
        playAgainBtn.classList.remove("hidden");
    }
    else if (computerPoint === 5) {
        gameEnd.innerHTML = "Computer Win the game";
        document.getElementById("scoreBoard").classList.add("game-box");
        startBtn.style.display = "none";
        playAgainBtn.classList.remove("hidden");
    }
}

playAgainBtn.addEventListener("click", () => {
    playAgainBtn.classList.add("hidden");
    startBtn.style.display = "block";
    gameEnd.classList.add("hidden");
    document.getElementById("scoreBoard").classList.add("game-box");
    window.location.reload();
});























































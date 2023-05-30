let startBtn = document.getElementById("playButton");
let player = document.getElementById("playerChoice");
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissor");
let compContainer = document.getElementById("computerContainer");
let rockIcon = document.getElementById("rockIcon");
let paperIcon = document.getElementById("paperIcon");
let scissorIcon = document.getElementById("scissorIcon");
let playerScore = document.getElementById("playerScore");
let compScore = document.getElementById("compScore");
let scoreBoard = document.getElementById("scoreBoard");
let gameContainer = document.getElementById("gameContainer");
let playerContainer = document.getElementById("playerContainer");
let resultText = document.getElementById("result-text");

let result = 0;


startBtn.addEventListener("click", () => {
    player.innerText = "Make Your Move";
    allBtns();
});

function allBtns() {
    rockBtn.addEventListener("click", () => {
        paperBtn.classList.add("hidden");
        scissorBtn.classList.add("hidden");
        result = randomNumber();
        gameOn(result);
        rockScore(result);
    });

    paperBtn.addEventListener("click", () => {
        rockBtn.classList.add("hidden");
        paperBtn.classList.remove("hidden");
        scissorBtn.classList.add("hidden");
        result = randomNumber();
        gameOn(result);
        paperScore(result);
    });

    scissorBtn.addEventListener("click", () => {
        rockBtn.classList.add("hidden");
        paperBtn.classList.add("hidden");
        scissorBtn.classList.remove("hidden");
        result = randomNumber();
        gameOn(result);
        scissorScore(result);
    });
}


function randomNumber(maxLimit = 3) {
    let rand = Math.random() * maxLimit + 1;
    rand = parseInt(Math.floor(rand));
    return rand;
}

function gameOn(result) {
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

let playerPoint = 0;
let compPoint = 0;
function rockScore(result) {
    if (result === 1) {
        console.log("Tie");
    } else if (result === 2) {
        compPoint++;
        compScore.innerHTML = compPoint;
    } else {
        playerPoint++;
        playerScore.innerHTML = playerPoint;
    }
    display();
    pointReset();
}

function paperScore(result) {
    if (result === 1) {
        playerPoint++;
        playerScore.innerHTML = playerPoint;
    } else if (result === 2) {
        console.log("Tie");
    } else {
        compPoint++;
        compScore.innerHTML = compPoint;
    }
    display();
    pointReset();
}

function scissorScore(result) {
    if (result === 1) {
        compPoint++;
        compScore.innerHTML = compPoint;
    } else if (result === 2) {
        playerPoint++;
        playerScore.innerHTML = playerPoint;
    } else {
        console.log("Tie");
    }
    display();
    pointReset();

}

function display() {
    rockBtn.classList.remove("hidden");
    paperBtn.classList.remove("hidden");
    scissorBtn.classList.remove("hidden");
}

function pointReset() {
    if (playerPoint === 5) {
        playerPoint = 0;
        playerScore.innerHTML = playerPoint;
        compPoint = 0;
        compScore.innerHTML = compPoint;
        scoreBoard.innerHTML = "Congratulation!!! You Win the game";
        player.innerHTML = "";
    }
    else if (compPoint === 5) {
        playerPoint = 0;
        playerScore.innerHTML = playerPoint;
        compPoint = 0;
        compScore.innerHTML = compPoint;
        scoreBoard.innerHTML = "Computer Win the game";
        player.innerHTML = "";
    }
}

























































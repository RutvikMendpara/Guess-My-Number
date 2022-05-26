"use strict";

// score
let score = 20;
let secretNumber;
let highScore = 0;

// Generate random number
const secretNumberGen = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};
secretNumberGen();

// display message
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

// "check" event listener
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // check the condition =>

  // no input
  if (!guess) {
    displayMessage("😞 No Number!");
  } else if (score > 1) {
    // player wins
    if (guess === secretNumber) {
      displayMessage("🥳 Correct Number!");
      // show secretNumber after wining the game
      document.querySelector(".number").textContent = secretNumber;
      // after player won , css will change to =>
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      highScoreCheck();
    }

    //  guess greater than number
    else if (guess > secretNumber) {
      displayMessage("To high!");
      score--;
      document.querySelector(".score").textContent = score;
    }
    //  guess less than number
    else if (guess < secretNumber) {
      displayMessage("To low!");
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
  // player lost
  else {
    displayMessage("You lost the game!");
    document.querySelector(".score").textContent = 0;
  }
});

//restart game
const restartGame = () => {
  // score
  score = 20;
  document.querySelector(".score").textContent = 20;
  // Generate random number
  secretNumberGen();
  // change to initial message , guess , css , number
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
};

// "again" event listener
document.querySelector(".again").addEventListener("click", () => {
  restartGame();
});

// high-score
const highScoreCheck = () => {
  if (score > highScore) {
    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  }
};

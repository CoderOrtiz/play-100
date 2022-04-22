"use strict";
// Set Variables
let currentScore = 0;
let activePlayer = 0;
let savedScores = [0, 0];

// To Select Elements within the HTML File
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const instructionsBtn = document.querySelector(".btn-instructions")
let player1sTurn = document.querySelector(".player-0");
let player2sTurn = document.querySelector(".player-1");
const hold = document.querySelector(".btn-hold");
const rollDice = document.querySelector(".btn-roll");
const reset = document.querySelector(".btn-new");
const youWonBackground = document.querySelector("body");

// Arrow Functions Nested Within the Main Functions
const hideDice = () => document.querySelector("img").classList.add("hidden");
const addDiceImage = () => document.querySelector("img").classList.remove("hidden");
const activePlayersCurrentScore = () => document.querySelector(`#current-${activePlayer}`).textContent = currentScore;
const activePlayersSavedScore = () => document.querySelector(`#score-${activePlayer}`).textContent = savedScores[activePlayer];
const activePlayerCurrentScoreTo_0 = () => document.querySelector(`#current-${activePlayer}`).textContent = 0;
const allPlayersCurrentScoresTo_0 = () => document.querySelectorAll(".current-score").textContent = 0;

// A Function Declarations Nested Within the Main Functions
function scoreReset() {
  const scoreReset = document.querySelectorAll(".current-score, .score");
  for (let i = 0; i < scoreReset.length; i++) {
    scoreReset[i].textContent = 0;
  }
}

function switchPlayer() {
  // If a Player Rolls a 1, then the Player's Current Score gets Reset to 0
  activePlayerCurrentScoreTo_0();
  // Resets the Current Score back to 0, Otherwise Player's 1 Score Would Automaticly Transfer to Player 2
  currentScore = 0;
  // Switches the Active Player's Value from 0 to 1, which causes the Switch from Player 1 to Player 2
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Toggles the "player-active" Class Between Player 1 & 2
  player1sTurn.classList.toggle("player-active");
  player2sTurn.classList.toggle("player-active");
}

// Functions to Open & Close the Modal Window
function openModal(){
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
openModal();

function closeModal(){
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function escapeKey (event){
  if (event.key === "Escape");
  closeModal();
}

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", escapeKey);
instructionsBtn.addEventListener("click", openModal);

// Requesting and Displaying Player's Names
const player1sName = prompt("What is Player 1's name?");
const player2sName = prompt("What is Player 2's name?");

document.querySelector("#name-0").textContent = player1sName || "Player 1";
document.querySelector("#name-1").textContent = player2sName || "Player 2";

// To Hide the Dice Before Game Begins
hideDice();



// ----- Main JavaScript Code for Game -----



rollDice.addEventListener("click", function () {
  
  addDiceImage();
  let roll = Math.floor(Math.random() * 6) + 1;
  const diceRolled = `./images/dice-${roll}.png`;
  document.querySelector("img").setAttribute("src", diceRolled);

  if (roll !== 1) {
    // Same as currentScore = currentScore + roll
    currentScore += roll;
    activePlayersCurrentScore();
  } 
  else {
    switchPlayer();
  }
});

hold.addEventListener("click", function () {

  // Same as savedScores[0] = savedScores[0] + currentScore;
  savedScores[activePlayer] += currentScore;

  activePlayersSavedScore();
  activePlayerCurrentScoreTo_0();

  if (savedScores[activePlayer] >= 100) {
    youWonBackground.classList.remove("play_background");
    youWonBackground.classList.add("won_background");
    allPlayersCurrentScoresTo_0();

    // Disables the "Roll Dice" & "Hold" Buttons once Game is Won
    rollDice.disabled = true;
    hold.disabled = true;
  } 
  else {
    // If a Player has Reached a Score of 100 yet, then the Chance will Switch to the Other Player
    switchPlayer();
  }
});

reset.addEventListener("click", function () {

  // Reseting Necessary Values for the Reset Function
  currentScore = 0;
  activePlayer = 0;
  savedScores = [0, 0];

  //  Game will Default to Player 1 when Game is Reset
  player1sTurn.classList.add("player-active");
  player2sTurn.classList.remove("player-active");

  // Removes Green Background to the Orange Background
  youWonBackground.classList.remove("won_background");
  youWonBackground.classList.add("play_background");

  hideDice();
  scoreReset();

  //  Enables the "Roll Dice" & "Hold" Buttons once Game is Won
  hold.disabled = false;
  rollDice.disabled = false;
});



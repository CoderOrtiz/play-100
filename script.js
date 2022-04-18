'use strict';

let score = 0;
let currentScore = 0;
let roll = 6;
let activePlayer = 0;
document.querySelector("img").classList.add("hidden");
const scoreReset = document.querySelectorAll(".score, .current-score");


for (let i = 0; i < scoreReset.length; i++){
    scoreReset[i].textContent = score;
}

document.querySelector(".btn--roll").addEventListener("click", rollDice);

// document.querySelector(".btn--hold").addEventListener("click", holdNumber);

// document.querySelector(".btn--new").addEventListener("click", newgame);

function rollDice(){
  document.querySelector("img").classList.remove("hidden");
  roll = Math.floor(Math.random() * 6) + 1;
  const diceRolled = `./images/dice-${roll}.png`;
  document.querySelector("img").setAttribute("src", diceRolled);
  if (roll !== 1) {
    // Same as currentScore = currentScore + roll
    currentScore += roll;

   document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
  }else {
    // If Player 1 Rolls a 1, then Player's 1 Score gets Reset to 0
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    // Resets the Current Score back to 0, Otherwise Player's 1 Score Would Automaticly Transfer to Player 2
    currentScore = 0;
    // Switches the Active Player's Value from 0 to 1, which causes the Switch from Player 1 to Player 2
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
}



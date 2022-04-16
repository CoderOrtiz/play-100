'use strict';

let score = 0;
let currentScoreStart = 0;
let roll = 6;

const scoreReset = document.querySelectorAll(".score, .current-score");

for (let i = 0; i < scoreReset.length; i++){
    scoreReset[i].textContent = score;
}

document.querySelector(".btn--roll").addEventListener("click", rollDice);

// document.querySelector(".btn--hold").addEventListener("click", holdNumber);

// document.querySelector(".btn--new").addEventListener("click", newgame);

function rollDice(){
  roll = Math.floor(Math.random() * 6) + 1;
  const diceRolled = `./images/dice-${roll}.png`;
  document.querySelector("img").setAttribute("src", diceRolled);
}


'use strict';

let score = 0;
let currentScore = 0;
let roll = 6;
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

   document.querySelector("#current--0").textContent = currentScore;

}
}


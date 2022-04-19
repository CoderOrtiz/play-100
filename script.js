'use strict';

let score = 0;
let currentScore = 0;
let activePlayer = 0;
let roll = 0
let player1sTurn = document.querySelector(".player--0");
let player2sTurn = document.querySelector(".player--1");
let savedScores = [0, 0];
document.querySelector("img").classList.add("hidden");
let scoreReset = document.querySelectorAll(".current-score, .score");
const hold = document.querySelector(".btn--hold");
const rollDice = document.querySelector(".btn--roll");
const youWonBackground = document.querySelector("body");

function switchPlayer (){
// If Player 1 Rolls a 1, then Player's 1 Score gets Reset to 0
document.querySelector(`#current--${activePlayer}`).textContent = 0;
// Resets the Current Score back to 0, Otherwise Player's 1 Score Would Automaticly Transfer to Player 2
currentScore = 0;
// Switches the Active Player's Value from 0 to 1, which causes the Switch from Player 1 to Player 2
activePlayer = activePlayer === 0 ? 1 : 0;
// Toggles the "player--active" Class Between Player 1 & 2
player1sTurn.classList.toggle("player--active");
player2sTurn.classList.toggle("player--active");
}
                                                      


for (let i = 0; i < scoreReset.length; i++){
    scoreReset[i].textContent = score;
}



// document.querySelector(".btn--hold").addEventListener("click", holdNumber);

// document.querySelector(".btn--new").addEventListener("click", newgame);

rollDice.addEventListener("click", function(){
  document.querySelector("img").classList.remove("hidden");
  roll = Math.floor(Math.random() * 6) + 1;
  const diceRolled = `./images/dice-${roll}.png`;
  document.querySelector("img").setAttribute("src", diceRolled);
  
  if (roll !== 1) {
    // Same as currentScore = currentScore + roll
    currentScore += roll;
    
   document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

   
  }else {
    switchPlayer()
  }
})

hold.addEventListener("click", function(){
  // savedScores[0] = savedScores[0] + currentScore;
  savedScores[activePlayer] += currentScore;

  document.querySelector(`#score--${activePlayer}`).textContent = savedScores[activePlayer];
  document.querySelector(`#current--${activePlayer}`).textContent = 0;

if (savedScores[activePlayer] >= 100){
  youWonBackground.classList.remove("play_background")
  youWonBackground.classList.add("won_background");
  document.querySelector("#score--0").textContent = savedScores[0];
  document.querySelector("#score--1").textContent = savedScores[1];
  document.querySelectorAll(".current-score").textContent = 0;
  hold.disabled = true;
  rollDice.disabled = true;
}

else{
  switchPlayer();
}
})

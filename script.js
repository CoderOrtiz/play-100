'use strict';

let score = 0;
let currentScoreStart = 0;

const scoreReset = document.querySelectorAll(".score, .current-score");

for (let i = 0; i < scoreReset.length; i++){
    scoreReset[i].textContent = score;
}

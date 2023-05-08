'use strict';

// variables
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewgame = document.querySelector('.btn--new');
const btnCloseModal = document.querySelector('.btn--close-modal');

const player1 = document.querySelector('.player--0 ');
const player2 = document.querySelector('.player--1');
const music = document.querySelector('.sound');

const btnRules = document.querySelector('.btn--rules');

const rules = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Sound

// Modal window

btnRules.addEventListener('click', () => {
  rules.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', () => {
  rules.classList.add('hidden');
  overlay.classList.add('hidden');
});

//  Returning game to initial state

// diceEl.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  score = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

let playing, score, scores, activePlayer, dice;
const init = function () {
  playing = true;
  activePlayer = 0;
  player2.classList.remove('player--active');
  player1.classList.add('player--active');
  scores = [0, 0];
  score = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document;
  dice = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  player2.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  diceEl.src = 'dice-shield.png';
  // diceEl.classList.add('hidden');
};
init();

// Rolling the dice

btnRoll.addEventListener('click', function () {
  // Calculate btn roll
  if (playing) {
    dice = Math.trunc(Math.random() * 6) + 1;

    //   display btn roll & current score on screen
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    if (dice !== 1) {
      score += dice;
      document.getElementById(`current--${activePlayer}`).textContent = score;
    }

    //   Switch player
    else {
      switchPlayer();
    }
  }
});
// Holding the score

btnHold.addEventListener('click', function () {
  if (playing) {
    // update scores array
    scores[`${activePlayer}`] = score + scores[`${activePlayer}`];
    console.log(scores);
    // Print score to the screen
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[`${activePlayer}`];
  }
  // Switch player
  if (scores[`${activePlayer}`] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    playing = false;
  } else {
    switchPlayer();
  }
});
btnNewgame.addEventListener('click', init);

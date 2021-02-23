'use strict';
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

//Selectors
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

//Functions
const displayMesssage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Event Listeners
//CHECK
checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMesssage('No Number...🥺');
  } else if (guess !== secretNumber) {
    if (guess > secretNumber) {
      if (score > 1) {
        displayMesssage(
          guess > secretNumber ? 'Too High...⬆️' : 'Too Low...⬇️'
        );
        score -= 1;
        document.querySelector('.score').textContent = score;
      } else {
        displayMesssage('You Lost...🔥');
        document.querySelector('.score').textContent = 0;
      }
    }
  } else {
    displayMesssage('YOU GOT IT! ✨');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
//AGAIN
againButton.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMesssage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

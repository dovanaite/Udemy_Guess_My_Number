'use strict';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector(".message").textContent = 'Correct number 🥇')

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 69;
// document.querySelector('.score').textContent = 69;
// document.querySelector('.guess').value = 99;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess);
    // console.log(typeof guess);


    if (!guess) {
        console.log(document.querySelector('.message').textContent = "No number👎");
    } else if (guess === secretNumber) {
        console.log(document.querySelector(".message").textContent = 'Correct number 🤟')
    } else if (guess > secretNumber) {
        if (score > 1) {
            console.log(document.querySelector(".message").textContent = 'Too high ☝');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            console.log(document.querySelector(".message").textContent = 'You lost the game ❌');
        }

    } else if (guess < secretNumber) {
        if (score > 1) {
            console.log(document.querySelector(".message").textContent = 'Too low 👇');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            console.log(document.querySelector(".message").textContent = 'You lost the game ❌');
        }

    }
})
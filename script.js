'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
const scoreText = function(score) {
    document.querySelector('.score').textContent = score;
}
const number = document.querySelector('.number');
const body = document.querySelector('body');
const guess = document.querySelector('.guess');

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    // console.log(guess);
    // console.log(typeof guess);


    //when there is no input
    if (!guess) {
        console.log(displayMessage("No number 👎"));
    }

    //when guess is wrong
    else if (guess != secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high 👇' : 'Too low ☝');
            score--;
            scoreText(score);
        } else {
            document.querySelector('.score').textContent = 0;
            console.log(displayMessage('You lost the game ❌'));
        }
    }

    //when player wins
    else if (guess === secretNumber) {
        displayMessage('Correct number 🤟');
        number.textContent = secretNumber;
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is too high   
    } //else if (guess > secretNumber) {
    //     if (score > 1) {
    //         console.log(document.querySelector(".message").textContent = 'Too high 👇');
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.score').textContent = 0;
    //         console.log(document.querySelector(".message").textContent = 'You lost the game ❌');
    //     }

    //     //when guess is too low     
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         console.log(document.querySelector(".message").textContent = 'Too low ☝');
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.score').textContent = 0;
    //         console.log(document.querySelector(".message").textContent = 'You lost the game ❌');
    //     }

    // }
})

//when I want to enter the number by clicking "enter"
document.addEventListener('keydown', function(e) {
    // console.log(e);
    if (e.key === 'Enter') {
        // console.log('bla bla bla');
        let guess = Number(document.querySelector('.guess').value);
        // console.log(guess);
        // console.log(typeof guess);


        //when there is no input
        if (!guess) {
            console.log(displayMessage("No number 👎"));
        }

        //when guess is wrong
        else if (guess != secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? 'Too high 👇' : 'Too low ☝');
                score--;
                scoreText(score);
            } else {
                document.querySelector('.score').textContent = 0;
                console.log(displayMessage('You lost the game ❌'));
            }
        }

        //when player wins
        else if (guess === secretNumber) {
            displayMessage('Correct number 🤟');
            number.textContent = secretNumber;
            body.style.backgroundColor = '#60b347';
            number.style.width = '30rem';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

            //when guess is too high   
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    scoreText(20);
    displayMessage('Start guessing...')
    number.style.width = '15rem';
    number.textContent = '?';
    guess.value = '';
    body.style.backgroundColor = '#222';
})
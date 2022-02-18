'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
            let guess = Number(document.querySelector('.guess').value);
            // console.log(guess);
            // console.log(typeof guess);

            //when there is no input
            if (!guess) {
                console.log(document.querySelector('.message').textContent = "No number 👎");
            }

            //when guess is wrong
            else if (guess != secretNumber) {
                if (score > 1) {
                    console.log(document.querySelector(".message").textContent = guess > secretNumber ? 'Too high 👇' : 'Too low ☝');
                    score--;
                    document.querySelector('.score').textContent = score;
                } else {
                    document.querySelector('.score').textContent = 0;
                    console.log(document.querySelector(".message").textContent = 'You lost the game ❌');
                }
            }

            //when player wins
            else if (guess === secretNumber) {
                console.log(document.querySelector(".message").textContent = 'Correct number 🤟')
                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
                if (score > highscore) {
                    highscore = score;
                    document.querySelector('.highscore').textContent = highscore;
                }

                //     //when guess is too high   
                // } else if (guess > secretNumber) {
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

        document.querySelector('.again').addEventListener('click', function() {
            secretNumber = Math.trunc(Math.random() * 20) + 1;
            document.querySelector('.score').textContent = score = 20;
            document.querySelector(".message").textContent = 'Start guessing...';
            document.querySelector('.number').style.width = '15rem';
            document.querySelector('.number').textContent = '?';
            document.querySelector('.guess').value = '';
            document.querySelector('body').style.backgroundColor = '#222';
        })
'use strict';

// Define a secret number, when clicked will show 'Correct' under message

let num = Math.floor(Math.random()*20)+1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess); // Result: number

    // Functions
    const displayMessage = (message) => {
        document.querySelector('.message').textContent = message;
    }

    const displayScore = function(){
        document.querySelector('.score').textContent = score;
    }

    
    if (!guess){ // if no value was inserted 
        // document.querySelector('.message').textContent = 'No Number';
        displayMessage('No Number!');

    } else if(guess !== num){
        if(score > 1){
            document.querySelector('.message').textContent = guess > num ? 'Number is too high!': 'Number is too low!';
            score--;
            // document.querySelector('.score').textContent = score;
            displayScore();
        } else {
            // document.querySelector('.message').textContent = 'You Lost the Game!';
            displayMessage('You Lost the Game!');
        }
    } else if(guess === num){
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = num;

        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    num = Math.floor(Math.random()*20)+1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    // document.querySelector('.score').textContent = score;
    displayScore();
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
});
});
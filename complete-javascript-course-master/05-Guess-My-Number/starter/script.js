'use strict';

// console.log(document.querySelector('.message').textContent);
// //we can use element tag also
// console.log(document.querySelector('p').textContent);

// // we can update text using class of that element
// //console.log(document.querySelector('.message').innerHTML = "hello 🥳");

// console.log(document.querySelector('.number').innerHTML = 20);


// document.querySelector('.guess').value =2;


let secretNumber =Math.trunc(Math.random()*20)+1;
//document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber)

let score = 20;
let higherScore =0;

// Reading the input
document.querySelector('.check').addEventListener(
    'click', function(){
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        //when input is number
        if(!guess){
            //document.querySelector('.message').textContent = '😅 No Number!';
            displayMessage('⛔️ No Number! ')
        }

        //when input is correct guess
        else if(guess === secretNumber){
            document.querySelector('.number').textContent = secretNumber;
            //document.querySelector('.message').textContent = 'Correct Guess! 😁';
            displayMessage('Correct Guess! 😁');
            if(score>higherScore){
                higherScore = document.querySelector('.highscore').textContent = score;
            }
            document.querySelector('body').style.backgroundColor= '#60b348';
            document.querySelector('.number').style.width= '30rem';
        }
        else if(guess != secretNumber){
            if(score>1){
                // document.querySelector('.message').textContent = 
                // guess > secretNumber ? 'Too high! 😁' : 'Too low! 😁';
                displayMessage(guess > secretNumber ? 'Too high! 😁' : 'Too low! 😁');
                score--;
                document.querySelector('.score').textContent = score;
            }
            else{
                //document.querySelector('.message').textContent = 'Lost the Game';
                displayMessage('Lost the Game');
                document.querySelector('.score').textContent = 0;
            }
        }

        //when input is too high
        // else if(guess > secretNumber){
        //     if(score>1){
        //         document.querySelector('.message').textContent = 'Too high! 😁';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }
        //     else{
        //         document.querySelector('.message').textContent = 'Lost the Game';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }

        // //when input is too low
        // else if(guess < secretNumber){
        //     if(score>1){
        //         document.querySelector('.message').textContent = 'Too low! 😁';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }
        //     else{
        //         document.querySelector('.message').textContent = 'Lost the game';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }
    }
);

function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

//handle Again button
document.querySelector('.again').addEventListener(
    'click', function(){
        score =20;
        secretNumber =Math.trunc(Math.random()*20)+1;
        console.log('secret number:  ' + secretNumber);
        document.querySelector('.highscore').textContent = higherScore;
        console.log('Higher Score : '+ higherScore);
        document.querySelector('body').style.backgroundColor= '#222';
        document.querySelector('.number').textContent='?';
        document.querySelector('.guess').value='';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').style.width= '15rem';
        document.querySelector('.message').textContent = 'Start guessing...';
    }
);


let randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuesses = 1;

let playGame = true;

if(playgame){

}

function validateGuess(guess) {
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess<1){
        alert('Please enter a number greater than 1');
    } else if (guess>100){
        alert('Please enter a number less than 101');
    } else {
        prevGuesses.push(guess);
        if(numGuesses === 11){
            displayGuess(guess);
            displayMessage(`Random Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage("You Guessed it right");
        endGame();
    } else if (guess < randomNumber){
        displayMessage("Number is too low, Try Again :)");
    } else if (guess > randomNumber){
        displayMessage("Number is too high, Try Again :)");
    }
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess (guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
}

function endGame(){
    playGame = false;
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="startOver">Start new game</h2>`;
    startOver.appendChild(p);
    newGame();
}

function newGame(){
    
}
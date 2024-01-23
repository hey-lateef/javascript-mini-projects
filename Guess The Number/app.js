const submit = document.querySelector("#subt");
const userInput = document.querySelector("guessField");
const guessSlot = document.querySelector(".guesses");
const remaning = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector("..resultParas");
const randomNumber = parseInt(Math.random()*100+1);
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

function validateGuess(guess){
    //
}

function checkGuess(guess){
    //
}

function displayMsg (guess){
    //
}
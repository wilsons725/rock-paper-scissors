"use strict";

let humanScore = 0;
let computerScore = 0;

// When the user inputs a word, console will output a valid choice of rock, paper or scissors
const getHumanChoice = function () {
  let userInput = "";
  // Do...While statement creates a loop of the prompt if the value entered doesn't equal rock paper or scissors.
  do {
    // uses .toLowerCase to limit 'or' options below by converting user input to lowercase.
    userInput = prompt("Rock, Paper, Or Scissors?").toLowerCase();
  } while (
    userInput !== "rock" &&
    userInput !== "paper" &&
    userInput !== "scissors"
  );
  return userInput;
};
// console.log(getHumanChoice());
// getHumanChoice();

// When the user selects their option, the script will generate a random choice by leverage the math random function and selecting one of the options in an array
const getComputerChoice = function () {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.trunc(Math.random() * 3)].toLowerCase();
};
// console.log(getComputerChoice());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const playRound = function (humanChoice, computerChoice) {
  if (humanSelection === "rock" && computerSelection === "paper") {
    console.log("You Lose, paper beats rock!");
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win, rock beats scissors!");
  } else if (humanSelection === "rock" && computerSelection === "rock") {
    console.log("Play Again, both selected rock!");
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    console.log("You Lose, scissors beats paper!");
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    console.log("You Win, paper beats rock!");
  } else if (humanSelection === "paper" && computerSelection === "paper") {
    console.log("Play Again, both selected paper!");
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    console.log("You Lose, rock beats scissors!");
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win, scissors beats paper!");
  } else if (
    humanSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("Play Again, both selected scissors!");
  }
};

playRound(humanSelection, computerSelection);

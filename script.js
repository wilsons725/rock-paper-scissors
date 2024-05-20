"use strict";

alert(
  "Welcome to Rock, Paper, Scissors! Open the console to view the results of each round. You will play 5 games, good luck!"
);

let humanScore = 0;
let computerScore = 0;

const playRound = function () {
  const getHumanChoice = function () {
    let userInput = "";
    do {
      userInput = prompt("Rock, Paper, Or Scissors?").toLowerCase();
    } while (
      userInput !== "rock" &&
      userInput !== "paper" &&
      userInput !== "scissors"
    );
    return userInput;
  };

  const getComputerChoice = function () {
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.trunc(Math.random() * 3)].toLowerCase();
  };

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  if (humanSelection === "rock" && computerSelection === "paper") {
    console.log("You Lose, paper beats rock!");
    computerScore++;
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win, rock beats scissors!");
    humanScore++;
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    console.log("You Lose, scissors beats paper!");
    computerScore++;
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    console.log("You Win, paper beats rock!");
    humanScore++;
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    console.log("You Lose, rock beats scissors!");
    computerScore++;
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win, scissors beats paper!");
    humanScore++;
  } else {
    console.log("Tie, Play Again!");
  }
};

const playGame = function () {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (humanScore > computerScore) {
    console.log(`You Win! ${humanScore} to ${computerScore}`);
    alert(`You Win! ${humanScore} to ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You Lose! ${computerScore} to ${humanScore}`);
    alert(`You Lose! ${computerScore} to ${humanScore}`);
  } else {
    console.log(`Tie Game! ${humanScore} to ${computerScore}`);
    alert(`Tie Game! ${humanScore} to ${computerScore}`);
  }
};
playGame();

console.log("Hello World")

function getComputerChoice(number) {
    // Array uses brackets in JS
    let options = ["Rock", "Paper", "Scissors"]
    return options [Math.floor(Math.random() * number)];
}


console.log (getComputerChoice(3));



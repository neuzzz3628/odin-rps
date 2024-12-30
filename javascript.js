// console.log("Hello World")

// Method 1: using Array
// Create a function that randomly generates a choice between Rock, Paper and Scissors.
// Use an array to contain all possible choices, then use Math random to generate an index number to be returned.
// The array has 3 values, so the index must return either of these numbers (0, 1, 2).
// function getComputerChoice(){
//     const choices = ["Rock", "Paper", "Scissors"];
//     let randomChoiceIndex = Math.floor(Math.random() * 3);
//     return choices[randomChoiceIndex];
// }

// Method 2: using If-Else
// With IF-Else, make conditions with Math random that returns a certain choice (either Rock, Paper or Scissors)

function getComputerChoice(){
    let randomChoiceNum = Math.floor(Math.random()*3) + 1;
    return (randomChoiceNum === 1) ? "Rock" : (randomChoiceNum === 2) ? "Paper" : "Scissors"
}

function getHumanChoice(){
    return prompt("Rock, Paper, Scissors? ")
}


//TESTING ZONE
//This for loop tests out 10 random generation of the function getComputerChoice(), should be used ONLY for test, otherwise hidden.
// for (let i = 1; i < 11; i ++){
//     console.log(i +". " + getComputerChoice());
// }

console.log(getHumanChoice())
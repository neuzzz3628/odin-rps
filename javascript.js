// With IF-Else, make conditions with Math random that returns a certain choice (either Rock, Paper or Scissors)
function getComputerChoice(){
    let randomChoiceNum = Math.floor(Math.random()*3) + 1;
    return (randomChoiceNum === 1) ? "Rock" : (randomChoiceNum === 2) ? "Paper" : "Scissors"
}
// Prompt the user to put in an input, make it case-insensitive and only accepts valid inputs
function getHumanChoice(){
    let prompting = true;
    let validInput;
    while (prompting){
        validInput = prompt("Rock, Paper, Scissors? ").toLowerCase();
        if (validInput === "rock" || validInput === "paper" || validInput === "scissors"){
            prompting = false;
            return validInput;
        } else{
            console.log("Invalid input or mistyped input.")
        }
    }
}
// This function plays 1 round, accepting 2 args and compare 2 args to decide who wins the round then print the result on console
// IF humanChoice & computerChoice are the same, it's a draw.
// If humanChoice & computerChoice are different, use IF-ELSE to separate into 2 main groups of scenarios: IF where human wins with each choice, and ELSE for all losses 
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("Draw")
    } else if(humanChoice === "rock" && computerChoice === "Scissors" ||
              humanChoice === "paper" && computerChoice === "Rock" ||
              humanChoice === "scissors" && computerChoice === "Paper"){
        console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`);
        return 1;
    } else{
        console.log(`You lose! ${humanChoice.toUpperCase()} cannot win against ${computerChoice.toUpperCase()}`);
        return -1;
    }
}

// This function starts the game, using a loop to play 5 rounds and declare a winner at the end of 5th round.
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 1; i < 6; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice().toLowerCase();
        console.log(`Round ${i}:`)
        let result = playRound(humanSelection, computerSelection);
        if(result === 1){
            humanScore += 1;
        } else if(result === -1){
            computerScore += 1;
        }
    }
    if(humanScore > computerScore){
        console.log(`Congratulations! You won ${humanScore} : ${computerScore}`)
    } else if (humanScore > computerScore){
        console.log(`You lost ${humanScore} : ${computerScore} against the Computer. Try again next time.`)
    } else {
        console.log("It's a draw.")
    }
}

//The game will start once before entering the loop where after each play of 5 rounds, the browser will prompt for users to play again until refusal
try{
    playGame();
    let again = true;
    while (again){
        confirm("Rematch?") ? playGame() : again = false;
    }
}
catch(err){
    console.error("Error: ", err.message);
    console.log("Restart the browser to play");
}


//TESTING ZONE
//This for loop tests out 10 random generation of the function getComputerChoice(), should be used ONLY for test, otherwise hidden.
// for (let i = 1; i < 11; i ++){
//     console.log(i +". " + getComputerChoice());
// }

// console.log(getHumanChoice())
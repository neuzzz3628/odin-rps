function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return { message: "Draw", point: 0 };
    };
    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

   if(computerChoice === winConditions[humanChoice]){
        return { message: `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`, point: 1 };
    } else{
        return { message: `You lose! ${humanChoice.toUpperCase()} cannot win against ${computerChoice.toUpperCase()}.`, point: -1 };
    }
}

const container = document.querySelector("body");
let choices = ["Rock", "Paper", "Scissors"];
choices.forEach(choice => {
    const button = document.createElement("button");
    button.id = choice;
    button.textContent = choice;
    container.appendChild(button);
})

const result = document.createElement("div");
result.setAttribute("style", "white-space: pre-line")
result.setAttribute("id", "result")
container.appendChild(result);

const restart = document.createElement("button");
restart.id = "restart";
restart.textContent = "Restart";
restart.addEventListener("click", () =>{
    i = 0;
    humanScore = 0;
    computerScore = 0;
    result.textContent = "";
    buttons.forEach((button) => button.disabled = false);
    restart.remove();
})

let i = 0, humanScore = 0, computerScore = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (i < 5){
            const humanSelection = button.id.toLowerCase();
            let {message, point} = playRound(humanSelection, getComputerChoice())
            humanScore += point === 1 ? 1 : 0;
            computerScore += point === -1 ? 1 : 0;
            result.textContent += `Round ${i+1}: ${message}\n`;
            i++;
        }
        if (i === 5){
            buttons.forEach((button) => button.disabled = true);
            if(humanScore > computerScore){
                result.textContent += `\nCongratulations! You won ${humanScore} : ${computerScore}`
            } else if (humanScore < computerScore){
                result.textContent += `\nYou lost ${humanScore} : ${computerScore} against the Computer. Try again next time.`;
            } else {
                result.textContent += "\nIt's a draw.";
            }
            container.appendChild(restart)
        }
    });
})

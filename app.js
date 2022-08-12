const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button")
let userChoice, computerChoice, result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))
/* Alternative */
// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',function (e) {
// userChoice = e.target.id
// userChoiceDisplay.innerHTML = userChoice
// }))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) // generates 0,1,2 

    if(randomNumber === 0){
        computerChoice = 'rock';
    }
    if(randomNumber === 1){
        computerChoice = 'paper';
    }
    if(randomNumber === 2){
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice
    /*Alternative */
    // switch (randomNumber) {
    //     case 0:
    //         computerChoice = 'rock';
    //         break;
    //     case 1:
    //         computerChoice = 'paper';
    //         break;
    //     case 2:
    //         computerChoice = 'scissors';
    //         break;
    //     default:
    //         break;
    // }
}
function getResult() {
    if (computerChoice === userChoice) {
        result = 'It is a draw!'
    }else if(computerChoice === 'rock' && userChoice ==="scissors"){
        result = 'You lost'
    }
    else if(computerChoice === 'rock' && userChoice ==="paper"){
        result = 'You win'
    }
    else if(computerChoice === 'paper' && userChoice ==="rock"){
        result = 'You lost'
    }
    else if(computerChoice === 'paper' && userChoice ==="scissors"){
        result = 'You win'
    }
    else if(computerChoice === 'scissors' && userChoice ==="rock"){
        result = 'You win'
    }
    else if(computerChoice === 'scissors' && userChoice ==="paper"){
        result = 'You lost'
    }
    resultDisplay.innerHTML = result
}
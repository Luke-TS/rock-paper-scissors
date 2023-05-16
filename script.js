const buttons = [...document.querySelectorAll('button')];
let userScore = 0;


let compScore = 0;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(btn.textContent.toLowerCase());
    });
});


function playRound(user) {
    const comp = getComputerChoice();
    result = evaluateResult(user, comp);
    console.log(result);
    updateScore();
    displayResult(result);
    return;
}

function updateScore() {
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('comp-score').textContent = compScore;
}

function displayResult(result) {
    document.getElementById('result').textContent = result;
}

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function getUserInput() {
    const userAns = prompt('rock, paper, scissors: ');
    return userAns.toLowerCase();
}

function evaluateResult(user, comp) {
    let result;
    if (user == 'rock' && comp == 'scissors' || user == 'scissors' && comp == 'paper' || user == 'paper' && comp == 'rock') {
        result = `You win! ${user} beats ${comp}`;
        userScore++;
    }
    else if (user == comp) {
        result = `Tie! You both selected ${user}`;
    }
    else {
        result = `You lose! ${comp} beats ${user}`;
        compScore++;
    }
    return result;
}


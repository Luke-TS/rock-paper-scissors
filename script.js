function playRound() {
    let comp = getComputerChoice();
    let user = getUserInput();
    console.log(evaluateResult(user, comp));
    return;
}

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function getUserInput() {
    let userAns = prompt('rock, paper, scissors: ');
    return userAns.toLowerCase();
}

function evaluateResult(user, comp) {
    let result;
    if (user == 'rock' && comp == 'scissors' || user == 'scissors' && comp == 'paper' || user == 'paper' && comp == 'rock') {
        result = `You win! ${user} beats ${comp}`;
    }
    else if (user == comp) {
        result = `Tie! You both selected ${user}`;
    }
    else {
        result = `You lose! ${comp} beats ${user}`;
    }
    return result;
}
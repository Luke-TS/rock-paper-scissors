function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

function getUserInput() {
    let userAns = prompt('rock, paper, scissors: ');
    return userAns.toLowerCase();
}
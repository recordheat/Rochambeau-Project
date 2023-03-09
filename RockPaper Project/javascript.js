
 function computerChoice() {
    if (Math.floor(Math.random()) * 3 + 1) {
        return "Rock";
    } else if (Math.floor(Math.random()) * 3 + 1 === 2) {
        return "Paper";
    }
    else
        (Math.floor(Math.random()) * 3 + 1 === 3);
    return "Scissors";
}
// Pattern / Solution here: Have a function that randomly return 3 parameters. Why? So the computer can play random shit against us

//Function that plays single round, two players, returns a message 
function playRound(playerSelection, computerSelection) {
    switch (playRound) {
        case playerSelection === "Rock" || computerSelection === "Paper":
            return "You have lost! Paper beats rock!";
    }
}

// Game that calls playRound to play 5 rounds that keeps track of score and reports a winner or a loser at end.

function game(perRound) {
    for (let i = 0; i < 5; i++) {
        if (i += 1) {
            console.log('Choose one symbol to start');
        } else if (i < 1) {
            console.log('You have lost!');
        } else if (i > 1) {
            console.log('You have won!');
        }
        else
            console.log('Tie game');
        playRound();
    }
}



//Get all the squares in the board
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let b4 = document.querySelector('.b4');
let b5 = document.querySelector('.b5');
let b6 = document.querySelector('.b6');
let b7 = document.querySelector('.b7');
let b8 = document.querySelector('.b8');
let b9 = document.querySelector('.b9');

let restartBtn = document.querySelector('button');

restartBtn.addEventListener('click', () => {
    startGame(board, player1, player2);
});

let iconP1 = document.querySelectorAll(".icon")[0];
let iconP2 = document.querySelectorAll(".icon")[1];

let display = document.querySelector('#display');

let currentMarker = '';
let currentPlayer = '';

//Set listeners to all the squares in the board
let boardSquares = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
for (let i = 0; i < boardSquares.length; i++) {
    boardSquares[i].addEventListener('click', function() {
        if (boardSquares[i].innerText == "") {
            renderMarker(boardSquares[i], currentMarker);
            playRound(player1, player2);

        }
    });
}

//Module
let board = (function() {

    let _position = [
        [b1, b2, b3],
        [b4, b5, b6],
        [b7, b8, b9]
    ];

    function clearBoard() {
        for (let i = 0; i < _position.length; i++) {
            for (let j = 0; j < _position[i].length; j++) {
                _position[i][j].innerText = "";
            }
        }
    }

    return {
        clearBoard: clearBoard
    };

})();

//Factory
let playerFactory = (marker, name) => {
    let _marker = marker;
    let _played = false;
    this.name = name;

    function getMarker() {
        return _marker;
    }

    function hasPlayed() {
        return _played;
    }

    function playRound() {
        currentMarker = this._marker;
        display.innerText = `${this._name}'s turn!`;
        while (!currentPlayerPlayed) {}
        currentPlayerPlayed = false;
    }

    return { getMarker, playRound, name };
};

function renderMarker(position, marker) {
    position.innerText = marker;
}

//Function to check if game ended
function hasEnded(player1, player2) {
    /*
    console.log(b1.innerText);
    console.log(b2.innerText);
    console.log(b3.innerText);
    console.log(b4.innerText);
    console.log(b5.innerText);
    console.log(b6.innerText);
    console.log(b7.innerText);
    console.log(b8.innerText);
    console.log(b9.innerText);*/

    if (b1.innerText == b2.innerText && b2.innerText == b3.innerText && b1.innerText != "") {
        if (b1.innerText == player1.getMarker()) {
            display.textContent = `${player1.name} has won!`;
        } else {
            display.textContent = `${player2.name} has won!`;
        }
        return true; //end game
    } else if (b4.innerText == b5.innerText && b5.innerText == b6.innerText && b4.innerText != "") {
        if (b4.innerText == player1.getMarker()) {
            display.textContent = `${player1.name} has won!`;
        } else {
            display.textContent = `${player2.name} has won!`;
        }
        return true; //end game
    } else if (b7.innerText == b8.innerText && b8.innerText == b9.innerText && b7.innerText != "") {
        if (b7.innerText == player1.getMarker()) {
            display.textContent = `${player1.name} has won!`;
        } else {
            display.textContent = `${player2.name} has won!`;
        }
        return true; //end game
    } else if (b1.innerText == b4.innerText && b4.innerText == b7.innerText && b1.innerText != "") {
        if (b1.innerText == player1.getMarker()) {
            display.textContent = `${player1.name} has won!`;
        } else {
            display.textContent = `${player2.name} has won!`;
        }
        return true; //end game
    } else if (b2.innerText == b5.innerText && b5.innerText == b8.innerText && b2.innerText != "") {
        if (b2.innerText == player1.getMarker()) {
            display.textContent = `${player1.name} has won!`;
        } else {
            display.textContent = `${player2.name} has won!`;
        }
        return true; //end game
    } else if (b3.innerText == b6.innerText && b6.innerText == b9.innerText && b3.innerText != "") {
        if (b3.innerText == player1.getMarker()) {
            display.textContent = `${player1.name} has won!`;
        } else {
            display.textContent = `${player2.name} has won!`;
        }
        return true; //end game
    } else if (b1.innerText == b5.innerText && b5.innerText == b9.innerText && b1.innerText != "") {
        if (b1.innerText == player1.getMarker()) {
            display.textContent = `${player1.name} has won!`;
        } else {
            display.textContent = `${player2.name} has won!`;
        }
        return true; //end game
    } else if (b3.innerText == b5.innerText && b5.innerText == b7.innerText && b3.innerText != "") {
        if (b3.innerText == player1.getMarker()) {
            display.textContent = `${player1.name} has won!`;
        } else {
            display.textContent = `${player2.name} has won!`;
        }
        return true; //end game
    } else if (b1.innerText != "" && b2.innerText != "" && b3.innerText != "" && b4.innerText != "" && b5.innerText != "" &&
        b6.innerText != "" && b7.innerText != "" && b8.innerText != "" && b9.innerText != "") {
        display.textContent = "It's a tie!";
        return true; //end game
    }
}

function playRound(player1, player2) {
    if (hasEnded(player1, player2)) {
        currentMarker = "";
        return;
    }

    if (currentPlayer == 1) {
        iconP2.classList.add("active");
        currentPlayer = 2;
        display.innerText = `${player2.name}'s turn!`;
        iconP1.classList.remove("active");
        currentMarker = player2.getMarker();
    } else if (currentPlayer == 2) {
        iconP1.classList.add("active");
        currentPlayer = 1;
        display.innerText = `${player1.name}'s turn!`;
        iconP2.classList.remove("active");
        currentMarker = player1.getMarker();
    }


}
//Function to play a game
function startGame(board, player1, player2) {
    board.clearBoard();
    iconP2.classList.remove("active");

    currentPlayer = 1;
    display.innerText = `${player1.name}'s turn!`;
    iconP1.classList.add("active");
    currentMarker = player1.getMarker();



    /*
        while (true) {
            player1.playRound();
            if (hasEnded()) {
                display.textContent = "End!";
                break;
            }
            player2.playRound();
            if (hasEnded()) {
                display.textContent = "End!";
                break;
            }
        }
    */
}

let player1 = playerFactory('x', 'Player 1');
let player2 = playerFactory('o', 'Player 2');

startGame(board, player1, player2);
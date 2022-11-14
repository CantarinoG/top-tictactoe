let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let b4 = document.querySelector('.b4');
let b5 = document.querySelector('.b5');
let b6 = document.querySelector('.b6');
let b7 = document.querySelector('.b7');
let b8 = document.querySelector('.b8');
let b9 = document.querySelector('.b9');

//Module
let board = (function() {

    let _position = [
        [b1, b2, b3],
        [b4, b5, b6],
        [b7, b8, b9]
    ];

    function getBoard() {
        console.log(_position);
    }

    return {
        getBoard: getBoard
    };

})();

//Factory
let playerFactory = marker => {
    let _marker = marker;

    function getMarker() {
        return _marker;
    }
    return { getMarker };
};

function renderMarker(position, marker) {
    position.innerText = marker;
}

board.getBoard();
let player1 = playerFactory('x');
let player2 = playerFactory('o');
console.log(player1.getMarker());
console.log(player2.getMarker());
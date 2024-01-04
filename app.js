// 1. intialize board
// 2. create function that allows user to choose x or o
// 3. create function that allows user to choose spot on board
// 4. create function that allows computer to choose spot on board
// 5. create function that identifies winner
// 6. create function that identifies game over

// initialize tic-tac-toe gameboard;

const ticTacToeModule = (function () {
    let gameBoard = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];

    function displayGameBoard() {
        for (let row of gameBoard) {
            console.log(row.join(' '));
        }
    }

    function makeMove(row, col, player) {
        if (gameBoard[row][col] === ' ') {
            gameBoard[row][col] = player;
            displayGameBoard();
        } else {
            console.log('Invalid move. Choose another cell.');
        }
    }

    function resetBoard() {
        gameBoard = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        console.log('Game Board has been reset'); 
    }

    return { displayGameBoard, makeMove, resetBoard };
})();

ticTacToeModule.displayGameBoard();
ticTacToeModule.makeMove(0, 1, 'X');
ticTacToeModule.makeMove(1, 0, 'O');
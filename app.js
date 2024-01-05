// 1. intialize board
// 2. create function that allows user to choose x or o
// 3. create function that allows user to choose spot on board
// 4. create function that allows computer to choose spot on board
// 5. create function that identifies winner
// 6. create function that identifies game over

// initialize tic-tac-toe gameboard;

const Gameboard = (function () {
    let gameBoard = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];

    function displayBoard() {
        for (let row of gameBoard) {
            console.log(row.join(' '));
        }
    }

    function makeMove(row, col, symbol) {
        if (gameBoard[row][col] === ' ') {
            gameBoard[row][col] = symbol;
            displayBoard();
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

    return { displayBoard, makeMove, resetBoard };
})();

// initialize player

const Player = function (name, symbol) {
    return { name, symbol };
};

// initialize game GameController factory

const GameController = (() => {
    let player1;
    let player2;
    let currentPlayer;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const startGame = (player1Name, player2Name) => {
        player1 = Player(player1Name, 'X');
        player2 = Player(player2Name, 'O');
        currentPlayer = player1;
        console.log('Game started. ' + currentPlayer.name + ' goes first.');
        Gameboard.displayBoard();
    };

    const playerMove = (row, col) => {
        Gameboard.makeMove(row, col, currentPlayer.symbol);
        switchPlayer();
        console.log(currentPlayer.name + "'s turn.")
    };

    const resetGame = () => {
        Gameboard.resetBoard();
        player1 = null;
        player2 = null;
        currentPlayer = null;
        console.log('Game reset');
    };

    return { startGame, playerMove, resetGame };
})();


GameController.startGame('Max', 'Atlas');
GameController.playerMove(0, 0);
GameController.playerMove(0, 1);
GameController.playerMove(0, 2);
GameController.playerMove(1, 0);
GameController.playerMove(1, 1);
GameController.playerMove(1, 2);
GameController.playerMove(2, 0);
GameController.playerMove(2, 1);
GameController.playerMove(2, 2);
GameController.resetGame();

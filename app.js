// 1. intialize board
// 2. create function that allows user to choose x or o
// 3. create function that allows user to choose spot on board
// 4. create function that allows computer to choose spot on board
// 5. create function that identifies winner
// 6. create function that identifies game over

// initialize tic-tac-toe gameboard;

const GameBoard = (() => {
    let gameBoard = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];

    const displayBoard = () => {
        for (let row of gameBoard) {
            console.log(row.join(' '));
        };
    };

    const makeMove = (row, col, symbol) => {
        if (gameBoard[row][col] === ' ') {
            gameBoard[row][col] = symbol;
            displayBoard();
        } else {
            console.log('Invalid move. Please choose another');
            return -1;
        };
    };

    const resetBoard = () => {
        gameBoard = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
    }

    return { displayBoard, makeMove, resetBoard };
})();

// initialize Player

const Player = ((name, symbol) => {
    return { 
        name,
        symbol 
    };
});

// initialize GameController logic

const GameController = (() => {
    let player1;
    let player2;
    let currentPlayer;

    const startGame = (player1name, player2name) => {
        player1 = Player(player1name, "X");
        player2 = Player(player2name, "Y");
        currentPlayer = player1;
        console.log('Game start. ' + currentPlayer.name + ' goes first.')
        GameBoard.displayBoard();
    };

    const playerMove = (row, col) => {
        let move = GameBoard.makeMove(row, col, currentPlayer.symbol);
        // only switches player if move was valid
        if (move !== -1) {
            switchPlayer();
        }
        console.log(currentPlayer.name + "'s turn.");

    };

    const switchPlayer = () => currentPlayer = currentPlayer === player1 ? player2 : player1;

    const resetGame = () => {
        GameBoard.resetBoard();
        player1 = null;
        player2 = null;
        currentPlayer = null;
    }

    return { startGame, playerMove, resetGame };
})();


GameController.startGame('Max', 'Atlas');
GameController.playerMove(0, 0);
GameController.playerMove(0, 0);
GameController.playerMove(0, 0);
GameController.playerMove(0, 1);
GameController.playerMove(0, 2);
GameController.playerMove(0, 2);






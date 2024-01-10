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

    const allTilesPlayed = () => {
        for (let row of gameBoard) {
            for (let cell of row) {
                if (cell === ' ') {
                    return false;
                }
            }
        }

        return true;
    }

    const resetBoard = () => {
        gameBoard = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
    }

    return { displayBoard, makeMove, resetBoard, gameBoard, allTilesPlayed };
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
    let gameActive = true;

    const startGame = (player1name, player2name) => {
        player1 = Player(player1name, "X");
        player2 = Player(player2name, "O");
        currentPlayer = player1;
        console.log('Game start. ' + currentPlayer.name + ' goes first.')
        GameBoard.displayBoard();
    };

    const getCurrentPlayer = () => {
        return currentPlayer ? currentPlayer : '';
    };


    const playerMove = (row, col) => {
        if (gameActive) {
            let move = GameBoard.makeMove(row, col, currentPlayer.symbol);
            winner();
            // only switches player if move was valid
            if (move !== -1) {
                switchPlayer();
            }
            if (gameActive) {
                console.log(currentPlayer.name + "'s turn.");
            }
        }
    };

    const switchPlayer = () => currentPlayer = currentPlayer === player1 ? player2 : player1;

    const resetGame = () => {
        GameBoard.resetBoard();
        player1 = null;
        player2 = null;
        currentPlayer = null;
        gameActive = true;
    }

    const endGame = () => {
        gameActive = false;
    }

    // checks for winner row, col, and diagonal
    const winner = () => { 
        if (GameBoard.allTilesPlayed()) {
            console.log("It's a tie!");
            endGame();
        }
        // check rows
        for (let row = 0; row < 3; row++) {
            if (
                GameBoard.gameBoard[row][0] === currentPlayer.symbol &&
                GameBoard.gameBoard[row][1] === currentPlayer.symbol &&
                GameBoard.gameBoard[row][2] === currentPlayer.symbol
            ) {
                console.log(currentPlayer.name + ' has won row');
                endGame();
            }
        }

        // check columns
        for (let col = 0; col < 3; col++) {
            if (
                GameBoard.gameBoard[0][col] === currentPlayer.symbol &&
                GameBoard.gameBoard[1][col] === currentPlayer.symbol &&
                GameBoard.gameBoard[2][col] === currentPlayer.symbol
            ) {
                console.log(currentPlayer.name + ' has won column');
                endGame();
            }
        }

        // check diagonal
        if (
            GameBoard.gameBoard[0][0] === currentPlayer.symbol &&
            GameBoard.gameBoard[1][1] === currentPlayer.symbol &&
            GameBoard.gameBoard[2][2] === currentPlayer.symbol ||
            GameBoard.gameBoard[0][2] === currentPlayer.symbol &&
            GameBoard.gameBoard[1][1] === currentPlayer.symbol &&
            GameBoard.gameBoard[2][0] === currentPlayer.symbol
        ) {
            console.log(currentPlayer.name + ' won diagonal');
            endGame();
        }
    }

    const getGameStatus = () => {
        return gameActive;
    }

    return { startGame, playerMove, resetGame, getCurrentPlayer, getGameStatus };
})();

const DisplayController = (() => {
    const gameTiles = document.querySelectorAll('.game-tile');
    const currentPlayerSpan = document.querySelector('.currentPlayer');


    gameTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const row = tile.dataset.row;
            const col = tile.dataset.col;
            tile.textContent = GameController.getCurrentPlayer().symbol;
            GameController.playerMove(row, col);
            updateTurnIndicator();
        })
    });

    const updateTurnIndicator = () => {
        currentPlayerSpan.textContent = GameController.getCurrentPlayer().name;
    };

    return { gameTiles, updateTurnIndicator };

})();


GameController.startGame('Max', 'Atlas');
// DisplayController.updateTurnIndicator();






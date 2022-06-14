const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    (function renderBoard() {
        const boardContainer = document.querySelector(".gameboard")

        for (let i = 0; i < 9; i++) {
            const boardCell = document.createElement("div")
            boardCell.classList.add("cell")
            boardCell.id = i
            boardCell.textContent = board[i]
            boardContainer.appendChild(boardCell)
        }
    })()

    const cells = document.querySelectorAll(".cell")
    
    let i = 0
    cells.forEach(cell => {
        cell.addEventListener("click", function() {
            if (game.endGame() !== 1 && game.endGame() !== 2) {

                const cellId = cell.id
                if (i % 2 === 0) board[cellId] = game.player1.choice
                else board[cellId] = game.player2.choice
                this.textContent = board[cellId]
                i++
            }
            
            if (game.endGame() === 1) console.log("Player 1 WINS!")
            if (game.endGame() === 2) console.log("Player 2 WINS!")
            if (game.endGame() === 0) console.log("Tie")            
        }, {once: true})
    })

    return {board}
})()

const PlayerFactory = (name, choice) => ({name, choice})

const game = (() => {
    const player1 = PlayerFactory("John", "X")
    const player2 = PlayerFactory("Jane", "O");

    function endGame() {
        const board = gameBoard.board
        let winner
        if ((board[0] === "X" && board[1] === "X" && board[2] === "X") ||
            (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
            (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
            
            (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
            (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
            (board[2] === "X" && board[5] === "X" && board[8] === "X") ||

            (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
            (board[2] === "X" && board[4] === "X" && board[6] === "X")) {
                return winner = 1
            }
        else if ((board[0] === "O" && board[1] === "O" && board[2] === "O") ||
            (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
            (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
            
            (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
            (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
            (board[2] === "O" && board[5] === "O" && board[8] === "O") ||

            (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
            (board[2] === "O" && board[4] === "O" && board[6] === "O")) {
                return winner = 2
            }
        else if (board[0] && board[1] && board[2] &&
            board[3] && board[4] && board[5] &&
            board[6] && board[7] && board[8]) return winner = 0
        
    }

    return {player1, player2, endGame}
})();
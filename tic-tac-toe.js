const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];

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

    function cellClick() {
        if (game.endGame() !== 1 && game.endGame() !== 2) {

            const cellId = this.id
            if (i % 2 === 0) {
                board[cellId] = game.player1.choice
                turn.textContent = game.player2.name + "'s turn"
            }
            else {
                board[cellId] = game.player2.choice
                turn.textContent = game.player1.name + "'s turn"
            }
            this.textContent = board[cellId]
            i++
        }
        
        if (game.endGame() === 1) turn.textContent = game.player1.name + " wins!"
        if (game.endGame() === 2) turn.textContent = game.player2.name + " wins!"
        if (game.endGame() === 0) turn.textContent = "Draw!"            
    }    

    cells.forEach(cell => {
        cell.addEventListener("click", cellClick, {once: true})
    })

    restart.addEventListener("click", function() {
        gameBoard.board = ["", "", "", "", "", "", "", "", ""];
        board = gameBoard.board

        cells.forEach(cell => {
            cell.textContent = ""
            cell.addEventListener("click", cellClick, {once: true})
        })

        game.player1.name = ""
        game.player2.name = ""

        const boardContainer = document.querySelector(".gameboard")
        const welcomeScreen = document.querySelector(".gamestart")

        boardContainer.classList.add("hide")
        turn.classList.add("hide")
        welcomeScreen.classList.remove("hide")
        restart.classList.add("hide")
    })
    return {board}
})()

const PlayerFactory = (name, choice) => ({name, choice})

const game = (() => {
    
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
            board[6] && board[7] && board[8]) {
                return winner = 0
        }        
    };

    let player1
    let player2

    const startgame = (function() {

        const startButton = document.querySelector(".startbtn")
        startButton.addEventListener("click", function() {

            const playerInput1 = document.querySelector(".player1")
            const playerInput2 = document.querySelector(".player2")

            game.player1 = PlayerFactory(playerInput1.value, "X")
            game.player2 = PlayerFactory(playerInput2.value, "O")

            const boardContainer = document.querySelector(".gameboard")
            boardContainer.classList.remove("hide")
            turn.classList.remove("hide")

            const welcomeScreen = document.querySelector(".gamestart")
            welcomeScreen.classList.add("hide")

            turn.textContent = game.player1.name + "'s turn"
            restart.classList.remove("hide")
        })
        return {player1, player2}
    })()        
    
    return {player1, player2, endGame}
})();
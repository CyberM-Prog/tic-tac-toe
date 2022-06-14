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
            console.log(boardCell.id)
        }
    })()

    const cells = document.querySelectorAll(".cell")
    
    let i = 0
    cells.forEach(cell => {
        cell.addEventListener("click", function() {
            const cellId = cell.id
            if (i % 2 === 0) board[cellId] = game.player1.choice
            else board[cellId] = game.player2.choice
            this.textContent = board[cellId]
            i++
            console.log(board)
        }, {once: true})
    })

    return {board}
})()

const PlayerFactory = (name, choice) => ({name, choice})

const game = (() => {
    const player1 = PlayerFactory("John", "X")
    const player2 = PlayerFactory("Jane", "O")
    return {player1, player2}
})();
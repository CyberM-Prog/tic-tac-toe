const gameBoard = (() => {
    const board = ["O", "X", "O", "O", "O", "X", "X", "O", "X"]

    function renderBoard() {
        const boardContainer = document.querySelector(".gameboard")

        for (let i = 0; i < 9; i++) {
            const boardCell = document.createElement("div")
            boardCell.classList.add("cell")
            boardCell.textContent = board[i]
            boardContainer.appendChild(boardCell)
        }
    }
    renderBoard()

    return {board}
})()

const PlayerFactory = (name, choice) => {name, choice}

const game = () => {}
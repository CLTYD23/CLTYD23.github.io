import { WINNER_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardToCheck) => { 
    //revisamos todas las configuraciones ganadoras para ver si ganó X o O.
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] && // 0 -> x u o
            boardToCheck[a] == boardToCheck[b] &&
            boardToCheck[a] == boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    return false
}

export const checkEndGame = (newBoard) => { //Revisamos si hay un empate (cuando ya no hay más espacios vacíos)
    return newBoard.every((square) => square != null) //si todas las posiciones son diferentes a null
}
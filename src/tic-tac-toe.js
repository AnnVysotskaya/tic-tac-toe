class TicTacToe {
    constructor() {
        this.turn = 0;
        this.gameField = new Array();
        for (var i = 0; i < 3; i++) {
            this.gameField[i] = new Array();
            for (var j = 0; j < 3; j++) {
                this.gameField[i][j] = null;
            }
        }

    }

    getCurrentPlayerSymbol() {
        return this.turn % 2 === 0 ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField [rowIndex][columnIndex] == null) {
            this.gameField [rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.turn++;
            this.isFinished();
        }
    }

    isFinished() {

        return !(this.getWinner() == null) || this.noMoreTurns();
    }

    getWinner() {
        if (this.checkWinner(this.gameField[0][0], this.gameField[0][1], this.gameField[0][2]) ||
            this.checkWinner(this.gameField[1][0], this.gameField[1][1], this.gameField[1][2]) ||
            this.checkWinner(this.gameField[2][0], this.gameField[2][1], this.gameField[2][2]) ||
            this.checkWinner(this.gameField[0][0], this.gameField[1][1], this.gameField[2][2]) ||
            this.checkWinner(this.gameField[0][2], this.gameField[1][1], this.gameField[2][0]) ||
            this.checkWinner(this.gameField[0][0], this.gameField[1][0], this.gameField[2][0]) ||
            this.checkWinner(this.gameField[0][1], this.gameField[1][1], this.gameField[2][1]) ||
            this.checkWinner(this.gameField[0][2], this.gameField[1][2], this.gameField[2][2])) {
            return this.turn % 2 == 1 ? 'x' : 'o';
        }
        else return null;
    }

    noMoreTurns() {
        return this.turn >= 9;
    }

    isDraw() {
        if (this.noMoreTurns() && (this.getWinner() == null))
            return true;
        else
            return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }

    checkWinner(cell1, cell2, cell3) {
        return (cell1 == cell2) && (cell2 == cell3) && (cell1 != null);
    }
}

module.exports = TicTacToe;

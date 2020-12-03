/**
 * This grid is created by passing an array of rows.
 * You can ask for you current position in the grid and call the move method
 */
class Day3Grid {
  currentRow = 0;
  currentCol = 0;

  virtualLastCol;

  constructor(input) {
    this.data = input;
    this.virtualLastCol = input[0].length - 1;
  }

  getCurrentPosition() {
    return [this.currentRow, this.currentCol];
  }

  getItemAtCurrentPosition() {
    return this.data[this.currentRow][this.currentCol];
  }

  move() {
    const stepsRight = 3;
    const stepsDown = 1;
    let newCol = this.currentCol + stepsRight;

    const movedOverTheBorder = newCol > this.virtualLastCol;
    if (movedOverTheBorder) {
      // re-enter the grid from the left
      newCol = newCol - this.virtualLastCol - 1;
    }
    this.currentCol = newCol;
    this.currentRow = this.currentRow + 1;
  }

  isCurrentPositionInLastRow() {
    return this.currentRow === this.data.length - 1;
  }
}

module.exports = { Day3Grid };

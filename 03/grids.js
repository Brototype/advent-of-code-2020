/**
 * This grid is created by passing an array of rows.
 * You can ask for you current position in the grid and call the move method
 */
class Day3Grid {
  currentRow = 0;
  currentCol = 0;

  virtualLastCol;

  constructor(input, movePattern) {
    this.data = input;
    this.virtualLastCol = input[0].length - 1;
    if (movePattern) {
      this.movePattern = movePattern;
    } else {
      this.movePattern = {
        stepsRight: 3,
        stepsDown: 1,
      };
    }
  }

  getCurrentPosition() {
    return [this.currentRow, this.currentCol];
  }

  getItemAtCurrentPosition() {
    return this.data[this.currentRow][this.currentCol];
  }

  move() {
    let newCol = this.currentCol + this.movePattern.stepsRight;

    const movedOverTheBorder = newCol > this.virtualLastCol;
    if (movedOverTheBorder) {
      // re-enter the grid from the left
      newCol = newCol - this.virtualLastCol - 1;
    }
    this.currentCol = newCol;
    this.currentRow = this.currentRow + this.movePattern.stepsDown;
  }

  isCurrentPositionInLastRow() {
    return this.currentRow === this.data.length - 1;
  }
}

module.exports = { Day3Grid };

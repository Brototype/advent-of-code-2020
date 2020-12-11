/**
 * This grid is created by passing an array of rows.
 * You can ask for you current position in the grid and call the move method
 */
module.exports.SeatGrid = class SeatGrid {
  cols = 0;
  rows = 0;
  gridData = [];

  constructor(input) {
    this.gridData = this.convertToGridData(input);
    this.rows = this.gridData.length;
    this.cols = this.gridData[0].length;
  }

  getOccupiedSeats() {
    let number = 0;

    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if ("#" === this.getStateAtPosition(row, col)) {
          number++;
        }
      }
    }
    return number;
  }

  convertToGridData(input) {
    const gridData = [];

    input.forEach((row) => {
      const cols = row.split("");
      gridData.push(cols);
    });

    return gridData;
  }

  applyRules() {
    let numberOfChanges = 0;

    const newData = JSON.parse(JSON.stringify(this.gridData));

    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const newStateForPosition = this.getNewStateForPosition(row, col);
        newData[row][col] = newStateForPosition;
        if (newStateForPosition !== this.getStateAtPosition(row, col)) {
          numberOfChanges++;
        }
      }
    }
    this.gridData = newData;
    return numberOfChanges;
  }

  getNewStateForPosition(row, col) {
    const currentState = this.getStateAtPosition(row, col);
    const numberOfOccupiedAdjacentSeats = this.getNumberOfOccupiedAdjacentSeats(
      row,
      col
    );

    switch (currentState) {
      case "L":
        if (0 === numberOfOccupiedAdjacentSeats) {
          return "#";
        } else {
          return "L";
        }
        break;
      case "#":
        if (4 <= numberOfOccupiedAdjacentSeats) {
          return "L";
        } else {
          return "#";
        }
        break;
      case ".":
        return ".";
        break;
      default:
        throw new Error("unhandled " + currentState);
    }
  }

  getStateAtPosition(row, col) {
    if (this.gridData[row] && this.gridData[row][col]) {
      return this.gridData[row][col];
    } else {
      return undefined;
    }
  }

  getNumberOfOccupiedAdjacentSeats(row, col) {
    let number = 0;

    for (let currentRow = row - 1; currentRow < row + 2; currentRow++) {
      for (let currentCol = col - 1; currentCol < col + 2; currentCol++) {
        const stateAtPosition = this.getStateAtPosition(currentRow, currentCol);
        if (
          stateAtPosition &&
          !(row === currentRow && col === currentCol) &&
          "#" === stateAtPosition
        ) {
          number++;
        }
      }
    }

    return number;
  }
};

/**
 * This grid is created by passing an array of rows.
 * You can ask for you current position in the grid and call the move method
 */
module.exports.SeatGrid = class SeatGrid {
  cols = 0;
  rows = 0;
  gridData = [];

  constructor(input, part = 1) {
    this.gridData = this.convertToGridData(input);
    this.rows = this.gridData.length;
    this.cols = this.gridData[0].length;

    if (part === 1) {
      this.minOccupiedSeatsToSwapToFree = 4;
    }
    if (part === 2) {
      this.minOccupiedSeatsToSwapToFree = 5;
    }
    this.part = part;
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
    let numberOfOccupiedSeats;

    if (this.part === 1) {
      numberOfOccupiedSeats = this.getNumberOfOccupiedAdjacentSeats(row, col);
    }

    if (this.part === 2) {
      numberOfOccupiedSeats = this.getNumberOfVisibleOccupiedAdjacentSeats(
        row,
        col
      );
    }

    switch (currentState) {
      case "L":
        if (0 === numberOfOccupiedSeats) {
          return "#";
        } else {
          return "L";
        }
        break;
      case "#":
        if (this.minOccupiedSeatsToSwapToFree <= numberOfOccupiedSeats) {
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

  getNumberOfVisibleOccupiedAdjacentSeats(row, col) {
    let number = 0;

    // find them for

    // north;
    for (let currentRow = row - 1; currentRow >= 0; currentRow--) {
      const stateAtPosition = this.getStateAtPosition(currentRow, col);
      if (stateAtPosition === "#") {
        number++;
        break;
      }
      if (stateAtPosition === "L") {
        break;
      }
    }

    //west
    for (let currentCol = col - 1; currentCol >= 0; currentCol--) {
      const stateAtPosition = this.getStateAtPosition(row, currentCol);
      if (stateAtPosition === "#") {
        number++;
        break;
      }
      if (stateAtPosition === "L") {
        break;
      }
    }

    // east;
    for (let currentCol = col + 1; currentCol < this.cols; currentCol++) {
      const stateAtPosition = this.getStateAtPosition(row, currentCol);
      if (stateAtPosition === "#") {
        number++;
        break;
      }
      if (stateAtPosition === "L") {
        break;
      }
    }

    // south;
    for (let currentRow = row + 1; currentRow < this.rows; currentRow++) {
      const stateAtPosition = this.getStateAtPosition(currentRow, col);
      if (stateAtPosition === "#") {
        number++;
        break;
      }
      if (stateAtPosition === "L") {
        break;
      }
    }

    // northEast;
    for (
      let currentRow = row - 1, currentCol = col + 1;
      currentRow >= 0, currentCol < this.cols;
      currentRow--, currentCol++
    ) {
      const stateAtPosition = this.getStateAtPosition(currentRow, currentCol);
      if (stateAtPosition === "#") {
        number++;
        break;
      }
      if (stateAtPosition === "L") {
        break;
      }
    }

    // southEast;
    for (
      let currentRow = row + 1, currentCol = col + 1;
      currentRow < this.rows, currentCol < this.cols;
      currentRow++, currentCol++
    ) {
      const stateAtPosition = this.getStateAtPosition(currentRow, currentCol);
      if (stateAtPosition === "#") {
        number++;
        break;
      }
      if (stateAtPosition === "L") {
        break;
      }
    }

    // southWest;
    for (
      let currentRow = row + 1, currentCol = col - 1;
      currentRow < this.rows, currentCol >= 0;
      currentRow++, currentCol--
    ) {
      const stateAtPosition = this.getStateAtPosition(currentRow, currentCol);
      if (stateAtPosition === "#") {
        number++;
        break;
      }
      if (stateAtPosition === "L") {
        break;
      }
    }

    // northWest;
    for (
      let currentRow = row - 1, currentCol = col - 1;
      currentRow >= 0, currentCol >= 0;
      currentRow--, currentCol--
    ) {
      const stateAtPosition = this.getStateAtPosition(currentRow, currentCol);
      if (stateAtPosition === "#") {
        number++;
        break;
      }
      if (stateAtPosition === "L") {
        break;
      }
    }

    return number;
  }
};

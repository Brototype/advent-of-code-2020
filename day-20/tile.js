module.exports.Tile = class Tile {
  /**
   * each rotation changes orientation
   * possible values = 90,180,270,0
   * @type {number}
   */
  orientation = 0;

  /**
   * each horizontal flip toggles flipped status
   * @type {boolean}
   */
  flippedHorizontally = false;

  /**
   * each vertical flip toggles the flipped status
   * @type {boolean}
   */
  flippedVertically = false;

  /**
   * inner matrix that represents the tile data
   * @type {[]}
   */
  matrix = [];

  constructor(blob) {
    const [rawId, ...rows] = blob.split("\n");
    this.id = Number(rawId.match(/\d+/)[0]);
    this.matrix = rows.map((row) => row.split(""));
    this.explicitAndReversedBorders = this.getExplicitAndReversedBorders();
  }

  rotate90() {
    // thank you https://stackoverflow.com/a/58668351
    this.matrix = this.matrix[0].map((val, index) =>
      this.matrix.map((row) => row[index]).reverse()
    );
    // cover for the rotation exceeding 270 (we are back in start orientation)
    if (this.orientation === 270) {
      this.orientation = 0;
    } else {
      this.orientation += 90;
    }
  }

  flipVertically() {
    this.matrix = this.matrix.reverse();
    // toggle the flipped state
    this.flippedVertically = !this.flippedVertically;
  }

  flipHorizontally() {
    this.matrix = this.matrix.map((value) => value.reverse());
    // toggle the flipped state
    this.flippedHorizontally = !this.flippedHorizontally;
  }

  print() {
    let str = "";
    for (let row of this.matrix) {
      str = str + row.join("") + "\n";
    }
    console.log(str);
  }

  hasNextPosition() {
    return this.position !== 7;
  }

  resetPosition() {
    while (this.position !== 0) {
      this.transitionToNextPosition();
    }
  }

  position = 0;
  transitionToNextPosition() {
    switch (this.position) {
      case 0:
        // from 0 we can reach 3 state by rotating
        this.rotate90();
        this.position++;
        break;
      case 1:
        this.rotate90();
        this.position++;
        break;
      case 2:
        this.rotate90();
        this.position++;
        break;
      case 3:
        //we are almost back so we rotate to state 0 but also flip vertically
        this.rotate90();
        this.flipVertically();
        this.position++;
        break;
      case 4:
        // from 4 we can again reach 3 different states by rotation
        this.rotate90();
        this.position++;
        break;
      case 5:
        this.rotate90();
        this.position++;
        break;
      case 6:
        this.rotate90();
        this.position++;
        break;
      case 7:
        // if we rotate now we would be back in s4 - so we also flip and reset to 0
        this.rotate90();
        this.flipVertically();
        this.position = 0;
        break;
      default:
        throw new Error("position " + this.position + " not handled");
    }
  }

  getExplicitAndReversedBorders() {
    const explicitBorders = this.getExplicitBorders();
    const reversedBorders = explicitBorders.map((border) =>
      [...border].reverse().join("")
    );
    return [explicitBorders, reversedBorders];
  }

  getExplicitBorders() {
    const topBorder = this.matrix[0].join();
    const bottomBorder = this.matrix[this.matrix.length - 1].join();
    const leftBorder = Array.from(
      { length: this.matrix.length },
      (_, i) => this.matrix[i][0]
    ).join();
    const rightBorder = Array.from(
      { length: this.matrix.length },
      (_, i) => this.matrix[i][this.matrix.length - 1]
    ).join();

    return [topBorder, bottomBorder, leftBorder, rightBorder];
  }
};

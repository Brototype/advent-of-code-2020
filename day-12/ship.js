module.exports.Ship = class Ship {
  currentPosition = { north: 0, east: 0 };
  facingIndex = 0;
  directions = ["EAST", "SOUTH", "WEST", "NORTH"];

  get facing() {
    return this.directions[this.facingIndex];
  }

  constructor() {}

  move(instruction) {
    const direction = instruction.substr(0, 1);
    const amount = parseInt(instruction.substr(1));
    switch (direction) {
      case "N": {
        this._moveNorth(amount);
        break;
      }
      case "S": {
        this._moveSouth(amount);
        break;
      }
      case "E": {
        this._moveEast(amount);
        break;
      }
      case "W": {
        this._moveWest(amount);
        break;
      }
      case "L": {
        this._rotateLeft(amount);
        break;
      }
      case "R": {
        this._rotateRight(amount);
        break;
      }
      case "F": {
        switch (this.facingIndex) {
          case 0:
            this._moveEast(amount);
            break;
          case 1:
            this._moveSouth(amount);
            break;
          case 2:
            this._moveWest(amount);
            break;
          case 3: {
            this._moveNorth(amount);
            break;
          }
        }
        break;
      }
      default:
        throw new Error("direction " + direction + " not handled");
    }
  }

  _rotateRight(amount) {
    const steps = amount / 90;
    let newIndex = this.facingIndex + steps;
    if (newIndex > 3) {
      newIndex = newIndex % 4;
    }
    this.facingIndex = newIndex;
  }

  _rotateLeft(amount) {
    const steps = amount / 90;
    let newIndex = this.facingIndex - steps;
    if (newIndex < 0) {
      newIndex = 4 + newIndex;
    }
    this.facingIndex = newIndex;
  }

  _moveWest(amount) {
    this.currentPosition.east = this.currentPosition.east - amount;
  }

  _moveEast(amount) {
    this.currentPosition.east = this.currentPosition.east + amount;
  }

  _moveSouth(amount) {
    this.currentPosition.north = this.currentPosition.north - amount;
  }

  _moveNorth(amount) {
    this.currentPosition.north = this.currentPosition.north + amount;
  }
};

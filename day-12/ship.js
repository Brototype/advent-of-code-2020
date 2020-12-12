module.exports.Ship = class Ship {
  currentPosition = { north: 0, east: 0 };
  relativePositionOfWaypoint = { north: 1, east: 10 };

  facingIndex = 0;
  directions = ["EAST", "SOUTH", "WEST", "NORTH"];

  get facing() {
    return this.directions[this.facingIndex];
  }

  constructor() {}

  _getWaypointAbsolutePosition() {
    return {
      north: this.currentPosition.north + this.relativePositionOfWaypoint.north,
      east: this.currentPosition.east + this.relativePositionOfWaypoint.east,
    };
  }

  move(instruction, relatedToWaypoint = false) {
    const direction = instruction.substr(0, 1);
    const amount = parseInt(instruction.substr(1));
    switch (direction) {
      case "N": {
        if (relatedToWaypoint) {
          this._moveWaypointNorth(amount);
        } else {
          this._moveShipNorth(amount);
        }
        break;
      }
      case "S": {
        if (relatedToWaypoint) {
          this._moveWaypointSouth(amount);
        } else {
          this._moveShipSouth(amount);
        }
        break;
      }
      case "E": {
        if (relatedToWaypoint) {
          this._moveWaypointEast(amount);
        } else {
          this._moveShipEast(amount);
        }
        break;
      }
      case "W": {
        if (relatedToWaypoint) {
          this._moveWaypointWest(amount);
        } else {
          this._moveShipWest(amount);
        }
        break;
      }
      case "L": {
        if (relatedToWaypoint) {
          this._rotateWaypointLeft(amount);
        } else {
          this._rotateShipLeft(amount);
        }
        break;
      }
      case "R": {
        if (relatedToWaypoint) {
          this._rotateWaypointRight(amount);
        } else {
          this._rotateShipRight(amount);
        }
        break;
      }
      case "F": {
        if (relatedToWaypoint) {
          this._moveForwardDependingOnWaypoint(amount);
        } else {
          this._moveForwardDependingOnFacing(amount);
        }
        break;
      }
      default:
        throw new Error("direction " + direction + " not handled");
    }
  }

  _moveForwardDependingOnWaypoint(amount) {
    // north / south movement
    if (this.relativePositionOfWaypoint.north > 0) {
      this._moveShipNorth(
        Math.abs(this.relativePositionOfWaypoint.north) * amount
      );
    } else {
      this._moveShipSouth(
        Math.abs(this.relativePositionOfWaypoint.north) * amount
      );
    }
    // east / west movement
    if (this.relativePositionOfWaypoint.east > 0) {
      this._moveShipEast(
        Math.abs(this.relativePositionOfWaypoint.east) * amount
      );
    } else {
      this._moveShipWest(
        Math.abs(this.relativePositionOfWaypoint.east) * amount
      );
    }
  }

  _moveForwardDependingOnFacing(amount) {
    switch (this.facingIndex) {
      case 0:
        this._moveShipEast(amount);
        break;
      case 1:
        this._moveShipSouth(amount);
        break;
      case 2:
        this._moveShipWest(amount);
        break;
      case 3: {
        this._moveShipNorth(amount);
        break;
      }
    }
  }

  _rotateShipRight(amount) {
    const steps = amount / 90;
    let newIndex = this.facingIndex + steps;
    if (newIndex > 3) {
      newIndex = newIndex % 4;
    }
    this.facingIndex = newIndex;
  }

  _rotateShipLeft(amount) {
    const steps = amount / 90;
    let newIndex = this.facingIndex - steps;
    if (newIndex < 0) {
      newIndex = 4 + newIndex;
    }
    this.facingIndex = newIndex;
  }

  _moveShipNorth(amount) {
    this.currentPosition.north = this.currentPosition.north + amount;
  }

  _moveShipEast(amount) {
    this.currentPosition.east = this.currentPosition.east + amount;
  }

  _moveShipSouth(amount) {
    this.currentPosition.north = this.currentPosition.north - amount;
  }

  _moveShipWest(amount) {
    this.currentPosition.east = this.currentPosition.east - amount;
  }

  _moveWaypointNorth(amount) {
    this.relativePositionOfWaypoint.north =
      this.relativePositionOfWaypoint.north + amount;
  }

  _moveWaypointEast(amount) {
    this.relativePositionOfWaypoint.east =
      this.relativePositionOfWaypoint.east + amount;
  }

  _moveWaypointSouth(amount) {
    this.relativePositionOfWaypoint.north =
      this.relativePositionOfWaypoint.north - amount;
  }

  _moveWaypointWest(amount) {
    this.relativePositionOfWaypoint.east =
      this.relativePositionOfWaypoint.east - amount;
  }

  _rotateWaypointRight90() {
    const wp = this.relativePositionOfWaypoint;
    if (wp.north >= 0 && wp.east >= 0) {
      this.relativePositionOfWaypoint = {
        north: -Math.abs(wp.east),
        east: Math.abs(wp.north),
      };
    } else if (wp.north <= 0 && wp.east >= 0) {
      this.relativePositionOfWaypoint = {
        north: -Math.abs(wp.east),
        east: -Math.abs(wp.north),
      };
    } else if (wp.north <= 0 && wp.east <= 0) {
      this.relativePositionOfWaypoint = {
        north: Math.abs(wp.east),
        east: -Math.abs(wp.north),
      };
    } else if (wp.north >= 0 && wp.east <= 0) {
      this.relativePositionOfWaypoint = {
        north: Math.abs(wp.east),
        east: Math.abs(wp.north),
      };
    } else {
      throw new Error("unhandled relative position");
    }
  }

  _rotateWaypointRight(amount) {
    const amounts = amount / 90;
    for (let i = 0; i < amounts; i++) {
      this._rotateWaypointRight90();
    }
  }

  _rotateWaypointLeft(amount) {
    const amounts = 4 - amount / 90;
    for (let i = 0; i < amounts; i++) {
      this._rotateWaypointRight90();
    }
  }
};

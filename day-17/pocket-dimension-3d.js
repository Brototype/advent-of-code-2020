module.exports.PocketDimension3d = class PocketDimension3d {
  coordinatesOfActiveCubes = new Set(); //"x,y,z"
  allCoordinatesAndStatus = new Map(); // "x,y,z" => "#" or "."

  constructor() {}

  initialize(data) {
    const z = 0;
    for (let y = 0; y < data.length; y++) {
      const row = data[y];
      const cols = row.split("");
      for (let x = 0; x < cols.length; x++) {
        const active = cols[x] !== ".";
        const coordinateString = this.coordinatesToString(x, y, z);
        if (active) {
          this.coordinatesOfActiveCubes.add(coordinateString);
        }
        this.allCoordinatesAndStatus.set(coordinateString, cols[x]);
      }
    }
  }

  runBootProcess() {
    for (let i = 0; i < 6; i++) {
      this.runCycle();
    }
  }

  getActiveCubes() {
    return this.coordinatesOfActiveCubes.size;
  }

  runCycle() {
    const newCoordinatesOfActiveCubes = new Set(); //"x,y,z"
    const newAllCoordinatesAndStatus = new Map(); // "x,y,z" => "#" or "."

    // add all neighbors to the map
    let allNewNeighbors = new Set();
    this.allCoordinatesAndStatus.forEach((state, coordinates) => {
      const newNeighborsForCoordinate = this.getNewNeighbors(coordinates);
      newNeighborsForCoordinate.forEach((c) => allNewNeighbors.add(c));
    });

    allNewNeighbors.forEach((n) => {
      this.allCoordinatesAndStatus.set(n, ".");
    });

    //toggle states for all cubes that we currently have
    this.allCoordinatesAndStatus.forEach((state, coordinates) => {
      let newValue;
      const numberOfActiveNeighbors = this.getNumberOfActiveNeighbors(
        coordinates
      );
      if (state === "#") {
        if (numberOfActiveNeighbors === 2 || numberOfActiveNeighbors === 3) {
          newValue = "#";
          newCoordinatesOfActiveCubes.add(coordinates);
        } else {
          newValue = ".";
          newCoordinatesOfActiveCubes.delete(coordinates);
        }
      } else {
        if (numberOfActiveNeighbors === 3) {
          newValue = "#";
          newCoordinatesOfActiveCubes.add(coordinates);
        } else {
          newValue = ".";
          newCoordinatesOfActiveCubes.delete(coordinates);
        }
      }
      newAllCoordinatesAndStatus.set(coordinates, newValue);
    });

    this.coordinatesOfActiveCubes = newCoordinatesOfActiveCubes;
    this.allCoordinatesAndStatus = newAllCoordinatesAndStatus;
  }

  printLayer(z = 0) {
    let wholeString = "";
    for (let y = -10; y <= 10; y++) {
      let lineString = "";
      for (let x = -10; x <= 10; x++) {
        const s = this.coordinatesToString(x, y, z);
        if (this.allCoordinatesAndStatus.has(s)) {
          lineString = lineString + this.allCoordinatesAndStatus.get(s);
        }
      }
      if (lineString !== "") {
        wholeString = wholeString + lineString + "\n";
      }
    }
    console.log(wholeString);
  }

  getNumberOfActiveNeighbors(key) {
    const coords = this.keyToCoordinates(key);
    let numberOfActiveNeighbors = 0;
    for (let cX = coords.x - 1; cX <= coords.x + 1; cX++) {
      for (let cY = coords.y - 1; cY <= coords.y + 1; cY++) {
        for (let cZ = coords.z - 1; cZ <= coords.z + 1; cZ++) {
          const s = this.coordinatesToString(cX, cY, cZ);
          if (s !== key && this.coordinatesOfActiveCubes.has(s)) {
            numberOfActiveNeighbors++;
          }
        }
      }
    }
    return numberOfActiveNeighbors;
  }

  getNewNeighbors(key) {
    const coords = this.keyToCoordinates(key);
    const newNeighbors = [];
    for (let cX = coords.x - 1; cX <= coords.x + 1; cX++) {
      for (let cY = coords.y - 1; cY <= coords.y + 1; cY++) {
        for (let cZ = coords.z - 1; cZ <= coords.z + 1; cZ++) {
          const s = this.coordinatesToString(cX, cY, cZ);
          if (!this.allCoordinatesAndStatus.has(s)) {
            newNeighbors.push(s);
          }
        }
      }
    }
    return newNeighbors;
  }

  coordinatesToString(x, y, z) {
    return `${x},${y},${z}`;
  }

  keyToCoordinates(s) {
    const split = s.split(",");
    return { x: Number(split[0]), y: Number(split[1]), z: Number(split[2]) };
  }
};

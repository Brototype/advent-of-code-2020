const { Tile } = require("./tile");
module.exports.part1 = (data) => {
  // joining it again as we have to split on the double new lines first
  const rawInput = data.join("\n");

  const tiles = rawInput.split("\n\n").map((blob) => {
    return new Tile(blob);
  });

  const tilesToNeighborsMap = this.tileToNeighborsMap(tiles);

  const cornerTileIds = [];
  tilesToNeighborsMap.forEach((value, key) => {
    if (value.length === 2) {
      cornerTileIds.push(key);
    }
  });

  return cornerTileIds.reduce((a, b) => a * b);
};

module.exports.part2 = (data) => {
  return data.length;
};

module.exports.tileToNeighborsMap = (tiles) => {
  const tilesToNeighborsMap = new Map(); // tileId => tileId[]

  tiles.forEach((tile) => {
    const neighbors = tiles
      .filter((otherTile) => {
        // exclude the same tile
        if (tile === otherTile) return false;
        for (let b of tile.explicitAndReversedBorders) {
          for (let bb of otherTile.explicitAndReversedBorders) {
            if (new Set([...b, ...bb]).size < 8) {
              return true;
            }
          }
        }
        return false;
      })
      .map((x) => x.id);

    tilesToNeighborsMap.set(tile.id, neighbors);
  });
  return tilesToNeighborsMap;
};

module.exports.part1 = (data) => {
  const allIds = data.map((d) => this.getSeatId(d));
  return Math.max(...allIds);
};

module.exports.part2 = (data) => {
  const allFoundIds = data.map((d) => this.getSeatId(d));
  const min = Math.min(...allFoundIds);
  const max = Math.max(...allFoundIds);

  const allPossibleIds = Array.apply(null, { length: max + 1 })
    .map(Number.call, Number)
    .slice(min);

  // find all missing numbers in the list
  const allMissingIds = allPossibleIds
    .map((x) => {
      if (allFoundIds.includes(x)) {
        return -1;
      } else {
        return x;
      }
    })
    .filter((x) => x !== -1);

  // for each missing numbers check if -1 and +1 are in the list ...
  // if yes this is my id
  return allMissingIds
    .map((x) => {
      if (allFoundIds.includes(x - 1) && allFoundIds.includes(x + 1)) {
        return x;
      } else {
        return -1;
      }
    })
    .filter((x) => x !== -1)[0];
};

module.exports.getSeatId = (instruction) => {
  const row = this.getRow(instruction);
  const col = this.getCol(instruction);
  return row * 8 + col;
};

module.exports.getRow = (instruction) => {
  let currentMinRow = 0;
  let currentMaxRow = 127;

  const rowInstructions = instruction.substr(0, 8);
  rowInstructions.split("").forEach((char) => {
    const newMinAndNewMaxRow = this.getNewMinAndNewMaxRowOrCol(
      char,
      currentMinRow,
      currentMaxRow
    );
    currentMinRow = newMinAndNewMaxRow.min;
    currentMaxRow = newMinAndNewMaxRow.max;
  });
  return currentMinRow;
};

module.exports.getCol = (instruction) => {
  let currentMinRow = 0;

  let currentMaxRow = 7;
  const colInstructions = instruction.substr(
    instruction.length - 3,
    instruction.length - 1
  );
  colInstructions.split("").forEach((char) => {
    const newMinAndNewMaxCol = this.getNewMinAndNewMaxRowOrCol(
      char,
      currentMinRow,
      currentMaxRow
    );
    currentMinRow = newMinAndNewMaxCol.min;
    currentMaxRow = newMinAndNewMaxCol.max;
  });
  return currentMinRow;
};

module.exports.getNewMinAndNewMaxRowOrCol = (char, min, max) => {
  const ret = { min, max };
  switch (char) {
    case "F":
    case "L":
      ret.max = Math.floor(max - (max - min) / 2);
      break;
    case "B":
    case "R":
      ret.min = Math.ceil(min + (max - min) / 2);
  }
  return ret;
};

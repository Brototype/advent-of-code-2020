module.exports.part1 = (data) => {
  const startingTime = parseInt(data[0]);
  const busses = data[1]
    .split(",")
    .filter((b) => b !== "x")
    .map((b) => parseInt(b));

  const earliestDepartures = this.getEarliestDepartures(startingTime, busses);

  earliestDepartures.sort((a, b) => a.waitingTime - b.waitingTime);

  const bestBus = earliestDepartures[0];
  return bestBus.waitingTime * bestBus.id;
};

module.exports.part2 = (data) => {
  return data.length;
};

module.exports.getEarliestDepartures = (startingTime, busses) => {
  return busses.map((b) => {
    const earliestDeparture = b * Math.ceil(startingTime / b);
    return {
      id: b,
      earliestDeparture,
      waitingTime: earliestDeparture - startingTime,
    };
  });
};

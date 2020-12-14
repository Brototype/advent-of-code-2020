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

module.exports.getOffsetForBusIdAtTime = (busId, time) => {
  return busId * Math.ceil(time / busId) - time;
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

module.exports.part2 = (data) => {
  const busses = data
    .slice(1)[0]
    .split(",")
    .map((id, i) => ({ id: parseInt(id), index: i }))
    .filter((bus) => !Number.isNaN(bus.id))
    .sort((b1, b2) => b2.id - b1.id)
    .map((bus) => ({
      id: BigInt(bus.id),
      offset: BigInt(this.absmod(bus.id - bus.index, bus.id)),
    }));

  let currentTime = busses[0].id;
  let targetTime = busses[0].offset;
  for (let i = 1; i < busses.length; i++) {
    const bus = busses[i];
    while (targetTime % bus.id !== bus.offset) {
      targetTime += currentTime;
    }
    currentTime *= bus.id;
  }
  return Number(targetTime);
};

module.exports.absmod = (a, n) => {
  while (a < 0) {
    a += n;
  }
  return a % n;
};

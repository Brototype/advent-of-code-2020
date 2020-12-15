function getSpokenNumberOfRound(numbers, targetRound) {
  const numberLastTurnMap = new Map();
  let round = 1;
  let lastNumber = numbers[numbers.length - 1];
  let newNumber;

  // init map
  numbers.forEach((number) => {
    numberLastTurnMap.set(number, round);
    round++;
  });

  // play
  while (round <= targetRound) {
    if (numberLastTurnMap.has(lastNumber)) {
      newNumber = round - 1 - numberLastTurnMap.get(lastNumber);
    } else {
      newNumber = 0;
    }
    numberLastTurnMap.set(lastNumber, round - 1);
    lastNumber = newNumber;
    round++;
  }
  return lastNumber;
}

module.exports.part1 = (data) => {
  const input = data[0];
  let numbers = input.split(",").map((x) => Number(x));
  const targetRound = 2020;
  return getSpokenNumberOfRound(numbers, targetRound);
};

module.exports.part2 = (data) => {
  const input = data[0];
  let numbers = input.split(",").map((x) => Number(x));
  const targetRound = 30000000;
  return getSpokenNumberOfRound(numbers, targetRound);
};

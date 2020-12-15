function geMostRecentMap(numbers) {
  const numberRoundsMap = new Map();
  for (let round = 1; round <= numbers.length; round++) {
    const index = round - 1;
    const currentNumber = numbers[index];
    const lastTwoRounds = numberRoundsMap.get(currentNumber);
    if (!lastTwoRounds) {
      numberRoundsMap.set(currentNumber, [round]);
    } else {
      if (lastTwoRounds.length < 2) {
        numberRoundsMap.set(currentNumber, [...lastTwoRounds, round]);
      } else {
        const newArray = [lastTwoRounds[1], round];
        numberRoundsMap.set(currentNumber, newArray);
      }
    }
  }
  return numberRoundsMap;
}

module.exports.part1 = (data) => {
  const input = data[0];
  let numbers = input.split(",").map((x) => Number(x));

  const targetRound = 2020;

  // initialize the map
  let numberRoundsMap = geMostRecentMap(numbers);

  for (let round = numbers.length + 1; round <= targetRound; round++) {
    const newIndex = round - 1;
    const lastNumberSpoken = numbers[newIndex - 1];
    if (numberRoundsMap.get(lastNumberSpoken).length === 1) {
      // first time spoken
      numbers.push(0);
    } else {
      // has been spoken >= twice before
      const delta =
        numberRoundsMap.get(lastNumberSpoken)[1] -
        numberRoundsMap.get(lastNumberSpoken)[0];
      numbers.push(delta);
    }
    numberRoundsMap = geMostRecentMap(numbers);
  }

  return numbers[targetRound - 1];
};

module.exports.part2 = (data) => {
  return data.length;
};

module.exports.part1 = (data) => {
  return this.findFirstViolation(
    data.map((x) => parseInt(x)),
    25
  );
};

module.exports.part2 = (data) => {
  return data.length;
};

module.exports.getAllPairs = (numbers) => {
  const allPairs = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i; j < numbers.length - 1; j++) {
      if (numbers[i] && numbers[j + 1]) {
        allPairs.push([numbers[i], numbers[j + 1]]);
      }
    }
  }
  return allPairs;
};

module.exports.getValidSums = (pairs) => {
  return pairs.map((pair) => {
    return pair[0] + pair[1];
  });
};

module.exports.getLastNNumbers = (i, n, numbers) => {
  const ar2 = numbers.slice(i - n, i);
  return ar2;
};

module.exports.findFirstViolation = (data, preambleLength) => {
  const numbers = data.map((s) => parseInt(s));

  for (let i = preambleLength; i < numbers.length; i++) {
    const validPairs = this.getAllPairs(
      this.getLastNNumbers(i, preambleLength, numbers),
      preambleLength
    );
    const validSums = this.getValidSums(validPairs);
    if (!validSums.includes(numbers[i])) {
      return numbers[i];
    }
  }
};

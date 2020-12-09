module.exports.part1 = (data) => {
  return this.findFirstViolation(
    data.map((x) => parseInt(x)),
    25
  );
};

module.exports.part2 = (data, goal) => {
  if (!goal) {
    goal = this.part1(data);
  }

  const numbers = data.map((x) => parseInt(x));

  let currentRange = [];

  let rangeMinIndex = 0;
  let rangeMaxIndex = rangeMinIndex + 1;
  currentRange.push(numbers[rangeMinIndex]);
  currentRange.push(numbers[rangeMaxIndex]);
  let currentSum = currentRange.reduce((a, b) => a + b, 0);
  while (currentSum !== goal) {
    if (currentSum > goal) {
      // if currentSum > solutionFromPart1 increment rangeMinIndex and reset setMaxIndex = rangeMinIndex + 1
      rangeMinIndex += 1;
      rangeMaxIndex = rangeMinIndex + 1;
      currentRange = [];
      currentRange.push(numbers[rangeMinIndex]);
      currentRange.push(numbers[rangeMaxIndex]);
      currentSum = currentRange.reduce((a, b) => a + b, 0);
    } else {
      // increment rangeMaxIndex -> pushing numbers to the range
      rangeMaxIndex += 1;
      currentRange.push(numbers[rangeMaxIndex]);
      currentSum += numbers[rangeMaxIndex];
    }
  }

  return Math.min(...currentRange) + Math.max(...currentRange);
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

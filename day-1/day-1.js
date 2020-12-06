module.exports.part1 = (data) => {
  const numbers = data.map((x) => parseInt(x));
  const targetSum = 2020;
  for (let number of numbers) {
    const toLookFor = targetSum - number;
    if (numbers.includes(toLookFor)) {
      return number * toLookFor;
    }
  }
};

module.exports.part2 = (data) => {
  const numbers = data.map((x) => parseInt(x));
  const targetSum = 2020;
  let summand1;
  let summand2;
  let summand3;

  for (let i = 0; i < numbers.length; i++) {
    summand1 = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      summand2 = numbers[j];
      for (let k = j + 1; k < numbers.length; k++) {
        summand3 = numbers[k];
        if (summand1 + summand2 + summand3 === targetSum) {
          return summand1 * summand2 * summand3;
        }
      }
    }
  }
};

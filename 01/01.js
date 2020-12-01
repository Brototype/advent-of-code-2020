const fs = require("fs");

const numbers = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n")
  .filter((x) => x !== "")
  .map((x) => parseInt(x));

part1();
part2();

function part1() {
  const targetSum = 2020;
  for (let number of numbers) {
    console.log(number);
    const toLookFor = targetSum - number;
    if (numbers.includes(toLookFor)) {
      console.log(
        `found, numbers are ${number} and ${toLookFor}. Sum: ${
          number + toLookFor
        }, Multiplied: ${number * toLookFor}`
      );
      return number * toLookFor;
    }
  }
}

function part2() {
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
          console.log(
            `found it: ${summand1}, ${summand2}, ${summand3}. Sum: ${
              summand1 + summand2 + summand3
            }. Multiplied: ${summand1 * summand2 * summand3}`
          );
          return;
        }
      }
    }
  }
}

module.exports.part1 = (data) => {
  console.log("part 1");
  const dataOfGroups = this.splitIntoGroups(data);

  let sumOfYesCounts = 0;
  for (let groupData of dataOfGroups) {
    sumOfYesCounts = sumOfYesCounts + this.countsOfYesIfAny(groupData);
  }

  return sumOfYesCounts;
};

module.exports.splitIntoGroups = (data) => {
  const allGroups = [];

  let currentGroup = [];
  data.forEach((value, index) => {
    if (value === "") {
      allGroups.push(currentGroup);
      currentGroup = [];
    } else {
      currentGroup.push(value);
    }
    if (index === data.length - 1) {
      allGroups.push(currentGroup);
    }
  });

  return allGroups;
};

module.exports.countsOfYesIfAny = (groupData) => {
  const setOfYesQuestions = new Set();
  for (let answersOfAPerson of groupData) {
    answersOfAPerson
      .split("")
      .forEach((answer) => setOfYesQuestions.add(answer));
  }
  return setOfYesQuestions.size;
};

module.exports.part2 = (data) => {
  console.log("part 2");
  let output = 2;
  return output;
};

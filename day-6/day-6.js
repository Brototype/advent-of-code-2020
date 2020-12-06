module.exports.part1 = (data) => {
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

module.exports.countsOfYesIfAll = (groupData) => {
  const questionsEveryoneHas = new Set();

  function everyoneHasThisQuestion(questionsWithYesOfThatPerson) {
    for (let answersOfAPerson of groupData) {
      if (!answersOfAPerson.includes(questionsWithYesOfThatPerson)) {
        return false;
      }
    }
    return true;
  }

  for (let answersOfAPerson of groupData) {
    const questionsWithYesOfThatPerson = answersOfAPerson.split("");
    for (let questionWithYesOfThatPerson of questionsWithYesOfThatPerson) {
      if (everyoneHasThisQuestion(questionWithYesOfThatPerson)) {
        questionsEveryoneHas.add(questionWithYesOfThatPerson);
      }
    }
  }
  return questionsEveryoneHas.size;
};

module.exports.part2 = (data) => {
  const dataOfGroups = this.splitIntoGroups(data);

  let sumOfYesCounts = 0;
  for (let groupData of dataOfGroups) {
    sumOfYesCounts = sumOfYesCounts + this.countsOfYesIfAll(groupData);
  }

  return sumOfYesCounts;
};

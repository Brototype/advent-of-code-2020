module.exports.part1 = (data) => {
  const myBag = "shiny gold";
  const containedInMap = this.toContainedInMap(data);

  return this.getAllRecursiveContainers(containedInMap, myBag).length;
};

module.exports.toContainedInMap = (data) => {
  const containedInMap = new Map();
  for (let row of data) {
    this.addToMap(containedInMap, row);
  }
  return containedInMap;
};

module.exports.getAllRecursiveContainers = (containedInMap, bag) => {
  let totalList = [];
  const bagsThatContainBag = containedInMap.get(bag);
  if (!bagsThatContainBag) {
    return [];
  }

  for (bag of bagsThatContainBag) {
    const allRecursiveContainers = this.getAllRecursiveContainers(
      containedInMap,
      bag
    );
    totalList = [...totalList, ...allRecursiveContainers, bag];
  }

  return [...new Set(totalList)];
};

module.exports.addToMap = (map, row) => {
  let container = row.split(" contain ")[0];
  if (container.endsWith(" bags")) {
    container = container.substr(0, container.length - 5);
  } else {
    container = container.substr(0, container.length - 4);
  }

  let bags = row.split(" contain ")[1];
  bags = bags.replace(".", "");
  const bagStrings = bags.split(", ");
  for (let bagString of bagStrings) {
    if (bagString !== "no other bags") {
      bagString = bagString.substr(2);

      if (bagString.endsWith(" bags")) {
        bagString = bagString.substr(0, bagString.length - 5);
      } else {
        bagString = bagString.substr(0, bagString.length - 4);
      }

      if (!map.has(bagString)) {
        map.set(bagString, [container]);
      } else {
        map.set(bagString, [...map.get(bagString), container]);
      }
    }
  }
  return map;
};

module.exports.part2 = (data) => {
  const myBag = "shiny gold";
  const a = recursiveBagCount(this.convertToContainsMap(data), myBag);
  return a;
};

function recursiveBagCount(rules, bag) {
  const contentsOfBag = rules.get(bag);
  if (contentsOfBag == null) return 0;
  return contentsOfBag.reduce(
    (result, currentBag) =>
      result + currentBag.count * (1 + recursiveBagCount(rules, currentBag.id)),
    0
  );
}

module.exports.convertToContainsMap = (data) => {
  const containedInMap = new Map();
  for (let row of data) {
    let containerId = row.split(" contain ")[0].replace(" bags", "");
    const containingBags = [];

    let bags = row.split(" contain ")[1];
    bags = bags.replace(".", "");
    const bagStrings = bags.split(", ");
    for (let bagString of bagStrings) {
      if (bagString !== "no other bags") {
        const count = parseInt(bagString);

        bagString = bagString.substr(2);

        if (bagString.endsWith(" bags")) {
          bagString = bagString.substr(0, bagString.length - 5);
        } else {
          bagString = bagString.substr(0, bagString.length - 4);
        }

        containingBags.push({ count, id: bagString });
      }
    }

    containedInMap.set(containerId, containingBags);
  }
  return containedInMap;
};

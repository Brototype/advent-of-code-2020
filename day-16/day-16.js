function getRules(data) {
  const rules = [];
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (row === "") {
      return rules;
    }
    rules.push(row);
  }
}

function getMyTicket(data) {
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (row === "your ticket:") {
      return data[i + 1];
    }
  }
}

function getNearbyTickets(data) {
  const nearbyTickets = [];
  let areRowsNearbyTicket = false;
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (areRowsNearbyTicket) {
      nearbyTickets.push(row);
    }
    if (row.includes("nearby tickets:")) {
      areRowsNearbyTicket = true;
    }
  }
  return nearbyTickets;
}

function getNumbersNotValidForAnyField(ticket, rules) {
  const mathRules = rules.map((r) => {
    const split = r.split(" ");
    const part1 = split[1].split("-");
    const part2 = split[3].split("-");
    return {
      min1: Number(part1[0]),
      max1: Number(part1[1]),
      min2: Number(part2[0]),
      max2: Number(part2[1]),
    };
  });

  const ticketNumbers = ticket.split(",").map((x) => Number(x));
  const numbersValidForNoRules = [];

  ticketNumbers.forEach((ticketNumber) => {
    let validForRules = 0;
    mathRules.forEach((rule) => {
      if (
        (ticketNumber >= rule.min1 && ticketNumber <= rule.max1) ||
        (ticketNumber >= rule.min2 && ticketNumber <= rule.max2)
      ) {
        validForRules++;
      }
    });
    if (validForRules === 0) {
      numbersValidForNoRules.push(ticketNumber);
    }
  });

  return numbersValidForNoRules;
}

module.exports.part1 = (data) => {
  // split the input into rules, myTicket and nearbyTickets
  const rules = getRules(data);
  const myTicket = getMyTicket(data);
  const nearbyTickets = getNearbyTickets(data);

  const numbersNotValidForAnyRule = [];

  nearbyTickets.forEach((ticket) => {
    numbersNotValidForAnyRule.push(
      ...getNumbersNotValidForAnyField(ticket, rules)
    );
  });

  const sum = numbersNotValidForAnyRule.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return sum;
};

module.exports.part2 = (data) => {
  return data.length;
};

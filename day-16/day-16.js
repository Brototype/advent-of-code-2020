function getRules(data) {
  const rules = [];
  for (let i = 0; i < data.length; i++) {
    const r = data[i];
    if (r === "") {
      return rules;
    }

    const split1 = r.split(": ");
    const name = split1[0];
    const minAndMax = split1[1].split(" or ");
    const part1 = minAndMax[0].split("-");
    const part2 = minAndMax[1].split("-");
    const mathRule = {
      type: name,
      min1: Number(part1[0]),
      max1: Number(part1[1]),
      min2: Number(part2[0]),
      max2: Number(part2[1]),
    };
    rules.push(mathRule);
  }
  return rules;
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
  const ticketNumbers = ticket.split(",").map((x) => Number(x));
  const numbersValidForNoRules = [];

  ticketNumbers.forEach((ticketNumber) => {
    let validForRules = 0;
    rules.forEach((rule) => {
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
  const nearbyTickets = getNearbyTickets(data);

  const numbersNotValidForAnyRule = [];

  nearbyTickets.forEach((ticket) => {
    numbersNotValidForAnyRule.push(
      ...getNumbersNotValidForAnyField(ticket, rules)
    );
  });

  return numbersNotValidForAnyRule.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
};

function findPositionsOfRule(rule, validTickets) {
  let positionsForRule = [];

  let numbersAtPositions = [];
  for (let i = 0; i < validTickets.length; i++) {
    const ticket = validTickets[i];
    const ticketNumbers = ticket.split(",").map((x) => Number(x));
    for (let j = 0; j < ticketNumbers.length; j++) {
      if (!numbersAtPositions[j]) {
        numbersAtPositions[j] = [];
      }
      numbersAtPositions[j] = [...numbersAtPositions[j], ticketNumbers[j]];
    }
  }

  for (let pos = 0; pos < numbersAtPositions.length; pos++) {
    const numbers = numbersAtPositions[pos];
    let violationsForRuleAtPos = 0;
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (
        (number >= rule.min1 && number <= rule.max1) ||
        (number >= rule.min2 && number <= rule.max2)
      ) {
      } else {
        violationsForRuleAtPos++;
      }
    }
    if (violationsForRuleAtPos === 0) {
      positionsForRule.push(pos);
    }
  }

  return positionsForRule;
}

module.exports.part2 = (data, ruleStartsWith = "departure") => {
  // split the input into rules, myTicket and nearbyTickets
  let rules = getRules(data);
  const myTicket = getMyTicket(data);
  const nearbyTickets = getNearbyTickets(data);
  const validTickets = [];

  nearbyTickets.forEach((ticket) => {
    if (getNumbersNotValidForAnyField(ticket, rules).length === 0) {
      validTickets.push(ticket);
    }
  });

  rules.forEach((rule) => {
    const positions = findPositionsOfRule(rule, validTickets);
    rule.positions = positions;
  });

  rules.sort((a, b) => a.positions.length - b.positions.length);

  // clean the positions for all of the other rules from the positions that are only 1
  for (let i = 0; i < rules.length - 1; i++) {
    const position = rules[i].positions[0];
    if (rules[i].positions.length > 1) {
      throw new Error("rethink your algo");
    }
    for (let j = i + 1; j < rules.length; j++) {
      const ru = rules[j];
      const newPositions = ru.positions.filter((x) => x !== position);
      ru.positions = newPositions;
    }
  }

  const myTicketNumbers = myTicket.split(",").map((x) => Number(x));
  rules = rules.map((r) => {
    return {
      ...r,
      valueOfMyTicket: myTicketNumbers[r.positions[0]],
    };
  });

  const filteredRules = rules.filter((x) => x.type.startsWith(ruleStartsWith));

  const product = filteredRules.reduce((previousValue, currentValue) => {
    return previousValue * currentValue.valueOfMyTicket;
  }, 1);

  return product;
};

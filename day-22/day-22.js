module.exports.part1 = (data) => {
  const rawInput = data.join("\n");
  const split = rawInput.split("\n\n");
  const decks = [getDeck(split[0]), getDeck(split[1])];

  //play
  while (!(decks[0].length === 0 || decks[1].length === 0)) {
    // deal card
    const cardOfPlayer1 = decks[0].shift();
    const cardOfPlayer2 = decks[1].shift();

    // compare dealt cards and handle result
    if (cardOfPlayer1 > cardOfPlayer2) {
      decks[0].push(cardOfPlayer1);
      decks[0].push(cardOfPlayer2);
    } else {
      decks[1].push(cardOfPlayer2);
      decks[1].push(cardOfPlayer1);
    }
  }

  // get winner
  let winner;
  if (decks[0].length === 0) {
    winner = 1;
  } else {
    winner = 0;
  }

  //calculate score
  return calculateScore(decks[winner]);
};

function calculateScore(deck) {
  return deck
    .map((value, index) => {
      return value * (deck.length - index);
    })
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}

function getDeck(blob) {
  const rows = blob.split("\n");
  rows.shift();
  return rows.map((x) => Number(x));
}

module.exports.part2 = (data) => {
  const rawInput = data.join("\n");
  const split = rawInput.split("\n\n");
  const decks = [getDeck(split[0]), getDeck(split[1])];
  let winner = playRecursive(decks);
  return calculateScore(decks[winner]);
};

function playRecursive(decks) {
  let previous = new Set();
  while (decks[0].length > 0 && decks[1].length > 0) {
    if (previous.has(decks[0] + " " + decks[1])) {
      return 0;
    }

    previous.add(decks[0] + " " + decks[1]);
    let player1Card = decks[0].shift();
    let player2Card = decks[1].shift();

    let winner;
    if (player1Card > player2Card) {
      winner = 0;
    } else {
      winner = 1;
    }

    if (decks[0].length >= player1Card && decks[1].length >= player2Card) {
      winner = playRecursive([
        decks[0].slice(0, player1Card),
        decks[1].slice(0, player2Card),
      ]);
    }
    if (winner === 0) {
      decks[0].push(player1Card, player2Card);
    } else {
      decks[1].push(player2Card, player1Card);
    }
  }

  let winner;
  if (decks[0].length) {
    winner = 0;
  } else {
    winner = 1;
  }

  return winner;
}

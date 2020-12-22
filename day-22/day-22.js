module.exports.part1 = (data) => {
  const rawInput = data.join("\n");
  const split = rawInput.split("\n\n");
  let player1Deck = getDeck(split[0]);
  let player2Deck = getDeck(split[1]);

  //play
  while (!(player1Deck.length === 0 || player2Deck.length === 0)) {
    const cardOfPlayer1 = player1Deck.shift();
    const cardOfPlayer2 = player2Deck.shift();
    if (cardOfPlayer1 > cardOfPlayer2) {
      player1Deck.push(cardOfPlayer1);
      player1Deck.push(cardOfPlayer2);
    } else {
      player2Deck.push(cardOfPlayer2);
      player2Deck.push(cardOfPlayer1);
    }
  }

  //calculate score
  const player1Score = calculateScore(player1Deck);
  const player2Score = calculateScore(player2Deck);

  if (player1Score > player2Score) {
    return player1Score;
  } else {
    return player2Score;
  }
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
  return data.length;
};

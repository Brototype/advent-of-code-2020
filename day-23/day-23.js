module.exports.part1 = (data) => {
  let cups = data[0].split("").map((cup) => +cup);
  let top = cups.length;
  cups.unshift(cups.pop());
  for (let i = 0; i < 100; i++) {
    cups.push(cups.shift());
    let removed = [cups[1], cups[2], cups[3]];
    cups = [cups[0]].concat(cups.slice(4));
    let destination = cups[0] - 1 < 1 ? top : cups[0] - 1;
    let n = 0;
    while (cups.indexOf(destination) < 0) {
      if (n > 10) return;
      n++;
      destination = destination === 1 ? top : destination - 1;
    }
    let index = cups.indexOf(destination) + 1;
    cups = cups.slice(0, index).concat(removed, cups.slice(index));
  }
  let index = cups.indexOf(1);
  return cups
    .slice(index + 1)
    .concat(cups.slice(0, index))
    .join("");
};

module.exports.part2 = (data) => {
  let input = data[0].split("").map((cup) => cup - 1);
  let next = new Int32Array(1000000);
  let prev = new Int32Array(1000000);
  for (let i = 0; i < 1000000; i++) {
    next[i] = i + 1;
    prev[i] = i - 1;
  }
  next[999999] = 0;
  prev[0] = 999999;
  let current = 999999;
  for (let cup of input) {
    next[prev[cup]] = next[cup];
    prev[next[cup]] = prev[cup];
    next[cup] = next[current];
    prev[cup] = current;
    prev[next[current]] = cup;
    next[current] = cup;
    current = cup;
  }
  current = 999999;
  for (let i = 0; i < 10000000; i++) {
    current = next[current];
    let a = next[current];
    let b = next[a];
    let c = next[b];
    next[current] = next[c];
    prev[next[c]] = current;
    let destination = current - 1 < 0 ? 999999 : current - 1;
    while (destination === a || destination === b || destination === c) {
      destination = destination === 0 ? 999999 : destination - 1;
    }
    next[c] = next[destination];
    prev[a] = destination;
    prev[next[destination]] = c;
    next[destination] = a;
  }
  return (next[0] + 1) * (next[next[0]] + 1);
};

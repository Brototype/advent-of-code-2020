runDay("06");

function runDay(dayNumber) {
  const fs = require("fs");

  const day = require(`./${dayNumber}/day-${dayNumber}.js`);
  const inputPath = `${__dirname}/${dayNumber}/input.txt`;

  const data = fs.readFileSync(inputPath).toString().split("\n");

  console.log(day.part1(data));
  console.log(day.part2(data));
}

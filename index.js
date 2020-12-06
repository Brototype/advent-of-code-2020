const { generate } = require("./generator/generator");

let dayNumber = 7;

if (!dayNumber) {
  const now = new Date();
  dayNumber = now.getDate();
}

generate(dayNumber);
runDay(dayNumber);

function runDay(dayNumber) {
  const dayName = "day-" + dayNumber;
  const fs = require("fs");

  const day = require(`./${dayName}/${dayName}.js`);
  const inputPath = `${__dirname}/${dayName}/input.txt`;

  const data = fs.readFileSync(inputPath).toString().split("\n");

  console.log(dayName);
  console.log("part 1:", day.part1(data));
  console.log("part 2:", day.part2(data));
}

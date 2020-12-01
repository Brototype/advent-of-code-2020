const fs = require("fs");

// this can be used if you have been a lazy boy and forgot to tackle a challenge ;)
let dayNumber = 2;
const createMostRecent = true;

if (createMostRecent) {
  const now = new Date();
  dayNumber = now.getDay() - 1;
}

folderName = "" + dayNumber;
if (folderName.length === 1) {
  folderName = "0" + folderName;
}

console.log(`I will create the files for day ${dayNumber}`);

let newFolderPath = `${__dirname}/../${folderName}`;
if (!fs.existsSync(newFolderPath)) {
  fs.mkdirSync(newFolderPath);
}

let newJsFilePath = `${__dirname}/../${folderName}/${folderName}.js`;
if (!fs.existsSync(newJsFilePath)) {
  fs.copyFileSync(`${__dirname}/../_template/_template.js`, newJsFilePath);
}

let newInputFilePath = `${__dirname}/../${folderName}/input.txt`;
if (!fs.existsSync(newInputFilePath)) {
  fs.closeSync(fs.openSync(newInputFilePath, "w"));
}

let newDemoFilePath = `${__dirname}/../${folderName}/demo.txt`;
if (!fs.existsSync(newDemoFilePath)) {
  fs.closeSync(fs.openSync(newDemoFilePath, "w"));
}

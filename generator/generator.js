const fs = require("fs");

module.exports.generate = (dayNumber) => {
  if (!dayNumber) {
    throw new Error("no dayNumber specified");
  }

  let folderName = "day-" + dayNumber;
  createFolder(folderName);
  createJsFile(folderName);
  createTestFile(folderName);
  createInputFile(folderName);
};

function createFolder(folderName) {
  let newFolderPath = `${__dirname}/../${folderName}`;
  if (!fs.existsSync(newFolderPath)) {
    fs.mkdirSync(newFolderPath);
  }
}

function createJsFile(folderName) {
  let newJsFilePath = `${__dirname}/../${folderName}/${folderName}.js`;
  if (!fs.existsSync(newJsFilePath)) {
    fs.copyFileSync(`${__dirname}/../_template/_template.js`, newJsFilePath);
  }
}

function createTestFile(folderName) {
  let newJsTestFilePath = `${__dirname}/../${folderName}/${folderName}.test.js`;
  if (!fs.existsSync(newJsTestFilePath)) {
    fs.copyFileSync(
      `${__dirname}/../_template/_template.test.js`,
      newJsTestFilePath
    );
  }

  replaceDayPlaceholderInTestFile();

  function replaceDayPlaceholderInTestFile() {
    fs.readFile(newJsTestFilePath, "utf8", function (err, data) {
      if (err) {
        return console.error(err);
      }

      const regExp = /#DAYSTRING/g;
      if (regExp.test(data)) {
        const result = data.replace(regExp, folderName);
        fs.writeFile(newJsTestFilePath, result, "utf8", function (err) {
          if (err) return console.error(err);
        });
      }
    });
  }
}

function createInputFile(folderName) {
  let newInputFilePath = `${__dirname}/../${folderName}/input.txt`;
  if (!fs.existsSync(newInputFilePath)) {
    fs.closeSync(fs.openSync(newInputFilePath, "w"));
  }
}

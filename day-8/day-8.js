const { IntCodeCompiler } = require("./intcode-compiler");
module.exports.part1 = (data) => {
  const c = new IntCodeCompiler(data);
  return c.compile();
};

function addVariations(data, oldToken, newToken, allPrograms) {
  data.forEach((val, index) => {
    if (val.includes(oldToken)) {
      const newData = [...data];
      const oldInstr = data[index];
      const newInstr = oldInstr.replace(oldToken, newToken);
      newData[index] = newInstr;
      allPrograms.push(newData);
    }
  });
}

module.exports.getAllPossiblePrograms = (data) => {
  const allPrograms = [data];

  addVariations(data, "jmp", "nop", allPrograms);
  addVariations(data, "nop", "jmp", allPrograms);

  return allPrograms;
};

module.exports.part2 = (data) => {
  const c = new IntCodeCompiler();

  const programs = this.getAllPossiblePrograms(data);

  for (let program of programs) {
    if (!c.hasProgramEndlessLoop(program)) {
      c._init(program);
      return c.compile();
    }
  }
};

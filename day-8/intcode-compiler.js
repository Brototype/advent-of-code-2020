class IntCodeCompiler {
  accumulator = 0;
  currentInstructionIndex = 0;
  alreadyHandledIndexes = [];

  constructor(instructions) {
    this.instructions = instructions;
  }

  compile() {
    while (!this.instructionAlreadyExecuted()) {
      this.handleInstruction(this.instructions[this.currentInstructionIndex]);
    }
    return this.accumulator;
  }

  handleInstruction(instr) {
    const op = instr.split(" ")[0];
    const arg = instr.split(" ")[1];

    this.alreadyHandledIndexes.push(this.currentInstructionIndex);

    switch (op) {
      case "nop": {
        this.nop();
        break;
      }
      case "acc": {
        this.acc(arg);
        break;
      }
      case "jmp": {
        this.jmp(arg);
        break;
      }
      default:
        throw new Error("unhandled");
    }
  }

  acc(argument) {
    this.accumulator += parseInt(argument);
    this.jmp(1);
  }

  jmp(argument) {
    this.currentInstructionIndex += parseInt(argument);
  }

  nop() {
    this.jmp(1);
  }

  instructionAlreadyExecuted() {
    return this.alreadyHandledIndexes.includes(this.currentInstructionIndex);
  }
}

module.exports.IntCodeCompiler = IntCodeCompiler;

class IntCodeCompiler {
  constructor(instructions) {
    this._init(instructions);
  }

  _init(instructions) {
    this.instructions = instructions;
    this.accumulator = 0;
    this.currentInstructionIndex = 0;
    this.alreadyHandledIndexes = [];
  }

  compile() {
    while (!this.instructionAlreadyExecuted()) {
      if (this.currentInstructionIndex === this.instructions.length) {
        return this.accumulator;
      }
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

  hasProgramEndlessLoop(instructions) {
    this._init(instructions);
    const result = this.compile();
    if (this.instructionAlreadyExecuted()) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports.IntCodeCompiler = IntCodeCompiler;

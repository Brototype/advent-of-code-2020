const { IntCodeCompiler } = require("./intcode-compiler");
describe("IntCode Compiler", () => {
  test("runs demo", () => {
    const input = (
      "nop +0\n" +
      "acc +1\n" +
      "jmp +4\n" +
      "acc +3\n" +
      "jmp -3\n" +
      "acc -99\n" +
      "acc +1\n" +
      "jmp -4\n" +
      "acc +6"
    ).split("\n");
    const compiler = new IntCodeCompiler(input);
    expect(compiler.compile()).toBe(5);
  });

  test("acc +1", () => {
    const compiler = new IntCodeCompiler();
    compiler.acc("+1");
    expect(compiler.accumulator).toBe(1);
  });
  test("acc -2", () => {
    const compiler = new IntCodeCompiler();
    compiler.acc("-2");
    expect(compiler.accumulator).toBe(-2);
  });
});

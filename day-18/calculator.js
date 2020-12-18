module.exports.Calculator = class Calculator {
  constructor() {}

  solvePlusFirst(equationString) {
    // thank you https://en.wikipedia.org/wiki/Operator-precedence_parser#Alternative_methods
    // this re-formats the whole equation to give precedence to plus
    const transformedString =
      "((" +
      equationString
        .replace(/\(/g, "(((")
        .replace(/\)/g, ")))")
        .replace(/\+/g, ")+(")
        .replace(/\*/g, "))*((") +
      "))";
    const solution = eval(transformedString);
    return solution;
  }

  solve(equationString) {
    let eq = "" + equationString;
    if (!eq.includes(" ")) {
      return Number(eq);
    }
    if (!equationString.includes("(")) {
      // recursively solve sub equations inside of brackets
      // directly solve it
      let subResult;
      const parts = eq.split(" ");
      if (parts[1] === "+") {
        subResult = Number(parts[0]) + Number(parts[2]);
      } else if (parts[1] === "*") {
        subResult = Number(parts[0]) * Number(parts[2]);
      }

      parts.shift();
      parts.shift();
      parts.shift();
      const returnEq = (subResult + " " + parts.join(" ")).trim();
      return this.solve(returnEq);
    } else {
      // solve the brackets first
      // from left to right find the first pair of brackets
      let indexOfInnerOpenBracket = eq.indexOf("(");
      let indexOfInnerClosedBracket = eq.indexOf(")");
      // let numberOfOpenBrackets = 0;
      for (let i = 0; i < eq.length; i++) {
        if (eq[i] === "(") {
          indexOfInnerOpenBracket = i;
        }
        if (eq[i] === ")") {
          indexOfInnerClosedBracket = i;
          break;
        }
      }

      let subEquation = eq.substring(
        indexOfInnerOpenBracket + 1,
        indexOfInnerClosedBracket
      );
      let subResult = this.solve(subEquation);
      const before = eq.substring(0, indexOfInnerOpenBracket);
      const after = eq.substring(indexOfInnerClosedBracket + 1);
      let returnString = (before + subResult + after).trim();
      return this.solve(returnString);
    }
  }
};

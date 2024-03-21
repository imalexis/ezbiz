import {
  Expression,
  ExpressionStatement,
  Identifier,
  InflixExpression,
  IntegerLiteral,
  LetStatement,
  Parser,
  PrefixExpression,
  Program,
} from "./parser";

export class Evaluator {
  env: Map<string, number>;

  constructor() {
    this.env = new Map<string, number>();
  }

  evalExpression(expr: Expression): number {
    if (expr instanceof Identifier) {
      const value = this.env.get(expr.tokenLiteral());
      if (value == null) {
        throw new Error(`variable ${expr.tokenLiteral()} not found`);
      }
      return value;
    }

    if (expr instanceof IntegerLiteral) {
      return expr.value;
    }

    if (expr instanceof PrefixExpression) {
      switch (expr.operator) {
        case "-": {
          return -this.evalExpression(expr.right!);
        }
      }
    }

    if (expr instanceof InflixExpression) {
      const leftValue = this.evalExpression(expr.left!);
      const rightValue = this.evalExpression(expr.right!);
      switch (expr.operator) {
        case "+":
          return leftValue + rightValue;
        case "-":
          return leftValue - rightValue;
        case "*":
          return leftValue * rightValue;
        case "/":
          return leftValue / rightValue;
        case ">":
          return leftValue > rightValue ? 1 : 0;
        default:
          throw new Error(`not supportted yet, operator = ${expr.operator}`);
      }
    }

    throw new Error("not supported, no such branch");
  }

  eval(program: Program): Map<string, number> {
    program.statements.forEach((stmt) => {
      if (stmt instanceof ExpressionStatement) {
        const expr = stmt.expression;
        return this.evalExpression(expr!);
      }
      if (stmt instanceof LetStatement) {
        const value = this.evalExpression(stmt.rhs!);
        const name = stmt.lhs?.tokenLiteral();
        this.env.set(name ?? "", value);
      }
    });
    return this.env;
  }
}

// let visibility_rule = money > 100;
let money = 200; // read from response;

const parser = new Parser("let visible = money > 100;");
const program = parser.parse();
const evaluator = new Evaluator();
evaluator.env.set("money", money);
const output = evaluator.eval(program);
console.log("visible = ", output.get("visible"));

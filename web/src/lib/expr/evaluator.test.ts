import { Evaluator } from "./evaluator";
import { Parser } from "./parser";

test("evaluator testings", () => {
  const testcases = [
    {
      input: "let visible = 1 + 1;",
      expect: 2,
    },
    {
      input: "let visible = 1 + 1 * 2;",
      expect: 3,
    },
    {
      input: "let visible = 8 / 2 - 2 * 2;",
      expect: 0,
    },
  ];
  for (const testcase of testcases) {
    const parser = new Parser(testcase.input);
    const program = parser.parse();
    const evaluator = new Evaluator();
    const output = evaluator.eval(program);
    expect(output.get("visible")).toBe(testcase.expect);
  }
});

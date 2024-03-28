import { Parser } from "./parser";

test("parser testings", () => {
  const testcases = [
    {
      input: "a>=b;",
      expect: "(a >= b)",
    },
    {
      input: "a<=b;",
      expect: "(a <= b)",
    },
    {
      input: "a < b;",
      expect: "(a < b)",
    },
    {
      input: "1;",
      expect: "1",
    },
    {
      input: "3 + 4;",
      expect: "(3 + 4)",
    },
    {
      input: "3 - 4;",
      expect: "(3 - 4)",
    },
    {
      input: "10 * 9;",
      expect: "(10 * 9)",
    },
    {
      input: "10 / 9;",
      expect: "(10 / 9)",
    },
    {
      input: "10 * 9 - 8;",
      expect: "((10 * 9) - 8)",
    },
    {
      input: "10 * 9 - 8 / 6;",
      expect: "((10 * 9) - (8 / 6))",
    },
    {
      input: "10 * 9 / 6 - 8;",
      expect: "(((10 * 9) / 6) - 8)",
    },
    {
      input: "let a = b;",
      expect: "let a = b",
    },
    {
      input: "let a = 3 / 7 - 3;",
      expect: "let a = ((3 / 7) - 3)",
    },
  ];
  for (const testcase of testcases) {
    const parser = new Parser(testcase.input);
    const program = parser.parse();
    expect(program.toString()).toStrictEqual(testcase.expect);
  }
});

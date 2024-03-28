import { Lexer } from "./lexer";
import {
  ASSIGN,
  EOF,
  ID,
  INT,
  LPAREN,
  PLUS,
  RPAREN,
  SEMICOLON,
  Token,
} from "./token";

test("lexer basic testings", () => {
  const testCases: Array<{ source: string; result: Array<Token> }> = [
    {
      source: "a =+() abc 123",
      result: [
        { type: ID, literal: "a" },
        { type: ASSIGN, literal: "=" },
        { type: PLUS, literal: "+" },
        { type: LPAREN, literal: "(" },
        { type: RPAREN, literal: ")" },
        { type: ID, literal: "abc" },
        { type: INT, literal: "123" },
        { type: EOF, literal: "" },
      ],
    },
    {
      source: "a = 123;",
      result: [
        { type: ID, literal: "a" },
        { type: ASSIGN, literal: "=" },
        { type: INT, literal: "123" },
        { type: SEMICOLON, literal: ";" },
        { type: EOF, literal: "" },
      ],
    },
  ];

  for (const testCase of testCases) {
    const lexer = new Lexer(testCase.source);
    for (const testResult of testCase.result) {
      const actualResult = lexer.nextToken();
      const expectResult = testResult;
      expect(expectResult).toStrictEqual(actualResult);
    }
  }
});

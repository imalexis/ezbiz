import { tagGroupClassNames } from "@fluentui/react-components";

type TokenType =
  | "illegal"
  | "eof"
  | "id"
  | "int"
  | "="
  | "+"
  | ","
  | ";"
  | "("
  | ")"
  | "{"
  | "}";

const ILLEGAL: TokenType = "illegal";
const EOF: TokenType = "eof";

const ID: TokenType = "id";
const INT: TokenType = "int";

const ASSIGN: TokenType = "=";
const PLUS: TokenType = "+";

const COMMA: TokenType = ",";
const SEMICOLON: TokenType = ";";

const LPAREN: TokenType = "(";
const RPAREN: TokenType = ")";
const LBRACE: TokenType = "{";
const RBRACE: TokenType = "}";

type Token = {
  type: TokenType;
  literal: string;
};

class Lexer {
  input: string;
  position: number; // current position
  readPosition: number; // after current position
  ch: string | 0; // current char. If ch = 0, then we are at the end of the file

  constructor(input: string) {
    this.input = input;
    this.position = -1;
    this.readPosition = 0;
    this.ch = "";
    this.__readChar(); // Initialize position as 0 and readPosition as 1
  }

  __readChar() {
    if (this.readPosition >= this.input.length) {
      this.ch = 0;
    } else {
      this.ch = this.input[this.readPosition];
    }
    this.position = this.readPosition;
    this.readPosition += 1;
  }

  // Determine whether arrived the end of file
  __isEOF() {
    return this.ch === 0;
  }

  // Determine whether current ch is a letter
  __isLetter() {
    return this.ch.toString().length === 1 && /[a-z]/i.test(this.ch.toString());
  }

  // Determine whether current ch is a digit
  __isDigit() {
    return (
      !this.__isEOF() &&
      this.ch.toString().length === 1 &&
      /[0-9]/.test(this.ch.toString())
    );
  }

  __readIdentifier() {
    const startPos = this.position;
    while (this.__isLetter()) {
      this.__readChar();
    }
    const endPos = this.position;
    return this.input.substring(startPos, endPos);
  }

  __readNumber() {
    const startPos = this.position;
    while (this.__isDigit()) {
      this.__readChar();
    }
    const endPos = this.position;
    return this.input.substring(startPos, endPos);
  }

  __skipWhiteSpace() {
    for (;;) {
      if (
        this.ch === " " ||
        this.ch === "\t" ||
        this.ch === "\n" ||
        this.ch === "\r"
      ) {
        this.__readChar();
        continue;
      }
      break;
    }
  }

  nextToken(): Token {
    let tok: Token;
    this.__skipWhiteSpace();
    switch (this.ch) {
      case "+": {
        tok = { type: PLUS, literal: "+" };
        break;
      }
      case "=": {
        tok = { type: ASSIGN, literal: "=" };
        break;
      }
      case ",": {
        tok = { type: COMMA, literal: "," };
        break;
      }
      case ";": {
        tok = { type: SEMICOLON, literal: ";" };
        break;
      }
      case "(": {
        tok = { type: LPAREN, literal: "(" };
        break;
      }
      case ")": {
        tok = { type: RPAREN, literal: ")" };
        break;
      }
      case "{": {
        tok = { type: LBRACE, literal: "{" };
        break;
      }
      case "}": {
        tok = { type: RBRACE, literal: "}" };
        break;
      }
      case 0: {
        tok = { type: EOF, literal: "" };
        break;
      }
      default: {
        if (this.__isLetter()) {
          tok = { type: ID, literal: this.__readIdentifier() };
        } else if (this.__isDigit()) {
          tok = { type: INT, literal: this.__readNumber() };
        } else {
          tok = { type: ILLEGAL, literal: "" };
        }
      }
    }
    this.__readChar();
    return tok;
  }
}

const testCases: Array<{ source: string; result: Array<Token> }> = [
  {
    source: "=+() abc 123",
    result: [
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
    source: "a = 123",
    result: [
      { type: ID, literal: "a" },
      { type: ASSIGN, literal: "=" },
      { type: INT, literal: "123" },
      { type: EOF, literal: "" },
    ],
  },
];

for (const testCase of testCases) {
  const lexer = new Lexer(testCase.source);
  for (const testResult of testCase.result) {
    const actualResult = lexer.nextToken();
    const expectResult = testResult;
    if (
      expectResult.type !== actualResult.type ||
      expectResult.literal !== actualResult.literal
    ) {
      console.log(
        "source: ",
        testCase.source,
        "actualResult: ",
        actualResult,
        "expectResult: ",
        expectResult
      );
    }
  }
}

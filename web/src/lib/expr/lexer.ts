import {
  ASSIGN,
  ASTERISK,
  COMMA,
  GREATER_THAN,
  GREATER_THAN_EQUAL,
  KW_LET,
  LBRACE,
  LESS_THAN,
  LESS_THAN_EQUAL,
  LPAREN,
  MINUS,
  PLUS,
  RBRACE,
  RPAREN,
  SEMICOLON,
  SLASH,
  Token,
  EOF,
  ID,
  INT,
  ILLEGAL,
} from "./token";

export class Lexer {
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
      case "-": {
        tok = { type: MINUS, literal: "-" };
        break;
      }
      case "*": {
        tok = { type: ASTERISK, literal: "*" };
        break;
      }
      case "/": {
        tok = { type: SLASH, literal: "/" };
        break;
      }
      case "<": {
        if (this.input[this.readPosition] === "=") {
          tok = { type: LESS_THAN_EQUAL, literal: "<=" };
          this.__readChar();
        } else {
          tok = { type: LESS_THAN, literal: "<" };
        }
        break;
      }
      case ">": {
        if (this.input[this.readPosition] === "=") {
          tok = { type: GREATER_THAN_EQUAL, literal: ">=" };
          this.__readChar();
        } else {
          tok = { type: GREATER_THAN, literal: ">" };
        }
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
          const identifier = this.__readIdentifier();
          if (identifier === KW_LET) {
            tok = { type: KW_LET, literal: "let" };
          } else {
            tok = { type: ID, literal: identifier };
          }
          return tok;
        } else if (this.__isDigit()) {
          tok = { type: INT, literal: this.__readNumber() };
          return tok;
        } else {
          tok = { type: ILLEGAL, literal: "" };
        }
      }
    }
    this.__readChar();
    return tok;
  }
}

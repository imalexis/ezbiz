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
  | "}"
  | "let";

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

const KW_LET: TokenType = "let";

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

export namespace parser {
  interface Node {
    // return the literal value of the token it's associated with
    // a + b -> a
    tokenLiteral(): string;

    // return the Node full text string
    // a + b -> a + b
    toString(): string;
  }

  interface Expression extends Node {}

  class Identifier implements Expression {
    token: Token;
    value: string;

    tokenLiteral(): string {
      return this.token.literal;
    }

    toString(): string {
      return this.token.literal;
    }

    constructor(token: Token, value: string) {
      this.token = token;
      this.value = value;
    }
  }

  interface Statement extends Node {}

  class LetStatement implements Statement {
    token: Token;
    lhs: Identifier | undefined;
    rhs: Expression | undefined;

    tokenLiteral(): string {
      return this.token.literal;
    }

    toString(): string {
      return this.token.literal;
    }

    setLhs(lhs: Identifier) {
      this.lhs = lhs;
    }

    setRhs(rhs: Expression) {
      this.rhs = rhs;
    }

    constructor(token: Token) {
      this.token = token;
    }
  }

  class ExpressionStatement implements Statement {
    token: Token;
    expression: Expression | undefined;

    tokenLiteral(): string {
      return this.token.literal;
    }

    toString(): string {
      return this.expression!.toString();
    }

    setExpression(expression: Expression) {
      this.expression = expression;
    }

    constructor(token: Token) {
      this.token = token;
    }
  }

  class Program implements Node {
    statements: Statement[];

    constructor() {
      this.statements = [];
    }

    tokenLiteral(): string {
      if (this.statements.length === 0) {
        return "";
      }
      return this.statements[0].tokenLiteral();
    }

    toString(): string {
      return this.statements.map((stmt) => stmt.toString()).join("");
    }

    push(stmt: Statement): void {
      this.statements.push(stmt);
    }
  }

  // Define precedence
  const LOWEST = 1;
  const EQUALS = 2;
  const LESSGREATER = 3;
  const SUM = 4; // +, -
  const PRODUCT = 5; // *, /
  const PREFIX = 6; // ! - +

  class Parser {
    lexer: Lexer;

    curToken: Token | undefined;
    peekToken: Token | undefined;
    prefixParseFns: Map<TokenType, () => Expression>;
    inflixParseFns: Map<TokenType, (lhs: Expression) => Expression>;

    __nextToken() {
      this.curToken = this.peekToken;
      this.peekToken = this.lexer.nextToken();
    }

    constructor(input: string) {
      this.lexer = new Lexer(input);
      this.__nextToken();
      this.__nextToken();
      this.prefixParseFns = new Map();
      this.inflixParseFns = new Map();
      this.prefixParseFns.set(ID, this.__parseIdentifier);
    }

    __parseIdentifier(): Expression {
      return new Identifier(this.curToken!, this.curToken!.literal);
    }

    __expectPeek(tokenType: TokenType) {
      if (this.peekToken?.type !== tokenType) {
        return false;
      }
      this.__nextToken();
      return true;
    }

    __curTokenIs(tokenType: TokenType) {
      return this.curToken?.type === tokenType;
    }

    __parseLetStatement(): LetStatement {
      const stmt = new LetStatement(this.curToken!);

      if (!this.__expectPeek(ID)) {
        throw new Error(`expect ID, but got ${this.curToken?.type}`);
      }
      stmt.setLhs(new Identifier(this.curToken!, this.curToken!.literal));

      if (!this.__expectPeek(ASSIGN)) {
        throw new Error(`expect =, but got ${this.curToken?.type}`);
      }

      while (!this.__curTokenIs(SEMICOLON)) {
        this.__nextToken();
      }
      return stmt;
    }

    __parseExpression(precedence: number): Expression {
      const prefixFn = this.prefixParseFns.get(this.curToken!.type);
      if (prefixFn == null) {
        throw new Error(`expect prefix parse function for ${this.curToken}`);
      }
      const boundPrefixFn = prefixFn.bind(this);
      const expr = boundPrefixFn();
      return expr;
    }

    __parseExpressionStatement(): ExpressionStatement {
      const stmt = new ExpressionStatement(this.curToken!);
      stmt.setExpression(this.__parseExpression(LOWEST));
      if (!this.__expectPeek(SEMICOLON)) {
        throw new Error(`expect semicolon, but got ${this.curToken}`);
      }
      return stmt;
    }

    __parseStatement(): Statement {
      switch (this.curToken!.type) {
        case KW_LET: {
          return this.__parseLetStatement();
        }
        default:
          return this.__parseExpressionStatement();
      }
    }

    parse(): Program {
      const program = new Program();

      while (this.curToken?.type !== EOF) {
        const stmt = this.__parseStatement();
        program.push(stmt);
        this.__nextToken();
      }
      return program;
    }
  }

  const parser = new Parser("x;");
  const program = parser.parse();
  console.log(JSON.stringify(program));
}

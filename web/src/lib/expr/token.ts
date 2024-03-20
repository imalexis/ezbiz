import { requestSubscription } from "relay-runtime";

type TokenType =
  | "illegal"
  | "eof"
  | "id"
  | "int"
  | "="
  | "+"
  | "-"
  | "*"
  | "/"
  | "<"
  | "<="
  | ">"
  | ">="
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
const MINUS: TokenType = "-";
const ASTERISK: TokenType = "*";
const SLASH: TokenType = "/";

const LESS_THAN: TokenType = "<";
const LESS_THAN_EQUAL = "<=";
const GREATER_THAN: TokenType = ">";
const GREATER_THAN_EQUAL: TokenType = ">=";

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

  class IntegerLiteral implements Expression {
    token: Token;
    value: number;

    tokenLiteral(): string {
      return this.token.literal;
    }

    toString(): string {
      return this.token.literal;
    }

    constructor(token: Token, value: number) {
      this.token = token;
      this.value = value;
    }
  }

  class PrefixExpression implements Expression {
    token: Token;
    operator: string | undefined;
    right: Expression | undefined;

    tokenLiteral(): string {
      return this.token.literal;
    }

    toString(): string {
      return `${this.operator}${this.right?.toString()}`;
    }

    setOperator(operator: string) {
      this.operator = operator;
    }

    setRight(expression: Expression) {
      this.right = expression;
    }

    constructor(token: Token) {
      this.token = token;
    }
  }

  class InflixExpression implements Expression {
    token: Token;
    operator: string | undefined;
    left: Expression | undefined;
    right: Expression | undefined;

    tokenLiteral(): string {
      return this.token.literal;
    }

    toString(): string {
      return `(${this.left?.toString()} ${
        this.operator
      } ${this.right?.toString()})`;
    }

    setOperator(operator: string) {
      this.operator = operator;
    }

    setLeft(left: Expression) {
      this.left = left;
    }

    setRight(right: Expression) {
      this.right = right;
    }

    constructor(token: Token) {
      this.token = token;
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
      return `let ${this.lhs?.toString()} = ${this.rhs?.toString()}`;
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
    precedences: Map<TokenType, 1 | 2 | 3 | 4 | 5 | 6>;

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
      this.precedences = new Map();

      this.precedences.set(PLUS, SUM);
      this.precedences.set(MINUS, SUM);
      this.precedences.set(ASTERISK, PRODUCT);
      this.precedences.set(SLASH, PRODUCT);
      this.precedences.set(LESS_THAN, LESSGREATER);
      this.precedences.set(LESS_THAN_EQUAL, LESSGREATER);
      this.precedences.set(GREATER_THAN, LESSGREATER);
      this.precedences.set(GREATER_THAN_EQUAL, LESSGREATER);

      this.prefixParseFns.set(ID, this.__parseIdentifier);
      this.prefixParseFns.set(INT, this.__parseIntegerLiteral);
      this.prefixParseFns.set(MINUS, this.__parsePrefixExpression);

      this.inflixParseFns.set(PLUS, this.__parseInflixExpression);
      this.inflixParseFns.set(MINUS, this.__parseInflixExpression);
      this.inflixParseFns.set(ASTERISK, this.__parseInflixExpression);
      this.inflixParseFns.set(SLASH, this.__parseInflixExpression);
      this.inflixParseFns.set(LESS_THAN, this.__parseInflixExpression);
      this.inflixParseFns.set(LESS_THAN_EQUAL, this.__parseInflixExpression);
      this.inflixParseFns.set(GREATER_THAN, this.__parseInflixExpression);
      this.inflixParseFns.set(GREATER_THAN_EQUAL, this.__parseInflixExpression);
    }

    __parseIdentifier(): Expression {
      return new Identifier(this.curToken!, this.curToken!.literal);
    }

    __parseIntegerLiteral(): Expression {
      const value = parseInt(this.curToken!.literal);
      return new IntegerLiteral(this.curToken!, value);
    }

    __parsePrefixExpression(): Expression {
      const expr = new PrefixExpression(this.curToken!);
      expr.setOperator(this.curToken!.literal);
      this.__nextToken();
      expr.setRight(this.__parseExpression(PREFIX));
      return expr;
    }

    __parseInflixExpression(left: Expression): Expression {
      const expr = new InflixExpression(this.curToken!);
      expr.setOperator(this.curToken!.literal);
      expr.setLeft(left);
      const precedence = this.__curPrecedence();
      this.__nextToken();
      expr.setRight(this.__parseExpression(precedence));
      return expr;
    }

    __peekPrecedence(): 1 | 2 | 3 | 4 | 5 | 6 {
      return this.precedences.get(this.peekToken!.type) ?? LOWEST;
    }

    __curPrecedence(): 1 | 2 | 3 | 4 | 5 | 6 {
      return this.precedences.get(this.curToken!.type) ?? LOWEST;
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

    __peekTokenIs(tokenType: TokenType) {
      return this.peekToken?.type === tokenType;
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

      this.__nextToken();

      stmt.setRhs(this.__parseExpression(LOWEST));

      if (!this.__expectPeek(SEMICOLON)) {
        throw new Error(`expect ;, but got ${this.curToken?.type}`);
      }
      return stmt;
    }

    __parseExpression(precedence: number): Expression {
      const prefixFn = this.prefixParseFns.get(this.curToken!.type);
      if (prefixFn == null) {
        console.log(this);
        throw new Error(`expect prefix parse function for ${this.curToken}`);
      }
      const boundPrefixFn = prefixFn.bind(this);
      let left = boundPrefixFn();

      while (
        !this.__peekTokenIs(SEMICOLON) &&
        precedence < this.__peekPrecedence()
      ) {
        const inflixFn = this.inflixParseFns.get(this.peekToken!.type);
        if (inflixFn == null) {
          return left;
        }
        const boundInflixFn = inflixFn.bind(this);
        this.__nextToken();
        left = boundInflixFn(left);
      }

      return left;
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

  class Evaluator {
    constructor() {}

    evalExpression(expr: Expression): number {
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

    eval(program: Program): Array<number> {
      return program.statements
        .map((stmt) => {
          if (stmt instanceof ExpressionStatement) {
            const expr = stmt.expression;
            return this.evalExpression(expr!);
          }
          return null;
        })
        .filter((v) => v != null) as Array<number>;
    }
  }

  const parser = new Parser(" 3 > 1 + 2 * 3 + 3 / 1; -5; 1 + 3 * -5;");
  const program = parser.parse();
  const evaluator = new Evaluator();
  const values = evaluator.eval(program);
  console.log("values = ", values);
  // 1. get money by label, 3000
  // 2. replace money with 3000
  // 3. create source "3000 > 200"
  // 4. create evaluator: new Evaluator()
  // 5. const result = eval(source);
  // if result == true {
  //   return <Queston .../>
  // } else return null;
  //   const source = `
  //     money > 200;
  //   `;
}

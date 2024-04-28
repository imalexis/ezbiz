import { Lexer } from "./lexer";
import { FALSE, TRUE, TokenType } from "./token";
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

export interface Node {
  // return the literal value of the token it's associated with
  // a + b -> a
  tokenLiteral(): string;

  // return the Node full text string
  // a + b -> a + b
  toString(): string;
}

export interface Expression extends Node {}

export class Identifier implements Expression {
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

export class IntegerLiteral implements Expression {
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

export class BooleanLiteral implements Expression {
  token: Token;
  value: boolean;
  tokenLiteral(): string {
    return this.token.literal;
  }
  toString(): string {
    return this.value ? "true" : "false";
  }

  constructor(token: Token, value: boolean) {
    this.token = token;
    this.value = value;
  }
}

export class PrefixExpression implements Expression {
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

export class InflixExpression implements Expression {
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

export interface Statement extends Node {}

export class LetStatement implements Statement {
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

export class ExpressionStatement implements Statement {
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

export class Program implements Node {
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

export class Parser {
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
    this.prefixParseFns.set(TRUE, this.__parseBooleanLiteral);
    this.prefixParseFns.set(FALSE, this.__parseBooleanLiteral);

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
    // "3" -> 3
    const value = parseInt(this.curToken!.literal);
    return new IntegerLiteral(this.curToken!, value);
  }

  __parseBooleanLiteral(): Expression {
    const value = this.curToken!.literal === "true" ? true : false;
    return new BooleanLiteral(this.curToken!, value);
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

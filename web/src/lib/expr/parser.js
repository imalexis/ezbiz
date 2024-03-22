"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser =
  exports.Program =
  exports.ExpressionStatement =
  exports.LetStatement =
  exports.InflixExpression =
  exports.PrefixExpression =
  exports.IntegerLiteral =
  exports.Identifier =
    void 0;
var lexer_1 = require("./lexer");
var token_1 = require("./token");
var Identifier = /** @class */ (function () {
  function Identifier(token, value) {
    this.token = token;
    this.value = value;
  }
  Identifier.prototype.tokenLiteral = function () {
    return this.token.literal;
  };
  Identifier.prototype.toString = function () {
    return this.token.literal;
  };
  return Identifier;
})();
exports.Identifier = Identifier;
var IntegerLiteral = /** @class */ (function () {
  function IntegerLiteral(token, value) {
    this.token = token;
    this.value = value;
  }
  IntegerLiteral.prototype.tokenLiteral = function () {
    return this.token.literal;
  };
  IntegerLiteral.prototype.toString = function () {
    return this.token.literal;
  };
  return IntegerLiteral;
})();
exports.IntegerLiteral = IntegerLiteral;
var PrefixExpression = /** @class */ (function () {
  function PrefixExpression(token) {
    this.token = token;
  }
  PrefixExpression.prototype.tokenLiteral = function () {
    return this.token.literal;
  };
  PrefixExpression.prototype.toString = function () {
    var _a;
    return ""
      .concat(this.operator)
      .concat(
        (_a = this.right) === null || _a === void 0 ? void 0 : _a.toString()
      );
  };
  PrefixExpression.prototype.setOperator = function (operator) {
    this.operator = operator;
  };
  PrefixExpression.prototype.setRight = function (expression) {
    this.right = expression;
  };
  return PrefixExpression;
})();
exports.PrefixExpression = PrefixExpression;
var InflixExpression = /** @class */ (function () {
  function InflixExpression(token) {
    this.token = token;
  }
  InflixExpression.prototype.tokenLiteral = function () {
    return this.token.literal;
  };
  InflixExpression.prototype.toString = function () {
    var _a, _b;
    return "("
      .concat(
        (_a = this.left) === null || _a === void 0 ? void 0 : _a.toString(),
        " "
      )
      .concat(this.operator, " ")
      .concat(
        (_b = this.right) === null || _b === void 0 ? void 0 : _b.toString(),
        ")"
      );
  };
  InflixExpression.prototype.setOperator = function (operator) {
    this.operator = operator;
  };
  InflixExpression.prototype.setLeft = function (left) {
    this.left = left;
  };
  InflixExpression.prototype.setRight = function (right) {
    this.right = right;
  };
  return InflixExpression;
})();
exports.InflixExpression = InflixExpression;
var LetStatement = /** @class */ (function () {
  function LetStatement(token) {
    this.token = token;
  }
  LetStatement.prototype.tokenLiteral = function () {
    return this.token.literal;
  };
  LetStatement.prototype.toString = function () {
    var _a, _b;
    return "let "
      .concat(
        (_a = this.lhs) === null || _a === void 0 ? void 0 : _a.toString(),
        " = "
      )
      .concat(
        (_b = this.rhs) === null || _b === void 0 ? void 0 : _b.toString()
      );
  };
  LetStatement.prototype.setLhs = function (lhs) {
    this.lhs = lhs;
  };
  LetStatement.prototype.setRhs = function (rhs) {
    this.rhs = rhs;
  };
  return LetStatement;
})();
exports.LetStatement = LetStatement;
var ExpressionStatement = /** @class */ (function () {
  function ExpressionStatement(token) {
    this.token = token;
  }
  ExpressionStatement.prototype.tokenLiteral = function () {
    return this.token.literal;
  };
  ExpressionStatement.prototype.toString = function () {
    return this.expression.toString();
  };
  ExpressionStatement.prototype.setExpression = function (expression) {
    this.expression = expression;
  };
  return ExpressionStatement;
})();
exports.ExpressionStatement = ExpressionStatement;
var Program = /** @class */ (function () {
  function Program() {
    this.statements = [];
  }
  Program.prototype.tokenLiteral = function () {
    if (this.statements.length === 0) {
      return "";
    }
    return this.statements[0].tokenLiteral();
  };
  Program.prototype.toString = function () {
    return this.statements
      .map(function (stmt) {
        return stmt.toString();
      })
      .join("");
  };
  Program.prototype.push = function (stmt) {
    this.statements.push(stmt);
  };
  return Program;
})();
exports.Program = Program;
// Define precedence
var LOWEST = 1;
var EQUALS = 2;
var LESSGREATER = 3;
var SUM = 4; // +, -
var PRODUCT = 5; // *, /
var PREFIX = 6; // ! - +
var Parser = /** @class */ (function () {
  function Parser(input) {
    this.lexer = new lexer_1.Lexer(input);
    this.__nextToken();
    this.__nextToken();
    this.prefixParseFns = new Map();
    this.inflixParseFns = new Map();
    this.precedences = new Map();
    this.precedences.set(token_1.PLUS, SUM);
    this.precedences.set(token_1.MINUS, SUM);
    this.precedences.set(token_1.ASTERISK, PRODUCT);
    this.precedences.set(token_1.SLASH, PRODUCT);
    this.precedences.set(token_1.LESS_THAN, LESSGREATER);
    this.precedences.set(token_1.LESS_THAN_EQUAL, LESSGREATER);
    this.precedences.set(token_1.GREATER_THAN, LESSGREATER);
    this.precedences.set(token_1.GREATER_THAN_EQUAL, LESSGREATER);
    this.prefixParseFns.set(token_1.ID, this.__parseIdentifier);
    this.prefixParseFns.set(token_1.INT, this.__parseIntegerLiteral);
    this.prefixParseFns.set(token_1.MINUS, this.__parsePrefixExpression);
    this.inflixParseFns.set(token_1.PLUS, this.__parseInflixExpression);
    this.inflixParseFns.set(token_1.MINUS, this.__parseInflixExpression);
    this.inflixParseFns.set(token_1.ASTERISK, this.__parseInflixExpression);
    this.inflixParseFns.set(token_1.SLASH, this.__parseInflixExpression);
    this.inflixParseFns.set(token_1.LESS_THAN, this.__parseInflixExpression);
    this.inflixParseFns.set(
      token_1.LESS_THAN_EQUAL,
      this.__parseInflixExpression
    );
    this.inflixParseFns.set(token_1.GREATER_THAN, this.__parseInflixExpression);
    this.inflixParseFns.set(
      token_1.GREATER_THAN_EQUAL,
      this.__parseInflixExpression
    );
  }
  Parser.prototype.__nextToken = function () {
    this.curToken = this.peekToken;
    this.peekToken = this.lexer.nextToken();
  };
  Parser.prototype.__parseIdentifier = function () {
    return new Identifier(this.curToken, this.curToken.literal);
  };
  Parser.prototype.__parseIntegerLiteral = function () {
    var value = parseInt(this.curToken.literal);
    return new IntegerLiteral(this.curToken, value);
  };
  Parser.prototype.__parsePrefixExpression = function () {
    var expr = new PrefixExpression(this.curToken);
    expr.setOperator(this.curToken.literal);
    this.__nextToken();
    expr.setRight(this.__parseExpression(PREFIX));
    return expr;
  };
  Parser.prototype.__parseInflixExpression = function (left) {
    var expr = new InflixExpression(this.curToken);
    expr.setOperator(this.curToken.literal);
    expr.setLeft(left);
    var precedence = this.__curPrecedence();
    this.__nextToken();
    expr.setRight(this.__parseExpression(precedence));
    return expr;
  };
  Parser.prototype.__peekPrecedence = function () {
    var _a;
    return (_a = this.precedences.get(this.peekToken.type)) !== null &&
      _a !== void 0
      ? _a
      : LOWEST;
  };
  Parser.prototype.__curPrecedence = function () {
    var _a;
    return (_a = this.precedences.get(this.curToken.type)) !== null &&
      _a !== void 0
      ? _a
      : LOWEST;
  };
  Parser.prototype.__expectPeek = function (tokenType) {
    var _a;
    if (
      ((_a = this.peekToken) === null || _a === void 0 ? void 0 : _a.type) !==
      tokenType
    ) {
      return false;
    }
    this.__nextToken();
    return true;
  };
  Parser.prototype.__curTokenIs = function (tokenType) {
    var _a;
    return (
      ((_a = this.curToken) === null || _a === void 0 ? void 0 : _a.type) ===
      tokenType
    );
  };
  Parser.prototype.__peekTokenIs = function (tokenType) {
    var _a;
    return (
      ((_a = this.peekToken) === null || _a === void 0 ? void 0 : _a.type) ===
      tokenType
    );
  };
  Parser.prototype.__parseLetStatement = function () {
    var _a, _b, _c;
    var stmt = new LetStatement(this.curToken);
    if (!this.__expectPeek(token_1.ID)) {
      throw new Error(
        "expect ID, but got ".concat(
          (_a = this.curToken) === null || _a === void 0 ? void 0 : _a.type
        )
      );
    }
    stmt.setLhs(new Identifier(this.curToken, this.curToken.literal));
    if (!this.__expectPeek(token_1.ASSIGN)) {
      throw new Error(
        "expect =, but got ".concat(
          (_b = this.curToken) === null || _b === void 0 ? void 0 : _b.type
        )
      );
    }
    this.__nextToken();
    stmt.setRhs(this.__parseExpression(LOWEST));
    if (!this.__expectPeek(token_1.SEMICOLON)) {
      throw new Error(
        "expect ;, but got ".concat(
          (_c = this.curToken) === null || _c === void 0 ? void 0 : _c.type
        )
      );
    }
    return stmt;
  };
  Parser.prototype.__parseExpression = function (precedence) {
    var prefixFn = this.prefixParseFns.get(this.curToken.type);
    if (prefixFn == null) {
      throw new Error(
        "expect prefix parse function for ".concat(this.curToken)
      );
    }
    var boundPrefixFn = prefixFn.bind(this);
    var left = boundPrefixFn();
    while (
      !this.__peekTokenIs(token_1.SEMICOLON) &&
      precedence < this.__peekPrecedence()
    ) {
      var inflixFn = this.inflixParseFns.get(this.peekToken.type);
      if (inflixFn == null) {
        return left;
      }
      var boundInflixFn = inflixFn.bind(this);
      this.__nextToken();
      left = boundInflixFn(left);
    }
    return left;
  };
  Parser.prototype.__parseExpressionStatement = function () {
    var stmt = new ExpressionStatement(this.curToken);
    stmt.setExpression(this.__parseExpression(LOWEST));
    if (!this.__expectPeek(token_1.SEMICOLON)) {
      throw new Error("expect semicolon, but got ".concat(this.curToken));
    }
    return stmt;
  };
  Parser.prototype.__parseStatement = function () {
    switch (this.curToken.type) {
      case token_1.KW_LET: {
        return this.__parseLetStatement();
      }
      default:
        return this.__parseExpressionStatement();
    }
  };
  Parser.prototype.parse = function () {
    var _a;
    var program = new Program();
    while (
      ((_a = this.curToken) === null || _a === void 0 ? void 0 : _a.type) !==
      token_1.EOF
    ) {
      var stmt = this.__parseStatement();
      program.push(stmt);
      this.__nextToken();
    }
    return program;
  };
  return Parser;
})();
exports.Parser = Parser;

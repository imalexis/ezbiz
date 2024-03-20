"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parser = void 0;
var ILLEGAL = "illegal";
var EOF = "eof";
var ID = "id";
var INT = "int";
var ASSIGN = "=";
var PLUS = "+";
var MINUS = "-";
var ASTERISK = "*";
var SLASH = "/";
var LESS_THAN = "<";
var LESS_THAN_EQUAL = "<=";
var GREATER_THAN = ">";
var GREATER_THAN_EQUAL = ">=";
var COMMA = ",";
var SEMICOLON = ";";
var LPAREN = "(";
var RPAREN = ")";
var LBRACE = "{";
var RBRACE = "}";
var KW_LET = "let";
var Lexer = /** @class */ (function () {
    function Lexer(input) {
        this.input = input;
        this.position = -1;
        this.readPosition = 0;
        this.ch = "";
        this.__readChar(); // Initialize position as 0 and readPosition as 1
    }
    Lexer.prototype.__readChar = function () {
        if (this.readPosition >= this.input.length) {
            this.ch = 0;
        }
        else {
            this.ch = this.input[this.readPosition];
        }
        this.position = this.readPosition;
        this.readPosition += 1;
    };
    // Determine whether arrived the end of file
    Lexer.prototype.__isEOF = function () {
        return this.ch === 0;
    };
    // Determine whether current ch is a letter
    Lexer.prototype.__isLetter = function () {
        return this.ch.toString().length === 1 && /[a-z]/i.test(this.ch.toString());
    };
    // Determine whether current ch is a digit
    Lexer.prototype.__isDigit = function () {
        return (!this.__isEOF() &&
            this.ch.toString().length === 1 &&
            /[0-9]/.test(this.ch.toString()));
    };
    Lexer.prototype.__readIdentifier = function () {
        var startPos = this.position;
        while (this.__isLetter()) {
            this.__readChar();
        }
        var endPos = this.position;
        return this.input.substring(startPos, endPos);
    };
    Lexer.prototype.__readNumber = function () {
        var startPos = this.position;
        while (this.__isDigit()) {
            this.__readChar();
        }
        var endPos = this.position;
        return this.input.substring(startPos, endPos);
    };
    Lexer.prototype.__skipWhiteSpace = function () {
        for (;;) {
            if (this.ch === " " ||
                this.ch === "\t" ||
                this.ch === "\n" ||
                this.ch === "\r") {
                this.__readChar();
                continue;
            }
            break;
        }
    };
    Lexer.prototype.nextToken = function () {
        var tok;
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
                }
                else {
                    tok = { type: LESS_THAN, literal: "<" };
                }
                break;
            }
            case ">": {
                if (this.input[this.readPosition] === "=") {
                    tok = { type: GREATER_THAN_EQUAL, literal: ">=" };
                    this.__readChar();
                }
                else {
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
                    var identifier = this.__readIdentifier();
                    if (identifier === KW_LET) {
                        tok = { type: KW_LET, literal: "let" };
                    }
                    else {
                        tok = { type: ID, literal: identifier };
                    }
                    return tok;
                }
                else if (this.__isDigit()) {
                    tok = { type: INT, literal: this.__readNumber() };
                    return tok;
                }
                else {
                    tok = { type: ILLEGAL, literal: "" };
                }
            }
        }
        this.__readChar();
        return tok;
    };
    return Lexer;
}());
var testCases = [
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
for (var _i = 0, testCases_1 = testCases; _i < testCases_1.length; _i++) {
    var testCase = testCases_1[_i];
    var lexer = new Lexer(testCase.source);
    for (var _a = 0, _b = testCase.result; _a < _b.length; _a++) {
        var testResult = _b[_a];
        var actualResult = lexer.nextToken();
        var expectResult = testResult;
        if (expectResult.type !== actualResult.type ||
            expectResult.literal !== actualResult.literal) {
            console.log("source: ", testCase.source, "actualResult: ", actualResult, "expectResult: ", expectResult);
        }
    }
}
var parser;
(function (parser_1) {
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
    }());
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
    }());
    var PrefixExpression = /** @class */ (function () {
        function PrefixExpression(token) {
            this.token = token;
        }
        PrefixExpression.prototype.tokenLiteral = function () {
            return this.token.literal;
        };
        PrefixExpression.prototype.toString = function () {
            var _a;
            return "".concat(this.operator).concat((_a = this.right) === null || _a === void 0 ? void 0 : _a.toString());
        };
        PrefixExpression.prototype.setOperator = function (operator) {
            this.operator = operator;
        };
        PrefixExpression.prototype.setRight = function (expression) {
            this.right = expression;
        };
        return PrefixExpression;
    }());
    var InflixExpression = /** @class */ (function () {
        function InflixExpression(token) {
            this.token = token;
        }
        InflixExpression.prototype.tokenLiteral = function () {
            return this.token.literal;
        };
        InflixExpression.prototype.toString = function () {
            var _a, _b;
            return "(".concat((_a = this.left) === null || _a === void 0 ? void 0 : _a.toString(), " ").concat(this.operator, " ").concat((_b = this.right) === null || _b === void 0 ? void 0 : _b.toString(), ")");
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
    }());
    var LetStatement = /** @class */ (function () {
        function LetStatement(token) {
            this.token = token;
        }
        LetStatement.prototype.tokenLiteral = function () {
            return this.token.literal;
        };
        LetStatement.prototype.toString = function () {
            var _a, _b;
            return "let ".concat((_a = this.lhs) === null || _a === void 0 ? void 0 : _a.toString(), " = ").concat((_b = this.rhs) === null || _b === void 0 ? void 0 : _b.toString());
        };
        LetStatement.prototype.setLhs = function (lhs) {
            this.lhs = lhs;
        };
        LetStatement.prototype.setRhs = function (rhs) {
            this.rhs = rhs;
        };
        return LetStatement;
    }());
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
    }());
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
            return this.statements.map(function (stmt) { return stmt.toString(); }).join("");
        };
        Program.prototype.push = function (stmt) {
            this.statements.push(stmt);
        };
        return Program;
    }());
    // Define precedence
    var LOWEST = 1;
    var EQUALS = 2;
    var LESSGREATER = 3;
    var SUM = 4; // +, -
    var PRODUCT = 5; // *, /
    var PREFIX = 6; // ! - +
    var Parser = /** @class */ (function () {
        function Parser(input) {
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
            return (_a = this.precedences.get(this.peekToken.type)) !== null && _a !== void 0 ? _a : LOWEST;
        };
        Parser.prototype.__curPrecedence = function () {
            var _a;
            return (_a = this.precedences.get(this.curToken.type)) !== null && _a !== void 0 ? _a : LOWEST;
        };
        Parser.prototype.__expectPeek = function (tokenType) {
            var _a;
            if (((_a = this.peekToken) === null || _a === void 0 ? void 0 : _a.type) !== tokenType) {
                return false;
            }
            this.__nextToken();
            return true;
        };
        Parser.prototype.__curTokenIs = function (tokenType) {
            var _a;
            return ((_a = this.curToken) === null || _a === void 0 ? void 0 : _a.type) === tokenType;
        };
        Parser.prototype.__peekTokenIs = function (tokenType) {
            var _a;
            return ((_a = this.peekToken) === null || _a === void 0 ? void 0 : _a.type) === tokenType;
        };
        Parser.prototype.__parseLetStatement = function () {
            var _a, _b, _c;
            var stmt = new LetStatement(this.curToken);
            if (!this.__expectPeek(ID)) {
                throw new Error("expect ID, but got ".concat((_a = this.curToken) === null || _a === void 0 ? void 0 : _a.type));
            }
            stmt.setLhs(new Identifier(this.curToken, this.curToken.literal));
            if (!this.__expectPeek(ASSIGN)) {
                throw new Error("expect =, but got ".concat((_b = this.curToken) === null || _b === void 0 ? void 0 : _b.type));
            }
            this.__nextToken();
            stmt.setRhs(this.__parseExpression(LOWEST));
            if (!this.__expectPeek(SEMICOLON)) {
                throw new Error("expect ;, but got ".concat((_c = this.curToken) === null || _c === void 0 ? void 0 : _c.type));
            }
            return stmt;
        };
        Parser.prototype.__parseExpression = function (precedence) {
            var prefixFn = this.prefixParseFns.get(this.curToken.type);
            if (prefixFn == null) {
                console.log(this);
                throw new Error("expect prefix parse function for ".concat(this.curToken));
            }
            var boundPrefixFn = prefixFn.bind(this);
            var left = boundPrefixFn();
            while (!this.__peekTokenIs(SEMICOLON) &&
                precedence < this.__peekPrecedence()) {
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
            if (!this.__expectPeek(SEMICOLON)) {
                throw new Error("expect semicolon, but got ".concat(this.curToken));
            }
            return stmt;
        };
        Parser.prototype.__parseStatement = function () {
            switch (this.curToken.type) {
                case KW_LET: {
                    return this.__parseLetStatement();
                }
                default:
                    return this.__parseExpressionStatement();
            }
        };
        Parser.prototype.parse = function () {
            var _a;
            var program = new Program();
            while (((_a = this.curToken) === null || _a === void 0 ? void 0 : _a.type) !== EOF) {
                var stmt = this.__parseStatement();
                program.push(stmt);
                this.__nextToken();
            }
            return program;
        };
        return Parser;
    }());
    var Evaluator = /** @class */ (function () {
        function Evaluator() {
        }
        Evaluator.prototype.evalExpression = function (expr) {
            if (expr instanceof IntegerLiteral) {
                return expr.value;
            }
            if (expr instanceof PrefixExpression) {
                switch (expr.operator) {
                    case "-": {
                        return -this.evalExpression(expr.right);
                    }
                }
            }
            if (expr instanceof InflixExpression) {
                var leftValue = this.evalExpression(expr.left);
                var rightValue = this.evalExpression(expr.right);
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
                        throw new Error("not supportted yet, operator = ".concat(expr.operator));
                }
            }
            throw new Error("not supported, no such branch");
        };
        Evaluator.prototype.eval = function (program) {
            var _this = this;
            return program.statements
                .map(function (stmt) {
                if (stmt instanceof ExpressionStatement) {
                    var expr = stmt.expression;
                    return _this.evalExpression(expr);
                }
                return null;
            })
                .filter(function (v) { return v != null; });
        };
        return Evaluator;
    }());
    // - Substitation
    // - Environment
    //   - set(name, value)
    //   - get(name)
    //  set(a, 7)
    //  set(b, get(a) + 1)
    var parser = new Parser(" 3 > 1 + 2 * 3 + 3 / 1; -5; 1 + 3 * -5;");
    var program = parser.parse();
    var evaluator = new Evaluator();
    var values = evaluator.eval(program);
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
})(parser || (exports.parser = parser = {}));

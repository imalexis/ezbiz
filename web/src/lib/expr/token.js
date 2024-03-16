"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parser = void 0;
var ILLEGAL = "illegal";
var EOF = "eof";
var ID = "id";
var INT = "int";
var ASSIGN = "=";
var PLUS = "+";
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
    var LetStatement = /** @class */ (function () {
        function LetStatement(token) {
            this.token = token;
        }
        LetStatement.prototype.tokenLiteral = function () {
            return this.token.literal;
        };
        LetStatement.prototype.toString = function () {
            return this.token.literal;
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
            this.prefixParseFns.set(ID, this.__parseIdentifier);
        }
        Parser.prototype.__nextToken = function () {
            this.curToken = this.peekToken;
            this.peekToken = this.lexer.nextToken();
        };
        Parser.prototype.__parseIdentifier = function () {
            return new Identifier(this.curToken, this.curToken.literal);
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
        Parser.prototype.__parseLetStatement = function () {
            var _a, _b;
            var stmt = new LetStatement(this.curToken);
            if (!this.__expectPeek(ID)) {
                throw new Error("expect ID, but got ".concat((_a = this.curToken) === null || _a === void 0 ? void 0 : _a.type));
            }
            stmt.setLhs(new Identifier(this.curToken, this.curToken.literal));
            if (!this.__expectPeek(ASSIGN)) {
                throw new Error("expect =, but got ".concat((_b = this.curToken) === null || _b === void 0 ? void 0 : _b.type));
            }
            while (!this.__curTokenIs(SEMICOLON)) {
                this.__nextToken();
            }
            return stmt;
        };
        Parser.prototype.__parseExpression = function (precedence) {
            var prefixFn = this.prefixParseFns.get(this.curToken.type);
            if (prefixFn == null) {
                throw new Error("expect prefix parse function for ".concat(this.curToken));
            }
            var boundPrefixFn = prefixFn.bind(this);
            var expr = boundPrefixFn();
            return expr;
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
    var parser = new Parser("x;");
    var program = parser.parse();
    console.log(JSON.stringify(program));
})(parser || (exports.parser = parser = {}));

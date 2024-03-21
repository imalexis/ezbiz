"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lexer = void 0;
var token_1 = require("./token");
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
                tok = { type: token_1.PLUS, literal: "+" };
                break;
            }
            case "-": {
                tok = { type: token_1.MINUS, literal: "-" };
                break;
            }
            case "*": {
                tok = { type: token_1.ASTERISK, literal: "*" };
                break;
            }
            case "/": {
                tok = { type: token_1.SLASH, literal: "/" };
                break;
            }
            case "<": {
                if (this.input[this.readPosition] === "=") {
                    tok = { type: token_1.LESS_THAN_EQUAL, literal: "<=" };
                    this.__readChar();
                }
                else {
                    tok = { type: token_1.LESS_THAN, literal: "<" };
                }
                break;
            }
            case ">": {
                if (this.input[this.readPosition] === "=") {
                    tok = { type: token_1.GREATER_THAN_EQUAL, literal: ">=" };
                    this.__readChar();
                }
                else {
                    tok = { type: token_1.GREATER_THAN, literal: ">" };
                }
                break;
            }
            case "=": {
                tok = { type: token_1.ASSIGN, literal: "=" };
                break;
            }
            case ",": {
                tok = { type: token_1.COMMA, literal: "," };
                break;
            }
            case ";": {
                tok = { type: token_1.SEMICOLON, literal: ";" };
                break;
            }
            case "(": {
                tok = { type: token_1.LPAREN, literal: "(" };
                break;
            }
            case ")": {
                tok = { type: token_1.RPAREN, literal: ")" };
                break;
            }
            case "{": {
                tok = { type: token_1.LBRACE, literal: "{" };
                break;
            }
            case "}": {
                tok = { type: token_1.RBRACE, literal: "}" };
                break;
            }
            case 0: {
                tok = { type: token_1.EOF, literal: "" };
                break;
            }
            default: {
                if (this.__isLetter()) {
                    var identifier = this.__readIdentifier();
                    if (identifier === token_1.KW_LET) {
                        tok = { type: token_1.KW_LET, literal: "let" };
                    }
                    else {
                        tok = { type: token_1.ID, literal: identifier };
                    }
                    return tok;
                }
                else if (this.__isDigit()) {
                    tok = { type: token_1.INT, literal: this.__readNumber() };
                    return tok;
                }
                else {
                    tok = { type: token_1.ILLEGAL, literal: "" };
                }
            }
        }
        this.__readChar();
        return tok;
    };
    return Lexer;
}());
exports.Lexer = Lexer;
var testCases = [
    {
        source: "=+() abc 123",
        result: [
            { type: token_1.ASSIGN, literal: "=" },
            { type: token_1.PLUS, literal: "+" },
            { type: token_1.LPAREN, literal: "(" },
            { type: token_1.RPAREN, literal: ")" },
            { type: token_1.ID, literal: "abc" },
            { type: token_1.INT, literal: "123" },
            { type: token_1.EOF, literal: "" },
        ],
    },
    {
        source: "a = 123;",
        result: [
            { type: token_1.ID, literal: "a" },
            { type: token_1.ASSIGN, literal: "=" },
            { type: token_1.INT, literal: "123" },
            { type: token_1.SEMICOLON, literal: ";" },
            { type: token_1.EOF, literal: "" },
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

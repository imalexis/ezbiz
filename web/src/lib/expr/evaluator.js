"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evaluator = void 0;
var parser_1 = require("./parser");
var Evaluator = /** @class */ (function () {
    function Evaluator() {
        this.env = new Map();
    }
    Evaluator.prototype.evalExpression = function (expr) {
        if (expr instanceof parser_1.Identifier) {
            var value = this.env.get(expr.tokenLiteral());
            if (value == null) {
                throw new Error("variable ".concat(expr.tokenLiteral(), " not found"));
            }
            return value;
        }
        if (expr instanceof parser_1.IntegerLiteral) {
            return expr.value;
        }
        if (expr instanceof parser_1.PrefixExpression) {
            switch (expr.operator) {
                case "-": {
                    return -this.evalExpression(expr.right);
                }
            }
        }
        if (expr instanceof parser_1.InflixExpression) {
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
        program.statements.forEach(function (stmt) {
            var _a;
            if (stmt instanceof parser_1.ExpressionStatement) {
                var expr = stmt.expression;
                return _this.evalExpression(expr);
            }
            if (stmt instanceof parser_1.LetStatement) {
                var value = _this.evalExpression(stmt.rhs);
                var name_1 = (_a = stmt.lhs) === null || _a === void 0 ? void 0 : _a.tokenLiteral();
                _this.env.set(name_1 !== null && name_1 !== void 0 ? name_1 : "", value);
            }
        });
        return this.env;
    };
    return Evaluator;
}());
exports.Evaluator = Evaluator;
// let visibility_rule = money > 100;
var money = 200; // read from response;
var parser = new parser_1.Parser("let visible = money > 100;");
var program = parser.parse();
var evaluator = new Evaluator();
evaluator.env.set("money", money);
var output = evaluator.eval(program);
console.log("visible = ", output.get("visible"));

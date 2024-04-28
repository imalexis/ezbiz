export type TokenType =
  | "illegal"
  | "eof"
  | "id"
  | "int"
  | "true"
  | "false"
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

export const ILLEGAL: TokenType = "illegal";
export const EOF: TokenType = "eof";

export const ID: TokenType = "id";
export const INT: TokenType = "int";

export const ASSIGN: TokenType = "=";
export const PLUS: TokenType = "+";
export const MINUS: TokenType = "-";
export const ASTERISK: TokenType = "*";
export const SLASH: TokenType = "/";

export const LESS_THAN: TokenType = "<";
export const LESS_THAN_EQUAL = "<=";
export const GREATER_THAN: TokenType = ">";
export const GREATER_THAN_EQUAL: TokenType = ">=";

export const COMMA: TokenType = ",";
export const SEMICOLON: TokenType = ";";

export const LPAREN: TokenType = "(";
export const RPAREN: TokenType = ")";
export const LBRACE: TokenType = "{";
export const RBRACE: TokenType = "}";

export const TRUE: TokenType = "true";
export const FALSE: TokenType = "false";

export const KW_LET: TokenType = "let";

export type Token = {
  type: TokenType;
  literal: string;
};

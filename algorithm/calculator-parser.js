const deepEqual = require('./deep-equal');

// parser
function tokenize(code) {
  const results = [];
  const tokenRegExp = /\s*([A-Za-z]+|[0-9]+|\S)\s*/g;

  let m;
  while ((m = tokenRegExp.exec(code)) !== null) {
    results.push(m[1]);
  }
  return results;
}

console.assert(deepEqual(tokenize("123\n"), ["123"]));
console.assert(deepEqual(tokenize("2+2"), ["2", "+", "2"]));
console.assert(deepEqual(tokenize("+-*/"), ["+", "-", "*", "/"]));
console.assert(deepEqual(tokenize("   1   * 24 +\n\n  pi"), ["1", "*", "24", "+", "pi"]));
console.assert(deepEqual(tokenize("()"), ["(", ")"]));
console.assert(deepEqual(tokenize("    "), []));

function isNumber(token) {
  return token !== undefined && token.match(/^[0-9]+$/) !== null;
}

function isName(token) {
  return token !== undefined && token.match(/^[A-Za-z]+$/) !== null;
}

console.assert(isNumber("123"));
console.assert(!isNumber("x"));
console.assert(!isNumber("-"));
console.assert(isName("xyz"));
console.assert(!isName("+"));

function parse(code) {
  const tokens = tokenize(code);
  let position = 0;

  function peek() {
    return tokens[position];
  }

  function consume(token) {
    position++;
  }

  function parsePrimaryExpr() {
    let t = peek();

    if (isNumber(t)) {
      consume(t);
      return {type: "number", value: t};
    } else if (isName(t)) {
      consume(t);
      return {type: "name", id: t};
    } else if (t === "(") {
      consume(t);

      const expr = parseExpr();

      if (peek() !== ")") {
        throw new SyntaxError("expected )");
      }
      consume(")");

      return expr;
    } else {
      throw new SyntaxError("expected a number, a variable, or parentheses");
    }
  }

  function parseMulExpr() {
    let expr = parsePrimaryExpr();
    let t = peek();

    while (t === "*" || t === "/") {
      consume(t);

      const rhs = parsePrimaryExpr();
      expr = {type: t, left: expr, right: rhs};
      t = peek();
    }
    return expr;
  }

  function parseExpr() {
    let expr = parseMulExpr();
    let t = peek();

    while (t === "+" || t === "-") {
      consume(t);
      const rhs = parseMulExpr();
      expr = {type: t, left: expr, right: rhs};
      t = peek();
    }
    return expr;
  }

  const result = parseExpr();

  if (position !== tokens.length) {
    throw new SyntaxError("unexpected '" + peek() + "'");
  }

  return result;
}

console.assert(deepEqual(
  parse("(1 + 2) / 3"),
  {
    type: "/",
    left: {
      type: "+",
      left: {type: "number", value: "1"},
      right: {type: "number", value: "2"}
    },
    right: {type: "number", value: "3"}
  })
)

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, num) => acc + num, 0);
};

const multiply = function (a, b) {
  return a * b;
};

const power = function (a, pow) {
  return a ** pow;
};

const factorial = function (a, fac) {
  if (a < 0) {
    return;
  }
  if (a == 0 || a == 1) {
    return 1;
  }

  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

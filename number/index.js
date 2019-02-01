const checkType = require("../utils");

const numberValidator = () => {
  const isNumber = () => value => checkType(value, "number");
  const isNaN = () => value => Number.isNaN(value);
  const min = min => {
    if (!isNumber()(min)) {
      throw new TypeError("min is not a valid number");
    }

    return value => value >= min;
  };

  const max = max => {
    if (!isNumber()(max)) {
      throw new TypeError("max is not a valid number");
    }

    return value => value <= max;
  };

  const lt = lt => {
    if (!isNumber()(lt)) {
      throw new TypeError("lt is not a valid number");
    }
    return value => value < lt;
  };

  const isPositive = () => value => value > 0;
  const isNegative = () => value => value < 0;
  const isInteger = () => value => Number.isInteger(value);
  const equals = expected => {
    if (!isNumber()(expected)) {
      throw new TypeError("expected is not a valid number");
    }

    return value => value === expected;
  };

  const gt = gt => {
    if (!isNumber()(gt)) {
      throw new TypeError("gt is not a valid number");
    }

    return value => value > gt;
  };

  const between = (a, b) => {
    if (!isNumber()(a)) {
      throw new TypeError("a is not a valid number");
    }

    if (!isNumber()(b)) {
      throw new TypeError("b is not a valid number");
    }

    if (a > b) {
      let temp = a;
      a = b;
      b = temp;
    }

    return value => value > a && value < b;
  };

  return {
    isNumber,
    isNaN,
    min,
    max,
    lt,
    isPositive,
    isNegative,
    isInteger,
    equals,
    gt,
    between
  };
};

module.exports = numberValidator();

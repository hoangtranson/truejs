const checkType = require("../utils");

const numberValidator = () => {
  const isNumber = () => value => checkType(value, "number");
  const isNaN = () => value => Number.isNaN(value);
  const min = min => {
    !isNumber()(min)
      ? printErr("min is not a valid number")
      : value => value >= min;
  };

  const max = max => {
    !isNumber()(max)
      ? printErr("max is not a valid number")
      : value => value <= max;
  };

  const lt = lt => {
    !isNumber()(lt)
      ? printErr("lt is not a valid number")
      : value => value < lt;
  };

  const isPositive = () => value => value > 0;
  const isNegative = () => value => value < 0;
  const isInteger = () => value => Number.isInteger(value);
  const equals = expected => {
    !isNumber()(expected)
      ? printErr("expected is not a valid number")
      : value => value === expected;
  };

  const gt = gt => {
    !isNumber()(gt)
      ? printErr("gt is not a valid number")
      : value => value > gt;
  };

  const between = (a, b) => {
    if (!isNumber()(a)) {
      printErr("a is not a valid number");
    }

    if (!isNumber()(b)) {
      printErr("b is not a valid number");
    }

    if (a > b) {
      let temp = a;
      a = b;
      b = temp;
    }

    return value => value > a && value < b;
  };

  function printErr(msg) {
    throw new TypeError(msg);
  }

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

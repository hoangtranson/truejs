const checkType = require("./utils");

const truth = () => {
  const validator = Array.from(arguments);
  if (!validator.every(v => checkType(v, "function"))) {
    throw new TypeError("arguments should be a function");
  }

  return value => validator.reduce((valid, v) => valid && v(value), true);
};

module.exports = truth;

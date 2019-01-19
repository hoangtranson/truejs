import test from "ava";
const {
  min,
  isNumber,
  isNaN,
  max,
  lt,
  isPositive,
  isNegative,
  isInteger,
  equals,
  gt,
  between
} = require("../number");

test("isNumber should return false when input is not a number", t => {
  const inputs = ["1", true, "-3", null, "$4"];
  inputs.forEach(input => {
    const type = typeof input;
    t.is(isNumber(input), false, `${input} is ${type}`);
  });
});
test.todo("isNumber should return valid number");
test.todo("isNumber should return invalid number");

test.todo("isNaN should return true");
test.todo("isNaN should return false");

test.todo("min should be a function");
test.todo("min should throw error when argument is invalid");
test.todo("min should should return right");

test.todo("max should be a function");
test.todo("max should throw error when argument is invalid");
test.todo("max should should return right");

test.todo("lt should be a function");
test.todo("lt should throw error when argument is invalid");
test.todo("lt should return true");
test.todo("lt should return false");

test.todo("isPositive should return true");
test.todo("isPositive should return false");

test.todo("isNegative should return true");
test.todo("isNegative should return false");

test.todo("isInteger should return true");
test.todo("isInteger should return false");

test.todo("equals should be a function");
test.todo("equals should throw error when argument is invalid");
test.todo("equals should return true");
test.todo("equals should return false");

test.todo("gt should be a function");
test.todo("gt should throw error when argument is invalid");
test.todo("gt should return true");
test.todo("gt should return false");

test.todo("between should be a function");
test.todo("between should throw error when arguments is invalid");
test.todo("between should return true");
test.todo("between should return false");

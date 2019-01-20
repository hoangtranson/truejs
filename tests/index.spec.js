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
const truth = require("../index");

test("Test Age of my bicycle", t => {
  const ageValidator = truth(isNumber(), isInteger(), between(1, 100));
  t.is(ageValidator(5), true);
  t.is(ageValidator(110), false);
  t.is(ageValidator(-10), false);
  t.is(ageValidator(1.0), false);
});

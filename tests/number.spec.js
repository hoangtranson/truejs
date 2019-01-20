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
  const check = isNumber();
  inputs.forEach(input => {
    const type = typeof input;
    t.is(check(input), false, `${input} is ${type}`);
  });
});
test("isNumber should return true when input is a number", t => {
  const inputs = [Number.NaN, Number.NEGATIVE_INFINITY, Math.PI, 1, -1, 0xff];
  const check = isNumber();
  inputs.forEach(input => {
    const type = typeof input;
    t.is(check(input), true, `${input} is ${type}`);
  });
});

test("isNaN should return true", t => {
  const inputs = [Number.NEGATIVE_INFINITY, Math.PI, 1, -1, 0xff];
  const check = isNaN();
  inputs.forEach(input => {
    const type = typeof input;
    t.is(check(input), false, `${input} is ${type}`);
  });
});
test("isNaN should return false", t => {
  const inputs = [Number.NaN];
  const check = isNaN();
  inputs.forEach(input => {
    const type = typeof input;
    t.is(check(input), true, `${input} is ${type}`);
  });
});

test("min should throw error when argument is invalid", t => {
  const pair = [null, 1];
  const error = t.throws(() => min(pair[0])(pair[1]), TypeError);
  t.is(error.message, "min is not a valid number");
});
test("min should should return false", t => {
  const pair = [2, 1];
  const value = min(pair[0])(pair[1]);
  t.is(value, false);
});
test("min should should return true", t => {
  const pair = [1, 1];
  const value = min(pair[0])(pair[1]);
  t.is(value, true);
});

test("max should throw error when argument is invalid", t => {
  const pair = [null, 1];
  const error = t.throws(() => max(pair[0])(pair[1]), TypeError);
  t.is(error.message, "max is not a valid number");
});
test("max should should return true", t => {
  const pair = [10, 1];
  const value = max(pair[0])(pair[1]);
  t.is(value, true);
});

test("max should should return false", t => {
  const pair = [10, 11];
  const value = max(pair[0])(pair[1]);
  t.is(value, false);
});

test("lt should throw error when argument is invalid", t => {
  const pair = [null, 1];
  const error = t.throws(() => lt(pair[0])(pair[1]), TypeError);
  t.is(error.message, "lt is not a valid number");
});
test("lt should return true", t => {
  const pair = [10, 9];
  const value = lt(pair[0])(pair[1]);
  t.is(value, true);
});
test("lt should return false", t => {
  const pair = [10, 10];
  const value = lt(pair[0])(pair[1]);
  t.is(value, false);
});

test("isPositive should return true", t => {
  t.plan(4);
  const check = isPositive();
  t.is(check(1), true);
  t.is(check(Number.POSITIVE_INFINITY), true);
  t.is(check(1.0), true);
  t.is(check(0xca), true);
});
test("isPositive should return false", t => {
  t.plan(4);
  const check = isPositive();
  t.is(check(-1), false);
  t.is(check(Number.NEGATIVE_INFINITY), false);
  t.is(check(-1.0), false);
  t.is(check(-0xca), false);
});

test("isNegative should return true", t => {
  t.plan(4);
  const check = isNegative();
  t.is(check(-1), true);
  t.is(check(Number.NEGATIVE_INFINITY), true);
  t.is(check(-1.0), true);
  t.is(check(-0xca), true);
});
test("isNegative should return false", t => {
  t.plan(4);
  const check = isNegative();
  t.is(check(1), false);
  t.is(check(Number.POSITIVE_INFINITY), false);
  t.is(check(1.0), false);
  t.is(check(0xca), false);
});

test("isInteger should return true", t => {
  const inputs = [1, -1, 1.0, 0 - 0, 0xff];
  const check = isInteger();
  inputs.forEach(input => {
    t.is(check(input), true, `${input} should be an integer`);
  });
});
test("isInteger should return false", t => {
  const inputs = [
    Math.PI,
    Number.NaN,
    Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    "1",
    "-1",
    true,
    null,
    "#1",
    undefined
  ];
  const check = isInteger();
  inputs.forEach(input => {
    t.is(check(input), false, `${input} should not be an integer`);
  });
});

test("equals should throw error when argument is invalid", t => {
  const pair = [null, 1];
  const error = t.throws(() => equals(pair[0])(pair[1]), TypeError);
  t.is(error.message, "expected is not a valid number");
});
test("equals should return true", t => {
  const pair = [1, 1];
  t.is(equals(pair[0])(pair[1]), true);
});
test("equals should return false", t => {
  const pair = [0, 1];
  t.is(equals(pair[0])(pair[1]), false);
});

test("gt should throw error when argument is invalid", t => {
  const pair = [null, 1];
  const error = t.throws(() => gt(pair[0])(pair[1]), TypeError);
  t.is(error.message, "gt is not a valid number");
});
test("gt should return true", t => {
  const pair = [0, 1];
  t.is(gt(pair[0])(pair[1]), true);
});
test("gt should return false", t => {
  const pair = [0, -1];
  t.is(gt(pair[0])(pair[1]), false);
});

test("between should throw error when arguments is invalid", t => {
  t.plan(4);
  const pair1 = [null, 1];
  const error1 = t.throws(() => between(pair1[0])(pair1[1]), TypeError);
  t.is(error1.message, "a is not a valid number");

  const pair2 = [1, null];
  const error2 = t.throws(() => between(pair2[0])(pair2[1]), TypeError);
  t.is(error2.message, "b is not a valid number");
});

test("between should return true", t => {
  const min = 4,
    max = 6,
    input = 5;
  t.is(
    between(min, max)(input),
    true,
    `${input} should be between ${min} and ${max}`
  );
});
test("between should return false", t => {
  const min = 6,
    max = 4,
    input = 6;
  t.is(
    between(min, max)(input),
    false,
    `${input} should not be between ${min} and ${max}`
  );
});

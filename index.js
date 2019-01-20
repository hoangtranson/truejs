module.exports = (...fns) => value =>
  fns.reduce((res, fn) => res && fn(value), true);

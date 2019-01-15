const checkType = (value, type) => {
  if (typeof type !== "string") {
    throw new TypeError("function checkType: type must be string");
  }

  return typeof value === type.toLowerCase();
};

module.exports = checkType;

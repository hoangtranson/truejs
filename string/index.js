const checkType = require("../utils");
const { isNumber } = require('../number');

const stringValidator = () => {
    const isUppercase = () => value => value === value.toUpperCase();
    const startWith = (str) => {
        const validString = isString();

        if (!validString(str)) {
            throw new TypeError('argument is not a string');
        }
        return value => value.startsWith(str);
    };
    const isOneOf = () => '';
    const isNotEmpty = () => '';
    const min = (len) => {
        if (!isNumber(len)) {
            throw new TypeError('argument is not a number');
        }
        return value => value.length >= len;
    };
    const max = (len) => {
        if (!validNumber(len)) {
            throw new TypeError('max: maxLength argument is not a number');
        }

        return value => value.length <= len;
    };
    const isMatch = () => '';
    const isLowerCase = () => '';
    const length = () => '';
    const isString = () => value => checkType(value, 'string');
    const isJson = () => '';
    const isHtml = () => '';
    const isHexColor = () => '';
    const eq = () => '';
    const extendedAscii = () => '';
    const endWith = () => '';
    const empty = () => '';
    const contain = () => '';
    const between = () => '';
    const ascii = () => '';
    const base64 = () => '';
    const isMarkdown = () => '';

    return {
        isUppercase,
        startWith
    };
};

module.exports = stringValidator();

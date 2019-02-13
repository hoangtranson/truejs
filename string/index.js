const checkType = require("../utils");
const { isNumber } = require('../number');

const stringValidator = () => {
    const isUppercase = () => value => value === value.toUpperCase();
    const startWith = str => {
        const validString = isString();

        if (!validString(str)) {
            throw new TypeError('argument is not a string');
        }
        return value => value.startsWith(str);
    };
    const isOneOf = () => '';
    const isNotEmpty = () => '';
    const min = len => {
        const validNumber = isNumber();
        if (!validNumber(len)) {
            throw new TypeError('argument is not a number');
        }
        return value => value.length >= len;
    };
    const max = len => {
        const validNumber = isNumber();
        if (!validNumber(len)) {
            throw new TypeError('argument is not a number');
        }

        return value => value.length <= len;
    };
    const match = pattern => {
        if (!(pattern instanceof RegExp)) {
            throw new TypeError('argument is not an instance of RegExp');
        }
        return value => pattern.test(value);
    };
    const isLowerCase = () => value => value === value.toLowerCase();;
    const length = (len) => {
        const validNumber = isNumber();
        if (!validNumber(len)) {
            throw new TypeError('argument is not a number');
        }

        return value => value.length === len;
    };
    const isString = () => value => checkType(value, 'string');
    const isJson = () => 'support later';
    const isHtml = () => 'support later';
    const isHexColor = () => {
        const hexColorMatcher = match(/^#([0-9A-F]{3}|[0-9A-F]{6})$/i);
        return value => hexColorMatcher(value);
    };
    const eq = () => '';
    const extendedAscii = () => '';
    const endWith = () => '';
    const empty = () => {
        const emptyMatcher = match(/^[\s]*$/);
        return value => emptyMatcher(value);
    };
    const contain = (str) => {
        const validString = isString();
        if (!validString(str)) {
            throw new TypeError('argument is not a string');
        }

        return value => value.indexOf(str) > -1;
    };
    const between = (min, max) => {
        const validNumber = isNumber();
        if (!validNumber(min)) {
            throw new TypeError('between: min argument is not a valid number');
        }
        if (!validNumber(max)) {
            throw new TypeError('between: max argument is not a valid number');
        }

        if (min > max) {
            let temp = min;
            min = max;
            max = temp;
        }

        return value => value.length >= min && value.length <= max;
    };
    const ascii = () => {
        const asciiMatcher = match(/^[\x00-\x7F]*$/);
        return value => asciiMatcher(value);
    };
    const base64 = () => {
        const base64Matcher = match(/^[A-Za-z0-9+/=]*$/);
        return value => {
            if (!base64Matcher(value)) {
                return false;
            }

            if (value.length % 4 !== 0) {
                return false;
            }

            const firstEqual = value.indexOf('=');

            if (firstEqual > -1 && firstEqual < value.length - 2) {
                return false;
            }

            if (firstEqual === value.length - 2 && !value.endsWith('=')) {
                return false;
            }

            return true;
        };
    };
    const isMarkdown = () => 'support later';

    return {
        isUppercase,
        isLowerCase,
        startWith,
        ascii,
        min,
        max,
        base64,
        contain,
        empty,
        length,
        isHexColor,
        between
    };
};

module.exports = stringValidator();

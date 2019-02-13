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
        if (!isNumber(len)) {
            throw new TypeError('argument is not a number');
        }
        return value => value.length >= len;
    };
    const max = len => {
        if (!validNumber(len)) {
            throw new TypeError('max: maxLength argument is not a number');
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
    const isMarkdown = () => '';

    return {
        isUppercase,
        isLowerCase,
        startWith,
        ascii,
        min,
        max
    };
};

module.exports = stringValidator();

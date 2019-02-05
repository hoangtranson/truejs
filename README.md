# truthjs

[![Maintainability](https://api.codeclimate.com/v1/badges/651c8c4d5473ebf905b2/maintainability)](https://codeclimate.com/github/hoangtranson/truejs/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/651c8c4d5473ebf905b2/coverage)](https://codeclimate.com/github/hoangtranson/truejs/coverage)

**truthjs** is a javascript validator library for:

- Number
- Array (future support)
- Boolean (future support)
- Email (future support)
- Network (future support)
- Object (future support)
- String (future support)

truthjs was implemented by functional approach by creating validator composable.

> truthjs uses recent ES features. It is tested on stable Node. If you need to support legacy browsers consider using a transpiler with polyfills.

## Installation

truthjs can be installed using npm.

```bash
npm install --save truthjs
```

For the complete code including all tests the repo can be cloned.

```bash
git clone https://github.com/hoangtranson/truejs.git
cd truejs
npm run test
```

## Getting Started

The `truthjs` function composes the validator to a single validator function. The validator are run in order, if one returns false the following functions will not be run.

In this example the age:

- Must be a number.
- Must be a integer.
- Must between 1 and 100.

```javascript
const truth = require("truthjs");
const { isNumber, isInteger, between } = require("truthjs/number");
const ageValidator = truth(isNumber(), isInteger(), between(1, 100));

ageValidator(5);
ageValidator(-10);
ageValidator(1.0);
```

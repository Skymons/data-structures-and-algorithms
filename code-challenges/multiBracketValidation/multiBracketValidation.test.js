'use strict';

const bracketValidation = require('./multiBracketValidation');

describe('Multi Bracket Validation in a String', () => {
  let bracketTestCases = describe.each([
    ['', true],
    // Single open
    ['(', false],
    ['{', false],
    ['[', false],
    // Single close
    [')', false],
    ['}', false],
    [']', false],
    // Simple match
    ['()', true],
    ['{}', true],
    ['[]', true],
    // Simple unmatched beginning
    ['({}', false],
    ['{()', false],
    ['{[]', false],
    // Simple unmatched ending
    ['({})]', false],
    ['{()}]', false],
    ['{[]})', false],
  ]);

  bracketTestCases(`%s`, (value, expected) => {
    it('is ' + expected, () => {
      let result = bracketValidation(value);
      expect(result).toBe(expected);
    });
  });

  bracketTestCases(`string '%s' is valid?`, (value, expected) => {
    it(`is still '${expected}'`, () => {
      let result = bracketValidation(value);
      expect(result).toBe(expected);
    });
  });

  it('should return true with an empty string', () => {
    let validation = bracketValidation('');
    expect(validation).toBe(true);
  });

  it('should return true with acorrect string', () => {
    let validation = bracketValidation('hi [{()[]}] !');
    expect(validation).toBe(true);
  });

});

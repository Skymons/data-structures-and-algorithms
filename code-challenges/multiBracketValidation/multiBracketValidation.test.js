'use strcit';

const bracketValidation = require('./multiBracketValidation');

describe('Multi Bracket Validation in a String', () => {

  it('should return true with an empty string', () => {
    let validation = bracketValidation('');
    expect(validation).toBeTruthy();
  });

  it('should return true with acorrect string', () => {
    let validation = bracketValidation('');
    expect(validation).toBeTruthy();
  });
});

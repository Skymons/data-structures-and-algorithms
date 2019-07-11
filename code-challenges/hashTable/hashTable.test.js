'use strict';

const HashTable = require('./hashTable');

describe('Hash Tables', () => {

  it('returns false for value that is not in table', () => {
    let newHT = new HashTable;
    expect(newHT.contains('missing')).toBe(false);
    expect(newHT.get('missing')).toBe(null);
  });

  it('returns true if value exists in table', () => {
    let newHT = new HashTable;
    newHT.add('sky', 'mons');

    expect(newHT.contains('sky')).toBe(true);
    expect(newHT.get('sky')).toBe('mons');

    expect(newHT.contains('missing')).toBe(false);
    expect(newHT.get('missing')).toBe(null);
  });
});

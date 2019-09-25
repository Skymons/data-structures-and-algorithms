'use strict';

let checkRepeats = (string) => {
  let wordCheck = new Set;
  let words = string.split(/,?\s/g);
  for(let i = 0; i < words.length; i++) {
    if(!wordCheck.has(words[i])) {
      wordCheck.add(words[i]);
    } else {
      return words[i];
    }
  };
}

module.exports = checkRepeats;
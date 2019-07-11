'use strict';

class HashTable {
  constructor(size = 144) {
    this.storage = [];
    this.size = size;
  }

  hash(key) {
    let prime = 929;
    let total = 0;
    if(typeof key !== 'string'){
      key = JSON.stringify(key);
    }
    if (!key) {
      return 0;
    }
    for(let i = 0; i < key.length; i++){
      total += prime * total + key.charCodeAt(i);
    }
    return total % 144;
  }

  add(key, value) {
    let bucket = this.hash(key);
    this.storage[bucket] = { key, value };
  }

  contains(key) {
    if(!this.storage[this.hash(key)]) {
      return false;
    } else {
      return true;
    }
  }

  get(key) {
    let keyFind = this.storage[this.hash(key)];
    if(!keyFind) {
      return null;
    } else {
      return keyFind.value;
    }
  }

}


module.exports = HashTable;

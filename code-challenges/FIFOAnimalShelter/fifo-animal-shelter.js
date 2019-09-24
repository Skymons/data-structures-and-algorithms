'use strict';

class AnimalNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Animal {
  constructor()
  {
    this.first = null;
    this.last = null;
  }



}

module.exports={Animal, AnimalNode};

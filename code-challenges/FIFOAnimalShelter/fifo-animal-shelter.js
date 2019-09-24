'use strict';

class AnimalNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

module.exports = class Animal {
  constructor()
  {
    this.first = null;
    this.last = null;
  }

  enqueue(animal) {
    if(animal === 'cat' || animal === 'dog') {
      if(this.first === null) {
        this.first = new AnimalNode(animal);
        this.last = this.first;
      } else {
        var newNode = new AnimalNode(animal);
        this.last.next = newNode;
        newNode.prev = this.last;
        this.last = newNode;
      }
    } else {
      return 'We only accept cat or dog'
    }
  }

  dequeue(preference) {
    let current = this.first;
    if(this.first === null) {
        return `Can't remove from empty queue`;
      }
    while(current) {
       if(current.value === preference || !preference) {
        let dequeueVal = this.first.value;
        this.first = this.first.next;
        if(this.first){
          this.first.prev = null;
        }
        current = null;
        return dequeueVal;
      } else if(current.next.value === preference) {
        let dequeueVal = this.first.next.value;
        this.first.next = this.first.next.next;
        if(this.first.next){
          this.first.prev = this.first;
        }
        current = null;
        return dequeueVal;
      } else {
        current = current.next;
      }
    }
    
  }

  toString() {
    var myLinkedListString = [];
    var current = this.first;
    while (current) {
      myLinkedListString.push(current.value);
      current = current.next;
    }
    return myLinkedListString.join(', ');
  }

}

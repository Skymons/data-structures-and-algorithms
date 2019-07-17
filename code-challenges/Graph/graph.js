'use strict';

const Graph = function() {
  this.container = {};
  this.size = 0;
};

Graph.prototype.add = function (value) {
  this.container[value] = {};
  this.size ++;
};

Graph.prototype.addLink = function(start, end) {
  this.container[start][end] = true;
  this.container[end][start] = true;
};

Graph.prototype.deleteLink = function(start, end) {
  delete this.container[start][end];
  delete this.container[end][start];
};

Graph.prototype.checkLink = function(start, end) {
  return this.container[start].hasOwnProperty(end);
};

Graph.prototype.contains = function(value) {
  return this.container.hasOwnProperty(value);
};

Graph.prototype.deleteValue = function(value) {
  console.log(this.container[value]);
  delete this.container[value];
  this.size --;
  for(let entry in this.container) {
    if (this.container[entry][value]) {
      delete this.container[entry] [value];
    }
  }
};

module.exports = Graph;

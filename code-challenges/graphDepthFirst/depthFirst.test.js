const Graph = require('../Graph/graph');
const depthFirst = require('./depthFirst');

describe('The DepthFirst Function', () => {
  let test = new Graph();
  popGraph(test);

  it('should throw an error if graph isnt passed in', () => {
    let res = depthFirst(test);
    expect(res);
  });
});

function popGraph(test) {
  test.addNode('A');
  test.addNode('B');
  test.addNode('C');
  test.addNode('D');
  test.addNode('E');
  test.addNode('F');
  test.addEdge('A', 'B');
  test.addEdge('B', 'E');
  test.addEdge('B', 'F');
  test.addEdge('F', 'C');
}
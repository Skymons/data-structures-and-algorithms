'use strcit';

const Graph = require('./graph');

describe('Graphs', () => {


  it('can add values', () => {
    let funGraph = new Graph;
    funGraph.add('Xbox360');
    funGraph.add('XboxONE');
    expect(funGraph.size).toBe(2);
    expect(funGraph.contains('Xbox360')).toBe(true);
    expect(funGraph.contains('XboxONE')).toBe(true);
    expect(funGraph.contains('Xbox')).toBe(false);
    expect(funGraph.contains('Xbo')).toBe(false);
  });

  it('can add links between values', () => {
    let funGraph = new Graph;
    funGraph.add('Xbox360');
    funGraph.add('XboxONE');
    funGraph.addLink('Xbox360', 'XboxONE');
    expect(funGraph.checkLink('Xbox360', 'XboxONE')).toBe(true);
  });

  it('can delete links between values', () => {
    let funGraph = new Graph;
    funGraph.add('Xbox360');
    funGraph.add('XboxONE');
    funGraph.addLink('Xbox360', 'XboxONE');
    funGraph.deleteLink('Xbox360', 'XboxONE');
    expect(funGraph.checkLink('Xbox360', 'XboxONE')).toBe(false);
  });

  it('can delete values', () => {
    let funGraph = new Graph;
    funGraph.add('Xbox360');
    funGraph.add('XboxONE');
    funGraph.deleteValue('Xbox360');
    expect(funGraph.contains('Xbox360')).toBe(false);
    expect(funGraph.contains('XboxONE')).toBe(true);
  });

});

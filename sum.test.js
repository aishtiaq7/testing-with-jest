const sum = require('./sum');

describe("Grouped tests", ()=>{
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test(' -7 + -10 to equal -17', () => {
    expect(sum(-7, -10)).toBe(-17);
  });
})


describe("Another Group", ()=>{
  it('adds 2+2 should be <5', () => {
    expect(sum(2, 2)).toBeLessThan(5);
  });
  
  test(' 10+10 should be more than 9', () => {
    expect(sum(10,10)).toBeGreaterThan(9);
  });
})
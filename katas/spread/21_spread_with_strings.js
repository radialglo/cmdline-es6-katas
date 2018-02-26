// 21: spread - with-strings
// To do: make all tests pass, leave the assert lines unchanged!
let assert = require('chai').assert

describe('spread with strings', () => {

  it('simply spread each char of a string', function() {
    const [a, b] = [...'ab'];
    assert.equal(a, 'a');
    assert.equal(b, 'b');
  });

  it('extracts each array item', function() {
    const [c, a, b] = ['a', ...'12'];
    assert.equal(a, 1);
    assert.equal(b, 2);
  });
  
  it('works anywhere inside an array (must not be last)', function() {
    const letters = ['a', ...'bcd', 'e', 'f'];
    assert.equal(letters.length, 6);
  });
  
  it('dont confuse with the rest operator', function() {
    // The following code passes on tddbin, but not when run on the command line
    // deepEqual here doesn't not coerce strings into Numbers when performing an equality comparison
    // const [...rest] = [...'1234', ...'5'];
    const [...rest] = [...[1, 2, 3, 4], ...[5]];
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  });
  
  it('passed as function parameter', function() {
    // ...'12345' also works
    const max = Math.max(...[1, 2, 3, 4, 5]);
    assert.deepEqual(max, 5);
  });
  
});



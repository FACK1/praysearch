const test = require('tape');

test('test is working', (t)=>{
  const actual = 2;
  const expected= 2;
  t.equal(actual,expected, 'should return' +actual +'=' + expected);
  t.end()
})

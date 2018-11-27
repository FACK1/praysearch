var test = require('tape')
var tps = require('./praysearch.js')
const supertest = require('supertest');
const router = require('./router');

test('testing for test', function(t){
    t.deepEqual(2,2, "testing for test")
    t.end();
})

test('check status code is 200', (t) => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err)
      t.equal(res.statusCode, 200, 'response should 200');
      t.end();
    });
});

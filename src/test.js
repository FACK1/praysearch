var test = require('tape')
var tps = require('./praysearch.js')
var supertest = require('supertest')
var router = require('./router')

test('testing for test', function (t) {
  t.deepEqual(2, 2, 'testing for test')
  t.end()
})

test('check status code is 200', (t) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err)
      t.equal(res.statusCode, 200, 'check status code is 200')
      t.end()
    })
})

test('Testing public', (t) => {
  supertest(router)
    .get('/client/index.html')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((error, result) => {
      t.error(error)
      t.equal(result.statusCode, 200, 'Testing public')
      t.end()
    })
})

test('Testing searchPraytimes', (t) => {
  supertest(router)
    .get(`/searchPraytimes?city=hebron&country=palestine`)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((error, result) => {
      t.error(error)
      t.equal(result.statusCode, 200, 'Testing searchPraytimes')
      t.end()
    })
})

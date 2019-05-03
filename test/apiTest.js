const request = require('supertest');

const app = require('../server/server.js');

describe('GET /api/getallart/', function () {
  it('responds with array of art objects', function (done) {
    request(app)
      .get('/api/getallart')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
});

describe('GET /api/getallartpricesascending', function () {
  it('responds with array of art objects', function (done) {
    request(app)
      .get('/api/getallartpricesascending')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
})



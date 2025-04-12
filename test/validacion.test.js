const request = require('supertest');
const app = require('../index');

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

describe('GET /ping', () => {
  it('responde con pong', async () => {
    const res = await request(app).get('/ping');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('pong');
    done();
  });
});

afterAll(done => {
  done();
});
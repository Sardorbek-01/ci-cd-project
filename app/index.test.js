const request = require('supertest');
const app = require('./index');

describe('App Tests', () => {
  
  test('GET / — 200 qaytaradi', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Salom! CI/CD ishlayapti!');
  });

  test('GET /health — healthy qaytaradi', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

});


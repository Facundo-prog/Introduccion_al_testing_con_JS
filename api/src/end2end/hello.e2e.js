const request = require('supertest');
const createApp = require('../app');

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test endpoint [GET] /', () => {
    test('shounld return "Hello World!"', () => request(app)
      .get('/')
      .expect(200)
      .then((res) => {
        expect(res.text).toEqual('Hello World!');
      }));
  });
});

const request = require('supertest');
const createApp = require('../app');
const { generateManyBook } = require('../fakes/book.fake');

const mockFakeBooks = generateManyBook(5);
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: () => mockFakeBooks,
  create: () => {},
})));

describe('Test for books', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3002);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test endpoint [GET] /api/v1/books', () => {
    test('shounld return a list books', async () => request(app)
      .get('/api/v1/books')
      .expect(200)
      .then(({ body }) => {
        expect(body.length).toEqual(5);
      }));
  });
});

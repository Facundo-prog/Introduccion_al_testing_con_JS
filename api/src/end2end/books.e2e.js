const request = require('supertest');
const { MongoClient } = require('mongodb');
const { config } = require('../config');
const createApp = require('../app');

describe('Test for books', () => {
  let app = null;
  let server = null;
  let db = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3003);
    const client = new MongoClient(config.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    db = client.db(config.dbTestName);
  });

  afterAll(async () => {
    await server.close();
    await db.collection('books').drop();
  });

  describe('Test endpoint [GET] /api/v1/books', () => {
    test('shounld return a list books', async () => {
      const seedData = await db.collection('books').insertMany([
        {
          _id: 0,
          year: 1999,
          author: 'Facu',
        },
        {
          _id: 1,
          year: 2010,
          author: 'Juan',
        },
        {
          _id: 2,
          year: 2020,
          author: 'Maria',
        },
      ]);

      console.log(seedData);

      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});

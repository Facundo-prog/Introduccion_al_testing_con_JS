const BoocksService = require('./books.service');
const { generateManyBook, generateOneBook } = require('../fakes/book.fake');

const mockSpyGetAll = jest.fn();

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockSpyGetAll,
  create: () => {},
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BoocksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should resturn a one book', async () => {
      const fakeBooks = generateManyBook(5);
      mockSpyGetAll.mockResolvedValue(fakeBooks);

      const books = await service.getBooks({});
      expect(books.length).toEqual(fakeBooks.length);
      console.log(books);

      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    });
    test('should resturn a list books', async () => {
      const fakeBook = generateOneBook();
      mockSpyGetAll.mockResolvedValue(fakeBook);

      const books = await service.getBooks({ name: 'Los Pitufos' });
      console.log(books);
      expect(books.name).toEqual(fakeBook.name);

      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', { name: 'Los Pitufos' });
    });
  });
});
